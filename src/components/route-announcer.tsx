"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ACTS, PROGRAMME } from "@/content/site";

function labelFor(pathname: string): string {
  if (pathname === "/") return "Act I, The lamp";
  const act = ACTS.find((item) => item.href !== "/" && pathname.startsWith(item.href));
  if (act) return `Act ${act.roman}, ${act.title}`;
  if (pathname.startsWith(PROGRAMME.href)) return PROGRAMME.title;
  return "Page not found";
}

export function RouteAnnouncer() {
  const pathname = usePathname();
  const [message, setMessage] = useState("");
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const timer = window.setTimeout(() => {
      setMessage(labelFor(pathname));
      const main = document.getElementById("main");
      main?.focus({ preventScroll: true });
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }, 80);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="sr-only" aria-live="polite" aria-atomic="true">
      {message}
    </div>
  );
}
