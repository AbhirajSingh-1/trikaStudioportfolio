import logoDark from '../assets/logo-black.png';   // header (transparent / dark text)
import logoWhite from '../assets/logo-white.png'; // footer (white version)

export default function Logo({ size = 'md', variant = 'header' }) {
const sizeMap = {
sm: 40,
md: 60,
lg: 70,
xl: 100,
};

const height = sizeMap[size] || 48;

// 👇 choose logo based on usage
const src = variant === 'footer' ? logoWhite : logoDark;

return (
<img
src={src}
alt="Trika Studio"
style={{
height: `${height}px`,
width: 'auto',
objectFit: 'contain',
display: 'block'
}}
/>
);
}
