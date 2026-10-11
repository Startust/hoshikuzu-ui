import type { Meta, StoryObj } from "@storybook/react-vite"

import { DirectionProvider } from "@/components/ui/direction"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const meta = {
  title: "Components/Layout/Direction",
  id: "components-direction",
  component: DirectionProvider,
  parameters: {
    docs: {
      description: {
        component:
          'A provider, not a surface. Set `direction="rtl"` alongside `dir="rtl"` on the container so Base UI keyboard navigation, slider travel and popup placement follow right-to-left reading. Tokens and styling are unchanged.',
      },
    },
  },
  argTypes: {
    direction: { control: "inline-radio", options: ["ltr", "rtl"] },
  },
  args: {
    direction: "rtl",
  },
  render: ({ direction = "ltr" }) => (
    <DirectionProvider direction={direction}>
      <div dir={direction} className="flex w-full max-w-md flex-col gap-6">
        <Tabs defaultValue="index">
          <TabsList>
            <TabsTrigger value="index">Index</TabsTrigger>
            <TabsTrigger value="works">Works</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
          </TabsList>
          <TabsContent
            value="index"
            className="leading-6 text-muted-foreground"
          >
            Arrow keys move between tabs in reading order.
          </TabsContent>
          <TabsContent
            value="works"
            className="leading-6 text-muted-foreground"
          >
            Catalogued, in progress and archived works.
          </TabsContent>
          <TabsContent
            value="notes"
            className="leading-6 text-muted-foreground"
          >
            Field notes and meeting summaries.
          </TabsContent>
        </Tabs>
        <div className="flex flex-col gap-3">
          <span className="index-label text-faint-foreground">
            Playback speed
          </span>
          <Slider defaultValue={[40]} aria-label="Playback speed" />
        </div>
      </div>
    </DirectionProvider>
  ),
} satisfies Meta<typeof DirectionProvider>

export default meta
type Story = StoryObj<typeof meta>

export const RightToLeft: Story = {}

export const LeftToRight: Story = {
  args: { direction: "ltr" },
}
