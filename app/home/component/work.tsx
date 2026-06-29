import React from 'react';
import { Star } from 'lucide-react';
import { cardsData } from '@/src/lib/constant';

function WorkSection() {


    return (
        <section className='section-py bg-consult-blue overflow-hidden'>
            <div className='container-axc mx-auto lg:px-6 px-4'>

                {/* Header */}
                {/* <div className="flex flex-col items-center mb-16">
                    <div className="border border-black/30 rounded px-4 py-1.5 mb-5">
                        <span className="text-black text-xs font-bold tracking-widest uppercase">OUR WORKING PROCESS</span>
                    </div>
                    <h2 className='text-black lg:text-5xl text-4xl font-bold text-center'>
                        Easy 3 Steps To Work
                    </h2>
                </div> */}
                <div className="text-center mb-16 flex flex-col items-center">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <p className="text-white text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                            OUR WORKING PROCESS
                        </p>
                    </div>
                    {/* Star with lines */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="h-px w-8 bg-white"></div>
                        <Star size={12} fill="#07294D" className="text-white" />
                        <div className="h-px w-8 bg-white"></div>
                    </div>

                    <h2 className="text-white text-4xl lg:text-5xl font-bold">
                        Easy 3 Steps To Work
                    </h2>
                </div>




                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-24">

                    {/* Left side: Steps */}
                    <div className="w-full lg:w-[55%] flex flex-col gap-6">
                        {cardsData?.map((card, index) => (
                            <div key={index} className="flex items-center w-full relative">

                                {/* Icon circle */}
                                <div className="w-20 h-20 rounded-full bg-consult-sky hidden md:flex items-center justify-center text-white shrink-0 relative z-10 shadow-lg">
                                    {card.icon}
                                    {/* Small white dot */}
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-sm"></div>
                                </div>

                                {/* Dotted line */}
                                <div className="w-10 sm:w-16 h-0 border-t-[3px] border-dotted border-gray-500/60 shrink-0 mx-2 md:block hidden"></div>

                                {/* The card */}
                                <div className="flex-grow bg-white/15 rounded-xl p-8 relative ml-4 sm:ml-6 transition-colors cursor-pointer group hover:bg-white/20">
                                    {/* Number badge */}
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-consult-sky text-white text-[11px] font-bold flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                                        0{index + 1}
                                    </div>

                                    <h3 className="text-white text-xl font-bold mb-3">{card.title}</h3>
                                    <p className="text-white/80 text-sm leading-relaxed">{card.description}</p>
                                </div>

                            </div>
                        ))}
                    </div>

                    {/* Right side: Circular Image */}
                    <div className="w-full lg:w-[45%] flex justify-center items-center mt-10 lg:mt-0">
                        <div className="relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1000&auto=format&fit=crop"
                                alt="Working Process"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default WorkSection;
