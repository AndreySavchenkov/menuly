import { useState, type FormEvent } from 'react'
import { Check, Mail } from 'lucide-react'
import { Logo } from './Logo'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Status = 'idle' | 'loading' | 'success'

const YEAR = new Date().getFullYear()

export function Cta() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!EMAIL_RE.test(email.trim())) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setStatus('loading')
    // Demo only: simulate an API call
    setTimeout(() => setStatus('success'), 900)
  }

  return (
    <section id="cta" className="scroll-mt-16 px-4 py-20 sm:px-6">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-stone-900 px-6 py-16 text-center text-white sm:px-16 dark:bg-ink-800">
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-brand-500/40 blur-3xl"
        />
        <div className="relative">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Your new menu is 5 minutes away</h2>
          <p className="mx-auto mt-4 max-w-xl text-stone-300">
            Leave your email and we’ll send you a free Starter account. No credit card needed.
          </p>

          {status === 'success' ? (
            <p className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 font-medium" role="status">
              <Check size={18} className="text-brand-400" aria-hidden />
              Thanks! Check your inbox at {email.trim()}
            </p>
          ) : (
            <form onSubmit={onSubmit} noValidate className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <div className="relative flex-1">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" aria-hidden />
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@restaurant.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? 'email-error' : undefined}
                  className="w-full rounded-full border border-white/15 bg-white/10 py-3 pl-11 pr-4 text-white placeholder:text-stone-400 focus:border-brand-400 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="rounded-full bg-brand-500 px-6 py-3 font-semibold transition hover:bg-brand-600 disabled:opacity-70"
              >
                {status === 'loading' ? 'Sending…' : 'Get started'}
              </button>
            </form>
          )}
          {error && (
            <p id="email-error" className="mt-3 text-sm text-red-300" role="alert">
              {error}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-stone-200 py-10 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-stone-500 sm:flex-row sm:px-6">
        <Logo />
        <p>Demo project by Andrei Sauchankau · React, TypeScript, Tailwind CSS</p>
        <p>© {YEAR} Menuly</p>
      </div>
    </footer>
  )
}
