"use client"

import { SectionHeader } from "@/components/ui/section-header"
import { AnimatedIcon } from "@/components/ui/animated-icon"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"
import { Shield, Search, FileWarning, Clock, Lock, Code } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Penetration Testing",
    description: "Simulated attacks to identify vulnerabilities in your systems, applications, and networks.",
  },
  {
    icon: Search,
    title: "Security Audits",
    description: "Comprehensive assessments of your security posture against industry standards and best practices.",
  },
  {
    icon: FileWarning,
    title: "Vulnerability Management",
    description: "Continuous scanning, prioritization, and remediation tracking for all discovered vulnerabilities.",
  },
  {
    icon: Clock,
    title: "Incident Response",
    description: "24/7 rapid response team ready to contain, investigate, and recover from security incidents.",
  },
  {
    icon: Lock,
    title: "Compliance Readiness",
    description: "Expert guidance to achieve ISO 27001, PCI DSS, SOC 2, HIPAA, and GDPR compliance.",
  },
  {
    icon: Code,
    title: "DevSecOps Integration",
    description: "Embed security into your CI/CD pipeline with automated testing and developer training.",
  },
]

export function FeaturesCards() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Our Services"
          title="Comprehensive Security Solutions"
          description="From penetration testing to compliance, we cover all aspects of your cybersecurity needs"
        />

        <div
          ref={ref}
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <AnimatedIcon icon={feature.icon} className="mb-4" />
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
