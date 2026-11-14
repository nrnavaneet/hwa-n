import { ACTS, PROGRAMME, SITE } from "@/content/site";
import { LampMark, PerfDivider } from "@/components/icons";
import { TransitionLink } from "@/components/transition-provider";

export function SiteFooter() {
  return (
    <footer className="site-footer theme-ink" id="site-footer">
      <PerfDivider className="site-footer__perf" />
      <div className="container">
        <div className="footer-cta">
          <p className="eyebrow">The invitation</p>
          <h2 className="footer-cta__line">
            The lamp is still lit. <em>Someone has to stand behind the screen.</em>
          </h2>
          <TransitionLink href="/learn" className="btn">
            Learn it this weekend
            <span className="btn__arrow" aria-hidden="true">
              →
            </span>
          </TransitionLink>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <span className="footer-brand__mark">
              <LampMark className="footer-brand__lamp" />
              <span>{SITE.name}</span>
            </span>
            <p className="footer-brand__note">
              An independent field guide to {SITE.teluguMeaning} — the leather shadow play of
              Andhra Pradesh.
            </p>
            <p className="footer-brand__telugu" lang="te">
              {SITE.telugu}
            </p>
          </div>

          <nav className="footer-col" aria-label="Acts">
            <p className="footer-col__label">The play</p>
            {ACTS.map((act) => (
              <TransitionLink key={act.href} href={act.href} className="footer-link">
                <span>{act.roman}</span>
                {act.title}
              </TransitionLink>
            ))}
          </nav>

          <nav className="footer-col" aria-label="Project">
            <p className="footer-col__label">The project</p>
            <TransitionLink href={PROGRAMME.href} className="footer-link">
              <span>·</span>
              Sources &amp; credits
            </TransitionLink>
            <TransitionLink href="/sources#accessibility" className="footer-link">
              <span>·</span>
              Accessibility
            </TransitionLink>
            <TransitionLink href="/sources#glossary" className="footer-link">
              <span>·</span>
              Glossary
            </TransitionLink>
            <a className="footer-link" href="#top">
              <span>↑</span>
              Back to the top
            </a>
          </nav>
        </div>

        <div className="footer-base">
          <p>
            © {SITE.year} · Made with respect for the makers of Nimmalakunta. Not affiliated with
            the artisan families.
          </p>
          <p>No accounts. No cookies. No tracking. Just light.</p>
          <p>
            Design &amp; build by {SITE.author}.
          </p>
        </div>
      </div>
    </footer>
  );
}
