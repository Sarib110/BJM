const Logo = ({ size = 20, onDark = false }) => (
  <img
    src={onDark ? '/assets/logo_white.svg' : '/assets/logo_black.svg'}
    alt="Veloq Logo"
    width={size}
    height={size}
    style={{ objectFit: 'contain', borderRadius: '4px' }}
  />
);

export default Logo;
