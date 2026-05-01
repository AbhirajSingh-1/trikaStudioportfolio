import logo from '../assets/logo.png';

export default function Logo({ size = 'md' }) {
 const sizeMap = {
  sm: 48,
  md: 70,   // 👈 increase this
  lg: 90,
  xl: 120,
};
  const height = sizeMap[size] || 40;

  return (
  <img
  src={logo}
  alt="Trika Studio"
  style={{
    height: `${height}px`,
    width: 'auto',
    objectFit: 'contain',
    minHeight: '60px'   // 👈 ensures it never looks small
  }}
/>
  );
}