"use client";

import Link from 'next/link';
import { URLS, ASSETS } from '@/lib/constants';
import { Container } from '@/components/ui/section';
import { useLandingMode } from "@/lib/landing-mode";
import { landingCopy } from "@/lib/landing-copy";

const FinalCtaSection = () => {
  const { mode } = useLandingMode();
  const copy = landingCopy[mode];

  return (
    <section
      id="book-demo"
      className="relative overflow-hidden bg-[#121212] py-20 md:py-24 lg:py-28"
      style={{
        backgroundImage: `url('${ASSETS.BG_PATTERN_ARROW}')`,
        backgroundSize: 'auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
      }}
    >
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl bg-white p-12 shadow-[0_20px_80px_rgba(0,0,0,0.35)] md:p-16">
            <div className="mb-12 flex items-center font-mono text-[10px] tracking-[0.1em] text-gray-400 uppercase">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#4A9EFF]" />
                <span>Build with us</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-5 text-center">
              <div className="mb-4 flex w-full justify-start">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  className="text-gray-900"
                >
                  <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
                  <circle cx="12" cy="12" r="3" fill="none" />
                </svg>
              </div>
              <h3 className="w-full text-left font-display text-4xl font-medium leading-tight tracking-tighter text-gray-900 md:text-5xl">
                {copy.finalCta.headline}
              </h3>
              <p className="w-full text-left text-lg text-gray-600">
                {copy.finalCta.subhead}
              </p>
              <div className="mt-8 flex w-full justify-start">
                <Link
                  href={URLS.APP}
                  className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full bg-[#4A9EFF] px-8 text-lg font-medium text-white transition-colors hover:bg-[#4A9EFF]/90"
                >
                  Start hacking
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FinalCtaSection;
