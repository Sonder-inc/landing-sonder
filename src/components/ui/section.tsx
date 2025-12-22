import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
  /** Whether to include the standard container wrapper */
  container?: boolean;
}

export function Section({
  children,
  className,
  id,
  containerClassName,
  container = true,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-12 md:py-20", className)}>
      {container ? (
        <div
          className={cn(
            "container mx-auto max-w-7xl px-6",
            containerClassName
          )}
        >
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
  variant?: "border-bottom" | "border-top" | "minimal";
}

export function SectionHeader({
  number,
  title,
  subtitle,
  className,
  variant = "border-bottom",
}: SectionHeaderProps) {
  if (variant === "border-top") {
    return (
      <div className={cn("relative mb-12 border-t border-white/10 md:mb-20", className)}>
        <div className="absolute -top-3 w-full px-4">
          <div className="relative h-px w-full">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-black pr-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-tertiary">
                [{number}] {title}
              </p>
            </div>
            {subtitle && (
              <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-black pl-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-tertiary">
                  / {subtitle}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "minimal") {
    return (
      <div className={cn("mb-4 flex items-center justify-between border-b border-b-white/10 pb-4", className)}>
        <span className="text-xs font-medium uppercase text-white/50">
          [{number}] {title}
        </span>
        {subtitle && (
          <span className="text-xs font-medium uppercase text-white/50">
            / {subtitle}
          </span>
        )}
      </div>
    );
  }

  // Default: border-bottom (used inside rounded containers)
  return (
    <div
      className={cn(
        "flex justify-between rounded-t-3xl border-b border-border-subtle px-6 py-4 md:px-8",
        className
      )}
    >
      <span className="font-mono text-xs font-medium uppercase tracking-wider text-text-tertiary">
        [{number}] {title}
      </span>
      {subtitle && (
        <span className="font-mono text-xs font-medium uppercase tracking-wider text-text-tertiary">
          / {subtitle}
        </span>
      )}
    </div>
  );
}

