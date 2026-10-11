import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  FileTextIcon,
  InboxIcon,
  RadioTowerIcon,
  TelescopeIcon,
} from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const meta = {
  title: "Components/Navigation Menu",
  component: NavigationMenu,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Top-level site navigation with optional panels of related links. Triggers use the index voice; open panels share one viewport that resizes between them.",
      },
    },
  },
} satisfies Meta<typeof NavigationMenu>

export default meta
type Story = StoryObj<typeof meta>

const tools = [
  {
    title: "Star catalog",
    description: "Search and filter archived observations.",
    icon: TelescopeIcon,
  },
  {
    title: "Meeting notes",
    description: "Transcripts and summaries from weekly syncs.",
    icon: FileTextIcon,
  },
  {
    title: "Review queue",
    description: "Entries waiting for a second read.",
    icon: InboxIcon,
  },
  {
    title: "Signal monitor",
    description: "Live readiness for each instrument.",
    icon: RadioTowerIcon,
  },
]

export const Default: Story = {
  render: () => (
    <div className="min-h-80">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[30rem] grid-cols-2 gap-1 p-1">
                {tools.map((tool) => (
                  <li key={tool.title}>
                    <NavigationMenuLink
                      href="#"
                      className="items-start gap-3 p-3"
                    >
                      <tool.icon className="mt-0.5" />
                      <span className="grid gap-1">
                        <span className="text-sm text-foreground">
                          {tool.title}
                        </span>
                        <span className="text-xs leading-5 text-muted-foreground">
                          {tool.description}
                        </span>
                      </span>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Archive</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-64 gap-1 p-1">
                <li>
                  <NavigationMenuLink href="#">
                    Recent entries
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href="#">
                    By constellation
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href="#">
                    Export history
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#"
              active
              className={navigationMenuTriggerStyle()}
            >
              Guide
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  ),
}
