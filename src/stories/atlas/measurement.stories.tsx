import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  ClockIcon,
  InboxIcon,
  MessageSquareWarningIcon,
  SendIcon,
} from "lucide-react"

import {
  Measurement,
  MeasurementGrid,
  MeasurementIcon,
  MeasurementLabel,
  MeasurementNote,
  MeasurementUnit,
  MeasurementValue,
} from "@/components/atlas/measurement"

const meta = {
  title: "Atlas/Measurement",
  component: Measurement,
  parameters: {
    docs: {
      description: {
        component:
          "Readings from an instrument: light numerals over a tracked label. Group them on a `MeasurementGrid`, whose 1px gaps are the rules. Tone tints only the icon, so numbers stay calm.",
      },
    },
  },
  argTypes: {
    tone: {
      control: "select",
      options: ["default", "signal", "success", "warning", "destructive"],
    },
  },
} satisfies Meta<typeof Measurement>

export default meta
type Story = StoryObj<typeof meta>

export const Single: Story = {
  args: { tone: "signal" },
  render: (args) => (
    <Measurement {...args} className="w-56 rounded-sm border border-border bg-card">
      <MeasurementIcon>
        <InboxIcon />
      </MeasurementIcon>
      <MeasurementValue>14</MeasurementValue>
      <MeasurementLabel>Awaiting reply</MeasurementLabel>
    </Measurement>
  ),
}

export const ReviewQueue: Story = {
  render: () => (
    <MeasurementGrid className="max-w-3xl">
      <Measurement tone="signal">
        <MeasurementIcon>
          <InboxIcon />
        </MeasurementIcon>
        <MeasurementValue>14</MeasurementValue>
        <MeasurementLabel>Awaiting reply</MeasurementLabel>
      </Measurement>
      <Measurement tone="warning">
        <MeasurementIcon>
          <MessageSquareWarningIcon />
        </MeasurementIcon>
        <MeasurementValue>3</MeasurementValue>
        <MeasurementLabel>Needs care</MeasurementLabel>
      </Measurement>
      <Measurement tone="success">
        <MeasurementIcon>
          <SendIcon />
        </MeasurementIcon>
        <MeasurementValue>128</MeasurementValue>
        <MeasurementLabel>Sent this month</MeasurementLabel>
      </Measurement>
      <Measurement>
        <MeasurementIcon>
          <ClockIcon />
        </MeasurementIcon>
        <MeasurementValue>
          4.2<MeasurementUnit>h</MeasurementUnit>
        </MeasurementValue>
        <MeasurementLabel>Median response</MeasurementLabel>
        <MeasurementNote>Last 30 days</MeasurementNote>
      </Measurement>
    </MeasurementGrid>
  ),
}
