import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-line bg-base-raised px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-ink-soft",
        className
      )}
    >
      {children}
    </span>
  );
}
