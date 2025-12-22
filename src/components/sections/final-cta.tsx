import Link from 'next/link';
import { URLS, ASSETS } from '@/lib/constants';
import { Container } from '@/components/ui/section';

const FinalCtaSection = () => {
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
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <h3 className="font-display text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-5xl">
            Finding bugs at terminal velocity
          </h3>
          <p className="max-w-xl text-lg text-muted-foreground">
            Continuous pentesting that scales with your codebase. Ship fast, stay secure.
          </p>
          <div className="mt-5">
            <Link
              href={URLS.BOOK_DEMO}
              className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-full bg-[#4A9EFF] px-6 text-base font-medium text-white shadow-xs transition-colors hover:bg-[#4A9EFF]/90"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FinalCtaSection;
