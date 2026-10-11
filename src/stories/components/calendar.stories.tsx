import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import type { DateRange } from "react-day-picker"

import { Calendar } from "@/components/ui/calendar"

const meta = {
  title: "Components/Forms/Calendar",
  id: "components-calendar",
  component: Calendar,
  parameters: {
    docs: {
      description: {
        component:
          "A compact month grid for picking observing nights or meeting dates. Selection uses the lamp fill, ranges a faint signal wash, and today keeps a brightened hairline.",
      },
    },
  },
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

const frame = "rounded-sm border border-border bg-card/80"

function SingleDate() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2026, 9, 14)
  )
  return (
    <Calendar
      mode="single"
      defaultMonth={new Date(2026, 9, 1)}
      selected={date}
      onSelect={setDate}
      className={frame}
    />
  )
}

export const Single: Story = {
  render: () => <SingleDate />,
}

function ObservingWindow() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(2026, 9, 18),
    to: new Date(2026, 9, 24),
  })
  return (
    <div className="flex flex-col gap-3">
      <Calendar
        mode="range"
        defaultMonth={new Date(2026, 9, 1)}
        numberOfMonths={2}
        selected={range}
        onSelect={setRange}
        className={frame}
      />
      <p className="font-mono text-xs text-muted-foreground">
        {range?.from ? range.from.toDateString() : "No start"} →{" "}
        {range?.to ? range.to.toDateString() : "No end"}
      </p>
    </div>
  )
}

export const ObservingWindowRange: Story = {
  name: "Observing window (range)",
  render: () => <ObservingWindow />,
}

function WithDropdowns() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2026, 9, 14)
  )
  return (
    <Calendar
      mode="single"
      captionLayout="dropdown"
      defaultMonth={new Date(2026, 9, 1)}
      startMonth={new Date(2020, 0)}
      endMonth={new Date(2030, 11)}
      selected={date}
      onSelect={setDate}
      className={frame}
    />
  )
}

export const MonthAndYearDropdowns: Story = {
  render: () => <WithDropdowns />,
}

export const WeekNumbersAndDisabled: Story = {
  render: () => (
    <Calendar
      mode="single"
      showWeekNumber
      defaultMonth={new Date(2026, 9, 1)}
      disabled={[{ dayOfWeek: [0, 6] }]}
      className={frame}
    />
  ),
}
