import type { Meta, StoryObj } from "@storybook/react-vite"
import { ArrowUpRightIcon } from "lucide-react"

import { Starfield } from "@/components/atlas/starfield"
import {
  StarPanel,
  StarPanelActions,
  StarPanelDescription,
  StarPanelLabel,
  StarPanelMeta,
  StarPanelTitle,
} from "@/components/atlas/star-panel"
import { Button } from "@/components/ui/button"

const meta = {
  title: "Atlas/Star Panel",
  component: StarPanel,
  parameters: {
    docs: {
      description: {
        component:
          "The signature overlay. It annotates one mapped object: a tracked catalog label, a compact title, two lines of description and a single starlight action. The connector points back at the object it describes.",
      },
    },
  },
  argTypes: {
    connector: { control: "inline-radio", options: ["none", "left", "right"] },
    translucent: { control: "boolean" },
  },
  args: {
    connector: "left",
    translucent: false,
  },
} satisfies Meta<typeof StarPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <div className="pl-12">
      <StarPanel {...args}>
        <StarPanelLabel>Signal · Tools</StarPanelLabel>
        <StarPanelTitle>Meteo Timer</StarPanelTitle>
        <StarPanelDescription>
          A quiet countdown for weather rotations, filed into the night sky.
        </StarPanelDescription>
        <StarPanelActions>
          <Button size="xs">
            Open
            <ArrowUpRightIcon data-icon="inline-end" />
          </Button>
          <Button size="xs" variant="ghost">
            Details
          </Button>
        </StarPanelActions>
      </StarPanel>
    </div>
  ),
}

export const WithReadouts: Story = {
  render: (args) => (
    <div className="pl-12">
      <StarPanel {...args}>
        <StarPanelLabel>Work · Archive</StarPanelLabel>
        <StarPanelTitle>Note Taker</StarPanelTitle>
        <StarPanelDescription>
          Local-first meeting capture. Audio never leaves the machine.
        </StarPanelDescription>
        <StarPanelMeta>
          <dt>Version</dt>
          <dd>0.2.10</dd>
          <dt>Runtime</dt>
          <dd>Tauri · Windows</dd>
          <dt>Updated</dt>
          <dd>2026-09-23</dd>
        </StarPanelMeta>
        <StarPanelActions>
          <Button size="xs">Open</Button>
        </StarPanelActions>
      </StarPanel>
    </div>
  ),
}

export const OverStarfield: Story = {
  parameters: { layout: "fullscreen" },
  args: { translucent: true },
  render: (args) => (
    <div className="relative isolate grid h-[420px] place-items-center overflow-hidden bg-background">
      <Starfield />
      <div className="relative pl-10">
        <StarPanel {...args}>
          <StarPanelLabel>Signal · Experiment</StarPanelLabel>
          <StarPanelTitle>Grinding Planner</StarPanelTitle>
          <StarPanelDescription>
            Experience curves and level penalties, charted for a long session.
          </StarPanelDescription>
          <StarPanelActions>
            <Button size="xs">Open</Button>
          </StarPanelActions>
        </StarPanel>
      </div>
    </div>
  ),
}
