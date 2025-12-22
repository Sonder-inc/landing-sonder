import { cn } from "@/lib/utils";

interface DemoCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "terminal" | "gradient";
  gradientColor?: "red" | "purple" | "green";
}

const variantStyles = {
  default: "rounded-[24px] bg-background-secondary p-5 shadow-[0_20px_40px_rgba(0,0,0,0.5)]",
  terminal: "rounded-[24px] bg-black/80 shadow-[0_20px_40px_rgba(0,0,0,0.5)] font-mono text-sm overflow-hidden",
  gradient: "rounded-3xl bg-black/80 p-5 shadow-2xl",
};

const gradientWrapperStyles = {
  red: "from-red-500/10",
  purple: "from-purple-500/10",
  green: "from-green-500/10",
};

const gradientBorderStyles = {
  red: "border-red-500/20",
  purple: "border-purple-500/20",
  green: "border-green-500/20",
};

export function DemoCard({
  children,
  className,
  variant = "default",
  gradientColor,
}: DemoCardProps) {
  if (variant === "gradient" && gradientColor) {
    return (
      <div
        className={cn(
          "relative flex items-center justify-center rounded-[28px] bg-gradient-to-br to-transparent p-2",
          gradientWrapperStyles[gradientColor]
        )}
      >
        <div
          className={cn(
            "w-full max-w-lg border",
            variantStyles.gradient,
            gradientBorderStyles[gradientColor],
            className
          )}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("w-full max-w-sm", variantStyles[variant], className)}>
      {children}
    </div>
  );
}

export function DemoCardHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-4 flex items-center justify-between", className)}>
      {children}
    </div>
  );
}

export function DemoCardContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("space-y-2", className)}>{children}</div>;
}

