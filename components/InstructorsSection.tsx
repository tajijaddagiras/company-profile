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
    {
        name: "Catherine Maria",
        role: "Founder & CEO of Catbear Art Studio",
        desc: (
            <>
                Di <span className="text-[#4D96AD] font-extrabold uppercase tracking-tighter">CatBear Art Studio</span>, kami percaya bahwa setiap anak terlahir dengan percikan talenta yang unik. Misi kami adalah mendampingi setiap langkah kecil mereka untuk menemukan potensi terbaik melampaui imajinasi.
                {"\n\n"}
                Melalui kurikulum seni yang kreatif dan menyenangkan, <span className="text-[#EF8FA1] font-extrabold underline decoration-2 decoration-[#EF8FA1]/30 underline-offset-4">CatBear Art Studio</span> hadir untuk membangun rasa percaya diri dan karakter tangguh bagi masa depan anak. Kami ingin setiap anak menyadari bahwa tidak ada mimpi yang terlalu besar untuk dimulai dari sekarang.
                {"\n\n"}
                Mari berkreasi bersama <span className="text-[#4D96AD] font-extrabold italic">CatBear Art Studio</span> tempat di mana imajinasi kecil berubah menjadi kekuatan besar untuk membuka dunia!
            </>
        ),
        color: "#EF8FA1",
        photo: "/images/instruktor.jpeg"
    },
];

const InstructorsSection = () => (
    <section id="instructors" className="bg-[#FFCDE4] py-24 px-6 md:px-20 relative overflow-hidden">

        {/* Floating Decorative Elements - Anti-Flat Layers */}
        {/* Artistic Icons */}
        <div className="absolute left-10 top-20 opacity-20 text-4xl animate-pulse delay-700 pointer-events-none">🎨</div>
        <div className="absolute right-10 top-40 opacity-20 text-4xl animate-bounce duration-[3000ms] pointer-events-none">✨</div>
        <div className="absolute left-1/4 bottom-40 opacity-15 text-5xl animate-pulse duration-[4000ms] pointer-events-none">🖌️</div>
        <div className="absolute right-1/4 bottom-1/4 opacity-15 text-4xl animate-bounce duration-[5000ms] pointer-events-none">⭐</div>

        {/* Abstract Circles */}
        <div className="absolute -left-20 top-1/4 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -right-20 bottom-1/4 w-80 h-80 bg-[#4D96AD]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Doodles from existing code */}
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

        <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
                <p className="text-[#4D96AD] text-sm font-bold uppercase tracking-widest mb-3">Our Experts</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#4D96AD] leading-tight max-w-4xl mx-auto">
                    Catherine Maria — Founder & CEO of Catbear Art Studio
                </h2>
            </div>

            <div className="flex justify-center">
                <div className="w-full max-w-4xl flex flex-col items-center relative">

                    {instructors.map((inst, i) => (
                        <React.Fragment key={i}>
                            {/* Organic Teardrop Image Container - Floating above the card - Plain/Static */}
                            <div
                                className="w-64 h-72 md:w-72 md:h-80 mb-[-100px] relative z-20 flex items-center justify-center overflow-hidden border-[10px] border-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)]"
                                style={{
                                    background: inst.color,
                                    borderRadius: "110px 110px 30px 110px",
                                }}
                            >
                                {inst.photo ? (
                                    <img
                                        src={inst.photo}
                                        alt={inst.name}
                                        className="w-full h-full object-cover"
                                        style={{ borderRadius: "100px 100px 20px 100px" }}
                                    />
                                ) : (
                                    <NoImg className="w-full h-full opacity-90" style={{ borderRadius: "100px 100px 20px 100px" }} />
                                )}
                            </div>

                            {/* White Card Content - Widened for better text flow */}
                            <div className="bg-white/95 backdrop-blur-sm w-full rounded-[60px] pt-36 pb-20 px-10 md:px-24 flex flex-col items-center text-center shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-white/50 relative overflow-hidden">
                                {/* Subtle internal decoration */}
                                <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                                    <svg width="100" height="100" viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="40" stroke="#4D96AD" strokeWidth="2" fill="none" strokeDasharray="10 5" />
                                    </svg>
                                </div>

                                <div className="max-w-2xl">
                                    <p className="text-gray-600 text-lg md:text-xl leading-[1.8] whitespace-pre-line font-medium text-pretty">
                                        &quot;{inst.desc}&quot;
                                    </p>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>

        {/* Wavy Bottom Transition to Pricing Section (Green) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
            <svg viewBox="0 0 1440 60" fill="#D5EED1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 block">
                <path d="M0,60 C120,20 240,20 360,60 C480,20 600,20 720,60 C840,20 960,20 1080,60 C1200,20 1320,20 1440,60 L1440,60 L0,60 Z" />
            </svg>
        </div>
    </section>
);

export default InstructorsSection;
