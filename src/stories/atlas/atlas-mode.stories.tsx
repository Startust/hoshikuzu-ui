import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  AtlasModeProvider,
  AtlasModeToggle,
  atlasModeScript,
  useAtlasMode,
} from "@/components/atlas/atlas-mode"
import { IndexLabel } from "@/components/atlas/index-label"

const meta = {
  title: "Atlas/Atlas Mode",
  component: AtlasModeToggle,
  parameters: {
    docs: {
      description: {
        component:
          "Night atlas is the default; archive sheet is the light reading mode. The provider writes `data-atlas-mode` (and `.dark` at night) onto `<html>` and remembers the choice. Inline `atlasModeScript()` in `<head>` to avoid a flash before hydration. In Storybook, the toolbar theme switch drives the same contract.",
      },
    },
  },
  decorators: [
    (Story) => (
      <AtlasModeProvider storageKey="hoshikuzu-ui-storybook-mode">
        <Story />
      </AtlasModeProvider>
    ),
  ],
  argTypes: {
    compact: { control: "boolean" },
  },
  args: { compact: false },
} satisfies Meta<typeof AtlasModeToggle>

export default meta
type Story = StoryObj<typeof meta>

function CurrentMode() {
  const { mode } = useAtlasMode()
  return <IndexLabel tone="faint">Current · {mode}</IndexLabel>
}

export const Toggle: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <AtlasModeToggle {...args} />
      <AtlasModeToggle compact />
      <CurrentMode />
    </div>
  ),
}

export const PreHydrationScript: Story = {
  render: () => (
    <pre className="max-w-2xl overflow-x-auto rounded-sm border border-border bg-card p-4 font-mono text-xs leading-relaxed whitespace-pre-wrap text-muted-foreground">
      {`<script dangerouslySetInnerHTML={{ __html: atlasModeScript() }} />\n\n${atlasModeScript()}`}
    </pre>
  ),
}
