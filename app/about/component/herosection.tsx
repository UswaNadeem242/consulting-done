import React from 'react';
import Link from 'next/link';

export default function AboutHeroSection() {
    return (
        <section
            className="relative w-full min-h-[400px] md:min-h-[600px] flex items-center justify-center overflow-hidden border-b border-consult-blue"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1717653487195-13826a597888?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Dark Blue Overlay */}
            <div className="absolute inset-0 bg-consult-blue/60" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center px-4 w-full">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-wide text-center">
                    About Us
                </h1>

                {/* <div className="border border-white/30 rounded-lg px-8 py-2.5 flex items-center gap-3 text-white backdrop-blur-sm font-medium">
                    <Link href="/" className="hover:text-gray-300 transition-colors">
                        Home
                    </Link>
                    <span className="text-white/80">➔</span>
                    <span>About Us</span>
                </div> */}
            </div>

            {/* Custom Wave Shape Divider */}
            {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[2px]">
                <svg
                    viewBox="0 0 1440 200"
                    preserveAspectRatio="none"
                    className="relative block w-full h-[80px] md:h-[150px] lg:h-[200px]"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 200V120C140 120 280 180 440 180C600 180 760 100 920 60C1080 20 1260 40 1440 80V200H0Z"
                        fill="#ffffff"
                    />
                </svg>
            </div> */}
        </section>
    );
}
