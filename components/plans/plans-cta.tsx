"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"
import { ArrowRight, MessageSquare } from "lucide-react"

export function PlansCta() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section className="py-24 bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={cn(
            "max-w-3xl mx-auto text-center transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <MessageSquare className="h-7 w-7 text-primary" />
          </div>

          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Not sure which plan is right for you?
          </h2>

          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Our security experts can help you assess your needs and recommend the best solution. Schedule a free
            consultation — no commitment required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 neon-cyan transition-all duration-300"
            >
              <Link href="/contact">
                Talk to an Expert
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300 bg-transparent"
            >
              <Link href="/features">Explore Features</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
