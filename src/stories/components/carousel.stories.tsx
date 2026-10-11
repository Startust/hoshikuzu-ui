import type { Meta, StoryObj } from "@storybook/react-vite"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const meta = {
  title: "Components/Data Display/Carousel",
  id: "components-carousel",
  component: Carousel,
  parameters: {
    docs: {
      description: {
        component:
          "A horizontal strip for browsing plates or previews one frame at a time. Navigation uses small outline buttons; arrow keys move between slides.",
      },
    },
  },
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

const plates = [
  { id: "M31", name: "Andromeda Galaxy", exposure: "24 × 300 s" },
  { id: "M45", name: "Pleiades", exposure: "36 × 120 s" },
  { id: "NGC 7000", name: "North America Nebula", exposure: "18 × 600 s" },
  { id: "M57", name: "Ring Nebula", exposure: "60 × 30 s" },
  { id: "M13", name: "Hercules Cluster", exposure: "40 × 60 s" },
]

export const Plates: Story = {
  render: () => (
    <div className="px-12">
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {plates.map((plate) => (
            <CarouselItem key={plate.id}>
              <Card size="sm" className="pt-0">
                <div className="aspect-[4/3] border-b border-border bg-background atlas-starfield" />
                <CardContent className="flex items-baseline justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-2xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                      {plate.id}
                    </span>
                    <span className="text-sm text-foreground">
                      {plate.name}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-faint-foreground">
                    {plate.exposure}
                  </span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
}

export const MultipleVisible: Story = {
  render: () => (
    <div className="px-12">
      <Carousel opts={{ align: "start" }} className="w-full max-w-xl">
        <CarouselContent>
          {plates.map((plate) => (
            <CarouselItem key={plate.id} className="basis-1/3">
              <figure className="flex flex-col gap-2">
                <div className="aspect-square rounded-sm border border-border bg-background atlas-starfield" />
                <figcaption className="font-mono text-xs text-muted-foreground">
                  {plate.id}
                </figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
}
