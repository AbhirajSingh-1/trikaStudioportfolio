import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* ── Data ── */
const stats = [
  { value: '150+', label: 'Projects delivered' },
  { value: '40+',  label: 'Brand clients' },
  { value: '98%',  label: 'Client satisfaction' },
  { value: '5★',   label: 'Average rating' },
];

const services = [
  {
    num: '01',
    title: 'AI Advertising',
    desc: 'Hyper-personalized campaigns driven by generative AI — from text-to-video spots to dynamic creative at scale.',
    path: '/ai-advertising',
    color: '#C9481B',
  },
  {
    num: '02',
    title: '3D Visualization',
    desc: 'Photorealistic product renders, architectural flythroughs, and immersive 3D brand films.',
    path: '/3d-visualization',
    color: '#8C5F30',
  },
  {
    num: '03',
    title: 'Digital Marketing',
    desc: 'Full-funnel growth — social media, performance ads, SEO, and data-driven content strategy.',
    path: '/digital-marketing',
    color: '#4A6741',
  },
  {
    num: '04',
    title: 'AI Avatars',
    desc: 'Photorealistic digital humans that deliver your brand message across 120+ languages at scale.',
    path: '/ai-advertising',
    color: '#2C5F7A',
  },
];

/* ── Portfolio images ── simulating a real creative agency portfolio ── */
const portfolioItems = [
  { src: 'https://picsum.photos/seed/trika-food-1/600/500',   label: 'Food & Beverage Campaign',    cat: 'Social Media', tall: false },
  { src: 'https://picsum.photos/seed/trika-tech-2/600/700',   label: 'Tech Product Launch',          cat: 'AI Advertising', tall: true },
  { src: 'https://picsum.photos/seed/trika-arch-3/600/450',   label: 'Architectural Visualization',  cat: '3D Render', tall: false },
  { src: 'https://picsum.photos/seed/trika-fash-4/600/600',   label: 'Fashion Brand Identity',       cat: 'Branding', tall: false },
  { src: 'https://picsum.photos/seed/trika-rest-5/600/650',   label: 'Restaurant Social Pack',       cat: 'Social Media', tall: true },
  { src: 'https://picsum.photos/seed/trika-chai-6/600/450',   label: 'Beverage Ad Campaign',         cat: 'AI Advertising', tall: false },
  { src: 'https://picsum.photos/seed/trika-real-7/600/500',   label: 'Real Estate 3D Walkthrough',   cat: '3D Render', tall: false },
  { src: 'https://picsum.photos/seed/trika-app-8/600/480',    label: 'App Brand Campaign',           cat: 'Performance', tall: false },
];

const catColors = {
  'Social Media':   { bg: '#FEF3E2', text: '#A85B18' },
  'AI Advertising': { bg: '#FDE8E3', text: '#C9481B' },
  '3D Render':      { bg: '#EAF3E8', text: '#3A6B35' },
  'Branding':       { bg: '#E6EFF8', text: '#2A5785' },
  'Performance':    { bg: '#F0EAF8', text: '#6A3A9A' },
};

const trustedBy = ['TechCorp', 'NexaDigital', 'BrandFlow', 'MediaPro', 'StartupX', 'GrowthLab'];

const whyPoints = [
  { icon: '⚡', title: 'AI-First Pipeline', desc: 'Every workflow supercharged with the latest generative AI models.' },
  { icon: '🎯', title: 'Results-Obsessed', desc: 'Beautiful work that also converts — data-backed creative decisions.' },
  { icon: '🤝', title: 'True Partnership', desc: 'We integrate deeply with your team as a strategic extension.' },
  { icon: '🌟', title: 'Uncompromising Quality', desc: 'We only ship work we are proud to put our name on.' },
];

/* ── Component ── */
export default function Home() {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Social Media', 'AI Advertising', '3D Render', 'Branding', 'Performance'];

  const filtered = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(p => p.cat === activeFilter);

  return (
    <div className="container-safe" style={{ background: 'var(--bg)' }}>

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section
        ref={heroRef}
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(100px, 14vw, 160px) 24px 60px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Very subtle bg pattern */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(201,72,27,0.04) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(201,72,27,0.03) 0%, transparent 50%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
          {/* Tag */}
          <div className="animate-fade-in" style={{ marginBottom: '28px', animationFillMode: 'both' }}>
            <span className="section-tag">
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C9481B', display: 'inline-block' }} />
              AI-First Digital Agency · Gurugram
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="animate-slide-up"
            style={{
              fontFamily: "'Cormorant Garant', serif",
              fontWeight: 700,
              fontSize: 'clamp(2.8rem, 8.5vw, 6.5rem)',
              lineHeight: 1.04,
              letterSpacing: '-0.025em',
              color: 'var(--text)',
              marginBottom: '28px',
              animationDelay: '0.1s',
              animationFillMode: 'both',
            }}
          >
            We Build{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--orange)' }}>AI‑Powered</em>
            <br />
            Digital Experiences
          </h1>

          {/* Sub copy */}
          <p
            className="animate-slide-up"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(0.95rem, 2.2vw, 1.1rem)',
              color: 'var(--text-muted)',
              maxWidth: '600px',
              margin: '0 auto 40px',
              lineHeight: 1.75,
              animationDelay: '0.25s',
              animationFillMode: 'both',
            }}
          >
            From AI-generated advertising and hyper-realistic 3D visuals to full-funnel digital marketing —
            where <strong style={{ color: 'var(--text)', fontWeight: 500 }}>bold creativity</strong> meets{' '}
            <strong style={{ color: 'var(--text)', fontWeight: 500 }}>cutting-edge technology</strong>.
          </p>

          {/* CTAs */}
          <div
            className="animate-slide-up"
            style={{
              display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap',
              animationDelay: '0.4s', animationFillMode: 'both',
            }}
          >
            <button className="btn-primary" onClick={() => navigate('/ai-advertising')}>
              View Our Work →
            </button>
            <button className="btn-outline" onClick={() => navigate('/contact')}>
              Contact Us
            </button>
          </div>

          {/* Service chips */}
          <div
            className="animate-fade-in"
            style={{
              marginTop: '52px', display: 'flex', flexWrap: 'wrap',
              gap: '8px', justifyContent: 'center',
              animationDelay: '0.6s', animationFillMode: 'both',
            }}
          >
            {['AI Advertising', '3D Visualization', 'Social Media', 'AI Avatars', 'Performance Marketing', 'Brand Identity'].map(t => (
              <span key={t} style={{
                fontSize: '12px', fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400, padding: '6px 14px', borderRadius: '99px',
                border: '1px solid var(--border)', color: 'var(--text-muted)',
                background: 'transparent', cursor: 'default',
                transition: 'all 0.2s',
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{
          position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        }}>
          <span style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-light)', fontFamily: "'DM Sans', sans-serif" }}>Scroll</span>
          <div style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom, var(--border-dark), transparent)' }} />
        </div>
      </section>

      {/* ═══════════════════ STATS BAR ═══════════════════ */}
      <section style={{ background: 'var(--text)', padding: '40px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '32px', textAlign: 'center' }}>
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div style={{
                fontFamily: "'Cormorant Garant', serif", fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#C9481B', lineHeight: 1,
              }}>{value}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'rgba(253,252,248,0.5)', marginTop: '6px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════ SERVICES ═══════════════════ */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 24px', background: 'var(--bg)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', marginBottom: '56px' }}>
            <div>
              <span className="section-tag" style={{ marginBottom: '16px', display: 'inline-flex' }}>What We Do</span>
              <h2 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: 'var(--text)', lineHeight: 1.1 }}>
                Our Services
              </h2>
            </div>
            <button className="btn-outline" onClick={() => navigate('/contact')}>
              Work With Us
            </button>
          </div>

          {/* Service rows */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {services.map((s, i) => (
              <div
                key={s.num}
                onClick={() => navigate(s.path)}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '48px 1fr auto',
                  alignItems: 'center',
                  gap: '24px',
                  padding: '28px 0',
                  borderTop: '1px solid var(--border)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  borderBottom: i === services.length - 1 ? '1px solid var(--border)' : 'none',
                }}
                className="service-row"
                onMouseEnter={e => {
                  e.currentTarget.style.paddingLeft = '12px';
                  e.currentTarget.style.background = 'rgba(201,72,27,0.03)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.paddingLeft = '0';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <span style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 300, fontSize: '0.85rem', color: 'var(--text-light)', letterSpacing: '0.05em' }}>{s.num}</span>
                <div>
                  <h3 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)', color: 'var(--text)', marginBottom: '4px' }}>{s.title}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="1.75" style={{ flexShrink: 0 }}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ PORTFOLIO GRID ═══════════════════ */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 24px', background: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '16px' }}>Portfolio</span>
            <h2 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: 'var(--text)', lineHeight: 1.1, marginBottom: '12px' }}>
              Our Creative Work
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', color: 'var(--text-muted)', maxWidth: '480px', margin: '0 auto' }}>
              A curated selection of campaigns, 3D renders, and brand experiences.
            </p>
          </div>

          {/* Filter tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: '36px' }}>
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '12px', fontWeight: 500,
                  padding: '7px 16px', borderRadius: '99px',
                  border: activeFilter === f ? 'none' : '1px solid var(--border-dark)',
                  background: activeFilter === f ? 'var(--orange)' : 'transparent',
                  color: activeFilter === f ? '#fff' : 'var(--text-muted)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  letterSpacing: '0.03em',
                }}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Masonry-style 4-column portfolio grid */}
          <div style={{
            columns: 'auto',
            columnCount: 4,
            columnGap: '16px',
          }}
            className="portfolio-grid"
          >
            {filtered.map((item, i) => (
              <div
                key={i}
                className="portfolio-item"
                style={{
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  marginBottom: '16px',
                  breakInside: 'avoid',
                  cursor: 'pointer',
                  boxShadow: '0 2px 12px rgba(24,19,13,0.08)',
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(24,19,13,0.14)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(24,19,13,0.08)';
                }}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  loading="lazy"
                  style={{
                    width: '100%',
                    display: 'block',
                    objectFit: 'cover',
                    /* Vary heights for masonry feel */
                    aspectRatio: i % 3 === 1 ? '3/4' : i % 4 === 0 ? '4/5' : '4/3',
                  }}
                />
                {/* Overlay */}
                <div className="portfolio-overlay" />
                {/* Labels */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '20px 16px 16px',
                  opacity: 0, transition: 'opacity 0.35s ease',
                  zIndex: 2,
                }}
                  className="portfolio-label"
                >
                  <div style={{
                    display: 'inline-block', fontSize: '10px', fontWeight: 500,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    padding: '3px 10px', borderRadius: '99px',
                    background: catColors[item.cat]?.bg || '#fff',
                    color: catColors[item.cat]?.text || '#333',
                    marginBottom: '6px', fontFamily: "'DM Sans', sans-serif",
                  }}>
                    {item.cat}
                  </div>
                  <div style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 600, fontSize: '1rem', color: '#fff', lineHeight: 1.3 }}>
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View all */}
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button className="btn-outline" onClick={() => navigate('/ai-advertising')}>
              View All Work →
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════ TRUSTED BY ═══════════════════ */}
      <section style={{ padding: '52px 24px', background: 'var(--bg)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <p style={{ textAlign: 'center', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-light)', fontFamily: "'DM Sans', sans-serif", marginBottom: '28px' }}>
          Trusted by forward-thinking brands
        </p>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px 48px' }}>
          {trustedBy.map(b => (
            <span key={b} style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 600, fontSize: '1.4rem', color: 'var(--text-light)', letterSpacing: '-0.01em' }}>
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* ═══════════════════ WHY TRIKA ═══════════════════ */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 24px', background: 'var(--bg)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}
          className="why-grid">
          {/* Left */}
          <div>
            <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '20px' }}>Why Trika Studio</span>
            <h2 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: 'var(--text)', lineHeight: 1.1, marginBottom: '20px' }}>
              Intelligence<br />
              meets{' '}
              <em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>Imagination</em>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '32px', maxWidth: '440px' }}>
              We don't just deliver deliverables — we build digital ecosystems. Every project at Trika Studio is powered by proprietary AI pipelines, elite creative talent, and a relentless obsession with results.
            </p>
            <button className="btn-primary" onClick={() => navigate('/about')}>
              Meet the Team →
            </button>
          </div>
          {/* Right — 2×2 points */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {whyPoints.map(({ icon, title, desc }) => (
              <div key={title} style={{
                padding: '24px 20px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                transition: 'all 0.25s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--orange)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(201,72,27,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '12px' }}>{icon}</span>
                <h4 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 600, fontSize: '1.05rem', color: 'var(--text)', marginBottom: '6px' }}>{title}</h4>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA BANNER ═══════════════════ */}
      <section style={{
        padding: 'clamp(60px, 8vw, 100px) 24px',
        background: 'var(--text)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '24px', borderColor: 'rgba(201,72,27,0.4)', color: '#E06035' }}>
            Let's Build Together
          </span>
          <h2 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(2.2rem, 5.5vw, 4rem)', color: '#FDFCF8', lineHeight: 1.08, marginBottom: '20px' }}>
            Ready to Transform<br />
            <em style={{ color: '#C9481B', fontStyle: 'italic' }}>Your Brand?</em>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', color: 'rgba(253,252,248,0.55)', lineHeight: 1.75, marginBottom: '36px' }}>
            No hard sells — just a genuine conversation about what's possible for your brand.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => navigate('/contact')}>
              Start the Conversation →
            </button>
            <button
              onClick={() => navigate('/about')}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
                fontSize: '0.875rem', color: 'rgba(253,252,248,0.6)',
                background: 'none', border: 'none', cursor: 'pointer',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#FDFCF8'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(253,252,248,0.6)'}
            >
              Meet the team →
            </button>
          </div>
        </div>
      </section>

      {/* Responsive overrides */}
      <style>{`
        .portfolio-overlay { opacity: 0; transition: opacity 0.35s ease; }
        .portfolio-item:hover .portfolio-overlay { opacity: 1 !important; }
        .portfolio-item:hover .portfolio-label { opacity: 1 !important; }

        @media (max-width: 900px) {
          .portfolio-grid { column-count: 2 !important; }
        }
        @media (max-width: 540px) {
          .portfolio-grid { column-count: 2 !important; }
        }
        @media (max-width: 380px) {
          .portfolio-grid { column-count: 1 !important; }
        }
        @media (max-width: 768px) {
          .why-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .service-row { grid-template-columns: 36px 1fr auto !important; }
        }
      `}</style>
    </div>
  );
}