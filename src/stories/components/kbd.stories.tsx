import type { Meta, StoryObj } from "@storybook/react-vite"
import { CornerDownLeftIcon } from "lucide-react"

import { Kbd, KbdGroup } from "@/components/ui/kbd"

const meta = {
  title: "Components/Data Display/Kbd",
  component: Kbd,
  parameters: {
    docs: {
      description: {
        component:
          "A small mono keycap for shortcuts in menus, tooltips and help text. Keep it quiet: it supports the action, it is not the action.",
      },
    },
  },
  args: {
    children: "K",
  },
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Combinations: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Shift</Kbd>
        <Kbd>N</Kbd>
      </KbdGroup>
      <Kbd>Esc</Kbd>
      <Kbd aria-label="Enter">
        <CornerDownLeftIcon />
      </Kbd>
    </div>
  ),
}

export const InHelpText: Story = {
  render: () => (
    <p className="max-w-md text-sm leading-6 text-muted-foreground">
      Press <Kbd>/</Kbd> to search the archive, or{" "}
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>Enter</Kbd>
      </KbdGroup>{" "}
      to sign the open entry and move to the next one in the queue.
    </p>
  ),
}
