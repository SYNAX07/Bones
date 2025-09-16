"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 transition-all duration-300",
        isScrolled && "shadow-lg",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="text-2xl font-bold text-primary transition-all group-hover:scale-105">Bones</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-all duration-200 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/products"
              className="text-foreground hover:text-primary transition-all duration-200 relative group"
            >
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-all duration-200 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/privacy"
              className="text-foreground hover:text-primary transition-all duration-200 relative group"
            >
              Privacy Policy
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:bg-primary/10 transition-all"
            >
              <div className="relative w-6 h-6">
                <Menu className={cn("h-6 w-6 absolute transition-all", isOpen && "rotate-90 opacity-0")} />
                <X className={cn("h-6 w-6 absolute transition-all", !isOpen && "-rotate-90 opacity-0")} />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-out",
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
            <Link
              href="/"
              className="block px-3 py-2 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block px-3 py-2 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              className="block px-3 py-2 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
