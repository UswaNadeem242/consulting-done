import React from "react";
import HeroSection from "./component/herosection";
import ProcessSection from "./component/processsection";
import CTASection from "@/src/components/cta";
import FAQ from "@/src/components/faq";

export default function WorkPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Timeline Process Cards Section (Reference Design) */}
      <ProcessSection />

      {/* FAQ & CTA */}
      {/* <FAQ />
      <CTASection /> */}
    </div>
  );
}
