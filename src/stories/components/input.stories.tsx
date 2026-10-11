import type { Meta, StoryObj } from "@storybook/react-vite"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const meta = {
  title: "Components/Forms/Input",
  component: Input,
  parameters: {
    docs: {
      description: {
        component:
          "A single-line field on a translucent card surface. The hairline brightens on hover and takes the signal ring on focus; use it for titles, search terms and short catalog values.",
      },
    },
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "search", "email", "number", "password", "file"],
    },
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
  },
  args: {
    type: "text",
    placeholder: "Search the archive",
    disabled: false,
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-sm">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const WithLabel: Story = {
  render: () => (
    <div className="grid gap-2">
      <Label htmlFor="entry-title">Entry title</Label>
      <Input id="entry-title" defaultValue="Perseid shower, second night" />
      <p className="text-sm leading-6 text-muted-foreground">
        Shown at the top of the archive card and in search results.
      </p>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="state-default">Observer</Label>
        <Input id="state-default" placeholder="Name or call sign" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="state-invalid">Right ascension</Label>
        <Input id="state-invalid" defaultValue="25h 61m" aria-invalid />
        <p className="text-sm text-destructive">
          Hours run from 0 to 23, minutes from 0 to 59.
        </p>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="state-disabled">Catalog ID</Label>
        <Input
          id="state-disabled"
          defaultValue="HIP 32349"
          className="font-mono"
          disabled
        />
      </div>
    </div>
  ),
}

export const FileField: Story = {
  render: () => (
    <div className="grid gap-2">
      <Label htmlFor="plate-scan">Plate scan</Label>
      <Input id="plate-scan" type="file" />
    </div>
  ),
}
