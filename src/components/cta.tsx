import { Button } from '@/ui/button';
import React from 'react';

export default function CTASection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="max-w-5xl w-full bg-consult-sky/15 rounded-md shadow-sm   p-8 gap-8">
        <div className="flex justify-center flex-col items-center">
          <h2 className="text-black text-2xl sm:text-3xl font-bold mb-4 max-w-xl text-center">
            Would you like to start a project with us?
          </h2>
          <p className="text-gray-500 leading-relaxed text-sm sm:text-base text-center max-w-xl">
            Etiam erat lectus, finibus eget commodo quis, tincidunt eget leo. Nullam quis
            vulputate orci, ac accumsan quam. Morbi fringilla congue libero.
          </p>
        </div>
        <div className="flex justify-center mt-5 ">
          <Button variant='primary' className='text-white font-medium py-3 px-8 rounded whitespace-nowrap'>
           +44 7721 575886
          </Button>
         
        </div>
      </div>
    </section>
  );
}
