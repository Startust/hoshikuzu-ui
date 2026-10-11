import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"

import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

const meta = {
  title: "Components/Forms/Slider",
  component: Slider,
  parameters: {
    docs: {
      description: {
        component:
          "A thin hairline track with a signal range and a small starlight thumb. Use it for continuous values where the exact number matters less than the position, such as magnitude limits or playback speed.",
      },
    },
  },
  argTypes: {
    disabled: { control: "boolean" },
    step: { control: "number" },
  },
  args: {
    defaultValue: [40],
    max: 100,
    step: 1,
    disabled: false,
    "aria-label": "Star density",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-sm">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

function MagnitudeRange() {
  const [range, setRange] = useState<number[]>([2, 6.5])
  return (
    <div className="grid gap-3">
      <div className="flex items-center justify-between">
        <Label>Magnitude</Label>
        <span className="font-mono text-xs text-muted-foreground">
          {range[0].toFixed(1)} to {range[1].toFixed(1)}
        </span>
      </div>
      <Slider
        value={range}
        onValueChange={(value) => setRange(value as number[])}
        min={-1.5}
        max={9}
        step={0.5}
        aria-label="Magnitude range"
      />
      <p className="text-sm leading-6 text-muted-foreground">
        Only stars inside this brightness band appear on the chart.
      </p>
    </div>
  )
}

export const Range: Story = {
  render: () => <MagnitudeRange />,
}

export const Vertical: Story = {
  render: () => (
    <div className="flex h-48 items-stretch gap-8">
      <Slider
        orientation="vertical"
        defaultValue={[70]}
        aria-label="Playback volume"
      />
      <Slider
        orientation="vertical"
        defaultValue={[30]}
        aria-label="Grid opacity"
      />
    </div>
  ),
}

export const Disabled: Story = {
  args: { disabled: true, defaultValue: [60] },
}
