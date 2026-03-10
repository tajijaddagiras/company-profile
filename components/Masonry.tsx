"use client";
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';

const useMedia = (queries: string[], values: number[], defaultValue: number): number => {
    const get = () => values[queries.findIndex(q => {
        if (typeof window !== 'undefined') {
            return matchMedia(q).matches;
        }
        return false;
    })] ?? defaultValue;

    const [value, setValue] = useState<number>(get);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const handler = () => setValue(get);
        queries.forEach(q => matchMedia(q).addEventListener('change', handler));
        return () => queries.forEach(q => matchMedia(q).removeEventListener('change', handler));
    }, [queries]);

    return value;
};

const useMeasure = <T extends HTMLElement>() => {
    const ref = useRef<T | null>(null);
    const [size, setSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        if (!ref.current) return;
        const ro = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect;
            setSize({ width, height });
        });
        ro.observe(ref.current);
        return () => ro.disconnect();
    }, []);

    return [ref, size] as const;
};

const preloadImages = async (urls: string[]): Promise<void> => {
    if (typeof window === 'undefined') return;
    await Promise.all(
        urls.map(
            src =>
                new Promise<void>(resolve => {
                    const img = new Image();
                    img.src = src;
                    img.onload = img.onerror = () => resolve();
                })
        )
    );
};

interface Item {
    id: string;
    img: string;
    url: string;
    height: number;
}

interface GridItem extends Item {
    x: number;
    y: number;
    w: number;
    h: number;
}

interface MasonryProps {
    items: Item[];
    ease?: string;
    duration?: number;
    stagger?: number;
    animateFrom?: 'bottom' | 'top' | 'left' | 'right' | 'center' | 'random';
    scaleOnHover?: boolean;
    hoverScale?: number;
    blurToFocus?: boolean;
    colorShiftOnHover?: boolean;
}

const Masonry: React.FC<MasonryProps> = ({
    items,
    ease = 'power3.out',
    duration = 0.6,
    stagger = 0.05,
    animateFrom = 'bottom',
    scaleOnHover = true,
    hoverScale = 0.95,
    blurToFocus = true,
    colorShiftOnHover = false
}) => {
    const columns = useMedia(
        ['(min-width:1500px)', '(min-width:1000px)', '(min-width:600px)', '(min-width:400px)'],
        [5, 4, 3, 2],
        1
    );

    const [containerRef, { width }] = useMeasure<HTMLDivElement>();
    const [imagesReady, setImagesReady] = useState(false);

    // State for popup/lightbox
    const [activeImage, setActiveImage] = useState<string | null>(null);

    const getInitialPosition = (item: GridItem) => {
        const containerRect = containerRef.current?.getBoundingClientRect();
        if (!containerRect) return { x: item.x, y: item.y };

        let direction = animateFrom;
        if (animateFrom === 'random') {
            const dirs = ['top', 'bottom', 'left', 'right'];
            direction = dirs[Math.floor(Math.random() * dirs.length)] as typeof animateFrom;
        }

        switch (direction) {
            case 'top':
                return { x: item.x, y: -200 };
            case 'bottom':
                return { x: item.x, y: window.innerHeight + 200 };
            case 'left':
                return { x: -200, y: item.y };
            case 'right':
                return { x: window.innerWidth + 200, y: item.y };
            case 'center':
                return {
                    x: containerRect.width / 2 - item.w / 2,
                    y: containerRect.height / 2 - item.h / 2
                };
            default:
                return { x: item.x, y: item.y + 100 };
        }
    };

    useEffect(() => {
        preloadImages(items.map(i => i.img)).then(() => setImagesReady(true));
    }, [items]);

    const { grid, maxHeight } = useMemo(() => {
        if (!width) return { grid: [], maxHeight: 0 };
        const colHeights = new Array(columns).fill(0);
        const gap = 16;
        const totalGaps = (columns - 1) * gap;
        const columnWidth = (width - totalGaps) / columns;

        const gridData = items.map(child => {
            const col = colHeights.indexOf(Math.min(...colHeights));
            const x = col * (columnWidth + gap);
            const height = child.height / 2;
            const y = colHeights[col];

            colHeights[col] += height + gap;
            return { ...child, x, y, w: columnWidth, h: height };
        });

        return { grid: gridData, maxHeight: Math.max(...colHeights) };
    }, [columns, items, width]);

    const hasMounted = useRef(false);

    useLayoutEffect(() => {
        if (!imagesReady) return;

        grid.forEach((item, index) => {
            const selector = `[data-key="${item.id}"]`;
            const animProps = { x: item.x, y: item.y, width: item.w, height: item.h };

            if (!hasMounted.current) {
                const start = getInitialPosition(item);
                gsap.fromTo(
                    selector,
                    {
                        opacity: 0,
                        x: start.x,
                        y: start.y,
                        width: item.w,
                        height: item.h,
                        ...(blurToFocus && { filter: 'blur(10px)' })
                    },
                    {
                        opacity: 1,
                        ...animProps,
                        ...(blurToFocus && { filter: 'blur(0px)' }),
                        duration: 0.8,
                        ease: 'power3.out',
                        delay: index * stagger
                    }
                );
            } else {
                gsap.to(selector, {
                    ...animProps,
                    duration,
                    ease,
                    overwrite: 'auto'
                });
            }
        });

        hasMounted.current = true;
    }, [grid, imagesReady, stagger, animateFrom, blurToFocus, duration, ease]);

    const handleMouseEnter = (id: string) => {
        if (scaleOnHover) {
            gsap.to(`[data-key="${id}"]`, {
                scale: hoverScale,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    };

    const handleMouseLeave = (id: string) => {
        if (scaleOnHover) {
            gsap.to(`[data-key="${id}"]`, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    };

    return (
        <div ref={containerRef} className="relative w-full transition-[height] duration-500 ease-out" style={{ height: maxHeight }}>
            {grid.map(item => (
                <div
                    key={item.id}
                    data-key={item.id}
                    className="absolute box-content cursor-pointer"
                    style={{ willChange: 'transform, width, height, opacity' }}
                    onClick={() => item.url && setActiveImage(item.url)}
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={() => handleMouseLeave(item.id)}
                >
                    <div
                        className="relative w-full h-full bg-cover bg-center rounded-[20px] shadow-lg overflow-hidden border-2 border-white/50"
                        style={{ backgroundImage: `url(${item.img})` }}
                    >
                        {colorShiftOnHover && (
                            <div className="color-overlay absolute inset-0 rounded-[20px] bg-gradient-to-tr from-[#4D96AD]/30 to-pink-500/30 opacity-0 pointer-events-none transition-opacity" />
                        )}
                        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-end p-4">
                            <span className="text-white text-[10px] font-bold tracking-widest opacity-0 hover:opacity-100 transition-opacity">
                                VIEW WORK
                            </span>
                        </div>
                    </div>
                </div>
            ))}

            {/* Lightbox / Popup / Image Preview Overlay */}
            {activeImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-12 transition-opacity"
                    onClick={() => setActiveImage(null)}
                >
                    {/* Close button */}
                    <button
                        className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 text-white flex items-center justify-center transition-all z-[101]"
                        onClick={(e) => {
                            e.stopPropagation();
                            setActiveImage(null);
                        }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    {/* Image Container */}
                    <div
                        className="relative w-full h-full max-w-5xl max-h-[90vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing
                    >
                        <img
                            src={activeImage}
                            alt="Gallery Expanded"
                            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border-4 border-white/20 select-none animate-[fadeIn_0.3s_ease-out_forwards]"
                        />
                    </div>
                    {/* Add keyframes globally or just here for simple scale pop */}
                    <style dangerouslySetInnerHTML={{
                        __html: `
                        @keyframes fadeIn {
                            0% { opacity: 0; transform: scale(0.95) translateY(10px); }
                            100% { opacity: 1; transform: scale(1) translateY(0); }
                        }
                    `}} />
                </div>
            )}
        </div>
    );
};

export default Masonry;
