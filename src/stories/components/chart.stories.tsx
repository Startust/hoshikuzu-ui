import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Area,
  ComposedChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  XAxis,
  YAxis,
} from "recharts"

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const meta = {
  title: "Components/Chart",
  component: ChartContainer,
  parameters: {
    docs: {
      description: {
        component:
          "Recharts wrapped in atlas tokens: series take `--chart-1` through `--chart-5`, grid and axes stay recessive, and the tooltip is a hairline overlay with an index-style label and mono values. Pair colors with a second cue (dashes, gaps, a legend) since the chart hues are deliberately quiet.",
      },
    },
  },
} satisfies Meta<typeof ChartContainer>

export default meta
type Story = StoryObj<typeof ChartContainer>

const expData = [
  { day: "Oct 1", actual: 1240, planned: 1200 },
  { day: "Oct 2", actual: 2310, planned: 2400 },
  { day: "Oct 3", actual: 3180, planned: 3600 },
  { day: "Oct 4", actual: 4920, planned: 4800 },
  { day: "Oct 5", actual: 6400, planned: 6000 },
  { day: "Oct 6", actual: 6850, planned: 7200 },
  { day: "Oct 7", actual: 8120, planned: 8400 },
  { day: "Oct 8", actual: 9940, planned: 9600 },
  { day: "Oct 9", actual: 11280, planned: 10800 },
  { day: "Oct 10", actual: 11900, planned: 12000 },
  { day: "Oct 11", actual: 13460, planned: 13200 },
]

const expConfig = {
  actual: { label: "Earned", color: "var(--chart-1)" },
  planned: { label: "Planned", color: "var(--chart-2)" },
} satisfies ChartConfig

export const ExperienceCurve: Story = {
  render: () => (
    <div className="flex w-full max-w-2xl flex-col gap-4 rounded-sm border border-border bg-card/80 p-5">
      <div className="flex items-baseline justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="index-label text-faint-foreground">
            Grinding planner
          </span>
          <span className="text-sm font-semibold tracking-[0.08em] text-foreground">
            Experience toward level 42
          </span>
        </div>
        <span className="font-mono text-xs text-muted-foreground tabular-nums">
          13,460 / 15,000 EXP
        </span>
      </div>
      <ChartContainer config={expConfig} className="aspect-auto h-64 w-full">
        <ComposedChart data={expData} margin={{ left: 4, right: 8, top: 8 }}>
          <defs>
            <linearGradient id="fill-actual" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor="var(--color-actual)"
                stopOpacity={0.24}
              />
              <stop
                offset="100%"
                stopColor="var(--color-actual)"
                stopOpacity={0.02}
              />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            minTickGap={24}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            width={44}
            tickFormatter={(value: number) => `${value / 1000}k`}
          />
          <ChartTooltip
            cursor={{ strokeDasharray: "2 3" }}
            content={<ChartTooltipContent indicator="line" />}
          />
          <Area
            dataKey="actual"
            type="monotone"
            stroke="var(--color-actual)"
            strokeWidth={2}
            fill="url(#fill-actual)"
            activeDot={{ r: 4, strokeWidth: 2 }}
          />
          <Line
            dataKey="planned"
            type="monotone"
            stroke="var(--color-planned)"
            strokeWidth={1.5}
            strokeDasharray="4 4"
            dot={false}
            activeDot={false}
          />
          <ChartLegend content={<ChartLegendContent />} />
        </ComposedChart>
      </ChartContainer>
    </div>
  ),
}

const focusData = [
  { day: "Mon", focus: 95, review: 30 },
  { day: "Tue", focus: 120, review: 25 },
  { day: "Wed", focus: 70, review: 45 },
  { day: "Thu", focus: 140, review: 20 },
  { day: "Fri", focus: 110, review: 35 },
  { day: "Sat", focus: 50, review: 60 },
  { day: "Sun", focus: 25, review: 15 },
]

const focusConfig = {
  focus: { label: "Focus", color: "var(--chart-1)" },
  review: { label: "Review", color: "var(--chart-2)" },
} satisfies ChartConfig

export const TimerMinutes: Story = {
  render: () => (
    <div className="flex w-full max-w-xl flex-col gap-4 rounded-sm border border-border bg-card/80 p-5">
      <div className="flex items-baseline justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="index-label text-faint-foreground">Timers</span>
          <span className="text-sm font-semibold tracking-[0.08em] text-foreground">
            Minutes logged this week
          </span>
        </div>
        <span className="font-mono text-xs text-muted-foreground tabular-nums">
          840 min
        </span>
      </div>
      <ChartContainer config={focusConfig} className="aspect-auto h-56 w-full">
        <BarChart data={focusData} margin={{ left: 4, right: 4, top: 8 }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} width={36} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar
            dataKey="focus"
            stackId="minutes"
            fill="var(--color-focus)"
            stroke="var(--card)"
            strokeWidth={2}
            maxBarSize={28}
          />
          <Bar
            dataKey="review"
            stackId="minutes"
            fill="var(--color-review)"
            stroke="var(--card)"
            strokeWidth={2}
            radius={[2, 2, 0, 0]}
            maxBarSize={28}
          />
          <ChartLegend content={<ChartLegendContent />} />
        </BarChart>
      </ChartContainer>
    </div>
  ),
}
