import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FaqHero } from "@/components/faq/faq-hero"
import { FaqContent } from "@/components/faq/faq-content"
import { FaqCta } from "@/components/faq/faq-cta"

export const metadata: Metadata = {
  title: "FAQ — SuffixSec | Frequently Asked Questions",
  description:
    "Find answers to common questions about our cybersecurity services, pricing, process, and security practices.",
}

export default function FaqPage() {
  return (
    <>
      <Header />
      <main>
        <FaqHero />
        <FaqContent />
        <FaqCta />
      </main>
      <Footer />
    </>
  )
}
