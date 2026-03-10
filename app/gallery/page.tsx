"use client";
import React from 'react';
import Masonry from '@/components/Masonry';
import GalleryNavbar from '@/components/GalleryNavbar';
import Footer from '@/components/Footer';

const GalleryPage = () => {
    // Generate masonry items from the 19 karya images
    const items = Array.from({ length: 19 }, (_, i) => {
        const id = (i + 1).toString();
        // Varying heights for masonry effect: 400, 600, 300, 500...
        const heights = [400, 600, 300, 500, 450, 550, 350, 480, 520, 430];
        return {
            id,
            img: `/images/karya${id}.jpeg`,
            url: `/images/karya${id}.jpeg`, // Open image in new tab
            height: heights[i % heights.length],
        };
    });

    return (
        <>
            <GalleryNavbar />
            <main className="min-h-screen bg-[#FFCDE4] py-20 px-6 md:px-20 relative pt-48">
                {/* Decorative Background Elements */}
                <div className="absolute top-60 left-10 opacity-20 pointer-events-none">
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                        <circle cx="50" cy="50" r="40" stroke="#4D96AD" strokeWidth="2" strokeDasharray="10 5" />
                    </svg>
                </div>
                <div className="absolute bottom-40 right-10 opacity-20 pointer-events-none">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                        <rect x="10" y="10" width="60" height="60" rx="10" stroke="#4D96AD" strokeWidth="2" transform="rotate(15 40 40)" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto">
                    {/* Gallery Description - Optional, keeping it simple as title is in header */}
                    <div className="mb-12 text-center">
                        <p className="text-gray-400 text-sm italic">
                            Scroll to explore the creativity of our amazing students...
                        </p>
                    </div>

                    {/* Masonry Grid */}
                    <div className="w-full">
                        <Masonry
                            items={items}
                            animateFrom="bottom"
                            stagger={0.08}
                            duration={0.8}
                            scaleOnHover={true}
                            hoverScale={0.96}
                            blurToFocus={true}
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default GalleryPage;
