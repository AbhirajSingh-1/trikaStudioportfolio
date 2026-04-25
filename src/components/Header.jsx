import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'AI Advertising', id: 'ai-advertising' },
  { label: '3D Visualization', id: 'visualization' },
  { label: 'Digital Marketing', id: 'digital-marketing' },
  { label: 'About Us', id: 'about' },
  { label: 'Contact Us', id: 'contact' },
];

export default function Header() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.25, rootMargin: '-80px 0px -55% 0px' }
    );

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass shadow-[0_8px_40px_rgba(0,0,0,0.4)]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollTo('home')} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-purple-700 flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-shadow duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-xl font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>
              <span className="text-gradient">Trika</span>
              <span className="text-white"> Studio</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  active === id
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {active === id && (
                  <span className="absolute inset-0 rounded-lg bg-white/10 border border-white/10" />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => scrollTo('contact')}
              className="btn-primary text-sm relative z-10"
            >
              <span className="relative z-10">Get Started →</span>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white rounded transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-white rounded transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${
            menuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
          } glass border-t border-white/5`}
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`text-left px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  active === id
                    ? 'bg-white/10 text-white border border-white/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="mt-2 btn-primary text-sm text-center"
            >
              Get Started →
            </button>
          </div>
        </div>
      </header>
    </>
  );
}