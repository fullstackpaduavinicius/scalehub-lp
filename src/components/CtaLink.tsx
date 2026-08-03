import type {
  AnchorHTMLAttributes,
  MouseEvent,
} from "react";

import { trackEvent } from "../lib/analytics";

interface CtaLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  trackingName: string;
  trackingPosition: string;
  variant?: "primary" | "secondary";
}

export function CtaLink({
  trackingName,
  trackingPosition,
  variant = "primary",
  className = "",
  onClick,
  children,
  ...props
}: CtaLinkProps) {
  function handleClick(
    event: MouseEvent<HTMLAnchorElement>,
  ) {
    trackEvent("cta_click", {
      cta_name: trackingName,
      cta_position: trackingPosition,
      cta_destination: props.href ?? "",
    });

    onClick?.(event);
  }

  const baseClasses =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 py-3 text-center text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#05080d]";

  const variants = {
    primary:
      "bg-cyan-400 text-slate-950 hover:bg-cyan-300",
    secondary:
      "border border-white/15 bg-white/5 text-white hover:border-cyan-400/50 hover:bg-white/10",
  };

  return (
    <a
      {...props}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}