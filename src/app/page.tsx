import type { Metadata } from "next";
import { HeroStage } from "@/components/hero/hero-stage";
import { ArrowRight, ArrowUpRight, LampMark, PerfDivider } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHead } from "@/components/section";
import { TransitionLink } from "@/components/transition-provider";
import { ACTS, SITE } from "@/content/site";
import styles from "./home.module.css";

export const metadata: Metadata = {
  title: "A cinema older than cinema",
  description:
    "Tholu Bommalata is a leather shadow theatre from Andhra Pradesh. Step behind the screen, meet the families of Nimmalakunta, and learn a two-thousand-year-old craft.",
  alternates: { canonical: "/" },
};

const MARQUEE = [
  "Tholu Bommalata",
  "Leather shadow play",
  "Nimmalakunta",
  "Andhra Pradesh",
  "Two thousand years",
];

export default function Home() {
  return (
    <>
      <section className={`${styles.hero} theme-ink surface`} aria-labelledby="hero-title">
        <div className={styles.heroStage}>
          <HeroStage />
        </div>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroTop}>
            <p className="eyebrow">Act I · The lamp</p>
            <p className={`telugu ${styles.heroTelugu}`} lang="te">
              {SITE.telugu}
            </p>
          </div>
          <h1 className={`display ${styles.heroTitle}`} id="hero-title">
            <span>A cinema</span>
            <span>
              <em>older</em> than
            </span>
            <span>cinema.</span>
          </h1>
          <p className={`lede ${styles.heroLede}`}>
            In Andhra Pradesh, a lamp, a white cloth and a few kilos of painted hide have done
            what cinema does — tell a story in the dark — for more than two thousand years.
          </p>
          <div className={styles.heroActions}>
            <TransitionLink href="/craft" className="btn btn--solid">
              Step behind the screen
              <ArrowRight className="btn__arrow" />
            </TransitionLink>
            <TransitionLink href="/stage" className="text-link">
              Try the stage
              <ArrowUpRight />
            </TransitionLink>
          </div>
          <div className={styles.heroFoot}>
            <span className={styles.heroScroll}>Scroll to begin</span>
            <span className={styles.heroMeta}>Nimmalakunta · Andhra Pradesh</span>
            <span className={styles.heroMeta}>2,000+ years · GI 2008</span>
          </div>
        </div>
      </section>

      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[0, 1].map((pass) => (
            <div className={styles.marqueePass} key={pass}>
              {MARQUEE.map((word) => (
                <span className={styles.marqueeItem} key={`${pass}-${word}`}>
                  {word}
                  <span className={styles.marqueeDot} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className={`section theme-paper surface ${styles.manifesto}`} aria-labelledby="screen-title">
        <div className="container">
          <div className={styles.manifestoGrid}>
            <aside className={styles.manifestoAside}>
              <Reveal>
                <p className="mono">Field note 01 / 06</p>
              </Reveal>
              <Reveal delay={0.05}>
                <span className={styles.asideTelugu} lang="te">
                  తెర
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <p className={styles.asideLabel}>The screen</p>
              </Reveal>
            </aside>
            <div className={styles.manifestoMain}>
              <Reveal>
                <h2 className="display display--2" id="screen-title">
                  A whole world, <em>held up to a flame.</em>
                </h2>
              </Reveal>
              <div className={styles.manifestoBody}>
                <Reveal delay={0.06}>
                  <p className="prose">
                    Tholu Bommalata is a shadow theatre from the drylands of Andhra Pradesh. Its
                    figures are cut from tanned goat hide, painted with vegetable and mineral
                    colour, pierced with thousands of tiny holes, and jointed at the shoulders,
                    elbows, hips and knees. Held against a cloth screen and lit from behind, they
                    breathe.
                  </p>
                </Reveal>
                <Reveal delay={0.12}>
                  <p className="prose">
                    A single night can run six hours or more. Episodes from the{" "}
                    <em>Ranganatha Ramayana</em> unfold in Telugu verse, sung and spoken by a
                    troupe of six to eight. The screen never shows the hands at work — only the
                    figures, and the story they carry.
                  </p>
                </Reveal>
              </div>
              <Reveal delay={0.16}>
                <div className={styles.statRow}>
                  <div className={styles.stat}>
                    <span className={styles.statFigure}>2,000+</span>
                    <span className={styles.statLabel}>years of shadow theatre in India</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statFigure}>1</span>
                    <span className={styles.statLabel}>lamp between the figures and the story</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statFigure}>2008</span>
                    <span className={styles.statLabel}>Geographical Indication, Nimmalakunta</span>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <TransitionLink href="/craft" className="text-link">
                  Enter the craft
                  <ArrowUpRight />
                </TransitionLink>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className={`section theme-ink surface ${styles.playbill}`} aria-labelledby="playbill-title">
        <div className={styles.playbillGlow} aria-hidden="true" />
        <div className="container">
          <SectionHead
            eyebrow="The playbill"
            title={
              <>
                Six acts, <em>one lamp.</em>
              </>
            }
            lede="The guide is arranged as a performance. Walk in at any act — but the lamp is the start."
            id="playbill-title"
          />
          <ol className={styles.actList}>
            {ACTS.map((act, index) => (
              <Reveal as="li" key={act.href} delay={index * 0.04}>
                <TransitionLink href={act.href} className={styles.actRow}>
                  <span className={styles.actNumber}>{act.number}</span>
                  <span className={styles.actTitle}>{act.title}</span>
                  <span className={styles.actKicker}>{act.kicker}</span>
                  <span className={styles.actBlurb}>{act.blurb}</span>
                  <span className={styles.actArrow} aria-hidden="true">
                    <ArrowRight />
                  </span>
                </TransitionLink>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className={`section theme-paper surface ${styles.stakes}`} aria-labelledby="stakes-title">
        <div className="container">
          <div className={styles.stakesGrid}>
            <div className={styles.stakesCopy}>
              <Reveal>
                <p className="eyebrow">The stakes</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="display display--2" id="stakes-title">
                  A craft does not disappear <em>all at once.</em>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="prose">
                  The all-night performances went first. By 2019, <cite>The Hindu</cite> reported
                  that roughly forty families in Nimmalakunta still produced leather work, but only
                  ten to fifteen could stage a show. A handful of artists carry the repertoire. The
                  hide is still being cut. The question is whether an audience will be there to see
                  it.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <TransitionLink href="/makers" className="text-link">
                  Meet the makers
                  <ArrowUpRight />
                </TransitionLink>
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <div className={styles.ledger}>
                <div className={styles.ledgerHead}>
                  <span className="mono">The trade today</span>
                  <LampMark className={styles.ledgerMark} />
                </div>
                <div className={styles.ledgerRow}>
                  <span className={styles.ledgerFigure}>40</span>
                  <span className={styles.ledgerText}>
                    families still making leather goods in Nimmalakunta
                  </span>
                </div>
                <div className={styles.ledgerRow}>
                  <span className={styles.ledgerFigure}>10–15</span>
                  <span className={styles.ledgerText}>troupes able to stage a full performance</span>
                </div>
                <div className={styles.ledgerRow}>
                  <span className={styles.ledgerFigure}>6–8</span>
                  <span className={styles.ledgerText}>performers needed for one night of play</span>
                </div>
                <p className={styles.ledgerNote}>
                  Figures from reporting in <cite>The Hindu</cite>, 2019. Sources are listed in{" "}
                  <TransitionLink href="/sources" className={styles.inlineLink}>
                    the programme
                  </TransitionLink>
                  .
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={`section theme-ink surface ${styles.invite}`} aria-labelledby="invite-title">
        <div className={styles.inviteGlow} aria-hidden="true" />
        <div className="container">
          <div className={styles.inviteTop}>
            <Reveal>
              <p className="eyebrow">The invitation</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display display--2" id="invite-title">
                There is more <em>behind the cloth.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className={`lede ${styles.inviteLede}`}>
                See a performance, hold a figure, or make your first shadow tonight. The craft is
                not a museum. It is a room with a screen in it, and you are allowed in.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className={styles.inviteActions}>
                <TransitionLink href="/makers" className="btn btn--solid">
                  Meet the makers
                  <ArrowUpRight className="btn__arrow" />
                </TransitionLink>
                <TransitionLink href="/learn" className="btn">
                  Make one yourself
                  <ArrowUpRight className="btn__arrow" />
                </TransitionLink>
              </div>
            </Reveal>
          </div>
          <div className={styles.quickIndex}>
            <TransitionLink href="/making" className={styles.quickItem}>
              <span className="mono">01 — The making</span>
              <span>Seven stages from hide to god</span>
              <ArrowRight className={styles.quickArrow} />
            </TransitionLink>
            <TransitionLink href="/stage" className={styles.quickItem}>
              <span className="mono">02 — The stage</span>
              <span>Move the lamp, pose the dancer</span>
              <ArrowRight className={styles.quickArrow} />
            </TransitionLink>
            <TransitionLink href="/sources" className={styles.quickItem}>
              <span className="mono">03 — The programme</span>
              <span>Sources, glossary, notes</span>
              <ArrowRight className={styles.quickArrow} />
            </TransitionLink>
          </div>
        </div>
        <PerfDivider className={styles.invitePerf} />
      </section>
    </>
  );
}
