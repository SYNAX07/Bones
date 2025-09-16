"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface AnimatedCardProps extends React.ComponentProps<typeof Card> {
  hoverScale?: boolean
}

export const AnimatedCard = forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ className, hoverScale = true, children, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          "transition-all duration-300 ease-out",
          hoverScale && "hover:scale-105 hover:-translate-y-2",
          "hover:shadow-xl",
          "group cursor-pointer",
          className,
        )}
        {...props}
      >
        {children}
      </Card>
    )
  },
)

AnimatedCard.displayName = "AnimatedCard"
