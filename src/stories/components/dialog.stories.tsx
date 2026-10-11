import type { Meta, StoryObj } from "@storybook/react-vite"
import { ArchiveIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const meta = {
  title: "Components/Overlays/Dialog",
  component: Dialog,
  parameters: {
    docs: {
      description: {
        component:
          "A modal sheet laid over a dimmed atlas. Use it for a focused task that must finish or be dismissed before returning to the page: reviewing an entry, renaming a signal, confirming an export.",
      },
    },
  },
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <ArchiveIcon data-icon="inline-start" />
        Open entry
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Vega, observation log</DialogTitle>
          <DialogDescription>
            Recorded on three nights in late August. The entry is complete and
            ready to move from the review queue into the archive.
          </DialogDescription>
        </DialogHeader>
        <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">
          <dt className="self-center index-label text-faint-foreground">
            Catalog
          </dt>
          <dd className="font-mono text-xs text-foreground">HR 7001</dd>
          <dt className="self-center index-label text-faint-foreground">
            Magnitude
          </dt>
          <dd className="font-mono text-xs text-foreground">0.03</dd>
          <dt className="self-center index-label text-faint-foreground">
            Last edit
          </dt>
          <dd className="font-mono text-xs text-foreground">
            2026-08-29 22:14
          </dd>
        </dl>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>
            Keep in review
          </DialogClose>
          <DialogClose render={<Button />}>Archive entry</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const FormInDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button />}>Rename signal</DialogTrigger>
      <DialogContent>
        <form
          className="grid gap-5"
          onSubmit={(event) => event.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle>Rename signal</DialogTitle>
            <DialogDescription>
              The new name appears in meeting notes and the review queue. The
              catalog identifier stays the same.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="signal-name">Name</Label>
              <Input id="signal-name" defaultValue="Northern drift" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="signal-note">Note</Label>
              <Input id="signal-note" placeholder="Why the name changed" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose render={<Button variant="outline" />}>
              Cancel
            </DialogClose>
            <Button type="submit">Save name</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  ),
}
