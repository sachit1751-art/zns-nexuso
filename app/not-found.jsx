export const dynamic = 'force-dynamic';

export default function NotFound() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            fontFamily: "'Epilogue', sans-serif",
            backgroundColor: '#111827',
            color: '#f9fafb',
            padding: '24px',
            textAlign: 'center'
        }}>
            <span style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: '#ec4899',
                marginBottom: '16px'
            }}>
                Error Code 404
            </span>
            
            <h1 style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 900,
                letterSpacing: '-1px',
                lineHeight: 1.1,
                marginBottom: '16px',
                color: '#ffffff'
            }}>
                System Route Not Found
            </h1>
            
            <p style={{
                fontSize: '1.1rem',
                color: '#9ca3af',
                maxWidth: '480px',
                lineHeight: 1.5,
                marginBottom: '32px'
            }}>
                The page you are looking for has been relocated, automated, or never existed in this layout. Let's get you back on track.
            </p>
            
            <div style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
                <a
                    href="/"
                    style={{
                        padding: '12px 24px',
                        background: '#ffffff',
                        color: '#111827',
                        borderRadius: '8px',
                        fontWeight: 700,
                        textDecoration: 'none',
                        transition: 'opacity 0.2s ease',
                        fontSize: '0.95rem'
                    }}
                >
                    Return Home
                </a>
                <a
                    href="/services"
                    style={{
                        padding: '12px 24px',
                        background: 'transparent',
                        color: '#ffffff',
                        border: '1.5px solid #374151',
                        borderRadius: '8px',
                        fontWeight: 700,
                        textDecoration: 'none',
                        transition: 'background-color 0.2s ease',
                        fontSize: '0.95rem'
                    }}
                >
                    Explore Services
                </a>
            </div>
        </div>
    );
}
