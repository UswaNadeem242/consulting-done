import React from 'react';
import { MessageCircleMore, Phone } from 'lucide-react';
import Link from 'next/link';
import { FOOTER_LINK } from '../lib/constant';



export default function Footer() {
    return (
        <footer className="bg-consult-blue text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">

                {/* Column 1: MIBES */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6 tracking-wide">MIBES</h3>
                    <p className="text-white text-sm leading-relaxed mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    <div className="flex items-center gap-4 text-white">
                        <Link href="#" aria-label="Facebook" className="hover:text-axc-gray transition-colors">
                            {/* <Facebook size={18} fill="currentColor" strokeWidth={0} /> */}
                        </Link>
                        <Link href="#" aria-label="WhatsApp" className="hover:text-axc-gray transition-colors">
                            <Phone size={18} fill="currentColor" strokeWidth={0} />

                        </Link>
                        <Link href="#" aria-label="Phone" className="hover:text-axc-gray transition-colors">
                            <MessageCircleMore size={18} fill="currentColor" strokeWidth={0} />

                        </Link>
                    </div>
                </div>

                {/* Column 2: Company */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6">Company</h3>
                    <ul className="text-text-white text-sm space-y-3">
                        {FOOTER_LINK?.map((item, index) => (
                            <li key={index} className={item.className || ''}>
                                {/* {
                                item.subLinks ? (
                                    <ul className="pl-4 space-y-2 mt-2 text-xs font-medium tracking-wide">
                                        {item.subLinks.map((subLink, subIndex) => (
                                            <li key={subIndex}>
                                                <Link href={subLink.href} className="hover:text-white transition-colors">
                                                    {subLink.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <Link href={item.href || '#'} className="hover:text-white transition-colors">
                                        {item.label}
                                    </Link>
                                )} */}

                                <Link href={item.href || '#'} className="hover:text-white transition-colors">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>



                {/* Column 4: Get In Touch */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6">Get In Touch</h3>
                    <div className="text-white text-sm space-y-4">
                        <p className="leading-relaxed">
                            Main Boulevard, Near Ali Chowk,<br />
                            Gulistan e Ashar Colony, Multan,<br />
                            60600, Punjab, Pakistan
                        </p>
                        <p>
                            <a href="mailto:admissions@mibes.com.pk" className="hover:text-white transition-colors">admissions@mibes.com.pk</a>
                        </p>
                        <p>
                            <a href="tel:00923136244122" className="hover:text-white transition-colors">0092-313-6244122</a>
                        </p>
                    </div>
                </div>

            </div>

            {/* Footer Bottom */}
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[white text-center text-white text-sm">
                <p>Copyright &copy; 2026 MIB Education Services | Powered by MIB Education Services</p>
            </div>
        </footer>
    );
}
