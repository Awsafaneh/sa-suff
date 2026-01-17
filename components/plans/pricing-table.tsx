"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"
import { Check, Zap } from "lucide-react"

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses starting their security journey",
    monthlyPrice: 2499,
    yearlyPrice: 24990,
    priceLabel: "per assessment",
    yearlyLabel: "per year (10 assessments)",
    features: [
      "Basic penetration testing",
      "Web application scan",
      "Executive summary report",
      "Email support",
      "30-day remediation window",
      "1 re-test included",
    ],
    cta: "Get Started",
    ctaLink: "/contact?plan=starter",
  },
  {
    name: "Pro",
    description: "Comprehensive security for growing organizations",
    monthlyPrice: 7999,
    yearlyPrice: 79990,
    priceLabel: "per month",
    yearlyLabel: "per year (save 17%)",
    features: [
      "Full penetration testing suite",
      "Continuous vulnerability scanning",
      "Quarterly security audits",
      "Priority support (24h response)",
      "Compliance guidance",
      "Unlimited re-tests",
      "Monthly security reports",
      "Dedicated account manager",
    ],
    popular: true,
    cta: "Get Started",
    ctaLink: "/contact?plan=pro",
  },
  {
    name: "Enterprise",
    description: "End-to-end security partnership for large organizations",
    monthlyPrice: null,
    yearlyPrice: null,
    priceLabel: "Custom pricing",
    yearlyLabel: "Tailored to your needs",
    features: [
      "Unlimited assessments",
      "Dedicated security team",
      "24/7 incident response",
      "Custom integrations",
      "Executive briefings",
      "Compliance certification support",
      "On-site security workshops",
      "Red team exercises",
      "Security architecture review",
      "Custom SLA",
    ],
    cta: "Contact Sales",
    ctaLink: "/contact?plan=enterprise",
  },
]

export function PricingTable() {
  const [isYearly, setIsYearly] = useState(false)
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={cn("text-sm transition-colors", !isYearly ? "text-foreground" : "text-muted-foreground")}>
            Monthly
          </span>
          <Switch checked={isYearly} onCheckedChange={setIsYearly} />
          <span className={cn("text-sm transition-colors", isYearly ? "text-foreground" : "text-muted-foreground")}>
            Yearly
            <span className="ml-2 px-2 py-0.5 text-xs bg-success/10 text-success rounded-full">Save 17%</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div
          ref={ref}
          className={cn(
            "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1",
                plan.popular ? "bg-card border-primary neon-cyan" : "bg-card/50 border-border hover:border-primary/30",
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                  <Zap className="h-3 w-3" />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                {plan.monthlyPrice !== null ? (
                  <>
                    <div className="flex items-baseline gap-1">
                      <span className="font-[family-name:var(--font-heading)] text-4xl font-bold text-foreground">
                        $
                        {isYearly
                          ? Math.round(plan.yearlyPrice! / 12).toLocaleString()
                          : plan.monthlyPrice.toLocaleString()}
                      </span>
                    </div>
                    <span className="text-muted-foreground text-sm">
                      {isYearly ? plan.yearlyLabel : plan.priceLabel}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="font-[family-name:var(--font-heading)] text-4xl font-bold text-foreground">
                      Custom
                    </span>
                    <p className="text-muted-foreground text-sm">{plan.yearlyLabel}</p>
                  </>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className={cn(
                  "w-full",
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                )}
              >
                <Link href={plan.ctaLink}>{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
