import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

/**
 * parseVideoId — accepts a clean 11-char ID or any youtube.com / youtu.be URL.
 * Always returns just the 11-char video ID.
 */
function parseVideoId(input) {
  if (!input) return '';
  // Already a clean ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(input)) return input;
  try {
    const url = new URL(input);
    // ?v=ID  (youtube.com/watch)
    const v = url.searchParams.get('v');
    if (v && /^[a-zA-Z0-9_-]{11}$/.test(v)) return v;
    // youtu.be/ID
    if (url.hostname === 'youtu.be') {
      const id = url.pathname.slice(1).split('?')[0];
      if (/^[a-zA-Z0-9_-]{11}$/.test(id)) return id;
    }
    // /embed/ID
    const em = url.pathname.match(/\/embed\/([a-zA-Z0-9_-]{11})/);
    if (em) return em[1];
    // /shorts/ID
    const sh = url.pathname.match(/\/shorts\/([a-zA-Z0-9_-]{11})/);
    if (sh) return sh[1];
  } catch {}
  return input;
}

const CARD_GRADIENTS = [
  ['#F7F2EA', '#EDE4D6'],
  ['#EEE9F2', '#E0D8EC'],
  ['#E8EEF4', '#D8E4EE'],
  ['#F2EBE8', '#E8D8D0'],
  ['#E8F2EE', '#D4E8DC'],
  ['#F2EEE8', '#E8E0D0'],
];

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
  const ytUrl = `https://www.youtube.com/watch?v=${id}`;

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 99999,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '16px',
        background: 'rgba(24,19,13,0.88)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
    >
      <div
        style={{
          width: '100%', maxWidth: '900px',
          borderRadius: '20px', overflow: 'hidden',
          background: '#FDFCF8',
          boxShadow: '0 40px 100px rgba(24,19,13,0.5)',
          animation: 'modal-pop 0.25s cubic-bezier(0.34,1.56,0.64,1) forwards',
        }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '13px 18px', borderBottom: '1px solid #E8E2D8',
        }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
            fontSize: '14px', color: '#18130D',
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            maxWidth: 'calc(100% - 120px)',
          }}>
            {title}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            <a
              href={ytUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '5px',
                padding: '6px 12px', borderRadius: '7px',
                background: '#FF0000', color: '#fff',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '11.5px', fontWeight: 600,
                textDecoration: 'none', letterSpacing: '0.02em',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#CC0000'}
              onMouseLeave={e => e.currentTarget.style.background = '#FF0000'}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                <path d="M5 3l14 9-14 9z"/>
              </svg>
              Watch on YouTube ↗
            </a>
            <button
              onClick={onClose}
              style={{
                width: '30px', height: '30px', borderRadius: '8px',
                background: '#F4EFE6', border: '1px solid #E8E2D8',
                cursor: 'pointer', display: 'flex',
                alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#18130D" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <div style={{ position: 'relative', aspectRatio: '16/9', background: '#18130D' }}>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ width: '100%', height: '100%', border: 'none', display: 'block', position: 'absolute', inset: 0 }}
          />
        </div>

        <div style={{
          padding: '10px 18px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '6px',
          borderTop: '1px solid #E8E2D8',
        }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: '#B0A89C' }}>
            If the video doesn't load,
          </span>
          <a
            href={ytUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: '11px',
              color: '#C9481B', fontWeight: 500, textDecoration: 'underline',
            }}
          >
            watch directly on YouTube ↗
          </a>
        </div>
      </div>

      <style>{`
        @keyframes modal-pop {
          from { opacity: 0; transform: scale(0.94) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>,
    document.body
  );
}

export default function VideoCard({ videoId, title, description, accentColor, cardIndex = 0 }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const id = parseVideoId(videoId);
  const [c1, c2] = CARD_GRADIENTS[cardIndex % CARD_GRADIENTS.length];

  /**
   * Thumbnail fallback chain.
   * IMPORTANT: We skip maxresdefault — YouTube returns a 120×90 black-bar placeholder
   * for it when it doesn't exist (no 404, so onError never fires → broken thumbnail).
   * Starting from hqdefault is reliable for all videos.
   */
  const [thumbIdx, setThumbIdx] = useState(0);
  const [thumbFailed, setThumbFailed] = useState(false);
  const thumbSteps = [
    `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    `https://i.ytimg.com/vi/${id}/mqdefault.jpg`,
    `https://i.ytimg.com/vi/${id}/sddefault.jpg`,
  ];

  return (
    <>
      <div
        onClick={() => setModalOpen(true)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          borderRadius: '16px', overflow: 'hidden', cursor: 'pointer',
          background: '#fff', border: '1px solid #E8E2D8',
          boxShadow: hovered ? '0 18px 48px rgba(24,19,13,0.14)' : '0 2px 12px rgba(24,19,13,0.06)',
          transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
          transition: 'all 0.32s cubic-bezier(0.34,1.2,0.64,1)',
        }}
      >
        <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: `linear-gradient(135deg, ${c1}, ${c2})` }}>
          {!thumbFailed ? (
            <img
              key={thumbSteps[thumbIdx]}
              src={thumbSteps[thumbIdx]}
              alt={title}
              style={{
                width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                transform: hovered ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.5s ease',
              }}
              onError={() => {
                if (thumbIdx < thumbSteps.length - 1) setThumbIdx(i => i + 1);
                else setThumbFailed(true);
              }}
            />
          ) : (
            <div style={{
              width: '100%', height: '100%',
              background: `linear-gradient(135deg, ${c1}, ${c2})`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="11" fill="rgba(201,72,27,0.1)" stroke="rgba(201,72,27,0.2)" strokeWidth="1.5"/>
                <path d="M10 8l6 4-6 4V8z" fill="#C9481B"/>
              </svg>
            </div>
          )}

          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(24,19,13,0.5) 0%, transparent 55%)',
            opacity: hovered ? 1 : 0.35, transition: 'opacity 0.3s',
          }} />

          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
              width: '52px', height: '52px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.96)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              transform: hovered ? 'scale(1.12)' : 'scale(1)',
              transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1)',
            }}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill={accentColor || '#C9481B'}>
                <path d="M5 3l14 9-14 9z"/>
              </svg>
            </div>
          </div>

          <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
            <span style={{ background: '#FF0000', color: '#fff', fontSize: '10px', fontWeight: 700, fontFamily: "'DM Sans', sans-serif", padding: '3px 8px', borderRadius: '4px' }}>YT</span>
          </div>
        </div>

        <div style={{ padding: '14px 16px 16px' }}>
          <h4 style={{
            fontFamily: "'Cormorant Garant', serif", fontWeight: 600, fontSize: '1rem',
            lineHeight: 1.3, color: '#18130D', marginBottom: '5px',
            display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
          }}>{title}</h4>
          {description && (
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: '#7A7068', lineHeight: 1.6,
              display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
            }}>{description}</p>
          )}
          <div style={{
            marginTop: '10px', display: 'flex', alignItems: 'center', gap: '5px',
            color: accentColor || '#C9481B', fontSize: '11px', fontWeight: 500,
            fontFamily: "'DM Sans', sans-serif",
          }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9z"/></svg>
            <span>Watch video</span>
          </div>
        </div>
      </div>

      {modalOpen && (
        <VideoModal videoId={id} title={title} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}