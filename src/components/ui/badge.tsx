import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-sm border px-2 py-0.5 text-2xs font-semibold tracking-[0.16em] whitespace-nowrap uppercase transition-[color,background-color,border-color,box-shadow] duration-150 ease-out-quint focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default:
          "border-primary/50 bg-primary/8 text-primary [a]:hover:bg-primary/14",
        secondary:
          "border-border bg-surface-raised text-muted-foreground [a]:hover:text-foreground",
        outline:
          "border-border bg-transparent text-muted-foreground [a]:hover:border-border-strong [a]:hover:text-foreground",
        signal:
          "border-info-border bg-info-surface text-signal [a]:hover:border-signal",
        success:
          "border-success-border bg-success-surface text-success [a]:hover:border-success",
        warning:
          "border-warning-border bg-warning-surface text-warning [a]:hover:border-warning",
        destructive:
          "border-destructive-border bg-destructive-surface text-destructive focus-visible:ring-destructive/20 [a]:hover:border-destructive",
        ghost:
          "border-transparent text-muted-foreground hover:bg-accent hover:text-foreground",
        link: "border-transparent px-0 text-muted-foreground underline-offset-4 hover:text-foreground hover:underline",
      },
      shape: {
        tag: "rounded-sm",
        pill: "h-6 rounded-full px-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      shape: "tag",
    },
  }
)

function Badge({
  className,
  variant = "default",
  shape = "tag",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant, shape }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
      shape,
    },
  })
}

export { Badge, badgeVariants }
