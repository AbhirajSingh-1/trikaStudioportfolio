const footerLinks = {
  Services: ['AI Advertising', '3D Visualization', 'Digital Marketing', 'Brand Strategy', 'Content Creation'],
  Company: ['About Us', 'Our Team', 'Careers', 'Blog', 'Press'],
  Contact: ['hello@trikastudio.in', '+91 98765 43210', 'Gurugram, Haryana', 'Mon–Fri 10am–7pm'],
};

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
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
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com',
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const sectionMap = {
  'AI Advertising': 'ai-advertising',
  '3D Visualization': 'visualization',
  'Digital Marketing': 'digital-marketing',
  'About Us': 'about',
  'Our Team': 'about',
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5" style={{ background: '#020613' }}>
      {/* Orbs */}
      <div className="orb w-96 h-96 opacity-20 left-0 bottom-0 -translate-x-1/2 translate-y-1/2"
        style={{ background: 'radial-gradient(circle, #4D7EF5, transparent)' }} />
      <div className="orb w-72 h-72 opacity-15 right-0 top-0 translate-x-1/3 -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, #9C4DFF, transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10">
        {/* Top */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-700 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>
                <span className="text-gradient">Trika</span>
                <span className="text-white"> Studio</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              We craft AI-powered digital experiences that transform brands and accelerate growth. Where creativity meets cutting-edge technology.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all duration-300 hover:scale-110"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white text-sm font-semibold mb-5 tracking-wider uppercase"
                style={{ fontFamily: 'Syne, sans-serif' }}>
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    {sectionMap[link] ? (
                      <button
                        onClick={() => scrollTo(sectionMap[link])}
                        className="text-slate-400 text-sm hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {link}
                      </button>
                    ) : (
                      <span className="text-slate-500 text-sm">{link}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2025 Trika Studio. All rights reserved. Crafted with precision & passion.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-slate-500 text-sm hover:text-slate-300 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-slate-500 text-sm hover:text-slate-300 cursor-pointer transition-colors">Terms of Service</span>
            <span className="text-slate-500 text-sm hover:text-slate-300 cursor-pointer transition-colors">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}