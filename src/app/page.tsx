import Navigation from "@/components/sections/navigation";
import Hero from "@/components/sections/hero";
import DesktopPreview from "@/components/sections/desktop-preview";
import BeforeCallSection from "@/components/sections/before-call";
import DuringCall from "@/components/sections/during-call";
import AfterCallSection from "@/components/sections/after-call";
import SecuritySection from "@/components/sections/security";
import FinalCtaSection from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <Hero />
        <div className="mx-auto max-w-7xl px-0 pb-12 md:px-6 md:pb-20">
          <DesktopPreview />
        </div>
        <BeforeCallSection />
        <DuringCall />
        <div className="container mx-auto max-w-7xl px-6 py-12 md:py-20">
          <AfterCallSection />
        </div>
        <SecuritySection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}