import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

const meta = {
  title: "Components/Forms/Switch",
  component: Switch,
  parameters: {
    docs: {
      description: {
        component:
          "A pill switch for settings that take effect immediately. On, the track fills with the primary lamp; off, it rests on the secondary surface.",
      },
    },
  },
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "default"] },
    disabled: { control: "boolean" },
    defaultChecked: { control: "boolean" },
  },
  args: {
    size: "default",
    defaultChecked: true,
    disabled: false,
    "aria-label": "Night atlas",
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Switch size="sm" defaultChecked aria-label="Compact rows" />
      <Switch defaultChecked aria-label="Show star dots" />
      <Switch aria-label="Show graticule" />
    </div>
  ),
}

export const SettingsList: Story = {
  render: () => (
    <FieldGroup className="w-full max-w-md">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="setting-autoarchive">
            Archive notes after review
          </FieldLabel>
          <FieldDescription>
            Signed meeting notes move to the warm shelf once approved.
          </FieldDescription>
        </FieldContent>
        <Switch id="setting-autoarchive" defaultChecked />
      </Field>
      <FieldSeparator />
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="setting-signals">Signal alerts</FieldLabel>
          <FieldDescription>
            Notify me when a watched source reports a new reading.
          </FieldDescription>
        </FieldContent>
        <Switch id="setting-signals" />
      </Field>
      <FieldSeparator />
      <Field orientation="horizontal" data-disabled="true">
        <FieldContent>
          <FieldLabel htmlFor="setting-sync">Offline copy</FieldLabel>
          <FieldDescription>
            Managed by your workspace administrator.
          </FieldDescription>
        </FieldContent>
        <Switch id="setting-sync" disabled />
      </Field>
    </FieldGroup>
  ),
}
