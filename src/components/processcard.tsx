import React from "react";

export interface ProcessCardProps {
  number: string | number;
  title: string;
  description: string;
  className?: string;
}

export default function ProcessCard({
  number,
  title,
  description,
  className = "",
}: ProcessCardProps) {
  const formattedNumber = String(number).padStart(2, "0");

  return (
    <div className={`relative pl-5 sm:pl-6 ${className}`}>
      {/* Blue Circular Number Badge on Left Edge */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-consult-sky text-white font-bold text-sm sm:text-base flex items-center justify-center shadow-lg shadow-blue-950/60 ring-2 ring-consult-blue transition-transform duration-300 hover:scale-110 select-none"
        aria-label={`Step ${formattedNumber}`}
      >
        {formattedNumber}
      </div>

      {/* Card Body */}
      <div className="w-full bg-white/[0.08] hover:bg-white/[0.12] border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-xl backdrop-blur-sm group">
        <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-2.5 group-hover:text-blue-200 transition-colors">
          {title}
        </h3>
        <p className="text-white/85 text-sm sm:text-[15px] leading-relaxed font-normal">
          {description}
        </p>
      </div>
    </div>
  );
}
