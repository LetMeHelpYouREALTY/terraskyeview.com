'use client'

import { useEffect, useRef, useState } from 'react'

const WIDGET_HTML = `<realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>`

export default function RealScoutSearch() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    const node = containerRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true)
          observer.disconnect()
        }
      },
      { rootMargin: '300px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      className="flex min-h-[420px] w-full justify-center"
    >
      {shouldRender ? (
        <div
          className="w-full max-w-[500px]"
          dangerouslySetInnerHTML={{ __html: WIDGET_HTML }}
        />
      ) : (
        <div
          className="h-[420px] w-full max-w-[500px] rounded-xl border border-gray-200 bg-white"
          aria-hidden="true"
        />
      )}
    </div>
  )
}
