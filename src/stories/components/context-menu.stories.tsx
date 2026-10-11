import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { BookmarkIcon, CopyIcon, PencilIcon, Trash2Icon } from "lucide-react"

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

const meta = {
  title: "Components/Navigation/Context Menu",
  id: "components-context-menu",
  component: ContextMenu,
  parameters: {
    docs: {
      description: {
        component:
          "Actions for the thing under the pointer, opened with a right click or long press. Treat it as a shortcut: every action here should also be reachable from a visible control.",
      },
    },
  },
} satisfies Meta<typeof ContextMenu>

export default meta
type Story = StoryObj<typeof meta>

function EntryContextDemo() {
  const [pinned, setPinned] = useState(false)

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-40 w-full max-w-sm flex-col items-center justify-center gap-1 rounded-sm border border-dashed border-border-strong bg-card/40 text-center">
        <span className="text-sm text-foreground">Vega, observation log</span>
        <span className="text-xs text-muted-foreground">
          Right-click for entry actions
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuGroup>
          <ContextMenuLabel>Entry</ContextMenuLabel>
          <ContextMenuItem>
            <PencilIcon />
            Edit summary
            <ContextMenuShortcut>E</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <CopyIcon />
            Copy link
            <ContextMenuShortcut>Ctrl L</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <BookmarkIcon />
              Add to list
            </ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ContextMenuItem>Summer triangle</ContextMenuItem>
              <ContextMenuItem>Variable stars</ContextMenuItem>
              <ContextMenuItem>Follow-up</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked={pinned} onCheckedChange={setPinned}>
          Pin to review queue
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <Trash2Icon />
          Remove entry
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export const Default: Story = {
  render: () => <EntryContextDemo />,
}
