'use client'

import { useCallback, useEffect, useId, useRef, useState } from 'react'
import {
  AMENITY_CATEGORIES,
  COMMUNITY_CENTER,
  COMMUNITY_NAME,
  type AmenityCategoryId,
  curatedPlacesForCategory,
  getCategoryById,
} from '@/lib/amenities'
import { searchCategory } from '@/lib/amenity-places-search'
import {
  directionsUrlForAddress,
  getGoogleMapsApiKey,
  getGoogleMapsMapId,
  keylessMapEmbedUrl,
  loadGoogleMaps,
  mapsAuthFailed,
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
  lat: number
  lng: number
  isCommunity?: boolean
  mapsUri?: string
}

const DEFAULT_CATEGORY: AmenityCategoryId = 'grocery'

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

function communityAddressLine(): string {
  return `${SITE_ADDRESS.streetAddress}, ${SITE_ADDRESS.addressLocality}, ${SITE_ADDRESS.addressRegion} ${SITE_ADDRESS.postalCode}`
}

function curatedToMapPlaces(categoryId: AmenityCategoryId): MapPlace[] {
  const community: MapPlace = {
    id: 'community',
    name: COMMUNITY_NAME,
    address: communityAddressLine(),
    lat: COMMUNITY_CENTER.latitude,
    lng: COMMUNITY_CENTER.longitude,
    isCommunity: true,
  }

  const curated = curatedPlacesForCategory(categoryId).map((place, index) => ({
    id: `curated-${categoryId}-${index}`,
    name: place.name,
    address: place.address ?? `${SITE_ADDRESS.addressLocality}, ${SITE_ADDRESS.addressRegion} ${SITE_ADDRESS.postalCode}`,
    lat: COMMUNITY_CENTER.latitude,
    lng: COMMUNITY_CENTER.longitude,
  }))

  return [community, ...curated]
}

function buildInfoWindowElement(place: MapPlace): HTMLElement {
  const root = document.createElement('div')
  root.style.maxWidth = '240px'
  root.style.fontFamily = 'system-ui, sans-serif'

  const title = document.createElement('strong')
  title.textContent = place.name
  root.appendChild(title)

  if (place.isCommunity) {
    const tag = document.createElement('p')
    tag.style.margin = '4px 0'
    tag.style.fontSize = '12px'
    tag.style.color = '#6b7280'
    tag.textContent = 'Your community'
    root.appendChild(tag)
  }

  const addr = document.createElement('p')
  addr.style.margin = '4px 0'
  addr.style.fontSize = '13px'
  addr.textContent = place.address
  root.appendChild(addr)

  const link = document.createElement('a')
  link.href = place.mapsUri ?? directionsUrlForAddress(place.address)
  link.target = '_blank'
  link.rel = 'noopener noreferrer'
  link.style.fontSize = '13px'
  link.style.color = '#2563eb'
  link.textContent = 'Directions'
  root.appendChild(link)

  return root
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
  const filtersId = useId()

  const embedUrl = keylessMapEmbedUrl(
    COMMUNITY_CENTER.latitude,
    COMMUNITY_CENTER.longitude,
  )

  const enterFallback = useCallback((categoryId: AmenityCategoryId) => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current = null
    }
    clearMarkersRef(markersRef)
    if (mapContainerRef.current) {
      mapContainerRef.current.replaceChildren()
    }
    setUseFallback(true)
    setListPlaces(curatedToMapPlaces(categoryId))
  }, [])

  const clearMarkers = useCallback(() => {
    clearMarkersRef(markersRef)
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

        marker.addListener('click', () => {
          infoWindow.setContent(buildInfoWindowElement(place))
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

  const ensureMap = useCallback(async () => {
    const mapsLib = (await google.maps.importLibrary(
      'maps',
    )) as google.maps.MapsLibrary
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
    return mapInstanceRef.current
  }, [])

  const loadCategoryPlaces = useCallback(
    async (categoryId: AmenityCategoryId): Promise<MapPlace[]> => {
      const community: MapPlace = {
        id: 'community',
        name: COMMUNITY_NAME,
        address: communityAddressLine(),
        lat: COMMUNITY_CENTER.latitude,
        lng: COMMUNITY_CENTER.longitude,
        isCommunity: true,
      }

      const center = {
        lat: COMMUNITY_CENTER.latitude,
        lng: COMMUNITY_CENTER.longitude,
      }

      try {
        const places = await searchCategory(center, categoryId)
        const nearby = places.flatMap((place, index) => {
          const loc = place.location
          if (!loc) return []
          const json = loc.toJSON()
          const item: MapPlace = {
            id: place.id ?? `place-${index}`,
            name: placeDisplayName(place.displayName),
            address: place.formattedAddress ?? '',
            lat: json.lat,
            lng: json.lng,
            mapsUri: place.googleMapsURI ?? undefined,
          }
          return [item]
        })
        return [community, ...nearby]
      } catch {
        return curatedToMapPlaces(categoryId)
      }
    },
    [],
  )

  useEffect(() => {
    const onAuthFailure = () => {
      enterFallback(activeCategory)
    }
    window.addEventListener('gmaps:auth-failure', onAuthFailure)
    return () => window.removeEventListener('gmaps:auth-failure', onAuthFailure)
  }, [activeCategory, enterFallback])

  useEffect(() => {
    if (!inView) return

    if (mapsAuthFailed) {
      enterFallback(activeCategory)
      return
    }

    const apiKey = getGoogleMapsApiKey()
    if (!apiKey) {
      enterFallback(activeCategory)
      return
    }

    let cancelled = false

    const resolvedKey = apiKey

    async function run() {
      try {
        await loadGoogleMaps(resolvedKey)
        if (cancelled || mapsAuthFailed) {
          enterFallback(activeCategory)
          return
        }
        setUseFallback(false)
        const places = await loadCategoryPlaces(activeCategory)
        if (cancelled) return
        setListPlaces(places)
        const map = await ensureMap()
        if (cancelled || !map) return
        renderMarkers(map, places)
      } catch {
        if (cancelled) return
        enterFallback(activeCategory)
      }
    }

    void run()
    return () => {
      cancelled = true
    }
  }, [
    inView,
    activeCategory,
    loadCategoryPlaces,
    renderMarkers,
    ensureMap,
    enterFallback,
  ])

  useEffect(() => {
    if (useFallback || !mapInstanceRef.current) return
    renderMarkers(mapInstanceRef.current, listPlaces)
  }, [listPlaces, useFallback, renderMarkers])

  const onCategoryChange = (id: AmenityCategoryId) => {
    setActiveCategory(id)
  }

  const fallbackPanel = (
    <div className="grid lg:grid-cols-2" style={{ minHeight: height }}>
      <iframe
        src={embedUrl}
        title="Map centered on Terra at Skyeview, 8592 Vanhoy Creek Street, Las Vegas NV 89166"
        width="100%"
        height={height}
        className="border-0 lg:min-h-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div
        className="max-h-[520px] overflow-y-auto p-4 lg:max-h-none"
        style={{ minHeight: height }}
      >
        <h3 className="font-serif text-lg text-[#0b1c2c]">
          Featured places near {COMMUNITY_NAME} (
          {getCategoryById(activeCategory).label})
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
  )

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

      <div
        id={`${filtersId}-panel`}
        role="tabpanel"
        aria-label={mapAriaLabel}
        className="overflow-hidden rounded-2xl border border-[#0b1c2c]/10 bg-white shadow-sm"
        style={{ minHeight: height }}
      >
        {useFallback ? (
          fallbackPanel
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

function clearMarkersRef(markersRef: { current: google.maps.Marker[] }) {
  markersRef.current.forEach((m) => m.setMap(null))
  markersRef.current = []
}
