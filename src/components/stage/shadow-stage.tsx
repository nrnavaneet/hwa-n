"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { clamp } from "@/lib/utils";
import styles from "./stage.module.css";

type Pose = {
  id: string;
  label: string;
  arm: number;
  leg: number;
  lean: number;
};

const POSES: Pose[] = [
  { id: "stand", label: "Stand", arm: 6, leg: 4, lean: 0 },
  { id: "walk", label: "Walk", arm: 26, leg: 22, lean: -3 },
  { id: "dance", label: "Dance", arm: 42, leg: 30, lean: 6 },
  { id: "bow", label: "Bow", arm: -20, leg: -6, lean: 12 },
  { id: "leap", label: "Leap", arm: 54, leg: -26, lean: -9 },
];

function Dancer({
  arm,
  leg,
  lean,
  variant,
}: {
  arm: number;
  leg: number;
  lean: number;
  variant: "figure" | "shadow";
}) {
  return (
    <svg
      viewBox="0 0 200 340"
      className={variant === "shadow" ? styles.shadowFigure : styles.liveFigure}
      aria-hidden="true"
      focusable="false"
    >
      <g transform={`rotate(${lean} 100 322)`}>
        <path d="M70 206h60l16 54H54Z" />
        <g transform={`rotate(${leg} 100 214)`}>
          <path d="M84 214l-2 54-2 54h18l2-54 2-54Z" />
        </g>
        <g transform={`rotate(${leg * -0.7} 100 214)`}>
          <path d="M100 214l2 54 2 54h18l-2-54-2-54Z" />
        </g>
        <path d="M100 118c-19 2-27 30-25 68l2 30h46l2-30c2-38-6-66-25-68Z" />
        <g transform={`rotate(${arm} 100 128)`}>
          <path d="M98 130l-3 46-3 32h16l-3-32-1-46Z" />
          <circle cx="101" cy="212" r="7" />
        </g>
        <circle cx="100" cy="90" r="20" />
        <path d="M78 82l-8-20 16 8Z" />
        <path d="M100 58l7-20 7 20Z" />
        <path d="M122 82l8-20-16 8Z" />
      </g>
    </svg>
  );
}

export function ShadowStage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 720, h: 480 });
  const [lamp, setLamp] = useState({ x: 78, y: 40 });
  const [pose, setPose] = useState<Pose>(POSES[1]);
  const draggingRef = useRef(false);

  useEffect(() => {
    const node = stageRef.current;
    if (!node) return;
    const observer = new ResizeObserver((entries) => {
      const rect = entries[0]?.contentRect;
      if (rect) setSize({ w: rect.width, h: rect.height });
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const moveLamp = useCallback((clientX: number, clientY: number) => {
    const node = stageRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = clamp(((clientX - rect.left) / rect.width) * 100, 6, 94);
    const y = clamp(((clientY - rect.top) / rect.height) * 100, 8, 88);
    setLamp({ x, y });
  }, []);

  const onPointerDown = (event: ReactPointerEvent<HTMLButtonElement>) => {
    draggingRef.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    moveLamp(event.clientX, event.clientY);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLButtonElement>) => {
    if (!draggingRef.current) return;
    moveLamp(event.clientX, event.clientY);
  };

  const onPointerUp = (event: ReactPointerEvent<HTMLButtonElement>) => {
    draggingRef.current = false;
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const onLampKey = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    const step = event.shiftKey ? 6 : 2.5;
    if (event.key === "ArrowLeft") setLamp((l) => ({ ...l, x: clamp(l.x - step, 6, 94) }));
    else if (event.key === "ArrowRight") setLamp((l) => ({ ...l, x: clamp(l.x + step, 6, 94) }));
    else if (event.key === "ArrowUp") setLamp((l) => ({ ...l, y: clamp(l.y - step, 8, 88) }));
    else if (event.key === "ArrowDown") setLamp((l) => ({ ...l, y: clamp(l.y + step, 8, 88) }));
    else return;
    event.preventDefault();
  };

  const puppetX = size.w * 0.5;
  const puppetY = size.h * 0.66;
  const lampXpx = (lamp.x / 100) * size.w;
  const lampYpx = (lamp.y / 100) * size.h;
  const dx = puppetX - lampXpx;
  const dy = puppetY - lampYpx;
  const distNorm = clamp(Math.hypot(dx, dy) / Math.max(size.w, 1), 0, 1.2);
  const shadowScale = clamp(1.38 - distNorm * 0.72, 0.82, 1.42);
  const shadowBlur = clamp(2 + distNorm * 12, 2, 15);
  const offsetX = clamp(dx * 0.16, -110, 110);
  const offsetY = clamp(dy * 0.1, -70, 70);

  const shadowStyle = {
    transform: `translate(${offsetX}px, ${offsetY}px) scale(${shadowScale})`,
    filter: `blur(${shadowBlur}px)`,
    opacity: clamp(0.96 - distNorm * 0.22, 0.58, 0.96),
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.stage} ref={stageRef}>
        <div className={styles.screen} aria-hidden="true" />
        <div
          className={styles.lampGlow}
          aria-hidden="true"
          style={{ left: `${lamp.x}%`, top: `${lamp.y}%` }}
        />
        <div className={styles.figureSlot}>
          <div className={styles.shadowLayer} style={shadowStyle}>
            <Dancer arm={pose.arm} leg={pose.leg} lean={pose.lean} variant="shadow" />
          </div>
          <div className={styles.liveLayer}>
            <Dancer arm={pose.arm} leg={pose.leg} lean={pose.lean} variant="figure" />
          </div>
        </div>
        <button
          type="button"
          className={styles.lamp}
          style={{ left: `${lamp.x}%`, top: `${lamp.y}%` }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onKeyDown={onLampKey}
          aria-label={`The lamp. Horizontal ${Math.round(lamp.x)} percent, vertical ${Math.round(lamp.y)} percent. Use arrow keys to move it.`}
        >
          <span className={styles.lampFlame} aria-hidden="true" />
          <span className={styles.lampBowl} aria-hidden="true" />
        </button>
        <p className={styles.stageHint} aria-hidden="true">
          Drag the lamp
        </p>
      </div>

      <div className={styles.controls}>
        <div className={styles.controlGroup}>
          <p className={styles.controlLabel}>Pose</p>
          <div className={styles.poseRow}>
            {POSES.map((item) => (
              <button
                key={item.id}
                type="button"
                className={styles.poseButton}
                data-active={pose.id === item.id}
                onClick={() => setPose(item)}
                aria-pressed={pose.id === item.id}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <label className={styles.rangeField}>
          <span className={styles.rangeLabel}>
            Arm <span className={styles.rangeValue}>{pose.arm}°</span>
          </span>
          <input
            className="range"
            type="range"
            min={-40}
            max={70}
            value={pose.arm}
            onChange={(event) => setPose((p) => ({ ...p, id: "custom", arm: Number(event.target.value) }))}
            style={{ "--range-fill": `${((pose.arm + 40) / 110) * 100}%` } as CSSProperties}
          />
        </label>

        <label className={styles.rangeField}>
          <span className={styles.rangeLabel}>
            Leg <span className={styles.rangeValue}>{pose.leg}°</span>
          </span>
          <input
            className="range"
            type="range"
            min={-40}
            max={60}
            value={pose.leg}
            onChange={(event) => setPose((p) => ({ ...p, id: "custom", leg: Number(event.target.value) }))}
            style={{ "--range-fill": `${((pose.leg + 40) / 100) * 100}%` } as CSSProperties}
          />
        </label>

        <label className={styles.rangeField}>
          <span className={styles.rangeLabel}>
            Lean <span className={styles.rangeValue}>{pose.lean}°</span>
          </span>
          <input
            className="range"
            type="range"
            min={-16}
            max={18}
            value={pose.lean}
            onChange={(event) => setPose((p) => ({ ...p, id: "custom", lean: Number(event.target.value) }))}
            style={{ "--range-fill": `${((pose.lean + 16) / 34) * 100}%` } as CSSProperties}
          />
        </label>

        <button
          type="button"
          className={styles.reset}
          onClick={() => {
            setPose(POSES[1]);
            setLamp({ x: 78, y: 40 });
          }}
        >
          Reset the scene
        </button>
      </div>

      <p className="sr-only" aria-live="polite">
        Pose {pose.id === "custom" ? "custom" : pose.label}.
      </p>
    </div>
  );
}
