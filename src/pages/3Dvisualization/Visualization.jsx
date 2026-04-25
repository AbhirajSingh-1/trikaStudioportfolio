import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VideoCard from '../../components/VideoCard';

const galleryImages = [
  { src: 'https://picsum.photos/seed/3d-render-01/800/600', alt: 'Luxury Product 3D Render', label: 'Luxury Product Visualization' },
  { src: 'https://picsum.photos/seed/3d-arch-02/800/600', alt: '3D Architectural Render', label: 'Architectural Render' },
  { src: 'https://picsum.photos/seed/3d-auto-03/800/600', alt: 'Automotive 3D Model', label: 'Automotive Visualization' },
  { src: 'https://picsum.photos/seed/3d-inter-04/800/600', alt: 'Interior Design 3D', label: 'Interior Design Concept' },
  { src: 'https://picsum.photos/seed/3d-jewel-05/800/600', alt: 'Jewelry Product Render', label: 'Fine Jewelry Rendering' },
  { src: 'https://picsum.photos/seed/3d-tech-06/800/600', alt: 'Tech Product Visualization', label: 'Consumer Electronics' },
  { src: 'https://picsum.photos/seed/3d-food-07/800/600', alt: 'Food & Beverage 3D', label: 'F&B Product Render' },
  { src: 'https://picsum.photos/seed/3d-fashion-08/800/600', alt: 'Fashion 3D Visualization', label: 'Fashion & Apparel' },
  { src: 'https://picsum.photos/seed/3d-real-09/800/600', alt: 'Real Estate 3D', label: 'Real Estate Visualization' },
  { src: 'https://picsum.photos/seed/3d-pack-10/800/600', alt: 'Packaging Design 3D', label: 'Packaging Design Render' },
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

export default function Visualization() {
  const [lightboxImg, setLightboxImg] = useState(null);
  const navigate = useNavigate();

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="orb w-[500px] h-[500px] opacity-10 right-0 top-20"
        style={{ background: 'radial-gradient(circle, #9C4DFF, transparent 70%)' }} />
      <div className="orb w-[400px] h-[400px] opacity-10 -left-32 bottom-40"
        style={{ background: 'radial-gradient(circle, #22D3EE, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="section-tag mb-5 inline-flex"
            style={{ color: '#C084FC', background: 'rgba(156,77,255,0.12)', borderColor: 'rgba(156,77,255,0.25)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            3D & Visual Production
          </span>
          <h1 className="text-4xl lg:text-6xl font-black mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
            3D <span className="text-gradient">Visualization</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We transform concepts into photorealistic 3D experiences. From product renders to architectural flythroughs, our 3D studio creates visuals so real, they blur the line between digital and physical reality.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
          {services3D.map(({ icon, title, desc }) => (
            <div key={title} className="glass-card rounded-2xl p-5 hover-lift group">
              <span className="text-3xl mb-3 block">{icon}</span>
              <h4 className="text-white font-bold text-sm mb-2 group-hover:text-gradient transition-all duration-300"
                style={{ fontFamily: 'Syne, sans-serif' }}>
                {title}
              </h4>
              <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* ── IMAGE GALLERY ── */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-3">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <span className="section-tag" style={{ color: '#C084FC', background: 'rgba(156,77,255,0.12)', borderColor: 'rgba(156,77,255,0.25)' }}>
              Project Gallery
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
          <p className="text-center text-slate-500 text-sm mb-10">
            A selection of our 3D rendering and visualization projects
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative group cursor-pointer rounded-2xl overflow-hidden hover-lift"
                style={{ aspectRatio: '4/3' }}
                onClick={() => setLightboxImg(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <p className="text-white text-xs font-semibold" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {img.label}
                  </p>
                </div>
                <div className="absolute inset-0 rounded-2xl ring-2 ring-purple-500/0 group-hover:ring-purple-500/40 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* ── VIDEO SECTION ── */}
        <div>
          <div className="flex items-center gap-4 mb-3">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <span className="section-tag">3D Animation Reels</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
          <p className="text-center text-slate-500 text-sm mb-10">
            Watch our 3D visualization projects come alive with motion
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visualizationVideos.map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mt-16 glass-card rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="section-tag mb-4 inline-flex"
                style={{ color: '#C084FC', background: 'rgba(156,77,255,0.12)', borderColor: 'rgba(156,77,255,0.25)' }}>
                Our Process
              </span>
              <h3 className="text-3xl font-black mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                From Brief to <span className="text-gradient">Photorealism</span>
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Our 3D pipeline begins with a detailed brief and reference collection. Using industry-leading tools including Cinema 4D, Blender, Unreal Engine, and V-Ray, our artists build accurate 3D models, apply photorealistic materials and HDR lighting, and render frames with sub-millimeter detail.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { step: '01', label: 'Brief & Concept' },
                { step: '02', label: '3D Modelling' },
                { step: '03', label: 'Texturing & Lighting' },
                { step: '04', label: 'Render & Deliver' },
              ].map(({ step, label }) => (
                <div key={step} className="glass-card rounded-2xl p-5 text-center hover-lift">
                  <div className="text-2xl font-black text-gradient mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>{step}</div>
                  <div className="text-slate-300 text-sm font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-6">Ready to bring your product to life in 3D?</p>
          <button
            className="btn-primary px-10 py-4 text-base relative z-10"
            onClick={() => navigate('/contact')}
          >
            <span className="relative z-10">Start a 3D Project →</span>
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.95)' }}
          onClick={() => setLightboxImg(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImg.src} alt={lightboxImg.alt} className="w-full rounded-2xl shadow-2xl" />
            <p className="text-center text-slate-300 mt-4 text-sm font-medium">{lightboxImg.label}</p>
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}