---
name: Hoshikuzu UI
description: A quiet archival star atlas, packaged as a shadcn (Base UI) component kit.
colors:
  deep-space: "#02040a"
  ink-night: "#05070d"
  observatory-panel: "#101827"
  starlight: "#f8fafc"
  starlight-muted: "#aeb8c7"
  starlight-faint: "#6f7b8d"
  hairline: "rgba(255,255,255,0.14)"
  hairline-strong: "rgba(170,215,220,0.34)"
  pale-cyan: "#aad7dc"
  soft-amber: "#f5f0dc"
  archive-background: "#f7f8f3"
  archive-paper: "#fffffc"
  archive-panel: "#edf0ea"
  archive-ink: "#172033"
  archive-muted: "#5e6a77"
  archive-signal: "#477c86"
  success: "#7bd7ad"
  warning: "#f5d28a"
  danger: "#f08a8a"
typography:
  display:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic UI, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: "0"
  headline:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic UI, Segoe UI, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: "0"
  title:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic UI, Segoe UI, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.08em"
  body:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic UI, Segoe UI, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
  lead:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic UI, Segoe UI, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
  control-label:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic UI, Segoe UI, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.14em"
  label:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic UI, Segoe UI, system-ui, sans-serif"
    fontSize: "0.625rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.16em"
  mono:
    fontFamily: "SFMono-Regular, Cascadia Code, Consolas, Noto Sans Mono CJK JP, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0"
rounded:
  xs: "1px"
  sm: "2px"
  xl: "4px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
components:
  button-primary:
    backgroundColor: "{colors.soft-amber}"
    textColor: "{colors.deep-space}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0 12px"
    height: "36px"
  panel:
    backgroundColor: "{colors.ink-night}"
    textColor: "{colors.starlight}"
    rounded: "{rounded.sm}"
    padding: "24px"
  star-panel:
    backgroundColor: "{colors.ink-night}"
    textColor: "{colors.starlight}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
  input:
    backgroundColor: "transparent"
    textColor: "{colors.starlight}"
    rounded: "{rounded.sm}"
    padding: "0 12px"
    height: "36px"
---

# Design System: Hoshikuzu UI

## 1. Overview

**Creative North Star: "The Quiet Archival Star Atlas"**

Hoshikuzu UI packages the Hoshikuzu visual language as a reusable shadcn kit.
Interfaces built with it should feel like a private astronomical index:
precise, dimly lit and intentional. Each control is an instrument filed into
the same collection; each panel annotates something on the sky.

The language comes from three projects. **hoshikuzu** is the source:
deep-space canvas, warm starlight text, tracked index labels, hairline rules,
2px corners. **note-taker** adapted it into a working console and contributed
instrument patterns and the hard-surface rule. **review-pilot** adapted it to a
mobile work queue and contributed semantic status tints, measurements and
navigation.

**Key characteristics:**

- Deep-space canvas with warm off-white text; a paper "archive sheet" mode for
  bright rooms.
- Small uppercase metadata labels with generous tracking. Body copy stays calm
  and normal case.
- Thin rules, tick marks and pointer lines used as annotation, not decoration.
- Flat surfaces at rest. Elevation only for overlays and active objects.
- Single-stage ease-out motion. No bounce, no choreography.

## 2. Colors

Blue-black neutrals, warm starlight text, and two rare lights borrowed from
the stars: pale cyan and soft amber.

### Roles

- **Soft Amber Lamp** (`--primary`, `#f5f0dc`): the one decisive action on a
  surface. In archive mode the lamp becomes ink (`#172033`).
- **Pale Cyan Signal** (`--signal`, `#aad7dc`; archive `#477c86`): focus,
  selection, readiness, the active marker. Also `--ring`.
- **Signal wash** (`--accent`, 10% cyan): hovered menu items, selected rows.
  It is a tint, never a solid fill.
- **Deep Space / Ink Night / Observatory Panel**: canvas, panels, secondary
  fills.
- **Starlight / Muted / Faint**: primary text, body text, metadata.
- **Hairline / Strong Hairline**: rules and borders; strong for hover and
  selection.
- **Status** (`success`, `warning`, `info`, `destructive`): each has a text
  color, a `-surface` tint and a `-border`. Use them for real operational
  state only.

### Named Rules

**The Stars Own The Light Rule.** No page-wide gradients, decorative halos or
nebula images. Light comes from stars, focus states and functional
annotations.

**The Ten Percent Accent Rule.** Cyan and amber together stay under a tenth
of any screen. If an accent is visible before the content is understood, it is
too loud.

**The Token Rule.** Components never hard-code colors. Both modes are the same
semantic tokens under `data-atlas-mode`.

## 3. Typography

System sans with Japanese fallbacks (Inter when installed, then Noto Sans JP,
Hiragino, Yu Gothic, Segoe UI). Mono for times, paths, IDs and readouts.

### Hierarchy

- **Display** (300, `clamp(2rem, 4vw, 3rem)`, 1.05): page headers only.
- **Headline** (300, 1.125rem): dialog, sheet and drawer titles.
- **Title** (600, 0.875rem, tracking 0.08em): cards and compact panels.
- **Lead** (400, 0.9375rem, 1.6): the description under a page title.
- **Body** (400, 0.875rem, 1.6): descriptions. Keep under 72ch.
- **Control label** (600, 0.6875rem, tracking 0.14em, uppercase): form
  labels, tab triggers, edge links.
- **Index label** (600, 0.625rem, tracking 0.16em, uppercase): metadata,
  buttons, badges, tab triggers, table heads, form labels.
- **Mono** (400, 0.75rem): times, versions, paths, numeric readouts.

Typography classes use arbitrary values (`text-[0.6875rem]`,
`tracking-[0.16em]`) rather than custom theme names, so `cn()` (tailwind-merge
semantics) merges them correctly in any consumer project.

### Named Rules

**The Index Voice Rule.** Labels may be uppercase and tracked; body copy must
remain calm and readable. Uppercase never runs past a short phrase, and
tracking is never applied to sentences.

**The No Hero Inside Panels Rule.** Display type belongs to the page. Cards,
dialogs and controls stay compact.

## 4. Elevation

Tonal layering and hairlines carry depth. Surfaces are flat at rest.

### Shadow Vocabulary

- **Control** (`shadow-control`, `0 6px 12px`): small floating controls and
  the primary button on hover.
- **Overlay** (`shadow-overlay`, `0 10px 14px`): menus, popovers, selects,
  dialogs, toasts.
- **Panel** (`shadow-panel`, `0 12px 15px -4px`): the star panel over the sky.

### Named Rules

**The Flat Until Focused Rule.** Static cards and rows never float. Elevation
appears when something is opened, selected or focused.

**The Hard Surface Rule.** A hairline border pairs with a short, tight shadow,
never a wide blur. (Hoshikuzu's original 70px panel shadow was tightened here,
following note-taker.)

**The No Glass Default Rule.** Backdrop blur is reserved for the star panel
over a moving starfield (`translucent`). Modal backdrops are a flat scrim.

## 5. Components

### Buttons

- **Shape:** 2px corners; heights 28/32/36/40/48px.
- **Label:** index voice, `text-xs` tracked uppercase.
- **Primary:** amber lamp fill; hover brightens and lifts with the control
  shadow.
- **Outline / Secondary / Ghost:** hairline or transparent; hover brightens
  the hairline and text.
- **Destructive:** quiet tint with a destructive hairline, not a red slab.

### Chips and badges

Catalog tags, not SaaS pills: tinted surface, matching hairline, tracked label.
`shape="pill"` exists for counts and filters (review-pilot chips).

### Cards and panels

2px corners, hairline border, `bg-card/80`, no shadow. 24px internal spacing
(16px for `size="sm"`). `interactive` brightens the hairline on hover.

### Inputs and fields

Low-opacity fill, hairline border that brightens on hover; focus moves the
border to the signal color with a soft 2px ring. Labels use the index voice.
Errors color the border; the surrounding UI stays calm.

### Overlays

Popover surface, hairline, overlay shadow, 2px corners. Highlighted items take
the signal wash; group labels use faint index labels. Entrance is a fade with a
1.5% scale, 150–240ms ease-out-expo.

### Navigation

Text links in the index voice with a drawn-in hairline underline. Rails and
bottom navigation mark the active item with a one-pixel signal line, never a
thick side stripe or a filled slab.

### Atlas components

- **Star Panel:** the signature mapped-object panel. Catalog label, tracked
  title, two lines of description, one action, optional connector.
- **Measurement:** light numerals over a tracked label, laid on a hairline grid.
- **Status Dot / Indicator:** small points of light; `live` adds a slow halo.
- **Data List:** label, mono value, status aside, hairline rows.
- **Timeline:** mono time column with an active line.
- **Section Rule:** label, hairline to the edge, trailing metadata.
- **Atlas Mode:** provider, toggle and pre-hydration script.
- **Starfield:** star dots at night, graticule on the archive sheet.

## 6. Do's and Don'ts

### Do

- **Do** make UI read like labels, index marks and instruments attached to an
  atlas.
- **Do** keep cyan and amber rare and meaningful.
- **Do** use hairlines, compact metadata and careful alignment for presence.
- **Do** keep motion single-stage, short and physically plausible.
- **Do** verify both night and archive modes for every change.

### Don't

- **Don't** build a generic SaaS page: oversized hero metrics, repeated feature
  cards, conversion copy.
- **Don't** drift into a neon sci-fi HUD, cyberpunk panel or game menu.
- **Don't** use glassmorphism, bokeh, gradient washes or decorative glow.
- **Don't** pair a hairline border with a wide diffuse shadow.
- **Don't** mark selection with thick side stripes; use the 1px signal marker.
- **Don't** let the UI compete with the content it annotates.
