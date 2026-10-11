import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelineMeta,
  TimelineTime,
} from "@/components/atlas/timeline"

const meta = {
  title: "Atlas/Timeline",
  component: Timeline,
  parameters: {
    docs: {
      description: {
        component:
          "Time-indexed logs such as transcripts and activity. Times sit in a fixed mono column; the active line brightens and its time takes the signal color.",
      },
    },
  },
} satisfies Meta<typeof Timeline>

export default meta
type Story = StoryObj<typeof meta>

export const Transcript: Story = {
  render: () => (
    <Timeline className="max-w-2xl">
      <TimelineItem>
        <TimelineTime dateTime="PT0M12S">00:12</TimelineTime>
        <TimelineContent>
          Let's start with the release checklist, then the installer question.
        </TimelineContent>
        <TimelineMeta>Speaker A</TimelineMeta>
      </TimelineItem>
      <TimelineItem active>
        <TimelineTime dateTime="PT0M41S">00:41</TimelineTime>
        <TimelineContent>
          The updater works on a clean machine. The signing step still runs by
          hand, so I'd keep that on the list.
        </TimelineContent>
        <TimelineMeta>Speaker B</TimelineMeta>
      </TimelineItem>
      <TimelineItem>
        <TimelineTime dateTime="PT1M30S">01:30</TimelineTime>
        <TimelineContent>
          Agreed. I'll write it into the release notes before Friday.
        </TimelineContent>
        <TimelineMeta>Speaker A</TimelineMeta>
      </TimelineItem>
    </Timeline>
  ),
}
