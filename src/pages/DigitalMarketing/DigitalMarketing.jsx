import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* ─── Fade-in on scroll hook ─── */
function useFadeIn(threshold = 0.08) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ─── Single fade-in gallery image ─── */
function GalleryImage({ src, alt, index }) {
  const { ref, visible } = useFadeIn(0.05);

  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 8px 40px rgba(24,19,13,0.1)',
        transition: `opacity 0.7s ease ${index * 0.08}s, transform 0.7s ease ${index * 0.08}s`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        border: '1px solid var(--border)',
      }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          objectFit: 'contain',
        }}
      />
    </div>
  );
}

/* ─── PDF showcase section ─── */
function PDFShowcase({ title, tag, tagColor, tagBg, tagBorder, description, images, accent }) {
  const { ref: headerRef, visible: headerVisible } = useFadeIn(0.1);

  return (
    <section style={{ padding: 'clamp(60px, 8vw, 96px) 0', background: 'var(--bg)' }}>
      {/* Section header */}
      <div
        ref={headerRef}
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center',
          marginBottom: 'clamp(32px, 5vw, 56px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? 'translateY(0)' : 'translateY(24px)',
        }}
      >
        <span className="section-tag" style={{
          display: 'inline-flex', marginBottom: '16px',
          color: tagColor, background: tagBg, borderColor: tagBorder,
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: tagColor, display: 'inline-block', animation: 'pulse-dot 2s infinite' }} />
          {tag}
        </span>
        <h2 style={{
          fontFamily: "'Cormorant Garant', serif",
          fontWeight: 700,
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          color: 'var(--text)',
          marginBottom: '12px',
          lineHeight: 1.1,
        }}>
          {title}
        </h2>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '14px',
          color: 'var(--text-muted)',
          maxWidth: '500px',
          margin: '0 auto',
          lineHeight: 1.75,
        }}>
          {description}
        </p>

        {/* Accent divider */}
        <div style={{
          width: '60px', height: '3px',
          background: `linear-gradient(90deg, ${accent}, transparent)`,
          borderRadius: '99px',
          margin: '20px auto 0',
        }} />
      </div>

      {/* Full-width images — edge-to-edge on mobile, constrained on wide screens */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(16px, 3vw, 28px)',
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '0 clamp(12px, 3vw, 40px)',
      }}>
        {images.map((img, i) => (
          <GalleryImage key={i} src={img.src} alt={img.alt} index={i} />
        ))}
      </div>
    </section>
  );
}

/* ─── Data ─── */
const postDesigningImages = [
  { src: '/post-1.webp', alt: 'Post Designing – Food & Beverage Campaigns' },
  { src: '/post-2.webp', alt: 'Post Designing – Restaurant & Hospitality Brands' },
  { src: '/post-3.webp', alt: 'Post Designing – Travel & Tourism Campaigns' },
  { src: '/post-4.webp', alt: 'Post Designing – Fashion & Lifestyle Brands' },
  { src: '/post-5.webp', alt: 'Post Designing – Tech & SaaS Brand Content' },
];

const smmImages = [
  { src: '/smm-1.webp', alt: 'SMM Results – Analytics, Profiles & Campaign Overview' },
  { src: '/smm-2.webp', alt: 'SMM Results – Ad Campaign Results & Instagram Engagement' },
  { src: '/smm-3.webp', alt: 'SMM Results – Lead Generation Campaign Performance' },
  { src: '/smm-4.webp', alt: 'SMM Results – Website Purchase Conversions' },
  { src: '/smm-5.webp', alt: 'SMM Results – ROAS, Reach & Impression Data' },
];

/* ─── Page ─── */
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
          <h1 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.06, color: 'var(--text)', marginBottom: '16px' }}>
            Digital <em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>Marketing</em>
          </h1>
          <p style={{ fontFamily: "'Cormorant Garant', serif", fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', color: 'var(--text-muted)', fontWeight: 500, marginBottom: '16px' }}>
            Social Media Marketing & Management
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)', color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: '560px', margin: '0 auto 36px' }}>
            In today's attention economy, the brands that win are the ones that show up consistently, creatively, and strategically across every digital touchpoint.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => navigate('/contact')}>Get a Growth Audit →</button>
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
                display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 18px',
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: '10px', fontFamily: "'DM Sans', sans-serif",
                fontSize: '13px', fontWeight: 500, color: 'var(--text)',
                transition: 'all 0.2s ease', cursor: 'default', boxShadow: 'var(--shadow-sm)',
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

      {/* ═══════════════════════════════════════════════ */}
      {/* ── SECTION BREAK — campaign gallery intro ── */}
      {/* ═══════════════════════════════════════════════ */}
      <div style={{ background: 'var(--bg-alt)', padding: 'clamp(48px, 6vw, 72px) 24px', textAlign: 'center', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '16px' }}>Creative Work That Converts</span>
          <h2 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--text)', marginBottom: '12px', lineHeight: 1.1 }}>
            Our Portfolio &{' '}
            <em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>Proven Results</em>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.75 }}>
            Scroll through our post designs and real campaign performance data — work that looks great and delivers measurable growth for every client.
          </p>

          {/* Two anchor links */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '24px' }}>
            <a href="#post-designing"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '10px 20px', borderRadius: '8px',
                background: 'var(--orange)', color: '#fff',
                fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 500,
                textDecoration: 'none', transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--orange-light)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--orange)'}
            >
              🎨 Post Designs
            </a>
            <a href="#smm-results"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '10px 20px', borderRadius: '8px',
                background: 'transparent',
                border: '1.5px solid var(--border-dark)',
                color: 'var(--text)',
                fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 500,
                textDecoration: 'none', transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-alt)'; e.currentTarget.style.borderColor = 'var(--text)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'var(--border-dark)'; }}
            >
              📊 Campaign Results
            </a>
          </div>
        </div>
      </div>

      {/* ── POST DESIGNING SHOWCASE ── */}
      <div id="post-designing">
        <PDFShowcase
          title="Post Designing"
          tag="Creative Design"
          tagColor="#C9481B"
          tagBg="rgba(201,72,27,0.08)"
          tagBorder="rgba(201,72,27,0.25)"
          description="Social media post designs crafted for F&B, hospitality, travel, fashion, and tech brands — scroll to explore our creative portfolio."
          images={postDesigningImages}
          accent="#C9481B"
        />
      </div>

      {/* Divider between sections */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
      }}>
        <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '10px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--text-light)',
          fontWeight: 500,
          whiteSpace: 'nowrap',
        }}>
          Social Media Management
        </span>
        <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
      </div>

      {/* ── SMM RESULTS SHOWCASE ── */}
      <div id="smm-results">
        <PDFShowcase
          title="SMM Results & Analytics"
          tag="Proven Performance"
          tagColor="#10B981"
          tagBg="rgba(16,185,129,0.08)"
          tagBorder="rgba(16,185,129,0.25)"
          description="Real campaign data — analytics dashboards, engagement numbers, ad spend results, lead generation metrics, and ROAS figures from live client accounts."
          images={smmImages}
          accent="#10B981"
        />
      </div>

      {/* ── CTA ── */}
      <section style={{ background: 'var(--bg-alt)', padding: 'clamp(60px, 8vw, 96px) 24px', textAlign: 'center', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '20px' }}>Ready to Grow?</span>
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
        @media (max-width: 900px) {
          .dm-services-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .dm-why-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 540px) {
          .dm-services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}