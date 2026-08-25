import { cn } from "@/lib/utils";

/**
 * Sqorvin mark: three ascending nodes on a rising path inside a rounded
 * square — reads as "growth" and "connected data points" without falling
 * back to a literal chart icon or an AI robot/brain cliché. Used as the
 * favicon source (see public/favicon.svg) and throughout the UI.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={cn("h-8 w-8", className)}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill="url(#sqorvin-mark-grad)" />
      <path
        d="M7 20.5L13 14.5L18 18.5L25 10.5"
        stroke="white"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="13" cy="14.5" r="1.8" fill="white" />
      <circle cx="18" cy="18.5" r="1.8" fill="white" />
      <circle cx="25" cy="10.5" r="1.8" fill="white" />
      <defs>
        <linearGradient
          id="sqorvin-mark-grad"
          x1="0"
          y1="0"
          x2="32"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4C7FFF" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="font-display text-lg font-semibold tracking-tight text-ink">
        sqorvin
      </span>
    </span>
  );
}
