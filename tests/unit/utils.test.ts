import { describe, expect, it } from "vitest";
import {
  angleBetween,
  clamp,
  clampAngle,
  formatRoman,
  lerp,
  normalizeAngle,
  padNumber,
  shadowFromLamp,
} from "@/lib/utils";

describe("clamp", () => {
  it("keeps a value inside the range", () => {
    expect(clamp(5, 0, 10)).toBe(5);
    expect(clamp(-3, 0, 10)).toBe(0);
    expect(clamp(42, 0, 10)).toBe(10);
  });
});

describe("lerp", () => {
  it("interpolates between two values", () => {
    expect(lerp(0, 10, 0)).toBe(0);
    expect(lerp(0, 10, 1)).toBe(10);
    expect(lerp(0, 10, 0.5)).toBe(5);
  });
});

describe("angleBetween", () => {
  it("returns the angle from a pivot to a point in degrees", () => {
    expect(angleBetween({ x: 0, y: 0 }, { x: 1, y: 0 })).toBe(0);
    expect(angleBetween({ x: 0, y: 0 }, { x: 0, y: 1 })).toBe(90);
    expect(angleBetween({ x: 0, y: 0 }, { x: -1, y: 0 })).toBe(180);
  });
});

describe("normalizeAngle", () => {
  it("wraps angles into the -180 to 180 range", () => {
    expect(normalizeAngle(370)).toBe(10);
    expect(normalizeAngle(-370)).toBe(-10);
    expect(normalizeAngle(180)).toBe(-180);
  });
});

describe("clampAngle", () => {
  it("normalizes and then clamps", () => {
    expect(clampAngle(30, -45, 45)).toBe(30);
    expect(clampAngle(120, -45, 45)).toBe(45);
    expect(clampAngle(-120, -45, 45)).toBe(-45);
  });
});

describe("shadowFromLamp", () => {
  it("offsets the shadow away from the lamp and scales within bounds", () => {
    const shadow = shadowFromLamp({ x: 0, y: 0 }, { x: 100, y: 0 });
    expect(shadow.x).toBeLessThan(0);
    expect(shadow.scale).toBeGreaterThanOrEqual(0.94);
    expect(shadow.scale).toBeLessThanOrEqual(1.14);
  });

  it("produces no offset when the lamp sits on the figure", () => {
    const shadow = shadowFromLamp({ x: 50, y: 50 }, { x: 50, y: 50 });
    expect(shadow.x).toBe(0);
    expect(shadow.y).toBe(0);
    expect(shadow.scale).toBe(1);
  });
});

describe("formatRoman", () => {
  it("formats the first ten numbers and falls back after", () => {
    expect(formatRoman(1)).toBe("I");
    expect(formatRoman(6)).toBe("VI");
    expect(formatRoman(10)).toBe("X");
    expect(formatRoman(11)).toBe("11");
  });
});

describe("padNumber", () => {
  it("pads with leading zeros", () => {
    expect(padNumber(3)).toBe("03");
    expect(padNumber(12)).toBe("12");
    expect(padNumber(7, 3)).toBe("007");
  });
});
