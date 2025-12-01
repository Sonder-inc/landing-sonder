"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Copy, Check, ChevronDown } from "lucide-react";

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"terminal" | "ide" | "web">("terminal");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedMode, setSelectedMode] = useState<"get-sonder" | "on-web">("on-web");
  const [urlInput, setUrlInput] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const installCommand = "curl -fsSL https://trysonder.ai/install.sh | bash";

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleModeSelect = (mode: "get-sonder" | "on-web") => {
    setSelectedMode(mode);
    setDropdownOpen(false);
  };

  return (
    <section className="bg-background md:px-4 lg:px-8">
      <div className="mx-auto max-w-7xl pt-12 pb-6 text-center max-md:px-6">
        <div className="mb-8">
          {/* Intro pill button */}
          <a
            href="#"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <span>introducing sonder v0.1</span>
            <span className="text-border">|</span>
            <span className="inline-flex items-center gap-1 text-foreground">
              Try it now <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </a>

          <h1 className="mb-4 font-display text-[40px] font-[450] leading-none tracking-tight text-foreground lg:text-5xl">
            Built to make you extraordinarily productive.
          </h1>
          <p className="mx-auto mb-2 max-w-xl text-lg text-muted-foreground">
            Sonder is the best way to hack with AI.
          </p>
        </div>

        {/* Install command interface */}
        <div className="mx-auto max-w-2xl">
          <div className="flex items-center rounded-xl border border-border bg-card">
            {/* Dropdown button */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex h-12 items-center gap-2 border-r border-border bg-background px-4 text-sm font-medium text-foreground transition-colors hover:bg-secondary rounded-l-xl"
              >
                <span>{selectedMode === "on-web" ? "On the web" : "Get Sonder"}</span>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </button>

              {/* Dropdown menu */}
              {dropdownOpen && (
                <div className="absolute left-0 top-full mt-1 z-50 min-w-[160px] rounded-lg border border-border bg-card shadow-lg">
                  <button
                    onClick={() => handleModeSelect("get-sonder")}
                    className="w-full px-4 py-2 text-left text-sm font-medium text-foreground transition-colors hover:bg-secondary rounded-t-lg"
                  >
                    Get Sonder
                  </button>
                  <button
                    onClick={() => handleModeSelect("on-web")}
                    className="w-full px-4 py-2 text-left text-sm font-medium text-foreground transition-colors hover:bg-secondary rounded-b-lg"
                  >
                    On the web
                  </button>
                </div>
              )}
            </div>

            {/* Content area - switches based on selected mode */}
            {selectedMode === "on-web" ? (
              // URL input for "On the web"
              <div className="flex flex-1 items-center px-4">
                <input
                  type="text"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  placeholder="Enter your domain for a penetration test"
                  className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />
              </div>
            ) : (
              // Command display for "Get Sonder"
              <div className="flex flex-1 items-center px-4 font-mono text-sm">
                <span className="text-orange-400">curl</span>
                <span className="text-muted-foreground">&nbsp;-fsSL&nbsp;</span>
                <span className="text-foreground">https://trysonder.ai/install.sh</span>
                <span className="text-muted-foreground">&nbsp;|&nbsp;</span>
                <span className="text-amber-500">bash</span>
              </div>
            )}

            {/* Action button - checkmark for URL, copy for command */}
            {selectedMode === "on-web" ? (
              <button
                className="flex h-12 items-center justify-center px-4 text-primary transition-colors hover:text-primary/80 rounded-r-xl"
                aria-label="Submit URL"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={handleCopy}
                className="flex h-12 items-center justify-center px-4 text-muted-foreground transition-colors hover:text-foreground rounded-r-xl"
                aria-label="Copy command"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-primary" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            )}
          </div>

          {/* Documentation link */}
          <p className="mt-4 text-sm text-muted-foreground">
            Or read the{" "}
            <a
              href="#"
              className="underline underline-offset-2 transition-colors hover:text-foreground"
            >
              documentation
            </a>
          </p>

          {/* Use Sonder toggle */}
          <div className="mt-24 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <span className="text-muted-foreground">Use Sonder where you work</span>
            <div className="flex items-center rounded-full border border-border bg-card p-1">
              <button
                onClick={() => setActiveTab("terminal")}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === "terminal"
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Terminal
              </button>
              <button
                onClick={() => setActiveTab("web")}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === "web"
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Web and iOS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;