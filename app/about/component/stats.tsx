'use client';
import React from 'react';
import CountUp from 'react-countup';
import { Star } from 'lucide-react';

export default function StatsSection() {
    return (
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 w-full bg-consult-blue overflow-hidden">
            {/* Background Pattern */}
            <div 
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: "url('https://www.transparenttextures.com/patterns/topography.png')",
                    backgroundSize: 'auto'
                }}
            />
            
            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center text-white">
                {/* Block 1 */}
                <div className="flex flex-col items-center justify-center">
                    <div className="text-5xl font-bold mb-2 flex items-baseline justify-center">
                        <CountUp end={2000} enableScrollSpy scrollSpyOnce />
                        <span className="text-3xl ml-1">+</span>
                    </div>
                    <p className="text-sm md:text-base font-medium">Happy Clients</p>
                </div>

                {/* Block 2 */}
                <div className="flex flex-col items-center justify-center">
                    <div className="text-5xl font-bold mb-2 flex items-baseline justify-center">
                        <CountUp end={100} enableScrollSpy scrollSpyOnce />
                        <span className="text-2xl ml-1">%</span>
                    </div>
                    <p className="text-sm md:text-base font-medium">Satisfaction</p>
                </div>

                {/* Block 3 */}
                <div className="flex flex-col items-center justify-center">
                    <div className="text-5xl font-bold mb-2 flex items-center justify-center">
                        <CountUp end={4.5} decimals={1} enableScrollSpy scrollSpyOnce />
                        <Star className="ml-2 w-6 h-6 fill-white text-white mb-1" />
                    </div>
                    <p className="text-sm md:text-base font-medium">Reviews</p>
                </div>

                {/* Block 4 */}
                <div className="flex flex-col items-center justify-center">
                    <div className="text-5xl font-bold mb-2 flex items-baseline justify-center">
                        <CountUp end={55} enableScrollSpy scrollSpyOnce />
                    </div>
                    <p className="text-sm md:text-base font-medium">Countries</p>
                </div>

                {/* Block 5 */}
                <div className="flex flex-col items-center justify-center">
                    <div className="text-5xl font-bold mb-2 flex items-baseline justify-center">
                        <CountUp end={700} enableScrollSpy scrollSpyOnce />
                        <span className="text-3xl ml-1">+</span>
                    </div>
                    <p className="text-sm md:text-base font-medium">Students</p>
                </div>

                {/* Block 6 */}
                <div className="flex flex-col items-center justify-center">
                    <div className="text-5xl font-bold mb-2 flex items-baseline justify-center">
                        <CountUp end={180} enableScrollSpy scrollSpyOnce />
                        <span className="text-3xl ml-1">+</span>
                    </div>
                    <p className="text-sm md:text-base font-medium">Universities</p>
                </div>
            </div>
        </section>
    );
}
