import type { Meta, StoryObj } from "@storybook/react-vite"
import { BellIcon, EyeIcon, PinIcon, StarIcon } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

const meta = {
  title: "Components/Actions/Toggle",
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component:
          "A two-state button for view options and marks such as pin, watch or star. When pressed it lifts onto the raised surface with a brighter hairline; it never fills with a solid color.",
      },
    },
  },
  argTypes: {
    variant: { control: "inline-radio", options: ["default", "outline"] },
    size: { control: "inline-radio", options: ["sm", "default", "lg"] },
    disabled: { control: "boolean" },
    defaultPressed: { control: "boolean" },
  },
  args: {
    variant: "default",
    size: "default",
    defaultPressed: false,
    disabled: false,
    children: "Watch",
  },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const EntryMarks: Story = {
  render: () => (
    <div className="flex items-center gap-1">
      <Toggle aria-label="Pin entry" defaultPressed>
        <PinIcon />
      </Toggle>
      <Toggle aria-label="Star entry">
        <StarIcon />
      </Toggle>
      <Toggle aria-label="Notify on change">
        <BellIcon />
      </Toggle>
    </div>
  ),
}

export const Outline: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle variant="outline" defaultPressed>
        <EyeIcon data-icon="inline-start" />
        Show labels
      </Toggle>
      <Toggle variant="outline">
        <StarIcon data-icon="inline-start" />
        Starred only
      </Toggle>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Toggle variant="outline" size="sm" defaultPressed>
        Grid
      </Toggle>
      <Toggle variant="outline" defaultPressed>
        Grid
      </Toggle>
      <Toggle variant="outline" size="lg" defaultPressed>
        Grid
      </Toggle>
    </div>
  ),
}
