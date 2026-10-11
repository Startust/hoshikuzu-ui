import type { Meta, StoryObj } from "@storybook/react-vite"
import { ArrowUpRightIcon, MoreHorizontalIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const meta = {
  title: "Components/Data Display/Card",
  component: Card,
  parameters: {
    docs: {
      description: {
        component:
          "A hairline panel over a translucent card surface. Titles are compact and tracked; the footer sits on a raised band. Set `interactive` when the whole card is a target so its edge brightens on hover.",
      },
    },
  },
  argTypes: {
    size: { control: "select", options: ["default", "sm"] },
    interactive: { control: "boolean" },
  },
  args: {
    size: "default",
    interactive: false,
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <Card {...args} className="max-w-sm">
      <CardHeader>
        <CardTitle>Albireo</CardTitle>
        <CardDescription>
          A double star in Cygnus with a gold primary and a blue companion.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-2 gap-y-2 text-sm">
          <dt className="text-2xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
            Separation
          </dt>
          <dd className="font-mono text-xs text-foreground">34.6″</dd>
          <dt className="text-2xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
            Distance
          </dt>
          <dd className="font-mono text-xs text-foreground">415 ly</dd>
        </dl>
      </CardContent>
    </Card>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Catalog review</CardTitle>
        <CardDescription>
          Oct 07 · 1 h 05 min · four speakers. Summary ready, two action items
          assigned.
        </CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon-sm" aria-label="More actions">
            <MoreHorizontalIcon />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 text-sm leading-6 text-muted-foreground">
        <p>Reconcile flagged doubles against the Washington catalog.</p>
        <p>Re-run the archive contrast pass on raised surfaces.</p>
      </CardContent>
      <CardFooter className="justify-end">
        <Button variant="outline" size="sm">
          Export
        </Button>
        <Button size="sm">Open notes</Button>
      </CardFooter>
    </Card>
  ),
}

export const Interactive: Story = {
  render: () => (
    <div className="grid max-w-2xl grid-cols-2 gap-4">
      {[
        {
          title: "Note Taker",
          body: "Local meeting capture and summaries.",
          tag: "Ready",
        },
        {
          title: "Review Pilot",
          body: "A calm queue for pull request review.",
          tag: "Beta",
        },
      ].map((tool) => (
        <a
          key={tool.title}
          href="#"
          className="block rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
        >
          <Card interactive size="sm" className="h-full">
            <CardHeader>
              <CardTitle>{tool.title}</CardTitle>
              <CardDescription>{tool.body}</CardDescription>
              <CardAction>
                <ArrowUpRightIcon className="size-4 text-faint-foreground" />
              </CardAction>
            </CardHeader>
            <CardContent>
              <Badge variant={tool.tag === "Ready" ? "success" : "signal"}>
                {tool.tag}
              </Badge>
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  ),
}

export const Compact: Story = {
  render: () => (
    <Card size="sm" className="max-w-xs">
      <CardHeader>
        <CardTitle>Transcription</CardTitle>
        <CardDescription className="font-mono text-xs">
          whisper-large-v3-turbo
        </CardDescription>
        <CardAction>
          <Badge variant="signal">Ready</Badge>
        </CardAction>
      </CardHeader>
    </Card>
  ),
}
