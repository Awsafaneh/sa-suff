"use client"

import { SectionHeader } from "@/components/ui/section-header"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"
import { Search, Target, FileText, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We analyze your infrastructure, applications, and security requirements to define the scope.",
  },
  {
    icon: Target,
    title: "Testing",
    description: "Our experts conduct thorough penetration testing and vulnerability assessments.",
  },
  {
    icon: FileText,
    title: "Report",
    description: "Receive detailed findings with severity ratings, evidence, and remediation recommendations.",
  },
  {
    icon: CheckCircle,
    title: "Validation",
    description: "We verify that all vulnerabilities have been properly addressed and your systems are secure.",
  },
]

export function ProcessSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Our Process"
          title="How We Secure Your Business"
          description="A proven methodology that delivers consistent, reliable security outcomes"
        />

        <div
          ref={ref}
          className={cn(
            "relative transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-12 left-0 right-0 h-0.5 bg-border">
                <div
                  className={cn(
                    "h-full bg-primary transition-all duration-1000 delay-500",
                    isVisible ? "w-full" : "w-0",
                  )}
                />
              </div>

              <div className="grid grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <div key={step.title} className="relative flex flex-col items-center text-center">
                    {/* Step Number */}
                    <div className="relative z-10 flex items-center justify-center w-24 h-24 rounded-full bg-card border-2 border-primary mb-6">
                      <step.icon className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>

                    {/* Step indicator */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      Step {index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={step.title} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-card border-2 border-primary">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  {index < steps.length - 1 && <div className="w-0.5 h-full bg-border mt-2" />}
                </div>
                <div className="flex-1 pb-8">
                  <span className="text-xs text-primary font-medium">Step {index + 1}</span>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
