import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { PageHero, SectionHead } from "@/components/section";
import { TransitionLink } from "@/components/transition-provider";
import { ALSO_MAKING, ECONOMY, MAKERS, MAKER_QUOTES, SUPPORT } from "@/content/makers";
import styles from "../acts.module.css";

export const metadata: Metadata = {
  title: "The makers",
  description:
    "The puppeteer families of Nimmalakunta — their awards, their words, and the economics that decide whether the craft survives.",
  alternates: { canonical: "/makers" },
};

export default function MakersPage() {
  return (
    <>
      <PageHero
        eyebrow="Act IV · The makers"
        title={
          <>
            The families who <em>kept the figures.</em>
          </>
        }
        lede="Tholu Bommalata is not an institution. It is a handful of households in one Andhra village, holding a repertoire that used to belong to the whole subcontinent."
        meta={
          <>
            <span className="chip chip--accent">Nimmalakunta · Anantapur district</span>
            <span className="chip">Aare Kapu community</span>
          </>
        }
      />

      <section className="section theme-ink surface" aria-labelledby="makers-title">
        <div className="container">
          <SectionHead
            eyebrow="The artists"
            title={
              <>
                Four names, <em>one village.</em>
              </>
            }
            lede="Each of these makers learned from a parent and is trying to pass the craft on. Their awards and their words come from the reporting listed in the programme."
            id="makers-title"
          />
          <div className={styles.makerGrid}>
            {MAKERS.map((maker, index) => (
              <Reveal key={maker.id} delay={index * 0.05}>
                <article className={styles.makerCard}>
                  <div className={styles.makerHead}>
                    <span className={styles.makerAvatar} aria-hidden="true">
                      {maker.initials}
                    </span>
                    <div>
                      <h3 className={styles.makerName}>{maker.name}</h3>
                      <p className={styles.makerRole}>{maker.role}</p>
                    </div>
                  </div>
                  <p className={styles.makerPlace}>{maker.place}</p>
                  <p className={styles.makerNote}>{maker.note}</p>
                  <div className={styles.honourRow}>
                    {maker.honours.map((honour) => (
                      <span className="chip chip--accent" key={honour}>
                        {honour}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section theme-paper surface" aria-labelledby="words-title">
        <div className="container">
          <SectionHead
            eyebrow="In their words"
            title={
              <>
                What the makers <em>actually say.</em>
              </>
            }
            lede="Quoted directly from interviews, with the source noted. Nothing here is paraphrased into optimism."
            id="words-title"
          />
          <div className={styles.quoteList}>
            {MAKER_QUOTES.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.06}>
                <figure className={styles.quote}>
                  <blockquote className={styles.quoteText}>“{item.quote}”</blockquote>
                  <figcaption className={styles.quoteMeta}>
                    <span>{item.name}</span>
                    <span aria-hidden="true">—</span>
                    <a href={item.href} target="_blank" rel="noreferrer noopener">
                      {item.source}
                    </a>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section theme-ink surface" aria-labelledby="economy-title">
        <div className="container">
          <SectionHead
            eyebrow="The economics"
            title={
              <>
                An art kept alive <em>by lampshades.</em>
              </>
            }
            lede="The performances no longer pay. The work that does is the craft's quieter half: décor, teaching and the occasional commission."
            id="economy-title"
          />
          <div className={styles.statGrid}>
            {ECONOMY.map((item) => (
              <Reveal key={item.title}>
                <div className={styles.statCard}>
                  <span className={styles.statFigure}>{item.figure}</span>
                  <span className={styles.statTitle}>{item.title}</span>
                  <p className={styles.statNote}>{item.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="prose" style={{ marginTop: "2rem" }}>
              Estimates of how many families still practise the craft vary by source and by what is
              counted — around forty workshops in 2019, closer to a hundred and fifty households in
              2023 if décor work is included. The trend is the same either way.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section theme-paper surface" aria-labelledby="support-title">
        <div className="container">
          <div className={styles.split}>
            <div>
              <SectionHead
                eyebrow="What helps"
                title={
                  <>
                    Four ways <em>to keep it lit.</em>
                  </>
                }
                id="support-title"
              />
              <ol className={styles.numberList}>
                {SUPPORT.map((item, index) => (
                  <Reveal as="li" key={item.title} className={styles.numberItem} delay={index * 0.04}>
                    <span className={styles.numberItem__n}>{String(index + 1).padStart(2, "0")}</span>
                    <div className={styles.numberItem__body}>
                      <h3 className={styles.numberItem__title}>{item.title}</h3>
                      <p className={styles.numberItem__text}>{item.note}</p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
            <div className={styles.sticky}>
              <Reveal delay={0.08}>
                <div className={styles.panel}>
                  <p className="eyebrow">Also making</p>
                  <ul className={styles.list} style={{ marginTop: "1.2rem" }}>
                    {ALSO_MAKING.map((name) => (
                      <li className={styles.listItem} key={name}>
                        <span className={styles.listItem__mark} aria-hidden="true" />
                        <span>{name}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={styles.ctaRow} style={{ marginTop: "1.8rem" }}>
                    <TransitionLink href="/stage" className="btn btn--solid">
                      Try the stage
                      <ArrowRight className="btn__arrow" />
                    </TransitionLink>
                    <TransitionLink href="/sources" className="text-link">
                      The programme
                      <ArrowUpRight />
                    </TransitionLink>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
