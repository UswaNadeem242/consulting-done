import React from 'react';
import { Phone, ShieldCheck, Star } from 'lucide-react';
import { Button } from '@/ui/button';
import Image from 'next/image';
import profile from "@/public/images/profile.png"
const AboutSection = () => {
    return (
        <section className="bg-white lg:py-20 lg:px-6 py-8 px-0 overflow-hidden">
            <div className="container-axc mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Left Column: Text Content */}
                    <div className="flex flex-col items-start pr-0 lg:pr-10">


                        <div className="text-left lg:col-span-2 flex flex-col justify-start pt-4 pr-10 mb-8 lg:mb-0">
                            <div className="flex items-left justify-left gap-2 mb-4">
                                <p className="text-black text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                                    ABOUT
                                </p>
                            </div>
                            {/* Star with lines */}
                            {/* <div className="flex items-center justify-left gap-2 mb-4">
                                <div className="h-px w-8 bg-black"></div>
                                <Star size={12} fill="#07294D" className="text-black" />
                                <div className="h-px w-8 bg-black"></div>
                            </div> */}

                            <h2 className="text-black text-3xl sm:text-4xl lg:text-5xl font-bold max-w-md lg:max-w-2xl">
                                Smart and effective business agency.
                            </h2>
                        </div>


                        {/* Description */}
                        <p className="text-axc-gray text-sm  leading-relaxed mb-10 max-w-lg font-medium lg:pt-4 pt-2">
                            we believe in the power of collaboration and personalized solutions. By understanding our clients' unique needs and goals, we tailor our approach to deliver strategic insights, creative solutions.
                        </p>

                        {/* Contact Info & Signature */}
                        <div className="flex flex-col gap-6 mb-12 w-full">

                            {/* Phone Block */}
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-consult-blue rounded-full flex items-center justify-center text-white shrink-0 shadow-lg">
                                    <Phone size={19} strokeWidth={1.5} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-axc-gray text-sm font-medium mb-0.5">Call us anytime</span>
                                    <span className="text-consult-blue text-lg font-bold tracking-wide">+44 7721 575886</span>
                                </div>
                                 
                            </div>
                                <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-consult-blue rounded-full flex items-center justify-center text-white shrink-0 shadow-lg">
                                    <ShieldCheck size={22} strokeWidth={1.5} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-axc-gray text-sm font-medium mb-0.5">Authentication Code</span>
                                    <span className="text-consult-blue text-lg font-bold tracking-wide">WPFLDWZHPQQRYSFE</span>
                                </div>
                                 
                            </div>

                            {/* Signature Placeholder */}
                            {/* <div className="mt-2 sm:mt-0 sm:ml-4">
                                <span className="text-4xl text-consult-blue opacity-90" style={{ fontFamily: "'Dancing Script', 'Brush Script MT', cursive", transform: "rotate(-5deg)", display: "inline-block" }}>
                                    Jonathon Doe
                                </span>
                            </div> */}
                        </div>

                        {/* Button */}
                        <Button className="px-8 py-4  text-white text-sm font-semibold rounded-md shadow-xl hover:-translate-y-1 transition-all duration-300" variant='primary' href='/about'>
                            About Us
                        </Button>

                    </div>

                    {/* Right Column: Image & Widget */}
                    <div className="relative flex justify-center lg:justify-end mt-10 lg:mt-0 pb-10 sm:pb-0">

                        {/* Main Circular Image */}
                        <div className="w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden relative shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
                                alt="Business Team"
                                width={500}
                                height={500}
                                className="w-full h-full object-cover object-center"
                            />
                        </div>

                        {/* Progress Widget (Absolute Positioned) */}
                        <div className="absolute -bottom-8 left-0 sm:left-10 lg:-left-12   rounded-xl p-8 flex flex-col items-center justify-center   z-10 w-72  md:block hidden">
                            {/* Circular Progress Ring */}
                            <Image src={profile} alt="profile" width={900} height={900} className="  object-cover" />

                            {/* <div className="relative w-20 h-20 mb-5">
                                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                  
                                    <circle cx="50" cy="50" r="44" fill="none" stroke="#214BE0" strokeWidth="4" />
                                   
                                    <circle
                                        cx="50" cy="50" r="44"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="4"
                                        strokeDasharray="276.46"
                                        strokeDashoffset="55.29"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                 
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">80%</span>
                                </div>
                            </div> */}

                            {/* <span className="text-white font-bold text-sm capitalize tracking-wide">successful  student</span> */}
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;