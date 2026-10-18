import type { ReactNode } from 'react'

type Props = {
  id: string
  eyebrow: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
}

export function Section({ id, eyebrow, title, subtitle, children, className = '' }: Props) {
  return (
    <section id={id} className={`scroll-mt-16 py-20 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-500">{eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          {subtitle && <p className="mt-4 text-lg text-stone-600 dark:text-stone-400">{subtitle}</p>}
        </div>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  )
}
