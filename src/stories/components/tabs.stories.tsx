import type { Meta, StoryObj } from "@storybook/react-vite"
import { FileTextIcon, ListIcon, SparklesIcon } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const meta = {
  title: "Components/Navigation/Tabs",
  id: "components-tabs",
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component:
          'Switch between views of one record. The default list is a segmented control with a raised active segment; `variant="line"` uses a signal underline for page-level sections. Both work vertically.',
      },
    },
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

const panel =
  "rounded-sm border border-border bg-card/80 p-4 text-sm leading-6 text-muted-foreground"

export const Segmented: Story = {
  render: () => (
    <Tabs defaultValue="summary" className="max-w-md">
      <TabsList>
        <TabsTrigger value="summary">Summary</TabsTrigger>
        <TabsTrigger value="transcript">Transcript</TabsTrigger>
        <TabsTrigger value="actions">Actions</TabsTrigger>
      </TabsList>
      <TabsContent value="summary" className={panel}>
        Agreed to reconcile flagged doubles before the next catalog import.
      </TabsContent>
      <TabsContent value="transcript" className={panel}>
        Forty-two minutes, three speakers. Diarization confidence is high.
      </TabsContent>
      <TabsContent value="actions" className={panel}>
        Two items assigned: catalog reconciliation and the archive contrast
        pass.
      </TabsContent>
    </Tabs>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="summary" className="max-w-md">
      <TabsList>
        <TabsTrigger value="summary">
          <SparklesIcon data-icon="inline-start" />
          Summary
        </TabsTrigger>
        <TabsTrigger value="transcript">
          <FileTextIcon data-icon="inline-start" />
          Transcript
        </TabsTrigger>
        <TabsTrigger value="actions">
          <ListIcon data-icon="inline-start" />
          Actions
        </TabsTrigger>
      </TabsList>
    </Tabs>
  ),
}

export const Line: Story = {
  render: () => (
    <Tabs defaultValue="catalog" className="max-w-lg">
      <TabsList variant="line">
        <TabsTrigger value="catalog">Catalog</TabsTrigger>
        <TabsTrigger value="plates">Plates</TabsTrigger>
        <TabsTrigger value="logs">Logs</TabsTrigger>
        <TabsTrigger value="settings" disabled>
          Settings
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="catalog"
        className="py-2 text-sm leading-6 text-muted-foreground"
      >
        9,110 stars indexed across the northern sky.
      </TabsContent>
      <TabsContent
        value="plates"
        className="py-2 text-sm leading-6 text-muted-foreground"
      >
        Forty-one plates, the latest from the Cygnus rift.
      </TabsContent>
      <TabsContent
        value="logs"
        className="py-2 text-sm leading-6 text-muted-foreground"
      >
        Observing sessions since August, newest first.
      </TabsContent>
    </Tabs>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex max-w-xl flex-col gap-10">
      <Tabs defaultValue="general" orientation="vertical">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="models">Models</TabsTrigger>
          <TabsTrigger value="storage">Storage</TabsTrigger>
        </TabsList>
        <TabsContent value="general" className={panel}>
          Interface language, atlas mode and launch behaviour.
        </TabsContent>
        <TabsContent value="models" className={panel}>
          Local transcription and summary models, with download status.
        </TabsContent>
        <TabsContent value="storage" className={panel}>
          Library location and retention for drafts and recordings.
        </TabsContent>
      </Tabs>
      <Tabs defaultValue="general" orientation="vertical">
        <TabsList variant="line">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="models">Models</TabsTrigger>
          <TabsTrigger value="storage">Storage</TabsTrigger>
        </TabsList>
        <TabsContent
          value="general"
          className="px-2 text-sm leading-6 text-muted-foreground"
        >
          Interface language, atlas mode and launch behaviour.
        </TabsContent>
        <TabsContent
          value="models"
          className="px-2 text-sm leading-6 text-muted-foreground"
        >
          Local transcription and summary models, with download status.
        </TabsContent>
        <TabsContent
          value="storage"
          className="px-2 text-sm leading-6 text-muted-foreground"
        >
          Library location and retention for drafts and recordings.
        </TabsContent>
      </Tabs>
    </div>
  ),
}
