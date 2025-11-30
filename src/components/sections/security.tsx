import Image from "next/image";

const securityFeatures = [
  {
    title: "Invisible to screen share",
    description: "Never appears on shared screens, only you are visible.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/images/lock-01_61f67964-12.png",
  },
  {
    title: "Doesn’t join calls",
    description: "Listens locally, never as a bot participant.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/images/lock-02_4cb1305f-13.png",
  },
  {
    title: "End-to-end encryption",
    description:
      "Protected with AES-256-GCM and RSA-4096 in transfer and storage.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/images/lock-03_e404bb58-10.png",
  },
  {
    title: "Your data never trains AI models",
    description: "Conversations are never used to train external LLMs.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/images/lock-04_3449ad18-11.png",
  },
];

type Feature = (typeof securityFeatures)[0];

const FeatureCard = ({ title, description, image }: Feature) => (
  <>
    <Image
      src={image}
      alt=""
      width={382}
      height={138}
      className="pointer-events-none absolute left-1/2 top-1/2 h-auto w-full -translate-x-1/2 -translate-y-1/2 object-contain opacity-10"
    />
    <div className="relative">
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
          <h3 className="font-display mx-auto max-w-4xl text-3xl font-medium tracking-tight text-white lg:text-4xl">
            Private and secure. No bots in the call. No screen-share. Your data
            stays safe and 100% private with E2E encryption.
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