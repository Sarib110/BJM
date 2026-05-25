import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Cursor from '../ui/Cursor';
import Navbar from './Navbar';
import Footer from './Footer';
import useReveal from '../../hooks/useReveal';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (typeof window !== 'undefined') window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout = () => {
  const { pathname } = useLocation();
  useReveal(pathname);

  return (
    <div className="font-sans">
      <ScrollToTop />
      <Cursor />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
