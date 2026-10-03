import { useEffect, useRef, useState } from 'react';
import { teamMembers } from '../../data/team';
import { withBase } from '../../utils/withBase';

const LinkedInIcon = () => (<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>);
const GitHubIcon = () => (<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>);

const Card = ({ p, pausedRef, isDraggingRef }) => {
  const [expanded, setExpanded] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });
  const cardRef = useRef(null);
  const mouseDownX = useRef(0);

  useEffect(() => {
    if (!expanded) return;
    const handleOutside = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) setExpanded(false);
    };
    const timer = setTimeout(() => document.addEventListener('click', handleOutside), 0);
    return () => { clearTimeout(timer); document.removeEventListener('click', handleOutside); };
  }, [expanded]);

  const handleMouseDown = (e) => { mouseDownX.current = e.clientX; };
  const handleClick = (e) => {
    if (Math.abs(e.clientX - mouseDownX.current) < 6) {
      pausedRef.current = true;
      setExpanded(prev => !prev);
    }
  };
  const handleMouseMove = (e) => {
    if (expanded) return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top, visible: true });
  };

  return (
    <div
      ref={cardRef}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      style={{ flexShrink: 0, width: 280, height: 420, position: 'relative', border: `1px solid ${expanded ? 'rgba(163,230,53,0.4)' : 'rgba(255,255,255,0.08)'}`, borderRadius: 16, overflow: 'hidden', cursor: expanded ? 'default' : cursor.visible ? 'none' : 'auto', transition: 'border-color 0.25s, transform 0.25s' }}
      onMouseEnter={e => { pausedRef.current = true; if (!expanded) { e.currentTarget.style.borderColor = 'rgba(163,230,53,0.35)'; e.currentTarget.style.transform = 'translateY(-4px)'; } }}
      onMouseLeave={e => { if (!isDraggingRef.current && !expanded) pausedRef.current = false; if (!expanded) { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(0)'; } setCursor(c => ({ ...c, visible: false })); }}
    >
      {/* Custom cursor */}
      {!expanded && (
        <div style={{ position: 'absolute', left: cursor.x, top: cursor.y, transform: 'translate(-50%, -50%)', pointerEvents: 'none', zIndex: 10, opacity: cursor.visible ? 1 : 0, transition: 'opacity 0.15s', background: 'rgba(163,230,53,0.92)', borderRadius: 999, padding: '5px 12px', fontFamily: 'Space Mono,monospace', fontSize: 9.5, fontWeight: 700, color: '#0d0d0b', letterSpacing: '0.05em', whiteSpace: 'nowrap', boxShadow: '0 4px 16px rgba(0,0,0,0.4)' }}>
          show bio
        </div>
      )}

      {/* Photo */}
      <img src={withBase(p.img)} alt={p.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: p.objectPosition || 'center top', filter: expanded ? 'blur(6px) brightness(0.25)' : 'grayscale(0.12) contrast(1.04) brightness(0.96)', transition: 'filter 0.35s' }} />

      {/* Default gradient + bottom info */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.55) 42%, transparent 100%)', opacity: expanded ? 0 : 1, transition: 'opacity 0.3s' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 20, opacity: expanded ? 0 : 1, transition: 'opacity 0.25s', pointerEvents: expanded ? 'none' : 'auto' }}>
        <div style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 600, fontSize: 15, color: '#fff', marginBottom: 2 }}>{p.name}</div>
        <div style={{ fontFamily: 'Space Mono,monospace', fontSize: 9.5, color: '#a3e635', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>{p.role}</div>
        {(p.linkedin || p.github) && <div style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
          {p.linkedin && <a href={p.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontFamily: 'Space Mono,monospace', fontSize: 9.5, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}><LinkedInIcon /> in</a>}
          {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontFamily: 'Space Mono,monospace', fontSize: 9.5, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}><GitHubIcon /> gh</a>}
        </div>}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>{p.tags.map(t => <span key={t} style={{ fontFamily: 'Space Mono,monospace', fontSize: 9.5, padding: '3px 9px', borderRadius: 999, background: 'rgba(163,230,53,0.1)', color: 'rgba(163,230,53,0.8)', border: '1px solid rgba(163,230,53,0.2)' }}>{t}</span>)}</div>
      </div>

      {/* Expanded overlay */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 24, opacity: expanded ? 1 : 0, transition: 'opacity 0.35s', pointerEvents: expanded ? 'auto' : 'none' }}>
        <div style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 700, fontSize: 17, color: '#fff', marginBottom: 4 }}>{p.name}</div>
        <div style={{ fontFamily: 'Space Mono,monospace', fontSize: 9.5, color: '#a3e635', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 14 }}>{p.role}</div>
        <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, marginBottom: 18 }}>{p.desc}</p>
        {(p.linkedin || p.github) && <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
          {p.linkedin && <a href={p.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontFamily: 'Space Mono,monospace', fontSize: 9.5, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}><LinkedInIcon /> in</a>}
          {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontFamily: 'Space Mono,monospace', fontSize: 9.5, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}><GitHubIcon /> gh</a>}
        </div>}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>{p.tags.map(t => <span key={t} style={{ fontFamily: 'Space Mono,monospace', fontSize: 9.5, padding: '3px 9px', borderRadius: 999, background: 'rgba(163,230,53,0.12)', color: 'rgba(163,230,53,0.9)', border: '1px solid rgba(163,230,53,0.25)' }}>{t}</span>)}</div>
      </div>
    </div>
  );
};

const Team = () => {
  const trackRef = useRef(null);
  const paused = useRef(false);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartPos = useRef(0);
  const pos = useRef(0);
  const rafRef = useRef(null);
  const row = [...teamMembers, ...teamMembers];
  const SPEED = 0.45;

  useEffect(() => {
    const tick = () => {
      if (!paused.current && !isDragging.current) {
        const halfW = (trackRef.current?.scrollWidth ?? 0) / 2;
        pos.current -= SPEED;
        if (halfW && Math.abs(pos.current) >= halfW) pos.current = 0;
        if (trackRef.current) trackRef.current.style.transform = `translateX(${pos.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const onDragStart = (clientX) => { isDragging.current = true; paused.current = true; dragStartX.current = clientX; dragStartPos.current = pos.current; };
  const onDragMove = (clientX) => {
    if (!isDragging.current) return;
    const delta = clientX - dragStartX.current;
    const halfW = (trackRef.current?.scrollWidth ?? 0) / 2;
    let next = dragStartPos.current + delta;
    if (halfW) { if (next > 0) next -= halfW; if (next < -halfW) next += halfW; }
    pos.current = next;
    if (trackRef.current) trackRef.current.style.transform = `translateX(${next}px)`;
  };
  const onDragEnd = () => { isDragging.current = false; paused.current = false; };

  return (
    <section id="team" style={{ background: '#0d0d0b', padding: '112px 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', paddingLeft: 24, paddingRight: 24, marginBottom: 56 }} className="reveal">
        <span className="tag-pill" style={{ background: 'rgba(163,230,53,0.08)', color: 'rgba(163,230,53,0.7)', border: '1px solid rgba(163,230,53,0.15)', marginBottom: 20, display: 'inline-block' }}>The service team</span>
        <h2 className="font-serif" style={{ fontSize: 'clamp(2.2rem,4.5vw,3.5rem)', color: '#fff', lineHeight: 1.06 }}>Every billing function.<br /><em className="not-italic" style={{ color: '#a3e635' }}>Clear ownership.</em></h2>
      </div>
      <div style={{ overflow: 'hidden', cursor: 'grab', WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)', maskImage: 'linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)' }} onMouseDown={e => onDragStart(e.clientX)} onMouseMove={e => onDragMove(e.clientX)} onMouseUp={onDragEnd} onMouseLeave={onDragEnd} onTouchStart={e => onDragStart(e.touches[0].clientX)} onTouchMove={e => { e.preventDefault(); onDragMove(e.touches[0].clientX); }} onTouchEnd={onDragEnd}>
        <div ref={trackRef} style={{ display: 'flex', gap: 16, width: 'max-content', paddingBottom: 4, userSelect: 'none' }}>
          {row.map((p, i) => <Card key={i} p={p} pausedRef={paused} isDraggingRef={isDragging} />)}
        </div>
      </div>
    </section>
  );
};

export default Team;
