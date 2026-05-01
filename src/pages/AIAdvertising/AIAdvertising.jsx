import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';

/* ─── Parse any YT URL or bare ID → 11-char video ID ─── */
function parseVideoId(input) {
  if (!input) return '';
  if (/^[a-zA-Z0-9_-]{11}$/.test(input)) return input;
  try {
    const url = new URL(input);
    if (url.searchParams.get('v')) return url.searchParams.get('v');
    if (url.hostname === 'youtu.be') return url.pathname.slice(1).split('?')[0];
    const embedMatch = url.pathname.match(/\/embed\/([a-zA-Z0-9_-]{11})/);
    if (embedMatch) return embedMatch[1];
    const shortsMatch = url.pathname.match(/\/shorts\/([a-zA-Z0-9_-]{11})/);
    if (shortsMatch) return shortsMatch[1];
  } catch { /* not a URL */ }
  return input;
}

/* ─── Full-screen video modal ─── */
function VideoModal({ videoId, title, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const id = parseVideoId(videoId);

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 99999,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '16px',
        background: 'rgba(24,19,13,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '420px',          /* portrait-friendly */
          borderRadius: '20px',
          overflow: 'hidden',
          background: '#18130D',
          boxShadow: '0 40px 100px rgba(0,0,0,0.6)',
          animation: 'modal-pop 0.25s cubic-bezier(0.34,1.56,0.64,1) forwards',
        }}
      >
        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '12px 16px',
          background: 'rgba(253,252,248,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '13px', fontWeight: 500, color: 'rgba(253,252,248,0.85)',
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            maxWidth: 'calc(100% - 40px)',
          }}>
            {title}
          </p>
          <button
            onClick={onClose}
            style={{
              width: '28px', height: '28px', borderRadius: '8px',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.15)',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(253,252,248,0.8)" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Video — 9:16 */}
        <div style={{ aspectRatio: '9/16', width: '100%', background: '#000' }}>
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
          />
        </div>
      </div>

      <style>{`
        @keyframes modal-pop {
          from { opacity: 0; transform: scale(0.93) translateY(12px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>,
    document.body
  );
}

/* ─── Single Shorts card ─── */
function ShortsCard({ videoId, title, index }) {
  const [modalOpen, setModalOpen] = useState(false);
  const id = parseVideoId(videoId);
  const [thumbSrc, setThumbSrc] = useState(`https://img.youtube.com/vi/${id}/maxresdefault.jpg`);

  const accentColor = '#C9481B';

  return (
    <>
      <div
        onClick={() => setModalOpen(true)}
        className="shorts-card"
        style={{
          position: 'relative',
          borderRadius: '14px',
          overflow: 'hidden',
          cursor: 'pointer',
          background: '#18130D',
          boxShadow: '0 4px 20px rgba(24,19,13,0.14)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          animation: `shorts-appear 0.45s ease both`,
          animationDelay: `${index * 0.045}s`,
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
          e.currentTarget.style.boxShadow = '0 20px 48px rgba(24,19,13,0.22)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(24,19,13,0.14)';
        }}
      >
        {/* Thumbnail — 9:16 */}
        <div style={{ position: 'relative', aspectRatio: '9/16', overflow: 'hidden' }}>
          <img
            src={thumbSrc}
            alt={title}
            loading="lazy"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 0.5s ease',
            }}
            className="shorts-thumb"
            onError={() => {
              if (thumbSrc.includes('maxresdefault')) {
                setThumbSrc(`https://img.youtube.com/vi/${id}/hqdefault.jpg`);
              } else {
                setThumbSrc(`https://img.youtube.com/vi/${id}/mqdefault.jpg`);
              }
            }}
          />

          {/* Dark gradient overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(24,19,13,0.75) 0%, rgba(24,19,13,0.1) 45%, transparent 70%)',
          }} />

          {/* Shorts badge */}
          <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
            <span style={{
              background: '#FF0000',
              color: '#fff',
              fontSize: '9px', fontWeight: 700,
              fontFamily: "'DM Sans', sans-serif",
              padding: '3px 7px', borderRadius: '4px',
              letterSpacing: '0.06em',
              display: 'flex', alignItems: 'center', gap: '4px',
            }}>
              ▶ SHORTS
            </span>
          </div>

          {/* Play button */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div
              className="shorts-play-btn"
              style={{
                width: '44px', height: '44px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.92)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.35)',
                transition: 'transform 0.28s ease, box-shadow 0.28s ease',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill={accentColor}>
                <path d="M5 3l14 9-14 9z" />
              </svg>
            </div>
          </div>

          {/* Title bottom */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            padding: '12px 11px 11px',
          }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px', fontWeight: 500,
              color: 'rgba(253,252,248,0.9)',
              lineHeight: 1.4,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}>
              {title}
            </p>
          </div>
        </div>
      </div>

      {modalOpen && (
        <VideoModal videoId={id} title={title} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}

/* ─── Data ─── */
const aiShorts = [
  { id: 'https://youtube.com/shorts/Rj4eYEHXfVU', title: 'AI Brand Campaign – Cinematic Spot' },
  { id: 'https://youtube.com/shorts/Pu66KCNLZxs', title: 'Product Reveal – AI Generated Creative' },
  { id: 'https://youtube.com/shorts/iSnPq_Nz3sg', title: 'AI Fashion Campaign – Dynamic Visual' },
  { id: 'https://youtube.com/shorts/vmHVnuD3aH0', title: 'AI Motion Graphics – Brand Story' },
  { id: 'https://youtube.com/shorts/aXY_ykf-dWE', title: 'Generative AI Ad – E-Commerce Brand' },
  { id: 'https://youtube.com/shorts/BN1ux2azoqQ', title: 'AI Visual Campaign – Luxury Product' },
  { id: 'https://youtube.com/shorts/UQWm2vvMsFg', title: 'AI Advertising Reel – Tech Brand' },
  { id: 'https://youtube.com/shorts/lmqTiLIuloA', title: 'AI Brand Film – FinTech Campaign' },
  { id: 'https://youtube.com/shorts/oiaAg64l5tY', title: 'Generative Video – Food & Beverage' },
  { id: 'https://youtube.com/shorts/vmHVnuD3aH0', title: 'AI Motion – Brand Identity Spot' },
  { id: 'https://youtube.com/shorts/6zH9tSeLV5c', title: 'AI Real Estate Campaign' },
  { id: 'https://youtube.com/shorts/UBPl3dIIBPk', title: 'AI Sports & Energy Brand Ad' },
  { id: 'https://youtube.com/shorts/wAIDI4kx3XE', title: 'AI Travel & Hospitality Campaign' },
  { id: 'https://youtube.com/shorts/AAFjH-Eg0rM', title: 'Hyper-Realistic AI Product Spot' },
];

const capabilities = [
  { icon: '🎬', label: 'Text-to-Video' },
  { icon: '🤖', label: 'AI Avatars' },
  { icon: '✨', label: 'AI Upscaling' },
  { icon: '🎨', label: 'Style Transfer' },
  { icon: '🗣️', label: 'Voice Cloning' },
  { icon: '🌐', label: 'Multilingual' },
];

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
                padding: '7px 14px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '99px',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '12.5px', fontWeight: 500, color: 'var(--text)',
                boxShadow: 'var(--shadow-sm)',
              }}>
                <span>{icon}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI VIDEOS SECTION ── */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(56px, 8vw, 90px) 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', marginBottom: '40px' }}>
            <div>
              <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '12px' }}>AI Videos</span>
              <h2 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--text)', lineHeight: 1.1 }}>
                Generative AI Video Production
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13.5px', color: 'var(--text-muted)', marginTop: '6px', maxWidth: '460px' }}>
                From concept to final cut — fully AI-driven campaigns crafted for brands of every scale.
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '8px 14px', background: 'rgba(201,72,27,0.08)', border: '1px solid rgba(201,72,27,0.2)', borderRadius: '99px' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#C9481B', animation: 'pulse-dot 2s infinite' }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 500, color: '#C9481B' }}>14 AI Shorts</span>
              </div>
              <button className="btn-outline" style={{ flexShrink: 0 }} onClick={() => navigate('/contact')}>Start a Project →</button>
            </div>
          </div>

          {/* ── Featured Hero Short (first video, large) ── */}
          <div style={{ marginBottom: '20px' }} className="shorts-hero-row">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr 1fr',
              gap: '14px',
              alignItems: 'stretch',
            }} className="shorts-hero-grid">
              {/* Left feature */}
              <ShortsCard {...aiShorts[0]} index={0} />
              {/* Center featured — 16:9 landscape style for visual rhythm */}
              <div style={{
                borderRadius: '18px', overflow: 'hidden',
                background: 'linear-gradient(135deg, #18130D, #2A1F14)',
                display: 'flex', flexDirection: 'column',
                boxShadow: '0 8px 40px rgba(24,19,13,0.18)',
                border: '1px solid rgba(201,72,27,0.15)',
              }}>
                <div style={{ padding: '24px 24px 0', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#C9481B', animation: 'pulse-dot 2s infinite' }} />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9481B' }}>
                      Trika Studio · AI Production
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', color: '#FDFCF8', lineHeight: 1.15 }}>
                    Hyper-realistic AI campaigns crafted at the speed of imagination
                  </h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'rgba(253,252,248,0.5)', lineHeight: 1.7, maxWidth: '320px' }}>
                    From text prompts to cinematic quality — our AI pipeline delivers what studios take months to produce, in days.
                  </p>
                  <button
                    className="btn-primary"
                    style={{ width: 'fit-content', padding: '10px 20px', fontSize: '13px', marginTop: '4px' }}
                    onClick={() => navigate('/contact')}
                  >
                    Start Your Campaign →
                  </button>
                </div>
                {/* Two shorts side-by-side at bottom */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', padding: '16px' }}>
                  <ShortsCard {...aiShorts[1]} index={1} />
                  <ShortsCard {...aiShorts[2]} index={2} />
                </div>
              </div>
              {/* Right feature */}
              <ShortsCard {...aiShorts[3]} index={3} />
            </div>
          </div>

          {/* ── Main Shorts Grid — remaining 10 ── */}
          <div className="shorts-main-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '14px',
          }}>
            {aiShorts.slice(4).map((short, i) => (
              <ShortsCard key={short.id + i} {...short} index={i + 4} />
            ))}
          </div>

          {/* Info callout */}
          <div style={{ marginTop: '36px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderLeft: '4px solid var(--orange)', borderRadius: '14px', padding: '24px 28px' }}>
            <h3 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 600, fontSize: '1.3rem', color: 'var(--text)', marginBottom: '8px' }}>
              What is AI Video Creation?
            </h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              AI video creation uses generative models — including text-to-video, image-to-video, and NeRF-based rendering — to produce cinematic advertising content from simple text prompts. At Trika Studio, we fine-tune these models on your brand guidelines to ensure every frame is on-brand, on-budget, and ahead of schedule.
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

      <style>{`
        @keyframes shorts-appear {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .shorts-card:hover .shorts-thumb { transform: scale(1.06); }
        .shorts-card:hover .shorts-play-btn { transform: scale(1.18); box-shadow: 0 8px 28px rgba(0,0,0,0.4); }

        /* Responsive shorts hero grid */
        @media (max-width: 1024px) {
          .shorts-hero-grid { grid-template-columns: 1fr 1.6fr 1fr !important; }
          .shorts-main-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .shorts-hero-grid { grid-template-columns: 1fr 1fr !important; }
          .shorts-hero-grid > div:nth-child(2) { grid-column: 1 / -1 !important; order: -1; }
          .shorts-main-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .shorts-hero-grid { grid-template-columns: 1fr 1fr !important; }
          .shorts-hero-grid > div:nth-child(2) { display: none !important; }
          .shorts-main-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 360px) {
          .shorts-main-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}