import type { SVGProps } from "react";

export function LampMark({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path
        d="M15.9 4.4c2.7 2.9 3.9 5.1 3.9 7.1a3.9 3.9 0 0 1-7.8 0c0-2 1.2-4.2 3.9-7.1Z"
        fill="currentColor"
      />
      <path
        d="M6 20.2h20c-.5 4.4-4.6 7.2-10 7.2S6.5 24.6 6 20.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M16 17.6v2.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M4.5 20.2h23" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowRight({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M3 10h13M11 4.5 17 10l-6 5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowUpRight({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className} {...props}>
      <path d="M5.5 14.5 14.5 5.5M6.5 5.5h8v8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className={`menu-icon ${open ? "is-open" : ""}`} aria-hidden="true">
      <span />
      <span />
    </span>
  );
}

export function PerfDivider({ className }: { className?: string }) {
  return <div className={`perf-divider ${className ?? ""}`.trim()} aria-hidden="true" />;
}
