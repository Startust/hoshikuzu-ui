import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  AlignLeftIcon,
  CalendarDaysIcon,
  GridIcon,
  ListIcon,
  MapIcon,
} from "lucide-react"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const meta = {
  title: "Components/Toggle Group",
  component: ToggleGroup,
  parameters: {
    docs: {
      description: {
        component:
          "By default a segmented control: one hairline container with the chosen segment raised, for switching views or time ranges. Use `variant=\"outline\"` for a row of independent toggles, joined with `spacing={0}`.",
      },
    },
  },
  argTypes: {
    variant: { control: "inline-radio", options: ["default", "outline"] },
    size: { control: "inline-radio", options: ["sm", "default", "lg"] },
    orientation: { control: "inline-radio", options: ["horizontal", "vertical"] },
    multiple: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    variant: "default",
    size: "default",
    orientation: "horizontal",
    defaultValue: ["week"],
    "aria-label": "Time range",
  },
} satisfies Meta<typeof ToggleGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="night">Night</ToggleGroupItem>
      <ToggleGroupItem value="week">Week</ToggleGroupItem>
      <ToggleGroupItem value="season">Season</ToggleGroupItem>
      <ToggleGroupItem value="year">Year</ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const ViewSwitcher: Story = {
  render: () => (
    <ToggleGroup defaultValue={["list"]} aria-label="Archive view">
      <ToggleGroupItem value="list">
        <ListIcon data-icon="inline-start" />
        List
      </ToggleGroupItem>
      <ToggleGroupItem value="grid">
        <GridIcon data-icon="inline-start" />
        Grid
      </ToggleGroupItem>
      <ToggleGroupItem value="chart">
        <MapIcon data-icon="inline-start" />
        Chart
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-3">
      <ToggleGroup size="sm" defaultValue={["open"]} aria-label="Queue filter">
        <ToggleGroupItem value="open">Open</ToggleGroupItem>
        <ToggleGroupItem value="signed">Signed</ToggleGroupItem>
        <ToggleGroupItem value="all">All</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup defaultValue={["open"]} aria-label="Queue filter">
        <ToggleGroupItem value="open">Open</ToggleGroupItem>
        <ToggleGroupItem value="signed">Signed</ToggleGroupItem>
        <ToggleGroupItem value="all">All</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup size="lg" defaultValue={["open"]} aria-label="Queue filter">
        <ToggleGroupItem value="open">Open</ToggleGroupItem>
        <ToggleGroupItem value="signed">Signed</ToggleGroupItem>
        <ToggleGroupItem value="all">All</ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
}

export const Outline: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <ToggleGroup
        variant="outline"
        multiple
        defaultValue={["stars", "labels"]}
        aria-label="Chart layers"
      >
        <ToggleGroupItem value="stars">Stars</ToggleGroupItem>
        <ToggleGroupItem value="labels">Labels</ToggleGroupItem>
        <ToggleGroupItem value="graticule">Graticule</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup
        variant="outline"
        spacing={0}
        defaultValue={["left"]}
        aria-label="Note layout"
      >
        <ToggleGroupItem value="left" aria-label="Single column">
          <AlignLeftIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="calendar" aria-label="By date">
          <CalendarDaysIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="grid" aria-label="Grid">
          <GridIcon />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ToggleGroup
      orientation="vertical"
      defaultValue={["inbox"]}
      aria-label="Review queue"
      className="w-40"
    >
      <ToggleGroupItem value="inbox">Inbox</ToggleGroupItem>
      <ToggleGroupItem value="waiting">Waiting</ToggleGroupItem>
      <ToggleGroupItem value="signed">Signed</ToggleGroupItem>
    </ToggleGroup>
  ),
}
