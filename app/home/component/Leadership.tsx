import React from 'react';
import { Share2, Star } from 'lucide-react';
import { TEAM_MEMBERS } from '@/src/lib/constant';

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
            <p className="text-consult-blue text-xs font-bold tracking-widest uppercase flex items-center gap-2">
              EXPERT TEAM MEMBERS
            </p>
          </div>
          {/* Star with lines */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-[1px] w-8 bg-constext-consult-blue"></div>
            <Star size={12} fill="#07294D" className="text-consult-blue" />
            <div className="h-[1px] w-8 bg-constext-consult-blue"></div>
          </div>
          
          <h2 className="text-consult-blue text-4xl lg:text-5xl font-bold">
            Our Team at Your Service
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {TEAM_MEMBERS.map((member) => (
            <div 
              key={member.id} 
              className="group relative w-full max-w-[280px] mx-auto bg-white rounded-[140px] p-2 pb-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col items-center"
            >
              {/* Blue background animation overlay */}
              <div className="absolute inset-0 bg-[#07294D] origin-top transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out z-0"></div>

              {/* Content Wrapper */}
              <div className="relative z-10 w-full flex flex-col items-center">
                {/* Image */}
                <div className="relative w-full aspect-square rounded-full overflow-hidden bg-gray-200">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                
                {/* Share icon */}
                <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#07294D] -mt-5 z-20 group-hover:text-white group-hover:bg-[#07294D] transition-colors duration-300 border border-gray-50 cursor-pointer">
                  <Share2 size={16} />
                </div>

                {/* Text */}
                <div className="text-center mt-5">
                  <h3 className="text-[#07294D] group-hover:text-white text-xl font-bold mb-1 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 group-hover:text-gray-200 text-sm transition-colors duration-300">
                    {member.role}
                  </p>
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
