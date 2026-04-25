const marketingServices = [
  {
    icon: '📱',
    title: 'Social Media Marketing',
    description: 'Strategic content creation, community management, and paid social campaigns across Instagram, LinkedIn, YouTube, and Meta platforms.',
    color: '#4D7EF5',
  },
  {
    icon: '📈',
    title: 'Performance Marketing',
    description: 'ROI-first paid media campaigns with AI-optimized bidding, audience targeting, and real-time budget allocation.',
    color: '#9C4DFF',
  },
  {
    icon: '🎯',
    title: 'Content Strategy',
    description: 'Data-informed content calendars, brand storytelling, and multi-format content that drives organic growth and engagement.',
    color: '#F5A623',
  },
  {
    icon: '🔍',
    title: 'SEO & Growth Hacking',
    description: 'Technical SEO, keyword strategy, and viral growth loops engineered to rank your brand at the top and keep it there.',
    color: '#22D3EE',
  },
  {
    icon: '✉️',
    title: 'Email & CRM Marketing',
    description: 'Personalized email journeys, automated drip sequences, and lifecycle marketing that turns leads into loyal customers.',
    color: '#F472B6',
  },
  {
    icon: '🤝',
    title: 'Influencer & Creator Marketing',
    description: 'Curated influencer partnerships and creator collaborations that amplify reach and build authentic brand credibility.',
    color: '#4ADE80',
  },
];

const benefits = [
  { metric: '3.2×', label: 'Average ROAS for our clients', description: 'Return on ad spend consistently above industry benchmarks through data-driven optimization.' },
  { metric: '180%', label: 'Average follower growth in 90 days', description: 'Organic social growth driven by strategic content and community engagement.' },
  { metric: '65%', label: 'Reduction in cost per acquisition', description: 'AI-powered targeting dramatically reduces wasted ad spend.' },
  { metric: '12M+', label: 'Total impressions managed monthly', description: 'Reach that translates into real brand awareness and measurable pipeline.' },
];

const platforms = [
  { name: 'Instagram', icon: '📸', color: '#E1306C' },
  { name: 'YouTube', icon: '▶️', color: '#FF0000' },
  { name: 'LinkedIn', icon: '💼', color: '#0077B5' },
  { name: 'Meta Ads', icon: '🎯', color: '#1877F2' },
  { name: 'Google Ads', icon: '🔍', color: '#4285F4' },
  { name: 'TikTok', icon: '🎵', color: '#010101' },
  { name: 'X / Twitter', icon: '🐦', color: '#1DA1F2' },
  { name: 'Pinterest', icon: '📌', color: '#E60023' },
];

// Placeholder gallery images for Digital Marketing
const dmGallery = [
  { src: 'https://picsum.photos/seed/dm-social-01/600/600', label: 'Social Media Campaign' },
  { src: 'https://picsum.photos/seed/dm-insta-02/600/600', label: 'Instagram Reels Content' },
  { src: 'https://picsum.photos/seed/dm-brand-03/600/600', label: 'Brand Awareness Campaign' },
  { src: 'https://picsum.photos/seed/dm-email-04/600/600', label: 'Email Campaign Creative' },
  { src: 'https://picsum.photos/seed/dm-ads-05/600/600', label: 'Paid Social Ads' },
  { src: 'https://picsum.photos/seed/dm-event-06/600/600', label: 'Event Marketing' },
  { src: 'https://picsum.photos/seed/dm-content-07/600/600', label: 'Content Marketing' },
  { src: 'https://picsum.photos/seed/dm-growth-08/600/600', label: 'Growth Campaign' },
];

export default function DigitalMarketing() {
  return (
    <section id="digital-marketing" className="relative py-28 overflow-hidden">
      {/* BG orbs */}
      <div className="orb w-[500px] h-[500px] opacity-10 left-0 top-0 -translate-x-1/2"
        style={{ background: 'radial-gradient(circle, #F5A623, transparent 70%)' }} />
      <div className="orb w-[400px] h-[400px] opacity-10 right-0 bottom-0"
        style={{ background: 'radial-gradient(circle, #4D7EF5, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="section-tag mb-5 inline-flex"
            style={{ color: '#FCD34D', background: 'rgba(245,166,35,0.12)', borderColor: 'rgba(245,166,35,0.25)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            Growth Marketing
          </span>
          <h2 className="text-4xl lg:text-6xl font-black mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            Digital <span className="text-gradient">Marketing</span>
          </h2>
          <p className="text-xl font-semibold text-slate-300 mb-5" style={{ fontFamily: 'Syne, sans-serif' }}>
            Social Media Marketing & Management
          </p>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            In today's attention economy, the brands that win are the ones that show up consistently, creatively, and strategically across every digital touchpoint. We build and manage social media presences that grow audiences, spark conversations, and convert followers into customers.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {marketingServices.map(({ icon, title, description, color }) => (
            <div key={title} className="glass-card rounded-2xl p-7 hover-lift group">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ background: `${color}15`, border: `1px solid ${color}25` }}
              >
                {icon}
              </div>
              <h3 className="text-white font-bold text-base mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
                {title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
              <div className="mt-4 h-0.5 w-10 rounded transition-all duration-300 group-hover:w-20"
                style={{ background: color }} />
            </div>
          ))}
        </div>

        {/* Benefits / Metrics */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="section-tag mb-4 inline-flex"
              style={{ color: '#FCD34D', background: 'rgba(245,166,35,0.12)', borderColor: 'rgba(245,166,35,0.25)' }}>
              Real Results
            </span>
            <h3 className="text-3xl lg:text-4xl font-black" style={{ fontFamily: 'Syne, sans-serif' }}>
              Why Social Media Growth <span className="text-gradient">Matters</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map(({ metric, label, description }) => (
              <div key={metric} className="glass-card rounded-2xl p-6 hover-lift group">
                <div className="text-4xl font-black mb-2 text-gradient" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {metric}
                </div>
                <div className="text-white font-semibold text-sm mb-2">{label}</div>
                <div className="text-slate-500 text-xs leading-relaxed">{description}</div>
              </div>
            ))}
          </div>

          {/* Additional benefits list */}
          <div className="mt-8 glass-card rounded-2xl p-8">
            <h4 className="text-white font-bold text-lg mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
              The Power of Strategic Social Media Growth
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Build a community of loyal brand advocates who market for you',
                'Drive organic traffic that converts at 3× higher rates than cold paid traffic',
                'Establish thought leadership that attracts premium clients and partnerships',
                'Create recurring touchpoints that keep your brand top-of-mind 24/7',
                'Generate first-party audience data for precision retargeting campaigns',
                'Leverage algorithm-friendly content formats for zero-cost viral reach',
                'Build social proof that reduces purchase hesitation and increases trust',
                'Create a defensible brand moat that competitors simply cannot buy',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-lg bg-yellow-500/15 border border-yellow-500/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Platform coverage */}
        <div className="mb-24">
          <p className="text-center text-slate-500 text-sm uppercase tracking-widest mb-8 font-medium">
            Platforms We Master
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map(({ name, icon, color }) => (
              <div key={name} className="glass-card rounded-2xl px-5 py-3 flex items-center gap-3 hover-lift">
                <span>{icon}</span>
                <span className="text-sm font-medium text-slate-300">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Gallery */}
        <div>
          <div className="flex items-center gap-4 mb-3">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <span className="section-tag"
              style={{ color: '#FCD34D', background: 'rgba(245,166,35,0.12)', borderColor: 'rgba(245,166,35,0.25)' }}>
              Campaign Gallery
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
          <p className="text-center text-slate-500 text-sm mb-10">
            Creative samples from our digital marketing campaigns
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {dmGallery.map((img, i) => (
              <div key={i} className="relative group rounded-2xl overflow-hidden hover-lift cursor-pointer"
                style={{ aspectRatio: '1/1' }}>
                <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <p className="text-white text-xs font-semibold">{img.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 glass-card rounded-3xl p-10 lg:p-14 text-center relative overflow-hidden">
          <div className="orb w-64 h-64 opacity-20 right-0 top-0"
            style={{ background: 'radial-gradient(circle, #F5A623, transparent)' }} />
          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-black mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
              Ready to <span className="text-gradient">Dominate</span> Your Market?
            </h3>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Let's build a digital marketing engine that makes your competitors take notice and your customers take action.
            </p>
            <button
              className="btn-primary px-10 py-4 text-base relative z-10"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">Let's Grow Together →</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}