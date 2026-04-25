import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

const footerLinks = {
  Services: [
    { label: 'AI Advertising', path: '/ai-advertising' },
    { label: '3D Visualization', path: '/3d-visualization' },
    { label: 'Digital Marketing', path: '/digital-marketing' },
    { label: 'Brand Strategy', path: null },
    { label: 'Content Creation', path: null },
  ],
  Company: [
    { label: 'About Us', path: '/about' },
    { label: 'Our Team', path: '/about' },
    { label: 'Careers', path: null },
    { label: 'Blog', path: null },
    { label: 'Press', path: null },
  ],
  Contact: [
    { label: 'hello@trikastudio.in', path: null },
    { label: '+91 98765 43210', path: null },
    { label: 'Gurugram, Haryana', path: null },
    { label: 'Mon–Fri 10am–7pm', path: null },
  ],
};

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com',
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer
      style={{
        background: 'var(--text)',
        borderTop: '1px solid rgba(253,252,248,0.08)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle orange glow top-left */}
      <div style={{
        position: 'absolute',
        width: '400px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(201,72,27,0.12), transparent 70%)',
        top: 0, left: 0,
        transform: 'translate(-30%, -30%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: '1280px', margin: '0 auto',
        padding: 'clamp(48px, 8vw, 80px) 24px 0',
      }}>

        {/* Top row: brand + links */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 'clamp(24px, 4vw, 64px)',
          marginBottom: '56px',
        }}
        className="footer-grid"
        >

          {/* Brand */}
          <div>
            <button
              onClick={() => navigate('/')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginBottom: '20px', display: 'block' }}
            >
              <Logo size="md" dark={false} />
            </button>

            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
              color: 'rgba(253,252,248,0.5)',
              lineHeight: 1.75,
              maxWidth: '300px',
              marginBottom: '24px',
            }}>
              AI-powered digital experiences that transform brands and accelerate growth. Where creativity meets cutting-edge technology.
            </p>

            {/* Socials */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: '36px', height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(253,252,248,0.07)',
                    border: '1px solid rgba(253,252,248,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(253,252,248,0.5)',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(201,72,27,0.2)';
                    e.currentTarget.style.borderColor = 'rgba(201,72,27,0.4)';
                    e.currentTarget.style.color = '#C9481B';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(253,252,248,0.07)';
                    e.currentTarget.style.borderColor = 'rgba(253,252,248,0.1)';
                    e.currentTarget.style.color = 'rgba(253,252,248,0.5)';
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(253,252,248,0.35)',
                marginBottom: '20px',
              }}>
                {title}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {links.map(({ label, path }) => (
                  <li key={label}>
                    {path ? (
                      <button
                        onClick={() => navigate(path)}
                        style={{
                          background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: '14px',
                          color: 'rgba(253,252,248,0.6)',
                          transition: 'color 0.2s',
                          textAlign: 'left',
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = '#FDFCF8'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(253,252,248,0.6)'}
                      >
                        {label}
                      </button>
                    ) : (
                      <span style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '14px',
                        color: 'rgba(253,252,248,0.35)',
                      }}>
                        {label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(253,252,248,0.08)',
          padding: '24px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '13px',
            color: 'rgba(253,252,248,0.3)',
          }}>
            © 2025 Trika Studio. Crafted with precision & passion.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map(item => (
              <span
                key={item}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '12px',
                  color: 'rgba(253,252,248,0.28)',
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(253,252,248,0.6)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(253,252,248,0.28)'}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}