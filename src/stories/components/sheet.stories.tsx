import type { Meta, StoryObj } from "@storybook/react-vite"
import { PanelRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const meta = {
  title: "Components/Overlays/Sheet",
  id: "components-sheet",
  component: Sheet,
  parameters: {
    docs: {
      description: {
        component:
          "A panel attached to one edge of the viewport. Use it for detail or editing that benefits from keeping the page in view behind it, such as inspecting a signal or adjusting catalog filters.",
      },
    },
  },
} satisfies Meta<typeof Sheet>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <PanelRightIcon data-icon="inline-start" />
        Signal details
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Northern drift</SheetTitle>
          <SheetDescription>
            First observed in the review queue on 3 September. Edit the label
            and owner; the catalog record updates when you save.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 px-6">
          <div className="grid gap-2">
            <Label htmlFor="sheet-label">Label</Label>
            <Input id="sheet-label" defaultValue="Northern drift" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="sheet-owner">Owner</Label>
            <Input id="sheet-owner" defaultValue="Archive desk" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose render={<Button variant="outline" />}>Cancel</SheetClose>
          <SheetClose render={<Button />}>Save changes</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

const sides = ["top", "right", "bottom", "left"] as const

export const Sides: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      {sides.map((side) => (
        <Sheet key={side}>
          <SheetTrigger render={<Button variant="outline" />}>
            {side}
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Atlas tools</SheetTitle>
              <SheetDescription>
                Attached to the {side} edge, with a hairline on the inner side.
              </SheetDescription>
            </SheetHeader>
            <ul className="grid gap-1 px-6 pb-6 text-sm text-muted-foreground">
              <li>Star catalog</li>
              <li>Meeting notes</li>
              <li>Review queue</li>
            </ul>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  ),
}
