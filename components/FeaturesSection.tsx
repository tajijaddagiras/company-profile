import React from "react";

const features = [
    { icon: "🎯", title: "Basic concept explanation", desc: "Penjelasan diberikan dengan cara yang sederhana agar mudah dipahami oleh pemula.", color: "bg-[#4D96AD]", shadow: "shadow-blue-100" },
    { icon: "🖌️", title: "Technique demonstration", desc: "Siswa dapat melihat proses mulai dari sketsa awal hingga karya selesai sehingga lebih mudah memahami teknik yang digunakan.", color: "bg-[#FFD9E8]", shadow: "shadow-pink-100" },
    { icon: "🎨", title: "Hands-on practice", desc: "Melalui praktik ini, siswa dapat melatih keterampilan mereka secara aktif.", color: "bg-[#D5EED1]", shadow: "shadow-green-100" },
    { icon: "💬", title: "Mentor feedback", desc: "Feedback ini membantu siswa mengetahui bagian yang sudah baik dan bagian yang masih perlu diperbaiki.", color: "bg-[#4D96AD]", shadow: "shadow-blue-100" },
    { icon: "🚀", title: "Student work development", desc: "Membantu siswa membangun kepercayaan diri serta kreativitas dalam berkarya.", color: "bg-[#EF8FA1]", shadow: "shadow-pink-100" },
];

const FeaturesSection = () => (
    <section className="bg-white pt-12 pb-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-[#4D96AD]">Learning Methods</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
                {features.map((f, i) => (
                    <div key={i} className="flex flex-col items-center text-center gap-4">
                        <div
                            className={`w-20 h-20 ${f.color} flex items-center justify-center shadow-lg ${f.shadow}`}
                            style={{
                                borderRadius: i % 2 === 0 ? "60% 40% 30% 70% / 60% 30% 70% 40%" : "40% 60% 70% 30% / 30% 60% 40% 70%"
                            }}
                        >
                            <span className="text-3xl text-white">{f.icon}</span>
                        </div>
                        <h3 className="text-[#4D96AD] font-bold text-lg leading-tight">{f.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default FeaturesSection;
