"use client";

import React, { useState } from "react";

const testimonials = [
    {
        quote: "Each powerful lesson for our preschool before toddlers register in a related school have a significant impact on children that helps them at the beginning of the higher study to create a base level intellectual success.",
        name: "Ronald Richards",
        role: "Co-Founder",
        photo: null // Placeholder
    },
    {
        quote: "The instructors are incredibly patient and the curriculum is perfectly balanced between play and learning. My daughter has blossomed so much since joining the preschool program last year.",
        name: "Jane Smith",
        role: "Parent",
        photo: null
    }
];

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section id="testimonials" className="bg-white py-24 px-6 md:px-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative">

                {/* Large organic card for testimonial */}
                <div className="bg-[#FFCDE4] rounded-[60px] p-10 md:p-20 relative z-10 flex flex-col items-center text-center shadow-inner">

                    {/* Floating Nav Buttons */}
                    <button
                        onClick={prev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 shadow-sm hover:bg-[#4D96AD] hover:text-white hover:border-[#4D96AD] transition-all z-20"
                    >
                        ←
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#4D96AD] flex items-center justify-center text-white shadow-lg hover:bg-[#3d7a8c] transition-all z-20"
                    >
                        →
                    </button>

                    <p className="text-[#4D96AD] text-sm font-bold uppercase tracking-widest mb-4">Testimonials</p>
                    <h2 className="text-4xl font-black text-[#4D96AD] mb-10">What Clients Say</h2>

                    {/* Animated Quote Slide */}
                    <div className="max-w-3xl">
                        <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-10 italic">
                            &ldquo;{testimonials[currentIndex].quote}&rdquo;
                        </p>

                        <div className="flex flex-col items-center gap-3">
                            <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-md">
                                <div className="w-full h-full flex items-center justify-center bg-navy text-white text-xs">
                                    Photo
                                </div>
                            </div>
                            <div>
                                <p className="font-extrabold text-[#4D96AD] text-lg">{testimonials[currentIndex].name}</p>
                                <p className="text-[#4D96AD] text-sm font-bold uppercase tracking-wide">{testimonials[currentIndex].role}</p>
                            </div>
                        </div>
                    </div>

                    {/* Giraffe doodle floating near the card */}
                    <div className="absolute right-[-20px] bottom-[-20px] hidden lg:block pointer-events-none opacity-90">
                        <div className="flex flex-col items-center">
                            <span className="text-8xl">🦒</span>
                        </div>
                    </div>
                </div>

                {/* Decorative abstract shapes behind the card */}
                <div className="absolute -left-10 top-1/4 w-32 h-32 bg-orange-100/30 rounded-full blur-3xl" />
                <div className="absolute -right-10 bottom-1/4 w-40 h-40 bg-blue-100/30 rounded-full blur-3xl" />
            </div>


        </section>
    );
};

export default TestimonialsSection;
