import type { Meta, StoryObj } from "@storybook/react-vite"
import { BookmarkIcon } from "lucide-react"

import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from "@/components/ui/bubble"

const meta = {
  title: "Components/Conversation/Bubble",
  component: Bubble,
  parameters: {
    docs: {
      description: {
        component:
          "A conversation turn as a squared plate, not a rounded balloon. `default` is your own turn (raised, brighter hairline); `secondary` is the other voice (translucent card). `tinted` marks a highlighted excerpt, `ghost` drops the plate for long-form answers.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "muted",
        "tinted",
        "outline",
        "ghost",
        "destructive",
      ],
    },
    align: { control: "inline-radio", options: ["start", "end"] },
  },
  args: {
    variant: "default",
    align: "start",
  },
  render: (args) => (
    <Bubble {...args}>
      <BubbleContent>
        Which decisions came out of the design review?
      </BubbleContent>
    </Bubble>
  ),
} satisfies Meta<typeof Bubble>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Variants: Story = {
  render: () => (
    <BubbleGroup className="max-w-lg">
      <Bubble align="end">
        <BubbleContent>Your turn, default.</BubbleContent>
      </Bubble>
      <Bubble variant="secondary">
        <BubbleContent>The assistant, secondary.</BubbleContent>
      </Bubble>
      <Bubble variant="muted">
        <BubbleContent>A muted aside.</BubbleContent>
      </Bubble>
      <Bubble variant="tinted">
        <BubbleContent>
          A quoted line from the transcript, tinted.
        </BubbleContent>
      </Bubble>
      <Bubble variant="outline">
        <BubbleContent>An outline plate.</BubbleContent>
      </Bubble>
      <Bubble variant="ghost">
        <BubbleContent>Ghost: no plate, for long-form answers.</BubbleContent>
      </Bubble>
      <Bubble variant="destructive">
        <BubbleContent>
          Transcription stopped: microphone disconnected.
        </BubbleContent>
      </Bubble>
    </BubbleGroup>
  ),
}

export const Exchange: Story = {
  render: () => (
    <BubbleGroup className="max-w-lg gap-3">
      <Bubble align="end">
        <BubbleContent>
          What did Mika say about the export format?
        </BubbleContent>
      </Bubble>
      <Bubble variant="secondary">
        <BubbleContent>
          She asked to keep Markdown as the default and add plain text as an
          option. Nobody objected.
        </BubbleContent>
      </Bubble>
      <Bubble variant="tinted" className="mb-3">
        <BubbleContent>
          “Markdown first. Plain text when someone needs to paste it into
          email.”
        </BubbleContent>
        <BubbleReactions aria-label="Saved to highlights">
          <BookmarkIcon />
          <span>2</span>
        </BubbleReactions>
      </Bubble>
    </BubbleGroup>
  ),
}

export const Selectable: Story = {
  render: () => (
    <BubbleGroup className="max-w-lg">
      <Bubble variant="outline">
        <BubbleContent render={<button type="button" />}>
          Summarize the last ten minutes
        </BubbleContent>
      </Bubble>
      <Bubble variant="outline">
        <BubbleContent render={<button type="button" />}>
          List open questions by owner
        </BubbleContent>
      </Bubble>
    </BubbleGroup>
  ),
}
