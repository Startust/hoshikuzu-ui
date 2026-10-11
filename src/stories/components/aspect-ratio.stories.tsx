import type { Meta, StoryObj } from "@storybook/react-vite"

import { AspectRatio } from "@/components/ui/aspect-ratio"

const meta = {
  title: "Components/Aspect Ratio",
  component: AspectRatio,
  parameters: {
    docs: {
      description: {
        component:
          "Holds media at a fixed proportion so plates, charts and previews reserve their space before they load. It adds no surface of its own; frame it with a hairline panel.",
      },
    },
  },
  argTypes: {
    ratio: {
      control: "select",
      options: [16 / 9, 4 / 3, 3 / 2, 1],
    },
  },
  args: {
    ratio: 16 / 9,
  },
} satisfies Meta<typeof AspectRatio>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <div className="w-full max-w-md">
      <AspectRatio
        {...args}
        className="overflow-hidden rounded-sm border border-border bg-background atlas-starfield"
      />
    </div>
  ),
}

export const Plates: Story = {
  render: () => (
    <div className="grid max-w-2xl grid-cols-3 gap-4">
      {[
        { ratio: 1, label: "M57", note: "1 : 1" },
        { ratio: 4 / 3, label: "NGC 7000", note: "4 : 3" },
        { ratio: 3 / 4, label: "M31", note: "3 : 4" },
      ].map((plate) => (
        <figure key={plate.label} className="flex flex-col gap-2">
          <AspectRatio
            ratio={plate.ratio}
            className="overflow-hidden rounded-sm border border-border bg-background atlas-starfield"
          />
          <figcaption className="flex items-baseline justify-between gap-2">
            <span className="text-2xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
              {plate.label}
            </span>
            <span className="font-mono text-xs text-faint-foreground">
              {plate.note}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  ),
}
