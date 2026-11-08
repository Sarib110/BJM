import { Link } from 'react-router-dom';
import Ic from '../ui/Icon';
import Logo from '../ui/Logo';
import { SOCIALS } from '../../data/socials';
import { footerOnlyPages, itSolutionServices, mainNavigation, medicalBillingServices } from '../../data/siteContent';

const Footer = () => (
  <footer className="py-16 px-6 bg-[#10141d] border-t border-[#a3e635]/20">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-12">
        <div className="col-span-2 lg:col-span-1">
          <div className="flex items-center mb-4">
            <Logo size={36} onDark={true} />
          </div>
          <p className="font-sans text-[12px] text-zinc-500 leading-relaxed">Medical billing · Revenue cycle management · IT solutions</p>
        </div>

        <div>
          <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-4">Quick Links</p>
          {mainNavigation.map(({ label, path }) => (
            <Link key={path} to={path} className="block font-sans text-[12.5px] text-zinc-500 hover:text-white transition-colors mb-2.5">
              {label}
            </Link>
          ))}
        </div>

        <div>
          <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-4">Medical Billing</p>
          {medicalBillingServices.slice(0, 7).map(({ label, path }) => (
            <Link key={path} to={path} className="block font-sans text-[12.5px] text-zinc-500 hover:text-white transition-colors mb-2.5">
              {label}
            </Link>
          ))}
        </div>

        <div>
          <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-4">IT Solutions</p>
          {itSolutionServices.map(({ label, path }) => (
            <Link key={path} to={path} className="block font-sans text-[12.5px] text-zinc-500 hover:text-white transition-colors mb-2.5">
              {label}
            </Link>
          ))}
        </div>

        <div>
          <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-4">Footer Only</p>
          {footerOnlyPages.map(({ label, path }) => (
            <Link key={path} to={path} className="block font-sans text-[12.5px] text-zinc-500 hover:text-white transition-colors mb-2.5">
              {label}
            </Link>
          ))}
        </div>

        <div>
          <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-4">Contact</p>
          {[
            ['arrow_ur', SOCIALS.upworkLabel, SOCIALS.upworkUrl],
            ['mail', SOCIALS.email, SOCIALS.emailMailto],
            ['linkedin', 'LinkedIn', SOCIALS.linkedinUrl],
          ].map(([icon, label, href]) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-sans text-[12.5px] text-zinc-500 hover:text-white transition-colors mb-2.5">
              <Ic n={icon} size={11} color="currentColor" /> {label}
            </a>
          ))}
          <Link to="/contact" className="block font-sans text-[12.5px] text-[#a3e635] hover:text-lime-300 transition-colors mt-3 font-medium">
            Book a Free Consultation →
          </Link>
        </div>
      </div>

      <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-[11px] text-zinc-600">© 2026 BJ Medical Billing Service. All rights reserved.</span>
        <span className="font-mono text-[10px] text-zinc-700">Medical Billing, Revenue Cycle Management & IT Solutions</span>
      </div>
    </div>
  </footer>
);

export default Footer;
