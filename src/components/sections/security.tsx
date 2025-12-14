import { Server, Users, FileText, KeyRound } from "lucide-react";

const securityFeatures = [
  {
    title: "Enterprise SSO",
    description: "SAML, OIDC, and OAuth out of the box. Plug into your existing identity provider.",
    icon: KeyRound,
  },
  {
    title: "Air-gapped deployments",
    description: "Run Sonder entirely on-prem. Your code never leaves your infrastructure.",
    icon: Server,
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
];

type Feature = (typeof securityFeatures)[0];

const FeatureCard = ({ title, description, icon: Icon }: Feature) => (
  <>
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5">
      <Icon className="h-32 w-32" />
    </div>
    <div className="relative">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <h5 className="mb-2 text-lg font-medium text-white">{title}</h5>
      <p className="max-w-xs text-muted-foreground">{description}</p>
    </div>
  </>
);

const SecuritySection = () => {
  return (
    <section
      className="relative bg-black py-20 lg:py-32"
      style={{
        backgroundImage:
          "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/images/bg-pattern-dot-16.svg')",
      }}
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">[04] Enterprise Ready</p>
          <h3 className="font-display mx-auto max-w-4xl text-3xl font-medium tracking-tight text-white lg:text-4xl">
            Built for teams that can&apos;t afford to compromise on security or compliance.
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative overflow-hidden border-b border-border p-8 md:border-r lg:p-12">
            <FeatureCard {...securityFeatures[0]} />
          </div>
          <div className="relative overflow-hidden border-b border-border p-8 lg:p-12">
            <FeatureCard {...securityFeatures[1]} />
          </div>
          <div className="relative overflow-hidden border-b border-border p-8 md:border-b-0 md:border-r lg:p-12">
            <FeatureCard {...securityFeatures[2]} />
          </div>
          <div className="relative overflow-hidden p-8 lg:p-12">
            <FeatureCard {...securityFeatures[3]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;