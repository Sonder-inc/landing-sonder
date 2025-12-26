"use client"

import { useEffect, useRef } from "react"
import { useAnalytics } from "@/lib/posthog"

export function useScrollTracking() {
  const { scrollDepth } = useAnalytics()
  const trackedDepths = useRef<Set<number>>(new Set())

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = Math.round((scrollTop / docHeight) * 100)

      const depths = [25, 50, 75, 100] as const
      for (const depth of depths) {
        if (scrollPercent >= depth && !trackedDepths.current.has(depth)) {
          trackedDepths.current.add(depth)
          scrollDepth(depth)
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrollDepth])

  // Reset tracked depths (useful for SPAs when navigating)
  const reset = () => {
    trackedDepths.current.clear()
  }

  return { reset }
}

export function useTimeOnPage() {
  const { timeOnPage } = useAnalytics()
  const startTime = useRef<number>(Date.now())
  const trackedIntervals = useRef<Set<number>>(new Set())

  useEffect(() => {
    startTime.current = Date.now()

    // Track at specific intervals: 30s, 60s, 120s, 300s (5min)
    const intervals = [30, 60, 120, 300]

    const checkTime = () => {
      const elapsed = Math.floor((Date.now() - startTime.current) / 1000)
      for (const interval of intervals) {
        if (elapsed >= interval && !trackedIntervals.current.has(interval)) {
          trackedIntervals.current.add(interval)
          timeOnPage(interval)
        }
      }
    }

    const timer = setInterval(checkTime, 5000)

    // Also track on page leave
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        const elapsed = Math.floor((Date.now() - startTime.current) / 1000)
        timeOnPage(elapsed)
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      clearInterval(timer)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [timeOnPage])
}
