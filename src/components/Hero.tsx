import { useState } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { menuThemes } from '../data'
import { PhoneMenu } from './PhoneMenu'

export function Hero() {
  const [themeId, setThemeId] = useState(menuThemes[0].id)
  const theme = menuThemes.find((t) => t.id === themeId) ?? menuThemes[0]

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-brand-400/25 blur-3xl dark:bg-brand-500/15"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-12 sm:px-6 md:pt-20 lg:grid-cols-2">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
            <Sparkles size={14} aria-hidden />
            New: per-client themes for agencies
          </p>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Digital menus your guests{' '}
            <span className="text-brand-500">actually enjoy</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600 dark:text-stone-400">
            Create a beautiful QR menu in minutes. Update prices instantly, switch themes for every venue, and
            serve guests in their own language.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3 font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600"
            >
              Create your menu
              <ArrowRight size={18} aria-hidden />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-stone-300 px-6 py-3 font-semibold transition hover:bg-stone-100 dark:border-white/15 dark:hover:bg-white/5"
            >
              See features
            </a>
          </div>
          <p className="mt-6 text-sm text-stone-500">Free plan available · No credit card required</p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <PhoneMenu theme={theme} />
          <div
            className="flex gap-1 rounded-full border border-stone-200 bg-white p-1 shadow-sm dark:border-white/10 dark:bg-ink-900"
            role="radiogroup"
            aria-label="Preview menu theme"
          >
            {menuThemes.map((t) => {
              const active = t.id === themeId
              return (
                <button
                  key={t.id}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setThemeId(t.id)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? 'bg-stone-900 text-white dark:bg-white dark:text-stone-900'
                      : 'text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white'
                  }`}
                >
                  <span className="h-3 w-3 rounded-full ring-1 ring-black/10" style={{ backgroundColor: t.accent }} />
                  {t.name}
                </button>
              )
            })}
          </div>
          <p className="text-xs text-stone-500">Try it — switch the theme live</p>
        </div>
      </div>
    </section>
  )
}
