import { useState } from 'react';
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
];

const visualizationVideos = [
  { id: 'ULSWOdTnmqY', title: '360° Product Visualization – Premium Watch', description: 'Cinematic 3D turntable render with photorealistic materials and lighting.' },
  { id: 'jNQXAC9IVRw', title: 'Architectural Flythrough – Luxury Villa', description: 'Immersive pre-construction 3D walkthrough for a high-end residential project.' },
  { id: 'dQw4w9WgXcQ', title: 'Automotive 3D Brand Film', description: 'Dynamic 3D animation showcasing vehicle design language and performance.' },
  { id: 'L_jWHffIx5E', title: 'Interior Design Reveal Animation', description: 'Before/after transformation reveal using photorealistic 3D interior rendering.' },
  { id: 'kffacxfA7G4', title: 'Product Explosion View – Tech Device', description: 'Engineering exploded view animation highlighting internal components beautifully.' },
  { id: '9bZkp7q19f0', title: 'Real Estate Development Visualization', description: 'Large-scale 3D master plan animation for a mixed-use real estate development.' },
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
  { step: '01', label: 'Brief & Concept', icon: '💡' },
  { step: '02', label: '3D Modelling', icon: '🗿' },
  { step: '03', label: 'Texturing & Lighting', icon: '🎨' },
  { step: '04', label: 'Render & Deliver', icon: '✅' },
];

export default function Visualization() {
  const [lightboxImg, setLightboxImg] = useState(null);
  const navigate = useNavigate();

  return (
    <div style={{ background: 'var(--bg)' }}>

      {/* ── HERO ── clean page-hero class handles top padding */}
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

      {/* ── BENTO IMAGE GALLERY ── */}
      <section id="viz-gallery" style={{ background: 'var(--bg)', padding: 'clamp(56px, 8vw, 90px) 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', marginBottom: '28px' }}>
            <div>
              <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '10px' }}>Project Gallery</span>
              <h2 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--text)' }}>
                Our 3D Portfolio
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13.5px', color: 'var(--text-muted)', marginTop: '5px' }}>
                A selection of our rendering and visualization projects
              </p>
            </div>
          </div>

          {/* Bento grid — desktop */}
          <div className="bento-grid">
            {galleryImages.map((img, i) => {
              const bentoClass = ['bento-1', 'bento-2', 'bento-3', 'bento-4', 'bento-5', 'bento-6', 'bento-7', 'bento-8'][i % 8];
              return (
                <div key={i} className={`${bentoClass} portfolio-item`}
                  onClick={() => setLightboxImg(img)}
                  style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', cursor: 'pointer', boxShadow: 'var(--shadow-sm)', transition: 'all 0.3s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'scale(1.015)'; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'scale(1)'; }}
                >
                  <img src={img.src} alt={img.alt} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div className="portfolio-overlay" />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px', opacity: 0, transition: 'opacity 0.3s ease', zIndex: 2 }} className="portfolio-label">
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 500, color: '#fff', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', padding: '4px 11px', borderRadius: '99px', border: '1px solid rgba(255,255,255,0.2)' }}>{img.label}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile-friendly scroll gallery — shown on smaller screens */}
          <div className="viz-mobile-gallery">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
              {galleryImages.map((img, i) => (
                <div key={i} className="portfolio-item" onClick={() => setLightboxImg(img)} style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', cursor: 'pointer', aspectRatio: i % 3 === 0 ? '1/1' : '4/3', boxShadow: 'var(--shadow-sm)' }}>
                  <img src={img.src} alt={img.alt} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div className="portfolio-overlay" />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '10px', opacity: 0, transition: 'opacity 0.3s', zIndex: 2 }} className="portfolio-label">
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', color: '#fff', fontWeight: 500 }}>{img.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VIDEO SECTION ── */}
      <section style={{ background: 'var(--bg-alt)', padding: 'clamp(56px, 8vw, 90px) 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', marginBottom: '32px' }}>
            <div>
              <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '10px', color: '#7C3AED', background: 'rgba(124,58,237,0.08)', borderColor: 'rgba(124,58,237,0.22)' }}>3D Animation Reels</span>
              <h2 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--text)' }}>
                Watch Our Work in Motion
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13.5px', color: 'var(--text-muted)', marginTop: '5px' }}>
                3D visualization projects come alive with motion
              </p>
            </div>
          </div>

          {/* Featured top row */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '14px', marginBottom: '14px' }} className="viz-top-grid">
            <VideoCard {...visualizationVideos[0]} accentColor="#7C3AED" />
            <VideoCard {...visualizationVideos[1]} accentColor="#7C3AED" />
          </div>

          {/* Bottom 4-col grid — stacks responsively */}
          <div className="video-grid-4">
            {visualizationVideos.slice(2).map(v => (
              <VideoCard key={v.id} {...v} accentColor="#7C3AED" />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ background: 'var(--text)', padding: 'clamp(56px, 8vw, 90px) 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '14px', color: '#C9481B', borderColor: 'rgba(201,72,27,0.35)', background: 'rgba(201,72,27,0.1)' }}>
              Our Process
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#FDFCF8', lineHeight: 1.1 }}>
              From Brief to <em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>Photorealism</em>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px' }} className="process-grid">
            {process.map(({ step, label }) => (
              <div key={step} style={{
                textAlign: 'center', padding: '28px 18px',
                background: 'rgba(253,252,248,0.05)',
                border: '1px solid rgba(253,252,248,0.08)',
                borderRadius: '16px',
                transition: 'all 0.3s ease', cursor: 'default',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,72,27,0.1)'; e.currentTarget.style.borderColor = 'rgba(201,72,27,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(253,252,248,0.05)'; e.currentTarget.style.borderColor = 'rgba(253,252,248,0.08)'; }}
              >
                <div style={{ fontFamily: "'Cormorant Garant', serif", fontSize: '2.8rem', fontWeight: 700, color: '#C9481B', lineHeight: 1, marginBottom: '10px' }}>{step}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13.5px', fontWeight: 500, color: 'rgba(253,252,248,0.8)' }}>{label}</div>
              </div>
            ))}
          </div>

          <p style={{ textAlign: 'center', fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'rgba(253,252,248,0.4)', maxWidth: '560px', margin: '36px auto 0', lineHeight: 1.8 }}>
            Using Cinema 4D, Blender, Unreal Engine, and V-Ray — our artists build accurate 3D models, apply photorealistic materials and HDR lighting, and render frames with sub-millimeter detail.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(56px, 8vw, 90px) 24px', textAlign: 'center' }}>
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

      {/* Lightbox */}
      {lightboxImg && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', background: 'rgba(24,19,13,0.92)', backdropFilter: 'blur(8px)' }}
          onClick={() => setLightboxImg(null)}
        >
          <div style={{ position: 'relative', maxWidth: '860px', width: '100%' }} onClick={e => e.stopPropagation()}>
            <img src={lightboxImg.src} alt={lightboxImg.alt} style={{ width: '100%', borderRadius: '16px', boxShadow: '0 40px 100px rgba(0,0,0,0.5)' }} />
            <p style={{ textAlign: 'center', marginTop: '14px', fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'rgba(253,252,248,0.65)' }}>{lightboxImg.label}</p>
            <button onClick={() => setLightboxImg(null)} style={{ position: 'absolute', top: '-14px', right: '-14px', width: '38px', height: '38px', borderRadius: '50%', background: '#FDFCF8', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(0,0,0,0.3)' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#18130D" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>
          </div>
        </div>
      )}

      <style>{`
        .portfolio-item:hover .portfolio-label { opacity: 1 !important; }
        /* Desktop: show bento, hide mobile gallery */
        .bento-grid { display: grid; }
        .viz-mobile-gallery { display: none; }
        @media (max-width: 900px) {
          .bento-grid { display: none !important; }
          .viz-mobile-gallery { display: block !important; }
          .services-3d-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .viz-top-grid { grid-template-columns: 1fr !important; }
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .services-3d-grid { grid-template-columns: 1fr !important; }
          .process-grid { grid-template-columns: 1fr !important; }
          .viz-mobile-gallery .portfolio-item { aspect-ratio: 1/1 !important; }
        }
      `}</style>
    </div>
  );
}