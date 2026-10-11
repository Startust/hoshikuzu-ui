import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"

const meta = {
  title: "Components/Data Display/Avatar",
  id: "components-avatar",
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component:
          "Round identity marks with a hairline edge. Fallback initials use the tracked index voice; the badge is a signal dot for presence or readiness.",
      },
    },
  },
  argTypes: {
    size: { control: "select", options: ["sm", "default", "lg"] },
  },
  args: {
    size: "default",
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

// A small inline plate so the story renders offline.
const plate =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><rect width="40" height="40" fill="#101827"/><circle cx="12" cy="14" r="1.2" fill="#aad7dc"/><circle cx="27" cy="10" r="0.9" fill="#f8fafc"/><circle cx="22" cy="26" r="1.6" fill="#f5f0dc"/><circle cx="31" cy="30" r="0.8" fill="#aad7dc"/><path d="M12 14L22 26L31 30" stroke="#aad7dc" stroke-opacity="0.4" stroke-width="0.5" fill="none"/></svg>`
  )

export const Playground: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>MK</AvatarFallback>
    </Avatar>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="sm">
        <AvatarFallback>RS</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>RS</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>RS</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src={plate} alt="Observatory plate" />
        <AvatarFallback>OB</AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const WithPresence: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarFallback>SN</AvatarFallback>
        <AvatarBadge />
      </Avatar>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-foreground">Sora Nakai</span>
        <span className="text-sm text-muted-foreground">
          Reviewing the star catalog
        </span>
      </div>
    </div>
  ),
}

export const Reviewers: Story = {
  render: () => (
    <AvatarGroup>
      <Avatar>
        <AvatarFallback>MK</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src={plate} alt="Ren Ito" />
        <AvatarFallback>RI</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>SN</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+4</AvatarGroupCount>
    </AvatarGroup>
  ),
}
