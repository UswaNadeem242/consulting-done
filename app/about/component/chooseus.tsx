import React from 'react';
import { Check, Star } from 'lucide-react';
import { POINTS } from '@/src/lib/constant';

export default function ChooseUs() {


    return (
        <section className="flex flex-col lg:flex-row w-full min-h-[600px] overflow-hidden">

            {/* Left Side: Content */}
            <div className="w-full lg:w-1/2 bg-consult-blue p-10 sm:p-16 lg:p-20 xl:pl-32 flex flex-col justify-center relative">

                {/* Abstract Background Shapes */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="absolute -bottom-1/3 -left-1/4 w-[120%] h-[120%] bg-white/3 rounded-full transform -rotate-12"></div>
                    <div className="absolute top-1/4 -right-1/4 w-full h-full bg-white/[0.02] rounded-full transform rotate-45"></div>
                </div>

                <div className="relative z-10 max-w-2xl">
                    {/* <p className="text-white text-sm font-semibold mb-3 tracking-wide">
                        Why choose us
                    </p>
                    <h2 className="text-white text-4xl lg:text-5xl xl:text-6xl font-bold mb-14 leading-[1.15]">
                        Why choosing our consulting is the best.
                    </h2> */}


                    <div className="text-left lg:col-span-2 flex flex-col justify-start pt-4 pr-10 mb-8 lg:mb-0">
                        <div className="flex items-left justify-left gap-2 mb-4">
                            <p className="text-white text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                                Why choose us
                            </p>
                        </div>
                        {/* Star with lines */}
                        <div className="flex items-center justify-left gap-2 mb-4">
                            <div className="h-px w-8 bg-white"></div>
                            <Star size={12} fill="#07294D" className="text-white" />
                            <div className="h-px w-8 bg-white"></div>
                        </div>

                        <h2 className="text-white text-4xl lg:text-5xl font-bold mb-14">
                            Why choosing our consulting is the best.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
                        {POINTS?.map((point, idx) => (
                            <div key={idx} className="flex flex-col">
                                <Check className="text-white w-7 h-7 mb-4 stroke-[1.5]" />
                                <h3 className="text-white text-xl font-medium mb-3">
                                    {point.title}
                                </h3>
                                <p className="text-white/70 text-[15px] leading-relaxed pr-2">
                                    {point.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Side: Image */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-auto">
                <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"
                    alt="Consultant"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
            </div>

        </section>
    );
}
