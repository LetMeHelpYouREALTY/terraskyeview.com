'use client'

type HomebuyingKickerProps = {
  className?: string
}

export default function HomebuyingKicker({ className = '' }: HomebuyingKickerProps) {
  return (
    <p
      className={`text-sm font-semibold tracking-wide text-[#c4a35a] ${className}`.trim()}
    >
      Homebuying with Dr. Jan Duffy
    </p>
  )
}
