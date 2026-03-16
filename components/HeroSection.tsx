import React from "react";



/* ── Doodle icons matching the reference ── */
const DoodleArrow = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 40 L36 12 M24 12 L36 12 L36 24" stroke="#4D96AD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const DoodleTriangle = () => (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 6 L40 38 L4 38 Z" stroke="#5B8FA8" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
    </svg>
);

const DoodleBus = () => (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="14" width="40" height="24" rx="5" stroke="#4D96AD" strokeWidth="2.5" fill="none" />
        <rect x="12" y="20" width="10" height="8" rx="2" stroke="#4D96AD" strokeWidth="2" fill="none" />
        <rect x="30" y="20" width="10" height="8" rx="2" stroke="#4D96AD" strokeWidth="2" fill="none" />
        <circle cx="14" cy="40" r="3.5" stroke="#4D96AD" strokeWidth="2" fill="none" />
        <circle cx="38" cy="40" r="3.5" stroke="#4D96AD" strokeWidth="2" fill="none" />
        <line x1="6" y1="28" x2="46" y2="28" stroke="#4D96AD" strokeWidth="2" />
    </svg>
);

const DoodlePencil = () => (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 36 L14 30 L34 10 L40 16 L20 36 Z" stroke="#4D96AD" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
        <path d="M8 36 L6 38 L14 36 Z" fill="#4D96AD" />
        <line x1="28" y1="16" x2="34" y2="22" stroke="#4D96AD" strokeWidth="2" />
    </svg>
);

const DoodleStar = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2 L16.5 10.5 L25 10.5 L18.5 16 L21 24.5 L14 19.5 L7 24.5 L9.5 16 L3 10.5 L11.5 10.5 Z"
            stroke="#4D96AD" strokeWidth="1.5" fill="#4D96AD" opacity="0.4" />
    </svg>
);

const HeroSection = () => {
    return (
        <section id="home" className="bg-[#FFCDE4] pt-40 pb-16 md:pb-24 relative overflow-hidden">

            {/* Doodle: Arrow top-right corner */}
            <div className="absolute top-24 right-10 opacity-70 rotate-12">
                <DoodleArrow />
            </div>

            {/* Doodle: Pencil near top-right of nav */}
            <div className="absolute top-28 right-36 opacity-50 -rotate-12">
                <DoodlePencil />
            </div>

            {/* Doodle: Stars scattered */}
            <div className="absolute top-36 left-1/2 opacity-60">
                <DoodleStar />
            </div>
            <div className="absolute top-52 left-1/3 opacity-40">
                <DoodleStar />
            </div>

            {/* Centered Slogan - Font matched with Heading style */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 md:mb-8 text-center relative z-20">
                <span className="text-[#2D3561] text-lg md:text-2xl font-black">
                    &quot;Every Child Can Create — with CatBear Art Studio&quot;
                </span>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 px-6 md:px-12">
                {/* ── Left Content ── */}
                <div className="flex-1 z-10 pb-16 relative">
                    <div className="flex items-center gap-2 text-xs md:text-sm font-semibold mb-5 flex-wrap">
                        <div className="flex items-center gap-2 text-gray-500">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <polygon points="8,2 14,14 2,14" fill="#4D96AD" opacity="0.7" />
                            </svg>
                            <span>Online Course (Kids-Teens)</span>
                            <span className="text-[#4D96AD]">✦</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#4D96AD] leading-tight mb-5">
                        <span className="text-[#2D3561]">Belajar</span> Drawing, Digital Design dan 3D Animation<br />
                        <span className="text-[#2D3561]">Dengan Cara Yang Seru</span>
                    </h1>

                    <p className="text-gray-500 leading-relaxed mb-8 max-w-md text-sm md:text-base">
                        Kelas kreatif untuk anak dan remaja yang ingin mengembangkan bakat menggambar, desain digital, dan animasi
                    </p>



                    {/* Doodle bus bottom-left of buttons */}
                    <div className="mt-6 opacity-60">
                        <DoodleBus />
                    </div>
                </div>

                {/* ── Right — Organic blob + image ── */}
                <div className="flex-1 relative flex justify-center items-end min-h-[450px] pb-16 md:pb-28">

                    {/* Large organic orange blob */}
                    <div
                        className="absolute bottom-16 md:bottom-28 right-0 w-[420px] h-[400px]"
                        style={{
                            background: "#FFF5E1",
                            borderRadius: "60% 40% 0% 0% / 55% 55% 0% 0%",
                            opacity: 0.3,
                        }}
                    />
                    <div
                        className="absolute bottom-16 md:bottom-28 right-4 w-[380px] h-[380px]"
                        style={{
                            background: "#FFF5E1",
                            borderRadius: "55% 45% 0% 0% / 60% 60% 0% 0%",
                        }}
                    />

                    {/* Circle image ON TOP of blob */}
                    <div className="relative z-10 mb-0" style={{ bottom: 0 }}>
                        <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-white">
                            <img
                                src="/images/gambarutama.PNG"
                                alt="Pre-school Child"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Doodle triangle bottom-left of hero right */}
                    <div className="absolute left-4 bottom-24 opacity-60">
                        <DoodleTriangle />
                    </div>

                    {/* Deco dots grid */}
                    <div className="absolute top-8 left-8 grid grid-cols-5 gap-2 opacity-20">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#4D96AD]" />
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Wavy / wave bottom border ── */}
            <div className="absolute bottom-0 left-0 w-full leading-[0]">
                <svg
                    viewBox="0 0 1440 90"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    className="w-full h-12 md:h-16 lg:h-20 2xl:h-24"
                    style={{ display: "block" }}
                >
                    <path
                        d="M0,60 C80,20 160,80 240,50 C320,20 400,70 480,45 C560,20 640,65 720,40 C800,15 880,60 960,38 C1040,16 1120,62 1200,42 C1280,22 1360,58 1440,38 L1440,90 L0,90 Z"
                        fill="white"
                    />
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;
