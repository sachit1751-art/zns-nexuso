export default function NotFound() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', fontFamily: 'sans-serif', backgroundColor: '#000', color: '#fff' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>404 - Page Not Found</h1>
            <a href="/" style={{ color: '#ff5c00', textDecoration: 'underline' }}>Return Home</a>
        </div>
    );
}
