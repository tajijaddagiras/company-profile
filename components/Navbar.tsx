"use client";
import React, { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <header className="w-full fixed top-0 z-50">
            {/* Topbar - full width cream */}
            <div className="bg-[#4D96AD] border-b border-white/10 py-1.5 px-6 hidden md:flex justify-between items-center text-xs text-white/80">
                <div className="flex gap-5">
                    <span>✉️ info@example.com</span>
                </div>
                <div className="flex gap-3 text-gray-400 items-center">
                    <span className="text-xs text-gray-400">Powered by:</span>
                    {["f", "𝕏", "▶", "in"].map((icon) => (
                        <a key={icon} href="#" className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs hover:bg-[#4D96AD] hover:text-white transition-colors">
                            {icon}
                        </a>
                    ))}
                </div>
            </div>

            {/* Floating nav card — NOT full width */}
            <div className="px-6 md:px-12 pt-3">
                <nav className="bg-white rounded-2xl shadow-md px-6 py-3 flex items-center justify-between max-w-7xl mx-auto">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img
                            src="/images/logoheader.jpeg"
                            alt="Kidsa Logo"
                            className="h-10 w-auto object-contain"
                        />
                    </div>

                    {/* Nav links */}
                    <ul className="hidden md:flex gap-7 text-sm font-semibold text-gray-500">
                        {[
                            { label: "Home", href: "#home" },
                            { label: "About Us", href: "#about" },
                            { label: "Programs", href: "#programs" },
                            { label: "Blog", href: "#" },
                            { label: "Contact", href: "#contact-us" },
                        ].map((item) => (
                            <li key={item.label}>
                                <a href={item.href} className="hover:text-[#4D96AD] transition-colors first:text-[#4D96AD]">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Right side */}
                    <div className="flex items-center gap-3">
                        <button className="text-gray-400 hover:text-[#4D96AD] transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                        <a href="#contact" className="bg-[#4D96AD] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-[#3d7a8c] transition-all shadow-md shadow-[#4D96AD]/20 flex items-center gap-1">
                            Book A Seat <span>→</span>
                        </a>
                        <button className="md:hidden text-gray-500" onClick={() => setOpen(!open)}>☰</button>
                    </div>
                </nav>

                {/* Mobile menu */}
                {open && (
                    <div className="md:hidden bg-white rounded-2xl mt-2 px-6 py-4 flex flex-col gap-3 text-sm font-semibold text-gray-600 shadow-md max-w-7xl mx-auto">
                        {[
                            { label: "Home", href: "#home" },
                            { label: "About Us", href: "#about" },
                            { label: "Programs", href: "#programs" },
                            { label: "Blog", href: "#" },
                            { label: "Contact", href: "#contact-us" },
                        ].map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="hover:text-[#4D96AD]"
                                onClick={() => setOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
