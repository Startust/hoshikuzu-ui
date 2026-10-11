import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  ArchiveIcon,
  ChevronRightIcon,
  CpuIcon,
  MicIcon,
  PlayIcon,
  SearchIcon,
  Volume2Icon,
} from "lucide-react"

import {
  AtlasModeProvider,
  AtlasModeToggle,
} from "@/components/atlas/atlas-mode"
import {
  DataList,
  DataListAside,
  DataListItem,
  DataListLabel,
  DataListValue,
} from "@/components/atlas/data-list"
import { IndexLabel, SectionRule } from "@/components/atlas/index-label"
import { StatusDot, StatusIndicator } from "@/components/atlas/status-dot"
import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelineMeta,
  TimelineTime,
} from "@/components/atlas/timeline"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from "@/components/ui/item"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const meta = {
  title: "Patterns/Observatory Console",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "note-taker's desktop console: an atlas header, the archive index on the left, the capture instrument and session record in the middle, and an instrument stack on the right. One amber action; cyan only for readiness and selection.",
      },
    },
  },
  decorators: [
    (Story) => (
      <AtlasModeProvider storageKey="hoshikuzu-ui-storybook-mode">
        <Story />
      </AtlasModeProvider>
    ),
  ],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const MEETINGS = [
  {
    time: "10:30",
    title: "Release checklist",
    summary: "Updater verified on a clean machine; signing still manual.",
    selected: true,
  },
  {
    time: "Yesterday",
    title: "Glossary review",
    summary: "Added product names so transcripts stop splitting them.",
  },
  {
    time: "Sep 21",
    title: "Model download plan",
    summary: "Ship the small model first, offer the large one later.",
  },
]

export const Desktop: Story = {
  render: () => (
    <div className="grid min-h-[760px] grid-rows-[auto_1fr_auto] bg-background">
      <header className="flex items-center gap-6 border-b border-border px-5 py-3">
        <div className="grid gap-0.5">
          <p className="text-lg leading-tight font-light">Note Taker</p>
          <IndexLabel tone="faint">Local observatory</IndexLabel>
        </div>
        <nav aria-label="Primary" className="ml-auto flex items-center gap-1">
          <Button variant="ghost" size="sm" aria-current="page">
            Capture
          </Button>
          <Button variant="ghost" size="sm">
            <ArchiveIcon data-icon="inline-start" />
            Archive
          </Button>
        </nav>
        <AtlasModeToggle />
      </header>

      <main className="grid gap-4 p-4 lg:grid-cols-[minmax(15rem,18rem)_minmax(0,1fr)_minmax(18rem,22rem)]">
        <aside className="grid content-start gap-3 rounded-sm border border-border bg-card/60 p-3.5">
          <SectionRule label="Archive" as="h2" meta="3" />
          <div className="relative">
            <SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-faint-foreground" />
            <Input placeholder="Search meetings" className="pl-9" aria-label="Search meetings" />
          </div>
          <ItemGroup className="gap-2">
            {MEETINGS.map((meeting) => (
              <Item
                key={meeting.title}
                variant="outline"
                size="sm"
                aria-selected={meeting.selected || undefined}
                render={<button type="button" />}
              >
                <ItemContent>
                  <span className="font-mono text-xs text-signal">{meeting.time}</span>
                  <ItemTitle>{meeting.title}</ItemTitle>
                  <ItemDescription>{meeting.summary}</ItemDescription>
                </ItemContent>
              </Item>
            ))}
          </ItemGroup>
        </aside>

        <section className="grid content-start gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Capture</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-sm border border-border bg-surface-raised/60 p-3">
                  <MicIcon className="size-4 text-muted-foreground" />
                  <div className="grid gap-0.5">
                    <p className="text-sm">Microphone</p>
                    <StatusIndicator tone="signal">Ready</StatusIndicator>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-sm border border-border bg-surface-raised/60 p-3">
                  <Volume2Icon className="size-4 text-muted-foreground" />
                  <div className="grid gap-0.5">
                    <p className="text-sm">System audio</p>
                    <StatusIndicator tone="signal">Ready</StatusIndicator>
                  </div>
                </div>
              </div>
              <Button size="xl" className="w-full">
                <PlayIcon data-icon="inline-start" />
                Start recording
                <ChevronRightIcon data-icon="inline-end" />
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <IndexLabel tone="signal">Today · 10:30</IndexLabel>
              <p className="text-lg leading-tight font-light">Release checklist</p>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="transcript">
                <TabsList variant="line">
                  <TabsTrigger value="summary">Summary</TabsTrigger>
                  <TabsTrigger value="transcript">Transcript</TabsTrigger>
                  <TabsTrigger value="actions">Actions</TabsTrigger>
                </TabsList>
                <TabsContent value="summary" className="pt-2 text-sm leading-6 text-muted-foreground">
                  The updater is verified on a clean machine. Signing still runs by
                  hand and stays on the checklist until it is automated.
                </TabsContent>
                <TabsContent value="transcript" className="pt-1">
                  <Timeline>
                    <TimelineItem>
                      <TimelineTime>00:12</TimelineTime>
                      <TimelineContent>
                        Let's start with the release checklist, then the installer.
                      </TimelineContent>
                      <TimelineMeta>Speaker A</TimelineMeta>
                    </TimelineItem>
                    <TimelineItem active>
                      <TimelineTime>00:41</TimelineTime>
                      <TimelineContent>
                        The updater works on a clean machine. Signing still runs by
                        hand.
                      </TimelineContent>
                      <TimelineMeta>Speaker B</TimelineMeta>
                    </TimelineItem>
                  </Timeline>
                </TabsContent>
                <TabsContent value="actions" className="pt-2 text-sm text-muted-foreground">
                  Automate installer signing before the next release.
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        <aside className="grid content-start gap-4">
          <Card size="sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CpuIcon className="size-4 text-signal" />
                Local AI
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <DataList>
                <DataListItem>
                  <DataListLabel>Transcribe</DataListLabel>
                  <DataListValue>whisper-turbo</DataListValue>
                  <DataListAside>
                    <StatusDot tone="signal" label="Ready" />
                  </DataListAside>
                </DataListItem>
                <DataListItem>
                  <DataListLabel>Summarize</DataListLabel>
                  <DataListValue>qwen3-8b-q4</DataListValue>
                  <DataListAside>
                    <StatusDot tone="warning" label="Downloading" />
                  </DataListAside>
                </DataListItem>
              </DataList>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <IndexLabel>Model download</IndexLabel>
                  <span className="font-mono text-xs text-muted-foreground">62%</span>
                </div>
                <Progress value={62} aria-label="Model download" />
              </div>
            </CardContent>
          </Card>
          <Card size="sm">
            <CardHeader>
              <CardTitle>Session</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge variant="signal">Summarized</Badge>
              <Badge variant="secondary">12 min</Badge>
              <Badge variant="outline">2 speakers</Badge>
            </CardContent>
          </Card>
        </aside>
      </main>

      <footer className="flex items-center gap-3 border-t border-border px-5 py-2.5">
        <IndexLabel tone="faint">Stored locally</IndexLabel>
        <code className="ml-auto truncate font-mono text-xs text-faint-foreground">
          C:\Users\atlas\Documents\Note Taker
        </code>
      </footer>
    </div>
  ),
}
