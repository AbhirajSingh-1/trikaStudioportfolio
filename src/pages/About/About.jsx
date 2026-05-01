import { useNavigate } from 'react-router-dom';

const team = [
  {
    name: 'Siddhartha Raj',
    role: 'Founder & CEO',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    initials: 'SR',
    color: '#C9481B',
    bio: 'A visionary entrepreneur with over a decade of experience at the intersection of technology, creativity, and business strategy. Founded Trika Studio to democratize AI-powered creative capabilities for brands of every scale.',
    expertise: ['Business Strategy', 'AI Product Vision', 'Brand Architecture', 'Investor Relations'],
  },
  {
    name: 'Tanvi Priya',
    role: 'AI Specialist & Social Video Manager',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    initials: 'T',
    color: '#8B5CF6',
    bio: "An innovative blend of creativity and technology, she drives Trika’s AI vision and social video strategy. From building intelligent AI pipelines to crafting visually compelling content, she transforms complex tech into engaging digital experiences that captivate audiences and elevate brand storytelling.",
    expertise: ['Generative AI', 'AI Video Production', 'Creative Direction', 'AI Avatar Design'],
  },
  {
    name: 'Sagar Randi',
    role: 'Head of Performance Marketing',
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    initials: 'SA',
    color: '#10B981',
    bio: 'Specializes in data-driven marketing strategies, performance campaigns, and scaling brands through precision paid media. Sagar has managed over ₹15Cr in ad spend across India.',
    expertise: ['Performance Marketing', 'Paid Ads', 'Growth Strategy', 'Analytics'],
  },
];

const values = [
  { icon: '⚡', title: 'Innovation First', desc: 'We embrace emerging technology before it becomes mainstream, giving our clients a lasting competitive edge.' },
  { icon: '🎯', title: 'Results-Obsessed', desc: 'Every creative decision is anchored in data. Beautiful work that doesn\'t perform is just expensive art.' },
  { icon: '🤝', title: 'True Partnership', desc: 'We integrate deeply with your team, operating as a strategic extension of your business, not just a vendor.' },
  { icon: '🌟', title: 'Uncompromising Quality', desc: 'We ship work we\'re proud to put our name on — because your brand deserves nothing less than extraordinary.' },
];

const milestones = [
  { year: '2021', label: 'Founded', detail: 'Gurugram, team of 3' },
  { year: '2022', label: 'AI Pipeline', detail: 'First 10 brand clients' },
  { year: '2023', label: '₹5Cr Revenue', detail: 'Team grew to 15' },
  { year: '2024', label: 'AI Avatars', detail: '40+ brand clients' },
  { year: '2025', label: 'Pan-Asia', detail: 'Global AI partnerships' },
];

const stats = [
  { value: '40+', label: 'Brand Clients' },
  { value: '150+', label: 'Projects Delivered' },
  { value: '5', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
];

export default function About() {
  const navigate = useNavigate();

  return (
    <div style={{ background: 'var(--bg)' }}>

      {/* ── HERO ── */}
      <section className="page-hero">
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '680px', margin: '0 auto' }}>
          <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '20px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C9481B', display: 'inline-block' }} className="animate-pulse" />
            Our Story
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(2.2rem, 5.5vw, 4rem)', lineHeight: 1.06, color: 'var(--text)', marginBottom: '18px' }}>
            About <em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>Trika Studio</em>
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)', color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: '520px', margin: '0 auto' }}>
            Born from a belief that the future of marketing is intelligent, adaptive, and beautifully human — even when it's powered by machines.
          </p>
        </div>
      </section>

      {/* ── STATS BAR — cream background matching Visualization page ── */}
      <section style={{ background: 'var(--bg-alt)', padding: '36px 24px', borderTop: '3px solid var(--orange)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', textAlign: 'center' }} className="about-stats-grid">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: 'var(--orange)', lineHeight: 1 }}>{value}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'var(--text-muted)', marginTop: '5px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT DESCRIPTION ── */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(56px, 8vw, 90px) 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }} className="about-desc-grid">
            <div>
              <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '20px' }}>Who We Are</span>
              <h2 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--text)', lineHeight: 1.08, marginBottom: '20px' }}>
                A New Kind of{' '}
                <em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>Creative Agency</em>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  'Trika Studio is an AI-first creative agency headquartered in Gurugram, India. We work at the convergence of artificial intelligence, cinematic 3D production, and data-driven marketing to help ambitious brands punch far above their weight class.',
                  "What sets us apart isn't just the technology — it's how we use it. Our team of AI engineers, creative directors, 3D artists, and growth strategists work in a seamlessly integrated studio where machine intelligence amplifies human creativity.",
                  'From disruptive startups to established enterprises, we\'ve partnered with brands across fintech, real estate, fashion, F&B, and technology to build digital presences that command attention and drive measurable business growth.',
                ].map((text, i) => (
                  <p key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.8 }}>{text}</p>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { label: 'Our Mission', icon: '🎯', text: 'To democratize access to world-class AI-powered creative capabilities, enabling every ambitious brand to compete at the highest level of digital excellence.' },
                { label: 'Our Vision', icon: '🔭', text: "To become Asia's most innovative AI creative studio — a benchmark for what's possible when technology, creativity, and strategy converge." },
                { label: 'Our Purpose', icon: '💡', text: 'We create digital experiences that make people feel something. In a world of infinite content, the brands that win are the ones that move people.' },
              ].map(({ label, icon, text }) => (
                <div key={label} style={{
                  padding: '22px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--orange)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(201,72,27,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <span style={{ fontSize: '1.3rem' }}>{icon}</span>
                    <h4 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 600, fontSize: '1.1rem', color: 'var(--text)' }}>{label}</h4>
                  </div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.75 }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ background: 'var(--bg-alt)', padding: 'clamp(56px, 8vw, 90px) 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '14px' }}>Our Values</span>
            <h2 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--text)' }}>
              What We <em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>Stand For</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px' }} className="values-grid">
            {values.map(({ icon, title, desc }) => (
              <div key={title} style={{
                padding: '28px 22px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                textAlign: 'center',
                transition: 'all 0.25s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--orange)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(201,72,27,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '14px' }}>{icon}</span>
                <h4 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 600, fontSize: '1.05rem', color: 'var(--text)', marginBottom: '8px' }}>{title}</h4>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12.5px', color: 'var(--text-muted)', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPACT MILESTONES ── */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(48px, 7vw, 72px) 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '12px' }}>Our Journey</span>
            <h2 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: 'var(--text)' }}>
              5 Years of <em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>Innovation</em>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px', position: 'relative' }} className="milestones-grid">
            <div style={{
              position: 'absolute', top: '28px', left: '10%', right: '10%',
              height: '2px', background: 'linear-gradient(90deg, var(--orange) 0%, rgba(201,72,27,0.15) 100%)',
              zIndex: 0,
            }} className="milestone-line" />

            {milestones.map(({ year, label, detail }, i) => (
              <div key={year} style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '10px' }}>
                <div style={{
                  width: '56px', height: '56px', borderRadius: '50%',
                  background: i === milestones.length - 1 ? '#C9481B' : 'var(--bg-card)',
                  border: `2px solid ${i === milestones.length - 1 ? '#C9481B' : 'var(--border-dark)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: i === milestones.length - 1 ? '0 4px 16px rgba(201,72,27,0.3)' : 'var(--shadow-sm)',
                }}>
                  <span style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: '0.85rem', color: i === milestones.length - 1 ? '#fff' : '#C9481B' }}>{year}</span>
                </div>
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '13px', color: 'var(--text)', marginBottom: '3px' }}>{label}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11.5px', color: 'var(--text-muted)' }}>{detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section style={{ background: 'var(--bg-alt)', padding: 'clamp(56px, 8vw, 90px) 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '14px' }}>The Team</span>
            <h2 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--text)', marginBottom: '10px' }}>
              The Minds Behind <em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>Trika Studio</em>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: 'var(--text-muted)', maxWidth: '440px', margin: '0 auto' }}>
              A small team of deep experts who obsess over craft, move fast, and deliver extraordinary work.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="team-grid">
            {team.map(({ name, role, avatar, initials, color, bio, expertise }) => (
              <div key={name} style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '20px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 16px 40px ${color}18`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ position: 'relative', height: '200px', background: `linear-gradient(135deg, ${color}15, ${color}05)`, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ position: 'absolute', width: '160px', height: '160px', borderRadius: '50%', background: `${color}08`, top: '-20px', right: '-20px' }} />
                  <div style={{ position: 'absolute', width: '100px', height: '100px', borderRadius: '50%', background: `${color}06`, bottom: '-10px', left: '-10px' }} />
                  <img src={avatar} alt={name} style={{ width: '110px', height: '110px', borderRadius: '50%', objectFit: 'cover', border: `3px solid ${color}40`, boxShadow: `0 8px 28px ${color}20`, position: 'relative', zIndex: 1 }}
                    onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
                  <div style={{ display: 'none', width: '110px', height: '110px', borderRadius: '50%', background: `linear-gradient(135deg, ${color}40, ${color}20)`, border: `3px solid ${color}40`, alignItems: 'center', justifyContent: 'center', fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: '2rem', color: color, position: 'relative', zIndex: 1 }}>
                    {initials}
                  </div>
                </div>
                <div style={{ padding: '22px 22px 24px' }}>
                  <h3 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: '1.25rem', color: 'var(--text)', marginBottom: '3px' }}>{name}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 500, color: color, marginBottom: '14px', letterSpacing: '0.02em' }}>{role}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>{bio}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {expertise.map(tag => (
                      <span key={tag} style={{ fontSize: '10.5px', padding: '3px 10px', borderRadius: '99px', background: `${color}10`, color: color, border: `1px solid ${color}25`, fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — cream background matching Visualization page ── */}
      <section style={{ background: 'var(--bg-alt)', padding: 'clamp(56px, 8vw, 90px) 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '18px' }}>Let's Connect</span>
          <h2 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--text)', lineHeight: 1.1, marginBottom: '14px' }}>
            Want to work <em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>with us?</em>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: 'var(--text-muted)', marginBottom: '28px' }}>
            We'd love to hear about your project.
          </p>
          <button className="btn-primary" style={{ padding: '13px 32px', fontSize: '15px' }} onClick={() => navigate('/contact')}>
            Get in Touch →
          </button>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .about-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .about-desc-grid { grid-template-columns: 1fr !important; }
          .values-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .team-grid { grid-template-columns: 1fr !important; max-width: 460px; margin: 0 auto; }
          .milestones-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .milestone-line { display: none !important; }
        }
        @media (max-width: 640px) {
          .values-grid { grid-template-columns: 1fr !important; }
          .milestones-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 10px !important; }
        }
        @media (max-width: 380px) {
          .milestones-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}