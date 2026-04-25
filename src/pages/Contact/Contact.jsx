import { useState } from 'react';

const socials = [
  {
    name: 'Instagram',
    handle: '@trikastudio',
    href: 'https://instagram.com',
    color: '#E1306C',
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    handle: 'Trika Studio',
    href: 'https://linkedin.com',
    color: '#0077B5',
    icon: (
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    handle: 'Trika Studio Official',
    href: 'https://youtube.com',
    color: '#FF0000',
    icon: (
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'Twitter / X',
    handle: '@trikastudio_in',
    href: 'https://twitter.com',
    color: '#1DA1F2',
    icon: (
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
];

const contactInfo = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email Us',
    value: 'hello@trikastudio.in',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.95-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: 'Call Us',
    value: '+91 98765 43210',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Visit Us',
    value: 'Sector 44, Gurugram, Haryana',
  },
];

const services = [
  'AI Advertising',
  '3D Visualization',
  'Social Media Marketing',
  'AI Avatar Production',
  'Performance Marketing',
  'Brand Strategy',
  'Content Production',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="orb w-[600px] h-[600px] opacity-15 left-0 bottom-0 -translate-x-1/2"
        style={{ background: 'radial-gradient(circle, #9C4DFF, transparent 70%)' }} />
      <div className="orb w-[400px] h-[400px] opacity-10 right-0 top-0"
        style={{ background: 'radial-gradient(circle, #4D7EF5, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="section-tag mb-5 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Let's Connect
          </span>
          <h1 className="text-4xl lg:text-6xl font-black mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
            Start a <span className="text-gradient">Conversation</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you have a brief ready or just a spark of an idea — we'd love to hear from you. No hard sells, just a genuine conversation about your brand's potential.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card rounded-2xl p-7">
              <h3 className="text-white font-bold text-lg mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                Get in Touch
              </h3>
              <div className="space-y-5">
                {contactInfo.map(({ icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center flex-shrink-0 text-blue-400 group-hover:bg-blue-500/20 transition-colors duration-300">
                      {icon}
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs uppercase tracking-wider mb-0.5 font-medium">{label}</div>
                      <div className="text-white text-sm font-medium">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-7">
              <h3 className="text-white font-bold text-base mb-5" style={{ fontFamily: 'Syne, sans-serif' }}>
                Follow Our Work
              </h3>
              <div className="space-y-3">
                {socials.map(({ name, handle, href, color, icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${color}18`, border: `1px solid ${color}30`, color }}>
                      {icon}
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">{name}</div>
                      <div className="text-slate-500 text-xs">{handle}</div>
                    </div>
                    <svg className="ml-auto text-slate-600 group-hover:text-slate-400 transition-colors" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <div>
                <div className="text-white text-sm font-medium">We respond within 24 hours</div>
                <div className="text-slate-500 text-xs">Mon – Fri, 10am – 7pm IST</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="glass-card rounded-3xl p-8 lg:p-10">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 className="text-white text-2xl font-black mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
                    Message Received! 🎉
                  </h3>
                  <p className="text-slate-400 text-sm max-w-xs mx-auto leading-relaxed">
                    Thank you for reaching out. Our team will review your brief and get back to you within 24 hours.
                  </p>
                  <button
                    className="mt-8 btn-outline text-sm px-6 py-3"
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', service: '', budget: '', message: '' }); }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-white font-bold text-xl mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                    Tell Us About Your Project
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wider">Your Name *</label>
                      <input
                        type="text" name="name" required value={form.name} onChange={handleChange}
                        placeholder="Siddhartha Raj"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wider">Email Address *</label>
                      <input
                        type="email" name="email" required value={form.email} onChange={handleChange}
                        placeholder="hello@brand.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wider">Company / Brand Name</label>
                    <input
                      type="text" name="company" value={form.company} onChange={handleChange}
                      placeholder="Your Company Pvt. Ltd."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-all duration-300"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wider">Service Interested In</label>
                      <select
                        name="service" value={form.service} onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-500/50 transition-all duration-300 appearance-none"
                        style={{ color: form.service ? '#F0F4FF' : '#475569' }}
                      >
                        <option value="" disabled style={{ background: '#0D1530' }}>Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s} style={{ background: '#0D1530', color: '#F0F4FF' }}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wider">Estimated Budget</label>
                      <select
                        name="budget" value={form.budget} onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-500/50 transition-all duration-300 appearance-none"
                        style={{ color: form.budget ? '#F0F4FF' : '#475569' }}
                      >
                        <option value="" disabled style={{ background: '#0D1530' }}>Select budget range</option>
                        {['Under ₹50,000', '₹50K – ₹2L', '₹2L – ₹5L', '₹5L – ₹10L', '₹10L+'].map((b) => (
                          <option key={b} value={b} style={{ background: '#0D1530', color: '#F0F4FF' }}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wider">Tell Us About Your Project *</label>
                    <textarea
                      name="message" required value={form.message} onChange={handleChange} rows={5}
                      placeholder="Describe your project, goals, timeline, and anything else that would help us understand how to best support your brand..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-all duration-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit" disabled={loading}
                    className="w-full btn-primary py-4 text-base relative z-10 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {loading ? (
                        <>
                          <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                            <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>Send Message →</>
                      )}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}