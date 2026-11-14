"use client";

import { useState } from "react";
import { PUPPET_PARTS } from "@/content/craft";
import styles from "./craft.module.css";

export function PuppetAnatomy() {
  const [active, setActive] = useState(PUPPET_PARTS[0].id);
  const part = PUPPET_PARTS.find((item) => item.id === active) ?? PUPPET_PARTS[0];

  return (
    <div className={styles.anatomy} data-active={active}>
      <div className={styles.anatomyFigure}>
        <svg viewBox="0 0 320 460" role="img" aria-label="Parts of a leather shadow puppet">
          <defs>
            <linearGradient id="hide" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#efb25f" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#d05a3c" stopOpacity="0.85" />
            </linearGradient>
          </defs>

          <g className={styles.part} data-part="colour" fill="url(#hide)">
            <path d="M160 96c-26 0-44 18-46 44-2 30 6 58 6 92 0 40-10 78-10 78h100s-10-38-10-78c0-34 8-62 6-92-2-26-20-44-46-44Z" />
            <path d="M114 188c-20 6-40 22-52 46-8 16-12 34-10 48l14 2c2-16 8-34 20-48 12-14 24-22 34-26Z" />
            <path d="M206 188c20 6 40 22 52 46 8 16 12 34 10 48l-14 2c-2-16-8-34-20-48-12-14-24-22-34-26Z" />
            <path d="M132 314c-8 26-14 58-14 92h22c0-30 6-58 12-78Z" />
            <path d="M188 314c8 26 14 58 14 92h-22c0-30-6-58-12-78Z" />
          </g>

          <g className={styles.part} data-part="rods">
            <line x1="160" y1="120" x2="160" y2="404" className={styles.rodLine} />
            <line x1="92" y1="150" x2="72" y2="250" className={styles.rodLine} />
          </g>

          <g className={styles.part} data-part="perforations">
            {Array.from({ length: 46 }).map((_, index) => {
              const col = index % 8;
              const row = Math.floor(index / 8);
              return (
                <circle
                  key={index}
                  cx={128 + col * 9}
                  cy={200 + row * 13}
                  r="1.7"
                  className={styles.hole}
                />
              );
            })}
          </g>

          <g className={styles.part} data-part="joints">
            <circle cx="160" cy="188" r="4.5" className={styles.joint} />
            <circle cx="108" cy="196" r="4.5" className={styles.joint} />
            <circle cx="96" cy="252" r="4.5" className={styles.joint} />
            <circle cx="212" cy="196" r="4.5" className={styles.joint} />
            <circle cx="224" cy="252" r="4.5" className={styles.joint} />
            <circle cx="146" cy="332" r="4.5" className={styles.joint} />
            <circle cx="174" cy="332" r="4.5" className={styles.joint} />
          </g>

          <g className={styles.part} data-part="head">
            <path d="M160 44c-18 0-30 12-30 28 0 12 6 22 16 27l-2 22h32l-2-22c10-5 16-15 16-27 0-16-12-28-30-28Z" className={styles.head} />
            <path d="M126 74c-10 4-16 14-16 26 0 8 3 15 8 20l12-8c-3-4-5-8-5-13 0-7 3-13 9-17Z" className={styles.head} />
            <path d="M194 74c10 4 16 14 16 26 0 8-3 15-8 20l-12-8c3-4 5-8 5-13 0-7-3-13-9-17Z" className={styles.head} />
            <path d="M130 58l-8-16 14 6Z" className={styles.crown} />
            <path d="M160 34l6-18 6 18Z" className={styles.crown} />
            <path d="M190 58l8-16-14 6Z" className={styles.crown} />
          </g>

          <g className={styles.part} data-part="eyes">
            <ellipse cx="150" cy="82" rx="5" ry="3.4" className={styles.eye} />
            <ellipse cx="172" cy="82" rx="5" ry="3.4" className={styles.eye} />
            <circle cx="150" cy="82" r="1.8" className={styles.pupil} />
            <circle cx="172" cy="82" r="1.8" className={styles.pupil} />
          </g>
        </svg>
      </div>

      <div className={styles.anatomyList}>
        <div className={styles.anatomyNote}>
          <p className={styles.tabPanelLabel}>{part.name}</p>
          {part.telugu ? (
            <p className={styles.anatomyTelugu} lang="te">
              {part.telugu}
            </p>
          ) : null}
          <p className={styles.tabPanelText}>{part.note}</p>
        </div>
        <ul className={styles.anatomyButtons}>
          {PUPPET_PARTS.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={styles.anatomyButton}
                data-active={active === item.id}
                onClick={() => setActive(item.id)}
                aria-pressed={active === item.id}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
