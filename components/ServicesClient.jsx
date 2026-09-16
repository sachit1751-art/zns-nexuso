'use client';

import SvgSymbols from '@/components/SvgSymbols';
import Navbar from '@/components/Navbar';
import ServiceCards from '@/components/ServiceCards';
import DoubleMarquee from '@/components/DoubleMarquee';
import Footer from '@/components/Footer';
import CursorBubble from '@/components/CursorBubble';
import SmoothScroll from '@/components/SmoothScroll';

export default function ServicesClient() {
    return (
        <>
            <SvgSymbols />
            <SmoothScroll />
            <CursorBubble />
            
            <header className="main-header" data-nav-theme="light" style={{ minHeight: 'auto', paddingBottom: '40px' }}>
                <Navbar />
                
                {/* Dedicated Services Hero Header */}
                <div style={{
                    padding: '160px 5% 40px',
                    maxWidth: '1280px',
                    margin: '0 auto',
                    textAlign: 'left'
                }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '6px 16px',
                        borderRadius: '24px',
                        background: '#e0e7ff',
                        color: '#4338ca',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: '20px'
                    }}>
                        <span>Our Capabilities</span>
                    </div>
                    
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 4.75rem)',
                        fontWeight: 900,
                        fontFamily: "'Epilogue', sans-serif",
                        lineHeight: 1.05,
                        letterSpacing: '-1.5px',
                        marginBottom: '24px',
                        color: 'var(--color-black, #111827)'
                    }}>
                        B2B SaaS Development & AI Workflow Automation Services.
                    </h1>
                    
                    <p style={{
                        fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                        maxWidth: '720px',
                        lineHeight: 1.6,
                        color: '#4b5563',
                        marginBottom: '32px'
                    }}>
                        We build custom, high-performance SaaS platforms, design intelligent AI systems, integrate enterprise APIs, and engineer robust workflow automations that scale operations.
                    </p>

                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                        <a 
                            href="mailto:znsnexus@gmail.com" 
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '14px 28px',
                                background: '#111827',
                                color: '#ffffff',
                                borderRadius: '12px',
                                fontWeight: 700,
                                fontSize: '1rem',
                                textDecoration: 'none',
                                transition: 'all 0.2s ease',
                                cursor: "url('/assets/Cursor SVG/cursor-pointer.svg') 12 12, pointer"
                            }}
                        >
                            <span>Start a Project</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a 
                            href="/" 
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '14px 24px',
                                background: '#ffffff',
                                color: '#111827',
                                border: '2px solid #e5e7eb',
                                borderRadius: '12px',
                                fontWeight: 700,
                                fontSize: '1rem',
                                textDecoration: 'none',
                                transition: 'all 0.2s ease',
                                cursor: "url('/assets/Cursor SVG/cursor-pointer.svg') 12 12, pointer"
                            }}
                        >
                            <span>Back to Home</span>
                        </a>
                    </div>
                </div>
            </header>

            <main>
                <div className="content-section service-cards-wrapper" data-nav-theme="light" style={{ paddingTop: '20px' }}>
                    <ServiceCards />
                </div>
            </main>

            <section className="Double-marquee" data-nav-theme="light">
                <DoubleMarquee />
            </section>

            <footer className="main-footer" data-nav-theme="dark">
                <Footer />
            </footer>
        </>
    );
}
