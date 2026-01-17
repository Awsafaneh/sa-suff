import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FeaturesHero } from "@/components/features/features-hero"
import { ServiceSection } from "@/components/features/service-section"
import { WorkflowStepper } from "@/components/features/workflow-stepper"
import { FeaturesCta } from "@/components/features/features-cta"
import { Shield, Search, FileWarning, Clock, Lock, Code } from "lucide-react"

export const metadata: Metadata = {
  title: "Features — SuffixSec | Comprehensive Cybersecurity Services",
  description:
    "Explore our full range of cybersecurity services including penetration testing, security audits, vulnerability management, incident response, and compliance readiness.",
}

const services = [
  {
    id: "penetration-testing",
    icon: Shield,
    title: "Penetration Testing",
    description:
      "Our expert ethical hackers simulate real-world cyberattacks to identify vulnerabilities in your systems, applications, and networks before malicious actors can exploit them.",
    features: [
      "Web application penetration testing",
      "Network infrastructure testing",
      "Mobile application security testing",
      "API security assessments",
      "Social engineering simulations",
      "Red team exercises",
    ],
    outcomes: [
      "Identify critical vulnerabilities before attackers",
      "Validate existing security controls",
      "Meet compliance requirements for pen testing",
      "Reduce overall security risk exposure",
    ],
  },
  {
    id: "security-audits",
    icon: Search,
    title: "Security Audits",
    description:
      "Comprehensive assessments of your security posture against industry standards and best practices. We evaluate policies, procedures, and technical controls to identify gaps.",
    features: [
      "Policy and procedure review",
      "Technical security assessment",
      "Configuration audits",
      "Access control evaluation",
      "Third-party risk assessment",
      "Security architecture review",
    ],
    outcomes: [
      "Complete visibility into security gaps",
      "Prioritized remediation roadmap",
      "Alignment with security frameworks",
      "Improved security governance",
    ],
  },
  {
    id: "vulnerability-management",
    icon: FileWarning,
    title: "Vulnerability Management",
    description:
      "Continuous scanning, prioritization, and remediation tracking for all discovered vulnerabilities. Stay ahead of threats with our proactive vulnerability management program.",
    features: [
      "Continuous vulnerability scanning",
      "Risk-based prioritization",
      "Remediation tracking and verification",
      "Asset discovery and inventory",
      "Threat intelligence integration",
      "Custom reporting dashboards",
    ],
    outcomes: [
      "Reduced time to remediation",
      "Continuous security improvement",
      "Real-time vulnerability visibility",
      "Measurable risk reduction",
    ],
  },
  {
    id: "incident-response",
    icon: Clock,
    title: "Incident Response",
    description:
      "24/7 rapid response team ready to contain, investigate, and recover from security incidents. Minimize damage and restore operations quickly with our expert incident handlers.",
    features: [
      "24/7 incident hotline",
      "Rapid containment and eradication",
      "Digital forensics investigation",
      "Root cause analysis",
      "Business continuity support",
      "Post-incident reporting",
    ],
    outcomes: [
      "Minimized breach impact",
      "Faster recovery times",
      "Preserved digital evidence",
      "Lessons learned for prevention",
    ],
  },
  {
    id: "compliance",
    icon: Lock,
    title: "Compliance Readiness",
    description:
      "Expert guidance to achieve and maintain compliance with major security frameworks and regulations. We help you navigate complex requirements and prepare for audits.",
    features: [
      "ISO 27001 readiness",
      "SOC 2 Type I & II preparation",
      "PCI DSS compliance",
      "HIPAA security assessments",
      "GDPR compliance support",
      "NIST framework alignment",
    ],
    outcomes: [
      "Successful audit outcomes",
      "Reduced compliance burden",
      "Competitive advantage",
      "Customer trust and confidence",
    ],
  },
  {
    id: "devsecops",
    icon: Code,
    title: "DevSecOps Enablement",
    description:
      "Embed security into your development lifecycle with automated testing, secure coding practices, and developer training. Shift security left without slowing down delivery.",
    features: [
      "SAST/DAST integration",
      "Secure CI/CD pipeline design",
      "Container security scanning",
      "Infrastructure as Code review",
      "Developer security training",
      "Security champions program",
    ],
    outcomes: [
      "Faster, more secure releases",
      "Reduced vulnerabilities in production",
      "Security-aware development culture",
      "Cost-effective security at scale",
    ],
  },
]

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main>
        <FeaturesHero />
        {services.map((service, index) => (
          <ServiceSection key={service.id} service={service} index={index} />
        ))}
        <WorkflowStepper />
        <FeaturesCta />
      </main>
      <Footer />
    </>
  )
}
