import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const Cursor = () => {
  const dot = useRef(null);
  const ring = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const fn = e => {
      const x = e.clientX, y = e.clientY;
      if (dot.current) { dot.current.style.left = x + 'px'; dot.current.style.top = y + 'px'; }
      if (ring.current) { ring.current.style.left = x + 'px'; ring.current.style.top = y + 'px'; }
    };
    window.addEventListener('mousemove', fn);
    return () => window.removeEventListener('mousemove', fn);
  }, []);

  // Hide the custom cursor completely on tools detail pages (which contain iframes)
  if (location && location.pathname.startsWith('/tools/')) {
    return null;
  }

  return (
    <>
      <div ref={dot} className="cursor-dot hidden md:block" />
      <div ref={ring} className="cursor-ring hidden md:block" />
    </>
  );
};

export default Cursor;
