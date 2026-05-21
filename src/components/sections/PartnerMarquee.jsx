const PartnerMarquee = () => {
  const logos = [
    { src: '/assets/logos/autoscale.png', alt: 'AutoScale' },
    { src: '/assets/logos/diyar.png', alt: 'Diyar' },
    { src: '/assets/logos/ezmd.webp', alt: 'EZMD' },
    { src: '/assets/logos/phunware.webp', alt: 'Phunware' },
  ];
  const doubled = [...logos, ...logos];
  return (
    <div style={{ background: '#fff', borderTop: '1px solid rgba(0,0,0,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)', padding: '28px 0', overflow: 'hidden' }}>
      <div style={{ textAlign: 'center', marginBottom: 20 }}><span className="tag-pill">Trusted by</span></div>
      <div className="mq-wrap">
        <div className="mq-track" style={{ animationDuration: '22s' }}>
          {doubled.map((l, i) => (
            <div key={i} style={{ flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0 48px' }}>
              <img src={l.src} alt={l.alt} style={{ height: 36, width: 'auto', objectFit: 'contain', filter: 'grayscale(1)', opacity: 0.45, transition: 'opacity 0.25s, filter 0.25s' }} onMouseEnter={e => { e.currentTarget.style.filter = 'grayscale(0)'; e.currentTarget.style.opacity = '1'; }} onMouseLeave={e => { e.currentTarget.style.filter = 'grayscale(1)'; e.currentTarget.style.opacity = '0.45'; }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerMarquee;
