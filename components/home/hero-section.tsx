"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GridBackground } from "@/components/ui/grid-background"
import { ArrowRight, Play } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <GridBackground />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div
          ref={ref}
          className={cn(
            "max-w-4xl mx-auto text-center space-y-8 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
            </span>
            <span className="text-sm text-muted-foreground">Trusted by 500+ enterprises worldwide</span>
          </div>

          {/* Headline */}
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
            SuffixSec —{" "}
            <span className="gradient-text">
              Security that scales
              <br className="hidden sm:block" /> with you
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Enterprise-grade penetration testing, security audits, and vulnerability management. Protect your business
            with proactive security solutions trusted by industry leaders.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 neon-cyan transition-all duration-300 text-base px-8 py-6 h-auto"
            >
              <Link href="/contact">
                Book a Security Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300 text-base px-8 py-6 h-auto bg-transparent"
            >
              <Link href="/plans">
                <Play className="mr-2 h-5 w-5 text-primary" />
                View Plans
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            {[
              { value: "500+", label: "Clients Protected" },
              { value: "10K+", label: "Vulnerabilities Found" },
              { value: "99.9%", label: "Satisfaction Rate" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
