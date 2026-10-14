import type { Meta, StoryObj } from "@storybook/react-vite"

import { StatusDot, StatusIndicator } from "@/components/atlas/status-dot"

const meta = {
  title: "Atlas/Status Dot",
  component: StatusDot,
  parameters: {
    docs: {
      description: {
        component:
          'Points of light for readiness and state. Lit dots glow softly; `idle` is a hollow, unlit ring. `star` is plain "on" (starlight at night, ink teal on the archive sheet); the other tones carry meaning. `live` adds a slow halo for something actively happening, such as recording. Always pair a dot with words or a `label`.',
      },
    },
  },
  argTypes: {
    tone: {
      control: "select",
      options: ["star", "signal", "success", "warning", "destructive", "idle"],
    },
    size: { control: "inline-radio", options: ["sm", "default", "lg"] },
    live: { control: "boolean" },
  },
  args: { tone: "signal", size: "default", live: false, label: "Ready" },
} satisfies Meta<typeof StatusDot>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Indicators: Story = {
  render: () => (
    <div className="grid gap-3">
      <StatusIndicator tone="star">Desk lamp on</StatusIndicator>
      <StatusIndicator tone="signal">Microphone ready</StatusIndicator>
      <StatusIndicator tone="success">Summary saved</StatusIndicator>
      <StatusIndicator tone="warning">Model setup needed</StatusIndicator>
      <StatusIndicator tone="destructive" live>
        Recording
      </StatusIndicator>
      <StatusIndicator tone="idle">System audio idle</StatusIndicator>
    </div>
  ),
}
