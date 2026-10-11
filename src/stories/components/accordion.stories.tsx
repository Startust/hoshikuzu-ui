import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const meta = {
  title: "Components/Layout/Accordion",
  id: "components-accordion",
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component:
          "Hairline-separated disclosure rows. Use for reference notes and settings explanations that most readers skip; the open row brightens to foreground and its chevron turns.",
      },
    },
  },
  argTypes: {
    multiple: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    multiple: false,
    disabled: false,
  },
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <Accordion {...args} defaultValue={["storage"]} className="max-w-lg">
      <AccordionItem value="storage">
        <AccordionTrigger>Where are recordings stored?</AccordionTrigger>
        <AccordionContent>
          Audio and transcripts stay in your local library folder. Nothing is
          uploaded unless you export an entry.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="models">
        <AccordionTrigger>Which models run on this machine?</AccordionTrigger>
        <AccordionContent>
          Transcription uses Whisper large-v3 turbo. Summaries use a quantized
          8B instruct model. Both are downloaded once and checked on launch.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="retention">
        <AccordionTrigger>How long are drafts kept?</AccordionTrigger>
        <AccordionContent>
          Unsaved drafts are kept for fourteen days, then moved to the archive
          shelf. You can restore them from there at any time.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const ObservingLog: Story = {
  render: () => (
    <Accordion multiple defaultValue={["oct-09"]} className="max-w-lg">
      <AccordionItem value="oct-09">
        <AccordionTrigger>
          <span className="flex flex-col gap-1">
            <span>Cygnus rift, wide field</span>
            <span className="font-mono text-xs font-normal text-faint-foreground">
              2026-10-09 · seeing 3/5
            </span>
          </span>
        </AccordionTrigger>
        <AccordionContent>
          <p>
            Transparency dropped after midnight. Albireo split cleanly at 40×;
            the colour contrast held even through haze.
          </p>
          <p>
            Next session: retry the North America nebula with the UHC filter.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="oct-04">
        <AccordionTrigger>
          <span className="flex flex-col gap-1">
            <span>Lyra double-double</span>
            <span className="font-mono text-xs font-normal text-faint-foreground">
              2026-10-04 · seeing 4/5
            </span>
          </span>
        </AccordionTrigger>
        <AccordionContent>
          Both pairs of ε Lyr resolved at 120×. Logged as a clean split.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="sep-28" disabled>
        <AccordionTrigger>
          <span className="flex flex-col gap-1">
            <span>Clouded out</span>
            <span className="font-mono text-xs font-normal text-faint-foreground">
              2026-09-28 · no data
            </span>
          </span>
        </AccordionTrigger>
        <AccordionContent>No observations recorded.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}
