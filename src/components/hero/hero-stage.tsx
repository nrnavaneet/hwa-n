"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import styles from "./hero-stage.module.css";

const StageCanvas = dynamic(() => import("./stage-canvas"), { ssr: false });

export function HeroStage() {
  const [threeDActive, setThreeDActive] = useState(false);

  useEffect(() => {
    const narrow = window.matchMedia("(max-width: 760px)");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setThreeDActive(!narrow.matches && !motion.matches);
    };
    update();
    narrow.addEventListener("change", update);
    motion.addEventListener("change", update);
    return () => {
      narrow.removeEventListener("change", update);
      motion.removeEventListener("change", update);
    };
  }, []);

  const handleReady = useCallback(() => undefined, []);
  const handleFail = useCallback(() => setThreeDActive(false), []);

  return (
    <div className={`${styles.stage} ${threeDActive ? styles.is3d : ""}`}>
      <div className={styles.screen} aria-hidden="true" />
      <div className={styles.poster} aria-hidden="true">
        <Image
          src="/art/dancer.svg"
          alt=""
          width={1200}
          height={1500}
          priority
          unoptimized
          className={styles.puppet}
        />
      </div>
      <div className={styles.lamp} aria-hidden="true">
        <span className={styles.flame} />
      </div>
      {threeDActive ? <StageCanvas onReady={handleReady} onFail={handleFail} /> : null}
      <div className={styles.vignette} aria-hidden="true" />
      <div className={styles.curtainLeft} aria-hidden="true" />
      <div className={styles.curtainRight} aria-hidden="true" />
    </div>
  );
}
