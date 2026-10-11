import * as React from "react"
import { Toggle as TogglePrimitive } from "@base-ui/react/toggle"
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group"
import { type VariantProps } from "class-variance-authority"
import { cn } from "cn"

import { toggleVariants } from "@/components/ui/toggle"

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants> & {
    spacing?: number
    orientation?: "horizontal" | "vertical"
  }
>({
  size: "default",
  variant: "default",
  spacing: 0.5,
  orientation: "horizontal",
})

/**
 * The default variant reads as a segmented control: one hairline container,
 * the pressed segment lifted onto a raised surface. `variant="outline"` keeps
 * shadcn's separate bordered toggles (joined when `spacing={0}`).
 */
function ToggleGroup({
  className,
  variant,
  size,
  spacing,
  orientation = "horizontal",
  children,
  ...props
}: ToggleGroupPrimitive.Props &
  VariantProps<typeof toggleVariants> & {
    spacing?: number
    orientation?: "horizontal" | "vertical"
  }) {
  const groupVariant = variant ?? "default"
  const resolvedSpacing = spacing ?? (groupVariant === "outline" ? 2 : 0.5)

  return (
    <ToggleGroupPrimitive
      data-slot="toggle-group"
      data-variant={groupVariant}
      data-size={size}
      data-spacing={resolvedSpacing}
      data-orientation={orientation}
      style={{ "--gap": resolvedSpacing } as React.CSSProperties}
      className={cn(
        "group/toggle-group flex w-fit flex-row items-center gap-[--spacing(var(--gap))] rounded-sm data-vertical:flex-col data-vertical:items-stretch",
        "data-[variant=default]:border data-[variant=default]:border-border data-[variant=default]:bg-card/40 data-[variant=default]:p-[3px]",
        className
      )}
      {...props}
    >
      <ToggleGroupContext.Provider
        value={{ variant, size, spacing: resolvedSpacing, orientation }}
      >
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive>
  )
}

function ToggleGroupItem({
  className,
  children,
  variant = "default",
  size = "default",
  ...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
  const context = React.useContext(ToggleGroupContext)

  return (
    <TogglePrimitive
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      data-spacing={context.spacing}
      className={cn(
        "shrink-0 focus:z-10 focus-visible:z-10",
        // Joined outline toggles (spacing 0).
        "group-data-[spacing=0]/toggle-group:rounded-none group-data-[spacing=0]/toggle-group:px-2 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-1.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-1.5 group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-sm group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-sm group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-sm group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-sm group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t",
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        // Segmented control: segments sit inside the 3px-padded container.
        "group-data-[variant=default]/toggle-group:h-7 group-data-[variant=default]/toggle-group:min-w-7 group-data-[variant=default]/toggle-group:rounded-xs group-data-[variant=default]/toggle-group:not-data-pressed:hover:bg-transparent group-data-[variant=default]/toggle-group:data-pressed:border-border group-data-[variant=default]/toggle-group:data-[size=sm]:h-6 group-data-[variant=default]/toggle-group:data-[size=sm]:min-w-6 group-data-[variant=default]/toggle-group:data-[size=lg]:h-8 group-data-[variant=default]/toggle-group:data-[size=lg]:min-w-8 group-data-vertical/toggle-group:justify-start",
        className
      )}
      {...props}
    >
      {children}
    </TogglePrimitive>
  )
}

export { ToggleGroup, ToggleGroupItem }
