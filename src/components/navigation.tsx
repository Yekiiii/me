"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { useEffect, useState } from "react"
import { cn } from "../lib/utils"

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

const sectionIds = links.map((link) => link.href.replace("#", ""))

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState(sectionIds[0])

  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    mass: 0.24,
  })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    if (!sections.length) {
      return
    }

    let rafId = 0

    const computeActiveSection = () => {
      const marker = 120
      let current = sections[0].id

      for (const section of sections) {
        const top = section.getBoundingClientRect().top
        if (top <= marker) {
          current = section.id
        } else {
          break
        }
      }

      setActiveSection(current)
      rafId = 0
    }

    const onScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(computeActiveSection)
      }
    }

    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "")
      if (hash && sectionIds.includes(hash)) {
        setActiveSection(hash)
      }
    }

    computeActiveSection()
    onHashChange()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    window.addEventListener("hashchange", onHashChange)

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId)
      }
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      window.removeEventListener("hashchange", onHashChange)
    }
  }, [])

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[70] h-[3px] bg-foreground/5">
        <motion.div
          className="h-full origin-left bg-gradient-to-r from-foreground/45 via-foreground/65 to-foreground/35"
          style={{ scaleX: smoothProgress }}
        />
      </div>

      <header className="pointer-events-none fixed inset-x-0 top-0 z-[60]">
        <div className="section-shell pt-4 md:pt-5">
          <motion.nav
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={cn(
              "pointer-events-auto mx-auto flex items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 md:px-5",
              scrolled
                ? "border-border bg-background/76 shadow-[0_14px_30px_-24px_rgba(74,57,35,0.38)] backdrop-blur-md"
                : "border-border/80 bg-background/58 backdrop-blur-sm",
            )}
          >
            <a href="#" className="font-display text-base font-semibold tracking-tight text-foreground">
              K<span className="text-foreground/60">N</span>
            </a>

            <ul className="hidden items-center gap-1 sm:flex">
              {links.map((link) => {
                const sectionId = link.href.replace("#", "")
                const isActive = activeSection === sectionId

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setActiveSection(sectionId)}
                      className={cn(
                        "relative rounded-full px-3.5 py-2 text-xs font-medium tracking-wide text-foreground/70 transition-colors md:text-sm",
                        isActive ? "text-foreground" : "hover:text-foreground",
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-pill"
                          transition={{ type: "spring", stiffness: 320, damping: 30 }}
                          className="absolute inset-0 rounded-full border border-border bg-foreground/8"
                        />
                      )}
                      <span className="relative z-10">{link.label}</span>
                    </a>
                  </li>
                )
              })}
            </ul>

            <a
              href="#contact"
              className="hidden rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background transition-all duration-300 hover:bg-foreground/90 md:inline-flex"
            >
              Let&apos;s Build
            </a>
          </motion.nav>
        </div>
      </header>
    </>
  )
}
