import { useEffect } from 'react';

const useReveal = (dep) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const obs = new IntersectionObserver(
        entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
        { threshold: 0.07 }
      );
      document.querySelectorAll('.reveal').forEach(el => { el.classList.remove('visible'); obs.observe(el); });
      return () => obs.disconnect();
    }, 50);
    return () => clearTimeout(timer);
  }, [dep]);
};

export default useReveal;
