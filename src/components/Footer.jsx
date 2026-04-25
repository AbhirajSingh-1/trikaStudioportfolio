import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

const navPages = [
  { label: 'Home', path: '/' },
  { label: 'AI Advertising', path: '/ai-advertising' },
  { label: '3D Visualization', path: '/3d-visualization' },
  { label: 'Digital Marketing', path: '/digital-marketing' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const services = [
  'AI Video Production',
  'AI Avatar Creation',
  'Product 3D Renders',
  'Architectural Viz',
  'Social Media Marketing',
  'Performance Ads',
  'Brand Strategy',
  'Content Production',
];

const contactInfo = [
  { icon: '✉', text: 'hello@trikastudio.in' },
  { icon: '📞', text: '+91 98765 43210' },
  { icon: '📍', text: 'Sector 44, Gurugram, Haryana' },
  { icon: '🕐', text: 'Mon–Fri · 10am – 7pm IST' },
];

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com',
    icon: (
      <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer style={{
      background: '#18130D',
      borderTop: '1px solid rgba(232,226,216,0.1)',
    }}>
      {/* Top accent line */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, #C9481B, #E06035 50%, transparent)' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(48px,6vw,72px) 24px 0' }}>
        {/* Main grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2.2fr 1fr 1.4fr 1.4fr',
          gap: 'clamp(28px,4vw,56px)',
          marginBottom: '52px',
        }} className="footer-main-grid">

          {/* Brand column */}
          <div>
            <button
              onClick={() => navigate('/')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginBottom: '18px', display: 'block' }}
            >
              <Logo size="md" dark={false} />
            </button>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '13.5px',
              color: 'rgba(253,252,248,0.5)',
              lineHeight: 1.8,
              maxWidth: '280px',
              marginBottom: '24px',
            }}>
              AI-first creative studio crafting digital experiences that move people — powered by generative AI, 3D production, and data-driven strategy.
            </p>

            {/* Socials */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: '34px', height: '34px',
                    borderRadius: '9px',
                    background: 'rgba(253,252,248,0.06)',
                    border: '1px solid rgba(253,252,248,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(253,252,248,0.45)',
                    textDecoration: 'none',
                    transition: 'all 0.22s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(201,72,27,0.2)';
                    e.currentTarget.style.borderColor = 'rgba(201,72,27,0.5)';
                    e.currentTarget.style.color = '#E06035';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(253,252,248,0.06)';
                    e.currentTarget.style.borderColor = 'rgba(253,252,248,0.1)';
                    e.currentTarget.style.color = 'rgba(253,252,248,0.45)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* Active badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              marginTop: '20px',
              padding: '7px 14px',
              background: 'rgba(74,222,128,0.08)',
              border: '1px solid rgba(74,222,128,0.2)',
              borderRadius: '99px',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ADE80', display: 'inline-block', animation: 'pulse-dot 2s infinite' }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: 'rgba(253,252,248,0.6)' }}>
                Accepting new projects
              </span>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '10px', fontWeight: 600,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'rgba(253,252,248,0.28)', marginBottom: '18px',
            }}>
              Pages
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {navPages.map(({ label, path }) => (
                <li key={label}>
                  <button
                    onClick={() => navigate(path)}
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer', padding: '2px 0',
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '13.5px',
                      color: 'rgba(253,252,248,0.55)',
                      transition: 'color 0.18s, transform 0.18s',
                      textAlign: 'left',
                      display: 'flex', alignItems: 'center', gap: '6px',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#FDFCF8';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'rgba(253,252,248,0.55)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '10px', fontWeight: 600,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'rgba(253,252,248,0.28)', marginBottom: '18px',
            }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {services.map(s => (
                <li key={s} style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '13px',
                  color: 'rgba(253,252,248,0.38)',
                  lineHeight: 1.5,
                }}>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '10px', fontWeight: 600,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'rgba(253,252,248,0.28)', marginBottom: '18px',
            }}>
              Get in Touch
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '13px' }}>
              {contactInfo.map(({ icon, text }) => (
                <li key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ fontSize: '13px', marginTop: '1px', flexShrink: 0 }}>{icon}</span>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '13px',
                    color: 'rgba(253,252,248,0.5)',
                    lineHeight: 1.5,
                  }}>{text}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => navigate('/contact')}
              style={{
                marginTop: '24px',
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '10px 20px',
                background: '#C9481B',
                color: '#fff',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13px', fontWeight: 500,
                border: 'none', borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.22s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#E06035'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#C9481B'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Start a Project →
            </button>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(253,252,248,0.07)', marginBottom: '24px' }} />

        {/* Bottom bar */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '12px', paddingBottom: '28px',
        }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '12px',
            color: 'rgba(253,252,248,0.25)',
          }}>
            © 2025 Trika Studio Pvt. Ltd. · Gurugram, India
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map(item => (
              <span key={item} style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '11px',
                color: 'rgba(253,252,248,0.22)',
                cursor: 'pointer',
                transition: 'color 0.18s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(253,252,248,0.55)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(253,252,248,0.22)'}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 1024px) {
          .footer-main-grid { grid-template-columns: 1fr 1fr 1fr !important; }
          .footer-main-grid > div:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 640px) {
          .footer-main-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-main-grid > div:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 400px) {
          .footer-main-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}