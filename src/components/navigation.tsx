"use client"

import { useState, useEffect } from "react"
import { cn } from "../lib/utils"

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent",
      )}
    >
      <div className="px-6 md:px-12 lg:px-24">
        <nav className="max-w-5xl mx-auto flex items-center justify-between py-6">
          <a href="#" className="text-sm font-mono hover:text-gold-muted transition-colors">
            <span className="text-gold">&lt;</span><span className="text-foreground">/</span><span className="text-gold">&gt;</span>
          </a>

          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
