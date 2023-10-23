import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex self-center text-base font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-center text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
        destructive:
          "bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",
        outline:
          "hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
        ghost: "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",
        welcome: "border border-black rounded-sm font-fundamento font-bold text-white bg-green-500 border-transparent px-3 py-1 hover:opacity-80 focus:outline-none focus:ring focus:ring-opacity-80",
        join: "border border-black dark:border-green-500 font-fundamento font-bold px-[4rem] text-green-500 px-20 py-1 hover:text-white hover:bg-green-500 hover:border-transparent hover:rounded-lg focus:outline-none focus:ring focus:ring-opacity-80",
        chart: "border border-transparent font-fundamento px-[2rem] font-bold bg-green-500 text-white px-20 py-1 hover:opacity-80 focus:outline-none focus:ring focus:ring-opacity-80",
        hiw: "border border-black  dark:border-green-500 font-fundamento font-bold px-[4rem] text-green-500 px-20 py-1 hover:text-white hover:bg-green-500 hover:border-transparent hover:rounded-lg focus:outline-none focus:ring focus:ring-opacity-80",
        rwrd: "border border-black font-fundamento font-bold px-[4rem] text-green-500 px-20 py-1 hover:text-white hover:bg-green-500 hover:border-transparent hover:rounded-lg focus:outline-none focus:ring focus:ring-opacity-80",
        logout: "border border-black rounded-sm font-fundamento font-bold text-white bg-red-500 border-transparent px-3 py-1 hover:opacity-80 focus:outline-none focus:ring focus:ring-opacity-80",
        popular: "border border-black rounded-sm font-fundamento font-bold text-white bg-green-500 border-transparent px-3 py-1 hover:opacity-80",
        download: "flex justify-center items-align gap-2 border border-black rounded-sm text-sm font-fundamento font-bold text-white bg-green-500 border-transparent px-2 py-2 hover:opacity-80",
        
      },
      size: {
        default: "h-10 px-8 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
