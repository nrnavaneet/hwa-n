export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

export function roundTo(value: number, step: number): number {
  return Math.round(value / step) * step;
}

export function cn(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}

export type Point = { x: number; y: number };

export function angleBetween(pivot: Point, point: Point): number {
  return (Math.atan2(point.y - pivot.y, point.x - pivot.x) * 180) / Math.PI;
}

export function normalizeAngle(angle: number): number {
  const wrapped = ((angle + 180) % 360) - 180;
  return wrapped < -180 ? wrapped + 360 : wrapped;
}

export function clampAngle(angle: number, min: number, max: number): number {
  return clamp(normalizeAngle(angle), min, max);
}

export type ShadowOffset = { x: number; y: number; scale: number };

export function shadowFromLamp(
  puppet: Point,
  lamp: Point,
  strength = 0.22,
  minScale = 0.94,
  maxScale = 1.14,
): ShadowOffset {
  const dx = puppet.x - lamp.x;
  const dy = puppet.y - lamp.y;
  return {
    x: dx * strength,
    y: dy * strength,
    scale: clamp(1 + Math.abs(dx) / 2400 + Math.abs(dy) / 3600, minScale, maxScale),
  };
}

export function formatRoman(index: number): string {
  const numerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  return numerals[index - 1] ?? String(index);
}

export function padNumber(value: number, length = 2): string {
  return String(value).padStart(length, "0");
}

export function isFinePointer(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(pointer: fine)").matches;
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
