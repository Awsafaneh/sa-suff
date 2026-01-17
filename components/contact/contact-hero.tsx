"use client"

import { GridBackground } from "@/components/ui/grid-background"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"

export function ContactHero() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-20">
      <GridBackground />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div
          ref={ref}
          className={cn(
            "max-w-4xl mx-auto text-center space-y-6 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-full">
            Contact Us
          </span>

          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
            Let's Secure Your <span className="gradient-text">Business</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Ready to take your security to the next level? Get in touch with our team for a free consultation.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
