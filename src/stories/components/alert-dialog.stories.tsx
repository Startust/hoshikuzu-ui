import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { FileTextIcon, Trash2Icon } from "lucide-react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

const meta = {
  title: "Components/Alert Dialog",
  component: AlertDialog,
  parameters: {
    docs: {
      description: {
        component:
          "A confirmation that interrupts on purpose. Reserve it for actions that cannot be undone, such as discarding notes or removing an archive entry; it cannot be dismissed by clicking the backdrop.",
      },
    },
  },
} satisfies Meta<typeof AlertDialog>

export default meta
type Story = StoryObj<typeof meta>

function LeaveNoteDemo() {
  const [open, setOpen] = useState(false)

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger render={<Button variant="outline" />}>
        Leave without saving
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Leave this meeting note?</AlertDialogTitle>
          <AlertDialogDescription>
            Changes since 14:32 have not been saved. The transcript stays
            available, but your edits to the summary will be lost.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Keep editing</AlertDialogCancel>
          <AlertDialogAction onClick={() => setOpen(false)}>
            Leave note
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export const Default: Story = {
  render: () => <LeaveNoteDemo />,
}

function RemoveEntryDemo() {
  const [open, setOpen] = useState(false)

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger render={<Button variant="destructive" />}>
        <Trash2Icon data-icon="inline-start" />
        Remove entry
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia className="border-destructive-border bg-destructive-surface text-destructive">
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle>Remove Deneb from the archive?</AlertDialogTitle>
          <AlertDialogDescription>
            The entry, its four observations and linked review comments will be
            removed for everyone on this atlas.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            variant="destructive"
            onClick={() => setOpen(false)}
          >
            Remove entry
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export const Destructive: Story = {
  render: () => <RemoveEntryDemo />,
}

function ExportNotesDemo() {
  const [open, setOpen] = useState(false)

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger render={<Button variant="outline" />}>
        Export notes
      </AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia>
            <FileTextIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>Export twelve notes?</AlertDialogTitle>
          <AlertDialogDescription>
            A Markdown file is written for each note in the selection.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => setOpen(false)}>
            Export
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export const Small: Story = {
  render: () => <ExportNotesDemo />,
}
