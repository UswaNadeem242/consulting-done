import React from "react";
import Link from "next/link";
import { GraduationCap, Search, FileText } from "lucide-react";
import { MotionHeading, ScrollReveal } from "@/src/components/motion";

interface ServicePlan {
    id: string;
    number: string;
    category: string;
    title: string;
    price: string;
    currencyNote: string;
    description: string;
    features: string[];
    buttonText: string;
    href: string;
    icon: React.ReactNode;
}

const servicePlans: ServicePlan[] = [
    {
        id: "admissions-support",
        number: "01",
        category: "COURSE AND APPLICATION SUPPORT",
        title: "Admissions Support",
        price: "£250",
        currencyNote: "Total service fee · GBP",
        description: "For one student and intake, from a sourced shortlist to agreed application steps.",
        features: [
            "Up to six relevant programme matches",
            "Feedback on your own statement and CV",
            "Up to three agreed routine applications",
        ],
        buttonText: "View service details",
        href: "/contact",
        icon: <GraduationCap className="w-5 h-5 text-white" />,
    },
    {
        id: "scholarship-research",
        number: "02",
        category: "FUNDING RESEARCH",
        title: "Scholarship Research Only",
        price: "£150",
        currencyNote: "Total service fee · GBP",
        description: "A sourced research result for one student and intake, without application work.",
        features: [
            "Up to five relevant opportunities",
            "Actual coverage and uncovered costs",
            "An honest limited or no-match result",
        ],
        buttonText: "View service details",
        href: "/contact",
        icon: <Search className="w-5 h-5 text-white" />,
    },
    {
        id: "full-scholarship-support",
        number: "03",
        category: "RESEARCH AND APPLICATION SUPPORT",
        title: "Full Scholarship Application Support",
        price: "£500",
        currencyNote: "Total service fee · GBP",
        description: "Research, review of your own materials and bounded application follow-up.",
        features: [
            "Up to three agreed applications",
            "Separate approval before submission",
            "Credit for paid overlapping research",
        ],
        buttonText: "View service details",
        href: "/contact",
        icon: <FileText className="w-5 h-5 text-white" />,
    },
];

export default function ServicesCardsSection() {
    return (
        <section className="w-full  sm:pt-8 lg:pt-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <MotionHeading
                        as="h2"
                        className="text-black text-4xl lg:text-5xl font-bold max-w-2xl mx-auto text-center"
                    >
                        Choose your support
                    </MotionHeading>
                    <ScrollReveal delay={0.15}>
                        <p className="text-axc-gray text-sm sm:text-base leading-relaxed mt-4">
                            We start with your qualification, subject, destination, intake and budget. Programme and
                            funding options depend on their current rules.
                        </p>
                    </ScrollReveal>
                </div>

                {/* 3 Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                    {servicePlans.map((plan, index) => (
                        <ScrollReveal
                            key={plan.id}
                            direction="up"
                            delay={index * 0.15}
                            className="h-full"
                        >
                            <div
                                className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 h-full"
                            >
                            {/* Card Content Top */}
                            <div className="flex flex-col flex-1">
                                {/* Top Row: Icon Badge & Watermark Number */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-12 h-12 rounded-full bg-consult-blue flex items-center justify-center shrink-0">
                                        {plan.icon}
                                    </div>
                                    <span className="text-4xl sm:text-5xl font-extrabold text-gray-200 select-none tracking-tight">
                                        {plan.number}
                                    </span>
                                </div>

                                {/* Category Tag */}
                                <div style={{ height: "24px", display: "flex", alignItems: "center" }} className="mb-2">
                                    <span className="text-[11px] font-bold tracking-wider text-axc-gray uppercase">
                                        {plan.category}
                                    </span>
                                </div>

                                {/* Card Title - Explicit 64px height so Price starts on EXACT same pixel across all 3 cards */}
                                <div style={{ height: "64px", display: "flex", alignItems: "center" }} className="mb-4">
                                    <h3
                                        className="text-base sm:text-[17px] lg:text-lg font-bold text-consult-blue leading-snug"
                                        title={plan.title}
                                    >
                                        {plan.title}
                                    </h3>
                                </div>

                                {/* Price Block - Explicit 76px height so Divider and Description are on EXACT same line */}
                                <div style={{ height: "76px" }} className="mb-5 pb-3 border-b border-gray-100 flex flex-col justify-center">
                                    <div className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight leading-none">
                                        {plan.price}
                                    </div>
                                    <div className="text-xs text-axc-gray font-medium mt-2">
                                        {plan.currencyNote}
                                    </div>
                                </div>

                                {/* Description - Explicit 50px height so Checklist starts on EXACT same line */}
                                <div style={{ height: "50px", display: "flex", alignItems: "flex-start" }} className="mb-6">
                                    <p className="text-axc-gray text-sm leading-relaxed">
                                        {plan.description}
                                    </p>
                                </div>

                                {/* Checklist */}
                                <ul className="space-y-3 mb-8 flex-1">
                                    {plan.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start gap-2.5 text-sm text-axc-gray leading-snug"
                                        >
                                            <svg
                                                className="w-4 h-4 text-consult-blue shrink-0 mt-0.5"
                                                viewBox="0 0 16 16"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Action Button */}
                            <div className="pt-2 mt-auto">
                                <Link
                                    href={plan.href}
                                    className="w-full py-3.5 px-6 rounded-full bg-consult-blue text-white font-medium text-sm text-center tracking-wide block active:scale-[0.99] transition-all shadow-sm"
                                >
                                    {plan.buttonText}
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
