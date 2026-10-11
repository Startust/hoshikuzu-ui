import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  ArchiveIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MinusIcon,
  PlusIcon,
  SearchIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"

const meta = {
  title: "Components/Button Group",
  component: ButtonGroup,
  parameters: {
    docs: {
      description: {
        component:
          "Joins related controls into one hairline strip so they read as a single tool: paging, zoom steps, a field with its action.",
      },
    },
  },
  argTypes: {
    orientation: { control: "inline-radio", options: ["horizontal", "vertical"] },
  },
  args: {
    orientation: "horizontal",
  },
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <ButtonGroup {...args} aria-label="Entry actions">
      <Button variant="outline">Open</Button>
      <Button variant="outline">Duplicate</Button>
      <Button variant="outline">
        <ArchiveIcon data-icon="inline-start" />
        Archive
      </Button>
    </ButtonGroup>
  ),
}

export const Paging: Story = {
  render: () => (
    <ButtonGroup aria-label="Review queue paging">
      <Button variant="outline" size="icon" aria-label="Previous entry">
        <ChevronLeftIcon />
      </Button>
      <ButtonGroupText className="font-mono tracking-normal normal-case">
        12 / 48
      </ButtonGroupText>
      <Button variant="outline" size="icon" aria-label="Next entry">
        <ChevronRightIcon />
      </Button>
    </ButtonGroup>
  ),
}

export const WithInput: Story = {
  render: () => (
    <ButtonGroup className="w-full max-w-md" aria-label="Catalog lookup">
      <ButtonGroupText>Catalog</ButtonGroupText>
      <Input placeholder="HIP 91262" className="font-mono" aria-label="Catalog ID" />
      <Button variant="outline" size="icon" aria-label="Look up">
        <SearchIcon />
      </Button>
    </ButtonGroup>
  ),
}

export const SplitAction: Story = {
  render: () => (
    <ButtonGroup aria-label="Sign entry">
      <Button>Sign and file</Button>
      <ButtonGroupSeparator className="bg-primary-foreground/25" />
      <Button size="icon" aria-label="More signing options">
        <ChevronDownIcon />
      </Button>
    </ButtonGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical" aria-label="Chart zoom">
      <Button variant="outline" size="icon" aria-label="Zoom in">
        <PlusIcon />
      </Button>
      <Button variant="outline" size="icon" aria-label="Zoom out">
        <MinusIcon />
      </Button>
    </ButtonGroup>
  ),
}
