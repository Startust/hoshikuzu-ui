import type { Meta, StoryObj } from "@storybook/react-vite"
import { LockIcon, MicIcon, PauseIcon } from "lucide-react"

import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"

const meta = {
  title: "Components/Conversation/Marker",
  component: Marker,
  parameters: {
    docs: {
      description: {
        component:
          "Quiet annotations inside a conversation: session boundaries, recording state, privacy notes. `separator` draws a hairline with a short index label; `default` is a faint inline note.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["default", "separator", "border"],
    },
  },
  args: {
    variant: "separator",
  },
  render: (args) => (
    <div className="w-full max-w-lg">
      <Marker {...args}>
        <MarkerContent>Design review · Oct 9</MarkerContent>
      </Marker>
    </div>
  ),
} satisfies Meta<typeof Marker>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const InTranscript: Story = {
  render: () => (
    <div className="flex w-full max-w-lg flex-col gap-4">
      <Marker variant="separator">
        <MarkerContent>Thursday · Oct 9</MarkerContent>
      </Marker>
      <Marker>
        <MarkerIcon>
          <MicIcon />
        </MarkerIcon>
        <MarkerContent>
          Recording started at <span className="font-mono">14:02</span>
        </MarkerContent>
      </Marker>
      <p className="text-sm leading-6 text-foreground">
        Mika: Markdown stays the default export. Plain text becomes an option
        under the share menu.
      </p>
      <Marker>
        <MarkerIcon>
          <PauseIcon />
        </MarkerIcon>
        <MarkerContent>
          Paused for <span className="font-mono">3:40</span>
        </MarkerContent>
      </Marker>
      <Marker variant="border">
        <MarkerIcon>
          <LockIcon />
        </MarkerIcon>
        <MarkerContent>
          Transcribed on this device. Audio is kept for 30 days.{" "}
          <a href="#settings">Change</a>
        </MarkerContent>
      </Marker>
    </div>
  ),
}
