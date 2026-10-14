import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  CloudIcon,
  CloudRainIcon,
  CloudSunIcon,
  MinusIcon,
  MoonIcon,
  PauseIcon,
  PlusIcon,
  SkipBackIcon,
  SkipForwardIcon,
  SunIcon,
} from "lucide-react"
import * as React from "react"

import { IndexLabel } from "@/components/atlas/index-label"
import {
  Measurement,
  MeasurementLabel,
  MeasurementUnit,
  MeasurementValue,
} from "@/components/atlas/measurement"
import { Starfield } from "@/components/atlas/starfield"
import { StatusDot } from "@/components/atlas/status-dot"
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const meta = {
  title: "Patterns/Home Atlas",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A home dashboard read as a night sky: each room is a hairline panel, each device a star that lights when it is on. Instruments stay quiet (square switches, a ruled volume scale, hairline mode keys) so the readings carry the page.",
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

/** One device: a star, its name, a tracked state caption, then its control. */
function DeviceRow({
  lit,
  name,
  caption,
  children,
}: {
  lit: boolean
  name: string
  caption: string
  children?: React.ReactNode
}) {
  return (
    <div className="flex min-h-12 items-center justify-between gap-3 border-b border-border-faint last:border-b-0">
      <div className="flex min-w-0 items-center gap-3">
        <StatusDot tone={lit ? "star" : "idle"} />
        <div className="grid min-w-0 gap-1">
          <span className="truncate text-sm leading-tight text-foreground">
            {name}
          </span>
          <IndexLabel tone="faint" tracking="signal">
            {caption}
          </IndexLabel>
        </div>
      </div>
      {children}
    </div>
  )
}

function Reading({ value, unit }: { value: string; unit?: string }) {
  return (
    <span className="text-sm whitespace-nowrap text-foreground tabular-nums">
      {value}
      {unit && <MeasurementUnit className="ml-1">{unit}</MeasurementUnit>}
    </span>
  )
}

/** Room panel: kicker, tracked title, a count, then a rule that fades out. */
function RoomPanel({
  kicker,
  title,
  count,
  children,
}: {
  kicker: string
  title: string
  count: string
  children: React.ReactNode
}) {
  return (
    <Card size="sm" interactive className="gap-1 pb-1">
      <CardHeader className="gap-1.5">
        <IndexLabel tone="faint" tracking="signal">
          {kicker}
        </IndexLabel>
        <CardTitle>{title}</CardTitle>
        <CardAction>
          <IndexLabel tone="faint">{count}</IndexLabel>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div
          aria-hidden
          className="mt-2 mb-1 h-px bg-linear-to-r from-border via-border-faint to-transparent"
        />
        {children}
      </CardContent>
    </Card>
  )
}

function Bedroom() {
  const [bed1, setBed1] = React.useState(true)
  const [bed2, setBed2] = React.useState(false)
  const [mode, setMode] = React.useState("cool")
  const [target, setTarget] = React.useState(22)
  const on = [bed1, bed2, mode !== "off"].filter(Boolean).length

  return (
    <RoomPanel kicker="East wing" title="Bedroom" count={`${on} / 3 active`}>
      <DeviceRow lit={bed1} name="Bed lamp" caption={bed1 ? "On" : "Off"}>
        <Switch
          checked={bed1}
          onCheckedChange={setBed1}
          aria-label="Bed lamp"
        />
      </DeviceRow>
      <DeviceRow lit={bed2} name="Heated blanket" caption={bed2 ? "On" : "Off"}>
        <Switch
          checked={bed2}
          onCheckedChange={setBed2}
          aria-label="Heated blanket"
        />
      </DeviceRow>
      <div className="pt-1.5 pb-3.5">
        <DeviceRow lit={mode !== "off"} name="Air conditioner" caption={mode}>
          <IndexLabel tone="faint">
            {mode === "off" ? "Idle" : "Cooling"}
          </IndexLabel>
        </DeviceRow>
        <div className="mt-3 mb-4 flex items-end justify-between gap-4">
          <Measurement className="min-h-0 gap-2 p-0">
            <MeasurementLabel>Inside</MeasurementLabel>
            <MeasurementValue>
              24.5<MeasurementUnit>°C</MeasurementUnit>
            </MeasurementValue>
          </Measurement>
          <div className="grid justify-items-end gap-2">
            <IndexLabel>Target</IndexLabel>
            <ButtonGroup aria-label="Target temperature">
              <Button
                variant="outline"
                size="icon-sm"
                aria-label="Lower target"
                onClick={() => setTarget((t) => t - 0.5)}
              >
                <MinusIcon />
              </Button>
              <ButtonGroupText className="min-w-16 justify-center text-sm font-normal tracking-normal text-foreground normal-case tabular-nums">
                {target.toFixed(1)}°
              </ButtonGroupText>
              <Button
                variant="outline"
                size="icon-sm"
                aria-label="Raise target"
                onClick={() => setTarget((t) => t + 0.5)}
              >
                <PlusIcon />
              </Button>
            </ButtonGroup>
          </div>
        </div>
        <ToggleGroup
          size="sm"
          value={[mode]}
          onValueChange={(value) => value[0] && setMode(value[0] as string)}
          aria-label="Air conditioner mode"
          className="flex-wrap"
        >
          {["off", "auto", "cool", "dry", "heat", "fan"].map((m) => (
            <ToggleGroupItem key={m} value={m}>
              {m}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
    </RoomPanel>
  )
}

function Workstation() {
  const [power, setPower] = React.useState(true)
  const [mute, setMute] = React.useState(false)
  const [volume, setVolume] = React.useState(36)

  return (
    <RoomPanel
      kicker="Study"
      title="Stardust"
      count={`${[power, mute].filter(Boolean).length} / 2 active`}
    >
      <DeviceRow lit={power} name="Power" caption={power ? "On" : "Off"}>
        <Switch checked={power} onCheckedChange={setPower} aria-label="Power" />
      </DeviceRow>
      <DeviceRow lit={mute} name="Mute" caption={mute ? "On" : "Off"}>
        <Switch checked={mute} onCheckedChange={setMute} aria-label="Mute" />
      </DeviceRow>
      <div className="border-b border-border-faint pt-1 pb-3.5">
        <DeviceRow lit={false} name="Volume" caption="Level">
          <Reading value={String(volume)} unit="%" />
        </DeviceRow>
        <Slider
          value={[volume]}
          onValueChange={(value) => setVolume((value as number[])[0])}
          ticks={20}
          aria-label="Volume"
        />
      </div>
      <DeviceRow lit={false} name="Media" caption="Transport">
        <div className="flex gap-1.5">
          <Button variant="outline" size="icon-sm" aria-label="Previous track">
            <SkipBackIcon />
          </Button>
          <Button variant="outline" size="icon-sm" aria-label="Pause">
            <PauseIcon />
          </Button>
          <Button variant="outline" size="icon-sm" aria-label="Next track">
            <SkipForwardIcon />
          </Button>
        </div>
      </DeviceRow>
      <DeviceRow lit={false} name="Monitor" caption="Display">
        <div className="flex gap-1.5">
          <Button variant="outline" size="sm">
            <MoonIcon data-icon="inline-start" />
            Sleep
          </Button>
          <Button variant="outline" size="sm">
            <SunIcon data-icon="inline-start" />
            Wake
          </Button>
        </div>
      </DeviceRow>
    </RoomPanel>
  )
}

function Network() {
  return (
    <RoomPanel kicker="Fios" title="Network" count="4 obj">
      <DeviceRow lit name="WAN" caption="Connectivity">
        <Reading value="Connected" />
      </DeviceRow>
      <DeviceRow lit={false} name="Download" caption="Inbound">
        <Reading value="18.3" unit="MB/s" />
      </DeviceRow>
      <DeviceRow lit={false} name="Upload" caption="Outbound">
        <Reading value="402" unit="kB/s" />
      </DeviceRow>
      <DeviceRow lit name="Presence" caption="Household">
        <Reading value="Home" />
      </DeviceRow>
    </RoomPanel>
  )
}

const FORECAST = [
  { day: "Wed", Icon: CloudSunIcon, hi: 19, lo: 11 },
  { day: "Thu", Icon: SunIcon, hi: 18, lo: 12 },
  { day: "Fri", Icon: CloudRainIcon, hi: 17, lo: 11 },
  { day: "Sat", Icon: CloudIcon, hi: 16, lo: 12 },
  { day: "Sun", Icon: MoonIcon, hi: 15, lo: 11 },
]

export const Home: Story = {
  render: () => (
    <div className="relative isolate min-h-[900px] transform-[translateZ(0)] overflow-hidden bg-background">
      <Starfield />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-10 md:px-10">
        <header className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <section>
            <div
              aria-hidden
              className="mb-4 h-px w-20 bg-linear-to-r from-foreground/55 to-transparent"
            />
            <IndexLabel tracking="signal">Home atlas</IndexLabel>
            <h1 className="mt-3 text-[clamp(2.25rem,5vw,3.75rem)] leading-none font-light text-foreground">
              ほしくず
            </h1>
            <p className="mt-4 max-w-72 text-[0.9375rem] leading-relaxed text-muted-foreground">
              Quiet signals from the rooms, gathered into one night sky.
            </p>
            <div className="mt-7 flex flex-wrap items-baseline gap-3.5">
              <span className="text-3xl leading-none font-light tracking-[0.04em] text-foreground tabular-nums">
                06:58
              </span>
              <IndexLabel tracking="signal">Wednesday, October 14</IndexLabel>
            </div>
          </section>

          <section className="min-w-64" aria-label="Weather">
            <IndexLabel tracking="signal">Weather · Home</IndexLabel>
            <div className="mt-2.5 flex items-center gap-3.5">
              <CloudSunIcon
                aria-hidden
                strokeWidth={1.5}
                className="size-6.5 text-muted-foreground"
              />
              <span className="text-[clamp(2rem,4vw,3rem)] leading-none font-light text-foreground tabular-nums">
                17°
              </span>
              <span className="text-sm text-muted-foreground">
                Partly cloudy
              </span>
            </div>
            <div className="mt-4 grid grid-cols-5 gap-1.5 border-t border-border-faint pt-3">
              {FORECAST.map(({ day, Icon, hi, lo }) => (
                <div key={day} className="grid justify-items-center gap-1.5">
                  <IndexLabel tone="faint">{day}</IndexLabel>
                  <Icon
                    aria-hidden
                    strokeWidth={1.5}
                    className="size-4 text-muted-foreground"
                  />
                  <span className="text-xs text-foreground tabular-nums">
                    {hi}°
                  </span>
                  <span className="text-[0.6875rem] text-faint-foreground tabular-nums">
                    {lo}°
                  </span>
                </div>
              ))}
            </div>
          </section>
        </header>

        <main className="grid items-start gap-5 md:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
          <Bedroom />
          <Workstation />
          <Network />
        </main>

        <footer className="flex flex-wrap justify-between gap-3 border-t border-border-faint pt-3.5">
          <IndexLabel tone="faint">12 mapped objects</IndexLabel>
          <IndexLabel tone="faint">Night atlas · HA 2026.10</IndexLabel>
        </footer>
      </div>
    </div>
  ),
}
