"use client";

import { useState } from "react";
import { ArrowRight, Copy, Check } from "lucide-react";
import { URLS, INSTALL_COMMAND } from "@/lib/constants";

interface HeroProps {
  activeTab: "terminal" | "web";
  onTabChange: (tab: "terminal" | "web") => void;
}

const Hero = ({ activeTab, onTabChange }: HeroProps) => {
  const [copied, setCopied] = useState(false);
  const [selectedMode, setSelectedMode] = useState<"get-sonder" | "on-web">("on-web");
  const [urlInput, setUrlInput] = useState("");
  const [urlError, setUrlError] = useState(false);
  const [heroMode, setHeroMode] = useState<"execute" | "educate">("execute");

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
    <section className="bg-background md:px-4 lg:px-8">
      <div className="mx-auto max-w-7xl pb-6 pt-12 max-md:px-6">
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
                <span>introducing sonder v0.1</span>
                <span className="text-border">|</span>
                <span className="inline-flex items-center gap-1 text-foreground transition-all duration-300 group-hover:text-cyan-400">
                  Try it now <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>

              <h1 className="mb-6 text-[clamp(2.5rem,8vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-foreground">
                AI hacker agents to
                <br />
                {/* Big click target for the whole phrase (overlay button; baseline-aligned visuals) */}
                <span className="relative inline-flex items-baseline gap-4 whitespace-nowrap leading-none">
                  <button
                    type="button"
                    onClick={() => setHeroMode((prev) => (prev === "execute" ? "educate" : "execute"))}
                    className="absolute -inset-x-3 inset-y-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                    aria-label="Toggle between execute and educate"
                  />

                  <span
                    className={`relative z-10 pointer-events-none leading-none transition-colors duration-200 ${
                      heroMode === "execute" ? "text-foreground" : "text-muted-foreground/40"
                    }`}
                  >
                    execute
                  </span>

                  {/* Switch (visual only; click handled by overlay button) */}
                  <span
                    aria-hidden="true"
                    className="relative z-10 pointer-events-none inline-block h-[1ex] w-[2.2ex] flex-shrink-0 rounded-full bg-neutral-900/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_6px_24px_rgba(0,0,0,0.55)] ring-1 ring-neutral-800"
                  >
                    <span
                      className={`absolute left-[0.1ex] top-1/2 h-[0.8ex] w-[0.8ex] -translate-y-1/2 rounded-full bg-neutral-200/80 shadow-[0_6px_18px_rgba(0,0,0,0.45)] transition-transform duration-300 ease-out ${
                        heroMode === "educate" ? "translate-x-[1.2ex]" : "translate-x-0"
                      }`}
                    />
                    <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent" />
                  </span>

                  <span
                    className={`relative z-10 pointer-events-none leading-none transition-colors duration-200 ${
                      heroMode === "educate" ? "text-foreground" : "text-muted-foreground/40"
                    }`}
                  >
                    educate
                  </span>
                </span>
              </h1>
              <p className="mb-2 max-w-lg text-base italic text-muted-foreground/80 leading-relaxed">
                The AI-powered security testing platform that finds vulnerabilities before attackers do.
              </p>
              <p className="max-w-lg text-base italic text-muted-foreground/80 leading-relaxed">
                From web apps to APIs – delegate complete penetration tests without changing your workflow.
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
                      <span className="text-orange-400">&gt;</span>
                      <span className="text-neutral-600">&nbsp;</span>
                      <span className="text-orange-400">curl</span>
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
      </div>
    </section>
  );
};

export default Hero;
