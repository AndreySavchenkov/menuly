export function Logo() {
  return (
    <span className="flex items-center gap-2">
      <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
        <rect width="32" height="32" rx="8" className="fill-brand-500" />
        <path d="M9 22V10l7 7 7-7v12" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-display text-xl font-semibold tracking-tight">Menuly</span>
    </span>
  )
}
