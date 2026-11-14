import type { Metadata } from "next";
import { PuppetAnatomy } from "@/components/craft/puppet-anatomy";
import { StageSection } from "@/components/craft/stage-section";
import { ArrowRight, ArrowUpRight, PerfDivider } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { PageHero, SectionHead } from "@/components/section";
import { TransitionLink } from "@/components/transition-provider";
import { CRAFT_FACTS, MUSIC, REPERTOIRE, TIMELINE } from "@/content/craft";
import styles from "../acts.module.css";

export const metadata: Metadata = {
  title: "The craft",
  description:
    "How Tholu Bommalata works: the lamp, the screen, the jointed leather figures, the puppeteers and the music — a performance shown in cross-section.",
  alternates: { canonical: "/craft" },
};

export default function CraftPage() {
  return (
    <>
      <PageHero
        eyebrow="Act II · The craft"
        title={
          <>
            A performance, <em>in cross-section.</em>
          </>
        }
        lede="Tholu Bommalata has six moving parts and one hidden actor. Watch how a lamp, a cloth and a few painted skins turn into a night of theatre."
        meta={
          <>
            <span className="chip chip--accent">Nimmalakunta · Andhra Pradesh</span>
            <span className="chip">GI tag 2008</span>
            <span className="chip">Six to eight performers</span>
          </>
        }
      />

      <section className="section theme-ink surface" aria-label="Key facts">
        <div className="container">
          <div className={styles.facts}>
            {CRAFT_FACTS.map((fact) => (
              <div className={styles.fact} key={fact.label}>
                <span className={styles.factFigure}>{fact.figure}</span>
                <span className={styles.factLabel}>{fact.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section theme-paper surface" aria-labelledby="cross-title">
        <div className="container">
          <SectionHead
            eyebrow="The machine"
            title={
              <>
                Six parts, <em>one lamp.</em>
              </>
            }
            lede="Stand to the side of the screen and the whole illusion falls apart into its parts. Choose a layer to see what each one does."
            id="cross-title"
          />
          <StageSection />
        </div>
      </section>

      <section className="section theme-ink surface" aria-labelledby="anatomy-title">
        <div className="container">
          <SectionHead
            eyebrow="The figure"
            title={
              <>
                Anatomy of a <em>shadow.</em>
              </>
            }
            lede="A single puppet is hide, ink, holes and string. Every part is made to be read at a distance, in the dark, by lamplight."
            id="anatomy-title"
          />
          <PuppetAnatomy />
        </div>
      </section>

      <section className="section theme-paper surface" aria-labelledby="repertoire-title">
        <div className="container">
          <div className={styles.split}>
            <div>
              <SectionHead
                eyebrow="The repertoire"
                title={
                  <>
                    One Ramayana, <em>told all night.</em>
                  </>
                }
                lede="The theatre has its own text and its own customs of entry. A trained audience knows who is arriving before the figure has finished crossing the cloth."
                id="repertoire-title"
              />
              <ul className={styles.list}>
                {REPERTOIRE.map((item) => (
                  <Reveal as="li" key={item.title} className={styles.listItem}>
                    <span className={styles.listItem__mark} aria-hidden="true" />
                    <span>
                      <strong>{item.title}.</strong> {item.note}
                    </span>
                  </Reveal>
                ))}
              </ul>
            </div>
            <div>
              <SectionHead
                eyebrow="The band"
                title={
                  <>
                    A singer, <em>and six hands.</em>
                  </>
                }
                id="music-title"
              />
              <ul className={styles.cardGrid}>
                {MUSIC.map((instrument) => (
                  <li className={styles.card} key={instrument.name}>
                    <span className={styles.cardTitle}>{instrument.name}</span>
                    <span className={styles.cardNote}>{instrument.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section theme-ink surface" aria-labelledby="history-title">
        <div className="container">
          <SectionHead
            eyebrow="A short history"
            title={
              <>
                Two thousand years, <em>in eight dates.</em>
              </>
            }
            lede="Dates in a folk tradition are approximate. These are the moments the record supports, with the gaps left honest."
            id="history-title"
          />
          <ol className={styles.numberList}>
            {TIMELINE.map((entry, index) => (
              <Reveal as="li" key={entry.year} className={styles.numberItem} delay={index * 0.03}>
                <span className={styles.numberItem__n}>{entry.year}</span>
                <div className={styles.numberItem__body}>
                  <h3 className={styles.numberItem__title}>{entry.title}</h3>
                  <p className={styles.numberItem__text}>{entry.note}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section theme-paper surface" aria-label="Continue">
        <div className="container">
          <Reveal>
            <div className={styles.panel}>
              <p className="eyebrow">Next — Act III</p>
              <h2 className="display display--3" style={{ marginTop: "1rem" }}>
                Now make one: from raw hide to a figure that can walk.
              </h2>
              <div className={styles.ctaRow} style={{ marginTop: "1.6rem" }}>
                <TransitionLink href="/making" className="btn btn--solid">
                  The making
                  <ArrowRight className="btn__arrow" />
                </TransitionLink>
                <TransitionLink href="/stage" className="text-link">
                  Or try the stage
                  <ArrowUpRight />
                </TransitionLink>
              </div>
            </div>
          </Reveal>
          <div style={{ marginTop: "2.5rem" }}>
            <PerfDivider />
          </div>
        </div>
      </section>
    </>
  );
}
