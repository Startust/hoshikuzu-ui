import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

const meta = {
  title: "Components/Feedback/Spinner",
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component:
          "A small muted rotor for short waits. Prefer Progress when the task has a measurable length, and keep the spinner beside a label that says what is happening.",
      },
    },
  },
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner className="size-3" />
      <Spinner />
      <Spinner className="size-5" />
      <Spinner className="size-6 text-signal" />
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Spinner />
      Indexing meeting notes
    </div>
  ),
}

export const InButton: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button disabled>
        <Spinner data-icon="inline-start" className="text-primary-foreground" />
        Exporting
      </Button>
      <Button variant="outline" disabled>
        <Spinner data-icon="inline-start" />
        Syncing archive
      </Button>
    </div>
  ),
}
