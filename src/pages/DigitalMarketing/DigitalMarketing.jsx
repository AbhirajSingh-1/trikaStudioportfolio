import { useNavigate } from 'react-router-dom';

const marketingServices = [
  { icon: '📱', title: 'Social Media Marketing', description: 'Strategic content creation, community management, and paid social campaigns across Instagram, LinkedIn, YouTube, and Meta platforms.', color: '#3B82F6' },
  { icon: '📈', title: 'Performance Marketing', description: 'ROI-first paid media campaigns with AI-optimized bidding, audience targeting, and real-time budget allocation.', color: '#8B5CF6' },
  { icon: '🎯', title: 'Content Strategy', description: 'Data-informed content calendars, brand storytelling, and multi-format content that drives organic growth and engagement.', color: '#F59E0B' },
  { icon: '🔍', title: 'SEO & Growth Hacking', description: 'Technical SEO, keyword strategy, and viral growth loops engineered to rank your brand at the top and keep it there.', color: '#10B981' },
  { icon: '✉️', title: 'Email & CRM Marketing', description: 'Personalized email journeys, automated drip sequences, and lifecycle marketing that turns leads into loyal customers.', color: '#EC4899' },
  { icon: '🤝', title: 'Influencer & Creator Marketing', description: 'Curated influencer partnerships and creator collaborations that amplify reach and build authentic brand credibility.', color: '#C9481B' },
];

const platforms = [
  { name: 'Instagram', icon: '📸' },
  { name: 'YouTube', icon: '▶️' },
  { name: 'LinkedIn', icon: '💼' },
  { name: 'Meta Ads', icon: '🎯' },
  { name: 'Google Ads', icon: '🔍' },
  { name: 'TikTok', icon: '🎵' },
  { name: 'X / Twitter', icon: '🐦' },
  { name: 'Pinterest', icon: '📌' },
];

const dmGallery = [
  { src: 'https://picsum.photos/seed/dm-social-01/700/700', label: 'Social Media Campaign', cat: 'Social' },
  { src: 'https://picsum.photos/seed/dm-insta-02/600/800', label: 'Instagram Reels Content', cat: 'Content' },
  { src: 'https://picsum.photos/seed/dm-brand-03/800/600', label: 'Brand Awareness Campaign', cat: 'Branding' },
  { src: 'https://picsum.photos/seed/dm-email-04/700/500', label: 'Email Campaign Creative', cat: 'Email' },
  { src: 'https://picsum.photos/seed/dm-ads-05/600/700', label: 'Paid Social Ads', cat: 'Paid Ads' },
  { src: 'https://picsum.photos/seed/dm-event-06/800/600', label: 'Event Marketing', cat: 'Events' },
  { src: 'https://picsum.photos/seed/dm-content-07/700/700', label: 'Content Marketing', cat: 'Content' },
  { src: 'https://picsum.photos/seed/dm-growth-08/600/600', label: 'Growth Campaign', cat: 'Growth' },
  { src: 'https://picsum.photos/seed/dm-perf-09/800/500', label: 'Performance Creative', cat: 'Paid Ads' },
];

const catColors = {
  Social:    { bg: '#EBF2FF', text: '#1D4ED8' },
  Content:   { bg: '#ECFDF5', text: '#059669' },
  Branding:  { bg: '#FDF0EB', text: '#C9481B' },
  Email:     { bg: '#F5F3FF', text: '#7C3AED' },
  'Paid Ads':{ bg: '#FFF7ED', text: '#C2410C' },
  Events:    { bg: '#FDF4FF', text: '#A21CAF' },
  Growth:    { bg: '#ECFDF5', text: '#059669' },
};

const points = [
  'Build a community of loyal brand advocates who market for you',
  'Drive organic traffic that converts at 3× higher rates than cold paid traffic',
  'Establish thought leadership that attracts premium clients and partnerships',
  'Create recurring touchpoints that keep your brand top-of-mind 24/7',
  'Generate first-party audience data for precision retargeting campaigns',
  'Leverage algorithm-friendly content formats for zero-cost viral reach',
  'Build social proof that reduces purchase hesitation and increases trust',
  'Create a defensible brand moat that competitors simply cannot buy',
];

export default function DigitalMarketing() {
  const navigate = useNavigate();

  return (
    <div style={{ background: 'var(--bg)' }}>

      {/* ── HERO ── */}
      <section className="page-hero">
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '760px', margin: '0 auto' }}>
          <span className="section-tag" style={{ marginBottom: '20px', display: 'inline-flex', color: '#B45309', background: 'rgba(245,158,11,0.1)', borderColor: 'rgba(245,158,11,0.28)' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#F59E0B', display: 'inline-block' }} className="animate-pulse" />
            Growth Marketing
          </span>
          <h1 style={{
            fontFamily: "'Cormorant Garant', serif",
            fontWeight: 700,
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            lineHeight: 1.06, color: 'var(--text)',
            marginBottom: '16px',
          }}>
            Digital <em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>Marketing</em>
          </h1>
          <p style={{
            fontFamily: "'Cormorant Garant', serif",
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            color: 'var(--text-muted)', fontWeight: 500, marginBottom: '16px',
          }}>
            Social Media Marketing & Management
          </p>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)',
            color: 'var(--text-muted)', lineHeight: 1.75,
            maxWidth: '560px', margin: '0 auto 36px',
          }}>
            In today's attention economy, the brands that win are the ones that show up consistently, creatively, and strategically across every digital touchpoint.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => navigate('/contact')}>Get a Growth Audit →</button>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(60px, 8vw, 96px) 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '14px' }}>What We Do</span>
            <h2 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--text)' }}>
              Full-Funnel Marketing Services
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="dm-services-grid">
            {marketingServices.map(({ icon, title, description, color }) => (
              <div key={title} className="card"
                style={{ padding: '28px 24px', cursor: 'default' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = color;
                  e.currentTarget.style.boxShadow = `0 8px 28px ${color}18`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '48px', height: '48px', borderRadius: '14px',
                  background: `${color}12`, border: `1px solid ${color}22`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem', marginBottom: '16px',
                }}>
                  {icon}
                </div>
                <h4 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 600, fontSize: '1.15rem', color: 'var(--text)', marginBottom: '8px' }}>
                  {title}
                </h4>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.75 }}>
                  {description}
                </p>
                <div style={{ marginTop: '16px', height: '2px', width: '36px', background: color, borderRadius: '99px' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SOCIAL MEDIA ── */}
      <section style={{ background: 'var(--bg-alt)', padding: 'clamp(60px, 8vw, 96px) 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }} className="dm-why-grid">
          <div>
            <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '20px', color: '#B45309', background: 'rgba(245,158,11,0.1)', borderColor: 'rgba(245,158,11,0.28)' }}>Why It Matters</span>
            <h2 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--text)', lineHeight: 1.1, marginBottom: '16px' }}>
              The Power of Strategic Social Media{' '}
              <em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>Growth</em>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              Social media isn't just a channel — it's your brand's living, breathing presence. Done right, it compounds into one of the most powerful business assets you'll ever build.
            </p>
            <button className="btn-primary" style={{ marginTop: '28px' }} onClick={() => navigate('/contact')}>
              Let's Grow Together →
            </button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {points.map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: '12px',
                padding: '14px 16px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9481B'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(201,72,27,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{
                  width: '20px', height: '20px', borderRadius: '6px',
                  background: 'rgba(201,72,27,0.1)', border: '1px solid rgba(201,72,27,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px',
                }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#C9481B" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'var(--text)', lineHeight: 1.6 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORMS ── */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(40px, 6vw, 64px) 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '24px', fontWeight: 500 }}>
            Platforms We Master
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
            {platforms.map(({ name, icon }) => (
              <div key={name} style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '10px 18px',
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: '10px', fontFamily: "'DM Sans', sans-serif",
                fontSize: '13px', fontWeight: 500, color: 'var(--text)',
                transition: 'all 0.2s ease', cursor: 'default',
                boxShadow: 'var(--shadow-sm)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9481B'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <span>{icon}</span> {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAMPAIGN GALLERY ── */}
      <section style={{ background: 'var(--bg-alt)', padding: 'clamp(60px, 8vw, 96px) 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '14px', color: '#B45309', background: 'rgba(245,158,11,0.1)', borderColor: 'rgba(245,158,11,0.28)' }}>Campaign Gallery</span>
            <h2 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--text)' }}>
              Creative Work That Converts
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: 'var(--text-muted)', marginTop: '8px' }}>
              A selection of our digital marketing campaign creatives
            </p>
          </div>

          <div className="dm-gallery-desktop" style={{ columns: 3, columnGap: '14px' }}>
            {dmGallery.map((img, i) => (
              <div key={i} className="portfolio-item" style={{
                position: 'relative', borderRadius: '12px', overflow: 'hidden',
                marginBottom: '14px', breakInside: 'avoid', cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)', transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
              >
                <img src={img.src} alt={img.label} loading="lazy" style={{ width: '100%', display: 'block', objectFit: 'cover', aspectRatio: i % 3 === 0 ? '1/1' : i % 3 === 1 ? '3/4' : '4/3' }} />
                <div className="portfolio-overlay" />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px', opacity: 0, transition: 'opacity 0.3s ease', zIndex: 2 }} className="portfolio-label">
                  <span style={{ display: 'inline-block', fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 500, padding: '3px 10px', borderRadius: '99px', background: catColors[img.cat]?.bg || '#fff', color: catColors[img.cat]?.text || '#333', marginBottom: '6px' }}>{img.cat}</span>
                  <div style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 600, fontSize: '0.95rem', color: '#fff' }}>{img.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="dm-gallery-mobile">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {dmGallery.map((img, i) => (
                <div key={i} className="portfolio-item" style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden', cursor: 'pointer', boxShadow: 'var(--shadow-sm)', gridColumn: i === 0 ? '1 / -1' : 'auto' }}>
                  <img src={img.src} alt={img.label} loading="lazy" style={{ width: '100%', display: 'block', objectFit: 'cover', aspectRatio: i === 0 ? '16/9' : i % 2 === 0 ? '3/4' : '1/1' }} />
                  <div className="portfolio-overlay" />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '10px', opacity: 0, transition: 'opacity 0.3s ease', zIndex: 2 }} className="portfolio-label">
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 500, color: '#fff' }}>{img.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA — cream background matching Visualization page ── */}
      <section style={{ background: 'var(--bg-alt)', padding: 'clamp(60px, 8vw, 96px) 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '20px' }}>
            Ready to Grow?
          </span>
          <h2 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: 'var(--text)', lineHeight: 1.08, marginBottom: '16px' }}>
            Ready to{' '}
            <em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>Dominate</em>
            {' '}Your Market?
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '15px', color: 'var(--text-muted)', marginBottom: '32px', lineHeight: 1.75 }}>
            Let's build a digital marketing engine that makes your competitors take notice and your customers take action.
          </p>
          <button className="btn-primary" style={{ padding: '14px 36px', fontSize: '15px' }} onClick={() => navigate('/contact')}>
            Let's Grow Together →
          </button>
        </div>
      </section>

      <style>{`
        .portfolio-item:hover .portfolio-label { opacity: 1 !important; }
        .portfolio-item:hover .portfolio-overlay { opacity: 1; }
        .dm-gallery-desktop { display: block; }
        .dm-gallery-mobile  { display: none; }
        @media (max-width: 900px) {
          .dm-services-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .dm-why-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 768px) {
          .dm-gallery-desktop { display: none !important; }
          .dm-gallery-mobile  { display: block !important; }
        }
        @media (max-width: 540px) {
          .dm-services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}