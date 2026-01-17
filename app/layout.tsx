import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "SuffixSec — Security That Scales With You",
  description:
    "Enterprise-grade cybersecurity solutions. Penetration testing, security audits, vulnerability management, and compliance readiness for modern businesses.",
  keywords: ["cybersecurity", "penetration testing", "security audits", "vulnerability management", "compliance"],
  authors: [{ name: "SuffixSec" }],
  openGraph: {
    title: "SuffixSec — Security That Scales With You",
    description: "Enterprise-grade cybersecurity solutions for modern businesses.",
    url: "https://suffixsec.com",
    siteName: "SuffixSec",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SuffixSec — Security That Scales With You",
    description: "Enterprise-grade cybersecurity solutions for modern businesses.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

export const viewport = {
  themeColor: "#0B0F17",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
