import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const meta = {
  title: "Components/Forms/Radio Group",
  id: "components-radio-group",
  component: RadioGroup,
  parameters: {
    docs: {
      description: {
        component:
          "One choice from a short, visible set. The selected option shows a small signal dot; use it when every option should be read before deciding, such as a sync cadence or an archive tier.",
      },
    },
  },
  args: {
    defaultValue: "nightly",
  },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <FieldSet className="w-full max-w-xs">
      <FieldLegend variant="label">Sync cadence</FieldLegend>
      <RadioGroup {...args}>
        <Field orientation="horizontal">
          <RadioGroupItem value="hourly" id="cadence-hourly" />
          <FieldLabel htmlFor="cadence-hourly">Hourly</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="nightly" id="cadence-nightly" />
          <FieldLabel htmlFor="cadence-nightly">Nightly</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="manual" id="cadence-manual" />
          <FieldLabel htmlFor="cadence-manual">Only when I ask</FieldLabel>
        </Field>
      </RadioGroup>
    </FieldSet>
  ),
}

export const ChoiceCards: Story = {
  render: () => (
    <FieldSet className="w-full max-w-md">
      <FieldLegend variant="label">Archive tier</FieldLegend>
      <RadioGroup defaultValue="warm">
        <FieldLabel htmlFor="tier-warm">
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>Warm shelf</FieldTitle>
              <FieldDescription>
                Searchable and ready to open. Kept for ninety days.
              </FieldDescription>
            </FieldContent>
            <RadioGroupItem value="warm" id="tier-warm" />
          </Field>
        </FieldLabel>
        <FieldLabel htmlFor="tier-cold">
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>Cold archive</FieldTitle>
              <FieldDescription>
                Indexed by title only. Restoring takes a few minutes.
              </FieldDescription>
            </FieldContent>
            <RadioGroupItem value="cold" id="tier-cold" />
          </Field>
        </FieldLabel>
      </RadioGroup>
    </FieldSet>
  ),
}

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="read" disabled className="max-w-xs">
      <Field orientation="horizontal" data-disabled="true">
        <RadioGroupItem value="read" id="access-read" />
        <FieldLabel htmlFor="access-read">Read only</FieldLabel>
      </Field>
      <Field orientation="horizontal" data-disabled="true">
        <RadioGroupItem value="edit" id="access-edit" />
        <FieldLabel htmlFor="access-edit">Can edit</FieldLabel>
      </Field>
    </RadioGroup>
  ),
}
