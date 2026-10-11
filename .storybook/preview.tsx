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
      storySort: {
        order: [
          "Introduction",
          "Foundations",
          "Atlas",
          "Components",
          "Patterns",
        ],
      },
    },
  },
  decorators: [withAtlasMode],
  tags: ["autodocs"],
}

export default preview
