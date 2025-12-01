"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/read", label: "Read" },
  { href: "/pricing", label: "Pricing" },
  { href: "/community", label: "Community" },
];

const AsideLogo = () => {
    return (
        <a href="/" className="flex items-center gap-2" aria-label="Sonder Home">
            <span className="text-xl font-bold text-white tracking-tight">Sonder</span>
        </a>
    );
};

export default function Navigation() {
  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full border-b border-transparent bg-background px-6">
        <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-2">
          <AsideLogo />
          
          <div className="hidden flex-grow gap-1 md:flex md:justify-center md:px-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 hover:bg-accent/50 hover:text-accent-foreground ${
                    link.label === "Features"
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center justify-end gap-1 md:flex">
             <a
              href="https://cal.com/team/aside/aside-demo"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all bg-white text-black shadow-xs hover:bg-white/90 h-9 px-4 py-2"
            >
              <span>Book a demo</span>
            </a>
          </div>

          <div className="flex md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 active:bg-white/20">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-l-border w-[300px] sm:w-[540px] p-0">
                <div className="p-6 border-b border-border">
                  <AsideLogo />
                </div>
                <div className="flex flex-col gap-4 p-6">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <a href={link.href} className="text-lg font-medium text-muted-foreground hover:text-foreground">
                        {link.label}
                      </a>
                    </SheetClose>
                  ))}
                </div>
                <div className="absolute bottom-8 left-6 right-6">
                  <Button asChild className="w-full rounded-full bg-white h-12 text-base text-black hover:bg-white/90">
                    <a href="https://cal.com/team/aside/aside-demo">
                      Book a demo
                    </a>
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