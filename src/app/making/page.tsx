import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { MakingSteps } from "@/components/making/making-steps";
import { Reveal } from "@/components/reveal";
import { PageHero, SectionHead } from "@/components/section";
import { TransitionLink } from "@/components/transition-provider";
import { MAKING_TOOLS } from "@/content/making";
import styles from "../acts.module.css";
import making from "@/components/making/making.module.css";

export const metadata: Metadata = {
  title: "The making",
  description:
    "From hide to god: the seven stages of making a Tholu Bommalata puppet — tanning, drawing, cutting, perforating, colouring, jointing and finishing.",
  alternates: { canonical: "/making" },
};

export default function MakingPage() {
  return (
    <>
      <PageHero
        eyebrow="Act III · The making"
        title={
          <>
            From hide <em>to god.</em>
          </>
        }
        lede="A puppet is made, not printed. Seven slow stages turn a dried animal skin into a character that can walk, dance and die on a lit cloth."
        meta={
          <>
            <span className="chip chip--accent">Days, not hours, per figure</span>
            <span className="chip">Hand-cut and hand-punched</span>
          </>
        }
      />

      <section className="section theme-ink surface" aria-labelledby="steps-title">
        <div className="container">
          <SectionHead
            eyebrow="The process"
            title={
              <>
                Seven stages, <em>one figure.</em>
              </>
            }
            lede="The sequence has barely changed in centuries. What follows is how a maker in Nimmalakunta still works today."
            id="steps-title"
          />
          <MakingSteps />
        </div>
      </section>

      <section className="section theme-paper surface" aria-labelledby="tools-title">
        <div className="container">
          <SectionHead
            eyebrow="The tools"
            title={
              <>
                A blade, a needle, <em>a bamboo pen.</em>
              </>
            }
            lede="The toolkit is small and cheap. The skill is in the hand that holds it, and in the years it took to steady."
            id="tools-title"
          />
          <div className={making.toolsGrid}>
            {MAKING_TOOLS.map((tool) => (
              <div className={making.tool} key={tool.name}>
                <span className={making.toolName}>{tool.name}</span>
                <span className={making.toolNote}>{tool.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section theme-ink surface" aria-label="Continue">
        <div className="container">
          <div className={styles.split}>
            <Reveal>
              <div className={styles.notice}>
                <p className={styles.notice__label}>Why it takes so long</p>
                <p className={styles.notice__text}>
                  Every hole in a figure is punched by hand, one at a time. A dense costume can carry
                  thousands. That labour is the reason a single puppet is an heirloom — and the
                  reason mass-produced imitations never quite look right in the light.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div>
                <p className="eyebrow">Next — Act IV</p>
                <h2 className="display display--3" style={{ marginTop: "1rem" }}>
                  The hands that do this work have names.
                </h2>
                <div className={styles.ctaRow} style={{ marginTop: "1.6rem" }}>
                  <TransitionLink href="/makers" className="btn btn--solid">
                    Meet the makers
                    <ArrowRight className="btn__arrow" />
                  </TransitionLink>
                  <TransitionLink href="/learn" className="text-link">
                    Make a paper version
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
