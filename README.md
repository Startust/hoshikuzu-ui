# Hoshikuzu UI

A shadcn component kit in the Hoshikuzu style: a quiet archival star atlas.

It is distilled from [hoshikuzu](https://github.com/yihuil1992/hoshikuzu),
which is the primary source, plus two projects that adopted its language:
[note-taker](https://github.com/yihuil1992/note-taker) and
[review-pilot](https://github.com/yihuil1992/review-pilot). It ships as a
[shadcn registry](https://ui.shadcn.com/docs/registry) built on **Base UI**
(`base-nova`, shadcn's current default), with a Storybook published to
GitHub Pages.

- Storybook: https://yihuil1992.github.io/hoshikuzu-ui/storybook/
- Registry: https://yihuil1992.github.io/hoshikuzu-ui/r/registry.json

## Install

```bash
# 1. A Base UI shadcn project
npx shadcn@latest init -b base

# 2. The theme (night atlas + archive sheet tokens, type, motion, utilities)
npx shadcn@latest add https://yihuil1992.github.io/hoshikuzu-ui/r/hoshikuzu-theme.json

# 3. Components
npx shadcn@latest add https://yihuil1992.github.io/hoshikuzu-ui/r/button.json
```

Or register the namespace once in `components.json`:

```json
{
  "registries": {
    "@hoshikuzu": "https://yihuil1992.github.io/hoshikuzu-ui/r/{name}.json"
  }
}
```

```bash
npx shadcn@latest add @hoshikuzu/card @hoshikuzu/star-panel @hoshikuzu/atlas-mode
```

## Modes

| Mode | Contract |
| --- | --- |
| Night atlas (default) | `<html data-atlas-mode="night" class="dark">` |
| Archive sheet | `<html data-atlas-mode="archive">` |

`atlas-mode` provides `AtlasModeProvider`, `useAtlasMode`, `AtlasModeToggle`
and `atlasModeScript()`. Inline the script in `<head>` to apply the stored
mode before hydration:

```tsx
<script dangerouslySetInnerHTML={{ __html: atlasModeScript() }} />
```

## What's inside

**Every shadcn component** (61, from accordion to tooltip, including the
chat primitives), restyled: 2px corners, hairline borders, tracked index
labels, a soft amber primary, a pale cyan signal, tight overlay shadows.

**Atlas components** the source projects each built by hand:

| Item | Purpose |
| --- | --- |
| `star-panel` | The signature mapped-object panel with an optional connector |
| `measurement` | Light-numeral readings on a hairline grid |
| `status-dot` | Points of light for state, with a `live` halo |
| `data-list` | Label / mono value / status rows |
| `timeline` | Time-indexed transcripts and activity |
| `index-label` | Index labels and section rules |
| `atlas-link` | Edge links with a drawn-in hairline underline |
| `page-header` | Eyebrow, light display title, description, actions |
| `floating-actions` | Corner utilities with annotation labels |
| `bottom-nav` | Mobile primary navigation |
| `starfield` | Star dots at night, graticule on the archive sheet |
| `atlas-mode` | Mode provider, toggle and pre-hydration script |

See [DESIGN.md](DESIGN.md) for the design system and
[docs/component-guidelines.md](docs/component-guidelines.md) for how
components are restyled.

## Development

```bash
pnpm install
pnpm dev              # Storybook on http://localhost:6006
pnpm typecheck
pnpm lint
pnpm build:registry   # registry.json + public/r
pnpm build:storybook  # public/storybook
pnpm design:detect    # impeccable design review
pnpm smoke:consumer   # install the registry into a fresh app and build it
```

`registry.json` and `public/r` are generated and committed; CI fails if they
are stale. Pushing to `main` deploys `public/` (registry + Storybook) to
GitHub Pages.

### CI

Pull requests run typecheck, lint, the registry build (and a staleness
check), the Storybook build, the [impeccable](https://www.npmjs.com/package/impeccable)
design detector against `DESIGN.md`, and a consumer smoke test that installs
every item into a fresh `base-nova` app and builds it.
