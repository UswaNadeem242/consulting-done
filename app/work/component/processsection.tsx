import React from "react";
import Link from "next/link";
import { PROCESS_ITEMS, type ProcessCardItem } from "@/src/lib/constant";
import { Button } from "@/ui/button";
import { ScrollReveal } from "@/src/components/motion";

export type { ProcessCardItem };


interface ProcessSectionProps {
  subtitle?: string;
  title?: string;
  items?: ProcessCardItem[];
}

export default function ProcessSection({
  subtitle = "Our Step-by-Step Methodology",
  title = "How It Works",
  items = PROCESS_ITEMS,
}: ProcessSectionProps) {
  return (
    <section className="relative w-full bg-white lg:py-20 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-16">
          {items.map((item, index) => {
            const stepNumber =
              item.step ?? String(item.id ?? index + 1).padStart(2, "0");

            return (
              <ScrollReveal
                key={item.id ?? index}
                direction="up"
                delay={index * 0.08}
                className="h-full"
              >
                <div className="h-full bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(7,41,77,0.08)] hover:border-consult-sky/40 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
                  <div>
                    {/* Header: Step Pill Badge & Big Number */}
                    <div className="flex items-center justify-between mb-5">
                      <span
                        style={{ padding: "8px 20px" }}
                        className="inline-flex items-center rounded-full text-xs font-bold uppercase tracking-wider bg-consult-sky/10 text-consult-sky border border-consult-sky/20 group-hover:bg-consult-sky group-hover:text-white transition-colors duration-300"
                      >
                        STEP {stepNumber}
                      </span>
                      <span className="text-3xl font-extrabold text-gray-200 select-none group-hover:text-consult-sky/25 transition-colors">
                        {stepNumber}
                      </span>
                    </div>

                    {/* Step Title in Dark Navy */}
                    <h3 className="text-black text-xl font-bold tracking-tight mb-3 group-hover:text-consult-blue transition-colors leading-snug">
                      {item.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-axc-gray text-sm leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Button className="px-8 py-4 text-white text-sm font-semibold rounded-md shadow-xl hover:-translate-y-1 transition-all duration-300" variant='primary' href='/contact'>
            Book Appointment
          </Button>
        </div>

      </div>
    </section>
  );
}
