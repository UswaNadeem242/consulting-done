import React from "react";
import bg from "@/public/images/service.jpg";
import { MotionHeading, ScrollReveal } from "@/src/components/motion";

interface ServicesHeroSectionProps {
    eyebrow?: string;
    title?: string;
    description?: React.ReactNode;
}

export default function ServicesHeroSection({
    eyebrow = "OUR SERVICES",
    title = "SERVICES & PRICES",
    description = (
        <>
            Compare our three services, then open the details for stages, limits
            <br className="hidden sm:inline" /> and what happens before any paid work.
        </>
    ),
}: ServicesHeroSectionProps) {
    return (
        <>  


            <section
                className="relative w-full min-h-[600px] md:min-h-[600px] flex items-center justify-center overflow-hidden border-b border-consult-blue"
                style={{
                    backgroundImage: `url(${bg.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* Dark Blue Overlay */}
                <div className="absolute inset-0 bg-consult-blue/60" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center px-4 w-full">
                    <MotionHeading
                        as="h1"
                        direction="up"
                        className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-wide text-center"
                    >
                        {title}
                    </MotionHeading>
                    <ScrollReveal direction="up" delay={0.15}>
                        <p className="lg:w-[500px] w-[300px] text-white text-sm sm:text-[15px] md:text-base font-normal leading-relaxed text-center">
                            {description}
                        </p>
                    </ScrollReveal>
                </div>

            </section>
        </>

    );
}
