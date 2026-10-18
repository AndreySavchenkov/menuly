import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features, HowItWorks } from './components/Features'
import { Pricing } from './components/Pricing'
import { Faq, Testimonials } from './components/Social'
import { Cta, Footer } from './components/Cta'

const STORAGE_KEY = 'menuly-theme'

function getInitialDark() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) return saved === 'dark'
  } catch {
    // storage unavailable
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export default function App() {
  const [dark, setDark] = useState(getInitialDark)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try {
      localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light')
    } catch {
      // storage unavailable
    }
  }, [dark])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-stone-900"
      >
        Skip to content
      </a>
      <Header dark={dark} onToggleDark={() => setDark((v) => !v)} />
      <main id="main">
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
