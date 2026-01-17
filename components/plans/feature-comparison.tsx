"use client"

import { SectionHeader } from "@/components/ui/section-header"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"
import { Check, X } from "lucide-react"

const features = [
  {
    category: "Testing & Assessment",
    items: [
      { name: "Web Application Testing", starter: true, pro: true, enterprise: true },
      { name: "Network Penetration Testing", starter: "Basic", pro: true, enterprise: true },
      { name: "Mobile App Testing", starter: false, pro: true, enterprise: true },
      { name: "API Security Testing", starter: false, pro: true, enterprise: true },
      { name: "Cloud Security Assessment", starter: false, pro: "Limited", enterprise: true },
      { name: "Red Team Exercises", starter: false, pro: false, enterprise: true },
    ],
  },
  {
    category: "Monitoring & Management",
    items: [
      { name: "Vulnerability Scanning", starter: "Monthly", pro: "Continuous", enterprise: "Continuous" },
      { name: "Threat Intelligence", starter: false, pro: true, enterprise: true },
      { name: "Security Monitoring", starter: false, pro: "8x5", enterprise: "24/7" },
      { name: "Incident Response", starter: false, pro: "Business hours", enterprise: "24/7" },
    ],
  },
  {
    category: "Reporting & Support",
    items: [
      { name: "Executive Reports", starter: true, pro: true, enterprise: true },
      { name: "Technical Reports", starter: true, pro: true, enterprise: true },
      { name: "Remediation Guidance", starter: "Basic", pro: "Detailed", enterprise: "Hands-on" },
      { name: "Re-testing", starter: "1 included", pro: "Unlimited", enterprise: "Unlimited" },
      { name: "Support Response Time", starter: "48h", pro: "24h", enterprise: "1h" },
      { name: "Dedicated Account Manager", starter: false, pro: true, enterprise: true },
    ],
  },
  {
    category: "Compliance",
    items: [
      { name: "Compliance Reporting", starter: false, pro: true, enterprise: true },
      { name: "Audit Preparation", starter: false, pro: "Guidance", enterprise: "Full support" },
      { name: "Certification Support", starter: false, pro: false, enterprise: true },
    ],
  },
]

function FeatureValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return <Check className="h-5 w-5 text-success mx-auto" />
  }
  if (value === false) {
    return <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />
  }
  return <span className="text-sm text-muted-foreground">{value}</span>
}

export function FeatureComparison() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Compare Plans"
          title="Detailed Feature Comparison"
          description="See exactly what's included in each plan"
        />

        <div
          ref={ref}
          className={cn(
            "max-w-5xl mx-auto overflow-x-auto transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-[family-name:var(--font-heading)] text-foreground">Feature</th>
                <th className="text-center py-4 px-4 font-[family-name:var(--font-heading)] text-foreground w-28">
                  Starter
                </th>
                <th className="text-center py-4 px-4 font-[family-name:var(--font-heading)] text-primary w-28">Pro</th>
                <th className="text-center py-4 px-4 font-[family-name:var(--font-heading)] text-foreground w-28">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((category) => (
                <>
                  <tr key={category.category}>
                    <td
                      colSpan={4}
                      className="py-4 px-4 font-[family-name:var(--font-heading)] font-semibold text-foreground bg-secondary/30"
                    >
                      {category.category}
                    </td>
                  </tr>
                  {category.items.map((item) => (
                    <tr key={item.name} className="border-b border-border/50 hover:bg-secondary/20 transition-colors">
                      <td className="py-3 px-4 text-muted-foreground text-sm">{item.name}</td>
                      <td className="py-3 px-4 text-center">
                        <FeatureValue value={item.starter} />
                      </td>
                      <td className="py-3 px-4 text-center bg-primary/5">
                        <FeatureValue value={item.pro} />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <FeatureValue value={item.enterprise} />
                      </td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
