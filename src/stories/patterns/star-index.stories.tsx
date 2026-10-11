import type { Meta, StoryObj } from "@storybook/react-vite"
import { ArrowUpRightIcon, HomeIcon, MoonIcon } from "lucide-react"

import { AtlasLink } from "@/components/atlas/atlas-link"
import {
  FloatingAction,
  FloatingActions,
} from "@/components/atlas/floating-actions"
import { IndexLabel } from "@/components/atlas/index-label"
import {
  StarPanel,
  StarPanelActions,
  StarPanelDescription,
  StarPanelLabel,
  StarPanelTitle,
} from "@/components/atlas/star-panel"
import { Starfield } from "@/components/atlas/starfield"
import { Button } from "@/components/ui/button"

const meta = {
  title: "Patterns/Star Index",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "The hoshikuzu home: a starfield where each star is a mapped object. The wordmark carries the only display type; a selected star opens a star panel; navigation sits quietly at the edges.",
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const STARS = [
  { top: "22%", left: "18%", size: "size-1", label: "Works" },
  { top: "64%", left: "26%", size: "size-1.5", label: "Note Taker" },
  { top: "30%", left: "71%", size: "size-1", label: "Review Pilot" },
  { top: "74%", left: "80%", size: "size-1", label: "Discord Bot" },
  { top: "14%", left: "52%", size: "size-0.5", label: "Key Trigger" },
]

export const Home: Story = {
  render: () => (
    <div className="relative isolate h-[720px] overflow-hidden bg-background transform-[translateZ(0)]">
      <Starfield />

      {STARS.map((star) => (
        <button
          key={star.label}
          type="button"
          aria-label={star.label}
          className="group absolute grid size-6 -translate-1/2 place-items-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
          style={{ top: star.top, left: star.left }}
        >
          <span
            className={`${star.size} rounded-full bg-foreground/80 transition-colors duration-180 group-hover:bg-signal`}
          />
        </button>
      ))}

      <div className="absolute top-[46%] left-[58%] pl-10">
        <StarPanel connector="left" translucent>
          <StarPanelLabel>Signal · Instrument</StarPanelLabel>
          <StarPanelTitle>Meteo Timer</StarPanelTitle>
          <StarPanelDescription>
            Weather rotations counted down in the background, with a soft chime.
          </StarPanelDescription>
          <StarPanelActions>
            <Button size="xs">
              Open
              <ArrowUpRightIcon data-icon="inline-end" />
            </Button>
          </StarPanelActions>
        </StarPanel>
      </div>

      <header className="absolute top-[34%] left-1/2 grid -translate-x-1/2 justify-items-center gap-3 text-center">
        <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] leading-none font-light tracking-normal [text-shadow:0_2px_18px_rgba(0,0,0,0.82)]">
          星屑
        </h1>
        <IndexLabel tracking="signal">Hoshikuzu · Star Index</IndexLabel>
      </header>

      <footer className="absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-between gap-4 px-6 py-5">
        <nav aria-label="Footer" className="flex flex-wrap gap-5">
          <AtlasLink href="#works">Works</AtlasLink>
          <AtlasLink href="#privacy">Privacy</AtlasLink>
          <AtlasLink href="#terms">Terms</AtlasLink>
        </nav>
        <IndexLabel tone="faint">5 mapped objects</IndexLabel>
      </footer>

      <FloatingActions className="bottom-16! md:bottom-16!">
        <FloatingAction label="Night atlas">
          <MoonIcon />
        </FloatingAction>
        <FloatingAction label="Home" render={<a href="#home" />}>
          <HomeIcon />
        </FloatingAction>
      </FloatingActions>
    </div>
  ),
}
