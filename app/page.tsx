import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/hero-section"
import { TrustSection } from "@/components/home/trust-section"
import { HighlightsSlider } from "@/components/home/highlights-slider"
import { FeaturesCards } from "@/components/home/features-cards"
import { ProcessSection } from "@/components/home/process-section"
import { PlansTeaser } from "@/components/home/plans-teaser"
import { MiniFaq } from "@/components/home/mini-faq"
import { FinalCta } from "@/components/home/final-cta"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <HighlightsSlider />
        <FeaturesCards />
        <ProcessSection />
        <PlansTeaser />
        <MiniFaq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
