"use client";

import { FAQS } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AccordionItem } from "@/components/ui/AccordionItem";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Questions"
          title="Frequently asked questions"
          align="center"
          className="mx-auto"
        />
        <RevealOnScroll delay={0.1} className="mt-12">
          <div>
            {FAQS.map((faq) => (
              <AccordionItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
