import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

type SectionHeadProps = {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "start" | "center";
  className?: string;
  id?: string;
};

export function SectionHead({ eyebrow, title, lede, align = "start", className, id }: SectionHeadProps) {
  return (
    <header className={`section-head section-head--${align} ${className ?? ""}`.trim()}>
      {eyebrow ? (
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2 className="display display--2" id={id}>
          {title}
        </h2>
      </Reveal>
      {lede ? (
        <Reveal delay={0.1}>
          <p className="lede">{lede}</p>
        </Reveal>
      ) : null}
    </header>
  );
}

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  lede: ReactNode;
  meta?: ReactNode;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, lede, meta, children }: PageHeroProps) {
  return (
    <header className="page-hero theme-ink">
      <div className="page-hero__glow" aria-hidden="true" />
      <div className="container page-hero__inner">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="display display--1">{title}</h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="lede page-hero__lede">{lede}</p>
        </Reveal>
        {meta ? (
          <Reveal delay={0.18}>
            <div className="page-hero__meta">{meta}</div>
          </Reveal>
        ) : null}
        {children}
      </div>
      <div className="page-hero__rule" aria-hidden="true" />
    </header>
  );
}
