import Image from 'next/image';
import React from 'react';

export default function MissionSection() {
    return (
        <section className="py-8 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* <h1 className="text-black text-4xl lg:text-5xl font-bold max-w-2xl mx-auto text-center mb-12 lg:mb-16">
                Welcome to The MIB Education System
            </h1> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Text Content */}
                <div>
                    <h2 className="text-black text-3xl md:text-4xl lg:text-5xl font-bold mb-6 lg:text-start text-center">
                        Our Expertise
                    </h2>
                    <p className="text-axc-gray leading-relaxed lg:text-base text-sm font-normal lg:text-start text-center">
                        MIBK Consultancy is a trusted student consultancy dedicated to guiding students toward academic success.
                        From choosing the right course to securing your visa, we support you at every step of your journey to
                        studying abroad — with the credibility of British Council certification behind every recommendation we
                        make.
                    </p>
                    <p className="text-axc-gray leading-relaxed lg:text-base text-sm font-normal lg:text-start text-center lg:mt-6 mt-3">
                        We specialize in the UK and USA, covering everything from undergraduate admissions to PhD applications, so
                        our guidance is deep, current, and genuinely tailored — not generic. Every student who works with us starts
                        with a one-on-one consultation to understand their academic background, goals, and constraints, so the plan
                        we build is built around you, not a template.
                    </p>
                </div>

                {/* Image Content */}
                <div className="relative w-full max-w-[350px] lg:max-w-[500px] aspect-square rounded-full overflow-hidden shadow-xl mx-auto lg:ml-auto">
                    <Image
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?Dq=80&w=1471&auto=format&fit=crop"
                        alt="Consultant"
                        fill
                        className="object-cover object-center"
                    />
                </div>
            </div>
        </section>
    );
}
