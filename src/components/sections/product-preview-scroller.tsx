"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import DesktopPreview from "@/components/sections/desktop-preview";
import { useLandingMode } from "@/lib/landing-mode";
import { landingCopy } from "@/lib/landing-copy";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

type PreviewMode = "terminal" | "web" | "cli" | "slack" | "pm";

type Step = {
  id: PreviewMode;
  number: string;
  label: string;
  title: string;
  description: string;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function ProductPreviewScroller() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const { mode } = useLandingMode();
  const copy = landingCopy[mode];
  // In educate mode, filter out Slack and PM - learners won't use those features
  const allSteps = copy.product.steps as Step[];
  const steps = mode === "educate" 
    ? allSteps.filter(s => s.id !== "slack" && s.id !== "pm")
    : allSteps;

  // Clamp activeIdx to valid range to prevent rendering issues during transitions
  const safeActiveIdx = Math.min(Math.max(0, activeIdx), steps.length - 1);

  // Reset active index when steps change to prevent out-of-bounds access
  // Clamp to last valid index, not 0, so users can continue scrolling through
  useEffect(() => {
    if (activeIdx >= steps.length) {
      setActiveIdx(steps.length - 1);
    }
  }, [steps.length, activeIdx]);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top+=56", // 56px header offset
        end: "+=2000", // scroll distance while pinned (tune this for speed)
        pin: true,
        pinSpacing: true,
        scrub: 0.5, // smooth scrubbing (0.5s lag)
        onUpdate: (self) => {
          // Map progress (0-1) to step index
          const progress = self.progress;
          const idx =
            progress >= 1
              ? steps.length - 1
              : Math.floor(progress * steps.length);
          setActiveIdx(clamp(idx, 0, steps.length - 1));
        },
      });

      return () => {
        trigger.kill();
      };
    },
    { scope: containerRef }
  );

  const goToStep = (idx: number) => {
    // Calculate the scroll position for this step
    if (!sectionRef.current) return;
    const trigger = ScrollTrigger.getAll().find(
      (t) => t.trigger === sectionRef.current
    );
    if (!trigger) return;

    const progress = idx / (steps.length - 1);
    const scrollTo = trigger.start + (trigger.end - trigger.start) * progress;

    gsap.to(window, {
      scrollTo: { y: scrollTo, autoKill: false },
      duration: 0.6,
      ease: "power2.inOut",
    });
  };

  const active = steps[safeActiveIdx];

  return (
    <div ref={containerRef}>
      <section
        ref={sectionRef}
        className="relative bg-background min-h-screen flex items-center"
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:py-24 lg:py-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
            {/* Left column */}
            <div className="lg:pr-6 flex flex-col">
              <h2 className="text-balance text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-foreground md:text-5xl">
                {copy.product.heading.split("\n").map((line, idx) => (
                  <span key={idx}>
                    {line}
                    {idx < copy.product.heading.split("\n").length - 1 ? <br /> : null}
                  </span>
                ))}
              </h2>

              <p className="mt-6 max-w-xl font-mono text-sm leading-relaxed text-muted-foreground/80">
                {copy.product.subheading}
              </p>

              {/* List + copy card */}
              <div className="mt-12 lg:mt-auto grid gap-6 md:grid-cols-[180px_1fr] md:items-end">
                {/* Compact list */}
                <div className="select-none">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="flex items-center gap-1 rounded-full border border-border/60 bg-card/30 px-2 py-1">
                      {steps.map((s, idx) => {
                        const isActive = idx === safeActiveIdx;
                        return (
                          <span
                            key={s.id}
                            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                              isActive
                                ? "bg-[#6B9CFF]"
                                : "bg-muted-foreground/30"
                            }`}
                          />
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-1 font-mono text-xs tracking-widest text-muted-foreground/70">
                    {steps.map((s, idx) => {
                      const isActive = idx === safeActiveIdx;
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => goToStep(idx)}
                          className={`block w-full rounded-md px-1 py-1 text-left transition-colors ${
                            isActive
                              ? "text-[#6B9CFF]"
                              : "hover:text-muted-foreground"
                          }`}
                          aria-current={isActive ? "step" : undefined}
                        >
                          <span className="mr-2 inline-block w-5">
                            {s.number}
                          </span>
                          <span>{s.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Copy + example card */}
                <div className="rounded-2xl border border-border/60 bg-card/40 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#6B9CFF]" />
                      <div className="font-mono text-xs tracking-widest text-muted-foreground/70">
                        {active.number} - {active.label}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 text-2xl font-medium leading-snug text-foreground">
                    {active.title}
                  </div>
                  <div className="mt-4 max-w-[46ch] font-mono text-sm leading-relaxed text-muted-foreground/80">
                    {active.description}
                  </div>

                  <div className="mt-6">
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-mono text-xs font-semibold tracking-widest text-black shadow-[0_0_0_1px_rgba(0,0,0,0.35)]"
                    >
                      LEARN MORE <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div>
              <DesktopPreview activeView={active.id} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
