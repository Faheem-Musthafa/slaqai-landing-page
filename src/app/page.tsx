"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { SmoothScrollProgress } from "@/components/SmoothScrollProgress";
import { FloatingCTA } from "@/components/FloatingCTA";
import {
  TrustSection,
  StatsSection,
  SecurityBadges,
  ProblemSection,
  SolutionSection,
  ComparisonSection,
  TestSection,
  TestimonialsSection,
  FAQSection,
  CTASection,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-[#9DDB2C] selection:text-black overflow-x-hidden">
      <SmoothScrollProgress />
      <Navbar />
      <Hero />
      {/* <TrustSection /> */}
      <StatsSection />
      <ProblemSection />
      <SolutionSection />
      <TestSection />
      <ComparisonSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <FloatingCTA />
    </div>
  );
}