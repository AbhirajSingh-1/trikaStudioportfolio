import { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'AI Advertising', path: '/ai-advertising' },
  { label: '3D Visualization', path: '/visulization' },
  { label: 'Digital Marketing', path: '/digital-marketing' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // ── Close menu when clicking outside the header ──
  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        ref={headerRef}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          backgroundColor: scrolled ? 'rgba(253,252,248,0.97)' : 'rgba(253,252,248,0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: scrolled ? '1px solid #E8E2D8' : '1px solid rgba(232,226,216,0.5)',
          transition: 'all 0.35s ease',
          boxShadow: scrolled ? '0 2px 20px rgba(24,19,13,0.07)' : 'none',
        }}
      >
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          height: '68px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
        }}>
          {/* Logo */}
          <button
            onClick={() => navigate('/')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, flexShrink: 0 }}
            aria-label="Trika Studio home"
          >
            <Logo size="lg" variant="header" />
          </button>

          {/* Desktop nav */}
          <nav className="header-desktop-nav" style={{ alignItems: 'center', gap: '2px', flex: 1, justifyContent: 'center' }}>
            {navLinks.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                style={({ isActive }) => ({
                  position: 'relative',
                  padding: '7px 13px',
                  borderRadius: '8px',
                  fontSize: '0.84rem',
                  fontWeight: isActive ? 500 : 400,
                  fontFamily: "'DM Sans', sans-serif",
                  color: isActive ? '#C9481B' : '#5A524A',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  letterSpacing: '0.01em',
                  transition: 'color 0.2s, background 0.2s',
                  background: isActive ? 'rgba(201,72,27,0.06)' : 'transparent',
                })}
                onMouseEnter={e => {
                  if (!e.currentTarget.dataset.active) {
                    e.currentTarget.style.color = '#18130D';
                    e.currentTarget.style.background = 'rgba(24,19,13,0.04)';
                  }
                }}
                onMouseLeave={e => {
                  const isActive = e.currentTarget.getAttribute('aria-current') === 'page';
                  e.currentTarget.style.color = isActive ? '#C9481B' : '#5A524A';
                  e.currentTarget.style.background = isActive ? 'rgba(201,72,27,0.06)' : 'transparent';
                }}
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <span style={{
                        position: 'absolute',
                        bottom: '4px',
                        left: '13px',
                        right: '13px',
                        height: '1.5px',
                        background: '#C9481B',
                        borderRadius: '99px',
                        animation: 'underline-grow 0.25s ease forwards',
                      }} />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="header-desktop-cta" style={{ alignItems: 'center', flexShrink: 0 }}>
            <button
              onClick={() => navigate('/contact')}
              className="btn-primary"
              style={{ padding: '10px 22px', fontSize: '0.84rem' }}
            >
              Get Started →
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="header-hamburger"
            style={{
              background: 'none',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              cursor: 'pointer',
              padding: '8px 10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              flexShrink: 0,
            }}
          >
            {[0, 1, 2].map((_, i) => (
              <span key={i} style={{
                display: 'block',
                width: '20px',
                height: '1.5px',
                background: '#18130D',
                borderRadius: '99px',
                transition: 'all 0.3s ease',
                transformOrigin: 'center',
                transform: menuOpen
                  ? i === 0 ? 'rotate(45deg) translate(4px, 4px)'
                  : i === 1 ? 'scaleX(0)'
                  : 'rotate(-45deg) translate(4px, -4px)'
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className="header-mobile-menu"
          style={{
            overflow: 'hidden',
            maxHeight: menuOpen ? '520px' : '0',
            opacity: menuOpen ? 1 : 0,
            transition: 'max-height 0.38s ease, opacity 0.28s ease',
            background: 'rgba(253,252,248,0.99)',
            borderTop: menuOpen ? '1px solid #E8E2D8' : 'none',
          }}
        >
          <div style={{ padding: '12px 20px 20px' }}>
            {navLinks.map(({ label, path }, i) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '13px 4px',
                  fontSize: '1rem',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? '#C9481B' : '#18130D',
                  textDecoration: 'none',
                  borderBottom: i < navLinks.length - 1 ? '1px solid #F0EAE2' : 'none',
                  transition: 'color 0.2s',
                })}
              >
                {label}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </NavLink>
            ))}
            <button
              onClick={() => { navigate('/contact'); setMenuOpen(false); }}
              className="btn-primary"
              style={{ width: '100%', marginTop: '16px' }}
            >
              Get Started →
            </button>
          </div>
        </div>
      </header>

      <style>{`
        @keyframes underline-grow {
          from { transform: scaleX(0); transform-origin: left; }
          to   { transform: scaleX(1); transform-origin: left; }
        }
        .header-desktop-nav  { display: none; flex: 1; }
        .header-desktop-cta  { display: none; }
        .header-hamburger    { display: flex; }
        .header-mobile-menu  { display: block; }

        @media (min-width: 1024px) {
          .header-desktop-nav  { display: flex !important; }
          .header-desktop-cta  { display: flex !important; }
          .header-hamburger    { display: none  !important; }
          .header-mobile-menu  { display: none  !important; }
        }
      `}</style>
    </>
  );
}