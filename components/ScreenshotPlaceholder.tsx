// Temporary placeholder — swap for real screenshots (see README).
export default function ScreenshotPlaceholder({
  label,
  ratio = "aspect-[16/10]",
  className = "",
}: {
  label: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-xl border border-line bg-[#ededed] ${ratio} ${className}`}
    >
      <div className="absolute inset-x-0 top-0 flex h-8 items-center gap-1.5 border-b border-line bg-[#e2e2e2] px-3">
        <span className="h-2 w-2 rounded-full bg-[#c9c9c9]" />
        <span className="h-2 w-2 rounded-full bg-[#c9c9c9]" />
        <span className="h-2 w-2 rounded-full bg-[#c9c9c9]" />
      </div>
      <div className="px-6 text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted">Screenshot</p>
        <p className="mt-1 text-sm font-medium text-ink/60">{label}</p>
      </div>
    </div>
  );
}
