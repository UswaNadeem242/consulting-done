import React from 'react';
import { Star } from 'lucide-react';
import { TEAM_MEMBERS } from '@/src/lib/constant';
import FacebookSvgIcon from "@/public/icon/facebook"
import InstagramSvgIcon from "@/public/icon/instagram"
import LinkdeinSvgIcon from "@/public/icon/linkdein"
import Link from 'next/link';
const Leadership = () => {
  return (
    <section className="relative py-24 bg-[#FAFAFA] overflow-hidden">
      {/* Background Map Image */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="container-axc mx-auto px-6 relative z-10">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <p className="text-black text-xs font-bold tracking-widest uppercase flex items-center gap-2">
              EXPERT TEAM MEMBERS
            </p>
          </div>
          {/* Star with lines */}
          <div className="flex items-center justify-left gap-2 mb-4">
            <div className="h-px w-8 bg-black"></div>
            <Star size={12} fill="#07294D" className="text-black" />
            <div className="h-px w-8 bg-black"></div>
          </div>

          <h2 className="text-black text-4xl lg:text-5xl font-bold">
            Our Team at Your Service
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-20 max-w-6xl mx-auto pt-4 pb-10">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="relative w-full max-w-[320px] mx-auto group"
            >
              {/* Image Container */}
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info Box */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[85%] bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-6 text-center z-10 flex flex-col items-center">
                <h3 className="text-consult-blue text-lg font-bold mb-1.5">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-xs mb-4">
                  {member.role}
                </p>

                <div className="w-full h-px bg-gray-100 mb-4"></div>

                <div className="flex items-center justify-center gap-2">
                  <Link href="#" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-consult-blue hover:bg-consult-blue hover:text-white transition-colors">
                    <LinkdeinSvgIcon size={14} fill="currentColor" strokeWidth={0} />
                  </Link>
                  <Link href="#" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-consult-blue hover:bg-consult-blue hover:text-white transition-colors">
                    <FacebookSvgIcon size={12} fill="currentColor" strokeWidth={0} />
                  </Link>
                  <Link href="#" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-consult-blue hover:bg-consult-blue hover:text-white transition-colors">
                    <InstagramSvgIcon size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
