import Link from "next/link";
import { programs } from "@/constants/programs";

const ProgramsSection = () => (
    <section id="programs" className="bg-white pt-20 pb-28 px-6 md:px-20 relative overflow-hidden">

        <div className="max-w-7xl mx-auto pt-6">
            <div className="text-center mb-10 relative">
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

            <div className="max-w-7xl mx-auto">
                {/* Discrete Image between Title and Cards */}
                <div className="flex justify-center -mb-12 md:-mb-14 px-4 md:px-0 relative z-20 transform -translate-y-4 md:-translate-y-6">
                    <img
                        src="/images/carddrawing.PNG"
                        alt="Art Workshop"
                        className="w-full max-w-[190px] h-auto drop-shadow-lg"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-0">
                    {programs.map((p, i) => (
                        <div
                            key={i}
                            className={`px-8 py-10 ${p.textColor} flex flex-col items-center text-center gap-6 relative shadow-md shadow-gray-100/50`}
                            style={{
                                backgroundColor: p.color,
                                borderRadius: i % 2 === 0 ? "80px 40px 100px 50px" : "40px 80px 50px 100px",
                                minHeight: "320px"
                            }}
                        >
                            <div className="flex flex-col gap-1">
                                <h3 className="text-2xl md:text-3xl font-black tracking-tight drop-shadow-sm mb-2">{p.title}</h3>
                            </div>

                            <p className="text-sm leading-relaxed opacity-90 px-2">
                                {p.desc}
                            </p>

                            {/* Bottom Center Small Circle Button */}
                            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2">
                                <Link
                                    href={`/programs/${p.id}`}
                                    className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center font-bold text-white shadow-lg border-2 border-white/50"
                                    style={{ backgroundColor: `${p.color}cc` }}
                                >
                                    <span className="text-sm">→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
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
