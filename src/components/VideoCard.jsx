import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

// Extract YouTube video ID from any YT URL format, or use directly if already an ID
function parseVideoId(input) {
  if (!input) return '';
  // Already a plain ID (no slashes or dots)
  if (/^[a-zA-Z0-9_-]{11}$/.test(input)) return input;
  try {
    const url = new URL(input);
    // youtube.com/watch?v=ID
    if (url.searchParams.get('v')) return url.searchParams.get('v');
    // youtu.be/ID
    if (url.hostname === 'youtu.be') return url.pathname.slice(1).split('?')[0];
    // youtube.com/embed/ID
    const embedMatch = url.pathname.match(/\/embed\/([a-zA-Z0-9_-]{11})/);
    if (embedMatch) return embedMatch[1];
    // youtube.com/shorts/ID
    const shortsMatch = url.pathname.match(/\/shorts\/([a-zA-Z0-9_-]{11})/);
    if (shortsMatch) return shortsMatch[1];
  } catch {
    // Not a URL — return as-is
  }
  return input;
}

function VideoModal({ videoId, title, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    // Prevent body scroll while modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const id = parseVideoId(videoId);

  return createPortal(
    <div
      className="video-modal-backdrop"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        background: 'rgba(0,0,0,0.93)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '900px',
          borderRadius: '20px',
          overflow: 'hidden',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
          animation: 'modal-pop 0.25s cubic-bezier(0.34,1.56,0.64,1) forwards',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 20px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <p style={{
            color: '#F0F4FF',
            fontFamily: 'Syne, sans-serif',
            fontWeight: 600,
            fontSize: '14px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            maxWidth: 'calc(100% - 48px)',
          }}>
            {title}
          </p>
          <button
            onClick={onClose}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'rgba(255,255,255,0.08)',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.18)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Video iframe */}
        <div style={{ aspectRatio: '16/9', width: '100%' }}>
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
          from { opacity: 0; transform: scale(0.92) translateY(12px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>,
    document.body
  );
}

export default function VideoCard({ videoId, title, description }) {
  const [modalOpen, setModalOpen] = useState(false);
  const id = parseVideoId(videoId);

  // Use maxresdefault, fall back to hqdefault
  const [thumbSrc, setThumbSrc] = useState(`https://img.youtube.com/vi/${id}/maxresdefault.jpg`);

  return (
    <>
      <div
        className="glass-card rounded-2xl overflow-hidden hover-lift group cursor-pointer"
        onClick={() => setModalOpen(true)}
      >
        {/* Thumbnail */}
        <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
          <img
            src={thumbSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => {
              // fallback: maxres → hqdefault → placeholder div
              if (thumbSrc.includes('maxresdefault')) {
                setThumbSrc(`https://img.youtube.com/vi/${id}/hqdefault.jpg`);
              } else {
                setThumbSrc('');
              }
            }}
          />

          {/* Placeholder when no thumbnail loads */}
          {!thumbSrc && (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #0D1B3E 0%, #1A0533 100%)' }}
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="4" fill="rgba(77,126,245,0.15)" stroke="rgba(77,126,245,0.3)" strokeWidth="1" />
                <path d="M8 5v14l11-7z" fill="#4D7EF5" />
              </svg>
            </div>
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{
                background: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: '1.5px solid rgba(255,255,255,0.3)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              }}
            >
              {/* YouTube play icon */}
              <svg width="28" height="28" viewBox="0 0 68 48" fill="none">
                <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="#FF0000"/>
                <path d="M45 24L27 14v20l18-10z" fill="white"/>
              </svg>
            </div>
          </div>

          {/* YouTube badge */}
          <div className="absolute bottom-3 right-3">
            <span className="text-xs text-white bg-black/70 px-2 py-0.5 rounded font-medium">YouTube</span>
          </div>
        </div>

        {/* Card info */}
        <div className="p-4">
          <h4
            className="text-white text-sm font-semibold mb-1 line-clamp-2 group-hover:text-blue-400 transition-colors duration-300"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            {title}
          </h4>
          {description && (
            <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{description}</p>
          )}
        </div>
      </div>

      {/* Portal modal — renders directly in document.body, immune to parent transforms */}
      {modalOpen && (
        <VideoModal
          videoId={id}
          title={title}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}