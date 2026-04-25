import { useNavigate } from 'react-router-dom';

const team = [
  {
    name: 'Siddhartha Raj',
    role: 'Founder & CEO',
    avatar: 'SR',
    color: '#4D7EF5',
    bio: 'Siddhartha is a visionary entrepreneur with over a decade of experience at the intersection of technology, creativity, and business strategy. After building and scaling multiple digital ventures, he founded Trika Studio with a singular mission: to give every brand access to AI-powered creative capabilities.',
    expertise: ['Business Strategy', 'AI Product Vision', 'Brand Architecture', 'Investor Relations'],
    social: { linkedin: '#', twitter: '#', instagram: '#' },
  },
  {
    name: 'Tanvii',
    role: 'AI Specialist & Creative Director',
    avatar: 'T',
    color: '#9C4DFF',
    bio: "Tanvii is Trika Studio's creative and technical force — bridging artistic direction and AI. She leads AI pipeline development and creative production.",
    expertise: ['Generative AI', 'AI Video Production', 'Creative Direction', 'AI Avatar Design'],
    social: { linkedin: '#', twitter: '#', instagram: '#' },
  },
  {
    name: 'Sagar Anand',
    role: 'Performance Marketer',
    avatar: 'SA',
    color: '#FF7A4D',
    bio: 'Sagar specializes in data-driven marketing strategies, performance campaigns, and scaling brands through paid media and analytics.',
    expertise: ['Performance Marketing', 'Paid Ads', 'Growth Strategy', 'Analytics'],
    social: { linkedin: '#', twitter: '#', instagram: '#' },
  }
];

const values = [
  { icon: '⚡', title: 'Innovation First', desc: 'We embrace emerging technology before it becomes mainstream, giving our clients a lasting competitive edge.' },
  { icon: '🎯', title: 'Results-Obsessed', desc: 'Every creative decision is anchored in data. Beautiful work that doesn\'t perform is just expensive art.' },
  { icon: '🤝', title: 'True Partnership', desc: 'We integrate deeply with your team, operating as a strategic extension of your business, not just a vendor.' },
  { icon: '🌟', title: 'Uncompromising Quality', desc: 'We ship work we\'re proud to put our name on — because your brand deserves nothing less than extraordinary.' },
];

const milestones = [
  { year: '2021', event: 'Trika Studio founded in Gurugram with a team of 3' },
  { year: '2022', event: 'Launched proprietary AI advertising pipeline; first 10 brand clients' },
  { year: '2023', event: 'Expanded into 3D visualization; grew team to 15; ₹5Cr revenue milestone' },
  { year: '2024', event: 'Launched AI Avatar production service; 40+ brand clients across India' },
  { year: '2025', event: 'Pan-Asia expansion; partnering with leading AI platforms globally' },
];

export default function About() {
  const navigate = useNavigate();

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="orb w-[500px] h-[500px] opacity-10 -right-32 top-0"
        style={{ background: 'radial-gradient(circle, #4D7EF5, transparent 70%)' }} />
      <div className="orb w-[400px] h-[400px] opacity-10 left-0 bottom-0"
        style={{ background: 'radial-gradient(circle, #9C4DFF, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="section-tag mb-5 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Our Story
          </span>
          <h1 className="text-4xl lg:text-6xl font-black mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
            About <span className="text-gradient">Trika Studio</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Trika Studio was born from a belief that the future of marketing is intelligent, adaptive, and beautifully human — even when it's powered by machines.
          </p>
        </div>

        {/* Company Description */}
        <div className="glass-card rounded-3xl p-10 lg:p-14 mb-20 relative overflow-hidden">
          <div className="orb w-72 h-72 opacity-15 -right-16 -top-16"
            style={{ background: 'radial-gradient(circle, #4D7EF5, transparent)' }} />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-black mb-5" style={{ fontFamily: 'Syne, sans-serif' }}>
                We're a <span className="text-gradient">New Kind</span> of Digital Agency
              </h3>
              <div className="space-y-4 text-slate-400 leading-relaxed text-sm">
                <p>
                  Trika Studio is an AI-first creative agency headquartered in Gurugram, India. We work at the convergence of artificial intelligence, cinematic 3D production, and data-driven marketing to help ambitious brands punch far above their weight class in the digital arena.
                </p>
                <p>
                  What sets us apart isn't just the technology — it's how we use it. Our team of AI engineers, creative directors, 3D artists, and growth strategists work in a seamlessly integrated studio environment where machine intelligence amplifies human creativity rather than replacing it.
                </p>
                <p>
                  From disruptive startups to established enterprises, we've partnered with brands across fintech, real estate, fashion, F&B, and technology to build digital presences that command attention, inspire action, and drive measurable business growth.
                </p>
              </div>
            </div>
            <div className="space-y-5">
              {[
                { label: 'Our Mission', icon: '🎯', text: 'To democratize access to world-class AI-powered creative capabilities, enabling every ambitious brand to compete at the highest level of digital excellence.' },
                { label: 'Our Vision', icon: '🔭', text: 'To become Asia\'s most innovative AI creative studio — a benchmark for what\'s possible when technology, creativity, and strategy converge.' },
                { label: 'Our Purpose', icon: '💡', text: 'We create digital experiences that make people feel something. Because in a world of infinite content, the brands that win are the ones that move people.' },
              ].map(({ label, icon, text }) => (
                <div key={label} className="glass-card rounded-2xl p-5 hover-lift">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl">{icon}</span>
                    <h4 className="text-white font-bold text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>{label}</h4>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="section-tag mb-4 inline-flex">Our Values</span>
            <h3 className="text-3xl lg:text-4xl font-black" style={{ fontFamily: 'Syne, sans-serif' }}>
              What We <span className="text-gradient">Stand For</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="glass-card rounded-2xl p-6 text-center hover-lift group">
                <span className="text-4xl block mb-4">{icon}</span>
                <h4 className="text-white font-bold mb-2 group-hover:text-gradient transition-all duration-300"
                  style={{ fontFamily: 'Syne, sans-serif' }}>
                  {title}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="section-tag mb-4 inline-flex">Our Journey</span>
            <h3 className="text-3xl lg:text-4xl font-black" style={{ fontFamily: 'Syne, sans-serif' }}>
              Built With <span className="text-gradient">Purpose</span>
            </h3>
          </div>
          <div className="relative">
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />
            <div className="space-y-8">
              {milestones.map(({ year, event }, i) => (
                <div key={year} className={`flex gap-6 lg:gap-0 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start`}>
                  <div className={`hidden lg:block flex-1 ${i % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    {i % 2 === 0 && (
                      <div className="glass-card rounded-2xl p-5 inline-block hover-lift max-w-xs">
                        <div className="text-gradient font-black text-2xl mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>{year}</div>
                        <p className="text-slate-400 text-sm">{event}</p>
                      </div>
                    )}
                  </div>
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-2 border-bg flex items-center justify-center shadow-lg shadow-blue-500/30">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                  </div>
                  <div className="flex-1 lg:hidden pl-2">
                    <div className="glass-card rounded-2xl p-5 hover-lift">
                      <div className="text-gradient font-black text-xl mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>{year}</div>
                      <p className="text-slate-400 text-sm">{event}</p>
                    </div>
                  </div>
                  <div className={`hidden lg:block flex-1 ${i % 2 !== 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    {i % 2 !== 0 && (
                      <div className="glass-card rounded-2xl p-5 inline-block hover-lift max-w-xs">
                        <div className="text-gradient font-black text-2xl mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>{year}</div>
                        <p className="text-slate-400 text-sm">{event}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <div className="text-center mb-16">
            <span className="section-tag mb-4 inline-flex">The Team</span>
            <h3 className="text-3xl lg:text-4xl font-black" style={{ fontFamily: 'Syne, sans-serif' }}>
              The Minds Behind <span className="text-gradient">Trika Studio</span>
            </h3>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm">
              A small team of deep experts who obsess over craft, move fast, and deliver extraordinary work.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {team.map(({ name, role, avatar, color, bio, expertise, social }) => (
              <div key={name} className="glass-card rounded-3xl p-8 hover-lift group relative overflow-hidden">
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-10"
                  style={{ background: `radial-gradient(circle, ${color}, transparent)` }} />

                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black text-white shadow-lg flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${color}60, ${color}30)`, border: `2px solid ${color}40`, fontFamily: 'Syne, sans-serif' }}
                  >
                    {avatar}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>{name}</h3>
                    <p className="text-xs font-medium mt-1" style={{ color }}>{role}</p>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">{bio}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {expertise.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{ background: `${color}12`, color: color, border: `1px solid ${color}25` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {Object.entries(social).map(([platform, href]) => (
                    <a
                      key={platform}
                      href={href}
                      className="w-8 h-8 glass-card rounded-lg flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 transition-all duration-300"
                    >
                      {platform === 'linkedin' && (
                        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
                        </svg>
                      )}
                      {platform === 'twitter' && (
                        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      )}
                      {platform === 'instagram' && (
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-slate-400 mb-6">Want to work with us?</p>
          <button
            className="btn-primary px-10 py-4 text-base relative z-10"
            onClick={() => navigate('/contact')}
          >
            <span className="relative z-10">Get in Touch →</span>
          </button>
        </div>
      </div>
    </section>
  );
}