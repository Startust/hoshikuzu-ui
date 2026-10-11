import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  CalendarClockIcon,
  ClockIcon,
  HomeIcon,
  InboxIcon,
  MessageSquareWarningIcon,
  SendIcon,
  SettingsIcon,
  StarIcon,
} from "lucide-react"

import { BottomNav, BottomNavItem } from "@/components/atlas/bottom-nav"
import { SectionRule } from "@/components/atlas/index-label"
import {
  Measurement,
  MeasurementGrid,
  MeasurementIcon,
  MeasurementLabel,
  MeasurementValue,
} from "@/components/atlas/measurement"
import {
  PageHeader,
  PageHeaderEyebrow,
  PageHeaderHeading,
  PageHeaderTitle,
} from "@/components/atlas/page-header"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
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
  title: "Patterns/Review Queue",
  parameters: {
    layout: "fullscreen",
    viewport: { defaultViewport: "mobile2" },
    docs: {
      description: {
        component:
          "review-pilot's mobile work queue: measurements answer what needs attention, rows carry real state, and a warning notice keeps test mode visible before anything is published.",
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const REVIEWS = [
  {
    author: "M. Tanaka",
    rating: 5,
    excerpt: "Quick turnaround and the repair held up through the winter.",
    state: { label: "Draft ready", variant: "signal" as const },
    when: "2h",
    selected: true,
  },
  {
    author: "R. Alvarez",
    rating: 2,
    excerpt: "Booked twice and the window still wasn't confirmed.",
    state: { label: "Needs care", variant: "warning" as const },
    when: "5h",
  },
  {
    author: "J. Okafor",
    rating: 4,
    excerpt: "Friendly staff. Parking was hard to find on a Saturday.",
    state: { label: "Sent", variant: "success" as const },
    when: "1d",
  },
]

export const Mobile: Story = {
  render: () => (
    <div className="relative mx-auto min-h-[812px] max-w-md bg-background pb-28 transform-[translateZ(0)]">
      <div className="grid gap-6 px-4 pt-6">
        <PageHeader className="pb-5">
          <PageHeaderHeading>
            <PageHeaderEyebrow>Northside · Today</PageHeaderEyebrow>
            <PageHeaderTitle className="text-[2rem]">Reviews</PageHeaderTitle>
          </PageHeaderHeading>
        </PageHeader>

        <MeasurementGrid className="grid-cols-2 sm:grid-cols-2">
          <Measurement tone="signal">
            <MeasurementIcon>
              <InboxIcon />
            </MeasurementIcon>
            <MeasurementValue>14</MeasurementValue>
            <MeasurementLabel>Awaiting reply</MeasurementLabel>
          </Measurement>
          <Measurement tone="warning">
            <MeasurementIcon>
              <MessageSquareWarningIcon />
            </MeasurementIcon>
            <MeasurementValue>3</MeasurementValue>
            <MeasurementLabel>Needs care</MeasurementLabel>
          </Measurement>
          <Measurement tone="success">
            <MeasurementIcon>
              <SendIcon />
            </MeasurementIcon>
            <MeasurementValue>128</MeasurementValue>
            <MeasurementLabel>Sent</MeasurementLabel>
          </Measurement>
          <Measurement>
            <MeasurementIcon>
              <ClockIcon />
            </MeasurementIcon>
            <MeasurementValue>4.2h</MeasurementValue>
            <MeasurementLabel>Median reply</MeasurementLabel>
          </Measurement>
        </MeasurementGrid>

        <Alert variant="warning">
          <MessageSquareWarningIcon />
          <AlertTitle>Publishing in test mode</AlertTitle>
          <AlertDescription>
            Replies are saved but not posted to the public listing.
          </AlertDescription>
        </Alert>

        <section className="grid gap-3">
          <SectionRule label="Queue" meta="3 of 14" />
          <ItemGroup className="gap-2">
            {REVIEWS.map((review) => (
              <Item
                key={review.author}
                variant="outline"
                aria-selected={review.selected || undefined}
                render={<a href={`#${review.author}`} />}
              >
                <ItemMedia variant="icon">
                  <StarIcon />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>
                    {review.author}
                    <span className="font-mono text-xs text-faint-foreground">
                      {review.rating}/5
                    </span>
                  </ItemTitle>
                  <ItemDescription>{review.excerpt}</ItemDescription>
                </ItemContent>
                <ItemActions className="flex-col items-end gap-2">
                  <Badge variant={review.state.variant}>{review.state.label}</Badge>
                  <span className="font-mono text-xs text-faint-foreground">
                    {review.when}
                  </span>
                </ItemActions>
              </Item>
            ))}
          </ItemGroup>
        </section>
      </div>

      <BottomNav aria-label="Primary" className="absolute">
        <BottomNavItem href="#home">
          <HomeIcon />
          Home
        </BottomNavItem>
        <BottomNavItem href="#reviews" active>
          <InboxIcon />
          Reviews
        </BottomNavItem>
        <BottomNavItem href="#tasks">
          <CalendarClockIcon />
          Tasks
        </BottomNavItem>
        <BottomNavItem href="#settings">
          <SettingsIcon />
          Settings
        </BottomNavItem>
      </BottomNav>
    </div>
  ),
}
