'use client';

import SvgSymbols from '@/components/SvgSymbols';
import Navbar from '@/components/Navbar';
import DoubleMarquee from '@/components/DoubleMarquee';
import Footer from '@/components/Footer';
import CursorBubble from '@/components/CursorBubble';
import SmoothScroll from '@/components/SmoothScroll';

export default function B2bSaasDevelopmentClient() {
    return (
        <>
            <SvgSymbols />
            <SmoothScroll />
            <CursorBubble />
            
            <header className="main-header" data-nav-theme="light" style={{ minHeight: 'auto', paddingBottom: '40px' }}>
                <Navbar />
                
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
                        background: '#dbeafe',
                        color: '#1e40af',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: '20px'
                    }}>
                        <span>SaaS Engineering</span>
                    </div>
                    
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 900,
                        fontFamily: "'Epilogue', sans-serif",
                        lineHeight: 1.1,
                        letterSpacing: '-1.5px',
                        marginBottom: '24px',
                        color: 'var(--color-black, #111827)'
                    }}>
                        B2B SaaS Development & Engineering
                    </h1>
                    
                    <p style={{
                        fontSize: '1.25rem',
                        maxWidth: '720px',
                        lineHeight: 1.6,
                        color: '#4b5563',
                        marginBottom: '32px'
                    }}>
                        We architect performant, scalable, and hyper-secure SaaS applications that handle high-concurrency workloads, protect multi-tenant schemas, and load instantly on Vercel or AWS.
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
                            <span>Build SaaS Application</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a 
                            href="/services" 
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
                            <span>Back to Services</span>
                        </a>
                    </div>
                </div>
            </header>

            <main style={{ backgroundColor: '#f9fafb', padding: '80px 5%' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        gap: '64px',
                        alignItems: 'start'
                    }}>
                        {/* Section 1: Use Cases */}
                        <div>
                            <h2 style={{
                                fontSize: '2rem',
                                fontWeight: 800,
                                fontFamily: "'Epilogue', sans-serif",
                                color: '#111827',
                                marginBottom: '24px',
                                letterSpacing: '-0.5px'
                            }}>
                                Custom SaaS Architectures We Deliver
                            </h2>
                            <p style={{ fontSize: '1.05rem', color: '#4b5563', lineHeight: 1.6, marginBottom: '40px' }}>
                                From Next.js 15 App Router codebases to robust Node.js backend pipelines, we construct state-of-the-art products that delight end-users and impress venture capitals.
                            </p>
                            
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                gap: '24px'
                            }}>
                                <div style={{ background: '#ffffff', padding: '32px', borderRadius: '16px', border: '1px solid #e5e7eb' }}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px', color: '#111827' }}>Multi-Tenant Security</h3>
                                    <p style={{ fontSize: '0.95rem', color: '#6b7280', lineHeight: 1.5 }}>
                                        Row-Level Security (RLS) policies implemented perfectly so workspace data is fully segregated and locked down safely.
                                    </p>
                                </div>
                                <div style={{ background: '#ffffff', padding: '32px', borderRadius: '16px', border: '1px solid #e5e7eb' }}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px', color: '#111827' }}>Performant Next.js Setup</h3>
                                    <p style={{ fontSize: '0.95rem', color: '#6b7280', lineHeight: 1.5 }}>
                                        Sub-second Page Speeds, Server-Side Rendering (SSR), and dynamic loading budgets configured strictly to score green on Core Web Vitals.
                                    </p>
                                </div>
                                <div style={{ background: '#ffffff', padding: '32px', borderRadius: '16px', border: '1px solid #e5e7eb' }}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px', color: '#111827' }}>Secure REST & GraphQL APIs</h3>
                                    <p style={{ fontSize: '0.95rem', color: '#6b7280', lineHeight: 1.5 }}>
                                        Meticulously documented REST endpoints, webhooks, and third-party data connections utilizing strict API gateway rate limits.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Technical FAQs */}
                        <div style={{ marginTop: '40px' }}>
                            <h2 style={{
                                fontSize: '2rem',
                                fontWeight: 800,
                                fontFamily: "'Epilogue', sans-serif",
                                color: '#111827',
                                marginBottom: '24px',
                                letterSpacing: '-0.5px'
                            }}>
                                Frequently Asked Questions
                            </h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div style={{ borderBottom: '1px solid #e5e7eb', paddingBottom: '20px' }}>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>Do we own the source code upon completion?</h4>
                                    <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: 1.5 }}>
                                        Yes, 100%. We hand over complete copyright and absolute ownership of the structured codebase via secure Git repositories.
                                    </p>
                                </div>
                                <div style={{ borderBottom: '1px solid #e5e7eb', paddingBottom: '20px' }}>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>What database layers do we implement?</h4>
                                    <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: 1.5 }}>
                                        We default to highly robust databases like PostgreSQL (leveraging Cloud SQL, Supabase, or RDS) and Redis for high-speed caching layers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
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
