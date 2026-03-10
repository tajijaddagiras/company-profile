"use client";

import React, { useState } from "react";

const PricingSection = () => {
    const [isYearly, setIsYearly] = useState(false);

    const plans = [
        {
            name: "Basic Plan",
            price: isYearly ? "350" : "35",
            period: isYearly ? "Yearly" : "Monthly",
            features: [
                "1.5-2 hours per day",
                "2 days in a week",
                "2-3 subjects taught",
                "Light snacks provided",
                "Materials included"
            ],
            color: "white",
            textColor: "#4D96AD"
        },
        {
            name: "Premium Plan",
            price: isYearly ? "990" : "99",
            period: isYearly ? "Yearly" : "Monthly",
            features: [
                "2.5-3 hours per day",
                "3 days in a week",
                "3-4 subjects taught",
                "Hot lunch provided",
                "Materials included"
            ],
            color: "#FFD9E8",
            textColor: "#4D96AD"
        },
        {
            name: "Advanced Plan",
            price: isYearly ? "1500" : "150",
            period: isYearly ? "Yearly" : "Monthly",
            features: [
                "4-5 hours per day",
                "5 days in a week",
                "All subjects taught",
                "Full meals provided",
                "Materials included"
            ],
            color: "white",
            textColor: "#4D96AD"
        }
    ];

    return (
        <section id="pricing" className="bg-[#D5EED1] py-24 px-6 md:px-20 relative overflow-hidden">
            {/* Wavy Top Transition from white section */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
                <svg viewBox="0 0 1440 60" fill="white" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
                    <path d="M0,0 C120,40 240,40 360,0 C480,40 600,40 720,0 C840,40 960,40 1080,0 C1200,40 1320,40 1440,0 L1440,0 L0,0 Z" />
                </svg>
            </div>

            {/* Doodles */}
            {/* Pencil/Brush doodle top-right */}
            <div className="absolute top-20 right-10 md:right-20 pointer-events-none opacity-60 rotate-12">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#4D96AD" strokeWidth="1.5">
                    <path d="M18 2L22 6L7 21L2 22L3 17L18 2Z" />
                    <path d="M15 5L19 9" />
                </svg>
            </div>
            {/* Tree doodle bottom-left */}
            <div className="absolute bottom-10 left-10 pointer-events-none opacity-40">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="#4D96AD" strokeWidth="2">
                    <path d="M50 80 L50 40 M30 60 C30 40, 50 20, 50 20 C50 20, 70 40, 70 60 C70 80, 50 80, 50 80 Z" />
                    <rect x="35" y="80" width="30" height="5" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto text-center relative z-10 pt-10">
                <p className="text-[#4D96AD] text-sm font-bold uppercase tracking-widest mb-3">Our Pricing</p>
                <h2 className="text-4xl md:text-5xl font-black text-[#4D96AD] mb-10 leading-tight">
                    Select A Plan According To<br />Your Requirements
                </h2>

                {/* Toggle Switch */}
                <div className="flex items-center justify-center gap-4 mb-16">
                    <span className={`text-sm font-bold ${!isYearly ? "text-[#4D96AD]" : "text-gray-400"}`}>Monthly</span>
                    <button
                        onClick={() => setIsYearly(!isYearly)}
                        className="w-16 h-8 bg-gray-200 rounded-full relative transition-colors duration-300"
                    >
                        <div className={`absolute top-1 left-1 w-6 h-6 bg-[#4D96AD] rounded-full transition-transform duration-300 ${isYearly ? "translate-x-8" : "translate-x-0"}`} />
                    </button>
                    <span className={`text-sm font-bold ${isYearly ? "text-[#4D96AD]" : "text-gray-400"}`}>Yearly</span>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`rounded-[40px] p-10 text-left flex flex-col gap-6 relative overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2`}
                            style={{
                                backgroundColor: plan.color,
                                color: plan.textColor,
                                border: plan.color === "white" ? "1px solid #f0f0f0" : "none",
                                zIndex: plan.color === "#FFD9E8" ? 20 : 10,
                                transform: plan.color === "#FFD9E8" ? "scale(1.05)" : "none"
                            }}
                        >
                            {/* Decorative organic shapes inside cards */}
                            <div className="absolute top-0 right-0 w-24 h-24 opacity-10 bg-current rounded-full -mr-10 -mt-10" />
                            <div className="absolute bottom-10 left-[-20px] w-20 h-20 opacity-10 border-4 border-current rounded-full" />

                            <div className="relative">
                                <h3 className="text-xl font-black mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-black">${plan.price}</span>
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

                            <button
                                className={`mt-auto py-4 rounded-2xl font-black whitespace-nowrap transition-all shadow-md group`}
                                style={{
                                    backgroundColor: plan.color === "white" ? "#4D96AD" : "white",
                                    color: plan.color === "white" ? "white" : "#4D96AD"
                                }}
                            >
                                Choose Plan <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
