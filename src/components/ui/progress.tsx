"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "~/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    currentStep: number
    totalSteps: number
  }
>(({ className, currentStep, totalSteps, ...props }, ref) => (
  <div 
    className={cn("grid gap-1 w-full", className)}
    style={{ 
      gridTemplateColumns: `repeat(${totalSteps}, minmax(0, 1fr))`,
      transition: "grid-template-columns 0.3s ease-out"
    }}
  >
    {Array.from({ length: totalSteps }).map((_, index) => (
      <div
        key={index}
        className={cn(
          "h-2 transition-all duration-300 ease-out",
          index < currentStep ? "bg-purple-500" : "bg-neutral-200"
        )}
      />
    ))}
  </div>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
