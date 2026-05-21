import { useEffect, useRef } from 'react';

const Cursor = () => {
  const dot = useRef(null);
  const ring = useRef(null);
  useEffect(() => {
    const fn = e => {
      const x = e.clientX, y = e.clientY;
      if (dot.current) { dot.current.style.left = x + 'px'; dot.current.style.top = y + 'px'; }
      if (ring.current) { ring.current.style.left = x + 'px'; ring.current.style.top = y + 'px'; }
    };
    window.addEventListener('mousemove', fn);
    return () => window.removeEventListener('mousemove', fn);
  }, []);
  return (
    <>
      <div ref={dot} className="cursor-dot hidden md:block" />
      <div ref={ring} className="cursor-ring hidden md:block" />
    </>
  );
};

export default Cursor;
