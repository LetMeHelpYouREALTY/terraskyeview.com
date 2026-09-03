import Image from 'next/image'
import { mediaUrl } from '@/lib/media'

type AgentPortraitProps = {
  size?: number
  className?: string
  priority?: boolean
}

export default function AgentPortrait({
  size = 96,
  className = '',
  priority = false,
}: AgentPortraitProps) {
  return (
    <Image
      src={mediaUrl('dr-jan-duffy.png')}
      alt="Dr. Jan Duffy, preferred buyer's agent for Terra at Skyeview in Skye Canyon, Las Vegas"
      width={size}
      height={size}
      priority={priority}
      className={`rounded-full object-cover ${className}`.trim()}
    />
  )
}
