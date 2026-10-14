"use client"

import { Switch as SwitchPrimitive } from "@base-ui/react/switch"
import { cn } from "cn"

/**
 * A calibrated instrument toggle: a square hairline frame and a square
 * indicator. Off, the indicator rests faint at the left; on, the frame takes
 * the signal and the indicator slides right and lights up.
 */
function Switch({
  className,
  size = "default",
  ...props
}: SwitchPrimitive.Root.Props & {
  size?: "sm" | "default"
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        "peer group/switch relative inline-flex shrink-0 items-center rounded-xs border border-border bg-transparent transition-[background-color,border-color,box-shadow] duration-180 ease-out-quint outline-none group-has-[:focus-visible]/field-label:ring-0 after:absolute after:-inset-x-1.5 after:-inset-y-3 hover:border-border-strong focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 data-[size=default]:h-[22px] data-[size=default]:w-10 data-[size=default]:px-[4px] data-[size=sm]:h-[18px] data-[size=sm]:w-8 data-[size=sm]:px-[3px] data-checked:border-signal/55 data-checked:bg-signal/8 data-disabled:cursor-not-allowed data-disabled:opacity-45",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="pointer-events-none block rounded-[1px] transition-[translate,background-color,box-shadow] duration-180 ease-out-quint group-data-[size=default]/switch:size-3 group-data-[size=sm]/switch:size-2.5 data-checked:bg-foreground data-checked:text-signal data-checked:shadow-glow group-data-[size=default]/switch:data-checked:translate-x-[18px] group-data-[size=sm]/switch:data-checked:translate-x-[14px] data-unchecked:translate-x-0 data-unchecked:bg-faint-foreground"
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
