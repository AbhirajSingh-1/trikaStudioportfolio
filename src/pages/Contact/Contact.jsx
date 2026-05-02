import { useState } from 'react';

const socials = [
  {
    name: 'Instagram',
    handle: '@trikastudio',
    href: 'https://www.instagram.com/trikastudio1?igsh=NnQzeHJseGM5ZXYz',
    color: '#E1306C',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
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
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    handle: 'Trika Studio Official',
    href: 'https://www.youtube.com/channel/UCSDYg2d1qGC4sPfiSfsGIuw',
    color: '#FF0000',
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'Twitter / X',
    handle: '@trikastudio_in',
    href: 'https://twitter.com',
    color: '#18181B',
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
];

const contactInfo = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9481B" strokeWidth="1.75">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'helloTrikastudio@gmail.com',
    sub: 'We reply within 24 hours',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9481B" strokeWidth="1.75">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.95-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+91 8707775873',
    sub: 'Mon–Fri · 10am–7pm IST',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9481B" strokeWidth="1.75">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Location',
    value: 'AVL 36, Sector 36, Gurugram',
    sub: 'Haryana, India',
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

const budgets = ['Under ₹50,000', '₹50K – ₹2L', '₹2L – ₹5L', '₹5L – ₹10L', '₹10L+'];

const inputStyle = {
  width: '100%',
  background: '#F8F5F0',
  border: '1.5px solid #E8E2D8',
  borderRadius: '10px',
  padding: '12px 15px',
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '14px',
  color: '#18130D',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
};

const labelStyle = {
  display: 'block',
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '11px',
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: '#7A7068',
  marginBottom: '7px',
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState('');

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  const focusStyle = { borderColor: '#C9481B', boxShadow: '0 0 0 3px rgba(201,72,27,0.08)' };

  return (
    <div style={{ background: 'var(--bg)' }}>

      {/* ── HERO ── */}
      <section className="page-hero" style={{ paddingBottom: 'clamp(40px, 6vw, 64px)' }}>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px', margin: '0 auto' }}>
          <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '18px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C9481B', display: 'inline-block' }} className="animate-pulse" />
            Let's Connect
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: 'clamp(2.2rem, 5.5vw, 4rem)', lineHeight: 1.06, color: 'var(--text)', marginBottom: '14px' }}>
            Start a <em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>Conversation</em>
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(0.88rem, 1.8vw, 1rem)', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto' }}>
            Whether you have a brief ready or just a spark of an idea — we'd love to hear from you. No hard sells, just genuine conversation.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section style={{ background: 'var(--bg-alt)', padding: 'clamp(40px, 6vw, 72px) 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 'clamp(24px, 4vw, 48px)' }} className="contact-grid">

          {/* ── Sidebar ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            {/* Contact info */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '18px', padding: '24px' }}>
              <h3 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: '1.25rem', color: 'var(--text)', marginBottom: '20px' }}>Contact Details</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {contactInfo.map(({ icon, label, value, sub }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{
                      width: '38px', height: '38px', flexShrink: 0,
                      borderRadius: '10px',
                      background: 'rgba(201,72,27,0.07)',
                      border: '1px solid rgba(201,72,27,0.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {icon}
                    </div>
                    <div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '2px' }}>{label}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13.5px', fontWeight: 500, color: 'var(--text)' }}>{value}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11.5px', color: 'var(--text-light)', marginTop: '1px' }}>{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '18px', padding: '24px' }}>
              <h3 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: '1.1rem', color: 'var(--text)', marginBottom: '16px' }}>Follow Our Work</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {socials.map(({ name, handle, href, color, icon }) => (
                  <a key={name} href={href} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px', borderRadius: '10px', textDecoration: 'none', transition: 'background 0.2s', border: '1px solid transparent' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-alt)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'transparent'; }}
                  >
                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: `${color}12`, border: `1px solid ${color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', color, flexShrink: 0 }}>
                      {icon}
                    </div>
                    <div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 500, color: 'var(--text)' }}>{name}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11.5px', color: 'var(--text-muted)' }}>{handle}</div>
                    </div>
                    <svg style={{ marginLeft: 'auto', color: 'var(--text-light)' }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Online badge */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '14px', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E', display: 'inline-block', flexShrink: 0, animation: 'pulse-dot 2s infinite' }} />
              <div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 500, color: 'var(--text)' }}>We respond within 24 hours</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11.5px', color: 'var(--text-muted)' }}>Mon – Fri, 10am – 7pm IST</div>
              </div>
            </div>
          </div>

          {/* ── Form ── */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: 'clamp(24px, 4vw, 40px)' }}>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: 'clamp(40px, 8vw, 80px) 20px' }}>
                <div style={{
                  width: '72px', height: '72px', borderRadius: '50%',
                  background: 'rgba(34,197,94,0.1)',
                  border: '1.5px solid rgba(34,197,94,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: '1.8rem', color: 'var(--text)', marginBottom: '10px' }}>
                  Message Received! 🎉
                </h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: 'var(--text-muted)', maxWidth: '320px', margin: '0 auto 28px', lineHeight: 1.7 }}>
                  Thank you for reaching out. Our team will review your brief and get back to you within 24 hours.
                </p>
                <button className="btn-outline" style={{ fontSize: '13px' }}
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', service: '', budget: '', message: '' }); }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <h3 style={{ fontFamily: "'Cormorant Garant', serif", fontWeight: 700, fontSize: '1.5rem', color: 'var(--text)', marginBottom: '4px' }}>
                  Tell Us About Your Project
                </h3>

                {/* Name + Email */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }} className="form-row-2">
                  <div>
                    <label style={labelStyle}>Your Name *</label>
                    <input
                      type="text" name="name" required value={form.name} onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      style={{ ...inputStyle, ...(focused === 'name' ? focusStyle : {}) }}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused('')}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input
                      type="email" name="email" required value={form.email} onChange={handleChange}
                      placeholder="e.g. hello@yourbrand.com"
                      style={{ ...inputStyle, ...(focused === 'email' ? focusStyle : {}) }}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused('')}
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label style={labelStyle}>Company / Brand Name</label>
                  <input
                    type="text" name="company" value={form.company} onChange={handleChange}
                    placeholder="e.g. Your Company Pvt. Ltd."
                    style={{ ...inputStyle, ...(focused === 'company' ? focusStyle : {}) }}
                    onFocus={() => setFocused('company')}
                    onBlur={() => setFocused('')}
                  />
                </div>

                {/* Service + Budget */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }} className="form-row-2">
                  <div>
                    <label style={labelStyle}>Service Required</label>
                    <div style={{ position: 'relative' }}>
                      <select
                        name="service" value={form.service} onChange={handleChange}
                        style={{
                          ...inputStyle,
                          appearance: 'none',
                          cursor: 'pointer',
                          color: form.service ? '#18130D' : '#B0A89C',
                          ...(focused === 'service' ? focusStyle : {}),
                        }}
                        onFocus={() => setFocused('service')}
                        onBlur={() => setFocused('')}
                      >
                        <option value="" disabled>Select a service</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                      <svg style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-muted)' }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Budget Range</label>
                    <div style={{ position: 'relative' }}>
                      <select
                        name="budget" value={form.budget} onChange={handleChange}
                        style={{
                          ...inputStyle,
                          appearance: 'none',
                          cursor: 'pointer',
                          color: form.budget ? '#18130D' : '#B0A89C',
                          ...(focused === 'budget' ? focusStyle : {}),
                        }}
                        onFocus={() => setFocused('budget')}
                        onBlur={() => setFocused('')}
                      >
                        <option value="" disabled>Select budget range</option>
                        {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                      </select>
                      <svg style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-muted)' }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={labelStyle}>Project Details *</label>
                  <textarea
                    name="message" required value={form.message} onChange={handleChange} rows={5}
                    placeholder="Describe your project goals, timeline, and anything that helps us understand your vision..."
                    style={{
                      ...inputStyle,
                      resize: 'none',
                      ...(focused === 'message' ? focusStyle : {}),
                    }}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused('')}
                  />
                </div>

                <button type="submit" disabled={loading} className="btn-primary" style={{ padding: '14px', fontSize: '15px', marginTop: '4px', opacity: loading ? 0.75 : 1 }}>
                  {loading ? (
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                      <svg style={{ animation: 'spin 0.9s linear infinite' }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 540px) {
          .form-row-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}