import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState, type ReactNode } from "react"

import { Button } from "@/components/ui/button"
import { Toaster, createToastManager } from "@/components/ui/toast"

type ToastManager = ReturnType<typeof createToastManager>

const meta = {
  title: "Components/Feedback/Toast",
  id: "components-toast",
  component: Toaster,
  parameters: {
    docs: {
      description: {
        component:
          "Brief, non-blocking confirmation of something that just happened. Mount `Toaster` once near the app root, then call `toast.add({ title, description, type })` from anywhere. Types `success`, `info`, `warning`, `error` and `loading` set the status icon. Each story below mounts its own manager so the docs page does not repeat toasts.",
      },
    },
  },
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

/** Gives each story an isolated manager. In an app, import `toast` instead. */
function ToastStage({
  children,
}: {
  children: (toast: ToastManager) => ReactNode
}) {
  const [toast] = useState(() => createToastManager())

  return <Toaster toastManager={toast}>{children(toast)}</Toaster>
}

export const Types: Story = {
  render: () => (
    <ToastStage>
      {(toast) => (
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            onClick={() =>
              toast.add({
                type: "success",
                title: "Entry archived",
                description: "Vega, observation log moved to the archive.",
              })
            }
          >
            Success
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.add({
                type: "info",
                title: "Transcript ready",
                description: "Weekly sync, 9 Oct is ready to summarize.",
              })
            }
          >
            Info
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.add({
                type: "warning",
                title: "Signal unsteady",
                description: "The north instrument dropped twice in an hour.",
              })
            }
          >
            Warning
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.add({
                type: "error",
                title: "Export failed",
                description: "The archive did not respond. Try again shortly.",
              })
            }
          >
            Error
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.add({ title: "Draft saved" })}
          >
            Plain
          </Button>
        </div>
      )}
    </ToastStage>
  ),
}

export const WithAction: Story = {
  render: () => (
    <ToastStage>
      {(toast) => (
        <Button
          variant="outline"
          onClick={() => {
            const id = toast.add({
              type: "success",
              title: "Note removed",
              description: "Removed from the review queue.",
              actionProps: {
                children: "Undo",
                onClick: () => {
                  toast.close(id)
                  toast.add({ type: "info", title: "Note restored" })
                },
              },
            })
          }}
        >
          Remove note
        </Button>
      )}
    </ToastStage>
  ),
}

export const Loading: Story = {
  render: () => (
    <ToastStage>
      {(toast) => (
        <Button
          variant="outline"
          onClick={() => {
            void toast.promise(
              new Promise<void>((resolve) => setTimeout(resolve, 1800)),
              {
                loading: { title: "Syncing catalog" },
                success: {
                  title: "Catalog synced",
                  description: "214 entries are up to date.",
                },
                error: { title: "Sync failed" },
              }
            )
          }}
        >
          Sync catalog
        </Button>
      )}
    </ToastStage>
  ),
}
