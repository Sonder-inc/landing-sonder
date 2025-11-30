import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-background md:px-4 lg:px-8">
      <div className="mx-auto max-w-7xl pt-12 pb-10 text-center max-md:px-6 md:pb-20">
        <div className="mb-8">
          <h1 className="mb-4 font-display text-[40px] font-[450] leading-none tracking-tight text-foreground lg:text-5xl">
            Never stall on technical questions again.
          </h1>
          <p className="mx-auto mb-2 max-w-xl text-lg text-muted-foreground">
            When technical questions hit, Aside shows you the best answer in
            under a second, pulled from past winning calls and your docs.
          </p>
          <span className="mb-4 inline-flex items-center gap-1.5 font-display text-xs font-medium leading-none text-muted-foreground opacity-80">
            Backed by
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/svgs/y-combinator_ff4e4a4e-1.svg"
              alt="Y Combinator"
              width={85}
              height={16}
              className="h-4 w-auto"
            />
          </span>
        </div>
        <div className="inline-flex items-center gap-3 max-md:flex-col md:gap-2">
          <a
            href="https://cal.com/team/aside/aside-demo"
            className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-full bg-primary px-6 text-base font-medium text-primary-foreground shadow-xs transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            <span>Book a demo</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;