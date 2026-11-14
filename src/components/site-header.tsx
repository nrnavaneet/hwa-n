"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ACTS, PROGRAMME } from "@/content/site";
import { LampMark, MenuIcon } from "@/components/icons";
import { SoundToggle } from "@/components/sound-provider";
import { TransitionLink } from "@/components/transition-provider";
import { cn } from "@/lib/utils";

const DESKTOP_NAV = ACTS.slice(1).map((act) => ({
  href: act.href,
  label: act.nav,
  roman: act.roman,
}));

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
      if (event.key !== "Tab") return;
      const panel = panelRef.current;
      if (!panel) return;
      const focusable = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    window.setTimeout(() => menuButtonRef.current?.focus(), 20);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className={cn("site-header", scrolled && "is-scrolled", open && "menu-open")}>
        <div className="site-header__inner">
          <TransitionLink href="/" className="wordmark" aria-label="THOLU — home">
            <LampMark className="wordmark__mark" />
            <span className="wordmark__stack">
              <span className="wordmark__name">THOLU</span>
              <span className="wordmark__telugu" lang="te">
                తోలు బొమ్మలాట
              </span>
            </span>
          </TransitionLink>

          <nav className="desk-nav" aria-label="Main">
            {DESKTOP_NAV.map((item) => (
              <TransitionLink
                key={item.href}
                href={item.href}
                className={cn("desk-nav__link", isActive(item.href) && "is-active")}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                <span className="desk-nav__roman">{item.roman}</span>
                {item.label}
              </TransitionLink>
            ))}
          </nav>

          <div className="header-actions">
            <TransitionLink
              href={PROGRAMME.href}
              className={cn("programme-link", isActive(PROGRAMME.href) && "is-active")}
              aria-current={isActive(PROGRAMME.href) ? "page" : undefined}
            >
              {PROGRAMME.nav}
            </TransitionLink>
            <SoundToggle className="header-sound" />
            <button
              ref={menuButtonRef}
              type="button"
              className="menu-button"
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            ref={panelRef}
            id="site-menu"
            className="menu-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={reduced ? { opacity: 1 } : { clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
            exit={reduced ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: reduced ? 0 : 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="menu-panel__top">
              <span className="menu-panel__label">The playbill</span>
              <button
                ref={closeButtonRef}
                type="button"
                className="menu-close"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <span aria-hidden="true">Close</span>
                <span className="menu-close__x" aria-hidden="true" />
              </button>
            </div>

            <nav className="menu-nav" aria-label="Main">
              {ACTS.map((act) => (
                <TransitionLink
                  key={act.href}
                  href={act.href}
                  className={cn("menu-nav__link", isActive(act.href) && "is-active")}
                  aria-current={isActive(act.href) ? "page" : undefined}
                  onClick={closeMenu}
                >
                  <span className="menu-nav__roman">{act.roman}</span>
                  <span className="menu-nav__title">{act.title}</span>
                  <span className="menu-nav__kicker">{act.kicker}</span>
                </TransitionLink>
              ))}
            </nav>

            <div className="menu-panel__bottom">
              <TransitionLink href={PROGRAMME.href} className="menu-programme" onClick={closeMenu}>
                {PROGRAMME.title}
                <span aria-hidden="true">↗</span>
              </TransitionLink>
              <SoundToggle />
              <p className="menu-panel__telugu" lang="te">
                తోలు బొమ్మలాట <span>· the dance of leather dolls</span>
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
