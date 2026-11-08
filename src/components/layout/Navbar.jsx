import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Ic from '../ui/Icon';
import Logo from '../ui/Logo';
import { mainNavigation } from '../../data/siteContent';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <nav className={`fixed left-1/2 -translate-x-1/2 z-50 glass-nav rounded-2xl transition-all duration-500 ${scrolled ? 'top-3 w-[calc(100%-24px)] sm:w-[92vw] max-w-7xl px-4 sm:px-5 py-2.5' : 'top-5 w-[calc(100%-24px)] sm:w-[94vw] max-w-7xl px-4 sm:px-6 py-3.5'}`}>
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center overflow-visible flex-shrink-0" style={{ height: 36 }}>
            <span style={{ display: 'inline-flex', transform: 'scale(1.35)', transformOrigin: 'left center' }}>
              <Logo size={45} />
            </span>
          </Link>
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {mainNavigation.map(({ label, path, children }) => (
              <div key={path} className="relative group py-2">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `nav-link font-sans text-[12.5px] font-medium transition-colors duration-200 whitespace-nowrap ${isActive ? 'text-black' : 'text-zinc-500 hover:text-black'}`
                  }
                >
                  {label}
                </NavLink>
                {children && (
                  <div className="absolute left-1/2 top-full hidden min-w-[240px] -translate-x-1/2 rounded-2xl border border-black/5 bg-white/95 p-3 shadow-2xl backdrop-blur-xl group-hover:block">
                    <Link to={path} className="block rounded-xl px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-zinc-400 hover:bg-[#f5f4f0] hover:text-black transition-colors">
                      {label} Overview
                    </Link>
                    <div className="my-2 h-px bg-zinc-100" />
                    {children.map(item => (
                      <Link key={item.label} to={item.path} className="block rounded-xl px-3 py-2 font-sans text-[12.5px] text-zinc-500 hover:bg-[#f5f4f0] hover:text-black transition-colors">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <Link
            to="/contact"
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-black text-white font-sans font-medium text-[13px] hover:bg-zinc-800 transition-all duration-200 hover:scale-[1.03] active:scale-95 btn-shine flex-shrink-0"
          >
            Book a Free Consultation <Ic n="arrow_r" size={13} color="white" />
          </Link>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2">
            <Ic n={open ? 'x' : 'menu'} size={20} color="#111" />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu fixed top-0 right-0 h-[100dvh] w-80 bg-white z-40 shadow-2xl pt-24 px-8 flex flex-col gap-5 overflow-y-auto ${open ? 'open' : ''}`}>
        {mainNavigation.map(({ label, path, children }) => (
          <div key={path}>
            <Link to={path} onClick={close} className="font-serif text-2xl text-left text-black hover:text-zinc-400 transition-colors">
              {label}
            </Link>
            {children && (
              <div className="mt-3 ml-2 flex flex-col gap-2">
                {children.map(item => (
                  <Link key={item.label} to={item.path} onClick={close} className="font-sans text-[13px] text-zinc-500 hover:text-black transition-colors">
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="h-[1px] bg-zinc-100 my-2" />
        <Link to="/contact" onClick={close} className="mt-2 px-5 py-3 rounded-xl bg-black text-white font-sans font-medium text-sm text-center">
          Book a Free Consultation
        </Link>
      </div>
      {open && <div onClick={close} className="fixed inset-0 z-30 bg-black/15 backdrop-blur-[2px]" />}
    </>
  );
};

export default Navbar;
