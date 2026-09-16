'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SmoothScroll() {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            touchMultiplier: 1.5,
        });

        lenis.on('scroll', ScrollTrigger.update);
        const updateLenis = (time) => {
            lenis.raf(time * 1000);
        };
        gsap.ticker.add(updateLenis);
        gsap.ticker.lagSmoothing(0);

        // Store lenis on window so other components can access it
        window.__lenis = lenis;

        // Smooth scroll interceptor for all internal anchor links
        const handleAnchorClick = (e) => {
            const link = e.target.closest('a');
            if (!link) return;

            const href = link.getAttribute('href');
            if (!href || href === '#' || href.startsWith('mailto:') || href.startsWith('tel:') || link.getAttribute('target') === '_blank') {
                return;
            }

            // Check if it's an internal hash link on current page or root page
            const isHashOnly = href.startsWith('#');
            const isRootWithHash = href.startsWith('/#') && (window.location.pathname === '/' || window.location.pathname === '');
            const isSamePageWithHash = href.includes('#') && href.split('#')[0] === window.location.pathname;

            if (isHashOnly || isRootWithHash || isSamePageWithHash) {
                const targetHash = href.includes('#') ? '#' + href.split('#')[1] : href;
                if (!targetHash || targetHash === '#') return;

                const targetElement = document.querySelector(targetHash);
                if (targetElement) {
                    e.preventDefault();
                    
                    // Close any open popouts/overlays if present
                    const navOverlay = document.querySelector('.nav-overlay');
                    if (navOverlay) {
                        gsap.to(navOverlay, { 
                            opacity: 0, 
                            duration: 0.2, 
                            onComplete: () => gsap.set(navOverlay, { visibility: 'hidden', pointerEvents: 'none' }) 
                        });
                    }

                    lenis.scrollTo(targetElement, {
                        offset: -20,
                        duration: 1.3,
                        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                    });

                    // Update URL hash without instant jump
                    if (window.history && window.history.pushState) {
                        window.history.pushState(null, '', targetHash);
                    }
                }
            }
        };

        document.addEventListener('click', handleAnchorClick, { capture: true });

        // Scroll to hash on initial load if present
        if (window.location.hash) {
            const initialHash = window.location.hash;
            const scrollTimer = setTimeout(() => {
                const initialTarget = document.querySelector(initialHash);
                if (initialTarget) {
                    lenis.scrollTo(initialTarget, {
                        offset: -20,
                        duration: 1.2,
                        immediate: false
                    });
                }
            }, 350);

            return () => {
                clearTimeout(scrollTimer);
                document.removeEventListener('click', handleAnchorClick, { capture: true });
                gsap.ticker.remove(updateLenis);
                lenis.destroy();
                delete window.__lenis;
            };
        }

        // Dynamic Tab Title Change
        const originalTitle = document.title;
        const handleVisibility = () => {
            document.title = document.hidden ? "🔥 Hey, over here! 👋 - Nexus" : originalTitle;
        };
        document.addEventListener('visibilitychange', handleVisibility);

        return () => {
            document.removeEventListener('click', handleAnchorClick, { capture: true });
            gsap.ticker.remove(updateLenis);
            lenis.destroy();
            document.removeEventListener('visibilitychange', handleVisibility);
            delete window.__lenis;
        };
    }, []);

    return null;
}


