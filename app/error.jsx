'use client';

export default function Error({ error, reset }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', fontFamily: 'sans-serif', backgroundColor: '#000', color: '#fff', padding: '20px' }}>
      <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Something went wrong!</h2>
      <button
        onClick={() => reset()}
        style={{ padding: '10px 20px', background: '#ff5c00', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}
      >
        Try again
      </button>
    </div>
  );
}
