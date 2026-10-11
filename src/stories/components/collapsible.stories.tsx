import type { Meta, StoryObj } from "@storybook/react-vite"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const meta = {
  title: "Components/Collapsible",
  component: Collapsible,
  parameters: {
    docs: {
      description: {
        component:
          "A headless show/hide primitive. It carries no styling of its own: compose it with a ghost Button trigger and hairline rows so hidden detail reads as part of the same panel.",
      },
    },
  },
} satisfies Meta<typeof Collapsible>

export default meta
type Story = StoryObj<typeof meta>

const checks = [
  { label: "Microphone", value: "USB Audio · 48 kHz" },
  { label: "Transcription", value: "whisper-large-v3-turbo" },
  { label: "Library", value: "~/Atlas/Notes" },
]

export const RuntimeDetails: Story = {
  render: () => (
    <Collapsible className="w-full max-w-md rounded-sm border border-border bg-card/80">
      <div className="flex items-center justify-between gap-4 px-4 py-3">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium text-foreground">
            Local runtime ready
          </span>
          <span className="text-sm text-muted-foreground">
            Three checks passed at launch.
          </span>
        </div>
        <CollapsibleTrigger
          render={
            <Button
              variant="ghost"
              size="sm"
              className="group/collapsible-trigger"
            />
          }
        >
          Details
          <ChevronDownIcon
            data-icon="inline-end"
            className="transition-transform duration-200 ease-out-expo group-aria-expanded/collapsible-trigger:rotate-180"
          />
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        <dl className="border-t border-border">
          {checks.map((check) => (
            <div
              key={check.label}
              className="flex items-center justify-between gap-4 border-b border-border px-4 py-2.5 last:border-b-0"
            >
              <dt className="text-2xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                {check.label}
              </dt>
              <dd className="font-mono text-xs text-foreground">
                {check.value}
              </dd>
            </div>
          ))}
        </dl>
      </CollapsibleContent>
    </Collapsible>
  ),
}

export const OpenByDefault: Story = {
  render: () => (
    <Collapsible defaultOpen className="w-full max-w-md">
      <CollapsibleTrigger className="group/collapsible-trigger flex w-full items-center justify-between rounded-xs border-b border-border py-3 text-left text-sm font-medium text-muted-foreground transition-[color] duration-150 ease-out-quint outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/30 aria-expanded:text-foreground">
        Archived meeting notes
        <ChevronDownIcon className="size-4 text-muted-foreground transition-transform duration-200 ease-out-expo group-aria-expanded/collapsible-trigger:rotate-180" />
      </CollapsibleTrigger>
      <CollapsibleContent className="py-3 text-sm leading-6 text-muted-foreground">
        Entries older than ninety days move here automatically. They remain
        searchable and can be pinned back to the active shelf.
      </CollapsibleContent>
    </Collapsible>
  ),
}
