import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  AlertTriangleIcon,
  AudioLinesIcon,
  FileTextIcon,
  LoaderIcon,
  PaperclipIcon,
  RotateCwIcon,
  XIcon,
} from "lucide-react"

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
  AttachmentTrigger,
} from "@/components/ui/attachment"

const meta = {
  title: "Components/Conversation/Attachment",
  component: Attachment,
  parameters: {
    docs: {
      description: {
        component:
          "A hairline tile for a file in a conversation or composer: icon plate, name, and a mono line for size or duration. `state` covers the upload lifecycle; idle tiles are dashed, failed ones take the destructive tone.",
      },
    },
  },
  argTypes: {
    state: {
      control: "select",
      options: ["idle", "uploading", "processing", "error", "done"],
    },
    size: { control: "inline-radio", options: ["xs", "sm", "default"] },
    orientation: {
      control: "inline-radio",
      options: ["horizontal", "vertical"],
    },
  },
  args: {
    state: "done",
    size: "default",
    orientation: "horizontal",
  },
  render: (args) => (
    <Attachment {...args}>
      <AttachmentMedia>
        <AudioLinesIcon />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>design-review-1009.m4a</AttachmentTitle>
        <AttachmentDescription>38:12 · 41.6 MB</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label="Remove attachment">
          <XIcon />
        </AttachmentAction>
      </AttachmentActions>
    </Attachment>
  ),
} satisfies Meta<typeof Attachment>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Lifecycle: Story = {
  render: () => (
    <div className="flex max-w-sm flex-col gap-2">
      <Attachment state="idle">
        <AttachmentMedia>
          <PaperclipIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>Drop a recording or notes file</AttachmentTitle>
          <AttachmentDescription>
            m4a, wav, md · up to 2 GB
          </AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment state="uploading">
        <AttachmentMedia>
          <LoaderIcon className="animate-spin" />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>standup-1010.wav</AttachmentTitle>
          <AttachmentDescription>Copying · 62%</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment state="processing">
        <AttachmentMedia>
          <AudioLinesIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>standup-1010.wav</AttachmentTitle>
          <AttachmentDescription>
            Transcribing on device · 14:20
          </AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment state="error">
        <AttachmentMedia>
          <AlertTriangleIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>planning-sync.mov</AttachmentTitle>
          <AttachmentDescription>
            Unsupported codec · hevc
          </AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Retry upload">
            <RotateCwIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
      <Attachment state="done">
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>design-review-summary.md</AttachmentTitle>
          <AttachmentDescription>4.2 KB</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Remove attachment">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
    </div>
  ),
}

const files = [
  {
    name: "design-review-1009.m4a",
    meta: "38:12 · 41.6 MB",
    icon: AudioLinesIcon,
  },
  { name: "agenda.md", meta: "1.1 KB", icon: FileTextIcon },
  { name: "whiteboard-notes.md", meta: "2.8 KB", icon: FileTextIcon },
  { name: "follow-ups.md", meta: "0.9 KB", icon: FileTextIcon },
]

export const ComposerTray: Story = {
  render: () => (
    <div className="flex max-w-md flex-col gap-3 rounded-sm border border-border bg-card/60 p-3">
      <AttachmentGroup>
        {files.map((file) => (
          <Attachment key={file.name} orientation="vertical" size="sm">
            <AttachmentMedia>
              <file.icon />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>{file.name}</AttachmentTitle>
              <AttachmentDescription>{file.meta}</AttachmentDescription>
            </AttachmentContent>
            <AttachmentActions>
              <AttachmentAction aria-label={`Remove ${file.name}`}>
                <XIcon />
              </AttachmentAction>
            </AttachmentActions>
          </Attachment>
        ))}
      </AttachmentGroup>
      <p className="px-1 text-sm leading-6 text-faint-foreground">
        Ask about these files. Nothing leaves this device.
      </p>
    </div>
  ),
}

export const Openable: Story = {
  render: () => (
    <Attachment size="sm">
      <AttachmentMedia>
        <FileTextIcon />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>design-review-summary.md</AttachmentTitle>
        <AttachmentDescription>4.2 KB · edited 14:41</AttachmentDescription>
      </AttachmentContent>
      <AttachmentTrigger aria-label="Open design-review-summary.md" />
    </Attachment>
  ),
}
