import type { Meta, StoryObj } from "@storybook/react-vite"

import { IndexLabel, SectionRule } from "@/components/atlas/index-label"

const meta = {
  title: "Atlas/Index Label",
  component: IndexLabel,
  parameters: {
    docs: {
      description: {
        component:
          "The index voice: short uppercase metadata with generous tracking. `SectionRule` draws a section heading as an annotation, with a hairline running to the edge.",
      },
    },
  },
  argTypes: {
    tone: {
      control: "select",
      options: ["default", "faint", "signal", "foreground"],
    },
    tracking: { control: "inline-radio", options: ["index", "signal"] },
    tick: { control: "boolean" },
  },
  args: {
    children: "Signal · Tools",
    tone: "default",
    tracking: "index",
    tick: false,
  },
} satisfies Meta<typeof IndexLabel>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Tones: Story = {
  render: () => (
    <div className="grid gap-3">
      <IndexLabel>Muted metadata</IndexLabel>
      <IndexLabel tone="faint">Faint footnote</IndexLabel>
      <IndexLabel tone="signal" tick>
        Selected object
      </IndexLabel>
      <IndexLabel tone="foreground" tracking="signal">
        Catalog
      </IndexLabel>
    </div>
  ),
}

export const SectionRules: Story = {
  render: () => (
    <div className="grid max-w-2xl gap-8">
      <SectionRule label="Tools" meta="6 instruments" />
      <SectionRule label="Production work" meta="2024 – 2026" />
      <SectionRule label="Drifting experiments" />
    </div>
  ),
}
