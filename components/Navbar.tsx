"use client";
import React, { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <header className="w-full fixed top-0 z-50">
            {/* Topbar - full width horizontal single-line */}
            <div className="bg-[#4D96AD] border-b border-white/10 py-1 px-4 flex justify-between items-center text-[9px] sm:text-xs text-white/80">
                <div className="flex gap-2 sm:gap-5 shrink-0">
                    <span className="flex items-center gap-1.5">✉️ catbearartstudioofficial@gmail.com</span>
                </div>
                <div className="flex gap-2 text-white/90 items-center shrink-0">
                    <span className="hidden xs:inline text-[9px] sm:text-xs text-white/90 opacity-80">Powered by:</span>
                    <div className="flex gap-1.5 sm:gap-2">
                        <a href="https://www.instagram.com/catbear_artstudio?igsh=eG1pYzk5N3F1cWEw&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#4D96AD] transition-all duration-300" title="Instagram">
                            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        <a href="https://www.tiktok.com/@catbear.artstudio?_r=1&_t=ZS-94YzP2AaqgB" target="_blank" rel="noopener noreferrer" className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#4D96AD] transition-all duration-300" title="TikTok">
                            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.59-1.01-.01 2.62.02 5.24-.02 7.86-.03 1.57-.49 3.11-1.39 4.39-.9 1.28-2.18 2.22-3.64 2.66-2.43.74-5.22.18-7.14-1.54C2.56 19.64 1.56 16.89 1.83 14.2c.22-2.17 1.39-4.3 3.32-5.32 1.45-.78 3.19-1 4.8-.62 0 1.34-.01 2.68-.02 4.02-1.09-.27-2.31-.1-3.22.58-.64.47-1.07 1.21-1.18 2-.15.93.18 1.93.88 2.58 1.05.99 2.75 1.05 3.86.13.78-.65 1.14-1.68 1.15-2.68.04-4.99.02-9.98.03-14.97z" />
                            </svg>
                        </a>
                    </div>
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
                            { label: "Gallery", href: "/gallery" },
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
                            { label: "Gallery", href: "/gallery" },
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
