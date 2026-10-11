import type { Decorator, Preview } from "@storybook/react-vite"
import { DecoratorHelpers } from "@storybook/addon-themes"
import { useEffect } from "react"

import "../src/index.css"
import "./storybook.css"
import { atlasDocsTheme } from "./theme"

const { initializeThemeState, pluckThemeFromContext } = DecoratorHelpers

const MODES = { night: "night", archive: "archive" } as const
type Mode = keyof typeof MODES

initializeThemeState(Object.keys(MODES), "night")

function applyMode(mode: Mode) {
  const root = document.documentElement
  root.dataset.atlasMode = mode
  root.classList.toggle("dark", mode === "night")
}

function AtlasModeFrame({
  mode,
  children,
}: {
  mode: Mode
  children: React.ReactNode
}) {
  useEffect(() => {
    applyMode(mode)
  }, [mode])

  return children
}

/** Mirrors the kit's runtime contract: data-atlas-mode on <html>, plus .dark at night. */
const withAtlasMode: Decorator = (Story, context) => {
  const selected = pluckThemeFromContext(context) as Mode
  const mode: Mode = selected in MODES ? selected : "night"

  return (
    <AtlasModeFrame mode={mode}>
      <Story />
    </AtlasModeFrame>
  )
}

const preview: Preview = {
  parameters: {
    layout: "padded",
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: atlasDocsTheme,
      codePanel: true,
    },
    a11y: {
      test: "todo",
    },
    options: {
      // Groups in a fixed order, components A-Z inside each group, stories in
      // declaration order (so Playground stays first). Storybook evaluates
      // this on the server: keep it self-contained, plain JS, no type
      // annotations.
      storySort: (a, b) => {
        const groups = ["Introduction", "Foundations", "Atlas", "Components", "Patterns"]
        const ga = groups.indexOf(a.title.split("/")[0])
        const gb = groups.indexOf(b.title.split("/")[0])
        if (ga !== gb) return (ga === -1 ? 99 : ga) - (gb === -1 ? 99 : gb)
        return a.title === b.title ? 0 : a.title.localeCompare(b.title)
      },
    },
  },
  decorators: [withAtlasMode],
  tags: ["autodocs"],
}

export default preview
