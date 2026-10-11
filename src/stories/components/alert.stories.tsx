import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  CircleCheckIcon,
  InfoIcon,
  OctagonXIcon,
  RadioTowerIcon,
  TriangleAlertIcon,
} from "lucide-react"

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

const meta = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    docs: {
      description: {
        component:
          "An inline notice that stays in the page flow. Use it for state the reader should know before acting, such as an instrument going quiet or an import that needs attention. The tone sets the icon and title color; the description stays muted.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "info", "success", "warning", "destructive"],
    },
  },
  args: {
    variant: "info",
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <Alert {...args} className="max-w-lg">
      <InfoIcon />
      <AlertTitle>Transcript is still processing</AlertTitle>
      <AlertDescription>
        The summary for the weekly sync will be ready in a few minutes. You can
        keep editing notes in the meantime.
      </AlertDescription>
    </Alert>
  ),
}

export const Tones: Story = {
  render: () => (
    <div className="grid max-w-lg gap-3">
      <Alert>
        <RadioTowerIcon />
        <AlertTitle>Signal monitor paused</AlertTitle>
        <AlertDescription>
          Readings resume when the north instrument reconnects.
        </AlertDescription>
      </Alert>
      <Alert variant="info">
        <InfoIcon />
        <AlertTitle>Archive mode available</AlertTitle>
        <AlertDescription>
          Switch to the paper sheet for printing and long reads.
        </AlertDescription>
      </Alert>
      <Alert variant="success">
        <CircleCheckIcon />
        <AlertTitle>Catalog synced</AlertTitle>
        <AlertDescription>214 entries are up to date.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <TriangleAlertIcon />
        <AlertTitle>Two entries need a second review</AlertTitle>
        <AlertDescription>
          They were edited after approval and are back in the queue.
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <OctagonXIcon />
        <AlertTitle>Import failed</AlertTitle>
        <AlertDescription>
          The file deneb-spectrum.csv has no magnitude column.
        </AlertDescription>
      </Alert>
    </div>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Alert variant="warning" className="max-w-lg">
      <TriangleAlertIcon />
      <AlertTitle>Unsaved meeting notes</AlertTitle>
      <AlertDescription>
        Edits since 14:32 are only stored in this browser.
      </AlertDescription>
      <AlertAction>
        <Button size="xs" variant="outline">
          Save now
        </Button>
      </AlertAction>
    </Alert>
  ),
}

export const TitleOnly: Story = {
  render: () => (
    <Alert variant="success" className="max-w-lg">
      <CircleCheckIcon />
      <AlertTitle>All signals steady for the last 24 hours.</AlertTitle>
    </Alert>
  ),
}
