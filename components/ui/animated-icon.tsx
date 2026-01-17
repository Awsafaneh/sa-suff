"use client"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface AnimatedIconProps {
  icon: LucideIcon
  className?: string
  iconClassName?: string
}

export function AnimatedIcon({ icon: Icon, className, iconClassName }: AnimatedIconProps) {
  return (
    <div
      className={cn(
        "relative p-4 rounded-xl bg-secondary/50 border border-border group-hover:border-primary/50 transition-all duration-300",
        className,
      )}
    >
      <Icon className={cn("h-8 w-8 text-primary transition-all duration-300 group-hover:scale-110", iconClassName)} />
      <div className="absolute inset-0 rounded-xl bg-primary/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
    </div>
  )
}
