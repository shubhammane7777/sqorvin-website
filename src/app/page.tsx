import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Services } from "@/components/sections/Services";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Process } from "@/components/sections/Process";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <ProblemSolution />
      <CaseStudy />
      <Process />
      <WhyChooseUs />
      <About />
      <FAQ />
      <FinalCTA />
    </>
  );
}
