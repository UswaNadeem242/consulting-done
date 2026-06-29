'use client';
import React, { useState } from 'react';
import { MapPin, Mail, Phone, MessageCircle } from 'lucide-react';

export default function ContactFormSection() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let newErrors = { name: '', email: '', message: '' };
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email';
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
            isValid = false;
        }

        setErrors(newErrors);

        if (isValid) {
            // Proceed with form submission logic
            alert('Form submitted successfully!');
            setFormData({ name: '', email: '', message: '' });
        }
    };

    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16">

                {/* Left Column: Form & Map */}
                <div>
                    <h2 className="text-black text-2xl md:text-3xl font-bold mb-8">
                        Request Free Consultation
                    </h2>

                    <div className="flex flex-col md:flex-row bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden">
                        {/* Form Side */}
                        <div className="w-full md:w-1/2 p-6 md:p-8">
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your name*"
                                        className={`w-full border p-3.5 rounded focus:outline-none focus:ring-1 focus:ring-consbg-consult-blue transition-colors ${errors.name ? 'border-red-500' : 'border-gray-200'}`}
                                        value={formData.name}
                                        onChange={(e) => { setFormData({ ...formData, name: e.target.value }); setErrors({ ...errors, name: '' }) }}
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.name}</p>}
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your email*"
                                        className={`w-full border p-3.5 rounded focus:outline-none focus:ring-1 focus:ring-consbg-consult-blue transition-colors ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                                        value={formData.email}
                                        onChange={(e) => { setFormData({ ...formData, email: e.target.value }); setErrors({ ...errors, email: '' }) }}
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.email}</p>}
                                </div>

                                <div>
                                    <textarea
                                        placeholder="Your message*"
                                        rows={4}
                                        className={`w-full border p-3.5 rounded focus:outline-none focus:ring-1 focus:ring-consbg-consult-blue transition-colors resize-none ${errors.message ? 'border-red-500' : 'border-gray-200'}`}
                                        value={formData.message}
                                        onChange={(e) => { setFormData({ ...formData, message: e.target.value }); setErrors({ ...errors, message: '' }) }}
                                    />
                                    {errors.message && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    className="bg-consult-blue text-white px-8 py-3.5 rounded hover:bg-[#4d61ca] transition-colors font-medium tracking-wide mt-2"
                                >
                                    SUBMIT
                                </button>
                            </form>
                        </div>

                        {/* Map Side */}
                        <div className="w-full md:w-1/2 min-h-[300px] bg-gray-100">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13791.800057121652!2d71.4651378!3d30.2100067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b33df0fffffff%3A0x1d6e8a8b19e8c0e!2sGulistan-e-Ashar%20Colony%2C%20Multan%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                                className="w-full h-full border-0 min-h-[300px]"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Column: Contact Details */}
                <div>
                    <h2 className="text-black text-2xl md:text-3xl font-bold mb-8">
                        Get In Touch
                    </h2>

                    <div className="space-y-6">
                        <h3 className="font-semibold text-black text-lg">Reach Us</h3>

                        <div className="flex items-start gap-4">
                            <MapPin className="text-consult-blue w-5 h-5 mt-1 shrink-0" />
                            <p className="text-axc-gray text-sm leading-relaxed">
                                Main Boulevard, Near Ali Chowk,<br />
                                Gulistan e Ashar Colony, Multan,<br />
                                60600, Punjab, Pakistan
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <Mail className="text-consult-blue w-5 h-5 shrink-0" />
                            <a href="mailto:admissions@mibes.com.pk" className="text-axc-gray text-sm hover:text-consult-blue transition-colors">
                                admissions@mibes.com.pk
                            </a>
                        </div>

                        <div className="flex items-center gap-4">
                            <Phone className="text-consult-blue w-5 h-5 shrink-0" />
                            <a href="tel:00923136244122" className="text-axc-gray text-sm hover:text-consult-blue transition-colors">
                                0092-313-6244122
                            </a>
                        </div>

                        <div className="flex items-center gap-4">
                            <MessageCircle className="text-consult-blue w-5 h-5 shrink-0" />
                            <a href="#" className="text-axc-gray text-sm hover:text-consult-blue transition-colors">
                                Whatsapp Group
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
