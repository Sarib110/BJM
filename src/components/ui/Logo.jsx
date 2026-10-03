const Logo = ({ size = 40, onDark = false }) => (
  <img
    src="/assets/bjm-logo.png"
    alt="BJ Medical Billing Service"
    height={size}
    style={{
      height: size,
      width: 'auto',
      objectFit: 'contain',
      display: 'block',
      ...(onDark ? { filter: 'brightness(0) invert(1)' } : {}),
    }}
  />
);

export default Logo;
