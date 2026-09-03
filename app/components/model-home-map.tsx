type ModelHomeMapProps = {
  height?: number
}

export default function ModelHomeMap({ height = 480 }: ModelHomeMapProps) {
  return (
    <iframe
      src="https://www.google.com/maps?q=8592+Vanhoy+Creek+Street,+Las+Vegas,+NV+89166&output=embed"
      title="Google Map pin for Terra at Skyeview at 8592 Vanhoy Creek Street, Las Vegas NV 89166"
      width="100%"
      height={height}
      className="border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  )
}
