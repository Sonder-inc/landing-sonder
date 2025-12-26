import Navigation from "@/components/sections/navigation";
import Hero from "@/components/sections/hero";
import TrustedBy from "@/components/sections/trusted-by";
import ProductPreviewScroller from "@/components/sections/product-preview-scroller";
import EnterpriseSection from "@/components/sections/enterprise";
import FinalCtaSection from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";
import { PageTracker } from "@/components/analytics";

export default function Home() {
  return (
    <>
      <PageTracker />
      <Navigation />
      <main className="min-h-screen bg-background">
        <Hero />
        <TrustedBy />
        <ProductPreviewScroller />
        <EnterpriseSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}