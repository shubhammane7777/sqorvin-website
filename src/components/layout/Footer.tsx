import { Linkedin, Mail, MapPin } from "lucide-react";
import { SITE, NAV_LINKS, FOOTER } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-line bg-base-raised/40">
      <Container className="grid gap-12 py-16 sm:py-20 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            {SITE.description}
          </p>
          <div className="mt-6 space-y-2.5 text-sm text-ink-soft">
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-2 hover:text-ink"
            >
              <Mail className="h-4 w-4 text-accent-blue" aria-hidden="true" />
              {SITE.email}
            </a>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent-blue" aria-hidden="true" />
              {SITE.location}
            </p>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-ink"
            >
              <Linkedin className="h-4 w-4 text-accent-blue" aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-ink-faint">
            Navigate
          </h3>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-ink-soft hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-ink-faint">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5">
            {FOOTER.servicesLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-ink-soft hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-faint sm:flex-row">
          <p>{FOOTER.copyright}</p>
          <a href={FOOTER.privacyPolicyHref} className="hover:text-ink-soft">
            Privacy Policy
          </a>
        </Container>
      </div>
    </footer>
  );
}
