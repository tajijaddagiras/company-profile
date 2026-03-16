"use client";

import React, { useState } from "react";

const testimonials = [
    {
        quote: "Miss nya sangat membantu untuk murid baru bagi pemula menggunakan blender jadi agar tau dengan step by step dan pengertian teknisi penggunaan Blender Jadi Tujuannya agar murid bisa tau menggunakan blender dan desain 3d siapa tau akan dipakai untuk dimasa depan jadi lebih baik dan hal itu sangat membantu sekali :)",
        name: "Caren Jessica",
        role: "Student",
        photo: "/images/testi1.jpeg"
    },
    {
        quote: "Metode belajar miss nya sangat bagus, dengan cara membimbing murid untuk berkembang sangat baik. Terimakasih miss :)",
        name: "Joel Derren",
        role: "Student",
        photo: "/images/testi2.jpeg"
    },
    {
        quote: "The instructors are incredibly patient and the curriculum is perfectly balanced between play and learning. My daughter has blossomed so much since joining the preschool program last year.",
        name: "Jane Smith",
        role: "Parent",
        photo: null
    }
];

const NoImg = ({ className = "", round = false, style }: { className?: string; round?: boolean; style?: React.CSSProperties }) => (
    <div className={`bg-gray-200 flex flex-col items-center justify-center gap-1 ${round ? "rounded-full" : "rounded-2xl"} ${className}`} style={style}>
        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-gray-400 text-xs">No Image</span>
    </div>
);

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section id="testimonials" className="bg-white py-16 px-6 md:px-20 relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative">

                {/* Compact organic card for testimonial */}
                <div className="bg-[#FFCDE4] rounded-[60px] p-8 md:p-14 relative z-10 flex flex-col items-center text-center shadow-inner pt-16 md:pt-20">

                    {/* Floating Nav Buttons - Moved INSIDE for safer/cleaner layout */}
                    <button
                        onClick={prev}
                        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-white flex items-center justify-center text-[#4D96AD] shadow-lg hover:bg-white transition-all z-20"
                    >
                        ←
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-white flex items-center justify-center text-[#4D96AD] shadow-lg hover:bg-white transition-all z-20"
                    >
                        →
                    </button>

                    <p className="text-[#4D96AD] text-xs font-bold uppercase tracking-widest mb-3">Testimonials</p>
                    <h2 className="text-3xl font-black text-[#4D96AD] mb-8">What Clients Say</h2>

                    {/* Photo at the top */}
                    <div className="relative group mb-6">
                        <div
                            className="w-32 h-40 flex items-center justify-center overflow-hidden border-[6px] border-white shadow-xl transition-transform duration-500 hover:scale-105"
                            style={{
                                background: "#4D96AD",
                                borderRadius: "60px 60px 12px 60px",
                            }}
                        >
                            {testimonials[currentIndex].photo ? (
                                <img
                                    src={testimonials[currentIndex].photo}
                                    alt={testimonials[currentIndex].name}
                                    className="w-full h-full object-cover"
                                    style={{ borderRadius: "54px 54px 6px 54px" }}
                                />
                            ) : (
                                <NoImg className="w-full h-full opacity-90" style={{ borderRadius: "54px 54px 6px 54px" }} />
                            )}
                        </div>
                    </div>

                    <div className="max-w-xl flex flex-col items-center">
                        {/* Name first */}
                        <p className="font-extrabold text-[#4D96AD] text-xl mb-4 tracking-tight">
                            {testimonials[currentIndex].name}
                        </p>

                        {/* Then Description (Quote) */}
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed italic mb-2">
                            &ldquo;{testimonials[currentIndex].quote}&rdquo;
                        </p>
                    </div>

                    {/* Giraffe doodle floating near the card */}
                    <div className="absolute right-[-20px] bottom-[-20px] hidden lg:block pointer-events-none opacity-90">
                        <div className="flex flex-col items-center">
                            <span className="text-7xl">🦒</span>
                        </div>
                    </div>
                </div>

                {/* Decorative abstract shapes behind the card */}
                <div className="absolute -left-20 top-1/4 w-32 h-32 bg-orange-100/30 rounded-full blur-3xl" />
                <div className="absolute -right-20 bottom-1/4 w-40 h-40 bg-blue-100/30 rounded-full blur-3xl" />
            </div>


        </section>
    );
};

export default TestimonialsSection;
