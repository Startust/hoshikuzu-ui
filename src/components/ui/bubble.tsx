import * as React from "react"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

function BubbleGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="bubble-group"
      className={cn("flex min-w-0 flex-col gap-2", className)}
      {...props}
    />
  )
}

const bubbleVariants = cva(
  "group/bubble relative flex w-fit max-w-[80%] min-w-0 flex-col gap-1 group-data-[align=end]/message:self-end data-[align=end]:self-end data-[variant=ghost]:max-w-full",
  {
    variants: {
      variant: {
        // Your own turn: a raised plate with a brightened hairline.
        default:
          "*:data-[slot=bubble-content]:border-border-strong *:data-[slot=bubble-content]:bg-surface-raised *:data-[slot=bubble-content]:text-foreground [&>[data-slot=bubble-content]:is(button,a):hover]:border-signal/60",
        // The other side of the conversation: a quiet translucent card.
        secondary:
          "*:data-[slot=bubble-content]:border-border *:data-[slot=bubble-content]:bg-card/60 *:data-[slot=bubble-content]:text-foreground [&>[data-slot=bubble-content]:is(button,a):hover]:border-border-strong [&>[data-slot=bubble-content]:is(button,a):hover]:bg-surface-raised",
        muted:
          "*:data-[slot=bubble-content]:bg-muted *:data-[slot=bubble-content]:text-muted-foreground [&>[data-slot=bubble-content]:is(button,a):hover]:border-border [&>[data-slot=bubble-content]:is(button,a):hover]:text-foreground",
        tinted:
          "*:data-[slot=bubble-content]:border-info-border *:data-[slot=bubble-content]:bg-accent *:data-[slot=bubble-content]:text-foreground [&>[data-slot=bubble-content]:is(button,a):hover]:border-signal/60",
        outline:
          "*:data-[slot=bubble-content]:border-border *:data-[slot=bubble-content]:bg-transparent [&>[data-slot=bubble-content]:is(button,a):hover]:border-border-strong [&>[data-slot=bubble-content]:is(button,a):hover]:bg-accent [&>[data-slot=bubble-content]:is(button,a):hover]:text-foreground",
        ghost:
          "border-none *:data-[slot=bubble-content]:rounded-none *:data-[slot=bubble-content]:bg-transparent *:data-[slot=bubble-content]:p-0 [&>[data-slot=bubble-content]:is(button,a):hover]:text-foreground",
        destructive:
          "*:data-[slot=bubble-content]:border-destructive-border *:data-[slot=bubble-content]:bg-destructive-surface *:data-[slot=bubble-content]:text-destructive [&>[data-slot=bubble-content]:is(button,a):hover]:border-destructive/70",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Bubble({
  variant = "default",
  align = "start",
  className,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof bubbleVariants> & {
    align?: "start" | "end"
  }) {
  return (
    <div
      data-slot="bubble"
      data-variant={variant}
      data-align={align}
      className={cn(bubbleVariants({ variant }), className)}
      {...props}
    />
  )
}

function BubbleContent({
  className,
  render,
  ...props
}: useRender.ComponentProps<"div">) {
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: cn(
          "w-fit max-w-full min-w-0 overflow-hidden rounded-sm border border-transparent px-3 py-2 text-sm leading-6 wrap-break-word group-data-[align=end]/bubble:self-end [button]:text-left [button,a]:transition-[color,background-color,border-color,box-shadow] [button,a]:duration-150 [button,a]:ease-out-quint [button,a]:outline-none [button,a]:focus-visible:border-ring [button,a]:focus-visible:ring-2 [button,a]:focus-visible:ring-ring/30",
          className
        ),
      },
      props
    ),
    render,
    state: {
      slot: "bubble-content",
    },
  })
}

const bubbleReactionsVariants = cva(
  "absolute z-10 flex h-5 w-fit shrink-0 items-center justify-center gap-1 rounded-sm border border-border bg-popover px-1.5 font-mono text-[0.6875rem] text-muted-foreground tabular-nums ring-2 ring-background has-[button]:p-0 [&_svg:not([class*='size-'])]:size-3",
  {
    variants: {
      side: {
        top: "top-0 -translate-y-1/2",
        bottom: "bottom-0 translate-y-1/2",
      },
      align: {
        start: "left-3",
        end: "right-3",
      },
    },
    defaultVariants: {
      side: "bottom",
      align: "end",
    },
  }
)

function BubbleReactions({
  side = "bottom",
  align = "end",
  className,
  ...props
}: React.ComponentProps<"div"> & {
  align?: "start" | "end"
  side?: "top" | "bottom"
}) {
  return (
    <div
      data-slot="bubble-reactions"
      data-align={align}
      data-side={side}
      className={cn(bubbleReactionsVariants({ side, align }), className)}
      {...props}
    />
  )
}

export { BubbleGroup, Bubble, BubbleContent, BubbleReactions }
