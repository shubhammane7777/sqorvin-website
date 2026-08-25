import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-body font-semibold transition-all duration-300 ease-premium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-grad-primary text-white shadow-glow hover:shadow-glow-violet hover:brightness-110",
        secondary:
          "border border-line bg-white/[0.02] text-ink hover:border-accent-blue/60 hover:bg-white/[0.05]",
        ghost: "text-ink-soft hover:text-ink",
      },
      size: {
        md: "h-11 px-6 text-sm",
        lg: "h-14 px-7 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonProps = React.ComponentPropsWithoutRef<"a"> &
  VariantProps<typeof buttonStyles> & {
    withArrow?: boolean;
  };

/**
 * Anchor-based button (every CTA on this site scrolls to a section or opens
 * the external booking link — there's no client-side routing to justify a
 * <button> + router.push pattern). Rendered as <a> for correct semantics and
 * middle-click/new-tab support.
 */
export function Button({
  className,
  variant,
  size,
  withArrow = true,
  children,
  ...props
}: ButtonProps) {
  return (
    <a className={cn(buttonStyles({ variant, size }), className)} {...props}>
      {children}
      {withArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </a>
  );
}
