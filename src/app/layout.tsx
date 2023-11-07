import type { Metadata } from 'next'
import { firaCode, inter } from './fonts'

import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio // Mauricio Aires',
  description:
    'Meu nome é Mauricio Aires, desenvolvo interfaces modernas e de alta qualidade, concentrado em performance, animações, responsividade e SEO.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="dark scroll-smooth antialiased">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg" sizes="32x32" />
      </head>
      <body className={`${firaCode.variable} ${inter.variable}`}>
        <div className="min-h-screen font-inter">
          <main className="flex min-h-screen  max-w-[100vw] flex-col items-center text-airs-slate dark:bg-airs-navy">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
