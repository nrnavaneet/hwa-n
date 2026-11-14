"use client";

import { useSyncExternalStore } from "react";
import { CHECKLIST } from "@/content/learn";
import styles from "./learn.module.css";

const STORAGE_KEY = "tholu.learn.checklist";
const EMPTY: number[] = [];

let cachedRaw: string | null = null;
let cachedParsed: number[] = EMPTY;
const listeners = new Set<() => void>();

function parse(raw: string | null): number[] {
  if (!raw) return EMPTY;
  try {
    const value = JSON.parse(raw);
    if (Array.isArray(value)) {
      return value.filter((item): item is number => typeof item === "number");
    }
  } catch {
    return EMPTY;
  }
  return EMPTY;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function getSnapshot(): number[] {
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    cachedParsed = parse(raw);
  }
  return cachedParsed;
}

function getServerSnapshot(): number[] {
  return EMPTY;
}

function write(next: number[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* storage unavailable */
  }
  cachedRaw = null;
  listeners.forEach((listener) => listener());
}

export function LearnChecklist() {
  const done = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = (index: number) => {
    const next = done.includes(index)
      ? done.filter((value) => value !== index)
      : [...done, index];
    write(next);
  };

  const progress = Math.round((done.length / CHECKLIST.length) * 100);

  return (
    <div className={styles.checklist}>
      <div className={styles.checklistHead}>
        <p className={styles.checklistLabel}>Your progress</p>
        <p className={styles.checklistCount}>
          {done.length} / {CHECKLIST.length} done
        </p>
      </div>
      <div
        className={styles.progress}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={CHECKLIST.length}
        aria-valuenow={done.length}
        aria-label="Steps completed"
      >
        <span className={styles.progressFill} style={{ width: `${progress}%` }} />
      </div>
      <ul className={styles.checkList}>
        {CHECKLIST.map((item, index) => {
          const checked = done.includes(index);
          return (
            <li key={item} className={styles.checkItem} data-done={checked}>
              <label className={styles.checkLabel}>
                <input
                  type="checkbox"
                  className={styles.checkInput}
                  checked={checked}
                  onChange={() => toggle(index)}
                />
                <span className={styles.checkBox} aria-hidden="true" />
                <span className={styles.checkText}>{item}</span>
              </label>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        className={styles.checkReset}
        onClick={() => write([])}
        disabled={done.length === 0}
      >
        Clear progress
      </button>
    </div>
  );
}
