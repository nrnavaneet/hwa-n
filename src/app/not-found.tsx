import type { Metadata } from "next";
import { ArrowRight } from "@/components/icons";
import { TransitionLink } from "@/components/transition-provider";
import { ACTS } from "@/content/site";

export const metadata: Metadata = {
  title: "Behind the screen",
  description: "That scene is not in this play. Try another act.",
};

export default function NotFound() {
  return (
    <section className="page-hero theme-ink" aria-labelledby="notfound-title">
      <div className="page-hero__glow" aria-hidden="true" />
      <div className="container page-hero__inner">
        <p className="eyebrow">Error 404 · The scene is missing</p>
        <h1 className="display display--1" id="notfound-title">
          This act was <em>never staged.</em>
        </h1>
        <p className="lede page-hero__lede">
          The page you asked for is not part of the performance. The lamp is still lit — pick up the
          play from any act below.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "0.5rem" }}>
          {ACTS.map((act) => (
            <TransitionLink key={act.href} href={act.href} className="chip chip--accent">
              {act.roman} · {act.nav}
            </TransitionLink>
          ))}
          <TransitionLink href="/sources" className="chip chip--accent">
            The programme
          </TransitionLink>
        </div>
        <div style={{ marginTop: "1.6rem" }}>
          <TransitionLink href="/" className="btn btn--solid">
            Back to the lamp
            <ArrowRight className="btn__arrow" />
          </TransitionLink>
        </div>
      </div>
      <div className="page-hero__rule" aria-hidden="true" />
    </section>
  );
}
