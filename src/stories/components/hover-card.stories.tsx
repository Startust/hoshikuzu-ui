import type { Meta, StoryObj } from "@storybook/react-vite"

import { Badge } from "@/components/ui/badge"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const meta = {
  title: "Components/Hover Card",
  component: HoverCard,
  parameters: {
    docs: {
      description: {
        component:
          "A read-only preview that appears while a link is hovered or focused. Use it to show a catalog record or a person behind a name without leaving the page; keep anything interactive in a popover instead.",
      },
    },
  },
} satisfies Meta<typeof HoverCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <p className="max-w-md text-sm leading-6 text-muted-foreground">
      The summer triangle meeting notes reference{" "}
      <HoverCard>
        <HoverCardTrigger
          href="#altair"
          className="text-foreground underline decoration-border-strong underline-offset-4 hover:decoration-signal"
        >
          Altair
        </HoverCardTrigger>
        <HoverCardContent className="w-72">
          <div className="grid gap-3">
            <div className="flex items-start justify-between gap-3">
              <div className="grid gap-1">
                <span className="text-sm font-semibold tracking-[0.08em] text-foreground">
                  Altair
                </span>
                <span className="font-mono text-xs text-faint-foreground">
                  α Aquilae · HR 7557
                </span>
              </div>
              <Badge variant="signal">Archived</Badge>
            </div>
            <p className="text-sm leading-6 text-muted-foreground">
              A fast rotator, flattened at the poles. Twelve observations in the
              archive, the latest from August.
            </p>
            <dl className="grid grid-cols-2 gap-2 border-t border-border pt-3">
              <div className="grid gap-1">
                <dt className="index-label text-faint-foreground">Magnitude</dt>
                <dd className="font-mono text-xs text-foreground">0.76</dd>
              </div>
              <div className="grid gap-1">
                <dt className="index-label text-faint-foreground">Distance</dt>
                <dd className="font-mono text-xs text-foreground">16.7 ly</dd>
              </div>
            </dl>
          </div>
        </HoverCardContent>
      </HoverCard>{" "}
      alongside Vega and Deneb.
    </p>
  ),
}
