import type { Meta, StoryObj } from "@storybook/react-vite"

import { Label } from "@/components/ui/label"
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select"

const meta = {
  title: "Components/Native Select",
  component: NativeSelect,
  parameters: {
    docs: {
      description: {
        component:
          "The browser's own select, dressed as an atlas field. Prefer it on dense forms and mobile, where the platform picker is faster than a custom popup.",
      },
    },
  },
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "default"] },
    disabled: { control: "boolean" },
  },
  args: {
    size: "default",
    disabled: false,
    "aria-label": "Sort entries",
  },
} satisfies Meta<typeof NativeSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <NativeSelect {...args} defaultValue="recent">
      <NativeSelectOption value="recent">Most recent</NativeSelectOption>
      <NativeSelectOption value="oldest">Oldest first</NativeSelectOption>
      <NativeSelectOption value="title">Title</NativeSelectOption>
      <NativeSelectOption value="magnitude">Magnitude</NativeSelectOption>
    </NativeSelect>
  ),
}

export const Grouped: Story = {
  render: () => (
    <div className="grid w-full max-w-xs gap-2">
      <Label htmlFor="native-constellation">Constellation</Label>
      <NativeSelect id="native-constellation" defaultValue="lyra" className="w-full">
        <NativeSelectOptGroup label="Summer triangle">
          <NativeSelectOption value="lyra">Lyra</NativeSelectOption>
          <NativeSelectOption value="cygnus">Cygnus</NativeSelectOption>
          <NativeSelectOption value="aquila">Aquila</NativeSelectOption>
        </NativeSelectOptGroup>
        <NativeSelectOptGroup label="Winter hexagon">
          <NativeSelectOption value="orion">Orion</NativeSelectOption>
          <NativeSelectOption value="taurus">Taurus</NativeSelectOption>
          <NativeSelectOption value="gemini">Gemini</NativeSelectOption>
        </NativeSelectOptGroup>
      </NativeSelect>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <NativeSelect size="sm" aria-label="Rows per page" defaultValue="25">
        <NativeSelectOption value="25">25 rows</NativeSelectOption>
        <NativeSelectOption value="50">50 rows</NativeSelectOption>
      </NativeSelect>
      <NativeSelect aria-label="Review status" defaultValue="open">
        <NativeSelectOption value="open">Open</NativeSelectOption>
        <NativeSelectOption value="signed">Signed</NativeSelectOption>
      </NativeSelect>
    </div>
  ),
}

export const Invalid: Story = {
  render: () => (
    <div className="grid w-full max-w-xs gap-2">
      <Label htmlFor="native-owner">Owner</Label>
      <NativeSelect id="native-owner" aria-invalid defaultValue="" className="w-full">
        <NativeSelectOption value="" disabled>
          Choose a reviewer
        </NativeSelectOption>
        <NativeSelectOption value="ito">Ito</NativeSelectOption>
        <NativeSelectOption value="mori">Mori</NativeSelectOption>
      </NativeSelect>
      <p className="text-sm text-destructive">
        Every entry in the queue needs an owner.
      </p>
    </div>
  ),
}

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => (
    <NativeSelect {...args} defaultValue="locked">
      <NativeSelectOption value="locked">Cold archive</NativeSelectOption>
    </NativeSelect>
  ),
}
