import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { NotebookPenIcon } from "lucide-react"

import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Button } from "@/components/ui/button"
import { Marker, MarkerContent } from "@/components/ui/marker"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageHeader,
} from "@/components/ui/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"

type Turn = { id: string; from: "you" | "notes"; text: string; time: string }

const transcript: Turn[] = [
  {
    id: "t1",
    from: "you",
    text: "What was the first topic in the standup?",
    time: "09:31",
  },
  {
    id: "t2",
    from: "notes",
    text: "Release timing. Aiko proposed moving the beta to Thursday so the offline transcription fix can ship with it.",
    time: "09:31",
  },
  { id: "t3", from: "you", text: "Did anyone disagree?", time: "09:32" },
  {
    id: "t4",
    from: "notes",
    text: "Ren asked whether QA could finish by Wednesday evening. Aiko said yes if the speaker-label tests are skipped for this build.",
    time: "09:32",
  },
  {
    id: "t5",
    from: "you",
    text: "Were the speaker-label tests skipped?",
    time: "09:33",
  },
  {
    id: "t6",
    from: "notes",
    text: "No decision was recorded. The topic moved on to the summary length setting before anyone confirmed.",
    time: "09:33",
  },
  {
    id: "t7",
    from: "you",
    text: "What was said about summary length?",
    time: "09:34",
  },
  {
    id: "t8",
    from: "notes",
    text: "Mika suggested three presets: brief, standard, and full. Standard keeps decisions, owners, and open questions.",
    time: "09:34",
  },
  { id: "t9", from: "you", text: "Any action items for me?", time: "09:35" },
  {
    id: "t10",
    from: "notes",
    text: "One: confirm with QA whether speaker-label tests can be deferred to the next build.",
    time: "09:35",
  },
]

const followUps = [
  "Ren will draft the QA checklist by Wednesday noon.",
  "Mika will mock the summary length presets.",
  "Aiko will post the beta date once QA confirms.",
]

function TurnRow({ turn }: { turn: Turn }) {
  const mine = turn.from === "you"
  return (
    <Message align={mine ? "end" : "start"}>
      <MessageAvatar>{mine ? "LO" : <NotebookPenIcon />}</MessageAvatar>
      <MessageContent>
        {!mine && <MessageHeader>Note-taker</MessageHeader>}
        <Bubble
          variant={mine ? "default" : "secondary"}
          align={mine ? "end" : "start"}
        >
          <BubbleContent>{turn.text}</BubbleContent>
        </Bubble>
        <MessageFooter>
          <time>{turn.time}</time>
        </MessageFooter>
      </MessageContent>
    </Message>
  )
}

function StandupThread() {
  const [extra, setExtra] = React.useState<Turn[]>([])

  const addTurn = () => {
    const next = followUps[extra.length % followUps.length]
    setExtra((turns) => [
      ...turns,
      {
        id: `f${turns.length}`,
        from: "notes",
        text: next,
        time: `09:${String(36 + turns.length).padStart(2, "0")}`,
      },
    ])
  }

  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      <div className="h-[28rem] rounded-sm border border-border bg-card/40">
        <MessageScrollerProvider autoScroll>
          <MessageScroller>
            <MessageScrollerViewport aria-label="Standup transcript chat">
              <MessageScrollerContent className="p-4">
                <MessageScrollerItem>
                  <Marker variant="separator">
                    <MarkerContent>Standup · Oct 10</MarkerContent>
                  </Marker>
                </MessageScrollerItem>
                {[...transcript, ...extra].map((turn) => (
                  <MessageScrollerItem
                    key={turn.id}
                    messageId={turn.id}
                    scrollAnchor={turn.from === "you"}
                  >
                    <TurnRow turn={turn} />
                  </MessageScrollerItem>
                ))}
              </MessageScrollerContent>
            </MessageScrollerViewport>
            <MessageScrollerButton />
          </MessageScroller>
        </MessageScrollerProvider>
      </div>
      <Button
        variant="outline"
        size="sm"
        className="self-start"
        onClick={addTurn}
      >
        Append a follow-up
      </Button>
    </div>
  )
}

const meta = {
  title: "Components/Conversation/Message Scroller",
  component: MessageScroller,
  parameters: {
    docs: {
      description: {
        component:
          "Holds a conversation in a fixed frame: keeps the latest turn in view, preserves position when older turns load, and offers a small floating control to jump back to the end. Wrap it in `MessageScrollerProvider`.",
      },
    },
  },
  render: () => <StandupThread />,
} satisfies Meta<typeof MessageScroller>

export default meta
type Story = StoryObj<typeof meta>

export const StandupTranscript: Story = {}
