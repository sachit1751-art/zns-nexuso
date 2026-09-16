'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const TRACK_1 = [
    { brand: { name: "oxxio", src: "/assets/Brand Logos SVG/oxxio_logo.svg" }, color: "var(--color-orange)" },
    { brand: { name: "hema", src: "/assets/Brand Logos SVG/hema_logo.svg" }, color: "var(--color-lightblue)" },
    { brand: { name: "kfc", src: "/assets/Brand Logos SVG/kfc_logo.svg" }, color: "var(--color-darkblue)" },
    { brand: { name: "swapfiets", src: "/assets/Brand Logos SVG/swapfiets_logo.svg" }, color: "var(--color-lightgreen)" },
    { brand: { name: "netflix", src: "/assets/Brand Logos SVG/netflix_logo.svg" }, color: "var(--color-maroon)" },
    { brand: { name: "ace-tate", src: "/assets/Brand Logos SVG/ace_tate_logo.svg" }, color: "var(--color-pink)" },
    { brand: { name: "getir", src: "/assets/Brand Logos SVG/getir_logo.svg" }, color: "var(--color-orange)" },
    { brand: { name: "anwb", src: "/assets/Brand Logos SVG/anwb_logo.svg" }, color: "var(--color-green)" }
];

const TRACK_2 = [
    { brand: { name: "hema", src: "/assets/Brand Logos SVG/hema_logo.svg" }, color: "var(--color-maroon)" },
    { brand: { name: "netflix", src: "/assets/Brand Logos SVG/netflix_logo.svg" }, color: "var(--color-lightblue)" },
    { brand: { name: "ace-tate", src: "/assets/Brand Logos SVG/ace_tate_logo.svg" }, color: "var(--color-lightgreen)" },
    { brand: { name: "anwb", src: "/assets/Brand Logos SVG/anwb_logo.svg" }, color: "var(--color-orange)" },
    { brand: { name: "kfc", src: "/assets/Brand Logos SVG/kfc_logo.svg" }, color: "var(--color-darkblue)" },
    { brand: { name: "swapfiets", src: "/assets/Brand Logos SVG/swapfiets_logo.svg" }, color: "var(--color-pink)" },
    { brand: { name: "getir", src: "/assets/Brand Logos SVG/getir_logo.svg" }, color: "var(--color-maroon)" },
    { brand: { name: "oxxio", src: "/assets/Brand Logos SVG/oxxio_logo.svg" }, color: "var(--color-green)" }
];

// Duplicate each track twice for infinite seamless scroll
const DETERMINISTIC_TRACKS = [
    [...TRACK_1, ...TRACK_1],
    [...TRACK_2, ...TRACK_2]
];

export default function DoubleMarquee() {
    useEffect(() => {
        if (typeof window === 'undefined') return;
        gsap.registerPlugin(ScrollTrigger);

        // Arrow path animation
        gsap.set('.marquee-left .marquee-svg-item:nth-child(2) path', { strokeDashoffset: 1000 });

        const marqueeTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.Double-marquee',
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            }
        });

        marqueeTl
            .fromTo(['.marquee-left', '.marquee-right'], 
                { opacity: 0, y: 35 }, 
                { opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out' }
            )
            .to('.marquee-underline', { scaleX: 1, opacity: 1, duration: 1, ease: 'power2.out' }, '-=0.4')
            .to('.marquee-left .marquee-svg-item:nth-child(1)', { scale: 1, opacity: 1, rotation: -10, duration: 0.6, ease: 'back.out(1.7)' }, '-=0.5')
            .to('.marquee-left .marquee-svg-item:nth-child(2) path', { strokeDashoffset: 0, duration: 1.5, ease: 'power2.out' }, '-=0.3');

        return () => {
            ScrollTrigger.getAll().forEach(t => { 
                if (t.vars.trigger === '.Double-marquee') t.kill(); 
            });
        };
    }, []);

    return (
        <>
            {/* Left: Text + Blob */}
            <div className="marquee-left">
                <div className="marquee-text-container">
                    <h2>proud to have<br />worked <span className="text-with">with:</span></h2>
                    <svg xmlns="http://www.w3.org/2000/svg" className="marquee-underline" viewBox="0 0 132 5" fill="none">
                        <path d="M1 2.08377C44.3458 3.90451 87.9791 5.71442 131 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="marquee-blob-container">
                    <img loading="lazy" src="/assets/Marquee-blob SVG/marquee-blob.svg" className="marquee-blob" alt="" aria-hidden="true" />
                    <div className="marquee-svg-container">
                        <div className="marquee-svg-item">
                            <img loading="lazy" src="/assets/Marquee-blob SVG/marquee-hand.svg" width="100%" alt="" aria-hidden="true" />
                        </div>
                        <div className="marquee-svg-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 386 127" fill="none">
                                <path d="M2 123C9 35.9999 84.5 17 124 25.9999C217.764 47.3635 207 115 177.5 123C105.777 142.45 110.737 1.99991 232.5 2C310.5 2.00006 366.5 79 376 118L356.5 105.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 123C9 35.9999 84.5 17 124 25.9999C217.764 47.3635 207 115 177.5 123C105.777 142.45 110.737 1.99991 232.5 2C310.5 2.00006 366.5 79 376 118L384 97" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right: Two scrolling columns */}
            <div className="marquee-right">
                {DETERMINISTIC_TRACKS.map((trackItems, colIndex) => (
                    <div key={colIndex} className="marquee-column">
                        <div className="marquee-track">
                            {trackItems.map((item, i) => (
                                <div key={i} className="marquee-item" data-brand={item.brand.name} style={{ backgroundColor: item.color }}>
                                    <div className="marquee-logo">
                                        <div className="marquee-logo__before"></div>
                                        <img loading="lazy" src={item.brand.src} loading="lazy" alt={item.brand.name} className="cover-image" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

