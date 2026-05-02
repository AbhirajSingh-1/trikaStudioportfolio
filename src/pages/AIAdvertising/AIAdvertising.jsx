import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';

/* ─────────────────────────────────────────────
   Inline portrait modal for YouTube Shorts
───────────────────────────────────────────── */
function ShortsModal({ videoId, title, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const ytUrl = `https://www.youtube.com/shorts/${videoId}`;

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 99999,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '16px',
        background: 'rgba(24,19,13,0.88)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: 'min(380px, calc((100vh - 100px) * 9 / 16))',
          maxHeight: 'calc(100vh - 32px)',
          borderRadius: '20px',
          overflow: 'hidden',
          background: '#FDFCF8',
          boxShadow: '0 40px 100px rgba(24,19,13,0.55)',
          animation: 'shorts-pop 0.25s cubic-bezier(0.34,1.56,0.64,1) forwards',
        }}
      >
        {/* Top bar */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '11px 14px', borderBottom: '1px solid #E8E2D8', gap: '8px',
        }}>
          <span style={{
            background: '#FF0000', color: '#fff',
            fontSize: '9px', fontWeight: 800,
            fontFamily: "'DM Sans', sans-serif",
            padding: '3px 8px', borderRadius: '4px',
            letterSpacing: '0.07em', flexShrink: 0,
          }}>▶ SHORTS</span>

          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
            fontSize: '12.5px', color: '#18130D',
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            flex: 1,
          }}>{title}</p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
            <a
              href={ytUrl} target="_blank" rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '4px',
                padding: '5px 10px', borderRadius: '6px',
                background: '#FF0000', color: '#fff',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '10.5px', fontWeight: 600, textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#CC0000'}
              onMouseLeave={e => e.currentTarget.style.background = '#FF0000'}
            >↗ YouTube</a>

            <button
              onClick={onClose}
              style={{
                width: '28px', height: '28px', borderRadius: '7px',
                background: '#F4EFE6', border: '1px solid #E8E2D8',
                cursor: 'pointer', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#18130D" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Portrait 9:16 embed */}
        <div style={{ position: 'relative', flex: 1, minHeight: 0, aspectRatio: '9/16', background: '#000' }}>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              border: 'none', display: 'block',
            }}
          />
        </div>

        {/* Fallback footer */}
        <div style={{
          padding: '8px 14px',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px',
          borderTop: '1px solid #E8E2D8',
        }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10.5px', color: '#B0A89C' }}>
            Video not loading?
          </span>
          <a href={ytUrl} target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10.5px', color: '#C9481B', fontWeight: 500, textDecoration: 'underline' }}>
            Open on YouTube ↗
          </a>
        </div>
      </div>

      <style>{`
        @keyframes shorts-pop {
          from { opacity: 0; transform: scale(0.92) translateY(14px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }
      `}</style>
    </div>,
    document.body
  );
}

/* ─────────────────────────────────────────────
   Individual Shorts Card
───────────────────────────────────────────── */
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

function ShortsCard({ videoId, title, index, size = 'normal' }) {
  const [hovered,     setHovered]     = useState(false);
  const [thumbIdx,    setThumbIdx]    = useState(0);
  const [thumbFailed, setThumbFailed] = useState(false);
  const [modalOpen,   setModalOpen]   = useState(false);

  // For better performance, prioritize mqdefault (smaller file) then hqdefault.
  const thumbSteps = [
    `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`,
    `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    `https://i.ytimg.com/vi/${videoId}/sddefault.jpg`,
    `https://i.ytimg.com/vi/${videoId}/default.jpg`,
  ];

  const palette = PALETTES[index % PALETTES.length];
  const isLarge = size === 'large';

  return (
    <>
      <div
        onClick={() => setModalOpen(true)}
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
          transform: hovered ? 'translateY(-6px) scale(1.018)' : 'translateY(0) scale(1)',
          transition: 'all 0.35s cubic-bezier(0.34,1.2,0.64,1)',
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
              decoding="async"
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
            <div style={{
              width: '100%', height: '100%', background: palette.bg,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: '14px', padding: '20px',
            }}>
              <svg width={isLarge ? 56 : 44} height={isLarge ? 56 : 44} viewBox="0 0 56 56" fill="none">
                <circle cx="28" cy="28" r="26" fill={`${palette.dot}12`} stroke={`${palette.dot}25`} strokeWidth="1.5"/>
                <circle cx="28" cy="28" r="16" fill={`${palette.dot}10`} stroke={`${palette.dot}20`} strokeWidth="1"/>
                <path d="M22 18l16 10-16 10V18z" fill={`${palette.dot}70`}/>
              </svg>
              <p style={{
                fontFamily: "'Cormorant Garant', serif",
                fontSize: isLarge ? '13px' : '11px',
                fontWeight: 600, color: '#5A524A',
                textAlign: 'center', lineHeight: 1.4, maxWidth: '110px',
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
            }}>▶ SHORTS</span>
          </div>

          {/* Play button */}
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
              <svg width={isLarge ? 20 : 16} height={isLarge ? 20 : 16} viewBox="0 0 24 24" fill="#C9481B">
                <path d="M5 3l14 9-14 9z"/>
              </svg>
            </div>
          </div>

          {/* Title overlay */}
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

      {modalOpen && (
        <ShortsModal videoId={videoId} title={title} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}

/* ─── Data ─── */
const aiShorts = [
  { id: 'Rj4eYEHXfVU', title: 'AI Brand Campaign – Cinematic Spot' },
  { id: 'Pu66KCNLZxs', title: 'Product Reveal – AI Generated Creative' },
  { id: 'iSnPq_Nz3sg', title: 'AI Fashion Campaign – Dynamic Visual' },
  { id: 'vmHVnuD3aH0', title: 'AI Motion Graphics – Brand Story' },
  { id: 'aXY_ykf-dWE', title: 'Generative AI Ad – E-Commerce Brand' },
  { id: 'BN1ux2azoqQ', title: 'AI Visual Campaign – Luxury Product' },
  { id: 'UQWm2vvMsFg', title: 'AI Advertising Reel – Tech Brand' },
  { id: 'lmqTiLIuloA', title: 'AI Brand Film – FinTech Campaign' },
  { id: 'oiaAg64l5tY', title: 'Generative Video – Food & Beverage' },
  { id: 'vmHVnuD3aH0', title: 'AI Real Estate Campaign' },
  { id: '6zH9tSeLV5c', title: 'AI Sports & Energy Brand Ad' },
  { id: 'UBPl3dIIBPk', title: 'AI Travel & Hospitality Campaign' },
  { id: 'wAIDI4kx3XE', title: 'Hyper-Realistic AI Product Spot' },
  { id: 'AAFjH-Eg0rM', title: 'AI Motion – Brand Identity Spot' },
];

const capabilities = [
  { icon: '🎬', label: 'Text-to-Video' },
  { icon: '🤖', label: 'AI Avatars' },
  { icon: '✨', label: 'AI Upscaling' },
  { icon: '🎨', label: 'Style Transfer' },
  { icon: '🗣️', label: 'Voice Cloning' },
  { icon: '🌐', label: 'Multilingual' },
];

function RowDivider({ label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
      <span style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 500,
        letterSpacing: '0.12em', textTransform: 'uppercase',
        color: 'var(--text-light)', whiteSpace: 'nowrap',
      }}>{label}</span>
      <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
    </div>
  );
}

function ShortsGrid({ shorts }) {
  return (
    <>
      {/* Desktop (>1100px): sectioned rows */}
      <div className="sg-desktop-layout">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <span style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 600,
                letterSpacing: '0.13em', textTransform: 'uppercase', color: '#C9481B',
                padding: '4px 10px', background: 'rgba(201,72,27,0.07)',
                border: '1px solid rgba(201,72,27,0.2)', borderRadius: '99px',
                display: 'flex', alignItems: 'center', gap: '6px',
              }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#C9481B', display: 'inline-block', animation: 'pulse-dot 2s infinite' }} />
                Featured Campaigns
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', alignItems: 'start' }}>
              {shorts.slice(0, 4).map((s, i) => (
                <ShortsCard key={s.id + i} videoId={s.id} title={s.title} index={i} size="large" />
              ))}
            </div>
          </div>

          <RowDivider label="More AI Campaigns" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '14px' }}>
            {shorts.slice(4, 9).map((s, i) => (
              <ShortsCard key={s.id + i} videoId={s.id} title={s.title} index={i + 4} size="normal" />
            ))}
          </div>

          <RowDivider label="Recent Work" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '14px' }}>
            {shorts.slice(9, 14).map((s, i) => (
              <ShortsCard key={s.id + i} videoId={s.id} title={s.title} index={i + 9} size="normal" />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile / Tablet (≤1100px): flat 2-column grid */}
      <div className="sg-mobile-layout">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px', alignItems: 'start' }}>
          {shorts.map((s, i) => (
            <ShortsCard key={s.id + '-m-' + i} videoId={s.id} title={s.title} index={i} size="normal" />
          ))}
        </div>
      </div>
    </>
  );
}

export default function AIAdvertising() {
  const navigate = useNavigate();

  return (
    <div style={{ background: 'var(--bg)' }}>

      <section className="page-hero">
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
           
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

      <section style={{ background: 'var(--bg)', padding: 'clamp(48px, 7vw, 80px) 24px' }}>
        <div style={{ maxWidth: '1380px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', marginBottom: '32px' }}>
            <div>
              <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '12px' }}>AI Video Portfolio</span>
              <h2 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--text)', lineHeight: 1.1 }}>
                Generative AI Video Production
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13.5px', color: 'var(--text-muted)', marginTop: '6px' }}>
                14 AI shorts — click any to play inline
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

          <ShortsGrid shorts={aiShorts} />

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
        .sg-desktop-layout { display: block; }
        .sg-mobile-layout  { display: none;  }
        @media (max-width: 1100px) {
          .sg-desktop-layout { display: none  !important; }
          .sg-mobile-layout  { display: block !important; }
        }
      `}</style>
    </div>
  );
}