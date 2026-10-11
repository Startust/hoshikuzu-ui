import type { Meta, StoryObj } from "@storybook/react-vite"

import { Skeleton } from "@/components/ui/skeleton"

const meta = {
  title: "Components/Feedback/Skeleton",
  id: "components-skeleton",
  component: Skeleton,
  parameters: {
    docs: {
      description: {
        component:
          "Quiet placeholders that hold the shape of content while it loads. Match the real layout closely so nothing jumps when entries arrive.",
      },
    },
  },
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Skeleton className="h-4 w-48" />,
}

export const ArchiveEntry: Story = {
  render: () => (
    <div className="flex max-w-md flex-col gap-3 rounded-sm border border-border bg-card/80 p-4">
      <div className="flex items-center gap-3">
        <Skeleton className="size-8 rounded-full" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-3.5 w-2/5" />
          <Skeleton className="h-3 w-1/4" />
        </div>
      </div>
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-11/12" />
      <Skeleton className="h-3 w-3/5" />
    </div>
  ),
}

export const TableRows: Story = {
  render: () => (
    <div className="flex max-w-xl flex-col">
      {[64, 52, 70, 46].map((width) => (
        <div
          key={width}
          className="flex items-center gap-6 border-b border-border px-3 py-3"
        >
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-3" style={{ width: `${width}%` }} />
          <Skeleton className="ml-auto h-3 w-12" />
        </div>
      ))}
    </div>
  ),
}
