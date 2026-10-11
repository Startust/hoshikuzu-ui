import type { Meta, StoryObj } from "@storybook/react-vite"
import { FolderOpenIcon, InboxIcon, MicIcon, TelescopeIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

const meta = {
  title: "Components/Feedback/Empty",
  id: "components-empty",
  component: Empty,
  parameters: {
    docs: {
      description: {
        component:
          "A dashed frame for a region with nothing in it yet. Say plainly what is missing and offer the one action that fills it.",
      },
    },
  },
} satisfies Meta<typeof Empty>

export default meta
type Story = StoryObj<typeof meta>

export const NoMeetings: Story = {
  render: () => (
    <Empty className="max-w-md">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <MicIcon />
        </EmptyMedia>
        <EmptyTitle>No meetings recorded</EmptyTitle>
        <EmptyDescription>
          Recordings and their transcripts appear here once a session ends.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Start recording</Button>
      </EmptyContent>
    </Empty>
  ),
}

export const ReviewQueueClear: Story = {
  render: () => (
    <Empty className="max-w-md">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <InboxIcon />
        </EmptyMedia>
        <EmptyTitle>Review queue is clear</EmptyTitle>
        <EmptyDescription>
          Nothing is waiting on you. New requests arrive here when a reviewer is
          assigned.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
}

export const NoResults: Story = {
  render: () => (
    <Empty className="max-w-md">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <TelescopeIcon />
        </EmptyMedia>
        <EmptyTitle>No stars match “Vela”</EmptyTitle>
        <EmptyDescription>
          The catalog only covers the northern sky. Try a constellation above
          declination −20°, or <a href="#">browse by season</a>.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center">
        <Button variant="outline">Clear search</Button>
        <Button variant="ghost">
          <FolderOpenIcon data-icon="inline-start" />
          Open archive
        </Button>
      </EmptyContent>
    </Empty>
  ),
}
