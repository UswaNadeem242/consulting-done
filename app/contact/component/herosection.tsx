import React from 'react';
import bg from "@/public/images/contact.jpg"
import { MotionHeading, ScrollReveal } from "@/src/components/motion";

export default function ContactHeroSection() {
    return (
        <section
            className="relative w-full min-h-[600px] md:min-h-[600px] flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: `url(${bg.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Dark Blue Overlay */}
            <div className="absolute inset-0 bg-consult-blue/60" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full text-center text-white pt-10">
                <MotionHeading
                    as="h1"
                    direction="up"
                    className="text-5xl md:text-6xl font-bold mb-4 tracking-wide"
                >
                    Contact Us
                </MotionHeading>

                <ScrollReveal direction="up" delay={0.15}>
                    <p className="lg:w-[500px] w-[300px] text-white text-sm sm:text-[15px] md:text-base font-normal leading-relaxed text-center">
                        Thinking about a course or scholarship? Tell us your latest qualification and what you would like to study. Your first enquiry is free, and a brief summary is enough to begin.
                    </p>
                </ScrollReveal>
            </div>
        </section>
    );
}
