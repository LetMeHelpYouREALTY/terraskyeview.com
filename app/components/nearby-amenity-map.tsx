'use client'

import { useCallback, useEffect, useId, useRef, useState } from 'react'
import {
  AMENITY_CATEGORIES,
  AMENITIES_MAP_EMBED,
  COMMUNITY_CENTER,
  COMMUNITY_NAME,
  type AmenityCategoryId,
  curatedPlacesForCategory,
  getCategoryById,
} from '@/lib/amenities'
import {
  directionsUrlForAddress,
  getGoogleMapsApiKey,
  getGoogleMapsMapId,
  loadGoogleMapsApi,
} from '@/lib/google-maps-loader'
import { SITE_ADDRESS } from '@/lib/site'

function placeDisplayName(displayName: unknown): string {
  if (!displayName) return 'Place'
  if (typeof displayName === 'string') return displayName
  if (
    typeof displayName === 'object' &&
    displayName !== null &&
    'text' in displayName
  ) {
    const text = (displayName as { text?: string }).text
    return text ?? 'Place'
  }
  return 'Place'
}

type NearbyAmenityMapProps = {
  height?: number
  defaultCategory?: AmenityCategoryId
  showCategoryFilters?: boolean
  mapAriaLabel?: string
}

type MapPlace = {
  id: string
  name: string
  address: string
  rating?: number
  lat: number
  lng: number
  isCommunity?: boolean
}

const DEFAULT_CATEGORY: AmenityCategoryId = 'grocery'
const SEARCH_RADIUS_METERS = 8000

function useInView(rootMargin = '200px') {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || inView) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [inView])

  return { ref, inView }
}

function curatedToMapPlaces(categoryId: AmenityCategoryId): MapPlace[] {
  const communityAddress = `${SITE_ADDRESS.streetAddress}, ${SITE_ADDRESS.addressLocality}, ${SITE_ADDRESS.addressRegion} ${SITE_ADDRESS.postalCode}`

  const community: MapPlace = {
    id: 'community',
    name: COMMUNITY_NAME,
    address: communityAddress,
    lat: COMMUNITY_CENTER.latitude,
    lng: COMMUNITY_CENTER.longitude,
    isCommunity: true,
  }

  const curated = curatedPlacesForCategory(categoryId).map((place, index) => ({
    id: `curated-${categoryId}-${index}`,
    name: place.name,
    address: place.address,
    lat: COMMUNITY_CENTER.latitude,
    lng: COMMUNITY_CENTER.longitude,
  }))

  return [community, ...curated]
}

export default function NearbyAmenityMap({
  height = 480,
  defaultCategory = DEFAULT_CATEGORY,
  showCategoryFilters = true,
  mapAriaLabel = 'Interactive map of nearby amenities around Terra at Skyeview in Skye Canyon, Las Vegas',
}: NearbyAmenityMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<google.maps.Map | null>(null)
  const markersRef = useRef<google.maps.Marker[]>([])
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null)
  const { ref: lazyRootRef, inView } = useInView()
  const [activeCategory, setActiveCategory] =
    useState<AmenityCategoryId>(defaultCategory)
  const [useFallback, setUseFallback] = useState(false)
  const [listPlaces, setListPlaces] = useState<MapPlace[]>(() =>
    curatedToMapPlaces(defaultCategory),
  )
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const filtersId = useId()

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((m) => m.setMap(null))
    markersRef.current = []
  }, [])

  const renderMarkers = useCallback(
    (map: google.maps.Map, places: MapPlace[]) => {
      clearMarkers()
      const infoWindow =
        infoWindowRef.current ?? new google.maps.InfoWindow()
      infoWindowRef.current = infoWindow

      const bounds = new google.maps.LatLngBounds()
      bounds.extend({
        lat: COMMUNITY_CENTER.latitude,
        lng: COMMUNITY_CENTER.longitude,
      })

      places.forEach((place) => {
        const position = { lat: place.lat, lng: place.lng }
        bounds.extend(position)

        const marker = new google.maps.Marker({
          map,
          position,
          title: place.name,
          zIndex: place.isCommunity ? 1000 : 1,
        })

        const ratingLine =
          place.rating != null
            ? `<p style="margin:4px 0;font-size:13px">Rating: ${place.rating.toFixed(1)}</p>`
            : ''

        const content = `
          <div style="max-width:240px;font-family:system-ui,sans-serif">
            <strong>${place.name}</strong>
            ${place.isCommunity ? '<p style="margin:4px 0;font-size:12px;color:#6b7280">Your community</p>' : ''}
            ${ratingLine}
            <p style="margin:4px 0;font-size:13px">${place.address}</p>
            <a href="${directionsUrlForAddress(place.address)}" target="_blank" rel="noopener noreferrer" style="font-size:13px;color:#2563eb">Directions</a>
          </div>
        `

        marker.addListener('click', () => {
          infoWindow.setContent(content)
          infoWindow.open({ map, anchor: marker })
        })

        markersRef.current.push(marker)
      })

      if (places.length > 1) {
        map.fitBounds(bounds, 48)
      } else {
        map.setCenter({
          lat: COMMUNITY_CENTER.latitude,
          lng: COMMUNITY_CENTER.longitude,
        })
        map.setZoom(14)
      }
    },
    [clearMarkers],
  )

  const fetchPlacesForCategory = useCallback(
    async (categoryId: AmenityCategoryId): Promise<MapPlace[]> => {
      const apiKey = getGoogleMapsApiKey()
      if (!apiKey) {
        throw new Error('missing key')
      }

      await loadGoogleMapsApi(apiKey)
      const mapsLib = (await google.maps.importLibrary(
        'maps',
      )) as google.maps.MapsLibrary
      const placesLib = (await google.maps.importLibrary(
        'places',
      )) as google.maps.PlacesLibrary

      if (!mapInstanceRef.current && mapContainerRef.current) {
        const mapId = getGoogleMapsMapId()
        mapInstanceRef.current = new mapsLib.Map(mapContainerRef.current, {
          center: {
            lat: COMMUNITY_CENTER.latitude,
            lng: COMMUNITY_CENTER.longitude,
          },
          zoom: 14,
          mapId: mapId || undefined,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
        })
      }

      const category = getCategoryById(categoryId)
      const { Place } = placesLib

      const request = {
        fields: [
          'displayName',
          'location',
          'formattedAddress',
          'rating',
          'id',
        ],
        locationRestriction: {
          center: {
            lat: COMMUNITY_CENTER.latitude,
            lng: COMMUNITY_CENTER.longitude,
          },
          radius: SEARCH_RADIUS_METERS,
        },
        includedPrimaryTypes: category.googlePrimaryTypes,
        maxResultCount: 15,
      }

      const { places } = await Place.searchNearby(request)

      const communityAddress = `${SITE_ADDRESS.streetAddress}, ${SITE_ADDRESS.addressLocality}, ${SITE_ADDRESS.addressRegion} ${SITE_ADDRESS.postalCode}`

      const community: MapPlace = {
        id: 'community',
        name: COMMUNITY_NAME,
        address: communityAddress,
        lat: COMMUNITY_CENTER.latitude,
        lng: COMMUNITY_CENTER.longitude,
        isCommunity: true,
      }

      const nearby = (places ?? []).flatMap((place, index) => {
        const loc = place.location
        if (!loc) return []
        const item: MapPlace = {
          id: place.id ?? `place-${index}`,
          name: placeDisplayName(place.displayName),
          address: place.formattedAddress ?? '',
          rating: place.rating ?? undefined,
          lat: loc.lat(),
          lng: loc.lng(),
        }
        return [item]
      })

      return [community, ...nearby]
    },
    [],
  )

  useEffect(() => {
    if (!inView) return

    const apiKey = getGoogleMapsApiKey()
    if (!apiKey) {
      setUseFallback(true)
      setListPlaces(curatedToMapPlaces(activeCategory))
      setStatusMessage(
        'Map preview mode — add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in Vercel for live nearby search.',
      )
      return
    }

    let cancelled = false

    async function run() {
      try {
        setStatusMessage('Loading nearby places…')
        const places = await fetchPlacesForCategory(activeCategory)
        if (cancelled) return
        setUseFallback(false)
        setListPlaces(places)
        setStatusMessage(null)
        if (mapInstanceRef.current) {
          renderMarkers(mapInstanceRef.current, places)
        }
      } catch {
        if (cancelled) return
        setUseFallback(true)
        setListPlaces(curatedToMapPlaces(activeCategory))
        setStatusMessage(
          'Showing curated Skye Canyon places while the interactive map is unavailable.',
        )
      }
    }

    void run()
    return () => {
      cancelled = true
    }
  }, [inView, activeCategory, fetchPlacesForCategory, renderMarkers])

  useEffect(() => {
    if (useFallback || !mapInstanceRef.current) return
    renderMarkers(mapInstanceRef.current, listPlaces)
  }, [listPlaces, useFallback, renderMarkers])

  const onCategoryChange = (id: AmenityCategoryId) => {
    setActiveCategory(id)
  }

  return (
    <div ref={lazyRootRef} className="space-y-4">
      {showCategoryFilters ? (
        <div
          role="tablist"
          aria-label="Filter nearby amenities by category"
          id={filtersId}
          className="flex flex-wrap gap-2"
        >
          {AMENITY_CATEGORIES.map((cat) => {
            const selected = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`${filtersId}-panel`}
                aria-label={cat.ariaLabel}
                onClick={() => onCategoryChange(cat.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  selected
                    ? 'bg-[#0b1c2c] text-white'
                    : 'border border-[#0b1c2c]/15 bg-white text-[#0b1c2c] hover:border-[#c4a35a]'
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>
      ) : null}

      {statusMessage ? (
        <p className="text-sm text-[#0b1c2c]/70" role="status">{statusMessage}</p>
      ) : null}

      <div
        id={`${filtersId}-panel`}
        role="tabpanel"
        aria-label={mapAriaLabel}
        className="overflow-hidden rounded-2xl border border-[#0b1c2c]/10 bg-white shadow-sm"
        style={{ minHeight: height }}
      >
        {useFallback ? (
          <div className="grid lg:grid-cols-2">
            <iframe
              src={AMENITIES_MAP_EMBED}
              title="Map centered on Terra at Skyeview, 8592 Vanhoy Creek Street, Las Vegas NV 89166"
              width="100%"
              height={height}
              className="border-0 lg:min-h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="max-h-[520px] overflow-y-auto p-4 lg:max-h-none">
              <h3 className="font-serif text-lg text-[#0b1c2c]">
                Curated places ({getCategoryById(activeCategory).label})
              </h3>
              <ul className="mt-3 space-y-3">
                {listPlaces.map((place) => (
                  <li
                    key={place.id}
                    className="rounded-lg border border-[#0b1c2c]/10 p-3 text-sm"
                  >
                    <p className="font-semibold text-[#0b1c2c]">
                      {place.name}
                      {place.isCommunity ? (
                        <span className="ml-2 text-xs font-normal text-[#c4a35a]">
                          Community
                        </span>
                      ) : null}
                    </p>
                    <p className="mt-1 text-[#0b1c2c]/70">{place.address}</p>
                    <a
                      href={directionsUrlForAddress(place.address)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-[#0b1c2c] underline"
                    >
                      Directions
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div
            ref={mapContainerRef}
            style={{ height, width: '100%' }}
            aria-label={mapAriaLabel}
          />
        )}
      </div>
    </div>
  )
}
