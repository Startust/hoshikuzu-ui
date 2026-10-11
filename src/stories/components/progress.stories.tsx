import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress"

const meta = {
  title: "Components/Feedback/Progress",
  id: "components-progress",
  component: Progress,
  parameters: {
    docs: {
      description: {
        component:
          "A thin signal bar on a hairline track. Pair an index label with a mono readout. Pass `value={null}` when the length of the task is unknown and a short bar sweeps the track instead.",
      },
    },
  },
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100, step: 1 } },
    size: { control: "select", options: ["sm", "default"] },
  },
  args: {
    value: 62,
    size: "default",
  },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <Progress {...args} className="max-w-sm">
      <ProgressLabel>Transcribing</ProgressLabel>
      <ProgressValue />
    </Progress>
  ),
}

export const Indeterminate: Story = {
  args: { value: null },
  render: (args) => (
    <Progress {...args} className="max-w-sm">
      <ProgressLabel>Checking local models</ProgressLabel>
    </Progress>
  ),
}

export const ModelDownloads: Story = {
  render: () => (
    <div className="flex max-w-sm flex-col gap-5">
      <Progress value={100}>
        <ProgressLabel>whisper-large-v3-turbo</ProgressLabel>
        <ProgressValue />
      </Progress>
      <Progress value={38}>
        <ProgressLabel>qwen3-8b-instruct-q4</ProgressLabel>
        <ProgressValue />
      </Progress>
      <Progress value={null}>
        <ProgressLabel>Speaker embeddings</ProgressLabel>
        <span className="ml-auto font-mono text-xs text-faint-foreground">
          queued
        </span>
      </Progress>
    </div>
  ),
}

export const Compact: Story = {
  render: () => (
    <div className="flex max-w-xs flex-col gap-3">
      <div className="flex items-center gap-3">
        <span className="w-24 font-mono text-xs text-muted-foreground">
          Lyra
        </span>
        <Progress
          value={84}
          size="sm"
          aria-label="Lyra survey coverage"
          className="flex-1"
        />
      </div>
      <div className="flex items-center gap-3">
        <span className="w-24 font-mono text-xs text-muted-foreground">
          Cygnus
        </span>
        <Progress
          value={57}
          size="sm"
          aria-label="Cygnus survey coverage"
          className="flex-1"
        />
      </div>
      <div className="flex items-center gap-3">
        <span className="w-24 font-mono text-xs text-muted-foreground">
          Aquila
        </span>
        <Progress
          value={23}
          size="sm"
          aria-label="Aquila survey coverage"
          className="flex-1"
        />
      </div>
    </div>
  ),
}
