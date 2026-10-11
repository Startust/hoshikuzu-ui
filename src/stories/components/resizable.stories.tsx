import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

const meta = {
  title: "Components/Layout/Resizable",
  component: ResizablePanelGroup,
  parameters: {
    docs: {
      description: {
        component:
          "Adjustable panes split by a hairline. The line brightens on hover and turns signal while dragging or focused. Use for tool layouts such as a list beside a reader.",
      },
    },
  },
} satisfies Meta<typeof ResizablePanelGroup>

export default meta
type Story = StoryObj<typeof meta>

function Pane({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex h-full flex-col gap-2 p-4">
      <span className="text-2xs font-semibold tracking-[0.16em] text-faint-foreground uppercase">
        {label}
      </span>
      <div className="text-sm leading-6 text-muted-foreground">{children}</div>
    </div>
  )
}

export const ListAndReader: Story = {
  render: () => (
    <ResizablePanelGroup
      orientation="horizontal"
      className="min-h-64 max-w-2xl rounded-sm border border-border bg-card/80"
    >
      <ResizablePanel defaultSize="35%" minSize="20%">
        <Pane label="Meetings">
          Design sync, catalog review, observing plan.
        </Pane>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="65%">
        <Pane label="Notes">
          Agreed to reconcile the flagged doubles against the Washington catalog
          before the next import.
        </Pane>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const Workspace: Story = {
  render: () => (
    <ResizablePanelGroup
      orientation="horizontal"
      className="min-h-80 max-w-3xl rounded-sm border border-border bg-card/80"
    >
      <ResizablePanel defaultSize="25%" minSize="15%">
        <Pane label="Archive">Star catalog, plates, logs.</Pane>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="75%">
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize="60%">
            <Pane label="Plate">NGC 7000, exposure 180 s, Hα filter.</Pane>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize="40%">
            <Pane label="Log">Guiding drift under 0.8″ for the full run.</Pane>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}
