import type { Meta, StoryObj } from "@storybook/react-vite"

import { Separator } from "@/components/ui/separator"

const meta = {
  title: "Components/Layout/Separator",
  id: "components-separator",
  component: Separator,
  parameters: {
    docs: {
      description: {
        component:
          "A single hairline. Use it to divide groups inside a panel or between inline metadata; reach for spacing first and a rule only when the groups would otherwise blur together.",
      },
    },
  },
  argTypes: {
    orientation: { control: "select", options: ["horizontal", "vertical"] },
  },
  args: {
    orientation: "horizontal",
  },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <div className="flex h-24 w-72 items-center justify-center">
      <Separator {...args} />
    </div>
  ),
}

export const InPanel: Story = {
  render: () => (
    <div className="max-w-sm rounded-sm border border-border bg-card/80 p-4">
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold tracking-[0.08em] text-foreground">
          Albireo
        </span>
        <span className="text-sm leading-6 text-muted-foreground">
          A double star in Cygnus with a gold primary and a blue companion.
        </span>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-3 font-mono text-xs text-muted-foreground">
        <span>β Cyg</span>
        <Separator orientation="vertical" />
        <span>mag 3.05</span>
        <Separator orientation="vertical" />
        <span>415 ly</span>
      </div>
    </div>
  ),
}
