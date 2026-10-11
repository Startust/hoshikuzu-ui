import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  CompassIcon,
  ListChecksIcon,
  LibraryIcon,
  MoonIcon,
  NotebookPenIcon,
  PlusIcon,
  SearchIcon,
  SparkleIcon,
  TimerIcon,
  WrenchIcon,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"

type SidebarProps = React.ComponentProps<typeof Sidebar>

const atlas = [
  { title: "Index", icon: CompassIcon },
  {
    title: "Works",
    icon: LibraryIcon,
    items: ["Catalogued", "In progress", "Archived"],
  },
  { title: "Tools", icon: WrenchIcon },
]

const instruments = [
  { title: "Timers", icon: TimerIcon, badge: "2" },
  { title: "Notes", icon: NotebookPenIcon },
  { title: "Reviews", icon: ListChecksIcon, badge: "3" },
]

const entries = [
  { title: "Orion field notes", kind: "Notes", date: "2026-10-09" },
  { title: "Grinding planner, season four", kind: "Tools", date: "2026-10-07" },
  { title: "Pomodoro rail redesign", kind: "Works", date: "2026-10-02" },
  {
    title: "Reading log: The Left Hand of Darkness",
    kind: "Notes",
    date: "2026-09-28",
  },
]

function ObservatoryShell({
  sidebarProps,
  defaultOpen = true,
  loading = false,
}: {
  sidebarProps?: SidebarProps
  defaultOpen?: boolean
  loading?: boolean
}) {
  const [active, setActive] = React.useState("Index")

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <Sidebar {...sidebarProps}>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" tooltip="Hoshikuzu">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-sm border border-border-strong text-signal">
                  <SparkleIcon />
                </span>
                <span className="grid min-w-0 flex-1 gap-1 leading-none">
                  <span className="text-2xs font-semibold tracking-[0.22em] text-foreground uppercase">
                    Hoshikuzu
                  </span>
                  <span className="truncate text-xs text-faint-foreground">
                    Personal observatory
                  </span>
                </span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          <div className="relative group-data-[collapsible=icon]:hidden">
            <SearchIcon className="pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-faint-foreground" />
            <SidebarInput
              placeholder="Search the atlas"
              className="pl-8"
              aria-label="Search the atlas"
            />
          </div>
        </SidebarHeader>
        <SidebarSeparator />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Atlas</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {atlas.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      isActive={active === item.title}
                      tooltip={item.title}
                      onClick={() => setActive(item.title)}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                    {item.items && (
                      <SidebarMenuSub>
                        {item.items.map((sub) => (
                          <SidebarMenuSubItem key={sub}>
                            <SidebarMenuSubButton
                              href="#"
                              isActive={active === sub}
                              onClick={(event) => {
                                event.preventDefault()
                                setActive(sub)
                              }}
                            >
                              <span>{sub}</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Instruments</SidebarGroupLabel>
            <SidebarGroupAction
              aria-label="Add instrument"
              title="Add instrument"
            >
              <PlusIcon />
            </SidebarGroupAction>
            <SidebarGroupContent>
              <SidebarMenu>
                {loading
                  ? Array.from({ length: 3 }, (_, index) => (
                      <SidebarMenuItem key={index}>
                        <SidebarMenuSkeleton showIcon />
                      </SidebarMenuItem>
                    ))
                  : instruments.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          isActive={active === item.title}
                          tooltip={item.title}
                          onClick={() => setActive(item.title)}
                        >
                          <item.icon />
                          <span>{item.title}</span>
                        </SidebarMenuButton>
                        {item.badge && (
                          <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                        )}
                      </SidebarMenuItem>
                    ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" tooltip="Night atlas">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-surface-raised text-2xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                  LO
                </span>
                <span className="grid min-w-0 flex-1 gap-1 leading-none">
                  <span className="truncate text-sm text-foreground">
                    Local observer
                  </span>
                  <span className="truncate font-mono text-[0.6875rem] text-faint-foreground">
                    Night atlas · offline
                  </span>
                </span>
                <MoonIcon className="text-faint-foreground" />
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-12 shrink-0 items-center gap-3 border-b border-border px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="h-4 w-px bg-border" />
          <span className="index-label text-faint-foreground">
            Atlas / {active}
          </span>
        </header>
        <div className="flex flex-1 flex-col gap-6 p-6 md:p-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl leading-tight font-light text-foreground">
              {active}
            </h1>
            <p className="max-w-prose text-sm leading-6 text-muted-foreground">
              Recently touched entries across the atlas. Press{" "}
              <kbd className="rounded-xs border border-border px-1 font-mono text-[0.6875rem] text-faint-foreground">
                Ctrl B
              </kbd>{" "}
              to fold the rail.
            </p>
          </div>
          <ul className="divide-y divide-border rounded-sm border border-border bg-card/60">
            {entries.map((entry) => (
              <li
                key={entry.title}
                className="flex items-center justify-between gap-4 px-4 py-3"
              >
                <div className="flex min-w-0 flex-col gap-1">
                  <span className="truncate text-sm text-foreground">
                    {entry.title}
                  </span>
                  <span className="index-label text-faint-foreground">
                    {entry.kind}
                  </span>
                </div>
                <time className="shrink-0 font-mono text-xs text-faint-foreground">
                  {entry.date}
                </time>
              </li>
            ))}
          </ul>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

const meta = {
  title: "Components/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          'The desktop rail for an atlas app: a hairline-bordered column with tracked uppercase destinations and a thin signal line on the current one. Folds to an icon rail with `collapsible="icon"` and becomes a sheet on small screens.',
      },
      story: { inline: false, iframeHeight: 640 },
    },
  },
  argTypes: {
    collapsible: {
      control: "inline-radio",
      options: ["offcanvas", "icon", "none"],
    },
    variant: {
      control: "inline-radio",
      options: ["sidebar", "floating", "inset"],
    },
    side: { control: "inline-radio", options: ["left", "right"] },
  },
  args: {
    collapsible: "icon",
    variant: "sidebar",
    side: "left",
  },
  render: (args) => <ObservatoryShell sidebarProps={args} />,
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Observatory: Story = {}

export const IconRail: Story = {
  render: (args) => (
    <ObservatoryShell sidebarProps={args} defaultOpen={false} />
  ),
}

export const Floating: Story = {
  args: { variant: "floating" },
}

export const Inset: Story = {
  args: { variant: "inset" },
}

export const Loading: Story = {
  render: (args) => <ObservatoryShell sidebarProps={args} loading />,
}
