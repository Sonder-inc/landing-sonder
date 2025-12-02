import Link from 'next/link';

const FinalCtaSection = () => {
  return (
    <section
      id="book-demo"
      className="relative overflow-hidden bg-[#121212] py-20 md:py-24 lg:py-28"
      style={{
        backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/images/bg-pattern-arrow-18.svg')`,
        backgroundSize: 'auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="container relative z-10">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 px-6 text-center md:px-0">
          <h3 className="font-display text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-5xl">
            Cut the ramp time, close more deals.
          </h3>
          <p className="max-w-xl text-lg text-muted-foreground">
            See how Aside handles the hard parts and makes every rep sound like a pro.
          </p>
          <div className="mt-5">
            <Link
              href="https://cal.com/team/aside/aside-demo"
              className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-full bg-primary px-6 text-base font-medium text-primary-foreground shadow-xs transition-colors hover:bg-primary/90"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;