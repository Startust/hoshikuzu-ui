import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const atlasLinkVariants = cva(
  "relative inline-flex items-center gap-1.5 rounded-xs text-muted-foreground transition-colors duration-150 ease-out-quint outline-none after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-current after:opacity-50 after:transition-[transform,opacity] after:duration-180 after:ease-out-quint hover:text-foreground hover:after:scale-x-100 hover:after:opacity-85 focus-visible:text-foreground focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-4 focus-visible:ring-offset-background focus-visible:after:scale-x-100 aria-[current=page]:text-foreground [&_svg]:size-3.5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        /** Edge navigation, footer links: tracked uppercase. */
        index: "text-[0.6875rem] font-semibold tracking-[0.12em] uppercase",
        /** Links inside running text. */
        inline: "text-sm",
      },
    },
    defaultVariants: {
      variant: "index",
    },
  }
)

/**
 * A quiet link whose hairline underline draws in on hover. Render any router
 * link through `render`, e.g. `render={<Link href="/works" />}`.
 */
function AtlasLink({
  className,
  variant = "index",
  render,
  ...props
}: useRender.ComponentProps<"a"> & VariantProps<typeof atlasLinkVariants>) {
  return useRender({
    defaultTagName: "a",
    props: mergeProps<"a">(
      { className: cn(atlasLinkVariants({ variant }), className) },
      props
    ),
    render,
    state: {
      slot: "atlas-link",
      variant,
    },
  })
}

export { AtlasLink, atlasLinkVariants }
