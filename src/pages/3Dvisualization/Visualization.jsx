import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import VideoCard from '../../components/VideoCard';

const galleryImages = [
  { src: 'https://picsum.photos/seed/3d-render-01/900/700', alt: 'Luxury Product 3D Render', label: 'Luxury Product Visualization' },
  { src: 'https://picsum.photos/seed/3d-arch-02/700/500', alt: '3D Architectural Render', label: 'Architectural Render' },
  { src: 'https://picsum.photos/seed/3d-auto-03/600/500', alt: 'Automotive 3D Model', label: 'Automotive Visualization' },
  { src: 'https://picsum.photos/seed/3d-inter-04/700/600', alt: 'Interior Design 3D', label: 'Interior Design Concept' },
  { src: 'https://picsum.photos/seed/3d-jewel-05/600/600', alt: 'Jewelry Product Render', label: 'Fine Jewelry Rendering' },
  { src: 'https://picsum.photos/seed/3d-tech-06/800/600', alt: 'Tech Product Visualization', label: 'Consumer Electronics' },
  { src: 'https://picsum.photos/seed/3d-food-07/700/500', alt: 'Food & Beverage 3D', label: 'F&B Product Render' },
  { src: 'https://picsum.photos/seed/3d-fashion-08/600/700', alt: 'Fashion 3D Visualization', label: 'Fashion & Apparel' },
  { src: 'https://picsum.photos/seed/3d-real-09/900/600', alt: 'Real Estate 3D', label: 'Real Estate Visualization' },
  { src: 'https://picsum.photos/seed/3d-pack-10/700/600', alt: 'Packaging Design 3D', label: 'Packaging Design Render' },
  { src: 'https://picsum.photos/seed/3d-watch-11/600/600', alt: 'Watch 3D Render', label: 'Luxury Watch Render' },
  { src: 'https://picsum.photos/seed/3d-shoes-12/700/500', alt: 'Footwear 3D', label: 'Footwear Visualization' },
  { src: 'https://picsum.photos/seed/3d-phone-13/600/700', alt: 'Smartphone 3D', label: 'Smartphone Product Render' },
  { src: 'https://picsum.photos/seed/3d-car-14/900/600', alt: 'Car 3D Render', label: 'Automotive Detail Render' },
  { src: 'https://picsum.photos/seed/3d-bottle-15/600/800', alt: 'Bottle 3D', label: 'Beverage Packaging Render' },
  { src: 'https://picsum.photos/seed/3d-chair-16/700/600', alt: 'Furniture 3D', label: 'Furniture Design Render' },
  { src: 'https://picsum.photos/seed/3d-light-17/600/600', alt: 'Lighting 3D', label: 'Architectural Lighting' },
  { src: 'https://picsum.photos/seed/3d-drone-18/800/500', alt: 'Drone 3D', label: 'Consumer Tech 3D' },
  { src: 'https://picsum.photos/seed/3d-cosmetics-19/600/700', alt: 'Cosmetics 3D', label: 'Cosmetics Product Render' },
  { src: 'https://picsum.photos/seed/3d-hotel-20/900/600', alt: 'Hotel 3D', label: 'Hospitality Visualization' },
  { src: 'https://picsum.photos/seed/3d-kitchen-21/700/500', alt: 'Kitchen 3D', label: 'Kitchen Interior Render' },
  { src: 'https://picsum.photos/seed/3d-bag-22/600/700', alt: 'Bag 3D', label: 'Fashion Accessories Render' },
  { src: 'https://picsum.photos/seed/3d-speaker-23/700/600', alt: 'Speaker 3D', label: 'Audio Product Render' },
  { src: 'https://picsum.photos/seed/3d-office-24/900/600', alt: 'Office 3D', label: 'Commercial Space Render' },
  { src: 'https://picsum.photos/seed/3d-gym-25/700/500', alt: 'Gym 3D', label: 'Fitness Center Render' },
  { src: 'https://picsum.photos/seed/3d-ring-26/600/600', alt: 'Ring 3D', label: 'Fine Jewelry Ring Render' },
  { src: 'https://picsum.photos/seed/3d-villa-27/900/600', alt: 'Villa 3D', label: 'Luxury Villa Exterior' },
];

/* ── Updated: 6 YouTube videos ── */
const visualizationVideos = [
  { id: '0_sqEtRAHBE', title: '3D Product Showcase – Premium Brand Film', description: 'Cinematic 3D animation with photorealistic materials and studio-grade lighting.' },
  { id: 'iGSnMm3wmdQ', title: 'Architectural 3D Visualization – Luxury Project', description: 'Pre-construction 3D walkthrough for a high-end residential development.' },
  { id: 'mOK8zJu2HcA', title: '3D Brand Film – Product Launch Reel', description: 'Dynamic 3D animation showcasing design language, detail and craftsmanship.' },
  { id: '4DN2fCBi0DE', title: 'Interior Design 3D Visualization', description: 'Immersive interior 3D concepts that sell the space before a brick is laid.' },
  { id: '4DN2fCBi0DE', title: 'Automotive 3D Render – Detail Reel', description: 'High-fidelity vehicle render with accurate materials and cinematic lighting.' },
  { id: 'q8_Qu0lr0fA', title: 'Packaging & Product 3D Animation', description: 'Lifelike 3D packaging animation for e-commerce, retail and marketing.' },
];

const services3D = [
  { icon: '🎯', title: 'Product Visualization', desc: 'Photorealistic renders of your products from every angle — before they even exist.' },
  { icon: '🏗️', title: 'Architectural Rendering', desc: 'Pre-construction 3D renders and animations for residential and commercial projects.' },
  { icon: '🚗', title: 'Automotive 3D', desc: 'High-fidelity vehicle renders with accurate materials, lighting, and environments.' },
  { icon: '🏠', title: 'Interior Design', desc: 'Immersive interior 3D visualizations that sell spaces before a single brick is laid.' },
  { icon: '📦', title: 'Packaging & Branding', desc: 'Lifelike 3D packaging renders for e-commerce, retail, and marketing materials.' },
  { icon: '⚙️', title: 'Technical Animation', desc: 'Exploded views and mechanism animations for products, machinery, and engineering.' },
];

const process = [
  { step: '01', label: 'Brief & Concept', icon: '💡', desc: 'Understanding your vision and goals' },
  { step: '02', label: '3D Modelling', icon: '🗿', desc: 'Building precise digital geometry' },
  { step: '03', label: 'Texturing & Lighting', icon: '🎨', desc: 'Applying photorealistic materials' },
  { step: '04', label: 'Render & Deliver', icon: '✅', desc: 'Final output in any format' },
];

function Lightbox({ img, onClose }) {
  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 99999,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '16px',
        background: 'rgba(24,19,13,0.92)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        overscrollBehavior: 'contain',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: 'relative', width: '100%', maxWidth: '860px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', maxHeight: '90vh',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '-12px', right: '-12px',
            width: '36px', height: '36px', borderRadius: '50%',
            background: '#FDFCF8', border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 14px rgba(0,0,0,0.3)', zIndex: 2, flexShrink: 0,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#18130D" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <img
          src={img.src} alt={img.alt}
          style={{ width: '100%', maxHeight: 'calc(90vh - 48px)', objectFit: 'contain', borderRadius: '14px', boxShadow: '0 40px 100px rgba(0,0,0,0.5)', display: 'block' }}
        />
        <p style={{ textAlign: 'center', marginTop: '12px', fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'rgba(253,252,248,0.65)' }}>
          {img.label}
        </p>
      </div>
    </div>,
    document.body
  );
}

/* ── 6-video grid layout ── */
function VideoGrid({ videos, accentColor }) {
  return (
    <>
      {/* Desktop layout: 2 large top + 4 bottom */}
      <div className="viz-vid-desktop">

        {/* Row 1: 2 featured videos */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '14px', marginBottom: '14px' }}>
          <VideoCard {...videos[0]} accentColor={accentColor} />
          <VideoCard {...videos[1]} accentColor={accentColor} />
        </div>

        {/* Divider label */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px',
        }}>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10.5px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-light)', whiteSpace: 'nowrap' }}>
            More Projects
          </span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>

        {/* Row 2: 4 smaller videos */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px' }}>
          {videos.slice(2).map((v, i) => (
            <VideoCard key={v.id + i} {...v} accentColor={accentColor} />
          ))}
        </div>
      </div>

      {/* Tablet layout: 2+2+2 */}
      <div className="viz-vid-tablet">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
          {videos.map((v, i) => (
            <VideoCard key={v.id + i} {...v} accentColor={accentColor} />
          ))}
        </div>
      </div>

      {/* Mobile layout: stacked */}
      <div className="viz-vid-mobile">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {videos.map((v, i) => (
            <VideoCard key={v.id + i} {...v} accentColor={accentColor} />
          ))}
        </div>
      </div>
    </>
  );
}

export default function Visualization() {
  const [lightboxImg, setLightboxImg] = useState(null);
  const navigate = useNavigate();

  return (
    <div style={{ background: 'var(--bg)' }}>

      {/* ── HERO ── */}
      <section className="page-hero">
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '680px', margin: '0 auto' }}>
          <span className="section-tag" style={{ marginBottom: '18px', display: 'inline-flex', color: '#7C3AED', background: 'rgba(124,58,237,0.08)', borderColor: 'rgba(124,58,237,0.22)' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7C3AED', display: 'inline-block' }} className="animate-pulse" />
            3D & Visual Production
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(2.2rem, 5.5vw, 4rem)', lineHeight: 1.06, color: 'var(--text)', marginBottom: '18px' }}>
            3D <em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>Visualization</em>
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(0.88rem, 1.8vw, 1rem)', color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: '520px', margin: '0 auto 32px' }}>
            We transform concepts into photorealistic 3D experiences — visuals so real, they blur the line between digital and physical reality.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => navigate('/contact')}>Start a 3D Project →</button>
            <button className="btn-outline" onClick={() => document.getElementById('viz-gallery').scrollIntoView({ behavior: 'smooth' })}>View Gallery</button>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section style={{ background: 'var(--bg-alt)', padding: 'clamp(48px, 7vw, 80px) 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '12px' }}>What We Create</span>
            <h2 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--text)' }}>
              Our 3D Services
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }} className="services-3d-grid">
            {services3D.map(({ icon, title, desc }) => (
              <div key={title} className="card" style={{ padding: '22px 20px', cursor: 'default' }}>
                <span style={{ fontSize: '1.75rem', display: 'block', marginBottom: '12px' }}>{icon}</span>
                <h4 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 600, fontSize: '1.1rem', color: 'var(--text)', marginBottom: '7px' }}>{title}</h4>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMAGE GALLERY ── */}
      <section id="viz-gallery" style={{ background: 'var(--bg)', padding: 'clamp(56px, 8vw, 90px) 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', marginBottom: '28px' }}>
            <div>
              <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '10px' }}>Project Gallery</span>
              <h2 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--text)' }}>
                Our 3D Portfolio
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13.5px', color: 'var(--text-muted)', marginTop: '5px' }}>
                27 projects across rendering and visualization
              </p>
            </div>
          </div>

          <div className="viz-masonry-grid">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="portfolio-item viz-masonry-item"
                onClick={() => setLightboxImg(img)}
                style={{
                  position: 'relative', borderRadius: '12px', overflow: 'hidden',
                  cursor: 'pointer', marginBottom: '12px', breakInside: 'avoid',
                  boxShadow: 'var(--shadow-sm)', transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'scale(1.02)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'scale(1)'; }}
              >
                <img src={img.src} alt={img.alt} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div className="portfolio-overlay" />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px', opacity: 0, transition: 'opacity 0.3s ease', zIndex: 2 }} className="portfolio-label">
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 500, color: '#fff', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', padding: '4px 11px', borderRadius: '99px', border: '1px solid rgba(255,255,255,0.2)' }}>{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO SECTION ── */}
      <section style={{ background: 'var(--bg-alt)', padding: 'clamp(56px, 8vw, 90px) 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ marginBottom: '36px', textAlign: 'center' }}>
            <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '10px', color: '#7C3AED', background: 'rgba(124,58,237,0.08)', borderColor: 'rgba(124,58,237,0.22)' }}>
              3D Animation Reels
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--text)' }}>
              Watch Our Work in Motion
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13.5px', color: 'var(--text-muted)', marginTop: '8px' }}>
              6 cinematic 3D visualization projects — rendered to perfection
            </p>
          </div>

          <VideoGrid videos={visualizationVideos} accentColor="#7C3AED" />
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(56px, 8vw, 90px) 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '14px' }}>Our Process</span>
            <h2 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--text)', lineHeight: 1.1 }}>
              From Brief to <em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>Photorealism</em>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px' }} className="process-grid">
            {process.map(({ step, label, icon, desc }) => (
              <div key={step} style={{
                textAlign: 'center', padding: '28px 18px',
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: '16px', transition: 'all 0.3s ease', cursor: 'default',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--orange)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(201,72,27,0.1)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ fontFamily: "'Cormorant Garant', serif", fontSize: '2.8rem', fontWeight: 700, color: '#C9481B', lineHeight: 1, marginBottom: '8px' }}>{step}</div>
                <div style={{ fontSize: '1.4rem', marginBottom: '8px' }}>{icon}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13.5px', fontWeight: 600, color: 'var(--text)', marginBottom: '6px' }}>{label}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>

          <p style={{ textAlign: 'center', fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'var(--text-muted)', maxWidth: '560px', margin: '36px auto 0', lineHeight: 1.8 }}>
            Using Cinema 4D, Blender, Unreal Engine, and V-Ray — our artists build accurate 3D models, apply photorealistic materials and HDR lighting, and render frames with sub-millimeter detail.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'var(--bg-alt)', padding: 'clamp(56px, 8vw, 90px) 24px', textAlign: 'center' }}>
        <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '18px' }}>Let's Create</span>
        <h2 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--text)', marginBottom: '14px' }}>
          Ready to bring your product to life in 3D?
        </h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: 'var(--text-muted)', marginBottom: '28px' }}>
          Tell us about your project and we'll turn it into something extraordinary.
        </p>
        <button className="btn-primary" style={{ padding: '13px 32px', fontSize: '15px' }} onClick={() => navigate('/contact')}>
          Start a 3D Project →
        </button>
      </section>

      {lightboxImg && (
        <Lightbox img={lightboxImg} onClose={() => setLightboxImg(null)} />
      )}

      <style>{`
        .portfolio-item:hover .portfolio-label { opacity: 1 !important; }
        .portfolio-item:hover .portfolio-overlay { opacity: 1; }

        .viz-masonry-grid { columns: 4; column-gap: 12px; }
        .viz-masonry-item { display: inline-block; width: 100%; }

        /* Video grid responsive visibility */
        .viz-vid-desktop { display: block; }
        .viz-vid-tablet  { display: none; }
        .viz-vid-mobile  { display: none; }

        @media (max-width: 1100px) {
          .viz-vid-desktop { display: none !important; }
          .viz-vid-tablet  { display: block !important; }
          .viz-masonry-grid { columns: 3 !important; }
        }
        @media (max-width: 768px) {
          .viz-vid-tablet  { display: none !important; }
          .viz-vid-mobile  { display: block !important; }
          .viz-masonry-grid { columns: 2 !important; }
        }
        @media (max-width: 900px) {
          .services-3d-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .services-3d-grid { grid-template-columns: 1fr !important; }
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .viz-masonry-grid { columns: 2 !important; }
        }
        @media (max-width: 380px) {
          .viz-masonry-grid { columns: 1 !important; }
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
} 