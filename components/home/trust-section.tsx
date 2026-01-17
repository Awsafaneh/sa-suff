"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"

const clients = [
  { name: "TechCorp", logo: "TechCorp" },
  { name: "SecureBank", logo: "SecureBank" },
  { name: "CloudNet", logo: "CloudNet" },
  { name: "DataFlow", logo: "DataFlow" },
  { name: "CyberShield", logo: "CyberShield" },
  { name: "InnovateTech", logo: "InnovateTech" },
]

export function TrustSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section className="py-16 bg-card/50 border-y border-border">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={cn(
            "text-center transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <p className="text-sm text-muted-foreground mb-8 uppercase tracking-wider">
            Trusted by security-conscious enterprises
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clients.map((client) => (
              <div
                key={client.name}
                className="px-6 py-3 rounded-lg bg-secondary/30 border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <span className="font-[family-name:var(--font-heading)] text-lg font-semibold text-muted-foreground/70 hover:text-muted-foreground transition-colors">
                  {client.logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
