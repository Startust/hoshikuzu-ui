import type { Meta, StoryObj } from "@storybook/react-vite"

import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const meta = {
  title: "Components/Table",
  component: Table,
  parameters: {
    docs: {
      description: {
        component:
          "Catalog tables: index-style column heads, hairline rows and a faint signal wash on hover or selection. Use for dense records such as star catalogs, review queues and run logs; keep numeric readouts in mono.",
      },
    },
  },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const stars = [
  {
    name: "Vega",
    designation: "α Lyr",
    ra: "18h 36m 56s",
    dec: "+38° 47′ 01″",
    mag: "0.03",
    type: "A0Va",
  },
  {
    name: "Altair",
    designation: "α Aql",
    ra: "19h 50m 47s",
    dec: "+08° 52′ 06″",
    mag: "0.76",
    type: "A7V",
  },
  {
    name: "Deneb",
    designation: "α Cyg",
    ra: "20h 41m 26s",
    dec: "+45° 16′ 49″",
    mag: "1.25",
    type: "A2Ia",
  },
  {
    name: "Albireo",
    designation: "β Cyg",
    ra: "19h 30m 43s",
    dec: "+27° 57′ 35″",
    mag: "3.05",
    type: "K3II",
  },
  {
    name: "Sadr",
    designation: "γ Cyg",
    ra: "20h 22m 14s",
    dec: "+40° 15′ 24″",
    mag: "2.23",
    type: "F8Iab",
  },
]

export const StarCatalog: Story = {
  render: () => (
    <Table className="max-w-3xl">
      <TableCaption>Summer Triangle and neighbours, epoch J2000.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Designation</TableHead>
          <TableHead>Right ascension</TableHead>
          <TableHead>Declination</TableHead>
          <TableHead className="text-right">Mag</TableHead>
          <TableHead>Spectral</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {stars.map((star) => (
          <TableRow
            key={star.name}
            data-state={star.name === "Deneb" ? "selected" : undefined}
          >
            <TableCell className="font-medium text-foreground">
              {star.name}
            </TableCell>
            <TableCell>{star.designation}</TableCell>
            <TableCell className="font-mono text-xs">{star.ra}</TableCell>
            <TableCell className="font-mono text-xs">{star.dec}</TableCell>
            <TableCell className="text-right font-mono text-xs text-foreground">
              {star.mag}
            </TableCell>
            <TableCell className="font-mono text-xs">{star.type}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

const queue = [
  {
    id: "PR-482",
    title: "Tighten focus ring on segmented tabs",
    author: "mira",
    age: "2h",
    state: "ready" as const,
  },
  {
    id: "PR-479",
    title: "Archive mode for the measurement panel",
    author: "ren",
    age: "6h",
    state: "changes" as const,
  },
  {
    id: "PR-476",
    title: "Drop backdrop blur from dialog overlay",
    author: "sora",
    age: "1d",
    state: "review" as const,
  },
  {
    id: "PR-471",
    title: "Migrate tooltip to Base UI popup",
    author: "kai",
    age: "3d",
    state: "blocked" as const,
  },
]

const stateBadge = {
  ready: <Badge variant="success">Ready</Badge>,
  changes: <Badge variant="warning">Changes</Badge>,
  review: <Badge variant="signal">In review</Badge>,
  blocked: <Badge variant="destructive">Blocked</Badge>,
}

export const ReviewQueue: Story = {
  render: () => (
    <Table className="max-w-3xl">
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Change</TableHead>
          <TableHead>Author</TableHead>
          <TableHead className="text-right">Waiting</TableHead>
          <TableHead>State</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {queue.map((row) => (
          <TableRow key={row.id}>
            <TableCell className="font-mono text-xs">{row.id}</TableCell>
            <TableCell className="text-foreground">{row.title}</TableCell>
            <TableCell>{row.author}</TableCell>
            <TableCell className="text-right font-mono text-xs">
              {row.age}
            </TableCell>
            <TableCell>{stateBadge[row.state]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <Table className="max-w-xl">
      <TableHeader>
        <TableRow>
          <TableHead>Session</TableHead>
          <TableHead>Recorded</TableHead>
          <TableHead className="text-right">Duration</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="text-foreground">Design sync</TableCell>
          <TableCell className="font-mono text-xs">2026-10-06 09:30</TableCell>
          <TableCell className="text-right font-mono text-xs">
            00:42:18
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-foreground">Catalog review</TableCell>
          <TableCell className="font-mono text-xs">2026-10-07 14:00</TableCell>
          <TableCell className="text-right font-mono text-xs">
            01:05:51
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-foreground">Observing plan</TableCell>
          <TableCell className="font-mono text-xs">2026-10-09 21:15</TableCell>
          <TableCell className="text-right font-mono text-xs">
            00:27:04
          </TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell
            colSpan={2}
            className="text-2xs font-semibold tracking-[0.16em] uppercase"
          >
            Total
          </TableCell>
          <TableCell className="text-right font-mono text-xs">
            02:15:13
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}
