import * as React from "react"
import { cn } from "cn"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "atlas-scrollbar flex field-sizing-content min-h-20 w-full rounded-sm border border-input bg-card/45 px-3 py-2 text-base leading-6 text-foreground transition-[border-color,background-color,box-shadow] duration-150 ease-out-quint outline-none selection:bg-primary selection:text-primary-foreground placeholder:text-faint-foreground hover:border-border-strong focus-visible:border-ring focus-visible:bg-card/70 focus-visible:ring-2 focus-visible:ring-ring/25 disabled:cursor-not-allowed disabled:opacity-45 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
