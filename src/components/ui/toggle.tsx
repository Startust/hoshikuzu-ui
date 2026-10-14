import { Toggle as TogglePrimitive } from "@base-ui/react/toggle"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const toggleVariants = cva(
  "group/toggle inline-flex items-center justify-center gap-1.5 rounded-sm border border-transparent text-2xs font-semibold tracking-[0.16em] whitespace-nowrap text-muted-foreground uppercase transition-[color,background-color,border-color,box-shadow,transform] duration-150 ease-out-quint outline-none select-none hover:text-foreground not-data-pressed:hover:bg-accent focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 active:scale-[0.985] disabled:pointer-events-none disabled:opacity-45 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 data-pressed:border-foreground/55 data-pressed:text-foreground data-disabled:pointer-events-none data-disabled:opacity-45 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:stroke-[1.5] [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border-border bg-transparent not-data-pressed:hover:border-border-strong not-data-pressed:hover:bg-transparent",
      },
      size: {
        default:
          "h-9 min-w-9 px-3 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5",
        sm: "h-8 min-w-8 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-10 min-w-10 px-3.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  className,
  variant = "default",
  size = "default",
  ...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
