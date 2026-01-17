"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"
import { Search, Shield, CreditCard, Settings, Lock } from "lucide-react"

const categories = [
  {
    id: "services",
    name: "Services",
    icon: Shield,
    faqs: [
      {
        question: "What types of penetration testing do you offer?",
        answer:
          "We offer comprehensive penetration testing services including web application testing, network infrastructure testing, mobile application security testing, API security assessments, cloud security testing, and social engineering simulations. Each test is customized based on your specific environment and risk profile.",
      },
      {
        question: "How long does a typical security assessment take?",
        answer:
          "The duration varies based on scope and complexity. A basic web application test typically takes 5-7 business days, while comprehensive network assessments may require 2-3 weeks. We provide detailed timelines during the scoping phase, and you'll receive regular status updates throughout the engagement.",
      },
      {
        question: "Do you provide remediation services?",
        answer:
          "While our primary focus is on assessment and identification, we provide detailed remediation guidance with every finding. For Pro and Enterprise customers, we offer hands-on remediation support and can work directly with your development and IT teams to help implement fixes correctly.",
      },
      {
        question: "What happens if you find a critical vulnerability during testing?",
        answer:
          "Critical findings are reported immediately through our secure communication channel, allowing your team to begin remediation while testing continues. We never wait until the final report to share urgent issues. For 24/7 coverage, Enterprise customers receive immediate phone notification for critical findings.",
      },
    ],
  },
  {
    id: "pricing",
    name: "Pricing",
    icon: CreditCard,
    faqs: [
      {
        question: "How is pricing determined for each engagement?",
        answer:
          "Pricing is based on the scope of the engagement, including the number of applications, IP ranges, or systems to be tested, the depth of testing required, and any compliance requirements. We provide transparent, fixed-price quotes after our initial scoping call — no surprise charges.",
      },
      {
        question: "Do you offer discounts for annual commitments?",
        answer:
          "Yes, annual Pro plan subscribers save 17% compared to monthly billing. Enterprise customers often receive additional volume discounts based on the scope of their security program. We also offer special pricing for qualified nonprofits and early-stage startups.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards (Visa, Mastercard, American Express), ACH bank transfers, and wire transfers for enterprise customers. All payments are processed securely through our PCI-compliant payment provider.",
      },
      {
        question: "Is there a minimum contract period?",
        answer:
          "Starter plans are per-assessment with no minimum commitment. Pro plans have a minimum 3-month commitment to ensure we can deliver meaningful ongoing security improvements. Enterprise contracts are typically annual but can be customized based on your needs.",
      },
    ],
  },
  {
    id: "process",
    name: "Process",
    icon: Settings,
    faqs: [
      {
        question: "What is your testing methodology?",
        answer:
          "We follow industry-standard methodologies including OWASP, PTES, and NIST guidelines, customized for each engagement. Our approach combines automated scanning with manual testing by experienced security professionals to maximize coverage and minimize false positives.",
      },
      {
        question: "Will testing impact our production systems?",
        answer:
          "We take every precaution to minimize impact on your systems. Testing is scheduled during agreed-upon windows, and we use carefully controlled techniques. For production environments, we can use read-only scanning or test against staging environments first. Emergency stop procedures are always in place.",
      },
      {
        question: "How are test results delivered?",
        answer:
          "You'll receive a comprehensive report including an executive summary for leadership, detailed technical findings with evidence, risk ratings using CVSS scoring, and prioritized remediation recommendations. Reports are delivered through our secure portal, and we schedule a findings review call to walk through results.",
      },
      {
        question: "Do you offer re-testing after we fix vulnerabilities?",
        answer:
          "Yes, verification testing is included with all plans. Starter plans include one re-test, while Pro and Enterprise plans include unlimited re-testing. This ensures that fixes are properly implemented and no new issues were introduced during remediation.",
      },
    ],
  },
  {
    id: "security",
    name: "Security & Privacy",
    icon: Lock,
    faqs: [
      {
        question: "How do you protect our confidential information?",
        answer:
          "All engagements are covered by comprehensive NDAs. Our team follows strict data handling procedures, and all findings are transmitted through encrypted channels. Test data is securely deleted according to agreed-upon retention policies. We maintain SOC 2 Type II certification for our own operations.",
      },
      {
        question: "Who has access to our test results?",
        answer:
          "Access is strictly limited to the assigned testing team and your designated contacts. We never share client information, findings, or any data with third parties without explicit written consent. You maintain full ownership of all deliverables.",
      },
      {
        question: "Can you sign our security questionnaire or vendor assessment?",
        answer:
          "Yes, we regularly complete security questionnaires and vendor assessments for our clients. We can also provide our SOC 2 Type II report, penetration test summary, and other compliance documentation upon request under NDA.",
      },
      {
        question: "Do your testers undergo background checks?",
        answer:
          "Yes, all SuffixSec security professionals undergo comprehensive background checks and hold relevant security certifications (OSCP, CISSP, CEH, etc.). Our team members are bound by strict confidentiality agreements and follow our code of professional ethics.",
      },
    ],
  },
]

export function FaqContent() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories

    const query = searchQuery.toLowerCase()
    return categories
      .map((category) => ({
        ...category,
        faqs: category.faqs.filter(
          (faq) => faq.question.toLowerCase().includes(query) || faq.answer.toLowerCase().includes(query),
        ),
      }))
      .filter((category) => category.faqs.length > 0)
  }, [searchQuery])

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={cn(
            "max-w-4xl mx-auto transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          {/* Search Input */}
          <div className="relative mb-12">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg bg-card border-border focus:border-primary/50"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setActiveCategory(null)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                activeCategory === null
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground",
                )}
              >
                <category.icon className="h-4 w-4" />
                {category.name}
              </button>
            ))}
          </div>

          {/* FAQ Accordions */}
          {filteredCategories.length > 0 ? (
            <div className="space-y-8">
              {filteredCategories
                .filter((category) => !activeCategory || category.id === activeCategory)
                .map((category) => (
                  <div key={category.id}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                        <category.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
                        {category.name}
                      </h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-3">
                      {category.faqs.map((faq, index) => (
                        <AccordionItem
                          key={index}
                          value={`${category.id}-${index}`}
                          className="border border-border rounded-xl px-6 bg-card/50 data-[state=open]:border-primary/30"
                        >
                          <AccordionTrigger className="text-left font-[family-name:var(--font-heading)] font-medium text-foreground hover:text-primary hover:no-underline py-5">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No results found for "{searchQuery}"</p>
              <p className="text-muted-foreground text-sm mt-2">Try a different search term or browse by category</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
