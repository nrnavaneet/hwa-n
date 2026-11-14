"use client";

import { useEffect, useRef, useState } from "react";
import { MAKING_STEPS } from "@/content/making";
import styles from "./making.module.css";

export function MakingSteps() {
  const [active, setActive] = useState(MAKING_STEPS[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          const id = visible[0].target.getAttribute("data-step");
          if (id) setActive(id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    Object.values(sectionRefs.current).forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.stepsLayout}>
      <aside className={styles.stepsAside}>
        <p className={styles.stepsAsideLabel}>Seven stages</p>
        <ol className={styles.stepsIndex}>
          {MAKING_STEPS.map((step) => (
            <li key={step.id}>
              <button
                type="button"
                className={styles.stepsIndexItem}
                data-active={active === step.id}
                onClick={() => {
                  const node = sectionRefs.current[step.id];
                  node?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                <span className={styles.stepsIndexNum}>{step.number}</span>
                <span className={styles.stepsIndexTitle}>{step.title}</span>
              </button>
            </li>
          ))}
        </ol>
      </aside>

      <div className={styles.stepsContent}>
        {MAKING_STEPS.map((step) => (
          <section
            key={step.id}
            data-step={step.id}
            ref={(node) => {
              sectionRefs.current[step.id] = node;
            }}
            className={styles.stepBlock}
          >
            <div className={styles.stepHead}>
              <span className={styles.stepNumber}>{step.number}</span>
              <span className={styles.stepTelugu} lang="te">
                {step.telugu}
              </span>
            </div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepLede}>{step.lede}</p>
            <p className={styles.stepBody}>{step.body}</p>
            <ul className={styles.stepFacts}>
              {step.facts.map((fact) => (
                <li key={fact} className={styles.stepFact}>
                  {fact}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
