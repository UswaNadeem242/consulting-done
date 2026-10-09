"use client";

import React, { useState } from "react";
import { MapPin, Mail, Phone, MessageCircle, PhoneIcon, MailIcon } from "lucide-react";
import { supabase } from "../../../src/lib/supabase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { MotionHeading } from "../../../src/components/motion";

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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-14 items-start">


                {/* LEFT SIDE */}
                <div className="lg:col-span-7">
                    <MotionHeading
                        as="h2"
                        direction="up"
                        className="text-black text-2xl md:text-3xl font-bold mb-8"
                    >
                        Request Free Consultation
                    </MotionHeading>

                    <div className="flex flex-col md:flex-row bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden">

                        {/* FORM */}
                        <div className="w-full   p-6 md:p-8">
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

                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="lg:col-span-5 flex flex-col pt-1">
                    {/* Eyebrow */}
                    <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-consult-blue uppercase block mb-2">
                        A FREE FIRST ENQUIRY
                    </span>

                    {/* Heading */}
                    <MotionHeading
                        as="h2"
                        direction="up"
                        className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-black tracking-tight leading-[1.15] mb-4"
                    >
                        Your next step <br className="hidden sm:inline" />starts here.
                    </MotionHeading>

                    {/* Description */}
                    <p className="text-axc-gray text-sm sm:text-[15px] leading-relaxed  max-w-md">
                        Share a brief outline of your study plans using the form. You can also reach us by email or WhatsApp.
                    </p>

                    {/* Contact Cards */}
                    <div className="space-y-4 pt-4">
                        {/* Card 2: WhatsApp */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 flex items-start gap-4 sm:gap-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-gray-300 transition-all">
                            <div className="w-12 h-12 rounded-full bg-[#FAF1ED] flex items-center justify-center shrink-0">
                                <PhoneIcon className="w-5 h-5 text-consult-blue" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-base sm:text-[17px] font-bold text-consult-blue mb-1.5">
                                    WhatsApp
                                </h3>
                                <div className="flex flex-col gap-1 text-sm font-medium">
                                    <Link
                                        href="https://wa.me/447721575886"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-black hover:underline transition-colors"
                                    >
                                        +44 7721 575886
                                    </Link>
                                    <Link
                                        href="https://wa.me/447378932008"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-black hover:underline transition-colors"
                                    >
                                        +44 7378 932008
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Email */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 flex items-start gap-4 sm:gap-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-gray-300 transition-all">
                            <div className="w-12 h-12 rounded-full bg-[#FAF1ED] flex items-center justify-center shrink-0">
                                <MailIcon className="w-5 h-5 text-consult-blue" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-base sm:text-[17px] font-bold text-consult-blue mb-1.5">
                                    Email
                                </h3>
                                <Link
                                    href="mailto:mibkconsultancyltd@gmail.com"
                                    className="text-black text-sm font-medium hover:underline transition-colors break-all"
                                >
                                    mibkconsultancyltd@gmail.com
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}