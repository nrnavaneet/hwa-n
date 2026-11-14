import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { PageHero, SectionHead } from "@/components/section";
import { ShadowStage } from "@/components/stage/shadow-stage";
import { TransitionLink } from "@/components/transition-provider";
import styles from "../acts.module.css";

export const metadata: Metadata = {
  title: "The stage",
  description:
    "An interactive shadow play: drag the lamp, pose the dancer, and watch the shadow change size, edge and direction the way it does in Tholu Bommalata.",
  alternates: { canonical: "/stage" },
};

const NOTES = [
  {
    title: "Distance is size",
    note: "Drag the lamp close to the figure and the shadow swells; pull it away and the figure shrinks. A whole cast can be made from one puppet this way.",
  },
  {
    title: "Distance is edge",
    note: "A lamp close by throws a soft, blurred edge. A distant lamp sharpens it. Puppeteers choose the mood with a step to the left or right.",
  },
  {
    title: "Direction is character",
    note: "The light also decides where the shadow leans. Move the lamp and the figure seems to walk toward one edge of the screen.",
  },
];

export default function StagePage() {
  return (
    <>
      <PageHero
        eyebrow="Act V · The stage"
        title={
          <>
            Move the lamp. <em>Change the story.</em>
          </>
        }
        lede="This is the whole trick of the theatre, reduced to one lamp, one cloth and one figure. Drag the light, pose the dancer, and watch what the shadow does."
        meta={
          <>
            <span className="chip chip--accent">Interactive</span>
            <span className="chip">Keyboard accessible</span>
          </>
        }
      />

      <section className="section theme-ink surface" aria-labelledby="stage-title">
        <div className="container">
          <SectionHead
            eyebrow="The illusion"
            title={
              <>
                One lamp, <em>many sizes.</em>
              </>
            }
            lede="Every figure in a real performance is worked against a single light. Nothing here is animated in advance — the shadow is calculated from where you put the lamp."
            id="stage-title"
          />
          <Reveal>
            <ShadowStage />
          </Reveal>
        </div>
      </section>

      <section className="section theme-paper surface" aria-labelledby="notes-title">
        <div className="container">
          <SectionHead
            eyebrow="What you are seeing"
            title={
              <>
                Three rules <em>of the light.</em>
              </>
            }
            id="notes-title"
          />
          <div className={styles.cardGrid}>
            {NOTES.map((note, index) => (
              <Reveal key={note.title} delay={index * 0.05}>
                <div className={styles.card}>
                  <span className={styles.cardIndex}>{String(index + 1).padStart(2, "0")}</span>
                  <span className={styles.cardTitle}>{note.title}</span>
                  <span className={styles.cardNote}>{note.note}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section theme-ink surface" aria-label="Continue">
        <div className="container">
          <div className={styles.split}>
            <Reveal>
              <div className={styles.notice}>
                <p className={styles.notice__label}>On a real screen</p>
                <p className={styles.notice__text}>
                  In a village performance the lamp is fixed and the puppeteer does the moving. A
                  figure pressed against the cloth is crisp and dark; lifted away it blurs. The
                  audience never sees the lamp, the rods or the hands — only what the light decides
                  to show.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div>
                <p className="eyebrow">Next — Act VI</p>
                <h2 className="display display--3" style={{ marginTop: "1rem" }}>
                  Now build the screen at home.
                </h2>
                <div className={styles.ctaRow} style={{ marginTop: "1.6rem" }}>
                  <TransitionLink href="/learn" className="btn btn--solid">
                    Learn it tonight
                    <ArrowRight className="btn__arrow" />
                  </TransitionLink>
                  <TransitionLink href="/sources" className="text-link">
                    Read the programme
                    <ArrowUpRight />
                  </TransitionLink>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
