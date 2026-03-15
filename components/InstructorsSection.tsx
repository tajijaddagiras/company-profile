"use client";

import React from "react";

const NoImg = ({ className = "", round = false, style }: { className?: string; round?: boolean; style?: React.CSSProperties }) => (
    <div className={`bg-gray-200 flex flex-col items-center justify-center gap-1 ${round ? "rounded-full" : "rounded-2xl"} ${className}`} style={style}>
        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-gray-400 text-xs">No Image</span>
    </div>
);

const instructors = [
    { name: "Maria Serpana", role: "Art Teacher", color: "#EF8FA1" },
];

const InstructorsSection = () => (
    <section id="instructors" className="bg-[#FFCDE4] py-20 px-6 md:px-20 relative overflow-hidden">

        {/* Doodles */}
        {/* Cactus on middle-left border */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30 pointer-events-none">
            <svg width="60" height="100" viewBox="0 0 60 100" fill="none" stroke="#4D96AD" strokeWidth="1.5">
                <path d="M30 90 L30 10 M30 40 C10 40, 10 20, 10 20 M30 60 C50 60, 50 40, 50 40" strokeLinecap="round" />
                <path d="M25 15 L35 15 M15 45 L25 45 M45 35 L55 35" strokeWidth="1" />
            </svg>
        </div>
        {/* Rainbow on middle-right border */}
        <div className="absolute -right-10 top-1/2 -translate-y-1/2 opacity-30 pointer-events-none rotate-12">
            <svg width="120" height="100" viewBox="0 0 120 100" fill="none" stroke="#4D96AD" strokeWidth="1.5">
                <path d="M20 70 C20 20, 100 20, 100 70" />
                <path d="M35 70 C35 35, 85 35, 85 70" opacity="0.6" />
                <path d="M50 70 C50 50, 70 50, 70 70" opacity="0.3" />
                <circle cx="20" cy="75" r="8" opacity="0.4" />
                <circle cx="100" cy="75" r="8" opacity="0.4" />
            </svg>
        </div>
        {/* Star near right card */}
        <div className="absolute right-1/4 top-1/3 opacity-30 text-[#4D96AD] text-2xl rotate-12">⭐</div>

        <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
                <p className="text-[#4D96AD] text-sm font-bold uppercase tracking-widest mb-3">Our Experts</p>
                <h2 className="text-4xl md:text-5xl font-black text-[#4D96AD]">Our Expert Instructor</h2>
            </div>

            <div className="flex justify-center">
                <div className="w-full max-w-sm flex flex-col items-center relative">
                    {instructors.map((inst, i) => (
                        <React.Fragment key={i}>
                            {/* Organic Teardrop Image Container - Floating above the card */}
                            <div
                                className="w-56 h-64 md:w-64 md:h-72 mb-[-60px] relative z-20 flex items-center justify-center overflow-hidden border-[8px] border-white shadow-2xl transition-transform duration-500"
                                style={{
                                    background: inst.color,
                                    borderRadius: "100px 100px 20px 100px",
                                }}
                            >
                                <NoImg className="w-full h-full opacity-90" style={{ borderRadius: "92px 92px 12px 92px" }} />
                            </div>

                            {/* White Card Content */}
                            <div className="bg-white w-full rounded-[40px] pt-20 pb-10 px-6 flex flex-col items-center text-center shadow-sm border border-gray-50">
                                <h3 className="text-[#4D96AD] font-black text-xl mb-1 tracking-tight">{inst.name}</h3>
                                <p className="text-gray-400 text-xs font-bold mb-8 uppercase tracking-wide">{inst.role}</p>

                                <div className="flex gap-6 justify-center">
                                    {["f", "𝕏", "▶", "in"].map((icon) => (
                                        <a
                                            key={icon}
                                            href="#"
                                            className="text-gray-400 transition-colors text-sm font-bold"
                                        >
                                            {icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default InstructorsSection;
