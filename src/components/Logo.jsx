/**
 * Trika Studio logo — pure typography.
 * "Trika Studio" all in same Cormorant Garant bold — "k" orange italic accent.
 */
export default function Logo({ size = 'md', dark = true }) {
  const sizeMap = {
    sm: { name: '1.15rem' },
    md: { name: '1.4rem'  },
    lg: { name: '1.75rem' },
    xl: { name: '2.5rem'  },
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
      {/* "k" — orange italic accent */}
      <span style={{ fontSize: s.name, fontWeight: 700, color: '#C9481B', letterSpacing: '-0.01em', fontStyle: 'italic' }}>
        k
      </span>
      {/* "a Studio" — exact same style as surrounding text */}
      <span style={{ fontSize: s.name, fontWeight: 700, color: baseColor, letterSpacing: '-0.01em' }}>
        a Studio
      </span>
    </span>
  );
}