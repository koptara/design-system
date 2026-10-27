import { Plus, ChevronDown } from 'lucide-react'
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import { Tabs as TabsPrimitive } from "radix-ui"
import '../tabs-faq.css'
function Tabs({ className, orientation = "horizontal", ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return <TabsPrimitive.Root data-slot="tabs" data-orientation={orientation} orientation={orientation} className={cn("smmify-tabs", className)} {...props}/>
}
const tabsListVariants = cva("smmify-tabs-list", { variants: { variant: { default: "", line: "smmify-tabs-line" } }, defaultVariants: { variant: "default" } })
function TabsList({ className, variant = "default", size = "m", tone = "dark", ...props }: React.ComponentProps<typeof TabsPrimitive.List> & VariantProps<typeof tabsListVariants> & { size?: "s" | "m"; tone?: "dark" | "lime" }) {
  return <TabsPrimitive.List data-slot="tabs-list" data-variant={variant} data-size={size} data-tone={tone} className={cn(tabsListVariants({ variant }), className)} {...props}/>
}
function Slot({ trailing }: { trailing?: boolean }) {
  const Glyph = trailing ? ChevronDown : Plus
  return <span className="smmify-tab-icon" aria-hidden="true">
    <Glyph className="tab-icon-shadow" size={24} aria-hidden="true"/>
    <Glyph className="tab-icon-white" size={24} aria-hidden="true"/>
    <Glyph className="tab-icon-dark" size={24} aria-hidden="true"/>
  </span>
}
function TabsTrigger({ className, children, leading = false, trailing = false, previewState, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger> & { leading?: boolean; trailing?: boolean; previewState?: "default" | "hover" | "focus" | "disabled" }) {
  return <TabsPrimitive.Trigger data-slot="tabs-trigger" data-preview-state={previewState} className={cn("smmify-tabs-trigger", className)} {...props}>
    {leading && <Slot/>}{children}{trailing && <Slot trailing/>}
  </TabsPrimitive.Trigger>
}
function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return <TabsPrimitive.Content data-slot="tabs-content" className={cn("smmify-tabs-content", className)} {...props}/>
}
export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
