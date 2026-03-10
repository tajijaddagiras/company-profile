import React from "react";

const Footer = () => (
    <footer className="bg-[#F7F2D4] text-[#4D96AD] py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-1">
                <div className="mb-6">
                    <img
                        src="/images/gambarutama.PNG"
                        alt="Kidsa Logo"
                        className="h-24 w-24 rounded-full object-cover shadow-lg"
                    />
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                </p>
                <div className="flex gap-3">
                    {["𝕏", "f", "in", "▶"].map((icon) => (
                        <a key={icon} href="#" className="w-8 h-8 rounded-full bg-[#4D96AD]/10 flex items-center justify-center hover:bg-[#4D96AD] hover:text-white transition-colors text-sm text-[#4D96AD]">
                            {icon}
                        </a>
                    ))}
                </div>
            </div>
            {/* Links */}
            {[
                { title: "Quick Links", links: ["Home", "About Us", "Programs", "Blog", "Contact"] },
                { title: "Programs", links: ["English Class", "Chemistry Class", "Drawing Class", "Preschool", "Advanced Course"] },
                { title: "Contact", links: ["📍 123 Business St, City", "✉️ info@company.com", "📞 +62 123 456 789"] },
            ].map((col) => (
                <div key={col.title}>
                    <h4 className="font-bold text-base mb-5 text-[#2D3561]">{col.title}</h4>
                    <ul className="flex flex-col gap-2.5">
                        {col.links.map((link) => (
                            <li key={link}>
                                <a href="#" className="text-gray-500 text-sm hover:text-[#4D96AD] transition-colors">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-[#4D96AD]/10 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Company. All rights reserved.
        </div>
    </footer>
);

export default Footer;
