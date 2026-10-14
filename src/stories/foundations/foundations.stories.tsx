import type { Meta, StoryObj } from "@storybook/react-vite"

import { SectionRule } from "@/components/atlas/index-label"

const meta = {
  title: "Foundations/Tokens",
  parameters: {
    docs: {
      description: {
        component:
          "Live token readouts. Switch the toolbar theme between night and archive: every swatch reads from the same semantic variable.",
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

type Swatch = { token: string; name: string; role: string }

const SURFACES: Swatch[] = [
  { token: "--background", name: "Deep space", role: "Page canvas" },
  { token: "--card", name: "Ink night", role: "Panels" },
  { token: "--popover", name: "Popover", role: "Menus, dialogs" },
  { token: "--secondary", name: "Observatory panel", role: "Secondary fill" },
  { token: "--surface-raised", name: "Raised", role: "Rows, active segments" },
  { token: "--accent", name: "Signal wash", role: "Hover, highlight" },
]

const INK: Swatch[] = [
  { token: "--foreground", name: "Starlight", role: "Primary text" },
  {
    token: "--muted-foreground",
    name: "Muted starlight",
    role: "Body, helpers",
  },
  { token: "--faint-foreground", name: "Faint starlight", role: "Metadata" },
  { token: "--border-faint", name: "Faint hairline", role: "Rows in a panel" },
  { token: "--border", name: "Hairline", role: "Frames, rules" },
  { token: "--border-strong", name: "Strong hairline", role: "Hover, pressed" },
  { token: "--input", name: "Field line", role: "Inputs" },
]

const SIGNALS: Swatch[] = [
  { token: "--primary", name: "Soft amber lamp", role: "Decisive action" },
  { token: "--signal", name: "Pale cyan signal", role: "Focus, selection" },
  { token: "--star", name: "Star", role: "A lit object" },
  { token: "--success", name: "Success", role: "Done, sent" },
  { token: "--warning", name: "Warning", role: "Setup, caution" },
  { token: "--destructive", name: "Destructive", role: "Failure, delete" },
  { token: "--info", name: "Info", role: "Pending, notice" },
]

const CHART: Swatch[] = [1, 2, 3, 4, 5].map((n) => ({
  token: `--chart-${n}`,
  name: `Chart ${n}`,
  role: "Series",
}))

function SwatchGrid({ items }: { items: Swatch[] }) {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.token} className="grid gap-3 bg-card p-4">
          <div
            className="h-14 rounded-xs border border-border"
            style={{ background: `var(${item.token})` }}
          />
          <div className="grid gap-1">
            <p className="text-sm text-foreground">{item.name}</p>
            <p className="text-xs text-muted-foreground">{item.role}</p>
            <code className="font-mono text-[0.6875rem] text-faint-foreground">
              {item.token}
            </code>
          </div>
        </div>
      ))}
    </div>
  )
}

export const Color: Story = {
  render: () => (
    <div className="grid max-w-4xl gap-10">
      <section className="grid gap-4">
        <SectionRule label="Surfaces" meta="tonal layers" />
        <SwatchGrid items={SURFACES} />
      </section>
      <section className="grid gap-4">
        <SectionRule label="Ink and hairlines" />
        <SwatchGrid items={INK} />
      </section>
      <section className="grid gap-4">
        <SectionRule label="Signals" meta="under 10% of a screen" />
        <SwatchGrid items={SIGNALS} />
      </section>
      <section className="grid gap-4">
        <SectionRule label="Charts" />
        <SwatchGrid items={CHART} />
      </section>
    </div>
  ),
}

const TYPE_SCALE = [
  {
    role: "Display",
    spec: "300 · clamp(2rem, 4vw, 3rem) · 1.05",
    use: "Page headers only",
    sample: (
      <p className="text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-light">
        星屑 Hoshikuzu
      </p>
    ),
  },
  {
    role: "Headline",
    spec: "300 · 1.125rem · 1.25",
    use: "Dialog and sheet titles",
    sample: (
      <p className="text-lg leading-tight font-light">Archive this meeting?</p>
    ),
  },
  {
    role: "Title",
    spec: "600 · 0.875rem · tracking 0.08em",
    use: "Cards, compact panels",
    sample: (
      <p className="text-sm font-semibold tracking-[0.08em]">Local runtime</p>
    ),
  },
  {
    role: "Body",
    spec: "400 · 0.875rem · 1.6",
    use: "Descriptions, instructions",
    sample: (
      <p className="max-w-[60ch] text-sm leading-6 text-muted-foreground">
        Audio is transcribed on this machine. Summaries are written next to the
        recording and never leave the local library.
      </p>
    ),
  },
  {
    role: "Index label",
    spec: "600 · 0.625rem · tracking 0.16em · uppercase",
    use: "Metadata, controls, table heads",
    sample: <p className="index-label text-muted-foreground">Signal · Tools</p>,
  },
  {
    role: "Mono",
    spec: "400 · 0.75rem",
    use: "Times, paths, IDs, readouts",
    sample: (
      <p className="font-mono text-xs text-muted-foreground">00:41 · v0.2.10</p>
    ),
  },
]

export const Typography: Story = {
  render: () => (
    <div className="grid max-w-4xl gap-4">
      <SectionRule label="Type roles" meta="system sans with CJK fallbacks" />
      <div className="grid">
        {TYPE_SCALE.map((row) => (
          <div
            key={row.role}
            className="grid gap-3 border-b border-border py-5 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-8"
          >
            <div className="grid content-start gap-1">
              <p className="text-sm text-foreground">{row.role}</p>
              <p className="font-mono text-[0.6875rem] text-faint-foreground">
                {row.spec}
              </p>
              <p className="text-xs text-muted-foreground">{row.use}</p>
            </div>
            <div className="min-w-0 text-foreground">{row.sample}</div>
          </div>
        ))}
      </div>
    </div>
  ),
}

const RADII = [
  { name: "rounded-xs", value: "1px", use: "Nested items, segments" },
  { name: "rounded-sm", value: "2px", use: "Controls, panels, dialogs" },
  { name: "rounded-xl", value: "4px", use: "Large layout regions" },
  { name: "rounded-full", value: "pill", use: "Chips, switches, dots" },
]

const SHADOWS = [
  { name: "shadow-control", use: "Small floating controls" },
  { name: "shadow-overlay", use: "Menus, popovers, dialogs, toasts" },
  { name: "shadow-panel", use: "Star panel over the sky" },
]

export const ShapeAndElevation: Story = {
  name: "Shape & Elevation",
  render: () => (
    <div className="grid max-w-4xl gap-10">
      <section className="grid gap-4">
        <SectionRule label="Corners" meta="small and precise" />
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {RADII.map((radius) => (
            <div key={radius.name} className="grid gap-2">
              <div
                className={`h-20 border border-border-strong bg-card ${radius.name}`}
              />
              <code className="font-mono text-xs text-foreground">
                {radius.name}
              </code>
              <p className="text-xs text-muted-foreground">
                {radius.value} · {radius.use}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="grid gap-4">
        <SectionRule label="Elevation" meta="flat until focused" />
        <div className="grid gap-8 sm:grid-cols-3">
          {SHADOWS.map((shadow) => (
            <div key={shadow.name} className="grid gap-3">
              <div
                className={`h-24 rounded-sm border border-border bg-popover ${shadow.name}`}
              />
              <code className="font-mono text-xs text-foreground">
                {shadow.name}
              </code>
              <p className="text-xs text-muted-foreground">{shadow.use}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
}

const MOTION = [
  {
    name: "ease-out-quint",
    value: "cubic-bezier(0.22, 1, 0.36, 1)",
    use: "Hover, focus, color",
  },
  {
    name: "ease-out-expo",
    value: "cubic-bezier(0.16, 1, 0.3, 1)",
    use: "Overlay entrances",
  },
  {
    name: "ease-out-quart",
    value: "cubic-bezier(0.25, 1, 0.5, 1)",
    use: "Ambient loops",
  },
]

export const Motion: Story = {
  render: () => (
    <div className="grid max-w-4xl gap-6">
      <SectionRule label="Motion" meta="single stage · no bounce" />
      <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border">
        {MOTION.map((curve) => (
          <div
            key={curve.name}
            className="group grid items-center gap-3 bg-card p-4 sm:grid-cols-[12rem_minmax(0,1fr)_14rem]"
          >
            <code className="font-mono text-xs text-foreground">
              {curve.name}
            </code>
            <div className="relative h-6 border-b border-border">
              <span
                className="absolute bottom-0 left-0 size-2 translate-y-1/2 rounded-full bg-signal transition-transform duration-700 group-hover:translate-x-[min(24rem,60vw)]"
                style={{ transitionTimingFunction: `var(--${curve.name})` }}
              />
            </div>
            <p className="text-xs text-muted-foreground">
              {curve.use} · <span className="font-mono">{curve.value}</span>
            </p>
          </div>
        ))}
      </div>
      <p className="text-sm text-muted-foreground">
        Hover a row to run its curve. State changes take 150–180ms; overlays
        enter in 200–240ms. Reduced motion collapses everything to an instant
        change.
      </p>
    </div>
  ),
}
