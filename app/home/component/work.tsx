import React from 'react';
import { PenTool, Layout, Send } from 'lucide-react';
import WorkCard from '../../../src/components/workcard';

function WorkSection() {
    const cardsData = [
        {
            icon: <PenTool size={28} />,
            title: "Find Course",
            description: "Unsure about the best universities and courses for you? Use our AI-powered University Course Finder to find exactly what you need, saving you months of research"
        },
        {
            icon: <Layout size={28} />,
            title: "Admission Updates",
            description: "Stay informed with instant updates on your applications. Effortlessly monitor your application progress and receive timely updates and offers"
        },
        {
            icon: <Send size={28} />,
            title: "Scholarship abroad",
            description: "Explore our extensive database of over 3,700 scholarships offered by universities, governments, and organizations. Discover fully funded, merit-based, sports..."
        }
    ];

    return (
        <section className='section-py bg-[#F4F7FF]'>
            <div className='container-axc mx-auto'>
                <h1 className='text-black lg:text-5xl text-4xl font-semibold text-center'>
                    How We Work
                </h1>
                <p className='text-axc-gray lg:text-lg text-sm font-normal text-center mt-3 mb-12'>
                    It's simple really. We get you where you need to be
                </p>

                <div className=' overflow-x-auto grid lg:grid-cols-3 grid-cols-1 gap-6 pb-6 lg:pb-0'>
                    {cardsData.map((card, index) => (
                        <div key={index} className='min-w-[85%] sm:min-w-[60%] lg:min-w-0 snap-center shrink-0'>
                            <WorkCard 
                                icon={card.icon}
                                title={card.title}
                                description={card.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WorkSection;
