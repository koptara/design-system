import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import { Slot } from "radix-ui"

const buttonVariants = cva(
  "smmify-button group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-full border-0 text-base font-semibold whitespace-nowrap transition-colors outline-none select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  { variants: {
      variant: { default: "", primary: "", secondary: "", ghost: "", outline: "border border-border", destructive: "", danger: "", dark: "", link: "underline-offset-4 hover:underline" },
      tone: { dark: "", green: "" },
      size: {
        s: "h-[40px] px-[16px]", sm: "h-[40px] px-[16px]", xs: "h-[40px] px-[16px]",
        m: "h-[48px] px-[20px]", md: "h-[48px] px-[20px]", default: "h-[48px] px-[20px]",
        l: "h-[64px] px-[28px]", lg: "h-[64px] px-[28px]",
        "icon-s": "size-[40px] p-0", "icon-sm": "size-[40px] p-0", "icon-xs": "size-[40px] p-0",
        "icon-m": "size-[48px] p-0", icon: "size-[48px] p-0",
        "icon-l": "size-[64px] p-0", "icon-lg": "size-[64px] p-0",
      },
    }, defaultVariants: { variant: "default", tone: "green", size: "default" },
  }
)

export type ButtonProps = React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
  asChild?: boolean
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  /** Fixed hover presentation for the component catalog. Native hover works without this. */
  previewState?: "default" | "hover"
}
export type ButtonVariant = NonNullable<VariantProps<typeof buttonVariants>["variant"]>
export type ButtonSize = NonNullable<VariantProps<typeof buttonVariants>["size"]>
function Button({ className, variant = "default", tone = "green", size = "default", asChild = false, leadingIcon, trailingIcon, previewState, children, ...props }: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button"
  return <Comp data-slot="button" data-variant={variant} data-tone={tone} data-size={size} data-preview-state={previewState}
    className={cn(buttonVariants({ variant, tone, size, className }))} {...props}>
    {asChild ? children : <>{leadingIcon}{children}{trailingIcon}</>}
  </Comp>
}
export { Button, buttonVariants }
