"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";
import { prefersReducedMotion } from "@/lib/utils";

type Phase = "idle" | "covering" | "revealing";

type TransitionContextValue = {
  navigate: (href: string) => void;
};

const TransitionContext = createContext<TransitionContextValue>({
  navigate: () => undefined,
});

export function useTransitionNav(): TransitionContextValue {
  return useContext(TransitionContext);
}

const COVER_MS = 620;
const REVEAL_MS = 780;

export function TransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("idle");
  const pendingRef = useRef<string | null>(null);
  const pushedRef = useRef(false);
  const previousPath = useRef(pathname);

  const navigate = useCallback(
    (href: string) => {
      if (prefersReducedMotion() || typeof window === "undefined") {
        router.push(href);
        return;
      }
      if (phase !== "idle") return;
      pendingRef.current = href;
      pushedRef.current = false;
      setPhase("covering");
    },
    [phase, router],
  );

  useEffect(() => {
    if (phase === "covering" && !pushedRef.current) {
      const timer = window.setTimeout(() => {
        pushedRef.current = true;
        if (pendingRef.current) router.push(pendingRef.current);
      }, COVER_MS - 60);
      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, [phase, router]);

  useEffect(() => {
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;
    if (phase === "covering") {
      const timer = window.setTimeout(() => setPhase("revealing"), 120);
      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, [pathname, phase]);

  useEffect(() => {
    if (phase !== "revealing") return;
    const timer = window.setTimeout(() => {
      setPhase("idle");
      pendingRef.current = null;
      pushedRef.current = false;
    }, REVEAL_MS);
    return () => window.clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    if (phase === "idle") return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [phase]);

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}
      <div className="scene-veil" data-phase={phase} aria-hidden="true">
        <div className="scene-veil__panel">
          <div className="scene-veil__perf" />
          <div className="scene-veil__inner">
            <span className="scene-veil__mark">తోలు</span>
            <span className="scene-veil__word">THOLU</span>
          </div>
        </div>
      </div>
    </TransitionContext.Provider>
  );
}

type TransitionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

export function TransitionLink({ href, children, onClick, ...rest }: TransitionLinkProps) {
  const { navigate } = useTransitionNav();
  const pathname = usePathname();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
      return;
    }
    if (!href.startsWith("/") || href.startsWith("//")) return;
    const [targetPath, hash] = href.split("#");
    if (targetPath === pathname && hash) return;
    if (targetPath === pathname && !hash) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    event.preventDefault();
    navigate(href);
  };

  return (
    <Link href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
