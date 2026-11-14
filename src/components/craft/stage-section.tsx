"use client";

import { useState } from "react";
import { STAGE_LAYERS } from "@/content/craft";
import styles from "./craft.module.css";

export function StageSection() {
  const [active, setActive] = useState(STAGE_LAYERS[0].id);
  const activeLayer = STAGE_LAYERS.find((layer) => layer.id === active) ?? STAGE_LAYERS[0];

  return (
    <div className={styles.crossSection}>
      <div className={styles.crossStage} data-active={active}>
        <svg viewBox="0 0 600 340" role="img" aria-label="Side view of a shadow play: audience, screen, figures, puppeteers and lamp">
          <defs>
            <radialGradient id="lampGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffd18c" stopOpacity="0.9" />
              <stop offset="45%" stopColor="#efb25f" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#efb25f" stopOpacity="0" />
            </radialGradient>
          </defs>

          <line x1="0" y1="292" x2="600" y2="292" className={styles.floor} />

          <g className={styles.layer} data-layer="audience">
            <path d="M40 292c0-16 8-24 18-24s18 8 18 24Z" className={styles.silhouette} />
            <path d="M92 292c0-20 9-30 20-30s20 10 20 30Z" className={styles.silhouette} />
            <path d="M146 292c0-14 7-22 16-22s16 8 16 22Z" className={styles.silhouette} />
            <circle cx="58" cy="258" r="10" className={styles.silhouette} />
            <circle cx="112" cy="248" r="11" className={styles.silhouette} />
            <circle cx="162" cy="262" r="9" className={styles.silhouette} />
          </g>

          <g className={styles.layer} data-layer="screen">
            <rect x="214" y="60" width="6" height="232" className={styles.screen} />
            <rect x="180" y="292" width="74" height="8" className={styles.frame} />
          </g>

          <g className={styles.layer} data-layer="figures">
            <path d="M232 292l14-96 16 96Z" className={styles.figureShadow} />
            <circle cx="246" cy="182" r="13" className={styles.figureShadow} />
          </g>

          <g className={styles.layer} data-layer="hands">
            <path d="M356 292c0-22 10-34 22-34s22 12 22 34Z" className={styles.hand} />
            <circle cx="378" cy="246" r="12" className={styles.hand} />
            <line x1="366" y1="256" x2="300" y2="200" className={styles.rod} />
            <path d="M424 292c0-20 9-30 20-30s20 10 20 30Z" className={styles.hand} />
            <circle cx="444" cy="250" r="11" className={styles.hand} />
            <line x1="436" y1="258" x2="286" y2="214" className={styles.rod} />
          </g>

          <g className={styles.layer} data-layer="sound">
            <circle cx="516" cy="250" r="12" className={styles.hand} />
            <path d="M496 292c0-20 9-30 20-30s20 10 20 30Z" className={styles.hand} />
            <ellipse cx="512" cy="272" rx="18" ry="8" className={styles.instrument} />
            <line x1="548" y1="262" x2="548" y2="292" className={styles.rod} />
            <path d="M544 262l8-12 8 12Z" className={styles.instrument} />
          </g>

          <g className={styles.layer} data-layer="lamp">
            <circle cx="564" cy="230" r="86" fill="url(#lampGlow)" />
            <path d="M548 236h32c-1 8-8 13-16 13s-15-5-16-13Z" className={styles.lamp} />
            <path d="M564 214c4 5 6 9 6 12a6 6 0 0 1-12 0c0-3 2-7 6-12Z" className={styles.flame} />
            <line x1="530" y1="212" x2="214" y2="176" className={styles.lightRay} />
            <line x1="530" y1="248" x2="214" y2="250" className={styles.lightRay} />
            <line x1="530" y1="284" x2="214" y2="288" className={styles.lightRay} />
          </g>
        </svg>
      </div>

      <div className={styles.crossTabs}>
        <div className={styles.tabList} role="tablist" aria-label="Parts of the stage">
          {STAGE_LAYERS.map((layer) => (
            <button
              key={layer.id}
              role="tab"
              id={`tab-${layer.id}`}
              aria-selected={active === layer.id}
              aria-controls={`panel-${layer.id}`}
              className={styles.tab}
              data-active={active === layer.id}
              onClick={() => setActive(layer.id)}
              type="button"
            >
              <span className={styles.tabShort}>{layer.short}</span>
              <span className={styles.tabLabel}>{layer.label}</span>
            </button>
          ))}
        </div>
        <div
          className={styles.tabPanel}
          role="tabpanel"
          id={`panel-${activeLayer.id}`}
          aria-labelledby={`tab-${activeLayer.id}`}
          key={activeLayer.id}
        >
          <p className={styles.tabPanelLabel}>{activeLayer.label}</p>
          <p className={styles.tabPanelText}>{activeLayer.note}</p>
        </div>
      </div>
    </div>
  );
}
