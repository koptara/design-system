import type { ReactNode } from "react"
import { cn } from "cn"
import { Alert, AlertTitle, AlertDescription } from "./alert"
import { Button } from "./button"
import { feedbackIcons, feedbackColors, type FeedbackTone } from "@design-system/lib/feedback-assets"
import { X } from "lucide-react"
import "../feedback.css"
export function Banner({ title, message, actions, onClose, tone = "neutral", layout = "inline", className }: {
  title: ReactNode; message?: ReactNode; actions?: ReactNode; onClose?: () => void
  tone?: FeedbackTone; layout?: "inline" | "stacked"; className?: string
}) {
  const Glyph = feedbackIcons[tone]
  return <Alert role={tone === "danger" || tone === "warning" ? "alert" : "status"} className={cn("smmify-banner", className)} data-tone={tone} data-layout={layout}>
    <Glyph size={24} color={feedbackColors[tone]} aria-hidden="true" className="smmify-feedback-icon"/>
    <div className="smmify-banner-body">
      <AlertTitle>{title}</AlertTitle>
      {message && <AlertDescription>{message}</AlertDescription>}
      {layout === "stacked" && actions && <div className="smmify-banner-actions">{actions}</div>}
    </div>
    {layout === "inline" && actions && <div className="smmify-banner-actions">{actions}</div>}
    {onClose && <Button variant="ghost" tone="dark" size="icon-s" className="smmify-feedback-close" onClick={onClose} aria-label="Dismiss banner"><X size={24} aria-hidden="true"/></Button>}
  </Alert>
}
