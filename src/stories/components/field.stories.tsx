import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

const meta = {
  title: "Components/Forms/Field",
  component: Field,
  parameters: {
    docs: {
      description: {
        component:
          "Composes a label, control, description and error into one unit. Labels speak in the index voice; descriptions and errors stay in plain sentence case beneath the control.",
      },
    },
  },
  args: {
    orientation: "vertical",
  },
  argTypes: {
    orientation: {
      control: "inline-radio",
      options: ["vertical", "horizontal", "responsive"],
    },
  },
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <FieldGroup className="max-w-md">
      <Field {...args}>
        <FieldLabel htmlFor="field-title">Entry title</FieldLabel>
        <Input id="field-title" placeholder="Perseid shower, second night" />
        <FieldDescription>
          Appears on the archive card and in search results.
        </FieldDescription>
      </Field>
    </FieldGroup>
  ),
}

const reviewers = [
  { label: "Ito", value: "ito" },
  { label: "Mori", value: "mori" },
  { label: "Sato", value: "sato" },
]

export const ArchiveEntryForm: Story = {
  render: () => (
    <form className="w-full max-w-md" onSubmit={(event) => event.preventDefault()}>
      <FieldGroup>
        <FieldSet>
          <FieldLegend>New archive entry</FieldLegend>
          <FieldDescription>
            Entries stay in the review queue until a second reader signs them.
          </FieldDescription>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="entry-form-title">Title</FieldLabel>
              <Input id="entry-form-title" defaultValue="Vega, photometry run" />
            </Field>
            <Field>
              <FieldLabel htmlFor="entry-form-reviewer">Reviewer</FieldLabel>
              <Select items={reviewers} defaultValue="mori">
                <SelectTrigger id="entry-form-reviewer" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {reviewers.map((reviewer) => (
                    <SelectItem key={reviewer.value} value={reviewer.value}>
                      {reviewer.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="entry-form-notes">Notes</FieldLabel>
              <Textarea
                id="entry-form-notes"
                placeholder="Seeing, instrument, anything a later reader should know"
              />
            </Field>
          </FieldGroup>
        </FieldSet>
        <FieldSeparator />
        <FieldSet>
          <FieldLegend variant="label">Notify</FieldLegend>
          <FieldGroup className="gap-3">
            <Field orientation="horizontal">
              <Checkbox id="entry-form-notify-reviewer" defaultChecked />
              <FieldLabel htmlFor="entry-form-notify-reviewer">
                The reviewer
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="entry-form-notify-watchers" />
              <FieldLabel htmlFor="entry-form-notify-watchers">
                Everyone watching Lyra
              </FieldLabel>
            </Field>
          </FieldGroup>
        </FieldSet>
        <Field orientation="horizontal">
          <Button type="submit">Send to review</Button>
          <Button type="button" variant="ghost">
            Save draft
          </Button>
        </Field>
      </FieldGroup>
    </form>
  ),
}

export const WithError: Story = {
  render: () => (
    <FieldGroup className="max-w-md">
      <Field data-invalid="true">
        <FieldLabel htmlFor="field-epoch">Epoch</FieldLabel>
        <Input id="field-epoch" defaultValue="J2100" aria-invalid className="font-mono" />
        <FieldError>Use J2000 or B1950 for archive entries.</FieldError>
      </Field>
    </FieldGroup>
  ),
}

export const ChoiceCards: Story = {
  render: () => (
    <FieldSet className="max-w-md">
      <FieldLegend variant="label">Catalog source</FieldLegend>
      <RadioGroup defaultValue="hipparcos">
        <FieldLabel htmlFor="source-hipparcos">
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>Hipparcos</FieldTitle>
              <FieldDescription>
                Bright stars with precise positions. Fast to load.
              </FieldDescription>
            </FieldContent>
            <RadioGroupItem value="hipparcos" id="source-hipparcos" />
          </Field>
        </FieldLabel>
        <FieldLabel htmlFor="source-gaia">
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>Gaia subset</FieldTitle>
              <FieldDescription>
                Fainter sources down to magnitude twelve. Larger download.
              </FieldDescription>
            </FieldContent>
            <RadioGroupItem value="gaia" id="source-gaia" />
          </Field>
        </FieldLabel>
      </RadioGroup>
    </FieldSet>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <FieldGroup className="max-w-md">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="field-graticule">Show graticule</FieldLabel>
          <FieldDescription>
            Draw right ascension and declination lines on the chart.
          </FieldDescription>
        </FieldContent>
        <Switch id="field-graticule" defaultChecked />
      </Field>
      <FieldSeparator />
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="field-plain">Plain sky</FieldLabel>
          <FieldDescription>Stars only, no reference lines.</FieldDescription>
        </FieldContent>
        <Switch id="field-plain" />
      </Field>
    </FieldGroup>
  ),
}
