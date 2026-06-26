import React from 'react';
import Image from 'next/image';
import flag from "@/public/images/uk flag.png"
import background from "@/public/images/background.png"
import map from "@/public/images/map.png"
import student from "@/public/images/student.png"
import waves from "@/public/images/waves.png"
import { Button } from '@/ui/button';
const HeroSection = () => {
    return (
        <section
            className="relative w-full min-h-screen flex items-center overflow-hidden pt-24 pb-32 lg:pt-0 lg:pb-0"
            style={{
                backgroundImage: `url(${background.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute top-0 left-0 w-[60%] sm:w-[50%] lg:w-[30%] h-full z-0 pointer-events-none opacity-20">
                <div
                    className="absolute inset-0 bg-no-repeat bg-contain bg-left-top"
                    style={{
                        backgroundImage: `url(${flag.src})`,
                    }}
                />
            </div>
            <div className="container-axc mx-auto px-6 lg:px-24 xl:px-32 relative z-10 flex flex-col lg:flex-row items-center h-full">
                <div className="w-full lg:w-1/2 flex flex-col items-start pt-10 lg:pt-0 relative z-20">

                    <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                        Study In <br className="hidden lg:block" />
                        Recognized <br className="hidden lg:block" />
                        Universities!...
                    </h1>

                    <p className="text-blue-100 text-sm lg:text-base mt-6 max-w-md leading-relaxed font-medium">
                        MIB has been recruiting and prepping talented professionals for over twenty years. We provide a unique value proposition to both.
                    </p>


                    <Button variant='primary' href='#' className='mt-10 px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold tracking-wider transition-all backdrop-blur-sm flex items-center gap-3 rounded-full shadow-lg group'>More Details</Button>
                </div>
                <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0 flex justify-center lg:justify-end items-center min-h-[400px] lg:min-h-[800px] pointer-events-none">

                    <div className="absolute bottom-0 right-0 lg:-right-40 w-full lg:w-[230%] h-full flex items-end justify-center lg:justify-end z-10">
                        <div
                            className="absolute top-[5%] lg:top-[10%] left-0 w-full h-[85%] lg:h-[80%] z-0 bg-no-repeat bg-contain"
                            style={{
                                backgroundImage: `url(${map.src})`,
                                backgroundPosition: 'center top'
                            }}
                        />
                        <div className="relative z-20 w-[70%] sm:w-[75%] lg:w-[80%] max-w-[460px] lg:max-w-[550px] pointer-events-auto transform transition-transform hover:scale-[1.02] duration-500 pb-4">
                            <img
                                src={student.src}
                                alt="Student"
                                className="w-full h-auto max-h-[60vh] lg:max-h-screen object-contain object-bottom drop-shadow-2xl"
                            />
                        </div>

                    </div>
                </div>

            </div>

            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none border border-consult-blue">
                <Image src={waves} alt='waves' className="relative block w-full h-[120px] lg:h-[240px]" />
                {/* <svg
                    className="relative block w-full h-[120px] lg:h-[240px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#ffffff"
                        d="M0,256 C200,256 350,288 500,288 C650,288 800,192 950,128 C1100,64 1250,96 1350,160 C1400,192 1440,256 1440,256 L1440,320 L0,320 Z"
                    />
                </svg> */}
            </div>

        </section>
    );
};

export default HeroSection;