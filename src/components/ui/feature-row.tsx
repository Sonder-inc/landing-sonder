import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface FeatureRowProps {
  number: string;
  title: string;
  description: string;
  icons?: LucideIcon[];
  visual: React.ReactNode;
  /** Whether the visual appears on the left (default is right) */
  visualLeft?: boolean;
  className?: string;
}

export function FeatureRow({
  number,
  title,
  description,
  icons,
  visual,
  visualLeft = false,
  className,
}: FeatureRowProps) {
  const contentBlock = (
    <div className="flex flex-col justify-between p-6 md:p-8 lg:p-12">
      <div>
        <p className="mb-4 text-7xl font-light text-text-tertiary/50">{number}</p>
        <h3 className="mb-4 font-display text-2xl font-medium leading-tight tracking-tight text-white lg:text-[28px]">
          {title}
        </h3>
        <p className="max-w-sm text-base text-text-secondary lg:text-lg">
          {description}
        </p>
      </div>
      {icons && icons.length > 0 && (
        <div className="mt-8 flex items-center space-x-5 text-text-tertiary">
          {icons.map((Icon, index) => (
            <Icon key={index} className="h-5 w-5" />
          ))}
        </div>
      )}
    </div>
  );

  const visualBlock = (
    <div
      className={cn(
        "flex items-center justify-center p-6 md:p-8 lg:p-12",
        !visualLeft && "md:border-l md:border-border-subtle"
      )}
    >
      {visual}
    </div>
  );

  return (
    <div className={cn("grid md:grid-cols-2", className)}>
      {visualLeft ? (
        <>
          {visualBlock}
          <div className="flex flex-col justify-start p-6 pt-10 md:border-l md:border-border-subtle md:p-8 md:pt-10 lg:p-12 lg:pt-12">
            <div>
              <p className="mb-4 text-7xl font-light text-text-tertiary/50">{number}</p>
              <h3 className="mb-4 font-display text-2xl font-medium leading-tight tracking-tight text-white lg:text-[28px]">
                {title}
              </h3>
              <p className="max-w-sm text-base text-text-secondary lg:text-lg">
                {description}
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          {contentBlock}
          {visualBlock}
        </>
      )}
    </div>
  );
}

/** A simple status item row used inside demo cards */
export function StatusItem({
  label,
  status,
  className,
}: {
  label: string;
  status?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-lg bg-[rgba(255,255,255,0.05)] p-3",
        className
      )}
    >
      <span className="text-sm text-text-secondary">{label}</span>
      {status}
    </div>
  );
}

