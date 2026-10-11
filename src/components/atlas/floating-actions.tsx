import * as React from "react"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cn } from "cn"

/**
 * A quiet cluster of utility controls pinned to the viewport corner (mode
 * switch, home). Sits above the page, respects safe-area insets.
 */
function FloatingActions({
  className,
  position = "bottom-right",
  ...props
}: React.ComponentProps<"div"> & {
  position?: "bottom-right" | "bottom-left"
}) {
  return (
    <div
      data-slot="floating-actions"
      data-position={position}
      className={cn(
        "fixed bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 flex items-center gap-2 md:bottom-6",
        position === "bottom-right"
          ? "right-[max(1rem,env(safe-area-inset-right))] flex-row md:right-6"
          : "left-[max(1rem,env(safe-area-inset-left))] flex-row-reverse md:left-6",
        className
      )}
      {...props}
    />
  )
}

/**
 * A square icon control whose label surfaces as a small annotation on hover
 * or keyboard focus. The label slides with transform only, so nothing reflows.
 */
function FloatingAction({
  className,
  label,
  children,
  render,
  ...props
}: useRender.ComponentProps<"button"> & {
  /** Visible on hover/focus and used as the accessible name. */
  label: string
}) {
  const content = (
    <>
      {children}
      <span
        aria-hidden
        data-slot="floating-action-label"
        className="pointer-events-none absolute top-1/2 right-[calc(100%+0.5rem)] -translate-y-1/2 translate-x-1 rounded-xs border border-border bg-popover px-2 py-1 text-2xs font-semibold tracking-[0.16em] whitespace-nowrap text-popover-foreground uppercase opacity-0 shadow-control transition-[opacity,transform] duration-180 ease-out-quint group-hover/floating-action:translate-x-0 group-hover/floating-action:opacity-100 group-focus-visible/floating-action:translate-x-0 group-focus-visible/floating-action:opacity-100"
      >
        {label}
      </span>
    </>
  )

  return useRender({
    defaultTagName: "button",
    props: mergeProps<"button">(
      {
        "aria-label": label,
        className: cn(
          "group/floating-action relative inline-flex size-8 items-center justify-center rounded-sm border border-border bg-card/85 text-foreground shadow-control transition-[border-color,background-color,transform] duration-180 ease-out-quint outline-none hover:border-signal focus-visible:border-signal focus-visible:ring-2 focus-visible:ring-ring/30 active:scale-[0.96] [&_svg]:size-3.5 [&_svg]:shrink-0",
          className
        ),
        children: content,
      },
      props
    ),
    render,
    state: {
      slot: "floating-action",
    },
  })
}

export { FloatingAction, FloatingActions }
