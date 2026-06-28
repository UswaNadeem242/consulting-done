import React from 'react';
import { FileText, Package, FileCheck, MonitorPlay, MessageSquare, ArrowUpRight, Star } from 'lucide-react';

const ServicesOffered = () => {
    return (
        <section className="  lg:py-20 lg:px-6 py-8 px-4 relative overflow-hidden">
            {/* Soft glow/gradient in the background */}
            <div className="absolute top-0 left-0 w-[500px] h-[700px] bg-blue-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-10 w-[400px] h-[800px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />

            <div className="container-axc mx-auto max-w-7xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Title Block (Spans 2 columns) */}
                    {/* <div className="lg:col-span-2 flex flex-col justify-start pt-4 pr-10 mb-8 lg:mb-0">
                        <div className="border border-black/30 inline-block px-4 py-1.5 text-black text-sm font-bold w-max mb-6 tracking-wide">
                            OUR SERVICES
                        </div>
                        <h2 className="text-black text-4xl lg:text-5xl font-bold leading-[1.2]">
                            Comprehensive immigration and visa services
                        </h2>
                    </div> */}
                    <div className="text-left lg:col-span-2 flex flex-col justify-start pt-4 pr-10 mb-8 lg:mb-0">
                        <div className="flex items-left justify-left gap-2 mb-4">
                            <p className="text-black text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                                OUR SERVICES
                            </p>
                        </div>
                        {/* Star with lines */}
                        <div className="flex items-center justify-left gap-2 mb-4">
                            <div className="h-px w-8 bg-black"></div>
                            <Star size={12} fill="#07294D" className="text-black" />
                            <div className="h-px w-8 bg-black"></div>
                        </div>

                        <h2 className="text-black text-4xl lg:text-5xl font-bold">
                            Comprehensive immigration and visa services
                        </h2>
                    </div>
                    {/* Service 1: Application assistance */}
                    <div className="bg-[#0e2554] p-8 rounded-xl flex flex-col hover:bg-[#14326e] transition-colors cursor-pointer group">
                        <div className="mb-14 relative w-10 h-10">
                            <FileText size={40} className="text-white group-hover:scale-110 transition-transform origin-bottom-left" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-white text-lg font-bold mb-3">Application assistance</h3>
                        <p className="text-blue-100 text-sm leading-relaxed opacity-80">
                            Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but.
                        </p>
                    </div>

                    {/* Service 2: Visa guidance */}
                    <div className="bg-[#0e2554] p-8 rounded-xl flex flex-col hover:bg-[#14326e] transition-colors cursor-pointer group">
                        <div className="mb-14 relative w-10 h-10">
                            <Package size={40} className="text-white group-hover:scale-110 transition-transform origin-bottom-left" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-white text-lg font-bold mb-3">Visa guidance</h3>
                        <p className="text-blue-100 text-sm leading-relaxed opacity-80">
                            Time upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but.
                        </p>
                    </div>

                    {/* Service 3: Document preparation */}
                    <div className="bg-[#0e2554] p-8 rounded-xl flex flex-col hover:bg-[#14326e] transition-colors cursor-pointer group">
                        <div className="mb-14 relative w-10 h-10">
                            <FileCheck size={40} className="text-white group-hover:scale-110 transition-transform origin-bottom-left" strokeWidth={1.5} />
                            <div className="absolute -bottom-1 -right-2 w-5 h-5 bg-[#214BE0] rounded-full flex items-center justify-center">
                                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            </div>
                        </div>
                        <h3 className="text-white text-lg font-bold mb-3">Document preparation</h3>
                        <p className="text-blue-100 text-sm leading-relaxed opacity-80">
                            Expert upon yet way get cold spot its week. Almost do am or limits resolve parties but.
                        </p>
                    </div>

                    {/* Service 4: Visa Tracking */}
                    <div className="bg-[#0e2554] p-8 rounded-xl flex flex-col hover:bg-[#14326e] transition-colors cursor-pointer group">
                        <div className="mb-14 relative w-10 h-10">
                            <MonitorPlay size={40} className="text-white group-hover:scale-110 transition-transform origin-bottom-left" strokeWidth={1.5} />
                            <div className="absolute -bottom-1 -right-2 w-5 h-5 bg-[#214BE0] rounded-full flex items-center justify-center">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                            </div>
                        </div>
                        <h3 className="text-white text-lg font-bold mb-3">Visa Tracking</h3>
                        <p className="text-blue-100 text-sm leading-relaxed opacity-80">
                            Ticket upon yet way get cold spot its week. Almost do am or limits heart is parties.
                        </p>
                    </div>

                    {/* Service 5: Language Proficiency */}
                    <div className="bg-[#0e2554] p-8 rounded-xl flex flex-col hover:bg-[#14326e] transition-colors cursor-pointer group">
                        <div className="mb-14 relative w-10 h-10">
                            <MessageSquare size={40} className="text-white group-hover:scale-110 transition-transform origin-bottom-left" strokeWidth={1.5} />
                            <div className="absolute -bottom-1 -right-2 w-6 h-6 bg-[#214BE0] rounded-full flex items-center justify-center text-[9px] font-bold text-white tracking-tighter">
                                EN
                            </div>
                        </div>
                        <h3 className="text-white text-lg font-bold mb-3">Language Proficiency</h3>
                        <p className="text-blue-100 text-sm leading-relaxed opacity-80">
                            Ticket upon yet way get cold spot its week. Almost do am or limits heart is parties.
                        </p>
                    </div>

                    {/* 60+ Stats Block */}
                    <div className="flex flex-col justify-end p-8 pb-10">
                        <h3 className="text-consult-sky text-6xl font-bold mb-1">60+</h3>
                        <p className="text-consult-blue text-[15px] font-semibold mb-8">Types of service</p>

                        <a href="#" className="flex items-center justify-between text-consult-sky text-[11px] font-bold tracking-widest pb-3 border-b border-consult-blue/50 hover:border-consult-blue transition-colors group">
                            <span>VIEW ALL SERVICES</span>
                            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServicesOffered;
