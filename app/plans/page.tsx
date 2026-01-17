import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PlansHero } from "@/components/plans/plans-hero"
import { PricingTable } from "@/components/plans/pricing-table"
import { FeatureComparison } from "@/components/plans/feature-comparison"
import { PricingFaq } from "@/components/plans/pricing-faq"
import { PlansCta } from "@/components/plans/plans-cta"

export const metadata: Metadata = {
  title: "Plans & Pricing — SuffixSec | Security Solutions for Every Business",
  description:
    "Flexible cybersecurity pricing options designed to match your security needs and budget. From startups to enterprises, we have a plan for you.",
}

export default function PlansPage() {
  return (
    <>
      <Header />
      <main>
        <PlansHero />
        <PricingTable />
        <FeatureComparison />
        <PricingFaq />
        <PlansCta />
      </main>
      <Footer />
    </>
  )
}
