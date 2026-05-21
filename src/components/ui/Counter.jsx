import { useState, useEffect, useRef } from 'react';

const Counter = ({ target }) => {
  const [val, setVal] = useState('0');
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const isFloat = target.includes('.');
        const num = parseFloat(target.replace(/[^0-9.]/g, ''));
        const prefix = target.startsWith('$') ? '$' : '';
        const suffix = target.replace(/[$0-9.]/g, '');
        const duration = 1800;
        const steps = 60;
        let step = 0;
        const timer = setInterval(() => {
          step++;
          const progress = step / steps;
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = eased * num;
          setVal(`${prefix}${isFloat ? current.toFixed(1) : Math.floor(current)}${suffix}`);
          if (step >= steps) clearInterval(timer);
        }, duration / steps);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{val}</span>;
};

export default Counter;
