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
];

const aiAvatarVideos = [
  { id: 'uelHwf8o7_U', title: 'CEO Brand Ambassador AI Avatar', description: 'Photorealistic AI avatar of brand spokesperson delivering custom messages at scale.' },
  { id: 'WPni755-Krg', title: 'Multilingual Product Explainer Avatar', description: 'One AI avatar, 12 languages – same face, personalized messaging for every market.' },
  { id: 'pRpeEdMmmQ0', title: 'AI News Presenter – Media Brand', description: 'News-style AI avatar delivering daily updates with consistent on-brand delivery.' },
  { id: '2Vv-BfVoq4g', title: 'E-Learning AI Instructor', description: 'Professional AI avatar tutor for scalable online education content.' },
  { id: 'lp-EO5I60KA', title: 'Customer Support AI Avatar', description: 'Interactive AI video avatar trained on brand voice for customer communication.' },
  { id: 'CevxZvSJLk8', title: 'Real Estate Agent AI Avatar', description: 'Property tour guide avatar generating hundreds of personalized listing videos.' },
  { id: 'hT_nvWreIhg', title: 'Retail AI Promo – Festive Season', description: 'Seasonal promotional video batch-generated using AI with brand consistency.' },
  { id: 'jNQXAC9IVRw', title: 'Healthcare Awareness AI Avatar', description: 'Multilingual health campaign avatar delivering sensitive information with care.' },
];

const capabilities = [
  { icon: '🎬', label: 'Text-to-Video' },
  { icon: '🤖', label: 'AI Avatars' },
  { icon: '✨', label: 'AI Upscaling' },
  { icon: '🎨', label: 'Style Transfer' },
  { icon: '🗣️', label: 'Voice Cloning' },
  { icon: '🌐', label: 'Multilingual' },
];

function VideoCollage({ videos, accentColor }) {
  return (
    <>
      <div className="ai-collage-desktop">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '12px', marginBottom: '12px' }}>
          <VideoCard {...videos[0]} accentColor={accentColor} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <VideoCard {...videos[1]} accentColor={accentColor} />
            <VideoCard {...videos[2]} accentColor={accentColor} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '12px' }}>
          {videos.slice(3, 6).map(v => (
            <VideoCard key={v.id} {...v} accentColor={accentColor} />
          ))}
        </div>
        {videos.length > 6 && (
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${videos.slice(6).length}, 1fr)`, gap: '12px' }}>
            {videos.slice(6).map(v => (
              <VideoCard key={v.id} {...v} accentColor={accentColor} />
            ))}
          </div>
        )}
      </div>
      <div className="ai-collage-mobile">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          {videos.map((v, i) => (
            <div key={v.id} style={{ gridColumn: i === 0 ? '1 / -1' : 'auto' }}>
              <VideoCard {...v} accentColor={accentColor} />
            </div>
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

      {/* ── HERO ── */}
      <section className="page-hero">
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <span className="section-tag" style={{ marginBottom: '18px', display: 'inline-flex' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C9481B', display: 'inline-block' }} className="animate-pulse" />
            AI-Powered Creative
          </span>
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
                padding: '7px 14px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '99px',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '12.5px', fontWeight: 500, color: 'var(--text)',
                boxShadow: 'var(--shadow-sm)',
              }}>
                <span>{icon}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI VIDEOS SECTION ── */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(56px, 8vw, 90px) 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', marginBottom: '36px' }}>
            <div>
              <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '12px' }}>AI Videos</span>
              <h2 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--text)', lineHeight: 1.1 }}>
                Generative AI Video Production
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13.5px', color: 'var(--text-muted)', marginTop: '6px', maxWidth: '460px' }}>
                From concept to final cut — fully AI-driven campaigns for brands of every scale.
              </p>
            </div>
            <button className="btn-outline" style={{ flexShrink: 0 }} onClick={() => navigate('/contact')}>Start a Project →</button>
          </div>

          <VideoCollage videos={aiVideos} accentColor="#C9481B" />

          <div style={{ marginTop: '36px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderLeft: '4px solid var(--orange)', borderRadius: '14px', padding: '24px 28px' }}>
            <h3 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 600, fontSize: '1.3rem', color: 'var(--text)', marginBottom: '8px' }}>
              What is AI Video Creation?
            </h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              AI video creation uses generative models — including text-to-video, image-to-video, and NeRF-based rendering — to produce cinematic advertising content from simple text prompts. At Trika Studio, we fine-tune these models on your brand guidelines to ensure every frame is on-brand, on-budget, and ahead of schedule.
            </p>
          </div>
        </div>
      </section>

      {/* ── AI AVATAR SECTION ── */}
      <section style={{ background: 'var(--bg-alt)', padding: 'clamp(56px, 8vw, 90px) 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', marginBottom: '36px' }}>
            <div>
              <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '12px', color: '#7C3AED', background: 'rgba(124,58,237,0.08)', borderColor: 'rgba(124,58,237,0.22)' }}>AI Avatars</span>
              <h2 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--text)', lineHeight: 1.1 }}>
                Photorealistic Digital Humans
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13.5px', color: 'var(--text-muted)', marginTop: '6px', maxWidth: '440px' }}>
                Scale your content across 120+ languages with AI-powered brand spokespersons.
              </p>
            </div>
          </div>

          <VideoCollage videos={aiAvatarVideos} accentColor="#7C3AED" />

          <div style={{ marginTop: '32px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderLeft: '4px solid #7C3AED', borderRadius: '14px', padding: '24px 28px' }}>
            <h3 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 600, fontSize: '1.3rem', color: 'var(--text)', marginBottom: '8px' }}>
              What are AI Avatars?
            </h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              AI Avatars are photorealistic, fully customizable digital human presenters that deliver your brand message with natural expressions, lip-sync, and voice — without any camera crew. Create a custom avatar from a single photo, then generate thousands of personalized video messages across 120+ languages.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA — cream background matching Visualization page ── */}
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
        .ai-collage-desktop { display: block; }
        .ai-collage-mobile  { display: none; }
        @media (max-width: 768px) {
          .ai-collage-desktop { display: none !important; }
          .ai-collage-mobile  { display: block !important; }
        }
      `}</style>
    </div>
  );
}