import * as React from "react"
import { cn } from "cn"

/**
 * A time-indexed log: transcript lines, activity, release notes. Times sit in
 * a fixed mono column so the text column stays aligned.
 */
function Timeline({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="timeline"
      className={cn("grid text-sm", className)}
      {...props}
    />
  )
}

function TimelineItem({
  className,
  active = false,
  ...props
}: React.ComponentProps<"li"> & {
  /** Marks the line currently playing or in focus. */
  active?: boolean
}) {
  return (
    <li
      data-slot="timeline-item"
      data-active={active || undefined}
      className={cn(
        "group/timeline-item grid grid-cols-1 gap-x-3 gap-y-1 border-b border-border py-2.5 last:border-b-0 sm:grid-cols-[4.5rem_minmax(0,1fr)]",
        className
      )}
      {...props}
    />
  )
}

function TimelineTime({ className, ...props }: React.ComponentProps<"time">) {
  return (
    <time
      data-slot="timeline-time"
      className={cn(
        "font-mono text-xs leading-6 text-faint-foreground tabular-nums group-data-active/timeline-item:text-signal",
        className
      )}
      {...props}
    />
  )
}

function TimelineContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="timeline-content"
      className={cn(
        "min-w-0 leading-6 text-muted-foreground group-data-active/timeline-item:text-foreground",
        className
      )}
      {...props}
    />
  )
}

function TimelineMeta({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="timeline-meta"
      className={cn(
        "text-2xs leading-[1.2] font-semibold tracking-[0.16em] text-faint-foreground uppercase sm:col-start-2",
        className
      )}
      {...props}
    />
  )
}

export { Timeline, TimelineContent, TimelineItem, TimelineMeta, TimelineTime }
