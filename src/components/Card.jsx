export default function Card({ icon, title, description, tag, accentColor = '#4D7EF5', className = '' }) {
  return (
    <div
      className={`glass-card rounded-2xl p-7 hover-lift group cursor-default ${className}`}
      style={{ transition: 'all 0.35s ease' }}
    >
      {tag && (
        <span className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-4"
          style={{
            background: `${accentColor}18`,
            color: accentColor,
            border: `1px solid ${accentColor}30`,
            fontFamily: 'DM Sans, sans-serif',
          }}>
          {tag}
        </span>
      )}

      {icon && (
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 text-white group-hover:scale-110 transition-transform duration-300"
          style={{ background: `linear-gradient(135deg, ${accentColor}30, ${accentColor}10)`, border: `1px solid ${accentColor}20` }}
        >
          {icon}
        </div>
      )}

      <h3 className="text-white font-bold text-lg mb-3 group-hover:text-gradient transition-all duration-300"
        style={{ fontFamily: 'Syne, sans-serif' }}>
        {title}
      </h3>

      <p className="text-slate-400 text-sm leading-relaxed">
        {description}
      </p>

      <div className="mt-5 flex items-center gap-2 text-xs font-medium transition-all duration-300"
        style={{ color: accentColor, opacity: 0.7 }}>
        <span>Learn more</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
          className="group-hover:translate-x-1 transition-transform duration-300">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}