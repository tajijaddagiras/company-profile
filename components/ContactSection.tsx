"use client";

import React from "react";

const NoImg = ({ className = "", round = false, style }: { className?: string; round?: boolean; style?: React.CSSProperties }) => (
    <div className={`bg-gray-200 flex flex-col items-center justify-center gap-1 ${round ? "rounded-full" : "rounded-2xl"} ${className}`} style={style}>
        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-gray-400 text-xs">Child Graduation Photo</span>
    </div>
);

const ContactSection = () => (
    <section id="contact-us" className="bg-white py-24 px-6 md:px-20 relative overflow-hidden">

        <div className="max-w-7xl mx-auto relative z-10">
            {/* Large Card with Background Image */}
            <div
                className="rounded-[50px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden shadow-2xl bg-[#4D96AD]"
                style={{
                    backgroundImage: 'url("/images/getpoto.PNG")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Overlay to ensure readability and keep teal theme */}
                <div className="absolute inset-0 bg-[#4D96AD]/80 mix-blend-multiply z-0" />



                {/* Form Side */}
                <div className="flex-1 w-full relative z-20 max-w-2xl mx-auto md:mx-0">
                    <p className="text-white/80 text-sm font-bold uppercase tracking-widest mb-3">Contact With Us</p>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-10 leading-tight">
                        How May We Help<br />You!
                    </h2>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-white/90 text-xs font-bold uppercase ml-2">Your Name *</label>
                                <input
                                    type="text"
                                    placeholder="Rahul Ali"
                                    className="w-full bg-white/10 border border-white/20 rounded-2xl p-4 text-white placeholder-white/40 focus:outline-none focus:bg-white/20 transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-white/90 text-xs font-bold uppercase ml-2">Email Address *</label>
                                <input
                                    type="email"
                                    placeholder="example@gmail.com"
                                    className="w-full bg-white/10 border border-white/20 rounded-2xl p-4 text-white placeholder-white/40 focus:outline-none focus:bg-white/20 transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-white/90 text-xs font-bold uppercase ml-2">Message</label>
                            <textarea
                                rows={4}
                                placeholder="Write Message..."
                                className="w-full bg-white/10 border border-white/20 rounded-2xl p-4 text-white placeholder-white/40 focus:outline-none focus:bg-white/20 transition-all resize-none"
                            />
                        </div>

                        <button className="bg-white text-[#4D96AD] px-10 py-4 rounded-xl font-black hover:bg-opacity-90 transition-all shadow-lg flex items-center gap-2">
                            GET IN TOUCH <span className="text-xl">→</span>
                        </button>
                    </form>
                </div>

                {/* Floating flower doodle on left border */}
                <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 text-white/20 opacity-40 z-20">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L13 9L20 10L13 11L12 18L11 11L4 10L11 9L12 2Z" />
                    </svg>
                </div>
            </div>
        </div>

        {/* Section Wave Bottom (lika liku) to match next section (white) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
            <svg viewBox="0 0 1440 60" fill="white" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16">
                <path d="M0,60 C120,20 240,20 360,60 C480,20 600,20 720,60 C840,20 960,20 1080,60 C1200,20 1320,20 1440,60 L1440,60 L0,60 Z" />
            </svg>
        </div>
    </section>
);

export default ContactSection;
