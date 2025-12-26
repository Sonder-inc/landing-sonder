"use client"

import posthog from "posthog-js"
import { PostHogProvider as PHProvider, usePostHog } from "posthog-js/react"
import { useEffect, useCallback } from "react"

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com"

// Types for analytics events
export type AnalyticsEvent = {
  name: string
  properties?: Record<string, unknown>
  landing_mode?: "execute" | "educate"
}

// Core tracking function - PostHog only
function trackEvent(event: AnalyticsEvent) {
  const { name, properties = {}, landing_mode } = event

  if (!POSTHOG_KEY || !posthog.__loaded) return

  posthog.capture(name, {
    ...properties,
    landing_mode,
  })
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!POSTHOG_KEY) {
      console.warn("PostHog key not configured")
      return
    }

    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      capture_pageview: true,
      capture_pageleave: true,
      autocapture: true,
      persistence: "localStorage+cookie",
      person_profiles: "identified_only",
    })
  }, [])

  if (!POSTHOG_KEY) {
    return <>{children}</>
  }

  return <PHProvider client={posthog}>{children}</PHProvider>
}

// Comprehensive analytics helper object
export const analytics = {
  // Track any custom event
  track: (name: string, properties?: Record<string, unknown>, landingMode?: "execute" | "educate") => {
    trackEvent({ name, properties, landing_mode: landingMode })
  },

  // Page and section views
  pageView: (page: string, landingMode?: "execute" | "educate") => {
    trackEvent({
      name: "page_view",
      properties: { page },
      landing_mode: landingMode,
    })
  },

  sectionView: (section: string, landingMode?: "execute" | "educate") => {
    trackEvent({
      name: "section_view",
      properties: { section },
      landing_mode: landingMode,
    })
  },

  // CTA and button clicks
  ctaClick: (ctaType: string, destination: string, landingMode?: "execute" | "educate") => {
    trackEvent({
      name: "cta_click",
      properties: { cta_type: ctaType, destination },
      landing_mode: landingMode,
    })
  },

  buttonClick: (buttonName: string, location: string, landingMode?: "execute" | "educate") => {
    trackEvent({
      name: "button_click",
      properties: { button_name: buttonName, location },
      landing_mode: landingMode,
    })
  },

  // Landing mode tracking
  modeSwitch: (fromMode: "execute" | "educate", toMode: "execute" | "educate") => {
    trackEvent({
      name: "landing_mode_switch",
      properties: { from_mode: fromMode, to_mode: toMode },
      landing_mode: toMode,
    })
  },

  modeView: (mode: "execute" | "educate", duration?: number) => {
    trackEvent({
      name: "landing_mode_view",
      properties: { mode, duration_seconds: duration },
      landing_mode: mode,
    })
  },

  // Conversion events
  signupStart: (source: string, landingMode?: "execute" | "educate") => {
    trackEvent({
      name: "signup_start",
      properties: { source },
      landing_mode: landingMode,
    })
  },

  signupComplete: (method: string, landingMode?: "execute" | "educate") => {
    trackEvent({
      name: "signup_complete",
      properties: { method },
      landing_mode: landingMode,
    })
  },

  waitlistJoin: (email: string, landingMode?: "execute" | "educate") => {
    trackEvent({
      name: "waitlist_join",
      properties: { email_domain: email.split("@")[1] }, // Only track domain for privacy
      landing_mode: landingMode,
    })
  },

  demoRequest: (source: string, landingMode?: "execute" | "educate") => {
    trackEvent({
      name: "demo_request",
      properties: { source },
      landing_mode: landingMode,
    })
  },

  // Engagement tracking
  scrollDepth: (depth: 25 | 50 | 75 | 100, landingMode?: "execute" | "educate") => {
    trackEvent({
      name: "scroll_depth",
      properties: { depth_percent: depth },
      landing_mode: landingMode,
    })
  },

  timeOnPage: (seconds: number, landingMode?: "execute" | "educate") => {
    trackEvent({
      name: "time_on_page",
      properties: { duration_seconds: seconds },
      landing_mode: landingMode,
    })
  },

  videoPlay: (videoId: string, landingMode?: "execute" | "educate") => {
    trackEvent({
      name: "video_play",
      properties: { video_id: videoId },
      landing_mode: landingMode,
    })
  },

  videoProgress: (videoId: string, percentWatched: number, landingMode?: "execute" | "educate") => {
    trackEvent({
      name: "video_progress",
      properties: { video_id: videoId, percent_watched: percentWatched },
      landing_mode: landingMode,
    })
  },

  // Feature interest
  featureClick: (feature: string, landingMode?: "execute" | "educate") => {
    trackEvent({
      name: "feature_click",
      properties: { feature },
      landing_mode: landingMode,
    })
  },

  pricingView: (plan?: string, landingMode?: "execute" | "educate") => {
    trackEvent({
      name: "pricing_view",
      properties: { plan },
      landing_mode: landingMode,
    })
  },

  pricingClick: (plan: string, landingMode?: "execute" | "educate") => {
    trackEvent({
      name: "pricing_click",
      properties: { plan },
      landing_mode: landingMode,
    })
  },

  // Docs and help
  docsView: (section: string, landingMode?: "execute" | "educate") => {
    trackEvent({
      name: "docs_view",
      properties: { section },
      landing_mode: landingMode,
    })
  },

  // External links
  externalLinkClick: (url: string, linkText: string, landingMode?: "execute" | "educate") => {
    trackEvent({
      name: "external_link_click",
      properties: { url, link_text: linkText },
      landing_mode: landingMode,
    })
  },

  // Error tracking
  error: (errorType: string, message: string, landingMode?: "execute" | "educate") => {
    trackEvent({
      name: "error",
      properties: { error_type: errorType, message },
      landing_mode: landingMode,
    })
  },
}

// React hook for analytics with landing mode context
export function useAnalytics() {
  const ph = usePostHog()

  // Get landing mode from localStorage (can be enhanced with context)
  const getLandingMode = useCallback((): "execute" | "educate" | undefined => {
    if (typeof window === "undefined") return undefined
    const stored = localStorage.getItem("sonder:landingMode")
    if (stored === "execute" || stored === "educate") return stored
    return "execute" // default
  }, [])

  return {
    // Wrap all analytics methods to auto-include landing mode
    track: (name: string, properties?: Record<string, unknown>) =>
      analytics.track(name, properties, getLandingMode()),

    pageView: (page: string) => analytics.pageView(page, getLandingMode()),
    sectionView: (section: string) => analytics.sectionView(section, getLandingMode()),
    ctaClick: (ctaType: string, destination: string) =>
      analytics.ctaClick(ctaType, destination, getLandingMode()),
    buttonClick: (buttonName: string, location: string) =>
      analytics.buttonClick(buttonName, location, getLandingMode()),
    modeSwitch: analytics.modeSwitch,
    modeView: analytics.modeView,
    signupStart: (source: string) => analytics.signupStart(source, getLandingMode()),
    signupComplete: (method: string) => analytics.signupComplete(method, getLandingMode()),
    waitlistJoin: (email: string) => analytics.waitlistJoin(email, getLandingMode()),
    demoRequest: (source: string) => analytics.demoRequest(source, getLandingMode()),
    scrollDepth: (depth: 25 | 50 | 75 | 100) => analytics.scrollDepth(depth, getLandingMode()),
    timeOnPage: (seconds: number) => analytics.timeOnPage(seconds, getLandingMode()),
    videoPlay: (videoId: string) => analytics.videoPlay(videoId, getLandingMode()),
    videoProgress: (videoId: string, percent: number) =>
      analytics.videoProgress(videoId, percent, getLandingMode()),
    featureClick: (feature: string) => analytics.featureClick(feature, getLandingMode()),
    pricingView: (plan?: string) => analytics.pricingView(plan, getLandingMode()),
    pricingClick: (plan: string) => analytics.pricingClick(plan, getLandingMode()),
    docsView: (section: string) => analytics.docsView(section, getLandingMode()),
    externalLinkClick: (url: string, linkText: string) =>
      analytics.externalLinkClick(url, linkText, getLandingMode()),
    error: (errorType: string, message: string) =>
      analytics.error(errorType, message, getLandingMode()),

    // PostHog-specific features
    isReady: ph?.__loaded ?? false,
    identify: (userId: string, traits?: Record<string, unknown>) => {
      if (ph) ph.identify(userId, traits)
    },
  }
}
