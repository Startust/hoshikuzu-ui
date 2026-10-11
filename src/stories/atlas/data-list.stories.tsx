import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  DataList,
  DataListAside,
  DataListItem,
  DataListLabel,
  DataListValue,
} from "@/components/atlas/data-list"
import { StatusDot } from "@/components/atlas/status-dot"

const meta = {
  title: "Atlas/Data List",
  component: DataList,
  parameters: {
    docs: {
      description: {
        component:
          "Instrument readouts separated by hairlines. Values are mono and truncate; the aside column holds a status dot or a small action.",
      },
    },
  },
} satisfies Meta<typeof DataList>

export default meta
type Story = StoryObj<typeof meta>

export const LocalRuntime: Story = {
  render: () => (
    <DataList className="max-w-lg">
      <DataListItem>
        <DataListLabel>Transcription</DataListLabel>
        <DataListValue>whisper-large-v3-turbo</DataListValue>
        <DataListAside>
          <StatusDot tone="signal" label="Ready" />
        </DataListAside>
      </DataListItem>
      <DataListItem>
        <DataListLabel>Summaries</DataListLabel>
        <DataListValue>qwen3-8b-instruct-q4</DataListValue>
        <DataListAside>
          <StatusDot tone="warning" label="Download needed" />
        </DataListAside>
      </DataListItem>
      <DataListItem>
        <DataListLabel>Library</DataListLabel>
        <DataListValue title="C:\Users\atlas\Documents\Note Taker\meetings">
          C:\Users\atlas\Documents\Note Taker\meetings
        </DataListValue>
        <DataListAside />
      </DataListItem>
      <DataListItem>
        <DataListLabel>Disk used</DataListLabel>
        <DataListValue>2.31 GB</DataListValue>
        <DataListAside />
      </DataListItem>
    </DataList>
  ),
}
