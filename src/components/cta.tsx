import { Button } from '@/ui/button';
import React from 'react';

export default function CTASection() {
  return (
    <section className="w-full bg-[#f4f6fc] py-16 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="max-w-5xl w-full bg-white rounded shadow-sm border border-gray-100 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 max-w-2xl">
          <h2 className="text-black text-2xl sm:text-3xl font-bold mb-4">
            Would you like to start a project with us?
          </h2>
          <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
            Etiam erat lectus, finibus eget commodo quis, tincidunt eget leo. Nullam quis
            vulputate orci, ac accumsan quam. Morbi fringilla congue libero.
          </p>
        </div>
        <div className="flex-shrink-0">
          <Button variant='primary' className='text-white font-medium py-3 px-8 rounded whitespace-nowrap'>
            1-800-1234-567
          </Button>
         
        </div>
      </div>
    </section>
  );
}
