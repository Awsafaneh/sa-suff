"use client"

import { GridBackground } from "@/components/ui/grid-background"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"

export function FeaturesHero() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
      <GridBackground />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div
          ref={ref}
          className={cn(
            "max-w-4xl mx-auto text-center space-y-6 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-full">
            Our Services
          </span>

          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
            Comprehensive Security <span className="gradient-text">Solutions</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            From penetration testing to compliance readiness, we provide end-to-end cybersecurity services tailored to
            your organization's needs.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
