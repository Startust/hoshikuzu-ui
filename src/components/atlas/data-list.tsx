import * as React from "react"
import { cn } from "cn"

/**
 * Instrument readouts: a label on the left, a mono value on the right,
 * hairlines between rows. For paths, provider IDs, versions and sizes.
 */
function DataList({ className, ...props }: React.ComponentProps<"dl">) {
  return (
    <dl
      data-slot="data-list"
      className={cn("grid text-sm", className)}
      {...props}
    />
  )
}

function DataListItem({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="data-list-item"
      className={cn(
        "grid min-h-11 grid-cols-[minmax(7rem,auto)_minmax(0,1fr)_auto] items-center gap-x-4 border-b border-border-faint py-2.5 last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

function DataListLabel({ className, ...props }: React.ComponentProps<"dt">) {
  return (
    <dt
      data-slot="data-list-label"
      className={cn("text-xs font-semibold text-muted-foreground", className)}
      {...props}
    />
  )
}

function DataListValue({ className, ...props }: React.ComponentProps<"dd">) {
  return (
    <dd
      data-slot="data-list-value"
      className={cn(
        "min-w-0 truncate font-mono text-xs text-foreground",
        className
      )}
      {...props}
    />
  )
}

/** Trailing slot for a StatusDot, a copy button or a unit. */
function DataListAside({ className, ...props }: React.ComponentProps<"dd">) {
  return (
    <dd
      data-slot="data-list-aside"
      className={cn("flex items-center justify-end", className)}
      {...props}
    />
  )
}

export { DataList, DataListAside, DataListItem, DataListLabel, DataListValue }
