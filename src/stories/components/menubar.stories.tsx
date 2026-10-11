import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

const meta = {
  title: "Components/Navigation/Menubar",
  id: "components-menubar",
  component: Menubar,
  parameters: {
    docs: {
      description: {
        component:
          "A persistent row of application menus for tool-like pages, such as a notes editor or the star catalog workspace. Arrow keys move between menus once one is open.",
      },
    },
  },
} satisfies Meta<typeof Menubar>

export default meta
type Story = StoryObj<typeof meta>

function NotesMenubarDemo() {
  const [showTranscript, setShowTranscript] = useState(true)
  const [showSpeakers, setShowSpeakers] = useState(false)
  const [mode, setMode] = useState("night")

  return (
    <Menubar className="w-fit">
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New note
            <MenubarShortcut>Ctrl N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Open from archive
            <MenubarShortcut>Ctrl O</MenubarShortcut>
          </MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>Export as</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Markdown</MenubarItem>
              <MenubarItem>Plain text</MenubarItem>
              <MenubarItem>PDF</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem variant="destructive">Discard draft</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo
            <MenubarShortcut>Ctrl Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>
            Redo
            <MenubarShortcut>Ctrl Y</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Find in note
            <MenubarShortcut>Ctrl F</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarLabel>Panels</MenubarLabel>
            <MenubarCheckboxItem
              checked={showTranscript}
              onCheckedChange={setShowTranscript}
            >
              Transcript
            </MenubarCheckboxItem>
            <MenubarCheckboxItem
              checked={showSpeakers}
              onCheckedChange={setShowSpeakers}
            >
              Speaker labels
            </MenubarCheckboxItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarLabel>Atlas mode</MenubarLabel>
            <MenubarRadioGroup value={mode} onValueChange={setMode}>
              <MenubarRadioItem value="night">Night</MenubarRadioItem>
              <MenubarRadioItem value="archive">Archive</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export const Default: Story = {
  render: () => <NotesMenubarDemo />,
}
