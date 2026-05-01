import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* ─── Parse YT URL or bare ID ─── */
function parseVideoId(input) {
  if (!input) return '';
  if (/^[a-zA-Z0-9_-]{11}$/.test(input)) return input;
  try {
    const url = new URL(input);
    if (url.searchParams.get('v')) return url.searchParams.get('v');
    if (url.hostname === 'youtu.be') return url.pathname.slice(1).split('?')[0];
    const em = url.pathname.match(/\/embed\/([a-zA-Z0-9_-]{11})/);
    if (em) return em[1];
    const sh = url.pathname.match(/\/shorts\/([a-zA-Z0-9_-]{11})/);
    if (sh) return sh[1];
  } catch {}
  return input;
}

/* ─── Warm brand-matched gradient palette ─── */
const PALETTES = [
  { bg: 'linear-gradient(150deg, #F7F0E6 0%, #EDE0CC 100%)', dot: '#C9481B' },
  { bg: 'linear-gradient(150deg, #EDE8F2 0%, #DDD5E8 100%)', dot: '#8B5CF6' },
  { bg: 'linear-gradient(150deg, #E6EFF6 0%, #CCDDE8 100%)', dot: '#2563EB' },
  { bg: 'linear-gradient(150deg, #F2EBE6 0%, #E8D5C8 100%)', dot: '#C9481B' },
  { bg: 'linear-gradient(150deg, #E6F2EC 0%, #CCE8D8 100%)', dot: '#059669' },
  { bg: 'linear-gradient(150deg, #F6EEE6 0%, #ECD8C2 100%)', dot: '#C9481B' },
  { bg: 'linear-gradient(150deg, #EAE6F2 0%, #D8D0EC 100%)', dot: '#7C3AED' },
  { bg: 'linear-gradient(150deg, #E6EAF2 0%, #C8D4EC 100%)', dot: '#1D4ED8' },
  { bg: 'linear-gradient(150deg, #F2F0E6 0%, #E8E0C8 100%)', dot: '#B45309' },
  { bg: 'linear-gradient(150deg, #EEE6F2 0%, #E0CCE8 100%)', dot: '#9333EA' },
  { bg: 'linear-gradient(150deg, #E6F2EE 0%, #CCE4DC 100%)', dot: '#10B981' },
  { bg: 'linear-gradient(150deg, #F2EEE6 0%, #E8E0CC 100%)', dot: '#D97706' },
  { bg: 'linear-gradient(150deg, #F0E6F2 0%, #E4CCE8 100%)', dot: '#C026D3' },
  { bg: 'linear-gradient(150deg, #E6F0F2 0%, #CCE0E8 100%)', dot: '#0891B2' },
];

/* ─── Individual Shorts Card ─── */
function ShortsCard({ videoId, title, index, size = 'normal' }) {
  const id = parseVideoId(videoId);
  const [hovered, setHovered] = useState(false);
  const [thumbIdx, setThumbIdx] = useState(0);
  const [thumbFailed, setThumbFailed] = useState(false);

  const thumbSteps = [
    `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
    `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
    `https://img.youtube.com/vi/${id}/mqdefault.jpg`,
  ];

  const palette = PALETTES[index % PALETTES.length];
  const isLarge = size === 'large';

  // Always open on YouTube — 100% reliable, no embedding errors
  const openVideo = () => {
    window.open(`https://youtube.com/shorts/${id}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      onClick={openVideo}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: isLarge ? '18px' : '14px',
        overflow: 'hidden',
        cursor: 'pointer',
        background: '#fff',
        border: '1px solid #E8E2D8',
        boxShadow: hovered
          ? '0 24px 56px rgba(24,19,13,0.16), 0 4px 16px rgba(24,19,13,0.08)'
          : '0 2px 14px rgba(24,19,13,0.07)',
        transform: hovered ? `translateY(-6px) scale(1.018)` : 'translateY(0) scale(1)',
        transition: 'all 0.35s cubic-bezier(0.34,1.2,0.64,1)',
        animationFillMode: 'both',
      }}
    >
      {/* Thumbnail — portrait 9:16 */}
      <div style={{ position: 'relative', aspectRatio: '9/16', overflow: 'hidden', background: palette.bg }}>

        {!thumbFailed ? (
          <img
            key={thumbSteps[thumbIdx]}
            src={thumbSteps[thumbIdx]}
            alt={title}
            loading="lazy"
            onError={() => {
              if (thumbIdx < thumbSteps.length - 1) setThumbIdx(i => i + 1);
              else setThumbFailed(true);
            }}
            style={{
              width: '100%', height: '100%', objectFit: 'cover', display: 'block',
              transform: hovered ? 'scale(1.07)' : 'scale(1)',
              transition: 'transform 0.6s ease',
            }}
          />
        ) : (
          /* Beautiful gradient placeholder — intentional, not broken */
          <div style={{
            width: '100%', height: '100%',
            background: palette.bg,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: '14px',
            padding: '20px',
          }}>
            {/* Abstract AI visual */}
            <svg width={isLarge ? 56 : 44} height={isLarge ? 56 : 44} viewBox="0 0 56 56" fill="none">
              <circle cx="28" cy="28" r="26" fill={`${palette.dot}12`} stroke={`${palette.dot}25`} strokeWidth="1.5"/>
              <circle cx="28" cy="28" r="16" fill={`${palette.dot}10`} stroke={`${palette.dot}20`} strokeWidth="1"/>
              <path d="M22 18l16 10-16 10V18z" fill={`${palette.dot}70`}/>
            </svg>
            <p style={{
              fontFamily: "'Cormorant Garant', serif",
              fontSize: isLarge ? '13px' : '11px',
              fontWeight: 600, color: '#5A524A',
              textAlign: 'center', lineHeight: 1.4,
              maxWidth: '110px',
            }}>{title}</p>
          </div>
        )}

        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(24,19,13,0.78) 0%, rgba(24,19,13,0.1) 50%, transparent 75%)',
          opacity: thumbFailed ? 0 : (hovered ? 1 : 0.65),
          transition: 'opacity 0.35s ease',
        }} />

        {/* Shorts badge */}
        <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 2 }}>
          <span style={{
            background: '#FF0000', color: '#fff',
            fontSize: '8.5px', fontWeight: 800,
            fontFamily: "'DM Sans', sans-serif",
            padding: '3px 7px', borderRadius: '4px',
            letterSpacing: '0.07em',
            display: 'flex', alignItems: 'center', gap: '3px',
          }}>
            ▶ SHORTS
          </span>
        </div>

        {/* Open icon top-right */}
        <div style={{
          position: 'absolute', top: '10px', right: '10px', zIndex: 2,
          opacity: hovered ? 1 : 0, transition: 'opacity 0.25s ease',
        }}>
          <div style={{
            width: '26px', height: '26px', borderRadius: '6px',
            background: 'rgba(255,255,255,0.9)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#18130D" strokeWidth="2.5">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
          </div>
        </div>

        {/* Play button — center */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'none',
        }}>
          <div style={{
            width: isLarge ? '54px' : '44px',
            height: isLarge ? '54px' : '44px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.95)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 6px 24px rgba(0,0,0,0.22)',
            transform: hovered ? 'scale(1.18)' : 'scale(1)',
            transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1)',
          }}>
            <svg
              width={isLarge ? 20 : 16}
              height={isLarge ? 20 : 16}
              viewBox="0 0 24 24"
              fill="#C9481B"
            >
              <path d="M5 3l14 9-14 9z"/>
            </svg>
          </div>
        </div>

        {/* Title overlay — bottom */}
        {!thumbFailed && (
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2,
            padding: isLarge ? '14px 14px 12px' : '10px 10px 9px',
          }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: isLarge ? '12px' : '10px',
              fontWeight: 500, color: 'rgba(253,252,248,0.92)',
              lineHeight: 1.4,
              display: '-webkit-box', WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical', overflow: 'hidden',
            }}>{title}</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Data ─── */
const aiShorts = [
  { id: 'https://youtube.com/shorts/Rj4eYEHXfVU',  title: 'AI Brand Campaign – Cinematic Spot' },
  { id: 'https://youtube.com/shorts/Pu66KCNLZxs',  title: 'Product Reveal – AI Generated Creative' },
  { id: 'https://youtube.com/shorts/iSnPq_Nz3sg',  title: 'AI Fashion Campaign – Dynamic Visual' },
  { id: 'https://youtube.com/shorts/vmHVnuD3aH0',  title: 'AI Motion Graphics – Brand Story' },
  { id: 'https://youtube.com/shorts/aXY_ykf-dWE',  title: 'Generative AI Ad – E-Commerce Brand' },
  { id: 'https://youtube.com/shorts/BN1ux2azoqQ',  title: 'AI Visual Campaign – Luxury Product' },
  { id: 'https://youtube.com/shorts/UQWm2vvMsFg',  title: 'AI Advertising Reel – Tech Brand' },
  { id: 'https://youtube.com/shorts/lmqTiLIuloA',  title: 'AI Brand Film – FinTech Campaign' },
  { id: 'https://youtube.com/shorts/oiaAg64l5tY',  title: 'Generative Video – Food & Beverage' },
  { id: 'https://youtube.com/shorts/6zH9tSeLV5c',  title: 'AI Real Estate Campaign' },
  { id: 'https://youtube.com/shorts/UBPl3dIIBPk',  title: 'AI Sports & Energy Brand Ad' },
  { id: 'https://youtube.com/shorts/wAIDI4kx3XE',  title: 'AI Travel & Hospitality Campaign' },
  { id: 'https://youtube.com/shorts/AAFjH-Eg0rM',  title: 'Hyper-Realistic AI Product Spot' },
  { id: 'https://youtube.com/shorts/vmHVnuD3aH0',  title: 'AI Motion – Brand Identity Spot' },
];

const capabilities = [
  { icon: '🎬', label: 'Text-to-Video' },
  { icon: '🤖', label: 'AI Avatars' },
  { icon: '✨', label: 'AI Upscaling' },
  { icon: '🎨', label: 'Style Transfer' },
  { icon: '🗣️', label: 'Voice Cloning' },
  { icon: '🌐', label: 'Multilingual' },
];

/* ─── Full collage section ─── */
function ShortsCollage({ shorts }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

      {/* ── BLOCK 1: 2 large + info panel + 2 large ── */}
      <div className="collage-block-1">

        {/* 2 large left */}
        <div className="collage-2-left">
          <ShortsCard {...shorts[0]} index={0} size="large" />
          <ShortsCard {...shorts[1]} index={1} size="large" />
        </div>

        {/* Centre info panel */}
        <div className="collage-info" style={{
          background: '#18130D',
          borderRadius: '18px',
          padding: '32px 28px',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'space-between',
          border: '1px solid rgba(201,72,27,0.18)',
          boxShadow: '0 8px 32px rgba(24,19,13,0.15)',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#C9481B', display: 'inline-block', animation: 'pulse-dot 2s infinite' }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C9481B' }}>
                AI Production
              </span>
            </div>
            <h3 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(1.4rem, 2.2vw, 2rem)', color: '#FDFCF8', lineHeight: 1.18, marginBottom: '14px' }}>
              Campaigns built at the speed of{' '}
              <em style={{ color: '#E06035', fontStyle: 'italic' }}>imagination</em>
            </h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'rgba(253,252,248,0.42)', lineHeight: 1.75 }}>
              From a single text prompt to a cinematic AI short — our pipeline delivers in 48 hours what studios take months to produce.
            </p>
          </div>

          {/* Mini stats */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '28px' }}>
            {[['14+','AI Campaigns'], ['40+','Brands'], ['5×','Avg ROAS'], ['48hr','Turnaround']].map(([v, l]) => (
              <div key={l} style={{
                background: 'rgba(253,252,248,0.05)', border: '1px solid rgba(253,252,248,0.07)',
                borderRadius: '12px', padding: '14px 16px',
              }}>
                <div style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: '1.6rem', color: '#C9481B', lineHeight: 1 }}>{v}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10.5px', color: 'rgba(253,252,248,0.3)', marginTop: '4px', letterSpacing: '0.04em' }}>{l}</div>
              </div>
            ))}
          </div>

          <button
            onClick={() => {}}
            className="btn-primary"
            style={{ marginTop: '24px', fontSize: '13px', padding: '11px 20px', width: '100%' }}
          >
            Start Your Campaign →
          </button>
        </div>

        {/* 2 large right */}
        <div className="collage-2-right">
          <ShortsCard {...shorts[2]} index={2} size="large" />
          <ShortsCard {...shorts[3]} index={3} size="large" />
        </div>
      </div>

      {/* ── Divider ── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-light)', whiteSpace: 'nowrap' }}>
          More AI Campaigns
        </span>
        <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
      </div>

      {/* ── BLOCK 2: 5 cards ── */}
      <div className="collage-5">
        {shorts.slice(4, 9).map((s, i) => (
          <ShortsCard key={s.id + i} {...s} index={i + 4} size="normal" />
        ))}
      </div>

      {/* ── BLOCK 3: 5 cards ── */}
      <div className="collage-5">
        {shorts.slice(9, 14).map((s, i) => (
          <ShortsCard key={s.id + i} {...s} index={i + 9} size="normal" />
        ))}
      </div>
    </div>
  );
}

/* ─── Main Page ─── */
export default function AIAdvertising() {
  const navigate = useNavigate();

  return (
    <div style={{ background: 'var(--bg)' }}>

      {/* ── HERO ── */}
      <section className="page-hero">
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <span className="section-tag" style={{ marginBottom: '18px', display: 'inline-flex' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C9481B', display: 'inline-block' }} className="animate-pulse" />
            AI-Powered Creative
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(2.2rem, 5.5vw, 4rem)', lineHeight: 1.06, color: 'var(--text)', marginBottom: '18px' }}>
            AI <em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>Advertising</em>
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(0.88rem, 1.8vw, 1rem)', color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: '540px', margin: '0 auto 28px' }}>
            We harness the power of generative AI to create advertising content that was previously impossible — at the speed of thought and the scale of machines.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
            {capabilities.map(({ icon, label }) => (
              <div key={label} style={{
                display: 'flex', alignItems: 'center', gap: '7px',
                padding: '7px 14px', background: 'var(--bg-card)',
                border: '1px solid var(--border)', borderRadius: '99px',
                fontFamily: "'DM Sans', sans-serif", fontSize: '12.5px', fontWeight: 500,
                color: 'var(--text)', boxShadow: 'var(--shadow-sm)',
              }}>
                <span>{icon}</span><span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COLLAGE SECTION ── */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(48px, 7vw, 80px) 24px' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', marginBottom: '32px' }}>
            <div>
              <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '12px' }}>AI Video Portfolio</span>
              <h2 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--text)', lineHeight: 1.1 }}>
                Generative AI Video Production
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13.5px', color: 'var(--text-muted)', marginTop: '6px' }}>
                14 AI shorts — click any to watch on YouTube
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '8px 14px', background: 'rgba(201,72,27,0.06)', border: '1px solid rgba(201,72,27,0.18)', borderRadius: '99px' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#C9481B', animation: 'pulse-dot 2s infinite' }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 500, color: '#C9481B' }}>14 AI Shorts</span>
              </div>
              <button className="btn-outline" style={{ flexShrink: 0 }} onClick={() => navigate('/contact')}>
                Start a Project →
              </button>
            </div>
          </div>

          <ShortsCollage shorts={aiShorts} />

          {/* Callout */}
          <div style={{ marginTop: '40px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderLeft: '4px solid var(--orange)', borderRadius: '14px', padding: '24px 28px' }}>
            <h3 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 600, fontSize: '1.3rem', color: 'var(--text)', marginBottom: '8px' }}>
              What is AI Video Creation?
            </h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              AI video creation uses generative models — text-to-video, image-to-video, and NeRF-based rendering — to produce cinematic advertising content from simple text prompts. At Trika Studio, we fine-tune these models on your brand guidelines so every frame is on-brand, on-budget, and ahead of schedule.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'var(--bg-alt)', padding: 'clamp(56px, 8vw, 90px) 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '18px' }}>Let's Create</span>
          <h2 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', color: 'var(--text)', lineHeight: 1.1, marginBottom: '14px' }}>
            Ready to create your{' '}
            <em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>own AI campaign?</em>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: 'var(--text-muted)', marginBottom: '28px', lineHeight: 1.7 }}>
            Join 40+ brands already using Trika Studio's AI production pipeline.
          </p>
          <button className="btn-primary" style={{ padding: '13px 32px', fontSize: '15px' }} onClick={() => navigate('/contact')}>
            Start Your Project →
          </button>
        </div>
      </section>

      {/* ─── Responsive styles ─── */}
      <style>{`
        /* Block 1: 2-col-left | info | 2-col-right */
        .collage-block-1 {
          display: grid;
          grid-template-columns: 1fr 1.1fr 1fr;
          gap: 16px;
          align-items: stretch;
        }
        .collage-2-left,
        .collage-2-right {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .collage-info {
          /* fills row height automatically */
        }

        /* Block 2 & 3: 5 equal columns */
        .collage-5 {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
        }

        /* ── Tablet 1024px ── */
        @media (max-width: 1024px) {
          .collage-block-1 {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: auto auto;
          }
          .collage-2-left  { grid-column: 1; }
          .collage-info    { grid-column: 1 / -1; order: -1; min-height: 220px; }
          .collage-2-right { grid-column: 2; }
          .collage-5 { grid-template-columns: repeat(4, 1fr) !important; }
        }

        /* ── Small tablet 768px ── */
        @media (max-width: 768px) {
          .collage-block-1 {
            grid-template-columns: 1fr 1fr !important;
          }
          .collage-2-left,
          .collage-2-right { grid-template-columns: 1fr 1fr; }
          .collage-info { grid-column: 1 / -1; }
          .collage-5 { grid-template-columns: repeat(3, 1fr) !important; }
        }

        /* ── Mobile 540px ── */
        @media (max-width: 540px) {
          .collage-block-1 {
            grid-template-columns: 1fr 1fr !important;
          }
          .collage-2-left,
          .collage-2-right { grid-template-columns: 1fr; }
          .collage-2-right { display: none; }
          .collage-5 { grid-template-columns: repeat(2, 1fr) !important; }
        }

        /* ── Mobile small 380px ── */
        @media (max-width: 380px) {
          .collage-block-1 { grid-template-columns: 1fr !important; }
          .collage-2-left { grid-template-columns: 1fr 1fr; }
          .collage-5 { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}