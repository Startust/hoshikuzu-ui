import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  ChevronRightIcon,
  FileTextIcon,
  GitPullRequestIcon,
  MicIcon,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

const meta = {
  title: "Components/Data Display/Item",
  component: Item,
  parameters: {
    docs: {
      description: {
        component:
          "A record row: media, title, description and actions. Rendered as a link or button it brightens on hover and presses; when selected or current it takes a signal hairline, a faint wash and a 1px inset marker on the leading edge.",
      },
    },
  },
  argTypes: {
    variant: { control: "select", options: ["default", "outline", "muted"] },
    size: { control: "select", options: ["default", "sm", "xs"] },
  },
  args: {
    variant: "outline",
    size: "default",
  },
} satisfies Meta<typeof Item>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <Item {...args} className="max-w-md">
      <ItemMedia variant="icon">
        <FileTextIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Catalog import notes</ItemTitle>
        <ItemDescription>
          Two hundred and twelve entries, three flagged for duplicate
          designations.
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm">
          Open
        </Button>
      </ItemActions>
    </Item>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex max-w-md flex-col gap-3">
      <Item variant="default">
        <ItemContent>
          <ItemTitle>Default</ItemTitle>
          <ItemDescription>
            No frame; sits directly on the panel.
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Outline</ItemTitle>
          <ItemDescription>
            Hairline frame over a faint card fill.
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="muted">
        <ItemContent>
          <ItemTitle>Muted</ItemTitle>
          <ItemDescription>Raised fill for secondary groups.</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  ),
}

const meetings = [
  { id: "sync", title: "Design sync", meta: "Oct 06 · 42 min · 3 speakers" },
  {
    id: "catalog",
    title: "Catalog review",
    meta: "Oct 07 · 1 h 05 min · 4 speakers",
  },
  { id: "plan", title: "Observing plan", meta: "Oct 09 · 27 min · 2 speakers" },
]

export const MeetingList: Story = {
  render: () => (
    <ItemGroup className="max-w-md gap-2">
      {meetings.map((meeting) => (
        <Item
          key={meeting.id}
          variant="outline"
          size="sm"
          render={<a href="#" />}
          aria-current={meeting.id === "catalog" ? "page" : undefined}
        >
          <ItemMedia variant="icon">
            <MicIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{meeting.title}</ItemTitle>
            <ItemDescription className="font-mono text-xs">
              {meeting.meta}
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="size-4 text-faint-foreground" />
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  ),
}

const reviews = [
  {
    id: "PR-482",
    title: "Tighten focus ring on segmented tabs",
    author: "MK",
    state: "ready" as const,
  },
  {
    id: "PR-479",
    title: "Archive mode for the measurement panel",
    author: "RI",
    state: "changes" as const,
  },
  {
    id: "PR-476",
    title: "Drop backdrop blur from dialog overlay",
    author: "SN",
    state: "review" as const,
  },
]

const reviewBadge = {
  ready: <Badge variant="success">Ready</Badge>,
  changes: <Badge variant="warning">Changes</Badge>,
  review: <Badge variant="signal">In review</Badge>,
}

export const ReviewQueue: Story = {
  render: () => (
    <ItemGroup
      role="listbox"
      aria-label="Review queue"
      className="max-w-lg gap-1 rounded-sm border border-border bg-card/80 p-1"
    >
      {reviews.map((review) => (
        <Item
          key={review.id}
          role="option"
          aria-selected={review.id === "PR-479"}
          size="sm"
          render={<button type="button" />}
        >
          <ItemMedia>
            <Avatar size="sm">
              <AvatarFallback>{review.author}</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{review.title}</ItemTitle>
            <ItemDescription className="font-mono text-xs">
              {review.id}
            </ItemDescription>
          </ItemContent>
          <ItemActions>{reviewBadge[review.state]}</ItemActions>
        </Item>
      ))}
    </ItemGroup>
  ),
}

export const Static: Story = {
  render: () => (
    <Item variant="muted" className="max-w-md">
      <ItemMedia variant="icon">
        <GitPullRequestIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Branch protection on main</ItemTitle>
        <ItemDescription>
          Two approvals and a green check run are required before merge.
        </ItemDescription>
      </ItemContent>
    </Item>
  ),
}
