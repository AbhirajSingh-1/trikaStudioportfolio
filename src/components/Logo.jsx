/**
 * Trika Studio logo — pure typography.
 * Cormorant Garant serif: "Tri" dark, "k" orange, "a" dark — " Studio" in muted weight.
 * Matches the reference image exactly.
 */
export default function Logo({ size = 'md', dark = true }) {
  const sizeMap = {
    sm: { name: '1.15rem', studio: '0.8rem' },
    md: { name: '1.4rem',  studio: '0.88rem' },
    lg: { name: '1.75rem', studio: '1rem' },
    xl: { name: '2.5rem',  studio: '1.3rem' },
  };
  const s = sizeMap[size] || sizeMap.md;
  const baseColor = dark ? '#18130D' : '#FDFCF8';

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'baseline',
        gap: 0,
        fontFamily: "'Cormorant Garant', serif",
        userSelect: 'none',
        lineHeight: 1,
      }}
      aria-label="Trika Studio"
    >
      {/* "Tri" */}
      <span style={{ fontSize: s.name, fontWeight: 700, color: baseColor, letterSpacing: '-0.01em' }}>
        Tri
      </span>
      {/* "k" — orange accent */}
      <span style={{ fontSize: s.name, fontWeight: 700, color: '#C9481B', letterSpacing: '-0.01em', fontStyle: 'italic' }}>
        k
      </span>
      {/* "a" */}
      <span style={{ fontSize: s.name, fontWeight: 700, color: baseColor, letterSpacing: '-0.01em' }}>
        a
      </span>
      {/* space */}
      <span style={{ fontSize: s.name, display: 'inline-block', width: '0.3em' }} />
      {/* "Studio" — lighter */}
      <span
        style={{
          fontSize: s.studio,
          fontWeight: 400,
          color: dark ? '#7A7068' : 'rgba(253,252,248,0.65)',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          fontFamily: "'DM Sans', sans-serif",
          alignSelf: 'center',
        }}
      >
      </span>
    </span>
  );
}