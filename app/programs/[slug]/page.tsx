"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { programs } from '@/constants/programs';
import SubNavbar from '@/components/SubNavbar';
import Masonry from '@/components/Masonry';
import Footer from '@/components/Footer';

const NoImg = ({ className = "" }: { className?: string }) => (
    <div className={`bg-gray-200 flex flex-col items-center justify-center gap-1 rounded-[40px] ${className}`}>
        <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-gray-400 text-sm font-bold">No Image Found</span>
    </div>
);

const ProgramDetailPage = () => {
    const params = useParams();
    const slug = params.slug as string;

    const program = programs.find(p => p.id === slug) || programs[0];

    // Generate gallery items
    const galleryItems = React.useMemo(() => {
        if (slug === '3d-animation') {
            // Specific images for 3D Animation with their respective extensions
            const threeDImages = [
                { id: '1', ext: 'jpeg' },
                { id: '2', ext: 'jpeg' },
                { id: '3', ext: 'jpeg' },
                { id: '4', ext: 'png' },
                { id: '5', ext: 'png' }
            ];
            return threeDImages.map((img, i) => ({
                id: `karya-3d-${img.id}`,
                img: `/images/karya3d${img.id}.${img.ext}`,
                url: `/images/karya3d${img.id}.${img.ext}`,
                height: [500, 400, 550, 450, 500][i % 5],
            }));
        }

        // Default gallery items for other programs (only using existing IDs)
        const existingIds = [1, 2, 3, 4, 5, 6, 7, 9, 12]; // Subset for smaller gallery
        return existingIds.map((idNum, i) => {
            const id = idNum.toString();
            const heights = [400, 600, 300, 500, 450, 550, 350, 480];
            return {
                id: `karya-default-${id}-${i}`,
                img: `/images/karya${id}.jpeg`,
                url: `/images/karya${id}.jpeg`,
                height: heights[i % heights.length],
            };
        });
    }, [slug]);

    return (
        <>
            <SubNavbar
                title={program.title}
                highlightWord="Details"
                icon="📚"
            />

            <main className="min-h-screen pt-48">
                {/* Header Section: 2 Columns - White Background */}
                <div className="bg-white pb-24 px-6 md:px-20 mb-0">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            {/* Left: Cover Image Card */}
                            <div className="w-full md:w-5/12 lg:w-4/12 flex flex-col items-center">
                                {/* Mobile-only Label: Above the book cover */}
                                <div className="md:hidden text-center mb-6">
                                    <h3 className="text-[#4D96AD] font-black text-2xl tracking-tight uppercase">BUKU DIGITAL</h3>
                                    <div className="flex flex-col items-center gap-2 mt-1">
                                        <p className="text-gray-400 text-sm font-bold">Ketuk untuk membaca</p>
                                        <svg className="w-5 h-5 text-[#4D96AD] animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                        </svg>
                                    </div>
                                </div>

                                <a
                                    href={program.bookUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full max-w-[320px] aspect-[2/3] relative group block cursor-pointer"
                                >
                                    {program.coverImage ? (
                                        <div className="w-full h-full rounded-[30px] overflow-hidden shadow-2xl border-8 border-white relative">
                                            <Image
                                                src={program.coverImage}
                                                alt={`${program.title} Cover`}
                                                fill
                                                className="object-cover"
                                            />

                                            {/* Hover Overlay: Strong Fog sliding down */}
                                            <div className="absolute inset-0 bg-[#4D96AD]/30 backdrop-blur-lg translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center justify-center">
                                                <span className="text-white font-black text-3xl tracking-tight drop-shadow-lg scale-110">BACA BUKU</span>
                                                <div className="w-16 h-1.5 bg-white/40 rounded-full mt-4"></div>
                                            </div>
                                        </div>
                                    ) : (
                                        <NoImg className="w-full h-full shadow-2xl border-8 border-white" />
                                    )}

                                    {/* Decorative "Book" shadow/effect */}
                                    <div className="absolute inset-0 pointer-events-none rounded-[30px] ring-1 ring-black/5 inset-shadow-sm"></div>
                                </a>
                            </div>

                            {/* Right: Info */}
                            <div className="w-full md:w-7/12 lg:w-8/12">
                                <div className="flex flex-col gap-4">
                                    {/* Desktop-only Label: Above the Age/Title */}
                                    <div className="hidden md:block mb-2">
                                        <h3 className="text-[#4D96AD] font-black text-2xl tracking-tight uppercase">BUKU DIGITAL</h3>
                                        <div className="flex items-center gap-3 mt-1">
                                            <svg className="w-5 h-5 text-[#4D96AD] animate-[bounce-x_1s_infinite]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 19l-7-7m0 0l7-7m-7 7h18" />
                                            </svg>
                                            <p className="text-gray-400 text-sm font-bold">Ketuk untuk membaca</p>
                                        </div>

                                        {/* Inline style for custom bounce-x animation */}
                                        <style jsx>{`
                                            @keyframes bounce-x {
                                                0%, 100% { transform: translateX(0); }
                                                50% { transform: translateX(-4px); }
                                            }
                                        `}</style>
                                    </div>

                                    <span className="text-[#4D96AD] font-bold uppercase tracking-widest text-sm">{program.age}</span>
                                    <h1 className="text-4xl md:text-5xl font-black text-[#4D96AD] leading-tight">
                                        {program.title}
                                    </h1>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        {program.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Full Width Gallery Section: Pink Background */}
                <div className="bg-[#FFCDE4] py-24 px-6 md:px-20 relative overflow-hidden">
                    {/* Decorative doodles */}
                    <div className="absolute top-20 right-10 opacity-20 pointer-events-none rotate-12">
                        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="#4D96AD" strokeWidth="2">
                            <path d="M10 50 Q 50 10 90 50 Q 50 90 10 50" />
                        </svg>
                    </div>

                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-black text-[#4D96AD] tracking-tight uppercase">
                                HASIL KARYA KELAS <span className="text-pink-500">{program.title.toUpperCase()}</span>
                            </h2>
                            <div className="w-24 h-2 bg-pink-400 mx-auto mt-4 rounded-full opacity-50"></div>
                        </div>

                        {/* Masonry Results */}
                        <div className="w-full">
                            <Masonry
                                items={galleryItems}
                                animateFrom="bottom"
                                stagger={0.1}
                                duration={0.8}
                                scaleOnHover={true}
                                hoverScale={0.97}
                                blurToFocus={true}
                            />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default ProgramDetailPage;
