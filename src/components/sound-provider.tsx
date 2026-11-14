"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type SoundState = {
  enabled: boolean;
  toggle: () => void;
  chime: (frequency?: number) => void;
};

const SoundContext = createContext<SoundState>({
  enabled: false,
  toggle: () => undefined,
  chime: () => undefined,
});

export function useSound(): SoundState {
  return useContext(SoundContext);
}

type Drone = {
  ctx: AudioContext;
  master: GainNode;
  nodes: OscillatorNode[];
};

export function SoundProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  const droneRef = useRef<Drone | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const AudioCtor =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtor) return;
    const ctx = new AudioCtor();
    const master = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 520;
    filter.Q.value = 0.6;
    master.gain.value = 0;
    master.connect(filter);
    filter.connect(ctx.destination);

    const frequencies = [110, 164.81, 220];
    const gains = [0.3, 0.16, 0.08];
    const oscillators = frequencies.map((frequency, index) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = index === 0 ? "sine" : "triangle";
      osc.frequency.value = frequency;
      osc.detune.value = index === 1 ? 4 : index === 2 ? -6 : 0;
      gain.gain.value = gains[index];
      osc.connect(gain);
      gain.connect(master);
      osc.start();
      return osc;
    });

    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.frequency.value = 0.07;
    lfoGain.gain.value = 0.006;
    lfo.connect(lfoGain);
    lfoGain.connect(master.gain);
    lfo.start();
    oscillators.push(lfo);

    const now = ctx.currentTime;
    master.gain.setValueAtTime(0, now);
    master.gain.linearRampToValueAtTime(0.038, now + 1.6);

    droneRef.current = { ctx, master, nodes: oscillators };

    const onVisibility = () => {
      if (!droneRef.current) return;
      if (document.hidden) void droneRef.current.ctx.suspend();
      else void droneRef.current.ctx.resume();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      const drone = droneRef.current;
      droneRef.current = null;
      if (!drone) return;
      const stopAt = drone.ctx.currentTime + 0.5;
      drone.master.gain.cancelScheduledValues(drone.ctx.currentTime);
      drone.master.gain.setValueAtTime(drone.master.gain.value, drone.ctx.currentTime);
      drone.master.gain.linearRampToValueAtTime(0, stopAt);
      drone.nodes.forEach((node) => {
        try {
          node.stop(stopAt + 0.05);
        } catch {
          /* already stopped */
        }
      });
      window.setTimeout(() => {
        void drone.ctx.close();
      }, 700);
    };
  }, [enabled]);

  const toggle = useCallback(() => {
    const supported =
      typeof window !== "undefined" &&
      Boolean(
        window.AudioContext ??
          (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext,
      );
    if (!supported) return;
    setEnabled((value) => !value);
  }, []);

  const chime = useCallback((frequency = 523.25) => {
    const drone = droneRef.current;
    if (!drone) return;
    const { ctx, master } = drone;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.value = frequency;
    const now = ctx.currentTime;
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.12, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.1);
    osc.connect(gain);
    gain.connect(master);
    osc.start(now);
    osc.stop(now + 1.2);
  }, []);

  return (
    <SoundContext.Provider value={{ enabled, toggle, chime }}>
      {children}
      <div className="sr-only" aria-live="polite">
        {enabled ? "Sound on" : "Sound off"}
      </div>
    </SoundContext.Provider>
  );
}

export function SoundToggle({ className }: { className?: string }) {
  const { enabled, toggle } = useSound();
  return (
    <button
      type="button"
      className={`sound-toggle ${enabled ? "is-on" : ""} ${className ?? ""}`.trim()}
      onClick={toggle}
      aria-pressed={enabled}
      aria-label={enabled ? "Sound on — turn off" : "Sound off — turn on"}
    >
      <span className="sound-toggle__bars" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span className="sound-toggle__label">{enabled ? "Sound on" : "Sound off"}</span>
    </button>
  );
}
