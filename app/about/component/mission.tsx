import React from 'react';

export default function MissionSection() {
    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <h1 className="text-black text-4xl lg:text-5xl font-bold max-w-2xl mx-auto text-center mb-12 lg:mb-16">
                Welcome to The MIB Education System
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Text Content */}
                <div>
                    <h2 className="text-black text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Our Expertise
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                        With years of experience in the international education sector, MIB Education Services has a strong reputation for delivering quality services tailored to the unique needs of each student. Our team of expert consultants comprises seasoned professionals with in-depth knowledge of the education systems in the UK, Australia, Canada, USA, Malaysia, and Europe, ensuring that our clients receive accurate, relevant, and up-to-date information
                    </p>
                </div>

                {/* Image Content */}
                <div className="relative w-full max-w-[450px] lg:max-w-[500px] aspect-square rounded-full overflow-hidden shadow-xl mx-auto lg:ml-auto">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop"
                        alt="Students collaborating"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
