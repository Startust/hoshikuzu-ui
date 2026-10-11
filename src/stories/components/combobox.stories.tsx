import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox"
import { Label } from "@/components/ui/label"

const meta = {
  title: "Components/Combobox",
  component: Combobox,
  parameters: {
    docs: {
      description: {
        component:
          "A typed search over a known list, for when there are too many options to scan: catalog stars, reviewers, tags. Matches highlight with a faint signal wash; the chosen item carries a signal check.",
      },
    },
  },
} satisfies Meta<typeof Combobox>

export default meta
type Story = StoryObj<typeof meta>

const stars = [
  "Altair",
  "Antares",
  "Arcturus",
  "Betelgeuse",
  "Capella",
  "Deneb",
  "Polaris",
  "Rigel",
  "Sirius",
  "Spica",
  "Vega",
]

export const Playground: Story = {
  render: () => (
    <div className="grid w-full max-w-xs gap-2">
      <Label htmlFor="combobox-star">Reference star</Label>
      <Combobox items={stars} defaultValue="Vega">
        <ComboboxInput id="combobox-star" placeholder="Search the catalog" />
        <ComboboxContent>
          <ComboboxEmpty>No star by that name in this catalog.</ComboboxEmpty>
          <ComboboxList>
            {(item: string) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  ),
}

export const WithClear: Story = {
  render: () => (
    <Combobox items={stars} defaultValue="Deneb">
      <ComboboxInput
        placeholder="Search the catalog"
        aria-label="Reference star"
        showClear
        className="w-64"
      />
      <ComboboxContent>
        <ComboboxEmpty>No star by that name in this catalog.</ComboboxEmpty>
        <ComboboxList>
          {(item: string) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
}

const groupedSources = [
  { value: "Stars", items: ["Vega", "Deneb", "Altair"] },
  { value: "Clusters", items: ["Pleiades", "Hyades", "Beehive"] },
  { value: "Nebulae", items: ["Orion Nebula", "Ring Nebula"] },
]

export const Grouped: Story = {
  render: () => (
    <Combobox items={groupedSources}>
      <ComboboxInput
        placeholder="Find a source"
        aria-label="Source"
        className="w-64"
      />
      <ComboboxContent>
        <ComboboxEmpty>Nothing matches that name.</ComboboxEmpty>
        <ComboboxList>
          {(group: (typeof groupedSources)[number], index: number) => (
            <React.Fragment key={group.value}>
              {index > 0 && <ComboboxSeparator />}
              <ComboboxGroup items={group.items}>
                <ComboboxLabel>{group.value}</ComboboxLabel>
                <ComboboxCollection>
                  {(item: string) => (
                    <ComboboxItem key={item} value={item}>
                      {item}
                    </ComboboxItem>
                  )}
                </ComboboxCollection>
              </ComboboxGroup>
            </React.Fragment>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
}

const tags = [
  "photometry",
  "spectroscopy",
  "variable",
  "binary",
  "needs review",
  "cold archive",
]

function TagPicker() {
  const anchor = useComboboxAnchor()
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label>Tags</Label>
      <Combobox multiple items={tags} defaultValue={["photometry", "variable"]}>
        <ComboboxChips ref={anchor}>
          <ComboboxValue>
            {(values: string[]) => (
              <React.Fragment>
                {values.map((value) => (
                  <ComboboxChip key={value}>{value}</ComboboxChip>
                ))}
                <ComboboxChipsInput
                  placeholder="Add a tag"
                  aria-label="Add a tag"
                />
              </React.Fragment>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxContent anchor={anchor}>
          <ComboboxEmpty>No tag with that name yet.</ComboboxEmpty>
          <ComboboxList>
            {(item: string) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}

export const MultipleWithChips: Story = {
  render: () => <TagPicker />,
}
