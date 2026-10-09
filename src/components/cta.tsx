import { Button } from '@/ui/button';
import Link from 'next/link';
import React from 'react';
import { MotionHeading, ScrollReveal } from './motion';

export default function CTASection() {
  return (
    <section className="w-full lg:py-20 py-8 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="max-w-5xl w-full bg-consult-sky/15 rounded-md shadow-sm   p-8 gap-8">
        <div className="flex justify-center flex-col items-center">
          <MotionHeading
            as="h2"
            className="text-black text-2xl sm:text-3xl font-bold mb-4 max-w-xl text-center"
          >
            Ready to Start Your Study Abroad Journey?
          </MotionHeading>
          <ScrollReveal delay={0.15}>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base text-center max-w-xl">
              Your journey abroad starts with one conversation. Book a free consultation with MIBK Consultancy and let us
              help you plan the path to your dream university.
            </p>
          </ScrollReveal>
        </div>
        <div className="flex justify-center mt-5 ">
          <Link href="/contact">
            <Button variant='primary' className='text-white font-medium py-3 px-8 rounded whitespace-nowrap'>
              Book a Free Consultation
            </Button>
          </Link>

        </div>
      </div>
    </section>
  );
}
