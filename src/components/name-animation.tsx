"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { cn } from "@/lib/utils"

const ORIGINAL = "Kaartikey"
const REVERSED = "yekitraaK"
const ALIAS = "Yeki"

type AnimationPhase = "original" | "reversing" | "reversed" | "slicing" | "alias" | "expanding" | "unreversing"

export function NameAnimation() {
  const [phase, setPhase] = useState<AnimationPhase>("original")
  const [displayChars, setDisplayChars] = useState<string[]>(ORIGINAL.split(""))
  const [visibleCount, setVisibleCount] = useState(ORIGINAL.length)
  const abortRef = useRef<AbortController | null>(null)

  const delay = useCallback((ms: number, signal?: AbortSignal) => {
    return new Promise<void>((resolve, reject) => {
      const timeout = setTimeout(resolve, ms)
      signal?.addEventListener("abort", () => {
        clearTimeout(timeout)
        reject(new Error("aborted"))
      })
    })
  }, [])

  const runAnimation = useCallback(async (signal: AbortSignal) => {
    try {
      // Phase 1: Show original "Kaartikey" in gold
      setPhase("original")
      setDisplayChars(ORIGINAL.split(""))
      setVisibleCount(ORIGINAL.length)
      await delay(2000, signal)

      // Phase 2: Reverse letter by letter to "yekitraaK" (white)
      setPhase("reversing")
      for (let i = 0; i < ORIGINAL.length; i++) {
        await delay(80, signal)
        setDisplayChars((prev) => {
          const newChars = [...prev]
          newChars[i] = REVERSED[i]
          return newChars
        })
      }

      await delay(800, signal)
      setPhase("reversed")

      // Phase 3: Slice - hide last 5 characters one by one
      await delay(600, signal)
      setPhase("slicing")
      for (let i = ORIGINAL.length; i >= 4; i--) {
        await delay(60, signal)
        setVisibleCount(i)
      }

      await delay(400, signal)

      // Phase 4: Show alias "Yeki" in gold
      setDisplayChars(ALIAS.split(""))
      setVisibleCount(ALIAS.length)
      setPhase("alias")

      await delay(2500, signal)

      // Phase 5: Expand back to "yekitraaK"
      setPhase("expanding")
      const expandSteps = ["Y", "Ye", "Yek", "Yeki", "yekit", "yekitr", "yekitra", "yekitraa", "yekitraaK"]
      for (const step of expandSteps) {
        await delay(100, signal)
        setDisplayChars(step.split(""))
        setVisibleCount(step.length)
      }

      await delay(600, signal)

      // Phase 6: Unreverse back to "Kaartikey"
      setPhase("unreversing")
      for (let i = 0; i < ORIGINAL.length; i++) {
        await delay(80, signal)
        setDisplayChars((prev) => {
          const newChars = [...prev]
          newChars[i] = ORIGINAL[i]
          return newChars
        })
      }

      await delay(400, signal)
    } catch {
      // Animation was aborted, exit gracefully
    }
  }, [delay])

  useEffect(() => {
    let isCancelled = false

    const loop = async () => {
      while (!isCancelled) {
        abortRef.current = new AbortController()
        await runAnimation(abortRef.current.signal)
        if (!isCancelled) {
          await delay(500, abortRef.current.signal).catch(() => {})
        }
      }
    }

    loop()

    return () => {
      isCancelled = true
      abortRef.current?.abort()
    }
  }, [delay, runAnimation])

  // Determine if current phase should show gold
  const isGold = phase === "original" || phase === "alias"

  return (
    <div className="relative">
      {/* Main name display */}
      <div className="relative overflow-hidden">
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-light tracking-tight">
          <span className="inline-flex">
            {displayChars.slice(0, visibleCount).map((char, i) => (
              <span
                key={i}
                className={cn(
                  "inline-block transition-colors duration-300",
                  isGold ? "text-gold" : "text-foreground",
                )}
              >
                {char}
              </span>
            ))}
          </span>
        </h1>

        {/* Slice line visualization */}
        {phase === "slicing" && (
          <div
            className="absolute top-0 h-full w-[2px] bg-gold animate-pulse"
            style={{ left: "44%" }}
          />
        )}
      </div>

      {/* Transformation indicator */}
      <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground font-mono">
        <span className={cn("transition-opacity duration-300", phase === "original" ? "opacity-100 text-gold" : "opacity-40")}>
          Kaartikey
        </span>
        <span className="text-gold/40">→</span>
        <span
          className={cn(
            "transition-opacity duration-300",
            phase === "reversed" || phase === "reversing" ? "opacity-100 text-foreground" : "opacity-40",
          )}
        >
          reverse
        </span>
        <span className="text-gold/40">→</span>
        <span
          className={cn(
            "transition-opacity duration-300",
            phase === "slicing" ? "opacity-100 text-foreground" : "opacity-40",
          )}
        >
          slice
        </span>
        <span className="text-gold/40">→</span>
        <span
          className={cn("transition-opacity duration-300", phase === "alias" ? "opacity-100 text-gold" : "opacity-40")}
        >
          Yeki
        </span>
      </div>
    </div>
  )
}
