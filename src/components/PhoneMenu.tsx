import { useState } from 'react'
import { Search } from 'lucide-react'
import { menuCategories, menuItems, type MenuCategory, type MenuTheme } from '../data'

type Props = {
  theme: MenuTheme
}

export function PhoneMenu({ theme }: Props) {
  const [category, setCategory] = useState<MenuCategory>(menuCategories[0])
  const items = menuItems.filter((item) => item.category === category)

  return (
    <div className="relative mx-auto w-[280px] rounded-[2.75rem] border-[10px] border-stone-900 bg-stone-900 shadow-2xl shadow-black/30 dark:border-stone-800">
      <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-stone-900 dark:bg-stone-800" />
      <div
        className="h-[540px] overflow-hidden rounded-[2.1rem] transition-colors duration-500"
        style={{ backgroundColor: theme.bg, color: theme.text }}
      >
        <div className="px-5 pb-4 pt-10">
          <p className="text-[11px] uppercase tracking-[0.2em]" style={{ color: theme.muted }}>
            Menu
          </p>
          <h3 className={`mt-1 text-2xl font-semibold ${theme.font === 'display' ? 'font-display' : 'font-sans'}`}>
            {theme.venue}
          </h3>

          <div
            className="mt-4 flex items-center gap-2 rounded-xl px-3 py-2 text-xs transition-colors duration-500"
            style={{ backgroundColor: theme.card, color: theme.muted }}
          >
            <Search size={14} aria-hidden />
            Search dishes…
          </div>

          <div className="mt-4 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Menu categories">
            {menuCategories.map((c) => {
              const active = c === category
              return (
                <button
                  key={c}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setCategory(c)}
                  className="shrink-0 rounded-full px-3 py-1 text-xs font-medium transition-colors duration-300"
                  style={{
                    backgroundColor: active ? theme.accent : theme.card,
                    color: active ? theme.accentText : theme.muted,
                  }}
                >
                  {c}
                </button>
              )
            })}
          </div>
        </div>

        <ul className="space-y-2.5 px-5">
          {items.map((item) => (
            <li
              key={item.name}
              className="flex items-start justify-between gap-3 rounded-2xl p-3 transition-colors duration-500"
              style={{ backgroundColor: theme.card }}
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p className="truncate text-sm font-semibold">{item.name}</p>
                  {item.tag && (
                    <span
                      className="rounded-full px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide"
                      style={{ backgroundColor: theme.accent, color: theme.accentText }}
                    >
                      {item.tag}
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-[11px]" style={{ color: theme.muted }}>
                  {item.description}
                </p>
              </div>
              <p className="shrink-0 text-sm font-semibold" style={{ color: theme.accent }}>
                {item.price} zł
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
