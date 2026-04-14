import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
          <h1 style={{ color: 'white', fontSize: '2rem' }}>AI Workflow Platform</h1>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Link href="/login" style={{ 
              color: 'white', 
              textDecoration: 'none', 
              padding: '0.5rem 1rem',
              border: '2px solid white',
              borderRadius: '6px',
              transition: 'all 0.2s'
            }}>
              Login
            </Link>
            <Link href="/signup" style={{ 
              color: '#764ba2',
              backgroundColor: 'white', 
              textDecoration: 'none', 
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              transition: 'all 0.2s'
            }}>
              Sign Up
            </Link>
          </div>
        </nav>

        <div style={{ textAlign: 'center', color: 'white', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Build AI-Powered Workflows</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
            Automate your business processes with intelligent AI workflows. No code required.
          </p>
          <Link href="/signup" style={{ 
            backgroundColor: 'white', 
            color: '#764ba2', 
            padding: '1rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            display: 'inline-block'
          }}>
            Get Started Free
          </Link>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '12px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>🚀 Fast Implementation</h3>
            <p>Deploy intelligent workflows in minutes, not months. Our no-code platform makes it easy.</p>
          </div>
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '12px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>🤖 AI-Powered</h3>
            <p>Advanced AI models learn from your data to optimize workflows automatically.</p>
          </div>
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '12px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>📈 Enterprise Scale</h3>
            <p>Build workflows that scale with your business. Unlimited runs, unlimited potential.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
