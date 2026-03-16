"use client";

import React from "react";



const ContactSection = () => {
    const [formData, setFormData] = React.useState({
        name: "",
        phone: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Admin WhatsApp Number
        const whatsappNumber = "6285371315541";

        // Solusi: Menggunakan pemformatan string eksplisit dan endpoint API resmi 
        // untuk memastikan emoji terkirim dengan sempurna di semua browser/HP.
        const fullMessage = "Halo Admin Catbear Art Studio! 🎨\n\n" +
            "Saya ingin bertanya/konsultasi mengenai program di Catbear. Berikut data saya:\n\n" +
            "👤 *Nama:* " + formData.name + "\n" +
            "📱 *No. HP/WA:* " + formData.phone + "\n" +
            "💬 *Pesan:* " + formData.message + "\n\n" +
            "Terima kasih! ✨";

        const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(fullMessage)}`;

        // Redirect to WhatsApp
        window.open(whatsappUrl, "_blank");

        // Reset form fields
        setFormData({
            name: "",
            phone: "",
            message: ""
        });
    };

    return (
        <section id="contact-us" className="bg-[#CCF4FF] py-24 px-6 md:px-20 relative overflow-hidden">

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
                        <p className="text-white/80 text-sm font-bold uppercase tracking-widest mb-3">Get in Touch</p>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-10 leading-tight">
                            How May We Help<br />You!
                        </h2>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-white/90 text-xs font-bold uppercase ml-2">Your Name *</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Tulis nama lengkap..."
                                        className="w-full bg-white/10 border border-white/20 rounded-2xl p-4 text-white placeholder-white/40 focus:outline-none focus:bg-white/20 transition-all font-medium"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-white/90 text-xs font-bold uppercase ml-2">WhatsApp Number *</label>
                                    <input
                                        type="tel"
                                        required
                                        placeholder="0812xxxxxx"
                                        className="w-full bg-white/10 border border-white/20 rounded-2xl p-4 text-white placeholder-white/40 focus:outline-none focus:bg-white/20 transition-all font-medium"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-white/90 text-xs font-bold uppercase ml-2">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Apa yang ingin kamu tanyakan..."
                                    className="w-full bg-white/10 border border-white/20 rounded-2xl p-4 text-white placeholder-white/40 focus:outline-none focus:bg-white/20 transition-all resize-none font-medium"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-white text-[#4D96AD] px-10 py-4 rounded-xl font-black hover:bg-opacity-90 transition-all shadow-lg flex items-center gap-2 active:scale-95"
                            >
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

            {/* Section Straight Bottom to match next section (Footer Cream) */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-[#F7F2D4]" />
        </section>
    );
};

export default ContactSection;
