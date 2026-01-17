import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactContent } from "@/components/contact/contact-content"

export const metadata: Metadata = {
  title: "Contact Us — SuffixSec | Get in Touch",
  description:
    "Ready to secure your business? Contact SuffixSec to schedule a security consultation, request a quote, or learn more about our cybersecurity services.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <ContactContent />
      </main>
      <Footer />
    </>
  )
}
