import React from 'react';

interface WorkCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ icon, title, description }) => {
    return (
        <div className="bg-white p-3 xl:p-7 flex flex-col items-start gap-4  rounded-2xl border border-gray-100 transition-shadow duration-300 h-full w-full">
            <div className="text-consult-blue w-12 h-12 flex items-center justify-center bg-[#F4F7FF] rounded-lg mb-2">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-black">
                {title}
            </h3>
            <p className="text-axc-gray text-sm leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default WorkCard;
