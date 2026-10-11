import * as React from "react"
import { cn } from "cn"

/**
 * The top of a tool or work page: a tracked eyebrow, a light-weight title and
 * a quiet description, with actions aligned to the right on wide screens.
 */
function PageHeader({ className, ...props }: React.ComponentProps<"header">) {
  return (
    <header
      data-slot="page-header"
      className={cn(
        "grid gap-4 border-b border-border pb-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end",
        className
      )}
      {...props}
    />
  )
}

function PageHeaderHeading({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="page-header-heading"
      className={cn("grid min-w-0 gap-3", className)}
      {...props}
    />
  )
}

function PageHeaderEyebrow({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="page-header-eyebrow"
      className={cn(
        "text-2xs leading-[1.2] font-semibold tracking-[0.22em] text-muted-foreground uppercase",
        className
      )}
      {...props}
    />
  )
}

function PageHeaderTitle({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      data-slot="page-header-title"
      className={cn(
        "text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-light text-balance text-foreground",
        className
      )}
      {...props}
    />
  )
}

function PageHeaderDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="page-header-description"
      className={cn(
        "max-w-[64ch] text-[0.9375rem] leading-relaxed text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function PageHeaderActions({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="page-header-actions"
      className={cn("flex flex-wrap items-center gap-2", className)}
      {...props}
    />
  )
}

export {
  PageHeader,
  PageHeaderActions,
  PageHeaderDescription,
  PageHeaderEyebrow,
  PageHeaderHeading,
  PageHeaderTitle,
}
