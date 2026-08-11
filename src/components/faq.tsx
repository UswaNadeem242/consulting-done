"use client";

import React, { useState } from 'react';
import { Search, Plus, X, Minus } from 'lucide-react';
import { FAQ_DATA } from '../lib/constant';



const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState<number | null>(1); // First one open by default

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = FAQ_DATA

  return (
    <section className="bg-white  py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-black text-3xl sm:text-4xl lg:text-5xl font-bold max-w-md lg:max-w-2xl">
            Frequently Asked Questions
          </h2>

          {/* Search Bar */}
           
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-xl p-6 cursor-pointer  border border-gray-300 transition-shadow duration-200"
                onClick={() => toggleAccordion(faq.id)}
              >
                <div className="flex justify-between items-center gap-4">
                  <h4 className={`font-semibold text-sm md:text-base ${openId === faq.id ? 'text-black' : 'text-black'}`}>
                    {faq.question}
                  </h4>
                  <div className="flex-shrink-0 text-axc-gray">
                    {openId === faq.id ? (
                      <Minus size={20} strokeWidth={2} className="text-axc-gray" />
                    ) : (
                      <Plus size={20} strokeWidth={2} />
                    )}
                  </div>
                </div>

                {/* Answer (Accordion Content) */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${openId === faq.id ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                    }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-500 text-sm md:text-sm leading-relaxed pr-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 py-8">
              No questions found matching "{searchQuery}"
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
