import type { Meta, StoryObj } from "@storybook/react-vite"
import { InboxIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const meta = {
  title: "Components/Overlays/Drawer",
  component: Drawer,
  parameters: {
    docs: {
      description: {
        component:
          "A bottom sheet for narrow screens that can be swiped closed. Use it where a dialog would feel cramped on mobile, such as working through a short review queue.",
      },
    },
  },
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

const queue = [
  { name: "Altair transit notes", status: "Ready", tone: "success" },
  { name: "Weekly sync, 9 Oct", status: "Needs review", tone: "warning" },
  { name: "Deneb spectrum import", status: "Queued", tone: "secondary" },
] as const

export const Default: Story = {
  render: () => (
    <Drawer showSwipeHandle>
      <DrawerTrigger render={<Button variant="outline" />}>
        <InboxIcon data-icon="inline-start" />
        Review queue
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Review queue</DrawerTitle>
          <DrawerDescription>
            Three entries are waiting. Approve them here or open each one for a
            full read.
          </DrawerDescription>
        </DrawerHeader>
        <ul className="grid px-6 py-3">
          {queue.map((item) => (
            <li
              key={item.name}
              className="flex items-center justify-between gap-3 border-b border-border py-3 last:border-b-0"
            >
              <span className="text-sm text-foreground">{item.name}</span>
              <Badge variant={item.tone}>{item.status}</Badge>
            </li>
          ))}
        </ul>
        <DrawerFooter>
          <Button>Approve ready entries</Button>
          <DrawerClose render={<Button variant="outline" />}>Later</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const FromRight: Story = {
  render: () => (
    <Drawer swipeDirection="right">
      <DrawerTrigger render={<Button variant="outline" />}>
        Open tools
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Atlas tools</DrawerTitle>
          <DrawerDescription>
            Swipe right or press Escape to close.
          </DrawerDescription>
        </DrawerHeader>
        <ul className="grid gap-1 px-6 py-5 text-sm text-muted-foreground">
          <li>Star catalog</li>
          <li>Meeting notes</li>
          <li>Signal monitor</li>
        </ul>
      </DrawerContent>
    </Drawer>
  ),
}
