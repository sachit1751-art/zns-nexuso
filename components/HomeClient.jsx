'use client';

import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import dynamic from 'next/dynamic';

import Navbar from '@/components/Navbar';
import VimeoHero from '@/components/VimeoHero';
import SvgSymbols from '@/components/SvgSymbols';

// Dynamically import below-the-fold components
const SmoothScroll = dynamic(() => import('@/components/SmoothScroll'), { ssr: false });
const CursorBubble = dynamic(() => import('@/components/CursorBubble'), { ssr: false });
const HorizontalWords = dynamic(() => import('@/components/HorizontalWords'));
const MotionCards = dynamic(() => import('@/components/MotionCards'));
const Showreel = dynamic(() => import('@/components/Showreel'));
const ServiceCards = dynamic(() => import('@/components/ServiceCards'));
const DoubleMarquee = dynamic(() => import('@/components/DoubleMarquee'));
const Footer = dynamic(() => import('@/components/Footer'));
const TransitionScribble = dynamic(() => import('@/components/TransitionScribble'), { ssr: false });

export default function HomeClient() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.history.scrollRestoration = 'manual';
            window.scrollTo(0, 0);
        }

        // Refresh ScrollTrigger once all DOM nodes and media are ready
        const timer = setTimeout(() => {
            if (typeof window !== 'undefined') {
                ScrollTrigger.refresh();
            }
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <SvgSymbols />
            <SmoothScroll />
            <CursorBubble />
            
            <header className="main-header" data-nav-theme="dark" id="hero-section">
                <Navbar />
                <VimeoHero />
            </header>

            <div data-nav-theme="light" id="about-section">
                <HorizontalWords />
            </div>

            <main>
                <div className="content-section motion-cards-wrapper" data-nav-theme="light" id="work-section">
                    <MotionCards />
                </div>
                <div data-nav-theme="dark" id="showreel-section">
                    <Showreel />
                </div>
                <div className="content-section service-cards-wrapper" data-nav-theme="light" id="services-section">
                    <ServiceCards />
                </div>
            </main>

            <section className="Double-marquee" data-nav-theme="light" id="clients-section">
                <DoubleMarquee />
            </section>

            <footer className="main-footer" data-nav-theme="dark" id="contact-section">
                <Footer />
            </footer>

            <TransitionScribble />
        </>
    );
}
