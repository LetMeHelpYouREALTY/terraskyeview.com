const WIDGET_HTML =
  '<realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>'

export default function RealScoutSearch() {
  return (
    <div
      className="flex min-h-[420px] w-full justify-center"
      dangerouslySetInnerHTML={{ __html: WIDGET_HTML }}
    />
  )
}
