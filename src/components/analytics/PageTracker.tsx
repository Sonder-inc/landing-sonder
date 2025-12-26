"use client"

import { useEffect } from "react"
import { useScrollTracking, useTimeOnPage } from "@/hooks/useScrollTracking"
import { useLandingMode } from "@/lib/landing-mode"
import { analytics } from "@/lib/posthog"

export function PageTracker() {
  const { mode } = useLandingMode()

  // Track scroll depth
  useScrollTracking()

  // Track time on page
  useTimeOnPage()

  // Track initial page view with landing mode
  useEffect(() => {
    analytics.pageView(window.location.pathname, mode)
  }, [mode])

  // Track when user views in each mode for duration tracking
  useEffect(() => {
    const startTime = Date.now()

    return () => {
      const duration = Math.floor((Date.now() - startTime) / 1000)
      if (duration > 5) {
        // Only track if they spent more than 5 seconds
        analytics.modeView(mode, duration)
      }
    }
  }, [mode])

  return null
}
