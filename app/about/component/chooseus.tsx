import React from 'react';
import aeroplanemap from "@/public/images/aeroplanmap.png"
import Image from 'next/image';
export default function ChooseUs() {
    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <h1 className="text-black text-4xl lg:text-5xl font-bold max-w-2xl mx-auto text-center mb-12 lg:mb-16">
                Why Choose Us?
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className=" l">
                    <Image
                        src={aeroplanemap}
                        alt="Students collaborating"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>

                    <ul className="text-gray-600 leading-relaxed text-base md:text-lg space-y-4 list-none pl-0">
                        <li className="flex items-start">
                            <span className="text-consult-blue mr-2 mt-1">•</span>
                            <span><strong className="text-black">Personalized Counseling:</strong> We understand that every student has unique aspirations and challenges, which is why we offer tailored solutions that fit individual needs.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-consult-blue mr-2 mt-1">•</span>
                            <span><strong className="text-black">Comprehensive Support:</strong> From initial consultation to post-arrival services, we are with you every step of the way.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-consult-blue mr-2 mt-1">•</span>
                            <span><strong className="text-black">Global Reach:</strong> We work with universities across multiple countries, ensuring a wide range of options for students.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-consult-blue mr-2 mt-1">•</span>
                            <span><strong className="text-black">Proven Success Rate:</strong> Our track record of successful student placements and satisfied clients speaks for itself.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-consult-blue mr-2 mt-1">•</span>
                            <span><strong className="text-black">Ethical Practices:</strong> We adhere to the highest standards of professionalism, ensuring a transparent, honest, and reliable service.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-consult-blue mr-2 mt-1">•</span>
                            <div>
                                <strong className="text-black">Countries We Specialize In:</strong>
                                <ul className="mt-2 space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-consult-blue mr-2 mt-1">-</span>
                                        <span><strong className="text-black">United Kingdom:</strong> World-class universities, diverse cultures, and excellent career opportunities.</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
}
