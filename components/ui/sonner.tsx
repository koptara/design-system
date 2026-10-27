import { type CSSProperties } from "react"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import { X, type LucideIcon, Loader2Icon } from "lucide-react"
import { feedbackIcons, feedbackColors } from "@design-system/lib/feedback-assets"
import "../feedback.css"
const icon = (Glyph: LucideIcon, color?: string) => <Glyph size={24} color={color} aria-hidden="true"/>
const Toaster = ({ style, toastOptions, icons, className, ...props }: ToasterProps) => <Sonner
  closeButton
  className={`smmify-toaster ${className ?? ""}`}
  icons={{ success: icon(feedbackIcons.success, feedbackColors.success), info: icon(feedbackIcons.info, feedbackColors.info), warning: icon(feedbackIcons.warning, feedbackColors.warning), error: icon(feedbackIcons.danger, feedbackColors.danger), close: icon(X), loading: <Loader2Icon className="size-6 animate-spin"/>, ...icons }}
  style={{ "--width": "min(592px, calc(100vw - 32px))", ...style } as CSSProperties}
  toastOptions={{ ...toastOptions, closeButtonAriaLabel: "Dismiss toast", classNames: { ...toastOptions?.classNames, toast: `smmify-toast ${toastOptions?.classNames?.toast ?? ""}` } }}
  {...props}
/>
export { Toaster }
