'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

export default function MobileMenu({ isOpen, onClose }) {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Escape key listener to close menu
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    // Body scroll lock while menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const menuItems = [
        { num: '01', title: 'WORK', href: '/#work-section', desc: 'Featured Case Studies' },
        { num: '02', title: 'SERVICES', href: '/services', desc: 'Our Engineering Capabilities' },
        { num: '03', title: 'SOLUTIONS', href: '/services/ai-automation', desc: 'Enterprise AI & Automation' },
        { num: '04', title: 'PROCESS', href: '/#services-section', desc: 'How We Build 10x Faster' },
        { num: '05', title: 'ABOUT', href: '/#about-section', desc: 'Our Agency Mission' },
        { num: '06', title: 'CONTACT', href: '/#contact-section', desc: 'Start a Project' }
    ];

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
        },
        exit: { 
            opacity: 0,
            transition: { duration: 0.25, ease: [0.7, 0, 0.84, 0] }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1,
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1]
            }
        },
        exit: {
            opacity: 0,
            y: -10,
            transition: {
                staggerChildren: 0.03,
                staggerDirection: -1,
                duration: 0.25,
                ease: [0.7, 0, 0.84, 0]
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -16 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
        },
        exit: { 
            opacity: 0, 
            x: -8,
            transition: { duration: 0.2 }
        }
    };

    const elementVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { delay: 0.35, duration: 0.4, ease: 'easeOut' }
        },
        exit: { opacity: 0, transition: { duration: 0.15 } }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="mobile-menu-overlay"
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    style={{
                        position: 'fixed',
                        inset: 0,
                        backgroundColor: '#0a0d14',
                        zIndex: 9999,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '24px 24px 32px 24px',
                        overflowY: 'auto',
                        color: '#f9fafb',
                        fontFamily: "'Epilogue', sans-serif"
                    }}
                >
                    {/* Background Subtle Grid Pattern */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'radial-gradient(#1f2937 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                        opacity: 0.2,
                        pointerEvents: 'none'
                    }} />

                    {/* Animated Minimal SVG Grid Graphic in Empty Space */}
                    <motion.div 
                        variants={elementVariants}
                        style={{
                            position: 'absolute',
                            right: '5%',
                            top: '32%',
                            width: '200px',
                            height: '200px',
                            opacity: 0.15,
                            pointerEvents: 'none',
                            zIndex: 1
                        }}
                    >
                        <svg viewBox="0 0 100 100" width="100%" height="100%">
                            <circle cx="50" cy="50" r="45" stroke="#ea5826" strokeWidth="0.5" fill="none" strokeDasharray="3, 3" />
                            <circle cx="50" cy="50" r="30" stroke="#ea5826" strokeWidth="0.5" fill="none" />
                            <path d="M50 5 L50 95 M5 50 L95 50" stroke="#f9fafb" strokeWidth="0.25" opacity="0.5" />
                            <motion.path 
                                d="M10 50 A40 40 0 0 1 90 50" 
                                stroke="#d99cee" 
                                strokeWidth="0.75" 
                                fill="none"
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
                                style={{ transformOrigin: '50px 50px' }}
                            />
                        </svg>
                    </motion.div>

                    {/* Header: Logo + Close Button */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        zIndex: 10,
                        position: 'relative'
                    }}>
                        <Link href="/" onClick={onClose} style={{ textDecoration: 'none', color: '#ffffff' }}>
                            <span style={{
                                fontWeight: 900,
                                fontSize: '1.25rem',
                                letterSpacing: '1px',
                                textTransform: 'uppercase',
                                fontFamily: "'Epilogue', sans-serif"
                            }}>
                                ZNS NEXUS
                            </span>
                        </Link>
                        
                        <button 
                            onClick={onClose}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: '#f3f4f6',
                                fontSize: '0.85rem',
                                fontWeight: 700,
                                letterSpacing: '1.5px',
                                textTransform: 'uppercase',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px'
                            }}
                        >
                            <span>CLOSE</span>
                            <span style={{ fontSize: '1.1rem', color: '#ea5826' }}>×</span>
                        </button>
                    </div>

                    {/* Side/Utility editorial detail (Top border highlight) */}
                    <div style={{
                        marginTop: '32px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        borderBottom: '1px solid #1f2937',
                        paddingBottom: '8px',
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        letterSpacing: '1.5px',
                        color: '#9ca3af',
                        zIndex: 10
                    }}>
                        <span>AI SYSTEMS / SAAS</span>
                        <span>AVAILABLE FOR SELECT PROJECTS</span>
                    </div>

                    {/* Navigation Items list */}
                    <motion.div 
                        variants={containerVariants}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '4px',
                            margin: '40px 0',
                            zIndex: 10
                        }}
                    >
                        {menuItems.map((item, index) => {
                            const isHovered = hoveredIndex === index;
                            return (
                                <motion.div
                                    key={item.num}
                                    variants={itemVariants}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    onTouchStart={() => setHoveredIndex(index)}
                                    style={{
                                        position: 'relative',
                                        borderBottom: '1px solid #111827',
                                        padding: '12px 0'
                                    }}
                                >
                                    <Link 
                                        href={item.href} 
                                        onClick={onClose}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            textDecoration: 'none',
                                            width: '100%',
                                            outline: 'none'
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px' }}>
                                            {/* Numeric Indicator */}
                                            <span style={{
                                                fontSize: '0.85rem',
                                                fontWeight: 700,
                                                color: isHovered ? '#ea5826' : '#4b5563',
                                                transition: 'color 0.2s ease',
                                                fontFamily: 'monospace'
                                            }}>
                                                {item.num}
                                            </span>
                                            
                                            {/* Link Text */}
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <span style={{
                                                    fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
                                                    fontWeight: 900,
                                                    color: isHovered ? '#ffffff' : '#e5e7eb',
                                                    transform: isHovered ? 'translateX(6px)' : 'translateX(0)',
                                                    transition: 'transform 0.2s ease, color 0.2s ease',
                                                    letterSpacing: '-1px'
                                                }}>
                                                    {item.title}
                                                </span>
                                                {/* Optional Small Editorial Description */}
                                                <span style={{
                                                    fontSize: '0.75rem',
                                                    color: isHovered ? '#d99cee' : '#6b7280',
                                                    opacity: isHovered ? 1 : 0.7,
                                                    transform: isHovered ? 'translateX(6px)' : 'translateX(0)',
                                                    transition: 'all 0.2s ease',
                                                    marginTop: '2px',
                                                    fontWeight: 500
                                                }}>
                                                    {item.desc}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Slider Arrow */}
                                        <div style={{
                                            fontSize: '1.5rem',
                                            color: '#ea5826',
                                            opacity: isHovered ? 1 : 0,
                                            transform: isHovered ? 'translateX(0)' : 'translateX(-10px)',
                                            transition: 'all 0.2s ease'
                                        }}>
                                            →
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Footer / CTA Area */}
                    <div style={{ zIndex: 10 }}>
                        {/* Primary CTA */}
                        <motion.div variants={elementVariants} style={{ marginBottom: '24px' }}>
                            <a 
                                href="mailto:znsnexus@gmail.com"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    padding: '16px 28px',
                                    backgroundColor: '#ea5826',
                                    color: '#ffffff',
                                    borderRadius: '8px',
                                    fontWeight: 900,
                                    fontSize: '0.95rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    textDecoration: 'none',
                                    boxShadow: '0 4px 12px rgba(234, 88, 38, 0.2)',
                                    width: '100%',
                                    justifyContent: 'center'
                                }}
                            >
                                <span>START A PROJECT</span>
                                <span style={{ fontSize: '1.1rem' }}>→</span>
                            </a>
                        </motion.div>

                        {/* Agency Coordinates & Social Links */}
                        <motion.div 
                            variants={elementVariants}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                fontSize: '0.8rem',
                                borderTop: '1px solid #1f2937',
                                paddingTop: '16px',
                                color: '#9ca3af'
                            }}
                        >
                            <a 
                                href="mailto:znsnexus@gmail.com" 
                                style={{ color: '#9ca3af', textDecoration: 'none', fontWeight: 700 }}
                            >
                                hello@znsnexus.com
                            </a>
                            <div style={{ display: 'flex', gap: '16px' }}>
                                <a 
                                    href="https://www.linkedin.com/company/zns-nexus/" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    style={{ color: '#9ca3af', textDecoration: 'none', fontWeight: 600 }}
                                >
                                    LinkedIn
                                </a>
                                <a 
                                    href="https://github.com" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    style={{ color: '#9ca3af', textDecoration: 'none', fontWeight: 600 }}
                                >
                                    GitHub
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
