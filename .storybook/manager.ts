import {
  CURRENT_STORY_WAS_SET,
  STORY_CHANGED,
} from "storybook/internal/core-events"
import { addons } from "storybook/manager-api"

import { atlasDocsTheme } from "./theme"

addons.setConfig({
  theme: atlasDocsTheme,
  sidebar: {
    showRoots: true,
  },
})

// Storybook hard-codes "… ⋅ Storybook" in the tab title, has no option for
// it, and does not update the title at all when a story is opened by URL. So
// the kit owns the title: it is set on every story/docs change, and any title
// Storybook writes itself has its suffix rebranded.
const BRAND = "Hoshikuzu UI"
const SUFFIX = " ⋅ Storybook"

function brand(title: string) {
  if (title === "Storybook" || title === "storybook - Storybook") return BRAND
  return title.endsWith(SUFFIX)
    ? `${title.slice(0, -SUFFIX.length)} ⋅ ${BRAND}`
    : title
}

const native = Object.getOwnPropertyDescriptor(Document.prototype, "title")
if (native?.get && native.set) {
  const { get, set } = native
  Object.defineProperty(document, "title", {
    configurable: true,
    get() {
      return get.call(document)
    },
    set(value: string) {
      set.call(document, brand(value))
    },
  })
}
document.title = brand(document.title)

addons.register("hoshikuzu/title", (api) => {
  const update = () => {
    const entry = api.getCurrentStoryData()
    document.title = entry
      ? `${entry.title.split("/").join(" / ")} - ${entry.name} ⋅ ${BRAND}`
      : BRAND
  }
  api.on(CURRENT_STORY_WAS_SET, update)
  api.on(STORY_CHANGED, update)
})
