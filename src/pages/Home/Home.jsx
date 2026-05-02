import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* ─── Data ─── */
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
    path: '/visulization',
    color: '#8C5F30',
  },
  {
    num: '03',
    title: 'Digital Marketing',
    desc: 'Full-funnel growth — social media, performance ads, SEO, and data-driven content strategy.',
    path: '/digital-marketing',
    color: '#4A6741',
  },
];

const portfolioItems = [
  {
    src: '/smm-2.webp',
    label: 'Social Media Campaign',
    cat: 'Social Media',
    redirectTo: '/digital-marketing',
  },
  {
    src: '/smm-5.webp',
    label: 'Social Media Analytics',
    cat: 'Social Media',
    redirectTo: '/digital-marketing',
  },
  {
    type: 'shorts',
    videoId: 'Rj4eYEHXfVU',
    label: 'AI Brand Campaign – Cinematic Spot',
    cat: 'AI Advertising',
    redirectTo: '/ai-advertising',
  },
  {
    type: 'shorts',
    videoId: 'aXY_ykf-dWE',
    label: 'Generative AI Ad – E-Commerce Brand',
    cat: 'AI Advertising',
    redirectTo: '/ai-advertising',
  },
  {
    src: '/Scene 2_1.webp',
    label: '3D Interior Visualization',
    cat: '3D Visualization',
    redirectTo: '/visulization',
  },
  {
    src: '/D5_Scene 1 1_20240130_125857.webp',
    label: 'Architectural Interior Render',
    cat: '3D Visualization',
    redirectTo: '/visulization',
  },
  {
    src: '/smm-4.webp',
    label: 'Brand Identity Design',
    cat: 'Branding',
    redirectTo: '/digital-marketing',
  },
];

/* Maps each filter to its destination page */
const filterRoutes = {
  'Social Media':    '/digital-marketing',
  'AI Advertising':  '/ai-advertising',
  '3D Visualization':'/visulization',
  'Branding':        '/digital-marketing',
};

const catColors = {
  'Social Media':    { bg: '#FEF3E2', text: '#A85B18' },
  'AI Advertising':  { bg: '#FDE8E3', text: '#C9481B' },
  '3D Visualization':{ bg: '#EAF3E8', text: '#3A6B35' },
  'Branding':        { bg: '#E6EFF8', text: '#2A5785' },
};

const brandLogos = Array.from({ length: 14 }, (_, i) => `/brandlogo${i + 1}.png`);

const whyPoints = [
  { icon: '⚡', title: 'AI-First Pipeline',       desc: 'Every workflow supercharged with the latest generative AI models.' },
  { icon: '🎯', title: 'Results-Obsessed',         desc: 'Beautiful work that also converts — data-backed creative decisions.' },
  { icon: '🤝', title: 'True Partnership',          desc: 'We integrate deeply with your team as a strategic extension.' },
  { icon: '🌟', title: 'Uncompromising Quality',   desc: 'We only ship work we are proud to put our name on.' },
];

/* ─── YouTube Shorts thumbnail card (for portfolio grid) ─── */
function ShortsPortfolioCard({ item, onClick }) {
  const [thumbIdx, setThumbIdx]       = useState(0);
  const [thumbFailed, setThumbFailed] = useState(false);
  const [hovered, setHovered]         = useState(false);

  const thumbSteps = [
    `https://i.ytimg.com/vi/${item.videoId}/hqdefault.jpg`,
    `https://i.ytimg.com/vi/${item.videoId}/mqdefault.jpg`,
    `https://i.ytimg.com/vi/${item.videoId}/sddefault.jpg`,
  ];

  return (
    <div
      className="portfolio-item"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: '12px',
        overflow: 'hidden',
        marginBottom: '14px',
        breakInside: 'avoid',
        cursor: 'pointer',
        boxShadow: hovered
          ? '0 16px 40px rgba(24,19,13,0.14)'
          : '0 2px 12px rgba(24,19,13,0.08)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        background: '#F0EAE4',
      }}
    >
      {!thumbFailed ? (
        <img
          key={thumbSteps[thumbIdx]}
          src={thumbSteps[thumbIdx]}
          alt={item.label}
          loading="lazy"
          style={{ width: '100%', display: 'block', objectFit: 'cover', aspectRatio: '4/3' }}
          onError={() => {
            if (thumbIdx < thumbSteps.length - 1) setThumbIdx(i => i + 1);
            else setThumbFailed(true);
          }}
        />
      ) : (
        <div style={{
          width: '100%', aspectRatio: '4/3',
          background: 'linear-gradient(135deg, #F7F0E6, #EDE0CC)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="#C9481B"><path d="M5 3l14 9-14 9z" /></svg>
        </div>
      )}

      {/* YT Shorts badge */}
      <div style={{ position: 'absolute', top: '8px', left: '8px', zIndex: 3 }}>
        <span style={{
          background: '#FF0000', color: '#fff',
          fontSize: '8px', fontWeight: 800,
          fontFamily: "'DM Sans', sans-serif",
          padding: '2px 7px', borderRadius: '3px', letterSpacing: '0.06em',
        }}>▶ SHORTS</span>
      </div>

      {/* Play button */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        pointerEvents: 'none',
      }}>
        <div style={{
          width: '44px', height: '44px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.92)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
          transform: hovered ? 'scale(1.12)' : 'scale(1)',
          transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1)',
        }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="#C9481B"><path d="M5 3l14 9-14 9z" /></svg>
        </div>
      </div>

      <div className="portfolio-overlay" />
      <div
        className="portfolio-label"
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: '18px 14px 14px', opacity: 0,
          transition: 'opacity 0.32s ease', zIndex: 4,
        }}
      >
        <div style={{
          display: 'inline-block', fontSize: '10px', fontWeight: 500,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          padding: '3px 9px', borderRadius: '99px',
          background: catColors['AI Advertising'].bg,
          color: catColors['AI Advertising'].text,
          marginBottom: '5px', fontFamily: "'DM Sans', sans-serif",
        }}>
          AI Advertising
        </div>
        <div style={{
          fontFamily: "'Cormorant Garant', serif", fontWeight: 600,
          fontSize: '0.95rem', color: '#fff', lineHeight: 1.3,
        }}>
          {item.label}
        </div>
      </div>
    </div>
  );
}

/* ─── Regular image portfolio card ─── */
function ImagePortfolioCard({ item, onClick }) {
  const [hovered, setHovered] = useState(false);
  const col = catColors[item.cat] || { bg: '#fff', text: '#333' };

  return (
    <div
      className="portfolio-item"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: '12px',
        overflow: 'hidden',
        marginBottom: '14px',
        breakInside: 'avoid',
        cursor: 'pointer',
        boxShadow: hovered
          ? '0 16px 40px rgba(24,19,13,0.14)'
          : '0 2px 12px rgba(24,19,13,0.08)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
      }}
    >
      <img
        src={item.src}
        alt={item.label}
        loading="lazy"
        style={{ width: '100%', display: 'block', objectFit: 'cover', height: 'auto' }}
      />
      <div className="portfolio-overlay" />
      <div
        className="portfolio-label"
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: '18px 14px 14px', opacity: 0,
          transition: 'opacity 0.32s ease', zIndex: 2,
        }}
      >
        <div style={{
          display: 'inline-block', fontSize: '10px', fontWeight: 500,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          padding: '3px 9px', borderRadius: '99px',
          background: col.bg, color: col.text,
          marginBottom: '5px', fontFamily: "'DM Sans', sans-serif",
        }}>
          {item.cat}
        </div>
        <div style={{
          fontFamily: "'Cormorant Garant', serif", fontWeight: 600,
          fontSize: '0.95rem', color: '#fff', lineHeight: 1.3,
        }}>
          {item.label}
        </div>
      </div>
    </div>
  );
}

/* ─── Main page ─── */
export default function Home() {
  const navigate    = useNavigate();
  const servicesRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Social Media', 'AI Advertising', '3D Visualization', 'Branding'];

  const filtered = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(p => p.cat === activeFilter);

  const handleViewOurWork = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewAllWork = () => {
    const route = filterRoutes[activeFilter];
    if (route) navigate(route);
  };

  const handleItemClick = (item) => {
    navigate(item.redirectTo);
  };

  return (
    <div className="container-safe" style={{ background: 'var(--bg)' }}>

      {/* ═══════════ HERO ═══════════ */}
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          /* reduced top padding — fixes the blank-space-at-top issue */
          paddingTop:    'clamp(20px, 4vw, 40px)',
          paddingBottom: 'clamp(36px, 5vw, 60px)',
          paddingLeft:   '24px',
          paddingRight:  '24px',
          marginTop:     '68px', /* exact header height */
          textAlign:     'center',
          position:      'relative',
          overflow:      'hidden',
        }}
      >
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage:
            'radial-gradient(circle at 20% 80%, rgba(201,72,27,0.04) 0%, transparent 50%),' +
            'radial-gradient(circle at 80% 20%, rgba(201,72,27,0.03) 0%, transparent 50%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>

          {/* Headline */}
          <h1
            className="animate-slide-up"
            style={{
              fontFamily:      "'Cormorant Garant', serif",
              fontWeight:      700,
              fontSize:        'clamp(2rem, 5.5vw, 4.2rem)',
              lineHeight:      1.08,
              letterSpacing:   '-0.02em',
              color:           'var(--text)',
              marginBottom:    '20px',
              animationDelay:  '0.1s',
              animationFillMode:'both',
            }}
          >
            We Build{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--orange)' }}>AI‑Powered</em>
            {' '}Digital Experiences
          </h1>

          {/* Sub copy */}
          <p
            className="animate-slide-up"
            style={{
              fontFamily:       "'DM Sans', sans-serif",
              fontSize:         'clamp(0.88rem, 1.8vw, 1rem)',
              color:            'var(--text-muted)',
              maxWidth:         '520px',
              margin:           '0 auto 36px',
              lineHeight:       1.7,
              animationDelay:   '0.22s',
              animationFillMode:'both',
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
              display:          'flex',
              gap:              '12px',
              justifyContent:   'center',
              flexWrap:         'wrap',
              animationDelay:   '0.36s',
              animationFillMode:'both',
            }}
          >
            {/* "View Our Work" now scrolls to services */}
            <button className="btn-primary" onClick={handleViewOurWork}>
              View Our Work →
            </button>
            <button className="btn-outline" onClick={() => navigate('/contact')}>
              Get in Touch
            </button>
          </div>

          {/* Service chips */}
          <div
            className="animate-fade-in"
            style={{
              marginTop:        '36px',
              display:          'flex',
              flexWrap:         'wrap',
              gap:              '8px',
              justifyContent:   'center',
              animationDelay:   '0.55s',
              animationFillMode:'both',
            }}
          >
            {['AI Advertising', '3D Visualization', 'Social Media', 'AI Avatars', 'Performance Marketing', 'Brand Identity'].map(t => (
              <span key={t} style={{
                fontSize:     '11.5px',
                fontFamily:   "'DM Sans', sans-serif",
                fontWeight:   400,
                padding:      '5px 13px',
                borderRadius: '99px',
                border:       '1px solid var(--border)',
                color:        'var(--text-muted)',
                background:   'transparent',
                cursor:       'default',
              }}>
                {t}
              </span>
            ))}
          </div>

          {/* Minimal scroll cue (much smaller than before) */}
          <div style={{ marginTop: 'clamp(24px, 4vw, 40px)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-light)', fontFamily: "'DM Sans', sans-serif" }}>
              Scroll
            </span>
            <div style={{ width: '1px', height: '24px', background: 'linear-gradient(to bottom, var(--border-dark), transparent)' }} />
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICES ═══════════ */}
      <section ref={servicesRef} style={{ padding: 'clamp(56px, 8vw, 96px) 24px', background: 'var(--bg)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{
            display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: '20px', marginBottom: '48px',
          }}>
            <div>
              <span className="section-tag" style={{ marginBottom: '14px', display: 'inline-flex' }}>What We Do</span>
              <h2 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--text)', lineHeight: 1.1 }}>
                Our Services
              </h2>
            </div>
            <button className="btn-outline" onClick={() => navigate('/contact')}>Work With Us</button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {services.map((s, i) => (
              <div
                key={s.num}
                onClick={() => navigate(s.path)}
                style={{
                  display:             'grid',
                  gridTemplateColumns: '44px 1fr auto',
                  alignItems:          'center',
                  gap:                 '20px',
                  padding:             '24px 0',
                  borderTop:           '1px solid var(--border)',
                  cursor:              'pointer',
                  transition:          'all 0.22s ease',
                  borderBottom:        i === services.length - 1 ? '1px solid var(--border)' : 'none',
                }}
                className="service-row"
                onMouseEnter={e => { e.currentTarget.style.paddingLeft = '10px'; e.currentTarget.style.background = 'rgba(201,72,27,0.025)'; }}
                onMouseLeave={e => { e.currentTarget.style.paddingLeft = '0'; e.currentTarget.style.background = 'transparent'; }}
              >
                <span style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 300, fontSize: '0.8rem', color: 'var(--text-light)', letterSpacing: '0.05em' }}>{s.num}</span>
                <div>
                  <h3 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--text)', marginBottom: '3px' }}>{s.title}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>{s.desc}</p>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="1.75" style={{ flexShrink: 0 }}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 0303 SHOWCASE IMAGE ═══════════ */}
      <section style={{ background: 'var(--bg)', lineHeight: 0, overflow: 'hidden' }}>
        <img
          src="/0303.png"
          alt="Trika Studio – Creative Showcase"
          style={{
            width:      '100%',
            height:     'auto',
            display:    'block',
            objectFit:  'cover',
            maxHeight:  'clamp(200px, 50vw, 640px)',
            objectPosition: 'center',
          }}
        />
      </section>

      {/* ═══════════ PORTFOLIO ═══════════ */}
      <section style={{ padding: 'clamp(56px, 8vw, 96px) 24px', background: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '14px' }}>Portfolio</span>
            <h2 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--text)', lineHeight: 1.1, marginBottom: '10px' }}>
              Our Creative Work
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', color: 'var(--text-muted)', maxWidth: '440px', margin: '0 auto' }}>
              A curated selection of campaigns, 3D renders, and brand experiences.
            </p>
          </div>

          {/* Filter tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: '32px' }}>
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  fontFamily:   "'DM Sans', sans-serif",
                  fontSize:     '12px',
                  fontWeight:   500,
                  padding:      '6px 15px',
                  borderRadius: '99px',
                  border:       activeFilter === f ? 'none' : '1px solid var(--border-dark)',
                  background:   activeFilter === f ? 'var(--orange)' : 'transparent',
                  color:        activeFilter === f ? '#fff' : 'var(--text-muted)',
                  cursor:       'pointer',
                  transition:   'all 0.18s ease',
                }}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div style={{ columns: 'auto', columnCount: 4, columnGap: '14px' }} className="portfolio-grid">
            {filtered.map((item, i) =>
              item.type === 'shorts' ? (
                <ShortsPortfolioCard
                  key={`${item.videoId}-${i}`}
                  item={item}
                  onClick={() => handleItemClick(item)}
                />
              ) : (
                <ImagePortfolioCard
                  key={`${item.src}-${i}`}
                  item={item}
                  onClick={() => handleItemClick(item)}
                />
              )
            )}
          </div>

          {/* "View All Work" — hidden when filter is "All" */}
          {activeFilter !== 'All' && filterRoutes[activeFilter] && (
            <div style={{ textAlign: 'center', marginTop: '36px' }}>
              <button className="btn-outline" onClick={handleViewAllWork}>
                View All {activeFilter} Work →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════ BRAND LOGO MARQUEE ═══════════ */}
      <section style={{
        padding:      '52px 0',
        background:   'var(--bg)',
        borderTop:    '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        overflow:     'hidden',
      }}>
        <p style={{
          textAlign:      'center',
          fontSize:       '10.5px',
          letterSpacing:  '0.14em',
          textTransform:  'uppercase',
          color:          'var(--text-light)',
          fontFamily:     "'DM Sans', sans-serif",
          marginBottom:   '28px',
          fontWeight:     500,
        }}>
          Trusted by forward-thinking brands
        </p>

        {/* Marquee track — duplicate logos for seamless loop */}
        <div style={{ position: 'relative' }}>
          {/* Left fade */}
          <div style={{
            position:   'absolute', left: 0, top: 0, bottom: 0, width: '120px',
            background: 'linear-gradient(90deg, var(--bg) 0%, transparent 100%)',
            zIndex:     2, pointerEvents: 'none',
          }} />
          {/* Right fade */}
          <div style={{
            position:   'absolute', right: 0, top: 0, bottom: 0, width: '120px',
            background: 'linear-gradient(270deg, var(--bg) 0%, transparent 100%)',
            zIndex:     2, pointerEvents: 'none',
          }} />

          <div className="marquee-track">
            {/* First set */}
            {brandLogos.map((logo, i) => (
              <div key={`a-${i}`} className="marquee-logo">
                <img
                  src={logo}
                  alt={`Brand partner ${i + 1}`}
                  style={{
                    height:    'clamp(28px, 3.5vw, 44px)',
                    width:     'auto',
                    maxWidth:  '130px',
                    objectFit: 'contain',
                    filter:    'grayscale(100%) opacity(0.55)',
                    transition:'filter 0.3s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.filter = 'grayscale(0%) opacity(1)'; }}
                  onMouseLeave={e => { e.currentTarget.style.filter = 'grayscale(100%) opacity(0.55)'; }}
                  onError={e => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            ))}
            {/* Duplicate set for infinite loop */}
            {brandLogos.map((logo, i) => (
              <div key={`b-${i}`} className="marquee-logo" aria-hidden="true">
                <img
                  src={logo}
                  alt=""
                  style={{
                    height:    'clamp(28px, 3.5vw, 44px)',
                    width:     'auto',
                    maxWidth:  '130px',
                    objectFit: 'contain',
                    filter:    'grayscale(100%) opacity(0.55)',
                    transition:'filter 0.3s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.filter = 'grayscale(0%) opacity(1)'; }}
                  onMouseLeave={e => { e.currentTarget.style.filter = 'grayscale(100%) opacity(0.55)'; }}
                  onError={e => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ WHY TRIKA ═══════════ */}
      <section style={{ padding: 'clamp(56px, 8vw, 96px) 24px', background: 'var(--bg)' }}>
        <div style={{
          maxWidth:             '1100px',
          margin:               '0 auto',
          display:              'grid',
          gridTemplateColumns:  '1fr 1fr',
          gap:                  'clamp(36px, 6vw, 72px)',
          alignItems:           'center',
        }} className="why-grid">
          <div>
            <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '18px' }}>Why Trika Studio</span>
            <h2 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--text)', lineHeight: 1.1, marginBottom: '18px' }}>
              Intelligence meets{' '}
              <em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>Imagination</em>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '28px', maxWidth: '420px' }}>
              We don't just deliver deliverables — we build digital ecosystems. Every project at Trika Studio is powered by proprietary AI pipelines, elite creative talent, and a relentless obsession with results.
            </p>
            <button className="btn-primary" onClick={() => navigate('/about')}>Meet the Team →</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            {whyPoints.map(({ icon, title, desc }) => (
              <div
                key={title}
                style={{ padding: '22px 18px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '14px', transition: 'all 0.22s ease', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--orange)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(201,72,27,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <span style={{ fontSize: '1.4rem', display: 'block', marginBottom: '10px' }}>{icon}</span>
                <h4 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 600, fontSize: '1rem', color: 'var(--text)', marginBottom: '5px' }}>{title}</h4>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section style={{ padding: 'clamp(56px, 8vw, 96px) 24px', background: 'var(--bg-alt)', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '22px' }}>
            Let's Build Together
          </span>
          <h2 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.4rem)', color: 'var(--text)', lineHeight: 1.08, marginBottom: '18px' }}>
            Ready to Transform{' '}
            <em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>Your Brand?</em>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '32px' }}>
            No hard sells — just a genuine conversation about what's possible for your brand.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => navigate('/contact')}>Start the Conversation →</button>
            <button
              onClick={() => navigate('/about')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: '0.875rem', color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              Meet the team →
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════ STYLES ═══════════ */}
      <style>{`
        /* Portfolio hover reveals */
        .portfolio-item:hover .portfolio-overlay  { opacity: 1 !important; }
        .portfolio-item:hover .portfolio-label    { opacity: 1 !important; }

        /* Portfolio grid columns */
        .portfolio-grid { column-count: 4; }
        @media (max-width: 1024px) { .portfolio-grid { column-count: 3 !important; } }
        @media (max-width:  768px) { .portfolio-grid { column-count: 2 !important; } }
        @media (max-width:  380px) { .portfolio-grid { column-count: 1 !important; } }

        /* Why grid */
        @media (max-width: 768px) { .why-grid { grid-template-columns: 1fr !important; } }

        /* Service row */
        @media (max-width: 640px) { .service-row { grid-template-columns: 36px 1fr auto !important; } }

        /* ── Marquee ── */
        .marquee-track {
          display:         flex;
          align-items:     center;
          gap:             clamp(32px, 5vw, 64px);
          width:           max-content;
          animation:       marquee-scroll 32s linear infinite;
          will-change:     transform;
          padding:         0 clamp(16px, 3vw, 40px);
        }
        .marquee-track:hover { animation-play-state: paused; }

        .marquee-logo {
          display:         flex;
          align-items:     center;
          justify-content: center;
          flex-shrink:     0;
          padding:         6px 0;
        }

        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Pause on reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </div>
  );
}