import { cn } from "@/lib/utils";

/**
 * Sqorvin mark: a single flowing "S" — an ownable lettermark tied directly
 * to the brand name, rather than a generic icon-in-a-rounded-square. No
 * bounding container: the stroke itself is the mark, so it reads cleanly
 * at any size from a 16px browser tab to a full-bleed hero use. Used as the
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
      <path
        d="M23.5 10C23.5 10 22 8 17 8C11.5 8 9 10.2 9 13C9 18 23 14 23 19C23 21.8 20.5 24 15 24C10 24 8.5 22 8.5 22"
        stroke="url(#sqorvin-mark-grad)"
        strokeWidth="3.6"
        strokeLinecap="round"
      />
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
