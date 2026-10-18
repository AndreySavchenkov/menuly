import { useId, useState } from 'react'
import { ChevronDown, Star } from 'lucide-react'
import { faq, testimonials } from '../data'
import { Section } from './Section'

export function Testimonials() {
  return (
    <Section
      id="reviews"
      eyebrow="Loved by owners"
      title="Less reprinting, happier guests"
      className="bg-white dark:bg-ink-900/60"
    >
      <ul className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <li key={t.name} className="rounded-3xl border border-stone-200 p-6 dark:border-white/10">
            <div className="flex gap-0.5 text-brand-500" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} size={16} fill="currentColor" aria-hidden />
              ))}
            </div>
            <blockquote className="mt-4 leading-relaxed">“{t.quote}”</blockquote>
            <p className="mt-5 text-sm font-semibold">{t.name}</p>
            <p className="text-sm text-stone-500">{t.role}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  const id = useId()

  return (
    <li className="border-b border-stone-200 dark:border-white/10">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-medium"
        >
          {q}
          <ChevronDown
            size={20}
            aria-hidden
            className={`shrink-0 text-stone-500 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          />
        </button>
      </h3>
      <div
        id={id}
        className={`grid transition-[grid-template-rows] duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <p className="overflow-hidden text-stone-600 dark:text-stone-400">
          <span className="block pb-5">{a}</span>
        </p>
      </div>
    </li>
  )
}

export function Faq() {
  return (
    <Section id="faq" eyebrow="FAQ" title="Questions? Answers.">
      <ul className="mx-auto max-w-3xl">
        {faq.map((item) => (
          <FaqItem key={item.q} {...item} />
        ))}
      </ul>
    </Section>
  )
}
