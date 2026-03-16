"use client";

import React, { useState } from "react";

const PricingSection = () => {
    const [isPrivate, setIsPrivate] = useState(false);

    const commonFeatures = [
        "Level Basic, Intermediate dan Advanced",
        "1 bulan = 4 pertemuan",
        "1 minggu = 1 pertemuan",
        "Senin - Jumat (fleksibel)",
        "Final Exam"
    ];

    const privateExtraFeature = "Kelebihan : manajement waktu lebih banyak dan pembelajaran lebih intensif";

    const plans = [
        {
            name: isPrivate ? "Paket Private Drawing" : "Paket Regular Drawing",
            price: isPrivate ? "850.000" : "600.000",
            period: "Bulan",
            features: isPrivate ? [...commonFeatures, privateExtraFeature] : commonFeatures,
            color: "white",
            textColor: "#4D96AD"
        },
        {
            name: isPrivate ? "Paket Private Digital Desain" : "Paket Regular Digital Desain",
            price: isPrivate ? "850.000" : "600.000",
            period: "Bulan",
            features: isPrivate ? [...commonFeatures, privateExtraFeature] : commonFeatures,
            color: "#FFD9E8",
            textColor: "#4D96AD"
        },
        {
            name: isPrivate ? "Paket Private 3D Animation" : "Paket Regular 3D Animation",
            price: isPrivate ? "850.000" : "600.000",
            period: "Bulan",
            features: isPrivate ? [...commonFeatures, privateExtraFeature] : commonFeatures,
            color: "white",
            textColor: "#4D96AD"
        }
    ];

    return (
        <section id="pricing" className="bg-[#D5EED1] py-24 px-6 md:px-20 relative overflow-hidden">
            {/* Top Transition - Reduced spacing */}
            <div className="h-4" />

            {/* Doodles */}
            {/* Tree doodle bottom-left */}
            <div className="absolute bottom-10 left-10 pointer-events-none opacity-40">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="#4D96AD" strokeWidth="2">
                    <path d="M50 80 L50 40 M30 60 C30 40, 50 20, 50 20 C50 20, 70 40, 70 60 C70 80, 50 80, 50 80 Z" />
                    <rect x="35" y="80" width="30" height="5" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto text-center relative z-10 pt-2">
                <p className="text-[#4D96AD] text-sm font-bold uppercase tracking-widest mb-3">Our Pricing</p>
                <h2 className="text-4xl md:text-5xl font-black text-[#4D96AD] mb-10 leading-tight">
                    Select A Plan According To<br />Your Requirements
                </h2>

                {/* Toggle Switch */}
                <div className="flex items-center justify-center gap-6 mb-16">
                    <span className={`text-lg md:text-xl font-black transition-colors duration-300 ${!isPrivate ? "text-[#4D96AD] drop-shadow-sm" : "text-gray-400 opacity-70"}`}>Regular</span>
                    <button
                        onClick={() => setIsPrivate(!isPrivate)}
                        className="w-24 h-12 bg-white rounded-full relative transition-colors duration-300 shadow-lg border-2 border-[#4D96AD]/20 focus:outline-none hover:shadow-xl"
                    >
                        <div className={`absolute top-1 left-1 w-9 h-9 bg-[#4D96AD] rounded-full shadow-md transition-transform duration-300 ${isPrivate ? "translate-x-12" : "translate-x-0"}`} />
                    </button>
                    <span className={`text-lg md:text-xl font-black transition-colors duration-300 ${isPrivate ? "text-[#4D96AD] drop-shadow-sm" : "text-gray-400 opacity-70"}`}>Private</span>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`rounded-[40px] p-10 text-left flex flex-col gap-6 relative overflow-hidden shadow-md`}
                            style={{
                                backgroundColor: plan.color,
                                color: plan.textColor,
                                border: plan.color === "white" ? "1px solid #f0f0f0" : "none",
                                zIndex: plan.color === "#FFD9E8" ? 20 : 10,
                            }}
                        >
                            {/* Decorative organic shapes inside cards */}
                            <div className="absolute top-0 right-0 w-24 h-24 opacity-10 bg-current rounded-full -mr-10 -mt-10" />
                            <div className="absolute bottom-10 left-[-20px] w-20 h-20 opacity-10 border-4 border-current rounded-full" />

                            <div className="relative">
                                <h3 className="text-xl font-black mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-sm font-black mr-1">Rp</span>
                                    <span className="text-3xl font-black">{plan.price}</span>
                                    <span className="text-sm opacity-70">/{plan.period}</span>
                                </div>
                            </div>

                            <ul className="flex flex-col gap-4 my-4">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span className="text-[#4D96AD] font-bold">✓</span>
                                        <span className="text-sm font-medium opacity-90">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    ))}
                </div>
            </div>

            {/* Straight Bottom Transition to Testimonials Section - Changed from Wavy */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-white" />
        </section>
    );
};

export default PricingSection;
