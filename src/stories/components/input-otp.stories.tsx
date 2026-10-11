import type { Meta, StoryObj } from "@storybook/react-vite"
import { REGEXP_ONLY_DIGITS } from "input-otp"
import { useState } from "react"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Label } from "@/components/ui/label"

const meta = {
  title: "Components/Forms/Input OTP",
  id: "components-input-otp",
  component: InputOTP,
  parameters: {
    docs: {
      description: {
        component:
          "Single-character slots for short verification codes. Digits are set in mono; the active slot takes the signal ring and caret.",
      },
    },
  },
  args: {
    maxLength: 6,
    pattern: REGEXP_ONLY_DIGITS,
    children: null,
  },
} satisfies Meta<typeof InputOTP>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <InputOTP
      maxLength={args.maxLength}
      pattern={args.pattern}
      disabled={args.disabled}
      aria-label="Verification code"
    >
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
}

// input-otp is controlled internally; seed values through state, not
// defaultValue, to avoid React's controlled/uncontrolled warning.
function SeededOTP({
  seed,
  children,
  ...props
}: {
  seed: string
  children: React.ReactNode
  maxLength: number
  pattern?: string
  id?: string
  "aria-label"?: string
}) {
  const [value, setValue] = useState(seed)
  return (
    <InputOTP {...props} value={value} onChange={setValue}>
      {children}
    </InputOTP>
  )
}

export const DeviceLink: Story = {
  render: () => (
    <div className="grid gap-3">
      <Label htmlFor="device-code">Pairing code</Label>
      <SeededOTP
        maxLength={6}
        pattern={REGEXP_ONLY_DIGITS}
        id="device-code"
        seed="4827"
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </SeededOTP>
      <p className="max-w-xs text-sm leading-6 text-muted-foreground">
        Shown on the observatory console. The code expires after ten minutes.
      </p>
    </div>
  ),
}

export const Invalid: Story = {
  render: () => (
    <div className="grid gap-3">
      <SeededOTP
        maxLength={4}
        pattern={REGEXP_ONLY_DIGITS}
        seed="1190"
        aria-label="Code"
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} aria-invalid />
          <InputOTPSlot index={1} aria-invalid />
          <InputOTPSlot index={2} aria-invalid />
          <InputOTPSlot index={3} aria-invalid />
        </InputOTPGroup>
      </SeededOTP>
      <p className="text-sm text-destructive">
        That code did not match. Request a new one.
      </p>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <InputOTP maxLength={4} disabled aria-label="Code">
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  ),
}
