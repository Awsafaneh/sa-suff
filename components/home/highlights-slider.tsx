"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/ui/section-header"
import { ChevronLeft, ChevronRight, Shield, Target, FileCheck, Zap, Users, Award } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"

const slides = [
  {
    icon: Shield,
    title: "Comprehensive Penetration Testing",
    description:
      "Our expert team simulates real-world attacks to identify vulnerabilities before malicious actors can exploit them.",
    stat: "10,000+ tests conducted",
  },
  {
    icon: Target,
    title: "Advanced Vulnerability Detection",
    description:
      "Using cutting-edge tools and methodologies, we uncover hidden security gaps across your entire infrastructure.",
    stat: "99.7% detection rate",
  },
  {
    icon: FileCheck,
    title: "Detailed Security Reports",
    description: "Receive actionable insights with prioritized recommendations and step-by-step remediation guidance.",
    stat: "48-hour delivery",
  },
  {
    icon: Zap,
    title: "Rapid Incident Response",
    description: "24/7 availability with our security experts ready to respond to any breach or security incident.",
    stat: "15-min response time",
  },
  {
    icon: Users,
    title: "Dedicated Security Team",
    description: "Work with certified professionals who understand your industry-specific security requirements.",
    stat: "50+ certified experts",
  },
  {
    icon: Award,
    title: "Compliance Assurance",
    description: "Achieve and maintain compliance with ISO 27001, PCI DSS, SOC 2, HIPAA, and other standards.",
    stat: "100% audit success",
  },
]

export function HighlightsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Why Choose Us"
          title="Security Excellence at Every Step"
          description="Discover how SuffixSec delivers unmatched protection for your digital assets"
        />

        <div
          ref={ref}
          className={cn(
            "relative transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Slider Container */}
          <div className="relative overflow-hidden rounded-2xl bg-card border border-border">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0 p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                      <div className="relative p-6 rounded-2xl bg-secondary/50 border border-border">
                        <slide.icon className="h-16 w-16 text-primary" />
                        <div className="absolute inset-0 rounded-2xl bg-primary/5 blur-xl" />
                      </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {slide.title}
                      </h3>
                      <p className="text-muted-foreground text-lg mb-4 leading-relaxed">{slide.description}</p>
                      <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        {slide.stat}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border border-border"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border border-border"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  currentSlide === index ? "bg-primary w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
