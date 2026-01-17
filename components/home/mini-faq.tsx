"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/ui/section-header"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

const faqs = [
  {
    question: "How long does a typical penetration test take?",
    answer:
      "The duration varies based on scope, but most assessments take 1-3 weeks. We provide a detailed timeline after our initial discovery call and scope definition.",
  },
  {
    question: "What happens if you find critical vulnerabilities?",
    answer:
      "Critical findings are reported immediately through our secure communication channel, allowing your team to begin remediation while we continue testing. We never wait until the final report to share urgent issues.",
  },
  {
    question: "Do you offer ongoing security monitoring?",
    answer:
      "Yes, our Pro and Enterprise plans include continuous vulnerability scanning and monitoring. We also offer standalone managed detection and response (MDR) services.",
  },
  {
    question: "What compliance frameworks do you support?",
    answer:
      "We support all major frameworks including ISO 27001, SOC 2, PCI DSS, HIPAA, GDPR, and NIST. Our team can help you prepare for audits and maintain ongoing compliance.",
  },
  {
    question: "How do you ensure the confidentiality of our data?",
    answer:
      "All engagements are covered by strict NDAs. Our team follows secure handling procedures, and all findings are transmitted through encrypted channels. We can also work within your air-gapped environments if required.",
  },
]

export function MiniFaq() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeader badge="FAQ" title="Common Questions" description="Quick answers to help you get started" />

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

          <div className="text-center mt-8">
            <Button asChild variant="ghost" className="text-primary hover:text-primary/80">
              <Link href="/faq">
                View all FAQs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
