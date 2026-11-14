import type { Metadata } from "next";
import { ArrowUpRight } from "@/components/icons";
import { LearnChecklist } from "@/components/learn/learn-checklist";
import { Reveal } from "@/components/reveal";
import { PageHero, SectionHead } from "@/components/section";
import { TransitionLink } from "@/components/transition-provider";
import { LEARN_STEPS, LIGHT_RULES, MATERIALS, SAFETY } from "@/content/learn";
import styles from "../acts.module.css";
import learn from "@/components/learn/learn.module.css";

export const metadata: Metadata = {
  title: "Learn it",
  description:
    "Make your first shadow puppet tonight: eight steps with cardboard, a split pin and a lamp, plus free printable templates and a progress checklist.",
  alternates: { canonical: "/learn" },
};

const PATTERNS = [
  { name: "The dancer", href: "/patterns/dancer.svg", note: "A jointed figure with a separate arm and leg." },
  { name: "The deer", href: "/patterns/deer.svg", note: "An animal with a swinging front leg for a walk." },
];

export default function LearnPage() {
  return (
    <>
      <PageHero
        eyebrow="Act VI · Learn it"
        title={
          <>
            Your first <em>evening.</em>
          </>
        }
        lede="You do not need hide, a needle or a village. You need a cereal box, a split pin and a lamp. In one evening you can put on a shadow play."
        meta={
          <>
            <span className="chip chip--accent">No special tools</span>
            <span className="chip">Printable templates</span>
          </>
        }
      />

      <section className="section theme-ink surface" aria-labelledby="lesson-title">
        <div className="container">
          <SectionHead
            eyebrow="The lesson"
            title={
              <>
                Eight steps <em>to a shadow.</em>
              </>
            }
            lede="This is a paper-and-card version of the real craft. The joints, the rods and the light all work the same way — only the material is easier to find."
            id="lesson-title"
          />
          <div className={learn.lessonGrid}>
            <div className={styles.sticky}>
              <Reveal>
                <div>
                  <p className="eyebrow" style={{ marginBottom: "1.2rem" }}>
                    What you need
                  </p>
                  <ul className={learn.materials}>
                    {MATERIALS.map((item) => (
                      <li className={learn.materialItem} key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className={styles.notice} style={{ marginTop: "1.8rem" }}>
                    <p className={styles.notice__label}>Stay safe</p>
                    <ul className={styles.list} style={{ marginTop: "0.6rem" }}>
                      {SAFETY.map((item) => (
                        <li className={styles.listItem} key={item}>
                          <span className={styles.listItem__mark} aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
            <ol className={learn.stepList}>
              {LEARN_STEPS.map((step) => (
                <Reveal as="li" key={step.id} className={learn.step}>
                  <span className={learn.stepNum}>{step.number}</span>
                  <div className={learn.stepBody}>
                    <h3 className={learn.stepTitle}>{step.title}</h3>
                    <p className={learn.stepText}>{step.body}</p>
                    <p className={learn.stepTip}>{step.tip}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section theme-paper surface" aria-labelledby="light-title">
        <div className="container">
          <SectionHead
            eyebrow="The physics"
            title={
              <>
                Three rules <em>of the light.</em>
              </>
            }
            lede="Once you know these, you can direct your own show."
            id="light-title"
          />
          <div className={styles.cardGrid}>
            {LIGHT_RULES.map((rule, index) => (
              <Reveal key={rule.title} delay={index * 0.05}>
                <div className={styles.card}>
                  <span className={styles.cardIndex}>{String(index + 1).padStart(2, "0")}</span>
                  <span className={styles.cardTitle}>{rule.title}</span>
                  <span className={styles.cardNote}>{rule.note}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section theme-ink surface" aria-labelledby="checklist-title">
        <div className="container">
          <div className={styles.split}>
            <div>
              <SectionHead
                eyebrow="Track it"
                title={
                  <>
                    Your checklist, <em>kept on this device.</em>
                  </>
                }
                lede="Tick each step as you go. The list is saved in your browser only — nothing is sent anywhere."
                id="checklist-title"
              />
              <div className={learn.patternGrid}>
                {PATTERNS.map((pattern) => (
                  <div className={learn.patternCard} key={pattern.name}>
                    <div className={learn.patternPreview} aria-hidden="true">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={pattern.href} alt="" width={160} height={200} />
                    </div>
                    <span className={learn.patternName}>{pattern.name}</span>
                    <span className={styles.cardNote}>{pattern.note}</span>
                    <a className="text-link" href={pattern.href} download>
                      Download template
                      <ArrowUpRight />
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <Reveal delay={0.08}>
              <LearnChecklist />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section theme-paper surface" aria-label="Continue">
        <div className="container">
          <Reveal>
            <div className={styles.panel}>
              <p className="eyebrow">You have reached the end of the play</p>
              <h2 className="display display--3" style={{ marginTop: "1rem" }}>
                The lamp is still lit. Someone has to stand behind the screen.
              </h2>
              <p className="prose" style={{ marginTop: "1rem" }}>
                If you make one figure, show it to someone. That is how the craft has always
                travelled — hand to hand, night to night.
              </p>
              <div className={styles.ctaRow} style={{ marginTop: "1.6rem" }}>
                <TransitionLink href="/makers" className="btn btn--solid">
                  Support the makers
                  <ArrowUpRight className="btn__arrow" />
                </TransitionLink>
                <TransitionLink href="/sources" className="btn">
                  The programme
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
