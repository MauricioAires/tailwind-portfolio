import { Fira_Code as FiraCode, Inter } from 'next/font/google'

export const firaCode = FiraCode({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
})
export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
})
