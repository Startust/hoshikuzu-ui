import type { Meta, StoryObj } from "@storybook/react-vite"
import { ArrowUpRightIcon } from "lucide-react"

import {
  PageHeader,
  PageHeaderActions,
  PageHeaderDescription,
  PageHeaderEyebrow,
  PageHeaderHeading,
  PageHeaderTitle,
} from "@/components/atlas/page-header"
import { Starfield } from "@/components/atlas/starfield"
import { Button } from "@/components/ui/button"

const meta = {
  title: "Atlas/Page Header",
  component: PageHeader,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "The top of a tool or work page. Display-weight type lives here and nowhere else; panels and dialogs stay compact. `Starfield` supplies the page atmosphere behind it.",
      },
    },
  },
} satisfies Meta<typeof PageHeader>

export default meta
type Story = StoryObj<typeof meta>

export const ToolPage: Story = {
  render: () => (
    <div className="relative isolate min-h-80 overflow-hidden px-6 py-10">
      <Starfield />
      <div className="mx-auto max-w-5xl">
        <PageHeader>
          <PageHeaderHeading>
            <PageHeaderEyebrow>Instrument · Timers</PageHeaderEyebrow>
            <PageHeaderTitle>Meteo Timer</PageHeaderTitle>
            <PageHeaderDescription>
              Countdowns for weather rotations. Pick a region, choose a chime,
              and let the timer keep watch while you play.
            </PageHeaderDescription>
          </PageHeaderHeading>
          <PageHeaderActions>
            <Button variant="outline">Settings</Button>
            <Button>
              Start
              <ArrowUpRightIcon data-icon="inline-end" />
            </Button>
          </PageHeaderActions>
        </PageHeader>
      </div>
    </div>
  ),
}
