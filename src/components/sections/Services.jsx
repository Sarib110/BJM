import { services } from '../../data/services';

const ArrowUpRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
);

const ServiceBlock = ({ service, index }) => {
  const isEven = index % 2 === 0;
  const sectionBg = isEven ? '#0d0d0b' : '#f5f4f0';
  const cardBg = isEven ? '#161614' : '#0d0d0b';
  const cardBorder = isEven ? '1px solid rgba(255,255,255,0.07)' : 'none';

  const card = (
    <div style={{
      flex: '0 0 420px',
      background: cardBg,
      border: cardBorder,
      borderRadius: 20,
      padding: '36px 36px',
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
    }}>
      {/* Badge */}
      <div style={{
        fontFamily: 'Space Mono, monospace',
        fontSize: 10,
        color: '#a3e635',
        letterSpacing: '0.12em',
        marginBottom: 32,
      }}>
        {String(index + 1).padStart(2, '0')} &bull; {service.category}
      </div>

      {/* Metric */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
          <span style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1,
            letterSpacing: '-0.02em',
          }}>
            {service.metric}
          </span>
          <span style={{ color: '#a3e635', marginTop: 6 }}>
            <ArrowUpRight />
          </span>
        </div>
        <div style={{
          fontFamily: 'Space Mono, monospace',
          fontSize: 10.5,
          color: 'rgba(255,255,255,0.35)',
          marginTop: 8,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}>
          {service.metricLabel}
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', marginBottom: 28 }} />

      {/* Title */}
      <h2 style={{
        fontFamily: 'serif',
        fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)',
        fontWeight: 600,
        color: '#fff',
        lineHeight: 1.2,
        marginBottom: 16,
      }}>
        {service.title}
      </h2>

      {/* Description */}
      <p style={{
        fontSize: 13.5,
        color: 'rgba(255,255,255,0.55)',
        lineHeight: 1.85,
        flex: 1,
        marginBottom: 32,
      }}>
        {service.longDesc}
      </p>

      {/* Tech tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
        {service.tags.map(t => (
          <span key={t} style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '5px 12px',
            borderRadius: 999,
            border: '1px solid rgba(255,255,255,0.1)',
            background: 'rgba(255,255,255,0.04)',
            fontFamily: 'Space Mono, monospace',
            fontSize: 10,
            color: 'rgba(255,255,255,0.55)',
          }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#a3e635', flexShrink: 0 }} />
            {t}
          </span>
        ))}
      </div>
    </div>
  );

  const image = (
    <div className="services-image" style={{
      flex: 1,
      borderRadius: 20,
      overflow: 'hidden',
      minHeight: 360,
      position: 'relative',
    }}>
      <img
        src={service.image}
        alt={service.title}
        style={{
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center',
          display: 'block',
        }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: isEven ? 'rgba(0,0,0,0.15)' : 'rgba(0,0,0,0.08)',
      }} />
    </div>
  );

  return (
    <section id={service.id} style={{ background: sectionBg, padding: '52px 24px' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto' }}>
        {/* Desktop: side by side. Mobile: card only (image hidden via CSS) */}
        <div className="services-block" style={{ display: 'flex', gap: 14, alignItems: 'stretch' }}>
          {isEven ? card : image}
          {isEven ? image : card}
        </div>
      </div>
    </section>
  );
};

const Services = () => (
  <>
    <style>{`
      @media (max-width: 1023px) {
        .services-image { display: none !important; }
        .services-block { flex-direction: column !important; }
        .services-block > div:not(.services-image) { flex: 1 !important; }
      }
    `}</style>
    <div>
      {services.map((service, i) => (
        <ServiceBlock key={service.id} service={service} index={i} />
      ))}
    </div>
  </>
);

export default Services;
