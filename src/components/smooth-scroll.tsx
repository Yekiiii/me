"use client"

import Lenis from "lenis"
import { useEffect } from "react"

export function SmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) return

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    })

    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    const onAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const anchor = target?.closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!anchor) return
      const hash = anchor.getAttribute("href")
      if (!hash || hash === "#") return

      const el = document.querySelector(hash)
      if (!el) return
      event.preventDefault()
      lenis.scrollTo(el as HTMLElement, { offset: -72, duration: 1.4 })
    }

    document.addEventListener("click", onAnchorClick)

    return () => {
      document.removeEventListener("click", onAnchorClick)
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  return null
}
