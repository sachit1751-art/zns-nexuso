'use client';

import SvgSymbols from '@/components/SvgSymbols';
import Navbar from '@/components/Navbar';
import VimeoHero from '@/components/VimeoHero';
import ServiceCards from '@/components/ServiceCards';
import MotionCards from '@/components/MotionCards';
import Showreel from '@/components/Showreel';
import DoubleMarquee from '@/components/DoubleMarquee';
import Footer from '@/components/Footer';
import TransitionScribble from '@/components/TransitionScribble';
import CursorBubble from '@/components/CursorBubble';
import SmoothScroll from '@/components/SmoothScroll';
import ClientOnly from '@/components/ClientOnly';

import HorizontalWords from '@/components/HorizontalWords';

export default function Home() {
    return (
        <>
            <SvgSymbols />
            <ClientOnly>
                <SmoothScroll />
                <CursorBubble />
            </ClientOnly>
            <header className="main-header">
                <Navbar />
                <VimeoHero />
            </header>
            <ClientOnly>
                <HorizontalWords />
            </ClientOnly>
            <main>
                <div className="content-section motion-cards-wrapper">
                    <ClientOnly>
                        <MotionCards />
                    </ClientOnly>
                </div>
                <Showreel />
                <div className="content-section service-cards-wrapper">
                    <ClientOnly>
                        <ServiceCards />
                    </ClientOnly>
                </div>
            </main>
            <section className="Double-marquee">
                <ClientOnly>
                    <DoubleMarquee />
                </ClientOnly>
            </section>
            <footer className="main-footer">
                <Footer />
            </footer>
            <TransitionScribble />
        </>
    );
}
