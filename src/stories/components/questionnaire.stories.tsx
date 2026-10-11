import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { NotebookPenIcon } from "lucide-react"

import { Bubble, BubbleContent } from "@/components/ui/bubble"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageHeader,
} from "@/components/ui/message"
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceDescription,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire"

const meta = {
  title: "Components/Conversation/Questionnaire",
  component: Questionnaire,
  parameters: {
    docs: {
      description: {
        component:
          "A short, stepped form an assistant can ask inside a conversation. Options read as selectable rows: a faint signal wash and a signal hairline when chosen. Radio dots use the signal; checkboxes use the lamp fill.",
      },
    },
  },
} satisfies Meta<typeof Questionnaire>

export default meta
type Story = StoryObj<typeof meta>

function SummarySetup({ onDone }: { onDone?: (data: FormData) => void }) {
  return (
    <Questionnaire
      shortcuts="letters"
      onSubmit={(event) => {
        event.preventDefault()
        onDone?.(new FormData(event.currentTarget))
      }}
    >
      <QuestionnaireProgress />

      <QuestionnaireItem name="length" required>
        <QuestionnaireTitle>How long should the summary be?</QuestionnaireTitle>
        <QuestionnaireDescription>
          You can change this per meeting later.
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="brief">
            Brief
            <QuestionnaireChoiceDescription>
              Decisions only, a few lines.
            </QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
          <QuestionnaireChoice value="standard" defaultChecked>
            Standard
            <QuestionnaireChoiceDescription>
              Decisions, owners and open questions.
            </QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
          <QuestionnaireChoice value="full">
            Full
            <QuestionnaireChoiceDescription>
              Topic by topic, with short quotes.
            </QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireItem name="sections" multiple>
        <QuestionnaireTitle>
          Which sections should it include?
        </QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="decisions" defaultChecked>
            Decisions
          </QuestionnaireChoice>
          <QuestionnaireChoice value="actions" defaultChecked>
            Action items with owners
          </QuestionnaireChoice>
          <QuestionnaireChoice value="questions">
            Open questions
          </QuestionnaireChoice>
          <QuestionnaireChoice value="quotes" disabled>
            Speaker quotes
            <QuestionnaireChoiceDescription>
              Needs speaker labels for this recording.
            </QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
        </QuestionnaireChoices>
      </QuestionnaireItem>

      <QuestionnaireItem name="filename">
        <QuestionnaireTitle>
          Where should the notes be saved?
        </QuestionnaireTitle>
        <QuestionnaireDescription>
          A file name inside your notes folder.
        </QuestionnaireDescription>
        <QuestionnaireInput placeholder="design-review-1009.md" />
      </QuestionnaireItem>

      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireSkip />
        <QuestionnaireNext />
        <QuestionnaireSubmit>Save preferences</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  )
}

export const SummaryPreferences: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <SummarySetup />
    </div>
  ),
}

export const InConversation: Story = {
  render: function Render() {
    const [saved, setSaved] = React.useState<string | null>(null)

    return (
      <div className="w-full max-w-xl">
        <Message>
          <MessageAvatar>
            <NotebookPenIcon />
          </MessageAvatar>
          <MessageContent>
            <MessageHeader>Note-taker</MessageHeader>
            <Bubble variant="secondary" className="max-w-full">
              <BubbleContent className="w-full">
                Before I write the summary, a few quick choices.
              </BubbleContent>
            </Bubble>
            <div className="rounded-sm border border-border bg-card/60 p-4">
              {saved ? (
                <p className="text-sm leading-6 text-muted-foreground">
                  Saved. Summaries will use the{" "}
                  <span className="text-foreground">{saved}</span> length.
                </p>
              ) : (
                <SummarySetup
                  onDone={(data) =>
                    setSaved(String(data.get("length") ?? "standard"))
                  }
                />
              )}
            </div>
          </MessageContent>
        </Message>
      </div>
    )
  },
}
