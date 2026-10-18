import { useState } from 'react'
import { Check } from 'lucide-react'
import { plans } from '../data'
import { Section } from './Section'

const YEARLY_DISCOUNT = 0.2

export function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <Section id="pricing" eyebrow="Pricing" title="Simple, honest pricing" subtitle="Start free. Upgrade when your menu grows.">
      <div className="mb-10 flex items-center justify-center gap-3 text-sm font-medium">
        <span className={yearly ? 'text-stone-500' : ''}>Monthly</span>
        <button
          type="button"
          role="switch"
          aria-checked={yearly}
          aria-label="Bill yearly"
          onClick={() => setYearly((v) => !v)}
          className={`relative h-7 w-12 rounded-full transition-colors ${yearly ? 'bg-brand-500' : 'bg-stone-300 dark:bg-stone-700'}`}
        >
          <span
            className={`absolute left-0 top-1 h-5 w-5 rounded-full bg-white shadow transition-transform ${
              yearly ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
        <span className={yearly ? '' : 'text-stone-500'}>
          Yearly <span className="text-brand-500">−20%</span>
        </span>
      </div>

      <ul className="grid gap-6 lg:grid-cols-3">
        {plans.map((p) => {
          const price = yearly ? Math.round(p.monthly * (1 - YEARLY_DISCOUNT)) : p.monthly
          return (
            <li
              key={p.name}
              className={`relative flex flex-col rounded-3xl border p-8 ${
                p.highlighted
                  ? 'border-brand-500 bg-stone-900 text-white shadow-2xl shadow-brand-500/20 dark:bg-ink-800'
                  : 'border-stone-200 bg-white dark:border-white/10 dark:bg-ink-900'
              }`}
            >
              {p.highlighted && (
                <span className="absolute -top-3 left-8 rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className={`mt-1 min-h-10 text-sm ${p.highlighted ? 'text-stone-300' : 'text-stone-600 dark:text-stone-400'}`}>
                {p.description}
              </p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-4xl font-semibold">{price} zł</span>
                <span className={p.highlighted ? 'text-stone-400' : 'text-stone-500'}>/ month</span>
              </p>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check size={18} className="mt-px shrink-0 text-brand-500" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`mt-8 rounded-full py-3 text-center font-semibold transition ${
                  p.highlighted
                    ? 'bg-brand-500 text-white hover:bg-brand-600'
                    : 'border border-stone-300 hover:bg-stone-100 dark:border-white/15 dark:hover:bg-white/5'
                }`}
              >
                {p.monthly === 0 ? 'Start free' : `Choose ${p.name}`}
              </a>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
