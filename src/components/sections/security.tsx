"use client";

import { Users, FileText, KeyRound } from "lucide-react";
import { Container } from "@/components/ui/section";
import { useLandingMode } from "@/lib/landing-mode";
import { landingCopy } from "@/lib/landing-copy";

const securityFeatures = [
  {
    title: "Enterprise SSO",
    description: "SAML, OIDC, and OAuth out of the box. Plug into your existing identity provider.",
    icon: KeyRound,
    // Custom background SVG for each feature
    bgIcon: (
      <svg viewBox="0 0 120 120" fill="none" className="h-full w-full">
        <circle cx="60" cy="50" r="30" stroke="currentColor" strokeWidth="2" />
        <path d="M60 80 L60 110" stroke="currentColor" strokeWidth="2" />
        <rect x="50" y="100" width="20" height="15" rx="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="60" cy="45" r="8" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Role-based access control",
    description: "Granular permissions for teams. Control who sees what, down to the finding.",
    icon: Users,
    bgIcon: (
      <svg viewBox="0 0 120 120" fill="none" className="h-full w-full">
        <circle cx="60" cy="35" r="15" stroke="currentColor" strokeWidth="2" />
        <path d="M35 95 C35 70 45 55 60 55 C75 55 85 70 85 95" stroke="currentColor" strokeWidth="2" />
        <circle cx="30" cy="50" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
        <path d="M15 90 C15 72 22 62 30 62" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
        <circle cx="90" cy="50" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
        <path d="M105 90 C105 72 98 62 90 62" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: "Complete audit logs",
    description: "Every scan, every finding, every action—logged and exportable for compliance.",
    icon: FileText,
    bgIcon: (
      <svg viewBox="0 0 120 120" fill="none" className="h-full w-full">
        <path d="M30 15 L30 105 L90 105 L90 35 L70 15 L30 15Z" stroke="currentColor" strokeWidth="2" />
        <path d="M70 15 L70 35 L90 35" stroke="currentColor" strokeWidth="2" />
        <line x1="40" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="1.5" />
        <line x1="40" y1="62" x2="75" y2="62" stroke="currentColor" strokeWidth="1.5" />
        <line x1="40" y1="74" x2="80" y2="74" stroke="currentColor" strokeWidth="1.5" />
        <line x1="40" y1="86" x2="65" y2="86" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

type Feature = (typeof securityFeatures)[0];

const FeatureCard = ({ title, description, icon: Icon, bgIcon }: Feature) => (
  <div className="group relative h-full p-8 lg:p-10">
    {/* Large background icon */}
    <div className="pointer-events-none absolute right-4 top-1/2 h-32 w-32 -translate-y-1/2 text-white/[0.04] transition-all duration-500 group-hover:text-white/[0.08] lg:right-8 lg:h-40 lg:w-40">
      {bgIcon}
    </div>

    {/* Content */}
    <div className="relative z-10">
      {/* Icon container */}
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
        <Icon className="h-5 w-5 text-white/90" strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h4 className="mb-2.5 text-lg font-medium tracking-tight text-white">
        {title}
      </h4>

      {/* Description */}
      <p className="text-[15px] leading-relaxed text-white/50">
        {description}
      </p>
    </div>
  </div>
);

const SecuritySection = () => {
  const { mode } = useLandingMode();
  const copy = landingCopy[mode];

  return (
    <section className="relative bg-[#0a0a0a] py-24 lg:py-32">
      {/* Subtle noise texture overlay */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <Container>
        {/* Header */}
        <div className="mb-16 text-center lg:mb-20">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-white/40">
            {copy.security.eyebrow}
          </p>
          <h3 className="font-display mx-auto max-w-4xl text-[28px] font-medium leading-[1.15] tracking-tight text-white sm:text-3xl lg:text-[40px]">
            {copy.security.headline}
          </h3>
        </div>

        {/* Feature Grid */}
        <div className="relative mx-auto max-w-5xl">
          {/* Grid container with border */}
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.01]">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="relative border-b border-white/[0.08] md:border-b-0 md:border-r">
                <FeatureCard {...securityFeatures[0]} />
              </div>
              <div className="relative border-b border-white/[0.08] md:border-b-0 md:border-r">
                <FeatureCard {...securityFeatures[1]} />
              </div>
              <div className="relative">
                <FeatureCard {...securityFeatures[2]} />
              </div>
            </div>
          </div>

          {/* Center accents */}
          <div className="pointer-events-none absolute left-1/3 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
            <div className="h-2 w-2 rounded-full bg-white/10" />
          </div>
          <div className="pointer-events-none absolute left-2/3 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
            <div className="h-2 w-2 rounded-full bg-white/10" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SecuritySection;
