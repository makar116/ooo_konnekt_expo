"use client"

import * as React from "react"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

interface DialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
}

const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  ({ open, onOpenChange, children }, ref) => {
    React.useEffect(() => {
      if (open) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = ""
      }
      return () => {
        document.body.style.overflow = ""
      }
    }, [open])

    if (!open) return null

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        ref={ref}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => onOpenChange(false)}
        />
        {/* Dialog Content */}
        <div className="relative z-50 w-full max-w-lg mx-4">
          {children}
        </div>
      </div>
    )
  }
)
Dialog.displayName = "Dialog"

const DialogContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { onClose?: () => void }
>(({ className, children, onClose, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative bg-background rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-800 p-6",
        className
      )}
      {...props}
    >
      {onClose && (
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      )}
      {children}
    </div>
  )
})
DialogContent.displayName = "DialogContent"

export { Dialog, DialogContent }

