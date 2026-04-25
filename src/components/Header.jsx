import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'AI Advertising', path: '/ai-advertising' },
  { label: '3D Visualization', path: '/3d-visualization' },
  { label: 'Digital Marketing', path: '/digital-marketing' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 50,
          /* Clean fade-in white background — no blur box */
          backgroundColor: scrolled ? 'rgba(253,252,248,0.97)' : 'transparent',
          borderBottom: scrolled ? '1px solid #E8E2D8' : '1px solid transparent',
          transition: 'background-color 0.4s ease, border-color 0.4s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 24px',
            height: '68px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <button
            onClick={() => navigate('/')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, flexShrink: 0 }}
            aria-label="Trika Studio home"
          >
            <Logo size="md" dark={true} />
          </button>

          {/* Desktop nav */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '4px',
            }}
            className="lg:flex"
          >
            {navLinks.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                style={({ isActive }) => ({
                  position: 'relative',
                  padding: '6px 14px',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  fontFamily: "'DM Sans', sans-serif",
                  color: isActive ? '#C9481B' : '#7A7068',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  whiteSpace: 'nowrap',
                  letterSpacing: '0.01em',
                })}
                className="hover:text-[#18130D]"
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <span
                        style={{
                          position: 'absolute',
                          bottom: '-1px',
                          left: '14px',
                          right: '14px',
                          height: '1.5px',
                          background: '#C9481B',
                          borderRadius: '99px',
                          animation: 'underline-grow 0.25s ease forwards',
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3" style={{ flexShrink: 0 }}>
            <button
              onClick={() => navigate('/contact')}
              className="btn-primary"
            >
              Get Started →
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              flexShrink: 0,
            }}
            className="lg:hidden"
          >
            <span style={{
              display: 'block', width: '22px', height: '1.5px',
              background: '#18130D', borderRadius: '99px',
              transition: 'all 0.3s ease', transformOrigin: 'center',
              transform: menuOpen ? 'rotate(45deg) translate(4.7px, 4.7px)' : 'none',
            }} />
            <span style={{
              display: 'block', width: '22px', height: '1.5px',
              background: '#18130D', borderRadius: '99px',
              transition: 'all 0.3s ease',
              opacity: menuOpen ? 0 : 1, transform: menuOpen ? 'scaleX(0)' : 'none',
            }} />
            <span style={{
              display: 'block', width: '22px', height: '1.5px',
              background: '#18130D', borderRadius: '99px',
              transition: 'all 0.3s ease', transformOrigin: 'center',
              transform: menuOpen ? 'rotate(-45deg) translate(4.7px, -4.7px)' : 'none',
            }} />
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          style={{
            overflow: 'hidden',
            maxHeight: menuOpen ? '480px' : '0',
            opacity: menuOpen ? 1 : 0,
            transition: 'max-height 0.35s ease, opacity 0.3s ease',
            backgroundColor: 'rgba(253,252,248,0.98)',
            borderTop: menuOpen ? '1px solid #E8E2D8' : 'none',
          }}
          className="lg:hidden"
        >
          <div style={{ padding: '16px 24px 20px' }}>
            {navLinks.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                style={({ isActive }) => ({
                  display: 'block',
                  padding: '12px 0',
                  fontSize: '1.1rem',
                  fontFamily: "'Cormorant Garant', serif",
                  fontWeight: 600,
                  color: isActive ? '#C9481B' : '#18130D',
                  textDecoration: 'none',
                  borderBottom: '1px solid #E8E2D8',
                  transition: 'color 0.2s',
                })}
              >
                {label}
              </NavLink>
            ))}
            <button
              onClick={() => { navigate('/contact'); setMenuOpen(false); }}
              className="btn-primary w-full mt-4"
            >
              Get Started →
            </button>
          </div>
        </div>
      </header>

      {/* Underline animation */}
      <style>{`
        @keyframes underline-grow {
          from { transform: scaleX(0); transform-origin: left; }
          to   { transform: scaleX(1); transform-origin: left; }
        }
      `}</style>
    </>
  );
}