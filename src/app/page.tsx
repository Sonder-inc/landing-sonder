"use client";

import { useState } from "react";
import Navigation from "@/components/sections/navigation";
import Hero from "@/components/sections/hero";
import TrustedBy from "@/components/sections/trusted-by";
import ProductPreviewScroller from "@/components/sections/product-preview-scroller";
import BeforeCallSection from "@/components/sections/before-call";
import DuringHack from "@/components/sections/during-call";
import AfterHackSection from "@/components/sections/after-call";
import SecuritySection from "@/components/sections/security";
import FinalCtaSection from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"terminal" | "web">("terminal");

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <Hero activeTab={activeTab} onTabChange={setActiveTab} />
        <TrustedBy />
        <ProductPreviewScroller />
        <BeforeCallSection />
        <DuringHack />
        <div className="container mx-auto max-w-7xl px-6 py-12 md:py-20">
          <AfterHackSection />
        </div>
        <SecuritySection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}