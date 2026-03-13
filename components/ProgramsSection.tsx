import React from "react";

const programs = [
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <path d="M2 2l5 5" />
            </svg>
        ),
        title: "Drawing",
        age: "Seni Lukis",
        desc: "Mempelajari teknik dasar menggambar hingga level advanced dengan metode step-by-step.",
        color: "#4D96AD",
        textColor: "text-white"
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4D96AD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
            </svg>
        ),
        title: "Digital Desain",
        age: "Desain Grafis",
        desc: "Eksplorasi kreativitas menggunakan alat digital untuk menciptakan karya desain yang memukau.",
        color: "#FFD9E8",
        textColor: "text-[#4D96AD]"
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4D96AD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5l7 7-7 7-7-7 7-7z" />
                <path d="M12 1v4M12 19v4M1 12h4M19 12h4" />
            </svg>
        ),
        title: "3D Animation",
        age: "Animasi 3D",
        desc: "Belajar membuat objek dan animasi 3D menggunakan software Blender untuk masa depan.",
        color: "#D5EED1",
        textColor: "text-[#4D96AD]"
    },
];

const ProgramsSection = () => (
    <section id="programs" className="bg-white pt-20 pb-28 px-6 md:px-20 relative overflow-hidden">

        <div className="max-w-7xl mx-auto pt-6">
            <div className="text-center mb-12 relative">
                <p className="text-[#4D96AD] text-sm font-extrabold uppercase tracking-widest mb-3">Our Programs</p>
                <h2 className="text-4xl md:text-5xl font-black text-[#4D96AD] leading-tight">
                    We Meet Kids At Their Level<br />Regardless Of Their Age
                </h2>
                {/* Decorative star doodle */}
                <div className="absolute top-1/2 -right-4 hidden lg:block text-[#4D96AD] opacity-20 rotate-45">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 1L14.39 8.26H22L15.81 12.75L18.19 20L12 15.5L5.81 20L8.19 12.75L2 8.26H9.61L12 1Z" />
                    </svg>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {programs.map((p, i) => (
                    <div
                        key={i}
                        className={`p-8 ${p.textColor} flex flex-col items-center text-center gap-6 relative shadow-md shadow-gray-100/50`}
                        style={{
                            backgroundColor: p.color,
                            borderRadius: i % 2 === 0 ? "80px 40px 100px 50px" : "40px 80px 50px 100px",
                            minHeight: "320px"
                        }}
                    >
                        {/* White Line Icon */}
                        <div className="mb-2 opacity-90">
                            {p.icon}
                        </div>

                        <div className="flex flex-col gap-1">
                            <h3 className="text-xl font-black tracking-tight">{p.title}</h3>
                            <p className="text-xs font-bold opacity-80">{p.age}</p>
                        </div>

                        <p className="text-sm leading-relaxed opacity-90 max-w-[200px]">
                            {p.desc}
                        </p>

                        {/* Bottom Center Small Circle Button */}
                        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2">
                            <button
                                className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center font-bold text-white shadow-lg border-2 border-white/50"
                                style={{ backgroundColor: `${p.color}cc` }}
                            >
                                <span className="text-sm">→</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Section Wave Bottom (lika liku) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
            <svg viewBox="0 0 1440 60" fill="#FFCDE4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 block">
                <path d="M0,60 C120,20 240,20 360,60 C480,20 600,20 720,60 C840,20 960,20 1080,60 C1200,20 1320,20 1440,60 L1440,60 L0,60 Z" />
            </svg>
        </div>
    </section>
);

export default ProgramsSection;
