import { useNavigate } from 'react-router-dom';
import VideoCard from '../../components/VideoCard';

const aiVideos = [
  { id: 'dQw4w9WgXcQ', title: 'AI-Generated Brand Film – Luxury Automotive', description: 'Full-length AI cinematic ad created using generative video and neural rendering.' },
  { id: 'L_jWHffIx5E', title: 'Product Launch AI Spot – Tech Wearable', description: 'Hyper-realistic product reveal ad generated entirely with AI tools.' },
  { id: 'kffacxfA7G4', title: 'AI Fashion Campaign – Summer Collection', description: 'Editorial-style AI video showcasing apparel in dynamic AI-generated environments.' },
  { id: '9bZkp7q19f0', title: 'Dynamic Ad Generation – E-Commerce', description: 'Personalized video ads auto-generated from product data using AI.' },
  { id: 'YuOBzWF0Aws', title: 'AI Motion Graphics – FinTech Brand', description: 'Data-driven motion design crafted with AI-assisted animation workflows.' },
  { id: 'RgKAFK5djSk', title: 'AI Food Photography – Restaurant Chain', description: 'Photorealistic AI-generated food imagery with cinematic color grading.' },
  { id: 'GaoLjmbB43k', title: 'Real Estate AI Walkthrough', description: 'AI-powered virtual property tour with synthetic lighting and staging.' },
  { id: 'e-ORhEE9VVg', title: 'AI Sports Campaign – Energy Drink', description: 'High-octane sports ad created using AI motion synthesis and scene generation.' },
  { id: 'uSD4vsh1zDA', title: 'AI Travel Ad – Luxury Resort', description: 'Dreamlike destination ad crafted using generative AI landscapes.' },
  { id: 'hT_nvWreIhg', title: 'Retail AI Promo – Festive Season', description: 'Seasonal promotional video batch-generated using AI with brand consistency.' },
];

const aiAvatarVideos = [
  { id: 'uelHwf8o7_U', title: 'CEO Brand Ambassador AI Avatar', description: 'Photorealistic AI avatar of brand spokesperson delivering custom messages at scale.' },
  { id: 'WPni755-Krg', title: 'Multilingual Product Explainer Avatar', description: 'One AI avatar, 12 languages – same face, personalized messaging for every market.' },
  { id: 'pRpeEdMmmQ0', title: 'AI News Presenter – Media Brand', description: 'News-style AI avatar delivering daily updates with consistent on-brand delivery.' },
  { id: '2Vv-BfVoq4g', title: 'E-Learning AI Instructor', description: 'Professional AI avatar tutor for scalable online education content.' },
  { id: 'lp-EO5I60KA', title: 'Customer Support AI Avatar', description: 'Interactive AI video avatar trained on brand voice for customer communication.' },
  { id: 'CevxZvSJLk8', title: 'Real Estate Agent AI Avatar', description: 'Property tour guide avatar generating hundreds of personalized listing videos.' },
];

const capabilities = [
  { icon: '🎬', label: 'Text-to-Video', color: '#3B82F6' },
  { icon: '🤖', label: 'AI Avatars', color: '#8B5CF6' },
  { icon: '✨', label: 'AI Upscaling', color: '#F59E0B' },
  { icon: '🎨', label: 'Style Transfer', color: '#EC4899' },
  { icon: '🗣️', label: 'Voice Cloning', color: '#10B981' },
  { icon: '🌐', label: 'Multilingual', color: '#C9481B' },
];

const stats = [
  { value: '10+', label: 'AI Video Campaigns', sub: 'delivered this quarter' },
  { value: '120+', label: 'Languages', sub: 'for AI Avatar delivery' },
  { value: '70%', label: 'Cost Reduction', sub: 'vs traditional production' },
  { value: '48h', label: 'Turnaround', sub: 'from brief to final cut' },
];

export default function AIAdvertising() {
  const navigate = useNavigate();

  return (
    <div style={{ background: 'var(--bg)' }}>

      {/* ── HERO ── */}
      <section className="page-hero">
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '760px', margin: '0 auto' }}>
          <span className="section-tag" style={{ marginBottom: '20px', display: 'inline-flex' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C9481B', display: 'inline-block' }} className="animate-pulse" />
            AI-Powered Creative
          </span>
          <h1 style={{
            fontFamily: "'Cormorant Garant', serif",
            fontWeight: 700,
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            lineHeight: 1.06,
            color: 'var(--text)',
            marginBottom: '20px',
          }}>
            AI <em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>Advertising</em>
          </h1>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            color: 'var(--text-muted)',
            lineHeight: 1.75,
            maxWidth: '580px',
            margin: '0 auto 36px',
          }}>
            We harness the power of generative AI to create advertising content that was previously impossible — at the speed of thought and the scale of machines.
          </p>

          {/* Capability chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            {capabilities.map(({ icon, label, color }) => (
              <div key={label} style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '8px 16px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '99px',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13px',
                fontWeight: 500,
                color: 'var(--text)',
                boxShadow: 'var(--shadow-sm)',
              }}>
                <span>{icon}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: 'var(--text)', padding: '40px 24px' }}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '24px',
          textAlign: 'center',
        }}>
          {stats.map(({ value, label, sub }) => (
            <div key={label}>
              <div style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#C9481B', lineHeight: 1 }}>
                {value}
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'rgba(253,252,248,0.8)', fontWeight: 500, marginTop: '4px' }}>{label}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: 'rgba(253,252,248,0.4)', marginTop: '2px' }}>{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── AI VIDEOS SECTION ── */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(60px, 8vw, 96px) 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          {/* Section header */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '40px' }}>
            <div>
              <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '14px' }}>AI Videos</span>
              <h2 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--text)', lineHeight: 1.1 }}>
                Generative AI Video Production
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: 'var(--text-muted)', marginTop: '8px', maxWidth: '480px' }}>
                From concept to final cut — fully AI-driven campaigns for brands of every scale.
              </p>
            </div>
            <button className="btn-outline" onClick={() => navigate('/contact')}>Start a Project →</button>
          </div>

          {/* Featured video + 3-col grid layout */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>

            {/* Top row: 1 large + 2 stacked */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '16px' }} className="ai-top-grid">
              {/* Featured */}
              <VideoCard key={aiVideos[0].id} {...aiVideos[0]} />
              {/* Two stacked */}
              <div style={{ display: 'grid', gap: '16px', gridTemplateRows: '1fr 1fr' }}>
                <VideoCard key={aiVideos[1].id} {...aiVideos[1]} />
                <VideoCard key={aiVideos[2].id} {...aiVideos[2]} />
              </div>
            </div>

            {/* Bottom row: 4 equal */}
            <div className="video-grid-4">
              {aiVideos.slice(3, 7).map(v => <VideoCard key={v.id} {...v} />)}
            </div>

            {/* Last row: 3 equal */}
            <div className="video-grid-3">
              {aiVideos.slice(7).map(v => <VideoCard key={v.id} {...v} />)}
            </div>
          </div>

          {/* Info card */}
          <div style={{
            marginTop: '40px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderLeft: '4px solid var(--orange)',
            borderRadius: '16px',
            padding: '28px 32px',
          }}>
            <h3 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 600, fontSize: '1.4rem', color: 'var(--text)', marginBottom: '10px' }}>
              What is AI Video Creation?
            </h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              AI video creation uses generative models — including text-to-video, image-to-video, and NeRF-based rendering — to produce cinematic advertising content from simple text prompts or reference imagery. At Trika Studio, we fine-tune these models on your brand guidelines to ensure every frame is on-brand, on-budget, and ahead of schedule. Studio-quality ad films at a fraction of traditional production cost.
            </p>
          </div>
        </div>
      </section>

      {/* ── AI AVATAR SECTION ── */}
      <section style={{ background: 'var(--bg-alt)', padding: 'clamp(60px, 8vw, 96px) 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          {/* Section header */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '40px' }}>
            <div>
              <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '14px', color: '#7C3AED', background: 'rgba(124,58,237,0.08)', borderColor: 'rgba(124,58,237,0.22)' }}>AI Avatars</span>
              <h2 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--text)', lineHeight: 1.1 }}>
                Photorealistic Digital Humans
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: 'var(--text-muted)', marginTop: '8px', maxWidth: '480px' }}>
                Scale your content across 120+ languages with AI-powered brand spokespersons.
              </p>
            </div>
          </div>

          {/* Grid: 3 columns */}
          <div className="video-grid-3">
            {aiAvatarVideos.map(v => (
              <VideoCard key={v.id} {...v} accentColor="#7C3AED" />
            ))}
          </div>

          {/* Info card */}
          <div style={{
            marginTop: '40px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderLeft: '4px solid #7C3AED',
            borderRadius: '16px',
            padding: '28px 32px',
          }}>
            <h3 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 600, fontSize: '1.4rem', color: 'var(--text)', marginBottom: '10px' }}>
              What are AI Avatars?
            </h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              AI Avatars are photorealistic, fully customizable digital human presenters that deliver your brand message with natural expressions, lip-sync, and voice — without any camera crew. Create a custom avatar from a single photo, then generate thousands of personalized video messages across 120+ languages.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'var(--text)', padding: 'clamp(60px, 8vw, 96px) 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: '#FDFCF8', lineHeight: 1.1, marginBottom: '16px' }}>
            Ready to create your<br />
            <em style={{ color: '#C9481B', fontStyle: 'italic' }}>own AI campaign?</em>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '15px', color: 'rgba(253,252,248,0.55)', marginBottom: '32px', lineHeight: 1.7 }}>
            Join 40+ brands already using Trika Studio's AI production pipeline.
          </p>
          <button className="btn-primary" style={{ padding: '14px 36px', fontSize: '15px' }} onClick={() => navigate('/contact')}>
            Start Your Project →
          </button>
        </div>
      </section>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          .ai-top-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}