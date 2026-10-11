import type { Meta, StoryObj } from "@storybook/react-vite"
import { ArrowUpIcon, CopyIcon, LinkIcon, SearchIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"
import { Label } from "@/components/ui/label"

const meta = {
  title: "Components/Forms/Input Group",
  component: InputGroup,
  parameters: {
    docs: {
      description: {
        component:
          "A field with icons, units, shortcuts or small actions inside its hairline. The whole group takes the focus ring, so the addons read as part of the control rather than separate buttons.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-md">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof InputGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Search: Story = {
  render: () => (
    <InputGroup>
      <InputGroupInput placeholder="Search entries, notes, signals" />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <Kbd>/</Kbd>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const UnitsAndPrefix: Story = {
  render: () => (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="ig-source">Source URL</Label>
        <InputGroup>
          <InputGroupAddon>
            <LinkIcon />
          </InputGroupAddon>
          <InputGroupInput id="ig-source" placeholder="archive.example/plates" />
        </InputGroup>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="ig-exposure">Exposure</Label>
        <InputGroup>
          <InputGroupInput
            id="ig-exposure"
            type="number"
            defaultValue={240}
            className="font-mono"
          />
          <InputGroupAddon align="inline-end">
            <InputGroupText>seconds</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  ),
}

export const WithAction: Story = {
  render: () => (
    <InputGroup>
      <InputGroupInput
        readOnly
        defaultValue="hsk://entry/2024-08-12-perseids"
        className="font-mono text-xs md:text-xs"
        aria-label="Entry link"
      />
      <InputGroupAddon align="inline-end">
        <InputGroupButton size="icon-xs" aria-label="Copy entry link">
          <CopyIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const Composer: Story = {
  render: () => (
    <InputGroup>
      <InputGroupTextarea
        placeholder="Reply to the review thread"
        aria-label="Reply"
      />
      <InputGroupAddon align="block-end" className="border-t">
        <InputGroupText className="font-mono text-xs">0 / 500</InputGroupText>
        <InputGroupButton
          variant="default"
          size="icon-xs"
          className="ml-auto"
          aria-label="Send reply"
        >
          <ArrowUpIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const Invalid: Story = {
  render: () => (
    <div className="grid gap-2">
      <Label htmlFor="ig-ra">Right ascension</Label>
      <InputGroup>
        <InputGroupInput
          id="ig-ra"
          aria-invalid
          defaultValue="25"
          className="font-mono"
        />
        <InputGroupAddon align="inline-end">
          <InputGroupText>hours</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <p className="text-sm text-destructive">Use a value from 0 to 23.</p>
    </div>
  ),
}
