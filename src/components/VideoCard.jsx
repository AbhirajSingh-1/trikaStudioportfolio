import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

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
        background: 'rgba(24,19,13,0.88)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
    >
      <div
        style={{
          width: '100%', maxWidth: '920px',
          borderRadius: '20px', overflow: 'hidden',
          background: '#FDFCF8',
          boxShadow: '0 40px 100px rgba(24,19,13,0.5)',
          animation: 'modal-pop 0.25s cubic-bezier(0.34,1.56,0.64,1) forwards',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Modal header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '14px 20px',
          borderBottom: '1px solid #E8E2D8',
          background: '#FDFCF8',
        }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500, fontSize: '14px', color: '#18130D',
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            maxWidth: 'calc(100% - 48px)',
          }}>
            {title}
          </p>
          <button
            onClick={onClose}
            style={{
              width: '32px', height: '32px', borderRadius: '8px',
              background: '#F4EFE6',
              border: '1px solid #E8E2D8',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#E8E2D8'}
            onMouseLeave={e => e.currentTarget.style.background = '#F4EFE6'}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#18130D" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Video */}
        <div style={{ aspectRatio: '16/9', width: '100%', background: '#18130D' }}>
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
          from { opacity: 0; transform: scale(0.94) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>,
    document.body
  );
}

export default function VideoCard({ videoId, title, description, accentColor }) {
  const [modalOpen, setModalOpen] = useState(false);
  const id = parseVideoId(videoId);
  const [thumbSrc, setThumbSrc] = useState(`https://img.youtube.com/vi/${id}/maxresdefault.jpg`);

  return (
    <>
      <div
        className="media-card group cursor-pointer"
        onClick={() => setModalOpen(true)}
        style={{ borderRadius: '16px', overflow: 'hidden' }}
      >
        {/* Thumbnail */}
        <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
          <img
            src={thumbSrc}
            alt={title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', display: 'block' }}
            className="group-hover:scale-105"
            onError={() => {
              if (thumbSrc.includes('maxresdefault')) {
                setThumbSrc(`https://img.youtube.com/vi/${id}/hqdefault.jpg`);
              } else {
                setThumbSrc('');
              }
            }}
          />

          {!thumbSrc && (
            <div style={{
              width: '100%', height: '100%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'linear-gradient(135deg, #F4EFE6, #E8E2D8)',
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="4" fill="rgba(201,72,27,0.1)" stroke="rgba(201,72,27,0.2)" />
                <path d="M8 5v14l11-7z" fill="#C9481B" />
              </svg>
            </div>
          )}

          {/* Gradient */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(24,19,13,0.6) 0%, transparent 60%)',
            opacity: 0, transition: 'opacity 0.3s ease',
          }} className="group-hover:opacity-100" />

          {/* Play button */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div
              style={{
                width: '52px', height: '52px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.95)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(24,19,13,0.25)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              className="group-hover:scale-110 group-hover:shadow-lg"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill={accentColor || '#C9481B'}>
                <path d="M5 3l14 9-14 9z"/>
              </svg>
            </div>
          </div>

          {/* YT badge */}
          <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
            <span style={{
              background: '#FF0000',
              color: '#fff',
              fontSize: '10px', fontWeight: 600,
              fontFamily: "'DM Sans', sans-serif",
              padding: '3px 8px', borderRadius: '4px',
              letterSpacing: '0.04em',
            }}>YT</span>
          </div>
        </div>

        {/* Info */}
        <div style={{ padding: '14px 16px 16px' }}>
          <h4 style={{
            fontFamily: "'Cormorant Garant', serif",
            fontWeight: 600, fontSize: '1rem', lineHeight: 1.3,
            color: '#18130D',
            marginBottom: '6px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            transition: 'color 0.2s',
          }} className="group-hover:text-orange">
            {title}
          </h4>
          {description && (
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '12px', color: '#7A7068', lineHeight: 1.6,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}>
              {description}
            </p>
          )}
          <div style={{
            marginTop: '12px',
            display: 'flex', alignItems: 'center', gap: '5px',
            color: accentColor || '#C9481B',
            fontSize: '11px', fontWeight: 500,
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: '0.03em',
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 3l14 9-14 9z"/>
            </svg>
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