"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import { forwardRef, useState } from "react"

interface EnhancedButtonProps extends React.ComponentProps<typeof Button> {
  loading?: boolean
  loadingText?: string
}

export const EnhancedButton = forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({ children, loading, loadingText, className, onClick, ...props }, ref) => {
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
      if (loading) return

      setIsClicked(true)
      setTimeout(() => setIsClicked(false), 200)

      if (onClick) {
        await onClick(e)
      }
    }

    return (
      <Button
        ref={ref}
        className={cn(
          "transition-all duration-200 transform",
          isClicked && "scale-95",
          "hover:scale-105 active:scale-95",
          "shadow-lg hover:shadow-xl",
          className,
        )}
        onClick={handleClick}
        disabled={loading}
        {...props}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {loading ? loadingText || "Loading..." : children}
      </Button>
    )
  },
)

EnhancedButton.displayName = "EnhancedButton"
