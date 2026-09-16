'use client';

import SvgSymbols from '@/components/SvgSymbols';
import Navbar from '@/components/Navbar';
import DoubleMarquee from '@/components/DoubleMarquee';
import Footer from '@/components/Footer';
import CursorBubble from '@/components/CursorBubble';
import SmoothScroll from '@/components/SmoothScroll';

export default function AiAutomationClient() {
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
                        background: '#fbcfe8',
                        color: '#9d174d',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: '20px'
                    }}>
                        <span>Enterprise Capability</span>
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
                        AI Automation & Agentic Systems
                    </h1>
                    
                    <p style={{
                        fontSize: '1.25rem',
                        maxWidth: '720px',
                        lineHeight: 1.6,
                        color: '#4b5563',
                        marginBottom: '32px'
                    }}>
                        We build custom, autonomous AI agents and intelligent workflow automation systems that eliminate manual data matching, process unstructured documents, and stream decision-making.
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
                            <span>Deploy AI System</span>
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
                                Production AI Use Cases We Engineer
                            </h2>
                            <p style={{ fontSize: '1.05rem', color: '#4b5563', lineHeight: 1.6, marginBottom: '40px' }}>
                                Unlike shallow wrappers, our AI agents leverage Retrieval-Augmented Generation (RAG), vector storage indices, and state-machine constraints to guarantee 99.9% logical reliability.
                            </p>
                            
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                gap: '24px'
                            }}>
                                <div style={{ background: '#ffffff', padding: '32px', borderRadius: '16px', border: '1px solid #e5e7eb' }}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px', color: '#111827' }}>AI Document Ingestion</h3>
                                    <p style={{ fontSize: '0.95rem', color: '#6b7280', lineHeight: 1.5 }}>
                                        Automatically ingest, parse, and validate incoming PDF invoices, legal contracts, and purchase receipts directly into your database.
                                    </p>
                                </div>
                                <div style={{ background: '#ffffff', padding: '32px', borderRadius: '16px', border: '1px solid #e5e7eb' }}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px', color: '#111827' }}>Autonomous Agentic Workflows</h3>
                                    <p style={{ fontSize: '0.95rem', color: '#6b7280', lineHeight: 1.5 }}>
                                        Multi-agent clusters that communicate, write secure scripts, cross-reference external APIs, and execute complex business logic.
                                    </p>
                                </div>
                                <div style={{ background: '#ffffff', padding: '32px', borderRadius: '16px', border: '1px solid #e5e7eb' }}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px', color: '#111827' }}>Smart Decision Support</h3>
                                    <p style={{ fontSize: '0.95rem', color: '#6b7280', lineHeight: 1.5 }}>
                                        Synthesize vast tables of customer usage, financial statements, and transaction histories into clean natural-language executive briefs.
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
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>Are our AI solutions secure and compliant?</h4>
                                    <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: 1.5 }}>
                                        Absolutely. We implement enterprise-grade API boundaries, strict data sanitation, and sandboxed execution to ensure none of your proprietary customer data is leaked.
                                    </p>
                                </div>
                                <div style={{ borderBottom: '1px solid #e5e7eb', paddingBottom: '20px' }}>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>How do you avoid hallucination issues?</h4>
                                    <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: 1.5 }}>
                                        By using multi-layered validation structures, rigorous formatting guards (such as TypeChat or JSON schemas), and ground-truth contextual databases.
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
