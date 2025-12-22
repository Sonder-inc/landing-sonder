import { cn } from "@/lib/utils";

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
  /** Size variant for padding */
  size?: "sm" | "md" | "lg";
  /** Whether to apply monospace font */
  mono?: boolean;
}

const sizeStyles = {
  sm: "rounded p-2",
  md: "rounded-lg p-3",
  lg: "rounded-lg p-4",
};

export function CodeBlock({
  children,
  className,
  size = "lg",
  mono = false,
}: CodeBlockProps) {
  return (
    <div
      className={cn(
        "bg-black/50",
        sizeStyles[size],
        mono && "font-mono text-xs",
        className
      )}
    >
      {children}
    </div>
  );
}

/** A row item variant for use in lists/feeds */
export function CodeBlockItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded bg-black/50 p-2",
        className
      )}
    >
      {children}
    </div>
  );
}

