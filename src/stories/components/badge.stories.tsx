import type { Meta, StoryObj } from "@storybook/react-vite"
import { CheckIcon, CircleAlertIcon, RadioIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"

const meta = {
  title: "Components/Data Display/Badge",
  component: Badge,
  parameters: {
    docs: {
      description: {
        component:
          'Short index tags for state and category. Status tones (`signal`, `success`, `warning`, `destructive`) use a tinted surface and hairline, never a solid fill. Use `shape="pill"` for filter chips.',
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "outline",
        "signal",
        "success",
        "warning",
        "destructive",
        "ghost",
        "link",
      ],
    },
    shape: { control: "select", options: ["tag", "pill"] },
  },
  args: {
    children: "Indexed",
    variant: "default",
    shape: "tag",
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge>Pinned</Badge>
      <Badge variant="secondary">Draft</Badge>
      <Badge variant="outline">Archive</Badge>
      <Badge variant="signal">Live</Badge>
      <Badge variant="success">Ready</Badge>
      <Badge variant="warning">Stale</Badge>
      <Badge variant="destructive">Failed</Badge>
      <Badge variant="ghost">Muted</Badge>
      <Badge variant="link" render={<a href="#" />}>
        Source
      </Badge>
    </div>
  ),
}

export const Pills: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge shape="pill" variant="outline">
        Cygnus
      </Badge>
      <Badge shape="pill" variant="signal">
        Lyra
      </Badge>
      <Badge shape="pill" variant="outline">
        Aquila
      </Badge>
      <Badge shape="pill" variant="secondary">
        Doubles
      </Badge>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="signal">
        <RadioIcon data-icon="inline-start" />
        Recording
      </Badge>
      <Badge variant="success">
        <CheckIcon data-icon="inline-start" />
        Synced
      </Badge>
      <Badge variant="warning">
        <CircleAlertIcon data-icon="inline-start" />
        Model update
      </Badge>
    </div>
  ),
}

export const InContext: Story = {
  render: () => (
    <div className="flex max-w-md items-center justify-between gap-4 rounded-sm border border-border bg-card/80 px-4 py-3">
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium text-foreground">
          Archive mode for the measurement panel
        </span>
        <span className="font-mono text-xs text-faint-foreground">PR-479</span>
      </div>
      <Badge variant="warning">Changes</Badge>
    </div>
  ),
}
