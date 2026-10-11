import * as React from "react"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cn } from "cn"

/**
 * Mobile primary navigation pinned to the bottom edge. Three to five
 * destinations, 48px targets, a one-pixel signal marker on the active item.
 */
function BottomNav({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      data-slot="bottom-nav"
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 grid auto-cols-fr grid-flow-col gap-1 border-t border-border bg-scrim px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]",
        className
      )}
      {...props}
    />
  )
}

function BottomNavItem({
  className,
  active = false,
  render,
  ...props
}: useRender.ComponentProps<"a"> & {
  active?: boolean
}) {
  return useRender({
    defaultTagName: "a",
    props: mergeProps<"a">(
      {
        "aria-current": active ? "page" : undefined,
        className: cn(
          "relative flex min-h-12 flex-col items-center justify-center gap-1 rounded-sm border border-transparent text-2xs font-bold tracking-[0.12em] text-muted-foreground uppercase transition-[color,background-color,border-color,transform] duration-150 ease-out-quint outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/30 active:scale-[0.97] aria-[current=page]:border-border aria-[current=page]:bg-surface-raised aria-[current=page]:text-foreground aria-[current=page]:before:absolute aria-[current=page]:before:top-1.5 aria-[current=page]:before:left-1/2 aria-[current=page]:before:h-px aria-[current=page]:before:w-4.5 aria-[current=page]:before:-translate-x-1/2 aria-[current=page]:before:bg-signal [&_svg]:size-5 [&_svg]:shrink-0",
          className
        ),
      },
      props
    ),
    render,
    state: {
      slot: "bottom-nav-item",
      active,
    },
  })
}

export { BottomNav, BottomNavItem }
