export type MenuTheme = {
  id: string
  name: string
  venue: string
  bg: string
  card: string
  text: string
  muted: string
  accent: string
  accentText: string
  font: 'sans' | 'display'
}

export const menuThemes: MenuTheme[] = [
  {
    id: 'espresso',
    name: 'Espresso',
    venue: 'Kawiarnia Rondo',
    bg: '#1c1410',
    card: '#2a1f18',
    text: '#f5ebe0',
    muted: '#b8a48f',
    accent: '#e0a458',
    accentText: '#1c1410',
    font: 'display',
  },
  {
    id: 'matcha',
    name: 'Matcha',
    venue: 'Green Leaf Café',
    bg: '#f3f6ee',
    card: '#ffffff',
    text: '#1f2a1c',
    muted: '#6b7a63',
    accent: '#4d7c3a',
    accentText: '#ffffff',
    font: 'sans',
  },
  {
    id: 'neon',
    name: 'Neon',
    venue: 'Night Owl Bar',
    bg: '#0b0b1a',
    card: '#16163a',
    text: '#eef0ff',
    muted: '#9a9cc9',
    accent: '#ff3d9a',
    accentText: '#ffffff',
    font: 'sans',
  },
]

export const menuCategories = ['Coffee', 'Bakery', 'Brunch', 'Drinks'] as const

export type MenuCategory = (typeof menuCategories)[number]

export type MenuItem = {
  name: string
  description: string
  price: number
  category: MenuCategory
  tag?: string
}

export const menuItems: MenuItem[] = [
  { name: 'Flat White', description: 'Double ristretto, silky milk', price: 14, category: 'Coffee', tag: 'Popular' },
  { name: 'Espresso Tonic', description: 'Single origin, citrus tonic', price: 16, category: 'Coffee' },
  { name: 'Cappuccino', description: 'Classic, cocoa on top', price: 13, category: 'Coffee' },
  { name: 'V60 Filter', description: 'Ethiopia Yirgacheffe', price: 17, category: 'Coffee', tag: 'New' },
  { name: 'Cardamom Bun', description: 'Baked every morning', price: 12, category: 'Bakery', tag: 'Popular' },
  { name: 'Butter Croissant', description: 'French butter, 36 layers', price: 10, category: 'Bakery' },
  { name: 'Pistachio Cheesecake', description: 'Sicilian pistachio cream', price: 19, category: 'Bakery', tag: 'New' },
  { name: 'Avocado Toast', description: 'Sourdough, chili flakes, lime', price: 26, category: 'Brunch', tag: 'Vegan' },
  { name: 'Shakshuka', description: 'Two eggs, feta, warm pita', price: 32, category: 'Brunch', tag: 'Popular' },
  { name: 'Granola Bowl', description: 'Greek yogurt, berries, honey', price: 22, category: 'Brunch' },
  { name: 'Iced Matcha Latte', description: 'Ceremonial grade, oat milk', price: 18, category: 'Drinks', tag: 'New' },
  { name: 'Fresh Lemonade', description: 'Mint, lime, cane sugar', price: 15, category: 'Drinks' },
  { name: 'Hibiscus Iced Tea', description: 'Cold brewed, no sugar', price: 14, category: 'Drinks' },
]

export const features = [
  {
    icon: 'QrCode',
    title: 'One QR, always up to date',
    text: 'Change prices or sold-out items in seconds. Guests see updates instantly — no reprinting.',
  },
  {
    icon: 'Palette',
    title: 'Themes for every brand',
    text: 'Pick a theme or set your own colors and fonts. Run multiple venues from one account.',
  },
  {
    icon: 'Languages',
    title: 'Multilingual menus',
    text: 'Polish, English, German and more. The menu follows the guest’s phone language.',
  },
  {
    icon: 'Smartphone',
    title: 'Mobile-first & fast',
    text: 'Loads in under a second on 3G. No app download, works on every phone.',
  },
  {
    icon: 'Leaf',
    title: 'Allergens & dietary tags',
    text: 'Vegan, gluten-free, spicy — guests filter the menu to what they can eat.',
  },
  {
    icon: 'BarChart3',
    title: 'Simple analytics',
    text: 'See which dishes guests look at most and when your menu gets the most views.',
  },
] as const

export const steps = [
  { title: 'Add your menu', text: 'Import from a PDF or type it in. Photos are optional.' },
  { title: 'Choose a theme', text: 'Match your brand colors, logo and fonts in a few clicks.' },
  { title: 'Print the QR', text: 'Put it on tables. Update the menu anytime from your phone.' },
]

export type Plan = {
  name: string
  monthly: number
  description: string
  features: string[]
  highlighted?: boolean
}

export const plans: Plan[] = [
  {
    name: 'Starter',
    monthly: 0,
    description: 'For a small café trying digital menus.',
    features: ['1 menu, up to 30 items', '1 theme', 'QR code download', 'Menuly branding'],
  },
  {
    name: 'Pro',
    monthly: 49,
    description: 'For restaurants that update their menu often.',
    features: ['Unlimited items & menus', 'All themes + custom colors', '5 languages', 'Allergen filters', 'Analytics'],
    highlighted: true,
  },
  {
    name: 'Group',
    monthly: 129,
    description: 'For chains and agencies with many venues.',
    features: ['Up to 10 venues', 'Per-client themes', 'Team roles', 'Priority support', 'Custom domain'],
  },
]

export const testimonials = [
  {
    quote: 'We change our lunch menu every day. Before Menuly it meant reprinting — now it takes a minute.',
    name: 'Marta K.',
    role: 'Owner, bistro in Poznań',
  },
  {
    quote: 'Tourists love that the menu opens in their language automatically. Fewer questions for staff.',
    name: 'Tomasz W.',
    role: 'Manager, café in Kraków',
  },
  {
    quote: 'I run menus for six clients from one account, each with its own theme. Huge time saver.',
    name: 'Ola N.',
    role: 'Marketing agency',
  },
]

export const faq = [
  {
    q: 'Do guests need to install an app?',
    a: 'No. Guests scan the QR code and the menu opens in their browser instantly.',
  },
  {
    q: 'Can I use my own brand colors and logo?',
    a: 'Yes. On Pro and Group plans you can set custom colors, fonts and upload your logo.',
  },
  {
    q: 'What happens to my QR codes if I change the menu?',
    a: 'Nothing — the QR code stays the same. Only the content behind it updates.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Plans are month-to-month, and you can downgrade to Starter whenever you want.',
  },
]
