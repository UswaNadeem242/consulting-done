import { STEPS } from '@/src/lib/constant';
import { Star } from 'lucide-react';
import React from 'react';



const ServicesOffered = () => {
    return (
        <section className="section-py bg-white overflow-hidden">
            <div className="container-axc mx-auto px-6">


                <div className="text-center mb-16 flex flex-col items-center">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <p className="text-black text-xs font-bold tracking-widest uppercase flex items-center gap-2">

                            Visa Categories
                        </p>
                    </div>
                    {/* Star with lines */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="h-[1px] w-8 bg-black"></div>
                        <Star size={12} fill="#07294D" className="text-black" />
                        <div className="h-[1px] w-8 bg-black"></div>
                    </div>

                    <h2 className="text-black text-4xl lg:text-5xl font-bold">
                        Services Offered
                    </h2>
                </div>


                {/* <h2 className="text-black lg:text-5xl text-4xl font-semibold text-center mb-5">
                    Services Offered
                </h2> */}
                <p className='text-axc-gray lg:text-lg text-sm font-normal text-center mb-16 max-w-xl mx-auto'>MIB Education Services offers a comprehensive range of services designed to support students at every stage of their study abroad journey, including:</p>

                <div className="relative max-w-4xl mx-auto flex flex-col gap-8  ">

                    {/* Connector Lines (Desktop Only) */}
                    <div className="hidden lg:block absolute top-0 left-0 w-full h-full pointer-events-none">
                        {STEPS.map((step, index) => {
                            if (index === STEPS.length - 1) return null;

                            const isLeft = index % 2 === 0;
                            // Calculate top percentage based on total number of steps
                            const stepHeight = 100 / STEPS.length;
                            // Start arrow from the middle of current step's height allocation
                            const topPos = (index * stepHeight) + (stepHeight * 0.45);
                            const heightPos = stepHeight * 0.85;

                            if (isLeft) {
                                return (
                                    <svg key={`arrow-${index}`} className="absolute left-[48%] w-[45%] text-gray-300" style={{ top: `${topPos}%`, height: `${heightPos}%` }} preserveAspectRatio="none" viewBox="0 0 100 100" fill="none">
                                        <path d="M0,20 Q100,20 100,80" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                                        <path d="M96,75 L100,85 L104,75 Z" fill="currentColor" />
                                    </svg>
                                );
                            } else {
                                return (
                                    <svg key={`arrow-${index}`} className="absolute right-[48%] w-[45%] text-gray-300" style={{ top: `${topPos}%`, height: `${heightPos}%` }} preserveAspectRatio="none" viewBox="0 0 100 100" fill="none">
                                        <path d="M100,20 Q0,20 0,80" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                                        <path d="M-4,75 L0,85 L4,75 Z" fill="currentColor" />
                                    </svg>
                                );
                            }
                        })}
                    </div>

                    {STEPS?.map((step, index) => {
                        const isGreen = step.theme === "green";
                        const isLeft = index % 2 === 0;

                        return (
                            <div
                                key={step.id}
                                className={`relative z-10 w-full lg:w-[45%] flex ${isLeft ? 'self-start' : 'self-end'}`}
                            >
                                <div
                                    className={`w-full flex p-3 rounded-[28px] shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-50
                    ${isGreen ? 'bg-[#F4F9EE]' : 'bg-[#F9F9F9]'}`}
                                >
                                    {/* Left Pill */}
                                    <div
                                        className={`w-12 rounded-[20px] flex items-center justify-center shrink-0 
                      ${isGreen ? 'bg-[#174A33] text-white' : 'bg-[#2A2A2A] text-white'}`}
                                    >
                                        <span
                                            className="transform -rotate-90 text-[11px] font-semibold tracking-wider whitespace-nowrap uppercase origin-center"
                                        >
                                            {step.duration}
                                        </span>
                                    </div>

                                    {/* Card Content */}
                                    <div className="ml-5 py-3 pr-4 flex flex-col justify-center">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div
                                                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0
                          ${isGreen ? 'bg-[#E3EED5] text-[#174A33]' : 'bg-[#EBEBEB] text-[#2A2A2A]'}`}
                                            >
                                                {step.icon}
                                            </div>
                                            <h3 className="text-xl font-semibold text-gray-900">
                                                {step.title}
                                            </h3>
                                        </div>
                                        <p className="text-sm text-gray-600 leading-relaxed font-medium">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default ServicesOffered;
