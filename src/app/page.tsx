// src/app/page.tsx

import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesTimeline from "@/components/FeaturesTimeline";
import CurriculumSection from "@/components/CurriculumSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  return (
      <main>
          <HeroSection />
          <ProblemSection />
          <SolutionSection />
          <FeaturesTimeline />
          <CurriculumSection />
          <TestimonialsSection />
          <PricingSection />
      </main>
  );
}