import type { Meta, StoryObj } from "@storybook/react-vite"

import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const meta = {
  title: "Components/Forms/Select",
  id: "components-select",
  component: Select,
  parameters: {
    docs: {
      description: {
        component:
          "A field-styled trigger that opens a popover list. The chosen item carries a signal check; use it when the options are known and short, and reach for Combobox when people need to type to find one.",
      },
    },
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const statuses = [
  { label: "Open", value: "open" },
  { label: "Waiting on reviewer", value: "waiting" },
  { label: "Signed", value: "signed" },
  { label: "Archived", value: "archived" },
]

export const Playground: Story = {
  render: () => (
    <div className="grid w-full max-w-xs gap-2">
      <Label htmlFor="select-status">Status</Label>
      <Select items={statuses} defaultValue="waiting">
        <SelectTrigger id="select-status" className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {statuses.map((status) => (
            <SelectItem key={status.value} value={status.value}>
              {status.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  ),
}

const constellations = {
  lyra: "Lyra",
  cygnus: "Cygnus",
  aquila: "Aquila",
  orion: "Orion",
  taurus: "Taurus",
  gemini: "Gemini",
}

export const Grouped: Story = {
  render: () => (
    <Select items={constellations}>
      <SelectTrigger className="w-56" aria-label="Constellation">
        <SelectValue placeholder="Choose a constellation" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Summer triangle</SelectLabel>
          <SelectItem value="lyra">Lyra</SelectItem>
          <SelectItem value="cygnus">Cygnus</SelectItem>
          <SelectItem value="aquila">Aquila</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Winter hexagon</SelectLabel>
          <SelectItem value="orion">Orion</SelectItem>
          <SelectItem value="taurus">Taurus</SelectItem>
          <SelectItem value="gemini" disabled>
            Gemini
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

const pageSizes = [
  { label: "25 rows", value: "25" },
  { label: "50 rows", value: "50" },
  { label: "100 rows", value: "100" },
]

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Select items={pageSizes} defaultValue="25">
        <SelectTrigger size="sm" aria-label="Rows per page">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {pageSizes.map((size) => (
            <SelectItem key={size.value} value={size.value}>
              {size.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select items={pageSizes} defaultValue="50">
        <SelectTrigger aria-label="Rows per page">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {pageSizes.map((size) => (
            <SelectItem key={size.value} value={size.value}>
              {size.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="grid w-full max-w-xs gap-4">
      <div className="grid gap-2">
        <Label htmlFor="select-owner">Status</Label>
        <Select items={statuses}>
          <SelectTrigger id="select-owner" aria-invalid className="w-full">
            <SelectValue placeholder="Choose a status" />
          </SelectTrigger>
          <SelectContent>
            {statuses.map((status) => (
              <SelectItem key={status.value} value={status.value}>
                {status.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-sm text-destructive">
          Every entry in the queue needs a status.
        </p>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="select-locked">Tier</Label>
        <Select items={statuses} defaultValue="archived" disabled>
          <SelectTrigger id="select-locked" className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {statuses.map((status) => (
              <SelectItem key={status.value} value={status.value}>
                {status.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
}
