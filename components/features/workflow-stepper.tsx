"use client"

import { useState } from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"
import { MessageSquare, ClipboardList, Shield, FileText, CheckCircle, Repeat } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "Initial Consultation",
    description:
      "We begin with a discovery call to understand your business, infrastructure, and security concerns. This helps us tailor our approach to your specific needs.",
    duration: "Day 1",
  },
  {
    icon: ClipboardList,
    title: "Scope Definition",
    description:
      "Together, we define the engagement scope, including systems to test, testing windows, and success criteria. A formal statement of work is prepared.",
    duration: "Days 2-3",
  },
  {
    icon: Shield,
    title: "Security Testing",
    description:
      "Our experts execute the agreed-upon testing methodology. Critical findings are communicated immediately; regular status updates keep you informed.",
    duration: "Days 4-14",
  },
  {
    icon: FileText,
    title: "Detailed Reporting",
    description:
      "You receive a comprehensive report with executive summary, technical findings, evidence, and prioritized remediation recommendations.",
    duration: "Days 15-17",
  },
  {
    icon: CheckCircle,
    title: "Remediation Support",
    description:
      "Our team is available to clarify findings and provide guidance during your remediation efforts. We help ensure fixes are implemented correctly.",
    duration: "Ongoing",
  },
  {
    icon: Repeat,
    title: "Validation & Retesting",
    description:
      "After remediation, we verify that vulnerabilities have been properly addressed and your security posture has improved.",
    duration: "Final Phase",
  },
]

export function WorkflowStepper() {
  const [activeStep, setActiveStep] = useState(0)
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Engagement Process"
          title="How We Work With You"
          description="A transparent, collaborative approach that keeps you informed at every stage"
        />

        <div
          ref={ref}
          className={cn(
            "max-w-5xl mx-auto transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          {/* Desktop Stepper */}
          <div className="hidden lg:block">
            {/* Step indicators */}
            <div className="flex items-center justify-between mb-12">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={cn(
                    "flex flex-col items-center gap-2 group transition-all duration-300",
                    activeStep === index ? "opacity-100" : "opacity-60 hover:opacity-80",
                  )}
                >
                  <div
                    className={cn(
                      "relative w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300",
                      activeStep === index
                        ? "bg-primary text-primary-foreground neon-cyan"
                        : "bg-secondary text-muted-foreground group-hover:bg-secondary/80",
                    )}
                  >
                    <step.icon className="h-6 w-6" />
                    {activeStep === index && (
                      <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl animate-pulse" />
                    )}
                  </div>
                  <span
                    className={cn(
                      "text-xs font-medium transition-colors",
                      activeStep === index ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    {step.duration}
                  </span>
                </button>
              ))}
            </div>

            {/* Progress line */}
            <div className="relative h-1 bg-border rounded-full mb-12">
              <div
                className="absolute h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              />
            </div>

            {/* Active step content */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  {(() => {
                    const StepIcon = steps[activeStep].icon
                    return <StepIcon className="h-8 w-8 text-primary" />
                  })()}
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground mb-2">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{steps[activeStep].description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Stepper */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={cn(
                  "p-6 rounded-xl border transition-all duration-300",
                  activeStep === index ? "bg-card border-primary/30" : "bg-card/50 border-border",
                )}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors",
                      activeStep === index
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground",
                    )}
                  >
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-primary font-medium">{step.duration}</span>
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] font-semibold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
