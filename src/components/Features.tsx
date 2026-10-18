import { BarChart3, Languages, Leaf, Palette, QrCode, Smartphone, type LucideIcon } from 'lucide-react'
import { features, steps } from '../data'
import { Section } from './Section'

const icons: Record<(typeof features)[number]['icon'], LucideIcon> = {
  QrCode,
  Palette,
  Languages,
  Smartphone,
  Leaf,
  BarChart3,
}

export function Features() {
  return (
    <Section
      id="features"
      eyebrow="Features"
      title="Everything a modern menu needs"
      subtitle="Built for busy owners: fast to set up, easy to update, and great on any phone."
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => {
          const Icon = icons[f.icon]
          return (
            <li
              key={f.title}
              className="group rounded-3xl border border-stone-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-900/5 dark:border-white/10 dark:bg-ink-900"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white dark:bg-brand-500/10 dark:text-brand-400">
                <Icon size={22} aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 leading-relaxed text-stone-600 dark:text-stone-400">{f.text}</p>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}

export function HowItWorks() {
  return (
    <Section
      id="how"
      eyebrow="How it works"
      title="Live in three steps"
      className="bg-white dark:bg-ink-900/60"
    >
      <ol className="grid gap-8 md:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.title} className="relative text-center md:text-left">
            <span className="font-display text-5xl font-semibold text-brand-500/80">0{i + 1}</span>
            <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-stone-600 dark:text-stone-400">{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
