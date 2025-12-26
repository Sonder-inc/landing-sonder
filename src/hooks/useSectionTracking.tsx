"use client"

import { useEffect, useRef } from "react"
import { useInView, type InViewHookResponse } from "react-intersection-observer"
import { useAnalytics } from "@/lib/posthog"

interface UseSectionTrackingOptions {
  sectionName: string
  threshold?: number
  trackOnce?: boolean
}

export function useSectionTracking({ sectionName, threshold = 0.5, trackOnce = true }: UseSectionTrackingOptions): InViewHookResponse {
  const { sectionView } = useAnalytics()
  const hasTracked = useRef(false)

  const inViewResult = useInView({
    threshold,
    triggerOnce: trackOnce,
  })

  useEffect(() => {
    if (inViewResult.inView && (!trackOnce || !hasTracked.current)) {
      sectionView(sectionName)
      hasTracked.current = true
    }
  }, [inViewResult.inView, sectionName, sectionView, trackOnce])

  return inViewResult
}

// Component wrapper for easy section tracking
export function TrackedSection({
  name,
  children,
  className,
  threshold = 0.3,
}: {
  name: string
  children: React.ReactNode
  className?: string
  threshold?: number
}) {
  const { ref } = useSectionTracking({ sectionName: name, threshold })

  return (
    <div ref={ref} className={className} data-section={name}>
      {children}
    </div>
  )
}
