import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  AudioLinesIcon,
  CopyIcon,
  LockIcon,
  NotebookPenIcon,
  RotateCwIcon,
} from "lucide-react"

import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Button } from "@/components/ui/button"
import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from "@/components/ui/message"

const meta = {
  title: "Components/Conversation/Message",
  component: Message,
  parameters: {
    docs: {
      description: {
        component:
          'Lays out one conversation turn: avatar, an index-style header, bubbles and attachments, and a faint footer for time and actions. `align="end"` mirrors the row for your own turns.',
      },
    },
  },
  argTypes: {
    align: { control: "inline-radio", options: ["start", "end"] },
  },
  args: {
    align: "start",
  },
  render: (args) => (
    <div className="w-full max-w-xl">
      <Message {...args}>
        <MessageAvatar>
          <NotebookPenIcon />
        </MessageAvatar>
        <MessageContent>
          <MessageHeader>Note-taker</MessageHeader>
          <Bubble variant={args.align === "end" ? "default" : "secondary"}>
            <BubbleContent>
              The transcript is ready. Ask for a summary, decisions, or
              follow-ups.
            </BubbleContent>
          </Bubble>
          <MessageFooter>
            <time dateTime="14:41">14:41</time>
          </MessageFooter>
        </MessageContent>
      </Message>
    </div>
  ),
} satisfies Meta<typeof Message>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const MeetingNotes: Story = {
  render: () => (
    <MessageGroup className="w-full max-w-xl gap-6">
      <Marker variant="separator">
        <MarkerContent>Design review · Oct 9</MarkerContent>
      </Marker>

      <Message align="end">
        <MessageAvatar>LO</MessageAvatar>
        <MessageContent>
          <Attachment size="sm">
            <AttachmentMedia>
              <AudioLinesIcon />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>design-review-1009.m4a</AttachmentTitle>
              <AttachmentDescription>38:12 · 41.6 MB</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
          <Bubble align="end">
            <BubbleContent>
              Summarize this and pull out the decisions.
            </BubbleContent>
          </Bubble>
          <MessageFooter>
            <time dateTime="14:40">14:40</time>
          </MessageFooter>
        </MessageContent>
      </Message>

      <Marker>
        <MarkerIcon>
          <LockIcon />
        </MarkerIcon>
        <MarkerContent>Transcribed on this device in 2 min 06 s.</MarkerContent>
      </Marker>

      <Message>
        <MessageAvatar>
          <NotebookPenIcon />
        </MessageAvatar>
        <MessageContent>
          <MessageHeader>Note-taker</MessageHeader>
          <Bubble variant="secondary">
            <BubbleContent className="flex flex-col gap-3">
              <p>
                Thirty-eight minutes, four speakers. The review settled the
                export format and deferred the sync question.
              </p>
              <div className="flex flex-col gap-1.5">
                <span className="index-label text-faint-foreground">
                  Decisions
                </span>
                <ul className="flex list-disc flex-col gap-1 pl-4 marker:text-faint-foreground">
                  <li>Markdown stays the default export.</li>
                  <li>Plain text is added under the share menu.</li>
                  <li>Speaker labels are on by default.</li>
                </ul>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="index-label text-faint-foreground">Open</span>
                <ul className="flex list-disc flex-col gap-1 pl-4 marker:text-faint-foreground">
                  <li>Whether summaries sync across devices.</li>
                </ul>
              </div>
            </BubbleContent>
          </Bubble>
          <MessageFooter>
            <time dateTime="14:41">14:41</time>
            <span aria-hidden="true">·</span>
            <span>Local model</span>
            <span className="ml-auto flex items-center gap-0.5">
              <Button variant="ghost" size="icon-xs" aria-label="Copy summary">
                <CopyIcon />
              </Button>
              <Button
                variant="ghost"
                size="icon-xs"
                aria-label="Regenerate summary"
              >
                <RotateCwIcon />
              </Button>
            </span>
          </MessageFooter>
        </MessageContent>
      </Message>

      <Message align="end">
        <MessageAvatar>LO</MessageAvatar>
        <MessageContent>
          <Bubble align="end">
            <BubbleContent>Draft follow-ups for each owner.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </MessageGroup>
  ),
}
