import type { Meta, StoryObj } from "@storybook/react-vite"

import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const meta = {
  title: "Components/Label",
  component: Label,
  parameters: {
    docs: {
      description: {
        component:
          "The index voice for form fields: short, tracked, uppercase and muted. Keep labels to a few words; put explanations in a description below the control.",
      },
    },
  },
  args: {
    children: "Constellation",
  },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const WithInput: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="label-constellation">Constellation</Label>
      <Input id="label-constellation" placeholder="Lyra" />
    </div>
  ),
}

export const WithCheckbox: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Checkbox id="label-pinned" defaultChecked />
      <Label htmlFor="label-pinned">Pinned</Label>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Checkbox id="label-locked" disabled />
      <Label htmlFor="label-locked">Locked</Label>
    </div>
  ),
}
