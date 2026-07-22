import React from 'react';
import { Button } from '@/ui/button';
import banner from "@/public/images/herosection.jpeg"
import Image from 'next/image';
const HeroSection = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center bg-white overflow-hidden pt-24 pb-32 lg:pt-0 lg:pb-0">

            {/* Left Image Area */}
            <div className="absolute top-0 left-0 w-full lg:w-1/2 h-full z-0">
                <div className="relative w-full h-full">
                    {/* Placeholder for the man in suit */}
                    <Image
                        src={banner}
                        alt="Consultant"
                        className="w-full h-full object-cover object-top"
                    />
                    {/* Gradient overlay to blend into the white right side */}
                    <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent via-white/10 to-white z-10" />
                </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-[37%] right-[10%] w-[100px] h-[100px] bg-gray-100 rounded-full z-0 opacity-80 lg:block hidden"  />
            <div className="absolute -bottom-48 -right-40 w-[450px] h-[450px] border-[30px] border-gray-50 rounded-full z-0 flex items-center justify-center opacity-80">
                <div className="w-full h-px bg-consult-sky absolute" />
                <div className="w-px h-full bg-consult-sky absolute" />
                <div className="w-[68%] h-[68%] border border-consult-sky rounded-full absolute" />
            </div>

            {/* Content Container */}
            <div className="container-axc mx-auto px-6 lg:px-24 xl:px-32 relative z-10 flex flex-col lg:flex-row items-center justify-end h-full min-h-screen">

                {/* Text Content Area */}
                <div className="w-full lg:w-[55%] xl:w-[50%] flex flex-col items-start pt-10 lg:pt-0 z-20">

                    <p className=" text-xs sm:text-sm font-medium tracking-widest capitalize mb-4 text-consult-blue">
                        <span className="text-black font-bold">Welcome!</span> Start growing your business today
                    </p>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-bold text-black leading-[1.1] tracking-tight mb-6 relative z-10 ">
                        Innovative <span className="italic font-semibold text-consult-sky">Solutions</span> Tailored for Your Success
                    </h1>

                    <p className="text-axc-gray text-sm  mb-8 max-w-lg leading-relaxed font-medium">
                        Porttitor ornare fermentum aliquam pharetra facilisis gravida risus suscipit Dui feugiat fusce conubia ridiculus tristique parturient
                    </p>

                    {/* Note: Kept the Button import, adjust props if they differ in your project */}
                    <Button className='px-8 py-3.5   text-white text-sm font-medium rounded-md shadow-lg transition-all' variant='primary' href='/contact'>
                        Get Consultant
                    </Button>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;