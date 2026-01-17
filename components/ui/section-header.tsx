import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  className?: string
  align?: "left" | "center"
}

export function SectionHeader({ badge, title, description, className, align = "center" }: SectionHeaderProps) {
  return (
    <div className={cn("space-y-4 mb-12", align === "center" && "text-center max-w-3xl mx-auto", className)}>
      {badge && (
        <span className="inline-block px-4 py-1.5 text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-full">
          {badge}
        </span>
      )}
      <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto text-pretty">{description}</p>
      )}
    </div>
  )
}
