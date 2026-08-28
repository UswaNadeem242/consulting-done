// 'use client';
// import React, { useState } from 'react';
// import { MapPin, Mail, Phone, MessageCircle } from 'lucide-react';
// import { supabase } from "../../../lib/supabase";
// import { ToastContainer, toast } from 'react-toastify';

// export default function ContactFormSection() {

//     const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//     const [errors, setErrors] = useState({ name: '', email: '', message: '' });

//     const validateEmail = (email: string) => {
//         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//     };

//     const [loading, setLoading] = useState(false);
//     const [success, setSuccess] = useState("");
//     const [error, setError] = useState("");

//     // const handleSubmit = async (e: React.FormEvent) => {
//     //     e.preventDefault();
//     //     let newErrors = { name: '', email: '', message: '' };
//     //     let isValid = true;

//     //     if (!formData.name.trim()) {
//     //         newErrors.name = 'Name is required';
//     //         isValid = false;
//     //     }

//     //     if (!formData.email.trim()) {
//     //         newErrors.email = 'Email is required';
//     //         isValid = false;
//     //     } else if (!validateEmail(formData.email)) {
//     //         newErrors.email = 'Please enter a valid email';
//     //         isValid = false;
//     //     }

//     //     if (!formData.message.trim()) {
//     //         newErrors.message = 'Message is required';
//     //         isValid = false;
//     //     }

//     //     setErrors(newErrors);

//     //     if (isValid) {
//     //         setLoading(true);
//     //         setSuccess("");
//     //         setError("");

//     //         const data = {
//     //             name: formData.name,
//     //             email: formData.email,
//     //             message: formData.message,
//     //         };
//     //         console.log("Sending data:", data);

//     //         try {
//     //             const response = await fetch(
//     //                 "http://localhost:5000/api/contact",
//     //                 {
//     //                     method: "POST",
//     //                     headers: {
//     //                         "Content-Type": "application/json",
//     //                     },
//     //                     body: JSON.stringify(data),
//     //                 }
//     //             );

//     //             const result = await response.json();

//     //             if (!response.ok) {
//     //                 throw new Error(result.message);
//     //             }

//     //             setSuccess("Your message has been sent successfully!");
//     //             alert('Your message has been sent successfully!');
//     //             setFormData({ name: '', email: '', message: '' });

//     //         } catch (err) {
//     //             console.error(err);
//     //             setError(
//     //                 "Something went wrong. Please try again."
//     //             );
//     //          } finally {
//     //             setLoading(false);
//     //         }
//     //     }
//     // };
//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         setLoading(true);

//         const form = e.currentTarget;

//         const data = {
//             name: formData.name.trim(),
//             email: formData.email.trim(),
//             message: formData.message.trim(),
//         };

//         if (!data.name || !data.email || !data.message) {
//             toast.error("Please fill in your name, email and message.");
//             setLoading(false);
//             return;
//         }

//         try {
//             // 1. Send Email Notification via Resend (/api/contact)
//             const res = await fetch("/api/contact", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(data),
//             });

//             const resData = await res.json().catch(() => ({}));

//             if (!res.ok) {
//                 throw new Error(resData?.error || "Failed to send email.");
//             }

//             // 2. Save submission to Supabase Database (contact_form table)
//             try {
//                 if (supabase) {
//                     await supabase.from("mibk_contact_form").insert([data]);
//                 }
//             } catch (dbErr) {
//                 console.warn("Supabase insert warning:", dbErr);
//             }

//             toast.success("Your message has been sent successfully!");
//             form.reset();

//         } catch (error: any) {
//             console.error("Contact Form Error:", error);
//             toast.error(error?.message || "Failed to send message. Please try again.");
//         } finally {
//             setLoading(false);
//         }
//     };
//     return (
//         <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ">
//             <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16">

//                 {/* Left Column: Form & Map */}
//                 <div>
//                     <h2 className="text-black text-2xl md:text-3xl font-bold mb-8">
//                         Request Free Consultation
//                     </h2>

//                     <div className="flex flex-col md:flex-row bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden">
//                         {/* Form Side */}
//                         <div className="w-full md:w-1/2 p-6 md:p-8">
//                             <form className="space-y-5" onSubmit={handleSubmit}>
//                                 <div>
//                                     <input
//                                         type="text"
//                                         placeholder="Your name*"
//                                         className={`w-full border p-3.5 rounded focus:outline-none focus:ring-1 focus:ring-consbg-consult-blue transition-colors ${errors.name ? 'border-red-500' : 'border-gray-200'}`}
//                                         value={formData.name}
//                                         onChange={(e) => { setFormData({ ...formData, name: e.target.value }); setErrors({ ...errors, name: '' }) }}
//                                     />
//                                     {errors.name && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.name}</p>}
//                                 </div>

//                                 <div>
//                                     <input
//                                         type="text"
//                                         placeholder="Your email*"
//                                         className={`w-full border p-3.5 rounded focus:outline-none focus:ring-1 focus:ring-consbg-consult-blue transition-colors ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
//                                         value={formData.email}
//                                         onChange={(e) => { setFormData({ ...formData, email: e.target.value }); setErrors({ ...errors, email: '' }) }}
//                                     />
//                                     {errors.email && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.email}</p>}
//                                 </div>

//                                 <div>
//                                     <textarea
//                                         placeholder="Your message*"
//                                         rows={4}
//                                         className={`w-full border p-3.5 rounded focus:outline-none focus:ring-1 focus:ring-consbg-consult-blue transition-colors resize-none ${errors.message ? 'border-red-500' : 'border-gray-200'}`}
//                                         value={formData.message}
//                                         onChange={(e) => { setFormData({ ...formData, message: e.target.value }); setErrors({ ...errors, message: '' }) }}
//                                     />
//                                     {errors.message && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.message}</p>}
//                                 </div>
//                                 {success && (
//                                     <div className="text-green-600 text-sm">{success}</div>
//                                 )}
//                                 {error && (
//                                     <div className="text-red-600 text-sm">{error}</div>
//                                 )}
//                                 <button
//                                     type="submit"
//                                     disabled={loading}
//                                     className="bg-consult-blue cursor-pointer text-white px-8 py-3.5 rounded hover:bg-[#4d61ca] transition-colors font-medium tracking-wide mt-2"
//                                 >
//                                     {loading ? "SENDING..." : "SUBMIT"}
//                                 </button>
//                             </form>
//                         </div>

//                         {/* Map Side */}
//                         <div className="w-full md:w-1/2 min-h-[300px] bg-gray-100">
//                             <iframe
//                                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13791.800057121652!2d71.4651378!3d30.2100067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b33df0fffffff%3A0x1d6e8a8b19e8c0e!2sGulistan-e-Ashar%20Colony%2C%20Multan%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
//                                 className="w-full h-full border-0 min-h-[300px]"
//                                 allowFullScreen
//                                 loading="lazy"
//                                 referrerPolicy="no-referrer-when-downgrade"
//                             />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Column: Contact Details */}
//                 <div>
//                     <h2 className="text-black text-2xl md:text-3xl font-bold mb-8">
//                         Get In Touch
//                     </h2>

//                     <div className="space-y-6">
//                         <h3 className="font-semibold text-black text-lg">Reach Us</h3>

//                         {/* <div className="flex items-start gap-4">
//                             <MapPin className="text-consult-blue w-5 h-5 mt-1 shrink-0" />
//                             <p className="text-axc-gray text-sm leading-relaxed">
//                                 Main Boulevard, Near Ali Chowk,<br />
//                                 Gulistan e Ashar Colony, Multan,<br />
//                                 60600, Punjab, Pakistan
//                             </p>
//                         </div> */}

//                         <div className="flex items-center gap-4">
//                             <Mail className="text-consult-blue w-5 h-5 shrink-0" />
//                             <a href="mailto:mibkconsultancyltd@gmail.com" className="text-axc-gray text-sm hover:text-consult-blue transition-colors">
//                                 mibkconsultancyltd@gmail.com
//                             </a>
//                         </div>

//                         <div className="flex items-center gap-4">
//                             <Phone className="text-consult-blue w-5 h-5 shrink-0" />
//                             <a href="tel:44 7721 575886" className="text-axc-gray text-sm hover:text-consult-blue transition-colors">
//                                 +44 7721 575886
//                             </a>
//                         </div>

//                         <div className="flex items-center gap-4">
//                             <MessageCircle className="text-consult-blue w-5 h-5 shrink-0" />
//                             <a href="#" className="text-axc-gray text-sm hover:text-consult-blue transition-colors">
//                                 Whatsapp Group
//                             </a>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// }




"use client";

import React, { useState } from "react";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import { supabase } from "../../../src/lib/supabase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactFormSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    // const handleSubmit = async (
    //     e: React.FormEvent<HTMLFormElement>
    // ) => {
    //     e.preventDefault();

    //     const newErrors = {
    //         name: "",
    //         email: "",
    //         message: "",
    //     };

    //     let isValid = true;

    //     // Name validation
    //     if (!formData.name.trim()) {
    //         newErrors.name = "Name is required";
    //         isValid = false;
    //     }

    //     // Email validation
    //     if (!formData.email.trim()) {
    //         newErrors.email = "Email is required";
    //         isValid = false;
    //     } else if (!validateEmail(formData.email.trim())) {
    //         newErrors.email = "Please enter a valid email";
    //         isValid = false;
    //     }

    //     // Message validation
    //     if (!formData.message.trim()) {
    //         newErrors.message = "Message is required";
    //         isValid = false;
    //     }

    //     setErrors(newErrors);

    //     if (!isValid) {
    //         return;
    //     }

    //     setLoading(true);

    //     const data = {
    //         name: formData.name.trim(),
    //         email: formData.email.trim(),
    //         message: formData.message.trim(),
    //     };

    //     try {
    //         // Send email through Next.js API route
    //         const response = await fetch("/api/contact", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(data),
    //         });

    //         const result = await response.json().catch(() => ({}));

    //         if (!response.ok) {
    //             throw new Error(
    //                 result?.error || "Failed to send email."
    //             );
    //         }

    //         // Save submission to Supabase
    //         try {
    //             if (supabase) {
    //                 const { error: dbError } = await supabase
    //                     .from("mibk_contact_form")
    //                     .insert([
    //                         {
    //                             name: data.name,
    //                             email: data.email,
    //                             message: data.message,
    //                         },
    //                     ]);

    //                 if (dbError) {
    //                     console.warn(
    //                         "Supabase insert warning:",
    //                         dbError
    //                     );
    //                 }
    //             }
    //         } catch (dbError) {
    //             console.warn(
    //                 "Supabase insert warning:",
    //                 dbError
    //             );
    //         }

    //         // Success
    //         toast.success(
    //             "Your message has been sent successfully!"
    //         );

    //         setFormData({
    //             name: "",
    //             email: "",
    //             message: "",
    //         });

    //         setErrors({
    //             name: "",
    //             email: "",
    //             message: "",
    //         });
    //     } catch (error) {
    //         console.error("Contact Form Error:", error);

    //         toast.error(
    //             error instanceof Error
    //                 ? error.message
    //                 : "Failed to send message. Please try again."
    //         );
    //     } finally {
    //         setLoading(false);
    //     }
    // };


    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        const newErrors = {
            name: "",
            email: "",
            message: "",
        };

        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!validateEmail(formData.email.trim())) {
            newErrors.email = "Please enter a valid email";
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
            isValid = false;
        }

        setErrors(newErrors);

        if (!isValid) {
            return;
        }

        setLoading(true);

        const data = {
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json().catch(() => ({}));

            if (!response.ok) {
                throw new Error(
                    result?.error ||
                    "Failed to send message."
                );
            }

            toast.success(
                "Your message has been sent successfully!"
            );

            setFormData({
                name: "",
                email: "",
                message: "",
            });

            setErrors({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            console.error(
                "Contact Form Error:",
                error
            );

            toast.error(
                error instanceof Error
                    ? error.message
                    : "Failed to send message. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };
    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <ToastContainer position="top-right" autoClose={4000} />

            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16">

                {/* LEFT SIDE */}
                <div>
                    <h2 className="text-black text-2xl md:text-3xl font-bold mb-8">
                        Request Free Consultation
                    </h2>

                    <div className="flex flex-col md:flex-row bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden">

                        {/* FORM */}
                        <div className="w-full md:w-1/2 p-6 md:p-8">
                            <form
                                className="space-y-5"
                                onSubmit={handleSubmit}
                                noValidate
                            >

                                {/* NAME */}
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your name*"
                                        value={formData.name}
                                        disabled={loading}
                                        className={`w-full border p-3.5 rounded focus:outline-none focus:ring-1 focus:ring-consbg-consult-blue transition-colors ${errors.name
                                                ? "border-red-500"
                                                : "border-gray-200"
                                            }`}
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                name: e.target.value,
                                            });

                                            setErrors({
                                                ...errors,
                                                name: "",
                                            });
                                        }}
                                    />

                                    {errors.name && (
                                        <p className="text-red-500 text-xs mt-1.5 ml-1">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                {/* EMAIL */}
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Your email*"
                                        value={formData.email}
                                        disabled={loading}
                                        className={`w-full border p-3.5 rounded focus:outline-none focus:ring-1 focus:ring-consbg-consult-blue transition-colors ${errors.email
                                                ? "border-red-500"
                                                : "border-gray-200"
                                            }`}
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                email: e.target.value,
                                            });

                                            setErrors({
                                                ...errors,
                                                email: "",
                                            });
                                        }}
                                    />

                                    {errors.email && (
                                        <p className="text-red-500 text-xs mt-1.5 ml-1">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                {/* MESSAGE */}
                                <div>
                                    <textarea
                                        placeholder="Your message*"
                                        rows={4}
                                        value={formData.message}
                                        disabled={loading}
                                        className={`w-full border p-3.5 rounded focus:outline-none focus:ring-1 focus:ring-consbg-consult-blue transition-colors resize-none ${errors.message
                                                ? "border-red-500"
                                                : "border-gray-200"
                                            }`}
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                message: e.target.value,
                                            });

                                            setErrors({
                                                ...errors,
                                                message: "",
                                            });
                                        }}
                                    />

                                    {errors.message && (
                                        <p className="text-red-500 text-xs mt-1.5 ml-1">
                                            {errors.message}
                                        </p>
                                    )}
                                </div>

                                {/* SUBMIT */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="bg-consult-blue cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed text-white px-8 py-3.5 rounded hover:bg-[#4d61ca] transition-colors font-medium tracking-wide mt-2"
                                >
                                    {loading
                                        ? "SENDING..."
                                        : "SUBMIT"}
                                </button>
                            </form>
                        </div>

                        {/* MAP */}
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

                {/* RIGHT SIDE */}
                <div>
                    <h2 className="text-black text-2xl md:text-3xl font-bold mb-8">
                        Get In Touch
                    </h2>

                    <div className="space-y-6">
                        <h3 className="font-semibold text-black text-lg">
                            Reach Us
                        </h3>

                        {/* EMAIL */}
                        <div className="flex items-center gap-4">
                            <Mail className="text-consult-blue w-5 h-5 shrink-0" />

                            <a
                                href="mailto:info@mibkconsultancyltd.co.uk"
                                className="text-axc-gray text-sm hover:text-consult-blue transition-colors"
                            >
                                info@mibkconsultancyltd.co.uk
                            </a>
                        </div>

                        {/* PHONE */}
                        <div className="flex items-center gap-4">
                            <Phone className="text-consult-blue w-5 h-5 shrink-0" />

                            <a
                                href="tel:+447721575886"
                                className="text-axc-gray text-sm hover:text-consult-blue transition-colors"
                            >
                                +44 7721 575886
                            </a>
                        </div>

                        {/* WHATSAPP */}
                        <div className="flex items-center gap-4">
                            <MessageCircle className="text-consult-blue w-5 h-5 shrink-0" />

                            <a
                                href="#"
                                className="text-axc-gray text-sm hover:text-consult-blue transition-colors"
                            >
                                Whatsapp Group
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}