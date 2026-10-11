import type { Meta, StoryObj } from "@storybook/react-vite"
import { useEffect, useState } from "react"
import {
  ArchiveIcon,
  FileTextIcon,
  InboxIcon,
  MoonIcon,
  RadioTowerIcon,
  SunIcon,
  TelescopeIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { Kbd } from "@/components/ui/kbd"

const meta = {
  title: "Components/Navigation/Command",
  id: "components-command",
  component: Command,
  parameters: {
    docs: {
      description: {
        component:
          "A searchable list of commands and destinations. Use it inline for pickers or inside `CommandDialog` as a palette opened from the keyboard.",
      },
    },
  },
} satisfies Meta<typeof Command>

export default meta
type Story = StoryObj<typeof meta>

function PaletteItems() {
  return (
    <>
      <CommandEmpty>No tools or entries match that search.</CommandEmpty>
      <CommandGroup heading="Tools">
        <CommandItem>
          <TelescopeIcon />
          Star catalog
          <CommandShortcut>G C</CommandShortcut>
        </CommandItem>
        <CommandItem>
          <FileTextIcon />
          Meeting notes
          <CommandShortcut>G N</CommandShortcut>
        </CommandItem>
        <CommandItem>
          <InboxIcon />
          Review queue
          <CommandShortcut>G R</CommandShortcut>
        </CommandItem>
        <CommandItem disabled>
          <RadioTowerIcon />
          Signal monitor
        </CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Recent entries">
        <CommandItem>
          <ArchiveIcon />
          Vega, observation log
        </CommandItem>
        <CommandItem>
          <ArchiveIcon />
          Weekly sync, 9 Oct
        </CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Atlas mode">
        <CommandItem>
          <MoonIcon />
          Night
        </CommandItem>
        <CommandItem>
          <SunIcon />
          Archive
        </CommandItem>
      </CommandGroup>
    </>
  )
}

export const Inline: Story = {
  render: () => (
    <Command className="max-w-md border border-border shadow-overlay">
      <CommandInput placeholder="Search tools and entries" />
      <CommandList>
        <PaletteItems />
      </CommandList>
    </Command>
  ),
}

function PaletteDialogDemo() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setOpen((value) => !value)
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <div className="flex items-center gap-3">
      <Button variant="outline" onClick={() => setOpen(true)}>
        Open palette
      </Button>
      <span className="text-sm text-muted-foreground">
        or press <Kbd>Ctrl K</Kbd>
      </span>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Search tools and entries" />
          <CommandList>
            <PaletteItems />
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}

export const Palette: Story = {
  render: () => <PaletteDialogDemo />,
}
