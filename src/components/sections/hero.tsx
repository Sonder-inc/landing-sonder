"use client";

import { useState } from "react";
import { ArrowRight, Copy, Check } from "lucide-react";
import { URLS, INSTALL_COMMAND } from "@/lib/constants";
import { Container } from "@/components/ui/section";
import { useLandingMode } from "@/lib/landing-mode";
import { landingCopy } from "@/lib/landing-copy";
import { LiquidMetal } from "@/components/ui/liquid-metal";

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [selectedMode, setSelectedMode] = useState<"get-sonder" | "on-web">("on-web");
  const [urlInput, setUrlInput] = useState("");
  const [urlError, setUrlError] = useState(false);
  const { mode, toggleMode } = useLandingMode();
  const copy = landingCopy[mode];

  const handleCopy = () => {
    navigator.clipboard.writeText(INSTALL_COMMAND);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isValidUrl = (urlString: string): boolean => {
    try {
      const url = new URL(urlString.startsWith('http') ? urlString : `https://${urlString}`);
      return url.protocol === 'http:' || url.protocol === 'https:';
    } catch {
      return false;
    }
  };

  const handleUrlSubmit = () => {
    if (urlInput.trim()) {
      if (!isValidUrl(urlInput.trim())) {
        setUrlError(true);
        return;
      }
      const url = encodeURIComponent(urlInput.trim());
      window.location.href = `${URLS.APP}?url=${url}`;
    } else {
      window.location.href = URLS.APP;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleUrlSubmit();
    }
  };

  return (
    <section className="bg-background">
      <Container className="pb-6 pt-12">
        {/* Two-column hero layout */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left column - Content */}
          <div className="text-left">
            <div className="mb-8">
              {/* Intro pill button */}
              <a
                href={URLS.GITHUB_REPO}
                className="group mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary"
              >
                <span>{copy.hero.introPill}</span>
                <span className="text-border">|</span>
                <span className="inline-flex items-center gap-1 text-foreground transition-all duration-300 group-hover:text-cyan-400">
                  Try it now <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>

              <h1 className="mb-6 text-[clamp(2.25rem,7.2vw,4.25rem)] font-medium leading-[1.05] tracking-[-0.02em] text-foreground">
                {copy.hero.titlePrefix}
                <br />
                {/* Big click target for the whole phrase (overlay button; baseline-aligned visuals) */}
                <span className="relative inline-flex items-baseline gap-3 whitespace-nowrap leading-none sm:gap-4">
                  <button
                    type="button"
                    onClick={toggleMode}
                    className="absolute -inset-x-3 inset-y-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                    aria-label="Toggle between execute and educate"
                  />

                  <span
                    className={`relative z-10 pointer-events-none leading-none transition-colors duration-200 ${
                      mode === "execute" ? "text-foreground" : "text-muted-foreground/40"
                    }`}
                  >
                    execute
                  </span>

                  {/* Switch (visual only; click handled by overlay button) */}
                  <span
                    aria-hidden="true"
                    className="relative z-10 pointer-events-none inline-flex h-[0.7em] w-[1.4em] items-center rounded-full bg-neutral-950 shadow-[0_4px_12px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(0,0,0,0.3)] ring-1 ring-white/10"
                  >
                    <span
                      className={`relative flex h-[0.55em] w-[0.55em] items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                        mode === "educate" ? "translate-x-[0.75em]" : "translate-x-[0.075em]"
                      }`}
                    >
                      {/* Liquid Metal Border Layer */}
                      <LiquidMetal className="absolute inset-0 rounded-full overflow-hidden">
                        {/* Thumb Inner Face */}
                        <div className="absolute inset-[1.5px] flex items-center justify-center rounded-full bg-neutral-900 shadow-[0_1px_2px_rgba(0,0,0,0.5)] z-20">
                          <ArrowRight 
                            className={`h-[0.3em] w-[0.3em] text-neutral-400 stroke-[2.5] transition-transform duration-300 ${
                              mode === "execute" ? "rotate-180" : "rotate-0"
                            }`}
                          />
                        </div>
                      </LiquidMetal>
                    </span>
                  </span>

                  <span
                    className={`relative z-10 pointer-events-none leading-none transition-colors duration-200 ${
                      mode === "educate" ? "text-foreground" : "text-muted-foreground/40"
                    }`}
                  >
                    educate
                  </span>
                </span>
              </h1>
              <p className="mb-2 max-w-lg text-base italic text-muted-foreground/80 leading-relaxed">
                {copy.hero.subtitle1}
              </p>
              <p className="max-w-lg text-base italic text-muted-foreground/80 leading-relaxed">
                {copy.hero.subtitle2}
              </p>
            </div>

            {/* Install command interface - Factory style container */}
            <div className="mt-10 max-w-xl rounded-2xl bg-neutral-900/80 p-4 dark:bg-neutral-900/60">
              {/* Tabs */}
              <div className="mb-3 flex gap-1">
                <button
                  onClick={() => setSelectedMode("on-web")}
                  className={`rounded-md px-3 py-1.5 font-mono text-xs font-medium uppercase tracking-widest transition-colors ${
                    selectedMode === "on-web"
                      ? "border border-neutral-700 bg-neutral-800 text-white"
                      : "text-neutral-500 hover:text-neutral-300"
                  }`}
                >
                  Web
                </button>
                <button
                  onClick={() => setSelectedMode("get-sonder")}
                  className={`rounded-md px-3 py-1.5 font-mono text-xs font-medium uppercase tracking-widest transition-colors ${
                    selectedMode === "get-sonder"
                      ? "border border-neutral-700 bg-neutral-800 text-white"
                      : "text-neutral-500 hover:text-neutral-300"
                  }`}
                >
                  Terminal
                </button>
              </div>

              {/* Input box */}
              <div className={`flex items-center rounded-xl border bg-neutral-950 ${
                urlError ? 'border-red-500' : 'border-neutral-700'
              }`}>
                {selectedMode === "on-web" ? (
                  <>
                    <div className="flex flex-1 items-center px-4">
                      <input
                        type="text"
                        value={urlInput}
                        onChange={(e) => {
                          setUrlInput(e.target.value);
                          setUrlError(false);
                        }}
                        onKeyDown={handleKeyDown}
                        placeholder="Enter your domain for a penetration test"
                        className={`flex-1 bg-transparent py-4 font-mono text-sm outline-none placeholder:text-neutral-500 ${
                          urlError ? 'text-red-500' : 'text-white'
                        }`}
                      />
                    </div>
                    <button
                      onClick={handleUrlSubmit}
                      className="flex h-14 items-center justify-center rounded-r-xl px-5 text-neutral-400 transition-colors hover:text-white"
                      aria-label="Submit URL"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </>
                ) : (
                  <>
                    <div className="flex flex-1 items-center px-4 py-4 font-mono text-sm">
                      <span className="text-[#6B9CFF]">&gt;</span>
                      <span className="text-neutral-600">&nbsp;</span>
                      <span className="text-[#6B9CFF]">curl</span>
                      <span className="text-neutral-500">&nbsp;-fsSL&nbsp;</span>
                      <span className="text-white">{URLS.INSTALL_SCRIPT}</span>
                      <span className="text-neutral-500">&nbsp;|&nbsp;</span>
                      <span className="text-white">sh</span>
                    </div>
                    <button
                      onClick={handleCopy}
                      className="flex h-14 items-center justify-center rounded-r-xl px-5 text-neutral-400 transition-colors hover:text-white"
                      aria-label="Copy command"
                    >
                      {copied ? (
                        <Check className="h-5 w-5 text-green-400" />
                      ) : (
                        <Copy className="h-5 w-5" />
                      )}
                    </button>
                  </>
                )}
              </div>

              {/* Error message */}
              {urlError && (
                <p className="mt-2 text-sm text-red-400">
                  Please enter a valid URL (e.g., example.com or https://example.com)
                </p>
              )}
            </div>
          </div>

          {/* Right column - Image/Benchmarks */}
          <div className="hidden lg:block">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-border bg-card/50">
              {/* Placeholder for benchmarks/image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-4 text-6xl opacity-20">📊</div>
                  <p className="text-sm text-muted-foreground">Benchmarks</p>
                </div>
              </div>
              {/* Decorative grid pattern */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
