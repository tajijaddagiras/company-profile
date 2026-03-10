import React from "react";

const features = [
    { icon: "🎯", title: "Choose & Become", desc: "In a free hour, when our power of choice is untrammelled and", color: "bg-[#4D96AD]", shadow: "shadow-blue-100" },
    { icon: "👨‍🏫", title: "Expert Teachers", desc: "In a free hour, when our power of choice is untrammelled and", color: "bg-[#FFD9E8]", shadow: "shadow-pink-100" },
    { icon: "🛡️", title: "E-Learning Media", desc: "In a free hour, when our power of choice is untrammelled and", color: "bg-[#D5EED1]", shadow: "shadow-green-100" },
    { icon: "🌟", title: "Full Day Programs", desc: "In a free hour, when our power of choice is untrammelled and", color: "bg-[#4D96AD]", shadow: "shadow-blue-100" },
];

const FeaturesSection = () => (
    <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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
                    <h3 className="text-[#4D96AD] font-bold text-lg">{f.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">{f.desc}</p>
                </div>
            ))}
        </div>
    </section>
);

export default FeaturesSection;
