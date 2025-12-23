"use client";

import * as React from "react";
import { ChevronDown, ChevronRight, Command, Globe, Kanban, Menu, Slack, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { URLS } from "@/lib/constants";

const navLinks = [
  { href: "#enterprise", label: "ENTERPRISE" },
  { href: "#pricing", label: "PRICING" },
  { href: URLS.GITHUB_REPO, label: "DOCS", external: true },
];

const productMenuItems = [
  {
    href: "#terminal",
    title: "Terminal / IDE",
    description: "Hack where you code",
    Icon: Terminal,
  },
  {
    href: "#slack",
    title: "Slack / Teams",
    description: "Instant incident resolution",
    Icon: Slack,
  },
  {
    href: "#web",
    title: "Web",
    description: "Native delegation interface",
    Icon: Globe,
  },
  {
    href: "#project-manager",
    title: "Project Manager",
    description: "Assign tickets to AI",
    Icon: Kanban,
  },
  {
    href: "#cli",
    title: "CLI",
    description: "Automation across the SDLC",
    Icon: Command,
  },
] as const;

const Wordmark = () => {
  return (
    <a
      href="/"
      aria-label="Sonder Home"
      className="font-display-serif text-[18px] font-semibold tracking-tight text-white"
    >
      Sonder
    </a>
  );
};

function ProductMegaMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <HoverCard open={open} onOpenChange={setOpen} openDelay={75} closeDelay={100}>
      <HoverCardTrigger asChild>
        <button
          type="button"
          className="font-mono-nav group flex items-center gap-1 text-[13px] font-medium tracking-wide transition-colors"
        >
          <span className={open ? "text-white" : "text-[#8a8a8a] group-hover:text-white"}>
            PRODUCT
          </span>
          <ChevronDown
            className={[
              "h-3 w-3 text-[#8a8a8a] transition-transform duration-200 group-hover:text-white",
              open ? "rotate-180 text-white" : "",
            ].join(" ")}
            aria-hidden="true"
          />
        </button>
      </HoverCardTrigger>
      <HoverCardContent
        align="center"
        side="bottom"
        sideOffset={8}
        className="w-[480px] max-w-[calc(100vw-2rem)] rounded-xl border border-white/10 bg-black/70 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_16px_56px_rgba(0,0,0,0.85)] backdrop-blur-xl"
      >
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          {productMenuItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group flex items-start gap-2 rounded-lg p-1 transition-colors hover:bg-white/5"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/90">
                <item.Icon className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[15px] font-medium leading-[1.1] text-white">
                  {item.title}
                </div>
                <div className="mt-px text-[11px] leading-[1.15] text-white/45">
                  {item.description}
                </div>
              </div>
            </a>
          ))}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export default function Navigation() {
  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full bg-[#0a0a0a] border-b border-white/5">
        <nav className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-6">
          {/* Left side - Wordmark */}
          <div className="flex items-center">
            <Wordmark />
          </div>

          {/* Right side (desktop) - Tabs + Actions */}
          <div className="hidden items-center gap-8 lg:flex">
            <div className="flex items-center gap-6">
              <ProductMegaMenu />
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="font-mono-nav group flex items-center gap-1 text-[13px] font-medium tracking-wide text-[#8a8a8a] transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Button
                asChild
                className="font-mono-nav h-9 rounded-sm border border-white/20 bg-[#f5f5f5] px-5 text-[13px] font-medium tracking-wide text-black hover:bg-white"
              >
                <a href={URLS.APP}>LOG IN</a>
              </Button>
              <Button
                asChild
                className="font-mono-nav h-9 rounded-sm border border-white/20 bg-[#1a1a1a] px-5 text-[13px] font-medium tracking-wide text-white hover:bg-[#252525]"
              >
                <a href={URLS.BOOK_DEMO}>CONTACT SALES</a>
              </Button>
            </div>
          </div>

          {/* Mobile menu button (right side on mobile) */}
          <div className="flex lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 active:bg-white/20"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[280px] border-l-white/10 bg-[#0a0a0a] p-0"
              >
                <div className="border-b border-white/10 px-4 py-4">
                  <Wordmark />
                </div>
                <div className="flex flex-col gap-1 p-4">
                  <SheetClose asChild>
                    <a
                      href="#features"
                      className="font-mono-nav flex items-center gap-2 px-3 py-3 text-sm font-medium tracking-wide text-[#8a8a8a] transition-colors hover:text-white"
                    >
                      PRODUCT <ChevronRight className="h-3 w-3" />
                    </a>
                  </SheetClose>
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="font-mono-nav flex items-center gap-2 px-3 py-3 text-sm font-medium tracking-wide text-[#8a8a8a] transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </SheetClose>
                  ))}
                </div>
                <div className="absolute bottom-6 left-4 right-4 flex flex-col gap-3">
                  <Button
                    asChild
                    variant="outline"
                    className="font-mono-nav h-11 w-full border-white/20 bg-transparent text-sm font-medium tracking-wide text-white hover:bg-white/10"
                  >
                    <a href={URLS.APP}>LOG IN</a>
                  </Button>
                  <Button
                    asChild
                    className="font-mono-nav h-11 w-full bg-[#1a1a1a] text-sm font-medium tracking-wide text-white hover:bg-[#252525] border border-white/20"
                  >
                    <a href={URLS.BOOK_DEMO}>CONTACT SALES</a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
      <div className="h-14" />
    </>
  );
}
