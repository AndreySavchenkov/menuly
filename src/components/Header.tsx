import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { Logo } from './Logo'

const links = [
  { href: '#features', label: 'Features' },
  { href: '#how', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
]

type Props = {
  dark: boolean
  onToggleDark: () => void
}

export function Header({ dark, onToggleDark }: Props) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 transition-colors ${
        scrolled || open
          ? 'border-b border-stone-200/70 bg-stone-50/85 backdrop-blur dark:border-white/10 dark:bg-ink-950/85'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" aria-label="Menuly home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900 dark:text-stone-400 dark:hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleDark}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="rounded-full p-2 text-stone-600 transition-colors hover:bg-stone-200/70 dark:text-stone-300 dark:hover:bg-white/10"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="#cta"
            className="hidden rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-stone-700 sm:inline-block dark:bg-white dark:text-stone-900 dark:hover:bg-stone-200"
          >
            Start free
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="rounded-full p-2 text-stone-700 hover:bg-stone-200/70 md:hidden dark:text-stone-200 dark:hover:bg-white/10"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-stone-200/70 px-4 pb-4 md:hidden dark:border-white/10" aria-label="Mobile">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium text-stone-700 dark:text-stone-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-brand-500 py-3 text-center font-semibold text-white"
          >
            Start free
          </a>
        </nav>
      )}
    </header>
  )
}
