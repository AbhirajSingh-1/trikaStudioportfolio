import VideoCard from '../../components/VideoCard';

// Replace these YouTube video IDs with your actual content
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
  { id: 'KQ6zr6kCPj8', title: 'Fitness Coach AI Avatar', description: 'Energetic AI fitness personality delivering workout instructions and motivation.' },
  { id: 'YbJOTdZBX1g', title: 'Beauty Brand AI Ambassador', description: 'Diverse AI avatar lineup for inclusive beauty product communication.' },
  { id: 'x8zRL1KJrys', title: 'Finance Advisor AI Avatar', description: 'Trust-building AI avatar for financial products with professional persona.' },
  { id: 'jNQXAC9IVRw', title: 'HR Onboarding AI Avatar', description: 'Scalable corporate onboarding video series powered by custom AI avatar.' },
];

const capabilities = [
  { icon: '🎬', label: 'Text-to-Video' },
  { icon: '🤖', label: 'AI Avatars' },
  { icon: '✨', label: 'AI Upscaling' },
  { icon: '🎨', label: 'Style Transfer' },
  { icon: '🗣️', label: 'Voice Cloning' },
  { icon: '🌐', label: 'Multilingual' },
];

export default function AIAdvertising() {
  return (
    <section id="ai-advertising" className="relative py-28 overflow-hidden">
      {/* BG orbs */}
      <div className="orb w-[600px] h-[600px] opacity-10 -left-64 top-0"
        style={{ background: 'radial-gradient(circle, #4D7EF5, transparent 70%)' }} />
      <div className="orb w-[400px] h-[400px] opacity-10 right-0 bottom-0"
        style={{ background: 'radial-gradient(circle, #9C4DFF, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="section-tag mb-5 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            AI-Powered Creative
          </span>
          <h2 className="text-4xl lg:text-6xl font-black mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
            AI <span className="text-gradient">Advertising</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We harness the power of generative AI to create advertising content that was previously impossible — at the speed of thought and the scale of machines. From cinematic brand films to personalized micro-content, our AI pipeline transforms your brief into breathtaking visuals.
          </p>
        </div>

        {/* Capabilities badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {capabilities.map(({ icon, label }) => (
            <div key={label} className="glass-card rounded-2xl px-5 py-3 flex items-center gap-2 hover-lift">
              <span>{icon}</span>
              <span className="text-sm font-medium text-slate-300">{label}</span>
            </div>
          ))}
        </div>

        {/* ── AI VIDEOS ── */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-3">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <span className="section-tag">AI Videos</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
          <p className="text-center text-slate-500 text-sm mb-10">
            Generative AI video production — from concept to final cut, fully AI-driven
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {aiVideos.map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
          </div>

          {/* Info card */}
          <div className="mt-10 glass-card rounded-2xl p-7 border-l-4" style={{ borderLeftColor: '#4D7EF5' }}>
            <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
              What is AI Video Creation?
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              AI video creation uses generative models — including text-to-video, image-to-video, and NeRF-based rendering — to produce cinematic advertising content from simple text prompts or reference imagery. At Trika Studio, we fine-tune these models on your brand guidelines to ensure every frame is on-brand, on-budget, and ahead of schedule. The result: studio-quality ad films at a fraction of traditional production cost.
            </p>
          </div>
        </div>

        {/* ── AI AVATAR ── */}
        <div>
          <div className="flex items-center gap-4 mb-3">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <span className="section-tag" style={{ color: '#C084FC', background: 'rgba(156,77,255,0.12)', borderColor: 'rgba(156,77,255,0.25)' }}>
              AI Avatar
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
          <p className="text-center text-slate-500 text-sm mb-10">
            Photorealistic digital humans that scale your content across languages and markets
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {aiAvatarVideos.map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
          </div>

          {/* Info card */}
          <div className="mt-10 glass-card rounded-2xl p-7 border-l-4" style={{ borderLeftColor: '#9C4DFF' }}>
            <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
              What are AI Avatars?
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              AI Avatars are photorealistic, fully customizable digital human presenters that deliver your brand message with natural expressions, lip-sync, and voice — without any camera crew. Create a custom avatar from a single photo, then generate thousands of personalized video messages across 120+ languages. Whether it's a CEO spokesperson, a multilingual customer service agent, or an influencer-style presenter, our AI avatars maintain perfect brand consistency at infinite scale.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-slate-400 mb-6">Ready to create your own AI campaign?</p>
          <button
            className="btn-primary px-10 py-4 text-base relative z-10"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10">Start Your Project →</span>
          </button>
        </div>
      </div>
    </section>
  );
}