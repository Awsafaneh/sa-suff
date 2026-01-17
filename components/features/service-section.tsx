"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"
import { Check, ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface ServiceSectionProps {
  service: {
    id: string
    icon: LucideIcon
    title: string
    description: string
    features: string[]
    outcomes: string[]
  }
  index: number
}

export function ServiceSection({ service, index }: ServiceSectionProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()
  const isEven = index % 2 === 0

  return (
    <section id={service.id} className={cn("py-24", isEven ? "bg-card/30" : "bg-background")}>
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          {/* Content */}
          <div className={cn(isEven ? "lg:order-1" : "lg:order-2")}>
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 mb-6">
              <service.icon className="h-7 w-7 text-primary" />
            </div>

            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-foreground mb-4">
              {service.title}
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">{service.description}</p>

            {/* Features List */}
            <div className="mb-8">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground mb-4">
                What you get:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Outcomes Card */}
          <div className={cn(isEven ? "lg:order-2" : "lg:order-1")}>
            <div className="relative p-8 rounded-2xl bg-card border border-border">
              <div className="absolute -top-3 left-6 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                Outcomes
              </div>

              <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground mb-6 mt-2">
                What you achieve
              </h3>

              <ul className="space-y-4">
                {service.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-success/10 border border-success/20 flex items-center justify-center group-hover:bg-success/20 transition-colors">
                      <ArrowRight className="h-4 w-4 text-success" />
                    </div>
                    <span className="text-foreground pt-1">{outcome}</span>
                  </li>
                ))}
              </ul>

              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
