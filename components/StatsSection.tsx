import React from "react";

const stats = [
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <path d="M17 11l2 2 4-4" />
            </svg>
        ),
        value: "25+",
        label: "Years of Experience"
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                <path d="M12 6v4" />
                <path d="M12 14h.01" />
            </svg>
        ),
        value: "6,500+",
        label: "Class Completed"
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        value: "100+",
        label: "Experts Instructors"
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="7" r="4" />
                <path d="M5.5 21v-2a4 4 0 0 1 4-4h5a4 4 0 0 1 4 4v2" />
                <path d="M12 12v3" />
            </svg>
        ),
        value: "6,561+",
        label: "Students Enroll"
    },
];

const StatsSection = () => (
    <section className="bg-[#4D96AD] py-16 px-6 md:px-20 relative overflow-hidden text-white">
        {/* Paper Plane Doodle */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40 hidden lg:block">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 80 Q 20 20 80 15 L 65 30 M 80 15 L 75 40" stroke="white" strokeWidth="2" strokeDasharray="5 5" strokeLinecap="round" />
                <path d="M80 15 L 30 40 L 45 45 L 50 60 L 80 15 Z" fill="white" opacity="0.8" />
                <path d="M80 15 L 45 45" stroke="white" strokeWidth="1" opacity="0.5" />
            </svg>
        </div>

        {/* Cloud Doodle */}
        <div className="absolute -right-10 -bottom-10 opacity-100">
            <svg width="250" height="150" viewBox="0 0 250 150" fill="white" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="100" r="40" />
                <circle cx="100" cy="80" r="50" />
                <circle cx="160" cy="90" r="45" />
                <circle cx="210" cy="110" r="40" />
            </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
                {stats.map((s, i) => (
                    <React.Fragment key={i}>
                        <div className="flex-1 flex flex-col items-center text-center px-4">
                            <div className="mb-4 opacity-80">
                                {s.icon}
                            </div>
                            <p className="text-4xl md:text-5xl font-black mb-2 tracking-tight">{s.value}</p>
                            <p className="text-sm font-semibold opacity-90">{s.label}</p>
                        </div>
                        {i < stats.length - 1 && (
                            <div className="hidden md:block w-px h-24 bg-white/20" />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    </section>
);

export default StatsSection;
