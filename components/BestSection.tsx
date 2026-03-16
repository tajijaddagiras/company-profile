import React from "react";
import Image from "next/image";



/* ── Rainbow & Cloud Doodle ── */
const DoodleRainbow = () => (
    <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 70 C20 30, 100 30, 100 70" stroke="#C084FC" strokeWidth="2.5" strokeLinecap="round" opacity="0.3" />
        <path d="M30 70 C30 40, 90 40, 90 70" stroke="#C084FC" strokeWidth="2.5" strokeLinecap="round" opacity="0.2" />
        <path d="M40 70 C40 50, 80 50, 80 70" stroke="#C084FC" strokeWidth="2.5" strokeLinecap="round" opacity="0.1" />
        <circle cx="30" cy="75" r="10" stroke="#C084FC" strokeWidth="2" opacity="0.2" />
        <circle cx="45" cy="80" r="12" stroke="#C084FC" strokeWidth="2" opacity="0.2" />
        <circle cx="15" cy="80" r="8" stroke="#C084FC" strokeWidth="2" opacity="0.2" />
        <path d="M5 15 L10 10 M15 5 L15 12" stroke="#C084FC" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

/* ── Planet & Rocket Doodle ── */
const DoodleSpace = () => (
    <svg width="140" height="100" viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="30" r="15" stroke="#C084FC" strokeWidth="2" opacity="0.2" />
        <ellipse cx="40" cy="30" rx="25" ry="8" stroke="#C084FC" strokeWidth="2" opacity="0.2" transform="rotate(-15 40 30)" />
        <path d="M100 40 L120 20 L130 30 L110 50 Z" stroke="#C084FC" strokeWidth="2" opacity="0.2" />
        <path d="M120 20 L135 5 M130 30 L145 15" stroke="#C084FC" strokeWidth="1.5" opacity="0.2" />
        <circle cx="10" cy="60" r="2" fill="#C084FC" opacity="0.2" />
        <circle cx="130" cy="70" r="3" fill="#C084FC" opacity="0.2" />
    </svg>
);

const cards = [
    { icon: "📘", title: "Structured Curriculum", desc: "Materi disusun secara bertahap dari dasar hingga tingkat lanjutan", bg: "#4D96AD" },
    { icon: "👨‍🎨", title: "Experienced Mentors", desc: "Dibimbing oleh mentor yang berpengalaman di bidang seni dan desain digital", bg: "#E0E7FF" },
    { icon: "🎮", title: "Interactive Classes", desc: "Belajar dengan metode yang menyenangkan dan interaktif", bg: "#D5EED1" },
    { icon: "💡", title: "Focus on Creativity", desc: "Siswa didorong untuk mengembangkan ide dan imajinasi mereka", bg: "#FFD9E8" },
];

const BestSection = () => (
    <section className="bg-[#CCF4FF] py-24 px-6 md:px-20 relative overflow-hidden">

        {/* Doodles */}
        <div className="absolute top-20 left-10 md:left-20 pointer-events-none">
            <DoodleRainbow />
        </div>
        <div className="absolute top-16 right-10 md:right-20 pointer-events-none rotate-12">
            <DoodleSpace />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16 relative">
                <p className="text-[#4D96AD] text-sm font-bold uppercase tracking-widest mb-3">Our Course</p>
                <h2 className="text-4xl md:text-5xl font-black text-[#2D3561] leading-tight relative z-10">
                    The Best Online Course<br />For Your Kid
                </h2>

                {/* Decorative floating icons around title */}
                <div className="absolute -top-6 left-1/4 animate-bounce duration-[3000ms] opacity-60 hidden md:block">
                    <span className="text-4xl">🎨</span>
                </div>
                <div className="absolute top-10 right-1/4 animate-pulse opacity-60 hidden md:block">
                    <span className="text-4xl">⭐</span>
                </div>
                <div className="absolute -bottom-10 left-1/3 opacity-40 rotate-12 hidden lg:block">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M5 20 C10 5, 30 5, 35 20" stroke="#4D96AD" strokeWidth="3" strokeLinecap="round" />
                        <path d="M10 25 C15 15, 25 15, 30 25" stroke="#4D96AD" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
                    </svg>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Left Side Cards */}
                <div className="flex-1 flex flex-col gap-8 w-full">
                    {cards.slice(0, 2).map((c) => (
                        <div key={c.title} className="flex items-start gap-4">
                            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 shadow-sm" style={{ backgroundColor: c.bg }}>
                                {c.icon}
                            </div>
                            <div>
                                <h4 className="font-extrabold text-[#4D96AD] text-lg mb-1">{c.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{c.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Center Image Placeholder with Yellow Line Art */}
                <div className="flex-1 relative flex justify-center items-center py-10">
                    <div className="relative">
                        {/* Corrected Arch decorations: Blue borders, Pink outer fill, Cream inner fill */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-[110%] border-[4px] border-[#4D96AD] bg-[#FFD6E9] shadow-sm" style={{ borderRadius: "160px 160px 0 0" }} />
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-[100%] border-[4px] border-[#4D96AD] bg-[#FFF5E1] shadow-sm" style={{ borderRadius: "140px 140px 0 0" }} />

                        {/* Main Character with Cloud Overlay Placeholder */}
                        <div className="relative z-10 w-72 h-[450px] flex items-end justify-center">
                            <Image
                                src="/images/kartunwisuda.png"
                                alt="Child Graduation"
                                fill
                                className="object-contain object-bottom"
                            />
                            {/* Overlay using awan.png - Center-Top - Lowered and shifted right again */}
                            <div className="absolute -top-26 right-[-260px] pointer-events-none z-20">
                                <Image
                                    src="/images/awan.png"
                                    alt="Cloud Main"
                                    width={480}
                                    height={280}
                                    className="max-w-none opacity-60 animate-pulse"
                                />
                            </div>

                            {/* Painting decoration - Aligned with cloud but below it - Smaller and Lower - Nudged Up Very Slightly */}
                            <div className="absolute top-76 right-[40px] pointer-events-none z-20">
                                <Image
                                    src="/images/lukisan.PNG"
                                    alt="Painting Decoration"
                                    width={240}
                                    height={150}
                                    className="max-w-none rotate-3"
                                />
                            </div>

                            {/* Jar decoration - Aligned with painting - Precise Nudge Down (320px) - Resized to 240px */}
                            <div className="absolute top-[320px] right-[5px] pointer-events-none z-20">
                                <Image
                                    src="/images/toples.PNG"
                                    alt="Jar Decoration"
                                    width={240}
                                    height={240}
                                    className="max-w-none opacity-90"
                                />
                            </div>

                            {/* Additional clouds stacked and overlapped - Lowered and shifted right again */}
                            <div className="absolute -top-15 -left-5 pointer-events-none z-20">
                                <Image
                                    src="/images/awan.png"
                                    alt="Cloud Clump Left"
                                    width={420}
                                    height={250}
                                    className="max-w-none opacity-50 animate-pulse duration-[5000ms]"
                                />
                            </div>
                            <div className="absolute top-0 left-25 pointer-events-none z-10">
                                <Image
                                    src="/images/awan.png"
                                    alt="Cloud Clump Small"
                                    width={320}
                                    height={190}
                                    className="max-w-none opacity-40 animate-pulse duration-[7000ms]"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side Cards */}
                <div className="flex-1 flex flex-col gap-8 w-full">
                    {cards.slice(2).map((c) => (
                        <div key={c.title} className="flex items-start gap-4">
                            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 shadow-sm" style={{ backgroundColor: c.bg }}>
                                {c.icon}
                            </div>
                            <div>
                                <h4 className="font-extrabold text-[#4D96AD] text-lg mb-1">{c.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{c.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Extra "Perentelan" Decorations at Corners */}
        <div className="absolute bottom-10 left-10 opacity-30 rotate-45 hidden md:block">
            <span className="text-6xl text-[#4D96AD]">✏️</span>
        </div>
        <div className="absolute bottom-20 right-12 opacity-30 -rotate-12 hidden md:block animate-pulse">
            <span className="text-6xl text-[#4D96AD]">📚</span>
        </div>
        <div className="absolute top-1/2 left-[-20px] opacity-20 hidden lg:block">
            <svg width="100" height="100" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="#4D96AD" strokeWidth="2" strokeDasharray="10 10" fill="none" />
            </svg>
        </div>
        <div className="absolute top-1/3 right-[-30px] opacity-20 hidden lg:block rotate-45">
            <svg width="80" height="80" viewBox="0 0 80 80">
                <rect x="10" y="10" width="60" height="60" rx="10" stroke="#4D96AD" strokeWidth="2" fill="none" />
            </svg>
        </div>
    </section>
);

export default BestSection;
