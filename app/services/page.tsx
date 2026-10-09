import React from "react";
import ServicesHeroSection from "./component/herosection";
import ServicesCardsSection from "./component/servicescards";
import CTASection from "@/src/components/cta";
import FAQ from "@/src/components/faq";

export const metadata = {
    title: "Services & Prices | MIBK Consultancy",
    description: "Compare our education consultancy services, transparent pricing, and university application guidance.",
};

export default function ServicesPage() {
    return (
        <main className="w-full">
            {/* Hero Section */}
            <ServicesHeroSection />

            {/* Support Plans / Services Cards */}
            <ServicesCardsSection />

            {/* FAQ & CTA */}
            <FAQ />
            <CTASection />
        </main>
    );
}
