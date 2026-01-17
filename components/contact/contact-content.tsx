"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Calendar } from "lucide-react"

const services = [
  { value: "penetration-testing", label: "Penetration Testing" },
  { value: "security-audit", label: "Security Audit" },
  { value: "vulnerability-management", label: "Vulnerability Management" },
  { value: "incident-response", label: "Incident Response" },
  { value: "compliance", label: "Compliance Readiness" },
  { value: "devsecops", label: "DevSecOps Enablement" },
  { value: "other", label: "Other / General Inquiry" },
]

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "support@suffixsec.com",
    href: "mailto:support@suffixsec.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) SEC-TEAM",
    href: "tel:+15557328326",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "123 Security Boulevard, San Francisco, CA 94102",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Fri: 9AM - 6PM PST\n24/7 Emergency Response",
    href: null,
  },
]

type FormStatus = "idle" | "submitting" | "success" | "error"

export function ContactContent() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required"
    }

    if (!formData.service) {
      newErrors.service = "Please select a service"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setFormStatus("submitting")

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Simulate success (in production, this would be an actual API call)
    setFormStatus("success")
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground mb-6">
                Send us a message
              </h2>

              {formStatus === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-success/10 border border-success/20 flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-success" />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <Button variant="outline" onClick={() => setFormStatus("idle")} className="bg-transparent">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className={cn(
                          "bg-secondary/50 border-border focus:border-primary/50",
                          errors.name && "border-destructive",
                        )}
                      />
                      {errors.name && (
                        <p className="text-destructive text-sm flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Work Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className={cn(
                          "bg-secondary/50 border-border focus:border-primary/50",
                          errors.email && "border-destructive",
                        )}
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-foreground">
                        Company <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="company"
                        type="text"
                        placeholder="Acme Inc."
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className={cn(
                          "bg-secondary/50 border-border focus:border-primary/50",
                          errors.company && "border-destructive",
                        )}
                      />
                      {errors.company && (
                        <p className="text-destructive text-sm flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.company}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-foreground">
                        Service Needed <span className="text-destructive">*</span>
                      </Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger
                          className={cn(
                            "bg-secondary/50 border-border focus:border-primary/50",
                            errors.service && "border-destructive",
                          )}
                        >
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.value} value={service.value}>
                              {service.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.service && (
                        <p className="text-destructive text-sm flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.service}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your security needs..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className={cn(
                        "bg-secondary/50 border-border focus:border-primary/50 resize-none",
                        errors.message && "border-destructive",
                      )}
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 neon-cyan transition-all duration-300"
                    disabled={formStatus === "submitting"}
                  >
                    {formStatus === "submitting" ? (
                      <>
                        <div className="h-5 w-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info & Calendar */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Contact Information */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground mb-6">
                Get in touch
              </h2>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground whitespace-pre-line">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Calendar Booking Section */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
                  Book a Security Call
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Prefer to schedule a specific time? Book a 30-minute consultation directly on our calendar.
              </p>
              <Button
                asChild
                variant="outline"
                className="w-full border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/50 bg-transparent"
              >
                <a href="https://calendly.com/suffixsec" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule a Call
                </a>
              </Button>
            </div>

            {/* Security Notice */}
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Your information is secure.</strong> All communications are
                encrypted and covered by our strict confidentiality policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
