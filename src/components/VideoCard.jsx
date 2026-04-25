import { useState } from 'react';

export default function VideoCard({ videoId, title, description }) {
  const [modalOpen, setModalOpen] = useState(false);
  const thumb = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <>
      <div
        className="glass-card rounded-2xl overflow-hidden hover-lift group cursor-pointer"
        onClick={() => setModalOpen(true)}
      >
        {/* Thumbnail */}
        <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
          <img
            src={thumb}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback if image fails */}
          <div
            className="w-full h-full absolute inset-0 items-center justify-center"
            style={{
              display: 'none',
              background: 'linear-gradient(135deg, #0D1B3E 0%, #1A0533 100%)',
            }}
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="4" fill="rgba(77,126,245,0.15)" stroke="rgba(77,126,245,0.3)" strokeWidth="1" />
              <path d="M8 5v14l11-7z" fill="#4D7EF5" />
            </svg>
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/25 transition-all duration-300 shadow-2xl">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* Duration badge */}
          <div className="absolute bottom-3 right-3">
            <span className="text-xs text-white bg-black/70 px-2 py-0.5 rounded font-medium">YouTube</span>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <h4 className="text-white text-sm font-semibold mb-1 line-clamp-2 group-hover:text-blue-400 transition-colors duration-300"
            style={{ fontFamily: 'Syne, sans-serif' }}>
            {title}
          </h4>
          {description && (
            <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{description}</p>
          )}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.92)' }}
          onClick={() => setModalOpen(false)}
        >
          <div
            className="w-full max-w-4xl glass-card rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
              <h3 className="text-white font-semibold text-sm line-clamp-1" style={{ fontFamily: 'Syne, sans-serif' }}>
                {title}
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div style={{ aspectRatio: '16/9' }}>
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                style={{ border: 'none' }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}