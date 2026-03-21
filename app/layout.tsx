import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import logo from "../img/logo.svg";
console.log({logo});
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kawan Araújo — Desenvolvedor Fullstack',
  description:
    'Portfólio de Kawan Araújo, Desenvolvedor Fullstack especializado em Next.js, NestJS e TypeScript.',
  icons: {
    icon: logo.src,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} bg-colmeia text-gray-100 font-corpo antialiased`}
      >
        {children}

        <Script
          src="https://kit.fontawesome.com/e728814d1c.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
