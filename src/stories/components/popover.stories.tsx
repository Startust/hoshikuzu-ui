import type { Meta, StoryObj } from "@storybook/react-vite"
import { ListFilterIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

const meta = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    docs: {
      description: {
        component:
          "A small floating panel anchored to its trigger. Use it for light, interactive detail that does not need the whole screen, such as filters on a star catalog or a quick note on an entry.",
      },
    },
  },
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        <ListFilterIcon data-icon="inline-start" />
        Filters
      </PopoverTrigger>
      <PopoverContent align="start">
        <PopoverHeader>
          <PopoverTitle>Catalog filters</PopoverTitle>
          <PopoverDescription>
            Narrow the star catalog by brightness and constellation.
          </PopoverDescription>
        </PopoverHeader>
        <div className="grid gap-3">
          <div className="grid grid-cols-[6rem_1fr] items-center gap-3">
            <Label htmlFor="popover-magnitude">Max mag.</Label>
            <Input
              id="popover-magnitude"
              defaultValue="4.5"
              className="h-8 font-mono"
            />
          </div>
          <div className="grid grid-cols-[6rem_1fr] items-center gap-3">
            <Label htmlFor="popover-constellation">Region</Label>
            <Input
              id="popover-constellation"
              defaultValue="Cygnus"
              className="h-8"
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const Sides: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 py-24">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Popover key={side}>
          <PopoverTrigger render={<Button variant="outline" />}>
            {side}
          </PopoverTrigger>
          <PopoverContent side={side} className="w-56">
            <p className="text-sm leading-6 text-muted-foreground">
              Last synced with the archive at{" "}
              <span className="font-mono text-xs text-foreground">21:40</span>.
            </p>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  ),
}
