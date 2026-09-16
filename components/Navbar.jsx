'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { WIGGLE_CONFIG } from '@/lib/data';

function initWiggle(element, intensity) {
    const target = element.querySelector('[data-wiggle-target]') || element;
    gsap.set(target, { transformOrigin: 'center center' });
    let tween;
    const onEnter = () => {
        tween = gsap.to(target, { rotation: intensity, duration: 0.17, repeat: -1, yoyo: true, ease: 'steps(1)' });
    };
    const onLeave = () => {
        if (tween) { tween.kill(); gsap.to(target, { rotation: 0, duration: 0.3, ease: 'power2.out' }); }
    };
    element.addEventListener('mouseenter', onEnter);
    element.addEventListener('mouseleave', onLeave);
    return () => {
        element.removeEventListener('mouseenter', onEnter);
        element.removeEventListener('mouseleave', onLeave);
    };
}

export default function Navbar() {
    useEffect(() => {
        const navbar = document.querySelector('.navbar');
        const contentSection = document.querySelector('.content-section');
        const footerEl = document.querySelector('.main-footer');

        // ② Start white (on-dark) — top video is dark background
        if (navbar) { 
            navbar.classList.add('on-dark'); 
            navbar.classList.remove('on-light'); 
        }

        const updateNavbarColor = () => {
            if (!navbar) return;
            const scrollY = window.scrollY;

            // Toggle scrolled glassmorphism state
            if (scrollY > 20) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Detect the section currently underneath the navbar center
            const navMidY = navbar.getBoundingClientRect().top + navbar.offsetHeight / 2;
            const themedSections = document.querySelectorAll('[data-nav-theme]');
            let activeTheme = null;

            themedSections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= navMidY && rect.bottom > navMidY) {
                    activeTheme = section.getAttribute('data-nav-theme');
                }
            });

            // Fallback for legacy class selectors if data-nav-theme is not yet applied
            if (!activeTheme) {
                const footerEl = document.querySelector('.main-footer');
                const showreelSection = document.querySelector('#showreel-section');
                const serviceCardsSection = document.querySelector('.service-cards-wrapper');
                const doubleMarquee = document.querySelector('.Double-marquee');
                const motionCards = document.querySelector('.motion-cards-wrapper');
                const horizontalWords = document.querySelector('.horizontal-words-section');

                const footerTop = footerEl ? footerEl.getBoundingClientRect().top : Infinity;
                const doubleMarqueeTop = doubleMarquee ? doubleMarquee.getBoundingClientRect().top : Infinity;
                const serviceCardsTop = serviceCardsSection ? serviceCardsSection.getBoundingClientRect().top : Infinity;
                const showreelTop = showreelSection ? showreelSection.getBoundingClientRect().top : Infinity;
                const motionCardsTop = motionCards ? motionCards.getBoundingClientRect().top : Infinity;
                const horizontalWordsTop = horizontalWords ? horizontalWords.getBoundingClientRect().top : Infinity;

                if (navMidY >= footerTop) {
                    activeTheme = 'dark';
                } else if (navMidY >= doubleMarqueeTop) {
                    activeTheme = 'light';
                } else if (navMidY >= serviceCardsTop) {
                    activeTheme = 'light';
                } else if (navMidY >= showreelTop) {
                    activeTheme = 'dark';
                } else if (navMidY >= motionCardsTop) {
                    activeTheme = 'light';
                } else if (navMidY >= horizontalWordsTop) {
                    activeTheme = 'light';
                } else {
                    activeTheme = 'dark'; // Hero section at top
                }
            }

            if (activeTheme === 'dark') {
                navbar.classList.add('on-dark');
                navbar.classList.remove('on-light');
            } else {
                navbar.classList.add('on-light');
                navbar.classList.remove('on-dark');
            }
        };

        window.addEventListener('scroll', updateNavbarColor, { passive: true });
        window.addEventListener('resize', updateNavbarColor, { passive: true });
        updateNavbarColor();

        // Check after brief delay to catch dynamic client components mounting
        const checkTimer = setTimeout(updateNavbarColor, 200);

        // Wiggle on logo and whatsapp
        const cleanups = [];
        const logoNexus = document.querySelector('.nav-logo-link');
        if (logoNexus) cleanups.push(initWiggle(logoNexus, WIGGLE_CONFIG.logoNexus));

        const overlay = document.querySelector('.nav-overlay');
        if (overlay) {
            gsap.set(overlay, { opacity: 0, visibility: 'hidden' });
        }
        const showOverlay = () => {
            if (overlay) {
                gsap.set(overlay, { visibility: 'visible', pointerEvents: 'auto' });
                gsap.to(overlay, { opacity: 1, duration: 0.35, ease: 'power2.out' });
            }
        };
        const hideOverlay = () => {
            if (overlay) {
                gsap.to(overlay, { 
                    opacity: 0, 
                    duration: 0.25, 
                    ease: 'power2.in', 
                    onComplete: () => gsap.set(overlay, { visibility: 'hidden', pointerEvents: 'none' }) 
                });
            }
        };

        // ─── Navbar Left (Work) Hover ───
        const navLeft = document.querySelector('.nav-left');
        const workBox = document.querySelector('.nav-work-box');
        const workBlob = document.querySelector('.nav-bar__work-blob-svg');

        if (navLeft && workBox && workBlob) {
            const workInner = workBox.querySelector('.nav-popout-inner');
            const workItems = workInner ? Array.from(workInner.children) : [];

            // Start collapsed safely on mount without triggering layout shift or bad bounding rects
            gsap.set(workBox, {
                visibility: 'hidden',
                scale: 0,
                opacity: 0
            });
            gsap.set(workItems, { y: 10, opacity: 0 });
            gsap.set(workBlob, { transformOrigin: 'center center' });

            let isWorkOpen = false;
            let closeTimer = null;
            let cachedWorkOrigin = null;

            const openWork = () => {
                if (closeTimer) {
                    clearTimeout(closeTimer);
                    closeTimer = null;
                }
                if (isWorkOpen) {
                    return;
                }
                isWorkOpen = true;
                navLeft.setAttribute('aria-expanded', 'true');
                navLeft.classList.add('is-open');
                showOverlay();

                gsap.killTweensOf(workBox);
                gsap.killTweensOf(workItems);
                gsap.killTweensOf(workBlob);

                // Fast 360 blob spin
                gsap.to(workBlob, { rotation: '+=360', duration: 0.6, ease: 'power3.inOut' });

                // Measure origin dynamically on first hover only and cache it
                if (!cachedWorkOrigin) {
                    const currentVisibility = workBox.style.visibility;
                    const currentOpacity = workBox.style.opacity;
                    
                    gsap.set(workBox, { visibility: 'visible', scale: 1, opacity: 1 });
                    const boxRect = workBox.getBoundingClientRect();
                    const blobRect = workBlob.getBoundingClientRect();
                    const originX = (blobRect.left + blobRect.width / 2) - boxRect.left;
                    const originY = (blobRect.top + blobRect.height / 2) - boxRect.top;
                    cachedWorkOrigin = `${originX}px ${originY}px`;
                    
                    gsap.set(workBox, { visibility: currentVisibility, scale: 0, opacity: currentOpacity });
                }

                gsap.set(workBox, { transformOrigin: cachedWorkOrigin, visibility: 'visible' });
                gsap.fromTo(workBox,
                    { scale: 0, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.45, ease: 'expo.out' }
                );
                gsap.to(workItems, { y: 0, opacity: 1, duration: 0.35, stagger: 0.05, ease: 'power3.out', delay: 0.1 });
            };

            const closeWork = () => {
                if (closeTimer) {
                    clearTimeout(closeTimer);
                    closeTimer = null;
                }
                if (!isWorkOpen) return;

                isWorkOpen = false;
                navLeft.setAttribute('aria-expanded', 'false');
                navLeft.classList.remove('is-open');
                hideOverlay();

                gsap.killTweensOf(workBox);
                gsap.killTweensOf(workItems);
                gsap.killTweensOf(workBlob);

                gsap.to(workBlob, { rotation: 0, duration: 0.4, ease: 'power2.out' });
                gsap.to(workItems, { y: 8, opacity: 0, duration: 0.15, ease: 'power2.in' });
                gsap.to(workBox, {
                    scale: 0,
                    opacity: 0,
                    duration: 0.22,
                    ease: 'expo.in',
                    delay: 0.04,
                    onComplete: () => gsap.set(workBox, { visibility: 'hidden' })
                });
            };

            const scheduleClose = (delay = 250) => {
                if (closeTimer) clearTimeout(closeTimer);
                closeTimer = setTimeout(() => {
                    closeWork();
                }, delay);
            };

            const toggleWork = (e) => {
                // If clicking an inner link, let its own handler work
                if (e.target.closest('.nav-work-quick-link')) {
                    return;
                }
                
                // If clicking inside the popout dialog itself, do not toggle/close
                if (e.target.closest('.nav-work-box')) {
                    return;
                }

                e.preventDefault();
                e.stopPropagation();

                if (!isWorkOpen) {
                    openWork();
                } else {
                    closeWork();
                }
            };

            const handleKeyDownLeft = (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    if (e.target === navLeft) {
                        e.preventDefault();
                        if (!isWorkOpen) {
                            openWork();
                            setTimeout(() => {
                                const firstFocusable = workBox.querySelector('.nav-work-quick-link');
                                if (firstFocusable) firstFocusable.focus();
                            }, 100);
                        } else {
                            closeWork();
                        }
                    }
                } else if (e.key === 'Escape' && isWorkOpen) {
                    e.preventDefault();
                    closeWork();
                    navLeft.focus();
                }
            };

            const handleWorkBoxKeyDown = (e) => {
                if (e.key === 'Escape') {
                    e.preventDefault();
                    closeWork();
                    navLeft.focus();
                }
            };

            const handleLinkClick = () => {
                // Allow link click action, and cleanly close after navigation starts
                setTimeout(() => {
                    closeWork();
                }, 150);
            };

            const handleOverlayClick = () => {
                if (isWorkOpen) {
                    closeWork();
                }
            };

            const handleDocumentClick = (e) => {
                if (isWorkOpen && !navLeft.contains(e.target)) {
                    closeWork();
                }
            };

            const onMouseEnterNav = () => {
                if (closeTimer) {
                    clearTimeout(closeTimer);
                    closeTimer = null;
                }
                openWork();
            };

            const onMouseLeaveNav = () => {
                scheduleClose(250);
            };

            const onMouseEnterBox = () => {
                if (closeTimer) {
                    clearTimeout(closeTimer);
                    closeTimer = null;
                }
                if (!isWorkOpen) {
                    openWork();
                }
            };

            const onMouseLeaveBox = () => {
                scheduleClose(250);
            };

            navLeft.addEventListener('mouseenter', onMouseEnterNav);
            navLeft.addEventListener('mouseleave', onMouseLeaveNav);
            workBox.addEventListener('mouseenter', onMouseEnterBox);
            workBox.addEventListener('mouseleave', onMouseLeaveBox);
            navLeft.addEventListener('click', toggleWork);
            navLeft.addEventListener('keydown', handleKeyDownLeft);
            workBox.addEventListener('keydown', handleWorkBoxKeyDown);
            document.addEventListener('click', handleDocumentClick);
            document.addEventListener('touchstart', handleDocumentClick, { passive: true });

            const quickLinks = workBox.querySelectorAll('.nav-work-quick-link');
            quickLinks.forEach(link => link.addEventListener('click', handleLinkClick));

            if (overlay) {
                overlay.addEventListener('click', handleOverlayClick);
                overlay.addEventListener('touchstart', handleOverlayClick, { passive: true });
            }

            cleanups.push(() => {
                if (closeTimer) clearTimeout(closeTimer);
                navLeft.removeEventListener('mouseenter', onMouseEnterNav);
                navLeft.removeEventListener('mouseleave', onMouseLeaveNav);
                workBox.removeEventListener('mouseenter', onMouseEnterBox);
                workBox.removeEventListener('mouseleave', onMouseLeaveBox);
                navLeft.removeEventListener('click', toggleWork);
                navLeft.removeEventListener('keydown', handleKeyDownLeft);
                workBox.removeEventListener('keydown', handleWorkBoxKeyDown);
                document.removeEventListener('click', handleDocumentClick);
                document.removeEventListener('touchstart', handleDocumentClick);
                quickLinks.forEach(link => link.removeEventListener('click', handleLinkClick));
                if (overlay) {
                    overlay.removeEventListener('click', handleOverlayClick);
                    overlay.removeEventListener('touchstart', handleOverlayClick);
                }
            });
        }

        // ─── Navbar Right (WhatsApp) Hover ───
        const navRight = document.querySelector('.nav-right');
        const waBox = document.querySelector('.nav-wa-box');
        const waSvgPath = document.querySelector('.nav-bar__whatsapp-svg path');

        if (navRight && waBox) {
            const waInner = waBox.querySelector('.nav-popout-inner');
            const waItems = waInner ? Array.from(waInner.children) : [];
            const waIcon = document.querySelector('.nav-bar__whatsapp-svg');

            // Start collapsed safely on mount without triggering layout shift or bad bounding rects
            gsap.set(waBox, {
                visibility: 'hidden',
                scale: 0,
                opacity: 0
            });
            gsap.set(waItems, { y: 10, opacity: 0 });

            let isWaOpen = false;
            let cachedWaOrigin = null;

            const onEnterRight = () => {
                gsap.killTweensOf(waBox);
                gsap.killTweensOf(waItems);
                showOverlay();
                if (waSvgPath) gsap.to(waSvgPath, { fill: '#0e6634ff', duration: 0.3 }); // Darker WA green

                // Measure origin dynamically on first hover only and cache it
                if (!cachedWaOrigin) {
                    const currentVisibility = waBox.style.visibility;
                    const currentOpacity = waBox.style.opacity;
                    
                    gsap.set(waBox, { visibility: 'visible', scale: 1, opacity: 1 });
                    const waBoxRect = waBox.getBoundingClientRect();
                    const waIconRect = waIcon ? waIcon.getBoundingClientRect() : waBoxRect;
                    const waOriginX = (waIconRect.left + waIconRect.width / 2) - waBoxRect.left;
                    const waOriginY = (waIconRect.top + waIconRect.height / 2) - waBoxRect.top;
                    cachedWaOrigin = `${waOriginX}px ${waOriginY}px`;
                    
                    gsap.set(waBox, { visibility: currentVisibility, scale: 0, opacity: currentOpacity });
                }

                gsap.set(waBox, { transformOrigin: cachedWaOrigin, visibility: 'visible' });
                gsap.fromTo(waBox,
                    { scale: 0, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.8, ease: 'expo.out' }
                );
                // Items emerge while box is growing
                gsap.to(waItems, { y: 0, opacity: 1, duration: 0.45, stagger: 0.06, ease: 'power3.out', delay: 0.18 });
            };

            const onLeaveRight = () => {
                gsap.killTweensOf(waBox);
                gsap.killTweensOf(waItems);
                hideOverlay();
                if (waSvgPath) gsap.to(waSvgPath, { fill: 'currentColor', duration: 0.3 });

                // Items fade quickly
                gsap.to(waItems, { y: 10, opacity: 0, duration: 0.15, ease: 'power2.in' });
                // Box shrinks back into WA icon smoothly
                gsap.to(waBox, {
                    scale: 0,
                    opacity: 0,
                    duration: 0.3,
                    ease: 'expo.in',
                    delay: 0.05,
                    onComplete: () => gsap.set(waBox, { visibility: 'hidden' })
                });
            };

            const toggleWa = (e) => {
                if (window.matchMedia('(hover: none)').matches || window.innerWidth <= 768) {
                    e.preventDefault();
                    if (!isWaOpen) {
                        isWaOpen = true;
                        onEnterRight();
                    } else {
                        isWaOpen = false;
                        onLeaveRight();
                    }
                }
            };

            navRight.addEventListener('mouseenter', onEnterRight);
            navRight.addEventListener('mouseleave', onLeaveRight);
            navRight.addEventListener('click', toggleWa);
            cleanups.push(() => {
                navRight.removeEventListener('mouseenter', onEnterRight);
                navRight.removeEventListener('mouseleave', onLeaveRight);
                navRight.removeEventListener('click', toggleWa);
            });
        }

        // ─── Work Item: badge wiggle + image tilt on hover ───
        const workItems = document.querySelectorAll('.nav-work-item');
        workItems.forEach(item => {
            const badge = item.querySelector('.nav-work-badge');
            const img = item.querySelector('.nav-work-item__img');
            let wiggleTween;

            const onItemEnter = () => {
                // Wiggle badge intensity 2
                if (badge) {
                    gsap.set(badge, { transformOrigin: 'center center' });
                    wiggleTween = gsap.to(badge, { rotation: 5, duration: 0.15, repeat: -1, yoyo: true, ease: 'steps(1)' });
                }
                // Tilt image slightly right
                if (img) gsap.to(img, { rotation: 16, scale: 1.15, duration: 0.25, ease: 'power2.out' });
            };
            const onItemLeave = () => {
                if (wiggleTween) { wiggleTween.kill(); }
                if (badge) gsap.to(badge, { rotation: 0, duration: 0.3, ease: 'power2.out' });
                if (img) gsap.to(img, { rotation: 0, scale: 1, duration: 0.3, ease: 'power2.out' });
            };
            item.addEventListener('mouseenter', onItemEnter);
            item.addEventListener('mouseleave', onItemLeave);
            cleanups.push(() => {
                item.removeEventListener('mouseenter', onItemEnter);
                item.removeEventListener('mouseleave', onItemLeave);
            });
        });

        // ─── All Our Work btn: wiggle intensity 4 (bubble handled by CursorBubble) ───
        const workBtn = document.querySelector('.nav-work-btn');
        if (workBtn) {
            let btnWiggle;
            const onBtnEnter = () => {
                const btnText = workBtn.querySelector('.nav-work-btn__text');
                if (btnText) {
                    gsap.set(btnText, { transformOrigin: 'center center', display: 'inline-block' });
                    btnWiggle = gsap.to(btnText, { rotation: 4, duration: 0.12, repeat: -1, yoyo: true, ease: 'steps(1)' });
                }
            };
            const onBtnLeave = () => {
                const btnText = workBtn.querySelector('.nav-work-btn__text');
                if (btnWiggle) { btnWiggle.kill(); }
                if (btnText) gsap.to(btnText, { rotation: 0, duration: 0.3, ease: 'power2.out' });
            };
            workBtn.addEventListener('mouseenter', onBtnEnter);
            workBtn.addEventListener('mouseleave', onBtnLeave);
            cleanups.push(() => {
                workBtn.removeEventListener('mouseenter', onBtnEnter);
                workBtn.removeEventListener('mouseleave', onBtnLeave);
            });
        }

        return () => {
            window.removeEventListener('scroll', updateNavbarColor);
            window.removeEventListener('resize', updateNavbarColor);
            clearTimeout(checkTimer);
            cleanups.forEach(fn => fn && fn());
        };
    }, []);

    return (
        <>
            <div className="nav-overlay"></div>
            <nav className="navbar on-dark" aria-label="Main Navigation">
                <div 
                    className="nav-left" 
                    role="button"
                    tabIndex={0}
                    aria-haspopup="dialog"
                    aria-expanded="false"
                    aria-label="Toggle featured work projects showcase"
                    style={{ cursor: "url('/assets/Cursor SVG/cursor-pointer.svg') 12 12, pointer" }}
                >
                    <div className="nav-hover-trigger">
                        <div className="logo-work-container">
                            <img src="/assets/Navbar SVG/nav-work-blob.svg" width="46" height="42" className="nav-bar__work-blob-svg" alt="" aria-hidden="true" />
                            <span className="logo-work-text">work</span>
                        </div>

                        {/* Pop-out Box for Left Side */}
                        <div className="nav-popout nav-work-box" role="dialog" aria-modal="false" aria-label="Featured Projects">
                            <div className="nav-popout-inner">
                                <div className="nav-popout-header">
                                    <span className="nav-popout-badge">Showcase</span>
                                </div>
                                <h4 className="nav-work-title">Featured Projects</h4>
                                <p className="nav-work-desc">Selected brand campaigns and motion projects drop soon.</p>
                                <div className="nav-work-links">
                                    <a href="/#work-section" className="nav-work-quick-link">
                                        <span>Featured Work</span>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                    <a href="/#showreel-section" className="nav-work-quick-link">
                                        <span>Watch Showreel</span>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                        </svg>
                                    </a>
                                    <Link 
                                        href="/services" 
                                        className="nav-work-quick-link"
                                        aria-label="Explore Services"
                                    >
                                        <span>Explore Services</span>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav-center" style={{ cursor: "url('/assets/Cursor SVG/cursor-pointer.svg') 12 12, pointer" }}>
                    <Link href="/" className="nav-logo-link" aria-label="ZNS Nexus">
                        <span className="nav-brand-name">ZNS Nexus</span>
                    </Link>
                </div>

                <div className="nav-right" style={{ cursor: "url('/assets/Cursor SVG/cursor-pointer.svg') 12 12, pointer" }}>
                    <div className="nav-right-content">
                        <svg className="nav-small-spark" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor"/>
                        </svg>
                        <a href="mailto:znsnexus@gmail.com" className="nav-hire-btn">Hire us</a>
                    </div>
                </div>
            </nav>
        </>
    );
}
