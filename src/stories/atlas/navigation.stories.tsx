import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  CalendarClockIcon,
  HomeIcon,
  InboxIcon,
  MoonIcon,
  SettingsIcon,
} from "lucide-react"

import { AtlasLink } from "@/components/atlas/atlas-link"
import { BottomNav, BottomNavItem } from "@/components/atlas/bottom-nav"
import {
  FloatingAction,
  FloatingActions,
} from "@/components/atlas/floating-actions"

const meta = {
  title: "Atlas/Navigation",
  component: AtlasLink,
  parameters: {
    docs: {
      description: {
        component:
          "Edge navigation that stays quiet: `AtlasLink` for footer and secondary links, `FloatingActions` for corner utilities, `BottomNav` for mobile primary destinations.",
      },
    },
  },
} satisfies Meta<typeof AtlasLink>

export default meta
type Story = StoryObj<typeof meta>

export const Links: Story = {
  render: () => (
    <div className="grid gap-6">
      <nav aria-label="Footer" className="flex flex-wrap gap-6">
        <AtlasLink href="#works">Works</AtlasLink>
        <AtlasLink href="#tools" aria-current="page">
          Tools
        </AtlasLink>
        <AtlasLink href="#privacy">Privacy</AtlasLink>
        <AtlasLink href="#terms">Terms</AtlasLink>
      </nav>
      <p className="max-w-prose text-sm leading-6 text-muted-foreground">
        Builds are published from the{" "}
        <AtlasLink variant="inline" href="#releases">
          release archive
        </AtlasLink>
        , and every installer is signed before it is filed there.
      </p>
    </div>
  ),
}

export const CornerActions: Story = {
  parameters: { layout: "fullscreen" },
  render: () => (
    <div className="relative h-64 transform-[translateZ(0)]">
      <FloatingActions>
        <FloatingAction label="Night atlas">
          <MoonIcon />
        </FloatingAction>
        <FloatingAction label="Home" render={<a href="#home" />}>
          <HomeIcon />
        </FloatingAction>
      </FloatingActions>
    </div>
  ),
}

export const MobileBottomNav: Story = {
  parameters: {
    layout: "fullscreen",
    viewport: { defaultViewport: "mobile1" },
  },
  render: () => (
    <div className="relative h-72 transform-[translateZ(0)]">
      <BottomNav aria-label="Primary">
        <BottomNavItem href="#home" active>
          <HomeIcon />
          Home
        </BottomNavItem>
        <BottomNavItem href="#reviews">
          <InboxIcon />
          Reviews
        </BottomNavItem>
        <BottomNavItem href="#tasks">
          <CalendarClockIcon />
          Tasks
        </BottomNavItem>
        <BottomNavItem href="#settings">
          <SettingsIcon />
          Settings
        </BottomNavItem>
      </BottomNav>
    </div>
  ),
}
