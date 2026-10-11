# Component Guidelines

How every component in `src/components/ui` is restyled from stock shadcn
(`base-nova`, Base UI primitives) into the Hoshikuzu atlas language. Read
`DESIGN.md` for the why; this file is the how.

Reference implementations: `button.tsx`, `badge.tsx`, `input.tsx`, `card.tsx`,
`dialog.tsx`, `tabs.tsx` and `src/stories/components/button.stories.tsx`.

## Ground rules

- **Restyle, don't rewrite.** Keep shadcn's file structure, exports, `data-slot`
  attributes, Base UI primitives and props. Change class strings. Add a
  variant or prop only when a source project (hoshikuzu, note-taker,
  review-pilot) actually uses that pattern.
- **Tokens only.** Never hard-code hex/rgba in components. Use the semantic
  utilities from `src/styles/hoshikuzu.css` so both atlas modes work.
- **No `dark:` variants.** Night and archive are both expressed through tokens.
  Delete every `dark:` class you find; fold the intent into the token-based
  class.
- **Base UI, not Radix.** Composition uses the `render` prop, never `asChild`.
- Keep `import { cn } from "cn"` (shadcn's current helper).
- Remove unused imports (`tsc -b` runs with `noUnusedLocals`).

## Token vocabulary

| Need | Use |
| --- | --- |
| Page / panel / overlay surface | `bg-background`, `bg-card` (`bg-card/80` for translucent panels), `bg-popover` |
| Raised row / active segment | `bg-surface-raised` |
| Hover / highlighted item / selected row | `bg-accent text-accent-foreground` (a faint signal wash, never a solid fill) |
| Decisive action (one per surface) | `bg-primary text-primary-foreground`, hover `bg-primary-hover` |
| Signal (focus, selection, readiness) | `text-signal`, `bg-signal`, `border-signal`, `ring-ring` |
| Hairlines | `border-border`; brightened/active: `border-border-strong` |
| Field border | `border-input` |
| Body text / secondary / tertiary | `text-foreground` / `text-muted-foreground` / `text-faint-foreground` |
| Status | `text-{success,warning,info,destructive}` + `bg-{tone}-surface` + `border-{tone}-border` |
| Modal backdrop | `bg-overlay` (no backdrop blur) |
| Elevation | `shadow-control` (small floating controls), `shadow-overlay` (menus, popovers, dialogs, toasts) |

## Shape

- Radius tokens are remapped: `rounded-sm|md|lg` = 2px, `rounded-xl` = 4px.
  Prefer `rounded-sm` for controls and panels, `rounded-xs` (1px) for items
  nested inside a padded container (menu items, segments).
- `rounded-full` only for: switches, avatars, radio dots, status dots,
  `pill` chips, slider thumbs.
- Replace `ring-1 ring-foreground/10` surfaces with `border border-border`.
- Remove nested `rounded-t-xl` / `rounded-b-xl` decorations.

## Typography

- **Index label** (metadata, menu group labels, table heads, tab triggers,
  form labels, badge text, button text):
  `text-2xs font-semibold tracking-[0.16em] uppercase` (or the `index-label`
  utility). Slightly larger variant for form labels and tab triggers:
  `text-[0.6875rem] font-semibold tracking-[0.16em] uppercase`.
  Index labels must stay short (under ~30 characters). Never uppercase
  sentences or descriptions.
- **Body**: `text-sm leading-6 text-muted-foreground` for descriptions;
  `text-sm text-foreground` for values and item text. Never add letter
  spacing to body text.
- **Panel / dialog title**: `text-lg font-light leading-tight` (dialogs, sheets,
  drawers) or `text-sm font-semibold tracking-[0.08em]` (cards, compact panels).
- **Display** (page heroes only, not inside components): `font-light`.
- Mono for timestamps, paths, IDs, numeric readouts: `font-mono text-xs`.

## Controls

- Heights: xs `h-7`, sm `h-8`, default `h-9`, lg `h-10`, xl `h-12`.
- Fields: `rounded-sm border border-input bg-card/45 hover:border-border-strong`
  `focus-visible:border-ring focus-visible:bg-card/70 focus-visible:ring-2 focus-visible:ring-ring/25`.
  Placeholder `placeholder:text-faint-foreground`.
- Invalid: `aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20`.
- Focus ring everywhere: `focus-visible:ring-2 focus-visible:ring-ring/30`
  (soft, localized; never a saturated glow).
- Disabled: `disabled:opacity-45` (or `data-disabled:opacity-45`), layout
  unchanged.
- Checked/selected controls (checkbox, radio, switch, toggle on): use
  `primary` fill for checkbox and switch, `signal` for radio dots and
  slider range, and `bg-surface-raised border-border-strong text-foreground`
  for pressed toggles. No saturated fills.

## Overlays (menus, popovers, select, combobox, tooltip, hover card, toasts)

- Surface: `rounded-sm border border-border bg-popover text-popover-foreground shadow-overlay`.
  Replace `ring-1 ring-foreground/10` and `shadow-md|lg`.
- Items: `rounded-xs px-2 py-1.5 text-sm` with
  `focus:bg-accent focus:text-accent-foreground` (or `data-highlighted:`).
  Never a solid signal fill on highlight.
- Group labels: index label style in `text-faint-foreground`.
- Separators: `bg-border`.
- Shortcuts: `font-mono text-[0.6875rem] tracking-normal text-faint-foreground`.
- Enter motion: keep `animate-in fade-in-0`; use `zoom-in-[0.985]` instead of
  `zoom-in-95`, `duration-150 ease-out-expo`. No bounce.
- Tooltip: `bg-popover border border-border text-foreground` (not inverted),
  `text-xs`, `px-2 py-1.5`, arrow matches popover.

## Motion

- Hover/focus/color: `transition-[color,background-color,border-color,box-shadow] duration-150 ease-out-quint`.
  Avoid `transition-all`.
- Press feedback: `active:scale-[0.985]` on buttons and rows. No translate on hover.
- Never animate width/height/padding/margin (accordion/collapsible keep
  shadcn's height keyframes, which are acceptable).
- Reduced motion is handled globally in `hoshikuzu.css`.

## Stories

- One file per component: `src/stories/components/<name>.stories.tsx`.
- `title: "Components/<Category>/<Name>"` where the category is one of
  Actions, Forms, Overlays, Navigation, Feedback, Data Display, Layout or
  Conversation; `id: "components-<file-name>"` so story URLs stay stable when
  a component moves between categories; `component: <Root>`;
  `satisfies Meta<...>`.
- Include: a `Playground`/default story with controls where the component has
  variants, and 1–4 stories showing real atlas-flavored use (archive entries,
  meeting notes, review queues, signals, tools, star catalog). Short, calm copy.
  No lorem ipsum, no marketing language, no emoji.
- Add `parameters.docs.description.component` with one or two sentences on
  when to use it in the atlas language.
- Use `lucide-react` icons. Buttons that are icon-only need `aria-label`.
- Overlay stories should render their trigger; do not force them open with
  fixed positioning hacks.
- Avoid writing sequential numbered markers ("01", "02", "03") in story
  copy; impeccable flags them.
