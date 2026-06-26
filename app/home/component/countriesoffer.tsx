import React from 'react';
import { ArrowUpRight, Star } from 'lucide-react';
import { DESTINATION } from '@/src/lib/constant';



const CountriesOffer = () => {
    return (
        <section className="section-py bg-white">
            <div className="container-axc mx-auto px-6">
                {/* <h2 className="text-black lg:text-5xl text-4xl font-semibold text-center mb-12">
                    Countries We Offer
                </h2> */}

                <div className="text-center mb-16 flex flex-col items-center">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <p className="text-black text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                            Countries We Offer
                        </p>
                    </div>
                    {/* Star with lines */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="h-[1px] w-8 bg-black"></div>
                        <Star size={12} fill="#07294D" className="text-black" />
                        <div className="h-[1px] w-8 bg-black"></div>
                    </div>

                    <h2 className="text-black text-4xl lg:text-5xl font-bold">
                        Best Countries for Education
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                    {DESTINATION?.map((item) => (
                        <div key={item.id} className="relative h-[400px] lg:h-[480px] overflow-hidden group cursor-pointer   rounded-sm flex gap-2">
                            {/* Split Background Images */}
                            <div className="w-1/2 h-full overflow-hidden">
                                <img
                                    src={item.image1}
                                    alt={item.title.replace('\n', ' ')}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-1/2 h-full overflow-hidden">
                                <img
                                    src={item.image2}
                                    alt={item.title.replace('\n', ' ')}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Overlay Content Box */}
                            <div
                                className="absolute bottom-8 left-0 bg-consult-blue w-[47%] group-hover:w-full transition-all duration-300 ease-in-out py-6 px-8"
                            >
                                {/* Circular Arrow Button */}
                                <div className="absolute -top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center text-consult-blue shadow-lg transition-transform duration-300 group-hover:scale-110">
                                    <ArrowUpRight size={22} strokeWidth={2.5} />
                                </div>

                                {/* Title */}
                                <h3 className="text-white text-2xl lg:text-3xl font-bold leading-[1.2] whitespace-pre-line">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CountriesOffer;
