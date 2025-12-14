import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-16">
        <div className="border-t border-border flex flex-col gap-4 py-6 text-xs md:flex-row md:items-center md:justify-between">
          <p className="text-white/40">
            © 2025 Sonder Research Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-muted hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-muted hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;