import type { Meta, StoryObj } from "@storybook/react-vite"
import { ArchiveIcon, BookmarkIcon, MoonIcon, SearchIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          "A short label for a control whose meaning is not already written on it, most often an icon button. Keep the text to a few words; it is never the only place important information lives.",
      },
    },
  },
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button variant="outline" size="icon" aria-label="Bookmark entry" />
        }
      >
        <BookmarkIcon />
      </TooltipTrigger>
      <TooltipContent>Bookmark entry</TooltipContent>
    </Tooltip>
  ),
}

export const Toolbar: Story = {
  render: () => (
    <div className="inline-flex items-center gap-1 rounded-sm border border-border bg-card/40 p-1">
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Search catalog"
            />
          }
        >
          <SearchIcon />
        </TooltipTrigger>
        <TooltipContent>
          Search catalog
          <Kbd>/</Kbd>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button variant="ghost" size="icon-sm" aria-label="Archive entry" />
          }
        >
          <ArchiveIcon />
        </TooltipTrigger>
        <TooltipContent>
          Archive entry
          <Kbd>E</Kbd>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Switch to night atlas"
            />
          }
        >
          <MoonIcon />
        </TooltipTrigger>
        <TooltipContent side="bottom">Switch to night atlas</TooltipContent>
      </Tooltip>
    </div>
  ),
}

export const Sides: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 py-12">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Tooltip key={side}>
          <TooltipTrigger render={<Button variant="outline" />}>
            {side}
          </TooltipTrigger>
          <TooltipContent side={side}>Signal steady</TooltipContent>
        </Tooltip>
      ))}
    </div>
  ),
}
