import type { Meta, StoryObj } from "@storybook/react-vite"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const meta = {
  title: "Components/Scroll Area",
  component: ScrollArea,
  parameters: {
    docs: {
      description: {
        component:
          "A bounded scroll region with a thin signal-tinted thumb. Use inside fixed-height panels such as transcripts, logs and catalogs so the page itself stays still.",
      },
    },
  },
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

const transcript = [
  {
    time: "00:00:04",
    speaker: "Mira",
    line: "Let's start with the catalog import. Did the Cygnus batch finish?",
  },
  {
    time: "00:00:11",
    speaker: "Ren",
    line: "It finished overnight. Two hundred and twelve entries, three flagged for review.",
  },
  { time: "00:00:19", speaker: "Mira", line: "What were the flags?" },
  {
    time: "00:00:23",
    speaker: "Ren",
    line: "Duplicate designations. The survey used an older numbering for the doubles.",
  },
  {
    time: "00:00:34",
    speaker: "Sora",
    line: "I can reconcile those against the Washington catalog this afternoon.",
  },
  {
    time: "00:00:41",
    speaker: "Mira",
    line: "Good. Next item is the archive mode contrast pass.",
  },
  {
    time: "00:00:48",
    speaker: "Sora",
    line: "Muted text on raised surfaces was just under target. I darkened it a step.",
  },
  {
    time: "00:00:57",
    speaker: "Ren",
    line: "Does that change the faint tier too?",
  },
  {
    time: "00:01:02",
    speaker: "Sora",
    line: "No, faint stays as it is. It is only used for metadata.",
  },
  {
    time: "00:01:10",
    speaker: "Mira",
    line: "Then we can close that ticket. Last item: recording retention.",
  },
]

export const Transcript: Story = {
  render: () => (
    <ScrollArea className="h-72 w-full max-w-md rounded-sm border border-border bg-card/80">
      <div className="flex flex-col gap-4 p-4">
        {transcript.map((entry) => (
          <div key={entry.time} className="flex flex-col gap-1">
            <div className="flex items-baseline gap-3">
              <span className="text-2xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                {entry.speaker}
              </span>
              <span className="font-mono text-xs text-faint-foreground">
                {entry.time}
              </span>
            </div>
            <p className="text-sm leading-6 text-foreground">{entry.line}</p>
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}

const constellations = [
  "Andromeda",
  "Aquila",
  "Auriga",
  "Boötes",
  "Cassiopeia",
  "Cepheus",
  "Cygnus",
  "Draco",
  "Hercules",
  "Lyra",
  "Orion",
  "Pegasus",
  "Perseus",
  "Sagitta",
  "Taurus",
  "Ursa Major",
  "Vulpecula",
]

export const List: Story = {
  render: () => (
    <ScrollArea className="h-64 w-56 rounded-sm border border-border bg-card/80">
      <div className="p-3">
        <h4 className="mb-3 text-2xs font-semibold tracking-[0.16em] text-faint-foreground uppercase">
          Northern sky
        </h4>
        {constellations.map((name) => (
          <div key={name}>
            <div className="py-2 text-sm text-foreground">{name}</div>
            <Separator />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}

const plates = ["M31", "M45", "M57", "NGC 7000", "M27", "NGC 6960", "M13"]

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-full max-w-md rounded-sm border border-border bg-card/80">
      <div className="flex w-max gap-3 p-3">
        {plates.map((plate) => (
          <figure key={plate} className="flex flex-col gap-2">
            <div className="h-28 w-36 rounded-sm border border-border bg-background atlas-starfield" />
            <figcaption className="font-mono text-xs text-muted-foreground">
              {plate}
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
}
