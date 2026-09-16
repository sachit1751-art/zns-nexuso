'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ANIMATION_CONFIG } from '@/lib/data';

export default function TransitionScribble() {
    useEffect(() => {
        const logoTrigger = document.querySelector('.nav-logo-link, .nav-brand-name');
        const transitionScribblePath = document.querySelector('.transition-scribble path');
        const transitionScribbleSvg = document.querySelector('.transition-scribble');

        if (!transitionScribblePath || !transitionScribbleSvg) return;

        // Ensure initially hidden
        gsap.set(transitionScribblePath, { strokeWidth: '0%', opacity: 0 });
        gsap.set(transitionScribbleSvg, { opacity: 0, pointerEvents: 'none' });

        const transitionColors = [
            'var(--color-green, #1d5844)', 
            'var(--color-lightblue, #5980f0)', 
            'var(--color-darkblue, #3b50df)',
            'var(--color-lightgreen, #4ade80)', 
            'var(--color-orange, #ea5826)', 
            'var(--color-maroon, #792645)', 
            'var(--color-pink, #d99cee)'
        ];

        const runScribbleAnimation = (e) => {
            if (e) e.preventDefault();
            if (
                gsap.isTweening(transitionScribblePath) || 
                gsap.isTweening(transitionScribbleSvg) || 
                document.body.classList.contains('is-transitioning')
            ) {
                return;
            }

            const config = ANIMATION_CONFIG?.transitionScribble || {
                strokeWidthStart: "8%",
                strokeWidthMax: "31%",
                scale: 0.7,
                durationIn: 0.8,
                durationOut: 1.2
            };
            const durIn = config.durationIn || 0.8;
            const durOut = config.durationOut || 1.2;

            gsap.set(transitionScribbleSvg, { scale: config.scale, opacity: 1, pointerEvents: 'auto' });

            let pathLength = 5000;
            try {
                if (transitionScribblePath.getTotalLength) {
                    pathLength = transitionScribblePath.getTotalLength();
                }
            } catch {
                pathLength = 5000;
            }
            const l = pathLength + 10;

            const randomColor = transitionColors[Math.floor(Math.random() * transitionColors.length)];
            transitionScribbleSvg.style.color = randomColor;

            const lightColors = ['var(--color-lightblue, #5980f0)', 'var(--color-lightgreen, #4ade80)', 'var(--color-pink, #d99cee)'];
            const logoColor = lightColors.includes(randomColor) ? '#000' : '#fff';

            let transitionLogo = document.querySelector('.transition-logo');
            if (!transitionLogo) {
                transitionLogo = document.createElement('div');
                transitionLogo.className = 'transition-logo';
                transitionLogo.style.cssText = 'position:fixed; top:50%; left:50%; transform:translate(-50%, -50%); z-index:10000; pointer-events:none; opacity:0; display:flex; justify-content:center; align-items:center; font-family: sans-serif; font-weight:900; font-size: 2.5rem; letter-spacing:-1px;';
                
                const sourceLogo = document.querySelector('.nav-brand-name, .nav-logo-link');
                if (sourceLogo) {
                    const clone = sourceLogo.cloneNode(true);
                    transitionLogo.appendChild(clone);
                } else {
                    transitionLogo.textContent = 'ZNS Nexus';
                }
                document.body.appendChild(transitionLogo);
            }

            transitionLogo.style.color = logoColor;

            gsap.set(transitionScribblePath, { 
                strokeDasharray: `${l} ${l}`, 
                strokeDashoffset: l, 
                strokeWidth: config.strokeWidthStart, 
                opacity: 1 
            });
            gsap.set(transitionScribbleSvg, { opacity: 1, x: 0, y: 0, rotation: 0 });
            gsap.set(transitionLogo, { opacity: 0, scale: 1 });

            document.body.classList.add('is-transitioning');
            const cursorBubble = document.querySelector('.cursor-bubble');
            if (cursorBubble) gsap.to(cursorBubble, { opacity: 0, duration: 0.2 });

            const drawTl = gsap.timeline({
                onComplete: () => {
                    document.body.classList.remove('is-transitioning');
                    gsap.set(transitionScribblePath, { strokeWidth: '0%', opacity: 0 });
                    gsap.set(transitionScribbleSvg, { opacity: 0, pointerEvents: 'none' });
                    gsap.set(transitionLogo, { opacity: 0 });
                }
            });

            drawTl.to(transitionScribblePath, { strokeDashoffset: 0, duration: durIn, ease: 'power1.inOut' }, 0);
            drawTl.to(transitionScribblePath, { strokeWidth: config.strokeWidthMax, duration: durIn, ease: 'power2.inOut' }, 0);

            drawTl.call(() => {
                const lenis = window.__lenis;
                if (lenis) lenis.scrollTo(0, { immediate: true });
                else window.scrollTo(0, 0);
            }, null, durIn);

            drawTl.to(transitionScribblePath, { strokeDashoffset: -l, duration: durOut, ease: 'power2.inOut' }, durIn);
            drawTl.to(transitionScribblePath, { strokeWidth: config.strokeWidthStart, duration: durOut, ease: 'power2.inOut' }, durIn);

            drawTl.set(transitionLogo, { autoAlpha: 0 }, 0);
            drawTl.to(transitionLogo, {
                autoAlpha: 1, 
                duration: durIn * 0.5, 
                ease: 'power2.out',
                onStart: () => {
                    const childSvg = transitionLogo.querySelector('svg');
                    if (childSvg) {
                        gsap.to(childSvg, { rotation: 5, duration: 0.15, repeat: -1, yoyo: true, ease: 'steps(1)', overwrite: 'auto' });
                    }
                }
            }, durIn * 0.5);

            drawTl.set(transitionLogo, {
                autoAlpha: 0,
                onComplete: () => {
                    const childSvg = transitionLogo.querySelector('svg');
                    if (childSvg) {
                        gsap.killTweensOf(childSvg);
                        gsap.set(childSvg, { rotation: 0 });
                    }
                }
            }, durIn + (durOut * 0.48));
        };

        if (logoTrigger) {
            logoTrigger.addEventListener('click', runScribbleAnimation);
        }

        return () => {
            if (logoTrigger) {
                logoTrigger.removeEventListener('click', runScribbleAnimation);
            }
        };
    }, []);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 3222 3114"
            fill="none"
            preserveAspectRatio="none"
            className="transition-scribble"
            style={{ opacity: 0, pointerEvents: 'none', position: 'fixed', inset: 0, zIndex: 9999 }}
        >
            <path
                d="M299.654 453.865C505.574 319.225 711.494 184.585 836.054 109.945C960.614 35.3048 997.574 24.7448 944.014 110.385C890.454 196.025 745.254 378.185 571.454 634.385C397.654 890.585 199.654 1215.3 110.854 1382.58C22.0544 1549.86 48.4544 1549.86 77.8944 1540.62C107.334 1531.38 139.014 1512.9 367.854 1319.9C596.694 1126.9 1021.73 759.945 1255.21 555.065C1488.69 350.185 1517.73 318.505 1527.41 306.145C1537.09 293.785 1526.53 301.705 1346.85 618.625C1167.17 935.545 818.694 1561.22 635.214 1896.74C451.734 2232.26 443.814 2258.66 447.654 2268.3C451.494 2277.94 467.334 2270.02 511.134 2236.9C554.934 2203.78 626.214 2145.7 966.534 1817.46C1306.85 1489.22 1914.05 892.585 2263.81 557.505C2613.57 222.425 2687.49 166.985 2741.41 129.185C2795.33 91.3848 2827.01 72.9048 2843.33 67.3448C2859.65 61.7848 2859.65 69.7048 2849.09 96.2248C2838.53 122.745 2817.41 167.625 2584.77 544.505C2352.13 921.385 1370.37 2165.43 1139.25 2537.83C908.134 2910.23 902.854 2926.07 902.774 2939.51C902.694 2952.95 907.974 2963.51 1255.21 2613.87C1602.45 2264.23 2829.73 1017.54 2903.53 1071.46C2977.33 1125.38 2176.12 2817.04 2128 3037C2079.88 3256.96 2911.24 2018.56 3172 1793"
                stroke="currentColor"
                strokeLinecap="round"
                style={{ strokeWidth: '0%', strokeDashoffset: '0.001', strokeDasharray: '0px, 999999px' }}
            />
        </svg>
    );
}

