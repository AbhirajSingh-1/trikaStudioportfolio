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
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
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
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer
      className="relative overflow-hidden border-t"
      style={{
        background: 'linear-gradient(180deg, #020613 0%, #01040E 100%)',
        borderColor: 'rgba(255,255,255,0.05)',
      }}
    >
      {/* Orbs */}
      <div
        className="orb w-96 h-96 opacity-15 left-0 bottom-0 -translate-x-1/2 translate-y-1/2"
        style={{ background: 'radial-gradient(circle, #4D7EF5, transparent)' }}
      />
      <div
        className="orb w-72 h-72 opacity-10 right-0 top-0 translate-x-1/3 -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, #FF6B35, transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-8 sm:pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 mb-12 sm:mb-16">

          {/* ── Brand column ── */}
          <div className="col-span-2 lg:col-span-2">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2.5 mb-5 group"
            >
              <Logo size={34} />
              <div className="flex items-baseline">
                <span
                  className="text-lg font-black tracking-tight"
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    background: 'linear-gradient(135deg, #FF6B35 0%, #F5A623 60%, #FF3D00 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Trika
                </span>
                <span
                  className="text-lg font-black tracking-tight text-white ml-1.5"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  Studio
                </span>
              </div>
            </button>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              AI-powered digital experiences that transform brands and accelerate growth. Where creativity meets cutting-edge technology.
            </p>

            <div className="flex items-center gap-2.5">
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 glass-card rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all duration-300 hover:scale-110"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Link columns ── */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                className="text-white text-xs font-semibold mb-4 tracking-widest uppercase"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map(({ label, path }) => (
                  <li key={label}>
                    {path ? (
                      <button
                        onClick={() => navigate(path)}
                        className="text-slate-500 text-sm hover:text-slate-300 transition-colors duration-300 text-left"
                      >
                        {label}
                      </button>
                    ) : (
                      <span className="text-slate-600 text-sm">{label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="border-t pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'rgba(255,255,255,0.05)' }}
        >
          <p className="text-slate-600 text-xs text-center sm:text-left">
            © 2025 Trika Studio. All rights reserved. Crafted with precision & passion.
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
              <span
                key={item}
                className="text-slate-600 text-xs hover:text-slate-400 cursor-pointer transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}