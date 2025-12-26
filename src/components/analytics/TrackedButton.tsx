"use client"

import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react"
import { useAnalytics } from "@/lib/posthog"

interface TrackedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  trackingName: string
  trackingLocation?: string
  trackingProps?: Record<string, unknown>
}

interface TrackedLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  trackingName: string
  trackingLocation?: string
  trackingProps?: Record<string, unknown>
  isExternal?: boolean
}

export const TrackedButton = forwardRef<HTMLButtonElement, TrackedButtonProps>(
  ({ trackingName, trackingLocation = "unknown", trackingProps, onClick, children, ...props }, ref) => {
    const { buttonClick, track } = useAnalytics()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      buttonClick(trackingName, trackingLocation)
      if (trackingProps) {
        track(`${trackingName}_click`, trackingProps)
      }
      onClick?.(e)
    }

    return (
      <button ref={ref} onClick={handleClick} {...props}>
        {children}
      </button>
    )
  }
)
TrackedButton.displayName = "TrackedButton"

export const TrackedLink = forwardRef<HTMLAnchorElement, TrackedLinkProps>(
  ({ trackingName, trackingLocation = "unknown", trackingProps, isExternal, onClick, children, href, ...props }, ref) => {
    const { buttonClick, externalLinkClick, track } = useAnalytics()

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (isExternal && href) {
        externalLinkClick(href, trackingName)
      } else {
        buttonClick(trackingName, trackingLocation)
      }
      if (trackingProps) {
        track(`${trackingName}_click`, trackingProps)
      }
      onClick?.(e)
    }

    return (
      <a ref={ref} href={href} onClick={handleClick} {...props}>
        {children}
      </a>
    )
  }
)
TrackedLink.displayName = "TrackedLink"

// CTA-specific tracked button with conversion intent
interface TrackedCTAProps extends TrackedButtonProps {
  ctaType: "primary" | "secondary" | "hero" | "footer" | "nav"
  destination: string
}

export const TrackedCTA = forwardRef<HTMLButtonElement, TrackedCTAProps>(
  ({ ctaType, destination, trackingName, trackingLocation, onClick, children, ...props }, ref) => {
    const { ctaClick, signupStart } = useAnalytics()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      ctaClick(ctaType, destination)
      if (destination.includes("signup") || destination.includes("register")) {
        signupStart(trackingLocation || ctaType)
      }
      onClick?.(e)
    }

    return (
      <button ref={ref} onClick={handleClick} {...props}>
        {children}
      </button>
    )
  }
)
TrackedCTA.displayName = "TrackedCTA"
