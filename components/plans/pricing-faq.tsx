"use client"

import { SectionHeader } from "@/components/ui/section-header"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Can I change plans at any time?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference immediately. When downgrading, the change takes effect at the start of your next billing cycle.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express), ACH bank transfers, and wire transfers for enterprise customers. All payments are processed securely through our PCI-compliant payment provider.",
  },
  {
    question: "Is there a minimum contract period?",
    answer:
      "Starter plans are per-assessment with no minimum commitment. Pro plans have a minimum 3-month commitment. Enterprise contracts are typically annual but can be customized based on your needs.",
  },
  {
    question: "What happens if I need more assessments than my plan includes?",
    answer:
      "You can purchase additional assessments at any time at our standard per-assessment rate. Pro and Enterprise customers receive discounted rates on additional services.",
  },
  {
    question: "Do you offer discounts for nonprofits or startups?",
    answer:
      "Yes, we offer special pricing for qualifying nonprofits and early-stage startups. Contact our sales team with details about your organization to learn more about available discounts.",
  },
  {
    question: "What's included in the 'unlimited assessments' Enterprise feature?",
    answer:
      "Enterprise unlimited assessments cover all standard penetration testing services for your in-scope systems. This includes web applications, APIs, networks, and cloud infrastructure. Red team exercises and specialized assessments may be scoped separately.",
  },
]

export function PricingFaq() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Pricing FAQ"
          title="Common Questions About Pricing"
          description="Everything you need to know about our plans and billing"
        />

        <div
          ref={ref}
          className={cn(
            "max-w-3xl mx-auto transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-card/50 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-[family-name:var(--font-heading)] font-medium text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
