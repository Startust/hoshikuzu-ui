import type { Meta, StoryObj } from "@storybook/react-vite"

import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const meta = {
  title: "Components/Forms/Textarea",
  component: Textarea,
  parameters: {
    docs: {
      description: {
        component:
          "A multi-line field that grows with its content. Use it for meeting notes, review comments and archive annotations; it shares the input's surface, hairline and focus ring.",
      },
    },
  },
  argTypes: {
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
  },
  args: {
    placeholder: "Add a note to this entry",
    disabled: false,
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-md">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const MeetingNotes: Story = {
  render: () => (
    <div className="grid gap-2">
      <Label htmlFor="meeting-notes">Meeting notes</Label>
      <Textarea
        id="meeting-notes"
        defaultValue={
          "Agreed to move the plate scans into the cold archive after review.\nOpen question: who owns the index rebuild next week?"
        }
      />
      <p className="text-sm leading-6 text-muted-foreground">
        Visible to everyone on the review rota.
      </p>
    </div>
  ),
}

export const Invalid: Story = {
  render: () => (
    <div className="grid gap-2">
      <Label htmlFor="review-comment">Review comment</Label>
      <Textarea id="review-comment" aria-invalid defaultValue="ok" />
      <p className="text-sm text-destructive">
        Explain the decision in at least one full sentence.
      </p>
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "This entry is locked while the index rebuilds.",
  },
}
