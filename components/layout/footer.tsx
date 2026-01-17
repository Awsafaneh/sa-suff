import Link from "next/link"
import { Shield, Twitter, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/plans", label: "Plans" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
]

const services = [
  { href: "/features#penetration-testing", label: "Penetration Testing" },
  { href: "/features#security-audits", label: "Security Audits" },
  { href: "/features#vulnerability-management", label: "Vulnerability Management" },
  { href: "/features#incident-response", label: "Incident Response" },
  { href: "/features#compliance", label: "Compliance Readiness" },
]

const socialLinks = [
  { href: "https://twitter.com/suffixsec", icon: Twitter, label: "Twitter" },
  { href: "https://linkedin.com/company/suffixsec", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/suffixsec", icon: Github, label: "GitHub" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
                Suffix<span className="text-primary">Sec</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Enterprise-grade cybersecurity solutions that scale with your business. Trusted by leading companies
              worldwide.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:support@suffixsec.com" className="hover:text-primary transition-colors">
                  support@suffixsec.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+1-555-SEC-TEAM" className="hover:text-primary transition-colors">
                  +1 (555) SEC-TEAM
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>
                  123 Security Boulevard
                  <br />
                  San Francisco, CA 94102
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} SuffixSec. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
