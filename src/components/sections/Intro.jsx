import { useEffect, useRef } from 'react';

const Intro = ({ onDone }) => {
  const maskRef = useRef(null);
  const contentRef = useRef(null);
  useEffect(() => {
    const t1 = setTimeout(() => { contentRef.current?.classList.add('visible'); }, 200);
    const t2 = setTimeout(() => { contentRef.current?.classList.remove('visible'); contentRef.current?.classList.add('fading'); }, 1500);
    const t3 = setTimeout(() => { maskRef.current?.classList.add('zoomed-out'); }, 1850);
    const t4 = setTimeout(onDone, 2950);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [onDone]);
  return (
    <div id="intro-overlay">
      <div id="intro-mask" ref={maskRef} />
      <div id="intro-content" ref={contentRef}>
        <img className="w-[72px] h-auto" src="/assets/logo_white.svg" alt="" />
        <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: 24, letterSpacing: '0.08em', color: '#fff' }}>veloq</span>
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Engineer-Led AI</span>
      </div>
    </div>
  );
};

export default Intro;
