import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE.name}.`,
};

// TODO(placeholder): This is a structural placeholder, not a legal document.
// Replace with a real privacy policy — reviewed against UK GDPR — before
// this site goes live and starts collecting any visitor or client data.
export default function PrivacyPolicyPage() {
  return (
    <Container className="max-w-2xl py-32">
      <p className="font-mono text-xs uppercase tracking-wider text-accent-cyan">
        Placeholder page
      </p>
      <h1 className="mt-3 font-display text-display-md font-medium text-ink">
        Privacy Policy
      </h1>
      <p className="mt-6 text-base leading-relaxed text-ink-soft">
        This page is a structural placeholder. Before {SITE.name} goes live, replace
        this with a real privacy policy covering what data is collected (for example
        via the consultation booking form or analytics), how it's stored, how long
        it's kept, and how visitors can request its deletion — reviewed for UK GDPR
        compliance.
      </p>
      <p className="mt-4 text-base leading-relaxed text-ink-soft">
        Until then, please contact{" "}
        <a href={`mailto:${SITE.email}`} className="text-accent-blue hover:underline">
          {SITE.email}
        </a>{" "}
        with any data or privacy questions.
      </p>
    </Container>
  );
}
