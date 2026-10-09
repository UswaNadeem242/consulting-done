import React from 'react';
import { MotionHeading } from '@/src/components/motion';

export default function OurMissionSection() {
    return (
        <section className="lg:pt-20 pt-8  max-w-4xl mx-auto">
            <MotionHeading
                as="h1"
                direction="up"
                className="text-black text-4xl lg:text-5xl font-bold max-w-2xl mx-auto text-center"
            >
                Our Mission
            </MotionHeading>
            <p className='text-axc-gray lg:text-base text-sm font-normal text-center mt-4  mb-4 lg:px-0 px-4'>
                Our mission is to empower students with the right knowledge, resources, and support to make informed decisions about their education. We are committed to providing personalized, transparent, and efficient services that ensure our clients achieve their academic and career goals through international education.
            </p>
        </section>
    );
}
