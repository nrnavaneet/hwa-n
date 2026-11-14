import type { Metadata } from "next";
import { ArrowUpRight } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { PageHero, SectionHead } from "@/components/section";
import { TransitionLink } from "@/components/transition-provider";
import { ACCESSIBILITY, COLOPHON, GLOSSARY, SOURCES } from "@/content/sources";
import { SITE } from "@/content/site";
import styles from "../acts.module.css";

export const metadata: Metadata = {
  title: "The programme",
  description:
    "Sources, glossary, notes and accessibility for the THOLU field guide to Tholu Bommalata — every claim traced to its reference.",
  alternates: { canonical: "/sources" },
};

export default function SourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="The programme"
        title={
          <>
            Where this <em>comes from.</em>
          </>
        }
        lede="A playbill names its players. This is the list of the writers, reporters and records behind everything on this site, with a glossary for the Telugu words and a note on how the pages are built."
        meta={
          <>
            <span className="chip chip--accent">{SOURCES.length} sources</span>
            <span className="chip">Last checked 2026</span>
          </>
        }
      />

      <section className="section theme-ink surface" aria-labelledby="sources-title">
        <div className="container">
          <SectionHead
            eyebrow="References"
            title={
              <>
                The record, <em>in full.</em>
              </>
            }
            lede="These are the works consulted for the guide. Each entry links to the original and says what it supplied."
            id="sources-title"
          />
          <ol className={styles.sourceList}>
            {SOURCES.map((source, index) => (
              <Reveal as="li" key={source.id} className={styles.sourceItem} delay={index * 0.02}>
                <span className={styles.sourceItem__n}>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className={styles.sourceItem__title}>
                    <a href={source.href} target="_blank" rel="noreferrer noopener">
                      {source.title}
                    </a>
                  </h3>
                  <p className={styles.sourceItem__meta}>
                    {source.author} · {source.publisher} · {source.year}
                  </p>
                  <p className={styles.sourceItem__note}>{source.note}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section theme-paper surface" aria-labelledby="glossary-title">
        <div className="container">
          <SectionHead
            eyebrow="Glossary"
            title={
              <>
                Words to <em>carry away.</em>
              </>
            }
            id="glossary-title"
          />
          <dl className={styles.glossary}>
            {GLOSSARY.map((entry) => (
              <div className={styles.glossaryRow} key={entry.term}>
                <dt className={styles.glossaryTerm}>
                  {entry.term}
                  {entry.telugu ? <span lang="te">{entry.telugu}</span> : null}
                </dt>
                <dd className={styles.glossaryMeaning}>{entry.meaning}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section theme-ink surface" aria-labelledby="notes-title">
        <div className="container">
          <div className={styles.split}>
            <div>
              <SectionHead
                eyebrow="Colophon"
                title={
                  <>
                    How this <em>was made.</em>
                  </>
                }
                id="notes-title"
              />
              <ul className={styles.list}>
                {COLOPHON.map((item) => (
                  <li className={styles.listItem} key={item}>
                    <span className={styles.listItem__mark} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHead eyebrow="Accessibility" title={<>Built to be entered.</>} />
              <ul className={styles.list}>
                {ACCESSIBILITY.map((item) => (
                  <li className={styles.listItem} key={item}>
                    <span className={styles.listItem__mark} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section theme-paper surface" aria-label="Credits and continue">
        <div className="container">
          <Reveal>
            <div className={styles.panel}>
              <p className="eyebrow">Credits</p>
              <p className="prose" style={{ marginTop: "1rem" }}>
                {SITE.name} is a field guide to {SITE.telugu} ({SITE.teluguMeaning}), the leather
                shadow theatre of Andhra Pradesh. Written and designed as a frontend project by{" "}
                {SITE.author}. All illustrations are original to this site.
              </p>
              <div className={styles.ctaRow} style={{ marginTop: "1.6rem" }}>
                <TransitionLink href="/" className="btn btn--solid">
                  Back to the lamp
                  <ArrowUpRight className="btn__arrow" />
                </TransitionLink>
                <TransitionLink href="/learn" className="btn">
                  Learn the craft
                  <ArrowUpRight className="btn__arrow" />
                </TransitionLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
