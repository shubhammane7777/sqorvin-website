import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-line bg-white/[0.025] p-6 shadow-card backdrop-blur-sm transition-colors duration-300 ease-premium sm:p-8",
        className
      )}
    >
      {children}
    </div>
  );
}
