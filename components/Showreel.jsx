'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Showreel() {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.showreel__content',
                { opacity: 0, y: 40, scale: 0.96 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="showreel-section" id="showreel-section" ref={sectionRef} data-nav-theme="dark">
            <div className="showreel__content">
                <h2 className="showreel__title bg-gradient-to-r from-white via-sky-300 to-indigo-500 bg-clip-text text-transparent">OUR WORK</h2>
                <p className="showreel__subtitle">Will be created soon</p>
            </div>
        </section>
    );
}
