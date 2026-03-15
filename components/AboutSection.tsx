import React from "react";

const NoImg = ({ className = "", round = false }: { className?: string; round?: boolean }) => (
    <div className={`bg-gray-300 flex flex-col items-center justify-center gap-1 ${round ? "rounded-full" : "rounded-2xl"} ${className}`}>
        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-gray-400 text-xs font-medium">No Image</span>
    </div>
);

const AboutSection = () => (
    <section id="about" className="bg-[#FFCDE4] py-20 px-6 md:px-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

            {/* Left - Organic image frame */}
            <div className="flex-1 relative flex justify-center items-center">
                {/* Sun doodle top-left */}
                <div className="absolute -top-4 -left-4 opacity-70">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="30" cy="30" r="10" fill="#4D96AD" opacity="0.2" />
                        <circle cx="30" cy="30" r="7" stroke="#4D96AD" strokeWidth="2.5" />
                        {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
                            <line key={deg} x1="30" y1="18" x2="30" y2="12" stroke="#4D96AD" strokeWidth="2.5" transform={`rotate(${deg} 30 30)`} strokeLinecap="round" />
                        ))}
                    </svg>
                </div>

                <div className="relative">
                    {/* Main Organic Image Frame */}
                    <div
                        className="w-80 h-80 overflow-hidden border-8 border-white shadow-xl relative z-10"
                        style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
                    >
                        <img
                            src="/images/aboutgambar.PNG"
                            alt="About Us Main"
                            className="w-full h-full object-cover"
                        />
                    </div>


                </div>
            </div>

            {/* Right - Content */}
            <div className="flex-1 relative md:pr-32">
                <p className="text-[#4D96AD] text-sm font-bold mb-3">About Us</p>
                <h2 className="text-3xl md:text-4xl font-black text-[#4D96AD] leading-tight mb-5">
                    Where Creativity Comes<br />to life
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-lg text-justify">
                    CatbearArtstudio adalah platform kursus kreatif yang berfokus pada pengembangan kemampuan seni dan desain digital bagi anak-anak dan remaja. Siswa belajar dari dasar hingga mahir dengan metode yang menyenangkan, interaktif, dan mudah dipahami. Mulai dari menggambar karakter, membuat ilustrasi digital, hingga menciptakan animasi 3D.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 mb-8">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#FFF5E1] border border-white shadow-sm flex items-center justify-center text-xl text-[#4D96AD]">🏅</div>
                        <div>
                            <p className="font-bold text-[#4D96AD] text-sm">Sport Program</p>
                            <p className="text-gray-400 text-xs max-w-[120px]">Aliquam eros vulputate valorem imperdiet.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#FFF5E1] border border-white shadow-sm flex items-center justify-center text-xl text-[#4D96AD]">🏫</div>
                        <div>
                            <p className="font-bold text-[#4D96AD] text-sm">Easy To Learn</p>
                            <p className="text-gray-400 text-xs max-w-[120px]">Aliquam eros vulputate valorem imperdiet.</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-8 border-t border-gray-100 pt-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#FFF5E1] flex items-center justify-center text-[#4D96AD] shadow-sm">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-[#4D96AD]">Ronald Richards</p>
                            <p className="text-xs text-gray-400">Co-Founder</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#FFF5E1] flex items-center justify-center text-[#4D96AD] text-sm">📞</div>
                        <div>
                            <p className="text-[10px] text-gray-400 uppercase font-bold">Call Us Now</p>
                            <p className="text-sm font-bold text-[#4D96AD]">+62 853-7131-5541</p>
                        </div>
                    </div>
                </div>

                {/* Giraffe/USMut Placeholder top-right of content area (Enlarged) */}
                <div className="absolute top-10 -right-24 hidden lg:block opacity-90 transition-all">
                    <div className="w-48 h-64 border-4 border-dashed border-[#FFD9E8] rounded-[40px] overflow-hidden shadow-lg bg-[#FFF5E1]">
                        <img
                            src="/images/usmut.png"
                            alt="About Us Secondary"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 block">
                <path d="M0,60 L0,30 Q30,60 60,30 Q90,60 120,30 Q150,60 180,30 Q210,60 240,30 Q270,60 300,30 Q330,60 360,30 Q390,60 420,30 Q450,60 480,30 Q510,60 540,30 Q570,60 600,30 Q630,60 660,30 Q690,60 720,30 Q750,60 780,30 Q810,60 840,30 Q870,60 900,30 Q930,60 960,30 Q990,60 1020,30 Q1050,60 1080,30 Q1110,60 1140,30 Q1170,60 1200,30 Q1230,60 1260,30 Q1290,60 1320,30 Q1350,60 1380,30 Q1410,60 1440,30 L1440,60 Z" fill="#CCF4FF" />
            </svg>
        </div>
    </section>
);

export default AboutSection;
