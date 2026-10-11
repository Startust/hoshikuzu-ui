import * as React from "react"
import { cn } from "cn"

/**
 * The page atmosphere: sparse star dots at night, a faint graticule on the
 * archive sheet. Decorative only, never interactive, never a gradient wash.
 */
function Starfield({
  className,
  fixed = false,
  ...props
}: React.ComponentProps<"div"> & {
  /** Pin to the viewport instead of the nearest positioned ancestor. */
  fixed?: boolean
}) {
  return (
    <div
      aria-hidden
      data-slot="starfield"
      className={cn(
        "atlas-starfield pointer-events-none inset-0 -z-10 opacity-70",
        fixed ? "fixed" : "absolute",
        className
      )}
      {...props}
    />
  )
}

export { Starfield }
