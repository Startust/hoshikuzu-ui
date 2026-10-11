"use client"

import { Progress as ProgressPrimitive } from "@base-ui/react/progress"
import { cn } from "cn"

function Progress({
  className,
  children,
  value,
  size = "default",
  ...props
}: ProgressPrimitive.Root.Props & {
  /** Track thickness. `sm` suits dense rows and inline readouts. */
  size?: "sm" | "default"
}) {
  return (
    <ProgressPrimitive.Root
      value={value}
      data-slot="progress"
      data-size={size}
      className={cn(
        "group/progress flex flex-wrap items-center gap-x-3 gap-y-2",
        className
      )}
      {...props}
    >
      {children}
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </ProgressPrimitive.Root>
  )
}

function ProgressTrack({ className, ...props }: ProgressPrimitive.Track.Props) {
  return (
    <ProgressPrimitive.Track
      className={cn(
        "relative flex h-1.5 w-full items-center overflow-hidden rounded-full bg-border group-data-[size=sm]/progress:h-1",
        className
      )}
      data-slot="progress-track"
      {...props}
    />
  )
}

/**
 * Determinate: width follows the value. Indeterminate (`value={null}`):
 * a short signal bar sweeps across the track.
 */
function ProgressIndicator({
  className,
  ...props
}: ProgressPrimitive.Indicator.Props) {
  return (
    <ProgressPrimitive.Indicator
      data-slot="progress-indicator"
      className={cn(
        "h-full rounded-full bg-signal transition-[width] duration-[220ms] ease-out-expo data-indeterminate:w-[38%] data-indeterminate:animate-atlas-sweep",
        className
      )}
      {...props}
    />
  )
}

function ProgressLabel({ className, ...props }: ProgressPrimitive.Label.Props) {
  return (
    <ProgressPrimitive.Label
      className={cn(
        "text-2xs font-semibold tracking-[0.16em] text-muted-foreground uppercase",
        className
      )}
      data-slot="progress-label"
      {...props}
    />
  )
}

function ProgressValue({ className, ...props }: ProgressPrimitive.Value.Props) {
  return (
    <ProgressPrimitive.Value
      className={cn(
        "ml-auto font-mono text-xs text-foreground tabular-nums",
        className
      )}
      data-slot="progress-value"
      {...props}
    />
  )
}

export {
  Progress,
  ProgressTrack,
  ProgressIndicator,
  ProgressLabel,
  ProgressValue,
}
