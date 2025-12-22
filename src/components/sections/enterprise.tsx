"use client";

import { Container } from "@/components/ui/section";
import { MoveRight, KeyRound, Users, FileText } from "lucide-react";
import { useLandingMode } from "@/lib/landing-mode";
import { landingCopy } from "@/lib/landing-copy";

const enterpriseSecurity = [
  {
    title: "Enterprise SSO",
    description: "SAML, OIDC, and OAuth out of the box. Plug into your existing identity provider.",
    icon: KeyRound,
  },
  {
    title: "Role-based access control",
    description: "Granular permissions for teams. Control who sees what, down to the finding.",
    icon: Users,
  },
  {
    title: "Complete audit logs",
    description: "Every scan, every finding, every action—logged and exportable for compliance.",
    icon: FileText,
  },
] as const;

type EnterpriseSecurityFeature = (typeof enterpriseSecurity)[number];

function SecurityFeature({ title, description, icon: Icon }: EnterpriseSecurityFeature) {
  return (
    <div className="relative">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.08] bg-black/[0.02]">
        <Icon className="h-5 w-5 text-black/80" strokeWidth={1.75} />
      </div>
      <h4 className="mb-2 text-[15px] font-medium leading-tight tracking-tight text-black">{title}</h4>
      <p className="text-[14px] leading-relaxed text-black/55">{description}</p>
    </div>
  );
}

const EnterpriseSection = () => {
  const { mode } = useLandingMode();
  const copy = landingCopy[mode];

  return (
    <section className="bg-black py-16 lg:py-24">
      <Container className="max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#f8f8f8] text-black shadow-2xl min-h-[min(78vh,860px)]">
          {/* Subtle grid/dot pattern background */}
          <div 
            className="pointer-events-none absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage: `radial-gradient(#000 0.5px, transparent 0.5px)`,
              backgroundSize: '24px 24px',
            }}
          />
          
          <div className="relative flex min-h-full flex-col md:flex-row">
            {/* Column 1: Intro */}
            <div className="flex-[1.2] p-8 lg:p-12">
              <div className="mb-16 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#FF6B35]" />
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-black/40">
                  Enterprise
                </span>
              </div>
              
              <div className="flex h-full flex-col justify-between">
                <p className="max-w-[340px] text-[18px] leading-[1.6] tracking-tight text-black/80">
                  {copy.enterprise.intro}
                </p>
                
                <h2 className="mt-16 max-w-[12ch] text-[clamp(40px,4.6vw,56px)] font-medium leading-[0.98] tracking-tight text-black">
                  {copy.enterprise.headline}
                </h2>
              </div>
            </div>

            {/* Column 2: Security features (SSO + RBAC) */}
            <div className="flex-1 border-y border-black/[0.08] p-8 md:border-x md:border-y-0 lg:p-12">
              <div className="mb-16">
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-black/40">
                  Security
                </span>
              </div>

              <div className="space-y-10">
                <SecurityFeature {...enterpriseSecurity[0]} />
                <div className="h-px w-full bg-black/[0.08]" />
                <SecurityFeature {...enterpriseSecurity[1]} />
              </div>

              <div className="mt-10">
                <button className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-black transition-colors hover:text-black/60">
                  Learn more about security
                  <MoveRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* Column 3: Compliance (Audit logs) */}
            <div className="flex-1 p-8 lg:p-12">
              <div className="mb-16">
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-black/40">
                  Compliance
                </span>
              </div>

              <SecurityFeature {...enterpriseSecurity[2]} />

              <div className="mt-10">
                <button className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-black transition-colors hover:text-black/60">
                  Learn more about enterprise
                  <MoveRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EnterpriseSection;
