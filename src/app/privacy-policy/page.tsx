import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE.name}.`,
};

const LAST_UPDATED = "29 August 2026";

/**
 * A real, honest policy scoped to what this site actually does today: no
 * accounts, no forms, no cookies, no analytics — just a mailto link. Written
 * to be accurate now and easy to extend the day any of that changes (a real
 * booking tool, analytics, a contact form). Not a substitute for a solicitor
 * reviewing it, and it says so — see the note at the bottom.
 */
export default function PrivacyPolicyPage() {
  return (
    <Container className="max-w-2xl py-32">
      <p className="font-mono text-xs uppercase tracking-wider text-accent-cyan">
        Privacy Policy
      </p>
      <h1 className="mt-3 font-display text-display-md font-medium text-ink">
        How sqorvin handles your data
      </h1>
      <p className="mt-4 text-sm text-ink-faint">Last updated: {LAST_UPDATED}</p>

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="font-mono text-xs uppercase tracking-wider text-ink-faint">
            Who this covers
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink-soft">
            This policy covers {SITE.url.replace("https://", "")}, run by Shubham Mane
            trading as sqorvin, {SITE.location}. If you have any question about it,
            email{" "}
            <a href={`mailto:${SITE.email}`} className="text-accent-blue hover:underline">
              {SITE.email}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs uppercase tracking-wider text-ink-faint">
            What this site collects
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink-soft">
            As it stands, this site doesn&apos;t have a contact form, a newsletter
            signup, cookies, or any analytics or tracking script running on it.
            Nothing is collected automatically just by visiting.
          </p>
          <p className="mt-3 text-base leading-relaxed text-ink-soft">
            The only way any personal data reaches sqorvin is if you choose to send
            it — for example by using the &ldquo;Book a Free Consultation&rdquo;
            link, which opens your own email app addressed to{" "}
            <a href={`mailto:${SITE.email}`} className="text-accent-blue hover:underline">
              {SITE.email}
            </a>
            . Whatever you write in that email — your name, email address, and any
            details about your business or project — is what sqorvin receives.
            That inbox is a Google account, so Google processes and stores that
            email on sqorvin&apos;s behalf in the same way it would for any other
            email sent to a Gmail-hosted address.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs uppercase tracking-wider text-ink-faint">
            How it&apos;s used
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink-soft">
            Only to reply to your enquiry and, if you go on to engage sqorvin for a
            project, to deliver and manage that work. It&apos;s never sold, and
            it&apos;s never used for advertising or shared with anyone outside of
            delivering the service you asked for.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs uppercase tracking-wider text-ink-faint">
            How long it&apos;s kept
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink-soft">
            Enquiry emails that don&apos;t turn into a project are kept only as long
            as needed to respond, then deleted within a reasonable period. Emails
            and records tied to an actual client engagement are kept for the
            duration of that engagement plus a period afterward to meet standard UK
            record-keeping and accounting obligations, then deleted.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs uppercase tracking-wider text-ink-faint">
            Your rights
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink-soft">
            Under UK GDPR, you can ask to see what data sqorvin holds about you,
            have it corrected, have it deleted, or object to how it&apos;s used.
            Email{" "}
            <a href={`mailto:${SITE.email}`} className="text-accent-blue hover:underline">
              {SITE.email}
            </a>{" "}
            for any of this. If you&apos;re not satisfied with the response, you can
            complain to the UK Information Commissioner&apos;s Office (ico.org.uk).
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs uppercase tracking-wider text-ink-faint">
            If this changes
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink-soft">
            If sqorvin adds a contact form, analytics, or a booking tool that
            collects data automatically, this page will be updated to reflect it
            before that change goes live, and the &ldquo;last updated&rdquo; date
            above will change.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs uppercase tracking-wider text-ink-faint">
            One honest caveat
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink-soft">
            This is a plain-English description of what actually happens today, not
            a substitute for a solicitor&apos;s review. If sqorvin starts handling
            more sensitive data or signs larger clients, it&apos;s worth having this
            properly reviewed against UK GDPR.
          </p>
        </section>
      </div>
    </Container>
  );
}
