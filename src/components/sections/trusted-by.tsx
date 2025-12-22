"use client";

import { useEffect, useRef } from "react";

// Company logos as SVG components for clean rendering
const logos = [
  {
    name: "Eightfold.ai",
    svg: (
      <svg viewBox="0 0 140 24" fill="currentColor" className="h-5 w-auto">
        <path d="M0 12a6 6 0 1 1 12 0 6 6 0 0 1-12 0zm6-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
        <path d="M16 6h12v2H18v3h8v2h-8v3h10v2H16V6z" />
        <path d="M32 6h2v12h-2V6zm6 0h2v12h-2V6z" />
        <path d="M44 6h2v5h6V6h2v12h-2v-5h-6v5h-2V6z" />
        <path d="M58 6h10v2h-4v10h-2V8h-4V6z" />
        <path d="M72 6h10v2H74v3h6v2h-6v5h-2V6z" />
        <path d="M86 6h2v5h6V6h2v12h-2v-5h-6v5h-2V6z" />
        <path d="M100 6h2v10h8v2h-10V6z" />
        <path d="M114 6h6a4 4 0 0 1 0 8h-4v4h-2V6zm2 6h4a2 2 0 0 0 0-4h-4v4z" />
        <text x="126" y="16" fontSize="12" fontWeight="500">.ai</text>
      </svg>
    ),
  },
  {
    name: "Parafin",
    svg: (
      <svg viewBox="0 0 120 24" fill="currentColor" className="h-5 w-auto">
        <g>
          <circle cx="8" cy="8" r="2" />
          <circle cx="8" cy="16" r="2" />
          <circle cx="16" cy="12" r="2" />
          <circle cx="4" cy="12" r="1.5" />
          <circle cx="12" cy="8" r="1.5" />
          <circle cx="12" cy="16" r="1.5" />
        </g>
        <text x="26" y="17" fontSize="16" fontWeight="600" fontFamily="system-ui, sans-serif">Parafin</text>
      </svg>
    ),
  },
  {
    name: "Framer",
    svg: (
      <svg viewBox="0 0 100 24" fill="currentColor" className="h-5 w-auto">
        <path d="M0 0h18v8H9v8H0V0zm0 16h9l9 8H0v-8z" />
        <text x="24" y="17" fontSize="16" fontWeight="600" fontFamily="system-ui, sans-serif">Framer</text>
      </svg>
    ),
  },
  {
    name: "Clerk",
    svg: (
      <svg viewBox="0 0 90 24" fill="currentColor" className="h-5 w-auto">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L19 8v8l-7 3.5L5 16V8l7-3.5z" />
        <text x="26" y="17" fontSize="16" fontWeight="600" fontFamily="system-ui, sans-serif">Clerk</text>
      </svg>
    ),
  },
  {
    name: "Vercel",
    svg: (
      <svg viewBox="0 0 100 24" fill="currentColor" className="h-5 w-auto">
        <polygon points="12,2 22,20 2,20" />
        <text x="28" y="17" fontSize="16" fontWeight="600" fontFamily="system-ui, sans-serif">Vercel</text>
      </svg>
    ),
  },
  {
    name: "Linear",
    svg: (
      <svg viewBox="0 0 100 24" fill="currentColor" className="h-5 w-auto">
        <path d="M2 20L20 2h-6L2 14v6zm0-10L10 2H4L2 4v6zm16 10l2-2v-6l-8 8h6z" />
        <text x="26" y="17" fontSize="16" fontWeight="600" fontFamily="system-ui, sans-serif">Linear</text>
      </svg>
    ),
  },
  {
    name: "Notion",
    svg: (
      <svg viewBox="0 0 100 24" fill="currentColor" className="h-5 w-auto">
        <path d="M4 2h12l2 2v16l-2 2H4l-2-2V4l2-2zm2 4v12h8V6H6zm10 0v12h2V6h-2z" />
        <text x="24" y="17" fontSize="16" fontWeight="600" fontFamily="system-ui, sans-serif">Notion</text>
      </svg>
    ),
  },
  {
    name: "Raycast",
    svg: (
      <svg viewBox="0 0 110 24" fill="currentColor" className="h-5 w-auto">
        <rect x="2" y="8" width="8" height="8" rx="1" />
        <rect x="12" y="4" width="6" height="16" rx="1" />
        <text x="24" y="17" fontSize="16" fontWeight="600" fontFamily="system-ui, sans-serif">Raycast</text>
      </svg>
    ),
  },
];

const TrustedBy = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 0.5;

    const scroll = () => {
      scrollPosition += speed;
      const maxScroll = scrollContainer.scrollWidth / 2;
      
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    // Set initial position
    scrollContainer.scrollLeft = scrollPosition;
    animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="bg-background py-8 md:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center">
          {/* Left side - Label */}
          <div className="flex-shrink-0 px-6">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              <span className="whitespace-nowrap font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Trusted by teams at
              </span>
            </div>
          </div>

          {/* Spacer */}
          <div className="w-32 flex-shrink-0 md:w-72 lg:w-96" />

          {/* Right side - Scrolling logos */}
          <div className="relative flex-1 overflow-hidden">
            {/* Fade on left side only (between label and logos) */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
            
            {/* Scrolling container */}
            <div
              ref={scrollRef}
              className="flex items-center gap-16 overflow-hidden"
              style={{ scrollBehavior: "auto" }}
            >
              {/* Double the logos for seamless infinite scroll */}
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex-shrink-0 text-neutral-500 opacity-60 transition-opacity hover:opacity-100"
                >
                  {logo.svg}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;

