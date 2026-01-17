"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/ui/section-header"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"
import { Check, ArrowRight } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$2,499",
    period: "per assessment",
    description: "Perfect for small businesses starting their security journey",
    features: ["Basic penetration test", "Web application scan", "Executive summary report", "Email support"],
  },
  {
    name: "Pro",
    price: "$7,999",
    period: "per month",
    description: "Comprehensive security for growing organizations",
    features: [
      "Full penetration testing suite",
      "Continuous vulnerability scanning",
      "Quarterly security audits",
      "Priority support",
      "Compliance guidance",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored pricing",
    description: "End-to-end security partnership for large organizations",
    features: [
      "Unlimited assessments",
      "Dedicated security team",
      "24/7 incident response",
      "Custom integrations",
      "Executive briefings",
      "Compliance certification support",
    ],
  },
]

export function PlansTeaser() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Pricing"
          title="Security Plans for Every Business"
          description="Flexible pricing options designed to match your security needs and budget"
        />

        <div
          ref={ref}
          className={cn(
            "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1",
                plan.popular ? "bg-card border-primary neon-cyan" : "bg-card/50 border-border hover:border-primary/30",
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm">/{plan.period}</span>
                </div>
                <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={cn(
                  "w-full",
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                )}
              >
                <Link href="/plans">{plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button asChild variant="ghost" className="text-primary hover:text-primary/80">
            <Link href="/plans">
              View full plan comparison
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
