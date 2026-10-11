import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const statusDotVariants = cva(
  "relative inline-block shrink-0 rounded-full bg-current",
  {
    variants: {
      tone: {
        signal: "text-signal",
        success: "text-success",
        warning: "text-warning",
        destructive: "text-destructive",
        idle: "text-faint-foreground",
      },
      size: {
        sm: "size-1.5",
        default: "size-2",
        lg: "size-2.5",
      },
      live: {
        true: "animate-atlas-pulse",
        false: "",
      },
    },
    defaultVariants: {
      tone: "signal",
      size: "default",
      live: false,
    },
  }
)

/**
 * A small point of light for readiness and state. Color is never the only
 * signal: pair it with text, or pass `label` so assistive tech hears it.
 */
function StatusDot({
  className,
  tone,
  size,
  live,
  label,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof statusDotVariants> & {
    label?: string
  }) {
  return (
    <span
      data-slot="status-dot"
      data-tone={tone ?? "signal"}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn(statusDotVariants({ tone, size, live }), className)}
      {...props}
    />
  )
}

/** A dot with a short visible label, such as "Ready" or "Recording". */
function StatusIndicator({
  className,
  tone,
  live,
  children,
  ...props
}: React.ComponentProps<"span"> &
  Pick<VariantProps<typeof statusDotVariants>, "tone" | "live">) {
  return (
    <span
      data-slot="status-indicator"
      className={cn(
        "inline-flex items-center gap-2 text-xs font-medium text-muted-foreground",
        className
      )}
      {...props}
    >
      <StatusDot tone={tone} live={live} />
      {children}
    </span>
  )
}

export { StatusDot, StatusIndicator, statusDotVariants }
