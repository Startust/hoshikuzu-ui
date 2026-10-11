import type { Meta, StoryObj } from "@storybook/react-vite"

import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component:
          "A square, hairline checkbox that fills with the primary lamp when checked. Use it for independent choices such as which entries to include in a review or which signals to watch.",
      },
    },
  },
  argTypes: {
    disabled: { control: "boolean" },
    defaultChecked: { control: "boolean" },
  },
  args: {
    defaultChecked: true,
    disabled: false,
    "aria-label": "Include in review",
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const ReviewQueue: Story = {
  render: () => (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend variant="label">Include in review</FieldLegend>
      <FieldGroup className="gap-3">
        <Field orientation="horizontal">
          <Checkbox id="queue-plates" defaultChecked />
          <FieldLabel htmlFor="queue-plates">Plate scans</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="queue-notes" defaultChecked />
          <FieldLabel htmlFor="queue-notes">Meeting notes</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="queue-drafts" />
          <FieldLabel htmlFor="queue-drafts">Unsigned drafts</FieldLabel>
        </Field>
        <Field orientation="horizontal" data-disabled="true">
          <Checkbox id="queue-cold" disabled />
          <FieldLabel htmlFor="queue-cold">Cold archive</FieldLabel>
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <Field orientation="horizontal" className="max-w-sm">
      <Checkbox id="watch-signal" defaultChecked />
      <FieldContent>
        <FieldLabel htmlFor="watch-signal">Watch this signal</FieldLabel>
        <FieldDescription>
          You will see new readings from Vega in your queue as they arrive.
        </FieldDescription>
      </FieldContent>
    </Field>
  ),
}

export const Invalid: Story = {
  render: () => (
    <Field orientation="horizontal" data-invalid="true" className="max-w-sm">
      <Checkbox id="confirm-purge" aria-invalid />
      <FieldLabel htmlFor="confirm-purge">
        I have exported the entries first
      </FieldLabel>
    </Field>
  ),
}
