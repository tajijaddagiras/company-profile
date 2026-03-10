import React from "react";

const programs = [
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-5" />
            </svg>
        ),
        title: "English Class",
        age: "(1-3 years)",
        desc: "Lorem ipsum dolor sit amet ut the adipiscing elit...",
        color: "#4D96AD",
        textColor: "text-white"
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4D96AD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 2v7.5M14 2v7.5M8.5 2h7M4.5 22.5h15c.6 0 1-.4 1-1l-2.4-7.2c-.2-.6-.8-1.1-1.4-1.1h-9.4c-.6 0-1.2.5-1.4 1.1L3.5 21.5c0 .6.4 1 1 1z" />
            </svg>
        ),
        title: "Chemistry Class",
        age: "(2-3 years)",
        desc: "Lorem ipsum dolor sit amet ut the adipiscing elit...",
        color: "#FFD9E8",
        textColor: "text-[#4D96AD]"
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4D96AD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <path d="M2 2l5 5" />
                <path d="M9.5 9.5l1 1" />
            </svg>
        ),
        title: "Drawing Class",
        age: "(1-2 years)",
        desc: "Lorem ipsum dolor sit amet ut the adipiscing elit...",
        color: "#D5EED1",
        textColor: "text-[#4D96AD]"
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.5-1 1-4c2 1 3 2 4 4z" />
                <path d="M12 15v5s1-.5 4-1c-1-2-2-3-4-4z" />
            </svg>
        ),
        title: "Preschool",
        age: "(1-5 years)",
        desc: "Lorem ipsum dolor sit amet ut the adipiscing elit...",
        color: "#4D96AD",
        textColor: "text-white"
    },
];

const ProgramsSection = () => (
    <section id="programs" className="bg-white py-24 px-6 md:px-20 relative overflow-hidden pt-32">

        <div className="max-w-7xl mx-auto pt-10">
            <div className="text-center mb-20 relative">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {programs.map((p, i) => (
                    <div
                        key={i}
                        className={`p-8 ${p.textColor} flex flex-col items-center text-center gap-6 relative group transition-all duration-300 hover:-translate-y-2 shadow-xl shadow-gray-100`}
                        style={{
                            backgroundColor: p.color,
                            borderRadius: i % 2 === 0 ? "80px 40px 100px 50px" : "40px 80px 50px 100px",
                            minHeight: "360px"
                        }}
                    >
                        {/* White Line Icon */}
                        <div className="mb-2 opacity-90 group-hover:scale-110 transition-transform">
                            {p.icon}
                        </div>

                        <div className="flex flex-col gap-1">
                            <h3 className="text-xl font-black tracking-tight">{p.title}</h3>
                            <p className="text-xs font-bold opacity-80">{p.age}</p>
                        </div>

                        <p className="text-sm leading-relaxed opacity-90 max-w-[180px]">
                            {p.desc}
                        </p>

                        {/* Bottom Center Small Circle Button */}
                        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2">
                            <button
                                className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center font-bold text-white shadow-lg hover:bg-white hover:text-gray-800 transition-all border-2 border-white/50"
                                style={{ backgroundColor: `${p.color}cc` }}
                            >
                                <span className="text-sm">→</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer link text */}
            <div className="text-center mt-32">
                <p className="text-[#4D96AD] font-black tracking-[0.2em] text-xl opacity-80 uppercase">www.DownloadNewThemes.com</p>
            </div>
        </div>

        {/* Section Wave Bottom (lika liku) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg viewBox="0 0 1440 60" fill="#FFCDE4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 block">
                <path d="M0,60 C120,20 240,20 360,60 C480,20 600,20 720,60 C840,20 960,20 1080,60 C1200,20 1320,20 1440,60 L1440,60 L0,60 Z" />
            </svg>
        </div>
    </section>
);

export default ProgramsSection;
