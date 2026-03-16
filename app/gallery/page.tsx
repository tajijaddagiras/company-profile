"use client";
import React from 'react';
import Masonry from '@/components/Masonry';
import SubNavbar from '@/components/SubNavbar';
import Footer from '@/components/Footer';

const GalleryPage = () => {
    // Existing karya ids: 1-7, 9, 12-19 (.jpeg)
    const regularIds = [1, 2, 3, 4, 5, 6, 7, 9, 12, 13, 14, 15, 16, 17, 18, 19];
    
    // 3D karya ids: 1-3 (.jpeg), 4-8 (.png)
    const threeDWorks = [
        { id: '1', ext: 'jpeg' },
        { id: '2', ext: 'jpeg' },
        { id: '3', ext: 'jpeg' },
        { id: '4', ext: 'png' },
        { id: '5', ext: 'png' },
        { id: '6', ext: 'png' },
        { id: '7', ext: 'png' },
        { id: '8', ext: 'png' }
    ];

    // Drawing karya ids: 1-3 (.png)
    const drawingWorks = [
        { id: '1', ext: 'png' },
        { id: '2', ext: 'png' },
        { id: '3', ext: 'png' }
    ];

    const items = [
        ...regularIds.map((idNum) => {
            const id = idNum.toString();
            const heights = [400, 600, 300, 500, 450, 550, 350, 480, 520, 430];
            return {
                id: `reg-${id}`,
                img: `/images/karya${id}.jpeg`,
                url: `/images/karya${id}.jpeg`,
                height: heights[idNum % heights.length],
            };
        }),
        ...threeDWorks.map((work, i) => ({
            id: `3d-${work.id}`,
            img: `/images/karya3d${work.id}.${work.ext}`,
            url: `/images/karya3d${work.id}.${work.ext}`,
            height: [500, 400, 550, 450, 500][i % 5],
        })),
        ...drawingWorks.map((work, i) => ({
            id: `drawing-${work.id}`,
            img: `/images/drawing${work.id}.${work.ext}`,
            url: `/images/drawing${work.id}.${work.ext}`,
            height: [450, 550, 480][i % 3],
        }))
    ];

    return (
        <>
            <SubNavbar title="Our Student" highlightWord="Gallery" icon="🎨" />
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
