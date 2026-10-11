import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const indexLabelVariants = cva(
  "inline-flex items-center gap-2 text-2xs leading-[1.2] font-semibold uppercase",
  {
    variants: {
      tone: {
        default: "text-muted-foreground",
        faint: "text-faint-foreground",
        signal: "text-signal",
        foreground: "text-foreground",
      },
      tracking: {
        index: "tracking-[0.16em]",
        signal: "tracking-[0.22em]",
      },
    },
    defaultVariants: {
      tone: "default",
      tracking: "index",
    },
  }
)

/**
 * The index voice: short uppercase metadata for eyebrows, object states and
 * catalog numbers. Keep it to a few words.
 */
function IndexLabel({
  className,
  tone,
  tracking,
  tick = false,
  children,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof indexLabelVariants> & {
    /** A short hairline before the label, like a tick on an atlas margin. */
    tick?: boolean
  }) {
  return (
    <span
      data-slot="index-label"
      className={cn(indexLabelVariants({ tone, tracking }), className)}
      {...props}
    >
      {tick && <span aria-hidden className="h-px w-3 bg-current opacity-60" />}
      {children}
    </span>
  )
}

/**
 * A section heading drawn as an annotation: label, a hairline running to the
 * edge, then optional trailing metadata.
 */
function SectionRule({
  className,
  label,
  meta,
  as: Heading = "h2",
  ...props
}: Omit<React.ComponentProps<"div">, "children"> & {
  label: React.ReactNode
  meta?: React.ReactNode
  as?: "h2" | "h3" | "h4" | "div"
}) {
  return (
    <div
      data-slot="section-rule"
      className={cn("flex items-center gap-3", className)}
      {...props}
    >
      <Heading className="shrink-0 text-2xs leading-[1.2] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
        {label}
      </Heading>
      <span aria-hidden className="h-px flex-1 bg-border" />
      {meta != null && (
        <span className="shrink-0 font-mono text-[0.6875rem] text-faint-foreground">
          {meta}
        </span>
      )}
    </div>
  )
}

export { IndexLabel, SectionRule, indexLabelVariants }
