import { useEffect, useRef } from 'react';
import Card from '../../components/Card';

const stats = [
  { value: '150+', label: 'Projects Delivered', color: '#4D7EF5' },
  { value: '98%', label: 'Client Satisfaction', color: '#9C4DFF' },
  { value: '40+', label: 'Happy Brands', color: '#F5A623' },
  { value: '5★', label: 'Average Rating', color: '#22D3EE' },
];

const services = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
    title: 'AI-Powered Advertising',
    description: 'Hyper-personalized campaigns driven by machine learning. We optimize every touchpoint to maximize ROI and brand impact.',
    tag: 'AI & ML',
    accentColor: '#4D7EF5',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>,
    title: '3D Visualization',
    description: 'Photorealistic renders and immersive 3D product experiences that elevate your brand storytelling to another dimension.',
    tag: '3D & VR',
    accentColor: '#9C4DFF',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    title: 'Digital Marketing',
    description: 'Full-funnel digital strategies — from social media mastery to performance marketing — that drive measurable growth.',
    tag: 'Growth',
    accentColor: '#F5A623',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
    title: 'AI Avatar Creation',
    description: 'Studio-quality AI avatars and synthetic media that scale your content production while maintaining authentic brand voice.',
    tag: 'AI Video',
    accentColor: '#22D3EE',
  },
];

const trustedBy = ['TechCorp', 'NexaDigital', 'BrandFlow', 'MediaPro', 'StartupX', 'GrowthLab'];

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth: w, innerHeight: h } = window;
      const x = (clientX / w - 0.5) * 30;
      const y = (clientY / h - 0.5) * 30;
      const orb1 = el.querySelector('.hero-orb-1');
      const orb2 = el.querySelector('.hero-orb-2');
      if (orb1) orb1.style.transform = `translate(${x * -0.5}px, ${y * -0.5}px)`;
      if (orb2) orb2.style.transform = `translate(${x * 0.7}px, ${y * 0.7}px)`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section id="home" className="relative">
      {/* ─── HERO ─── */}
      <div ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-12 px-6">
        {/* Background orbs */}
        <div
          className="hero-orb-1 orb w-[700px] h-[700px] opacity-20 -top-48 -left-48"
          style={{ background: 'radial-gradient(circle, #4D7EF5, transparent 70%)', transition: 'transform 0.8s ease' }}
        />
        <div
          className="hero-orb-2 orb w-[500px] h-[500px] opacity-15 -bottom-32 right-0"
          style={{ background: 'radial-gradient(circle, #9C4DFF, transparent 70%)', transition: 'transform 0.8s ease' }}
        />
        <div
          className="orb w-64 h-64 opacity-10 top-1/2 right-1/4"
          style={{ background: 'radial-gradient(circle, #F5A623, transparent 70%)' }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="animate-fade-in">
            <span className="section-tag mb-6 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              AI-First Digital Agency
            </span>
          </div>

          <h1
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight mb-8 animate-slide-up"
            style={{ fontFamily: 'Syne, sans-serif', animationDelay: '0.1s', animationFillMode: 'both' }}
          >
            We Build{' '}
            <span className="text-gradient">AI-Powered</span>
            <br />
            Digital Experiences
          </h1>

          <p
            className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12 animate-slide-up"
            style={{ animationDelay: '0.25s', animationFillMode: 'both' }}
          >
            From AI-generated advertising and hyper-realistic 3D visuals to full-funnel digital marketing — Trika Studio is where{' '}
            <span className="text-slate-200 font-medium">bold creativity</span> meets{' '}
            <span className="text-slate-200 font-medium">cutting-edge technology</span> to build brands that command attention.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up"
            style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
          >
            <button className="btn-primary text-base px-8 py-4 relative z-10"
              onClick={() => document.getElementById('ai-advertising')?.scrollIntoView({ behavior: 'smooth' })}>
              <span className="relative z-10">View Our Work →</span>
            </button>
            <button className="btn-outline text-base px-8 py-4"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Us
            </button>
          </div>

          {/* Floating badges */}
          <div
            className="mt-16 flex flex-wrap justify-center gap-3 animate-fade-in"
            style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
          >
            {['AI Advertising', '3D Visualization', 'Social Media', 'AI Avatars', 'Performance Marketing', 'Brand Identity'].map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-4 py-2 rounded-full glass-card text-slate-300 border border-white/5 hover:border-blue-500/30 hover:text-white transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
          style={{ animationDelay: '1s', animationFillMode: 'both' }}>
          <span className="text-slate-600 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-slate-600 to-transparent animate-pulse" />
        </div>
      </div>

      {/* ─── STATS ─── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 border-t border-white/5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ value, label, color }) => (
            <div key={label} className="glass-card rounded-2xl p-6 text-center hover-lift group">
              <div
                className="text-4xl lg:text-5xl font-black mb-2 group-hover:scale-110 transition-transform duration-300"
                style={{ fontFamily: 'Syne, sans-serif', color }}
              >
                {value}
              </div>
              <div className="text-slate-400 text-sm font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── SERVICES OVERVIEW ─── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="section-tag mb-5 inline-flex">Our Expertise</span>
          <h2 className="text-4xl lg:text-5xl font-black mb-5" style={{ fontFamily: 'Syne, sans-serif' }}>
            What We <span className="text-gradient">Create</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We blend AI, design, and strategy to craft digital experiences that don't just look stunning — they convert, engage, and grow your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.title} {...service} />
          ))}
        </div>
      </div>

      {/* ─── TRUSTED BY ─── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 border-t border-white/5">
        <p className="text-center text-slate-600 text-sm uppercase tracking-widest mb-10 font-medium">
          Trusted by forward-thinking brands
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {trustedBy.map((brand) => (
            <span
              key={brand}
              className="text-xl font-bold text-slate-700 hover:text-slate-400 transition-colors duration-300 cursor-default"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>

      {/* ─── WHY TRIKA ─── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="relative glass-card rounded-3xl p-10 lg:p-16 overflow-hidden">
          <div className="orb w-80 h-80 opacity-20 -right-20 -top-20"
            style={{ background: 'radial-gradient(circle, #9C4DFF, transparent)' }} />
          <div className="orb w-60 h-60 opacity-15 -left-16 -bottom-16"
            style={{ background: 'radial-gradient(circle, #4D7EF5, transparent)' }} />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-tag mb-5 inline-flex">Why Trika Studio</span>
              <h2 className="text-4xl lg:text-5xl font-black mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                Intelligence meets{' '}
                <span className="text-gradient">Imagination</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                We don't just deliver deliverables — we build digital ecosystems. Every project at Trika Studio is powered by proprietary AI pipelines, elite creative talent, and a relentless obsession with results.
              </p>
              <button
                className="btn-primary relative z-10"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10">Meet the Team →</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'AI-First Pipeline', desc: 'Every workflow is supercharged with the latest AI models' },
                { title: 'Rapid Execution', desc: 'From concept to campaign in record time without sacrificing quality' },
                { title: 'Data-Driven', desc: 'Every creative decision backed by real-time analytics and insights' },
                { title: 'Full Ownership', desc: 'Complete creative and strategic accountability from day one' },
              ].map(({ title, desc }) => (
                <div key={title} className="glass-card rounded-2xl p-5 hover-lift">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/20 flex items-center justify-center mb-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4D7EF5" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h4 className="text-white font-bold text-sm mb-1.5" style={{ fontFamily: 'Syne, sans-serif' }}>{title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}