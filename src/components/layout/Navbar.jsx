import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Ic from '../ui/Icon';
import Logo from '../ui/Logo';

const links = [
  ['Services', '/services'],
  ['Work', '/work'],
  ['About', '/about'],
  ['Careers', '/careers'],
  ['Contact', '/contact'],
];

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
      <nav className={`fixed left-1/2 -translate-x-1/2 z-50 glass-nav rounded-2xl transition-all duration-500 ${scrolled ? 'top-3 w-[calc(100%-24px)] sm:w-[92vw] max-w-5xl px-4 sm:px-5 py-2.5' : 'top-5 w-[calc(100%-24px)] sm:w-[94vw] max-w-5xl px-4 sm:px-6 py-3.5'}`}>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex items-center justify-center"><Logo size={48} /></div>
            <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: 22, letterSpacing: '0.08em', color: '#111111' }}>veloq</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {links.map(([label, to]) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `nav-link font-sans text-[13px] font-medium transition-colors duration-200 ${isActive ? 'text-black' : 'text-zinc-500 hover:text-black'}`
                }
              >
                {label}
              </NavLink>
            ))}
            <NavLink
              to="/tools"
              className={({ isActive }) =>
                `nav-link font-sans text-[13px] font-medium transition-colors duration-200 ${isActive ? 'text-black' : 'text-zinc-500 hover:text-black'}`
              }
            >
              Free Tools
            </NavLink>
          </div>
          <Link
            to="/contact"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-black text-white font-sans font-medium text-[13px] hover:bg-zinc-800 transition-all duration-200 hover:scale-[1.03] active:scale-95 btn-shine"
          >
            Book a Call <Ic n="arrow_r" size={13} color="white" />
          </Link>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2">
            <Ic n={open ? 'x' : 'menu'} size={20} color="#111" />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu fixed top-0 right-0 h-[100dvh] w-72 bg-white z-40 shadow-2xl pt-24 px-8 flex flex-col gap-6 overflow-y-auto ${open ? 'open' : ''}`}>
        {links.map(([label, to]) => (
          <Link key={to} to={to} onClick={close} className="font-serif text-2xl text-left text-black hover:text-zinc-400 transition-colors">
            {label}
          </Link>
        ))}
        <div className="h-[1px] bg-zinc-100 my-2" />
        <Link to="/tools" onClick={close} className="font-serif text-2xl text-left text-black hover:text-zinc-400 transition-colors">
          Free Tools
        </Link>
        <Link to="/contact" onClick={close} className="mt-2 px-5 py-3 rounded-xl bg-black text-white font-sans font-medium text-sm text-center">
          Book a Call
        </Link>
      </div>
      {open && <div onClick={close} className="fixed inset-0 z-30 bg-black/15 backdrop-blur-[2px]" />}
    </>
  );
};

export default Navbar;
