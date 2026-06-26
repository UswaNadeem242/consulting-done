import React from 'react';

export default function ContactHeroSection() {
    return (
        <section
            className="relative w-full min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Dark Blue Overlay */}
            <div className="absolute inset-0 bg-consult-blue/60" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full text-center text-white pt-10">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-wide">
                    Contact Us
                </h1>
                
                <h2 className="text-lg md:text-xl font-bold mb-4">
                    Contact for Premium Business Services
                </h2>

                <p className="text-sm md:text-base text-gray-200 max-w-2xl leading-relaxed mx-auto">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo.
                    <br className="hidden sm:block" />
                    Praesent mattis commodo augue. Aliquam ornare hendrerit augue.
                </p>
            </div>
        </section>
    );
}
