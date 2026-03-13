import React from "react";

const Footer = () => (
    <footer className="bg-[#F7F2D4] text-[#4D96AD] py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-1">
                <div className="mb-6">
                    <div className="h-24 w-24 rounded-full border-4 border-white bg-white shadow-xl overflow-hidden flex items-center justify-center">
                        <img
                            src="/images/gambarutama.PNG"
                            alt="Kidsa Logo"
                            className="w-full h-full object-cover scale-110"
                        />
                    </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Di Catbear Art Studio, kreativitas tidak memiliki batas. Mari bergabung dan kembangkan potensi senimu bersama kami!
                </p>
                <div className="flex gap-4">
                    <a href="https://www.instagram.com/catbear_artstudio?igsh=eG1pYzk5N3F1cWEw&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center hover:scale-110 transition-all text-[#4D96AD]" title="Instagram">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                    </a>
                    <a href="https://www.tiktok.com/@catbear.artstudio?_r=1&_t=ZS-94YzP2AaqgB" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center hover:scale-110 transition-all text-[#4D96AD]" title="TikTok">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.59-1.01-.01 2.62.02 5.24-.02 7.86-.03 1.57-.49 3.11-1.39 4.39-.9 1.28-2.18 2.22-3.64 2.66-2.43.74-5.22.18-7.14-1.54C2.56 19.64 1.56 16.89 1.83 14.2c.22-2.17 1.39-4.3 3.32-5.32 1.45-.78 3.19-1 4.8-.62 0 1.34-.01 2.68-.02 4.02-1.09-.27-2.31-.1-3.22.58-.64.47-1.07 1.21-1.18 2-.15.93.18 1.93.88 2.58 1.05.99 2.75 1.05 3.86.13.78-.65 1.14-1.68 1.15-2.68.04-4.99.02-9.98.03-14.97z" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Links Columns */}
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
                {[
                    {
                        title: "Quick Links",
                        links: [
                            { label: "Home", href: "/" },
                            { label: "About Us", href: "/#about" },
                            { label: "Programs", href: "/#programs" },
                            { label: "Gallery", href: "/gallery" },
                            { label: "Contact", href: "/#contact-us" }
                        ]
                    },
                    {
                        title: "Programs",
                        links: [
                            { label: "Drawing", href: "#" },
                            { label: "Digital Desain", href: "#" },
                            { label: "3D Animation", href: "#" },
                            { label: "Online Course", href: "#" }
                        ]
                    },
                    {
                        title: "Contact",
                        links: [
                            { icon: "✉️", label: "catbearartstudioofficial@gmail.com", href: "mailto:catbearartstudioofficial@gmail.com" },
                            { icon: "📞", label: "+62 853-7131-5541", href: "https://wa.me/6285371315541" }
                        ]
                    },
                ].map((col) => (
                    <div key={col.title}>
                        <h4 className="font-bold text-base mb-6 text-[#2D3561]">{col.title}</h4>
                        <ul className="flex flex-col gap-4">
                            {col.links.map((link) => (
                                <li key={link.label}>
                                    {'icon' in link ? (
                                        <a href={link.href} className="flex items-center gap-4 group">
                                            <div className="w-10 h-10 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center text-sm group-hover:scale-110 transition-all flex-shrink-0">
                                                {link.icon}
                                            </div>
                                            <span className="text-gray-500 text-sm hover:text-[#4D96AD] transition-colors">{link.label}</span>
                                        </a>
                                    ) : (
                                        <a href={link.href} className="text-gray-500 text-sm hover:text-[#4D96AD] transition-colors">{link.label}</a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-[#4D96AD]/10 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Company. All rights reserved.
        </div>
    </footer>
);

export default Footer;
