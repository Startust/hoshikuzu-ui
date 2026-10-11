import type { Meta, StoryObj } from "@storybook/react-vite"
import { ArrowUpRightIcon, MoonIcon, PlusIcon, XIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

const meta = {
  title: "Components/Actions/Button",
  id: "components-button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          "Atlas controls: tight corners, tracked uppercase labels. The amber `default` fill is reserved for the one decisive action on a surface; everything else is `outline`, `secondary` or `ghost`.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "secondary", "ghost", "destructive", "link"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "default", "lg", "xl", "icon-xs", "icon-sm", "icon", "icon-lg"],
    },
    disabled: { control: "boolean" },
  },
  args: {
    children: "Open signal",
    variant: "default",
    size: "default",
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button>Open</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Discard</Button>
      <Button variant="link">Privacy</Button>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-end gap-3">
      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Start recording</Button>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button>
        <PlusIcon data-icon="inline-start" />
        New entry
      </Button>
      <Button variant="outline">
        Visit site
        <ArrowUpRightIcon data-icon="inline-end" />
      </Button>
      <Button variant="ghost" size="icon" aria-label="Switch to night atlas">
        <MoonIcon />
      </Button>
      <Button variant="outline" size="icon-sm" aria-label="Close">
        <XIcon />
      </Button>
    </div>
  ),
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const AsLink: Story = {
  render: () => (
    <Button
      variant="outline"
      nativeButton={false}
      render={<a href="https://github.com/yihuil1992/hoshikuzu-ui" />}
    >
      Repository
      <ArrowUpRightIcon data-icon="inline-end" />
    </Button>
  ),
}
