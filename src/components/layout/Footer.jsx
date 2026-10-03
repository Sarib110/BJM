import { Link } from 'react-router-dom';
import Ic from '../ui/Icon';
import Logo from '../ui/Logo';

const Footer = () => (
  <footer className="py-16 px-6 bg-[#10141d] border-t border-[#a3e635]/20">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center mb-4">
            <Logo size={36} onDark={true} />
          </div>
          <p className="font-sans text-[12px] text-zinc-500 leading-relaxed">Medical billing · Revenue cycle management · Payer follow-up</p>
        </div>

        <div>
          <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-4">Company</p>
          {[['About', '/about'], ['Work', '/work'], ['Services', '/services'], ['Careers', '/careers']].map(([label, to]) => (
            <Link key={to} to={to} className="block font-sans text-[12.5px] text-zinc-500 hover:text-white transition-colors mb-2.5">
              {label}
            </Link>
          ))}
        </div>

        <div>
          <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-4">Services</p>
          {[['Medical Coding', '/services/medical-coding'], ['Denial Management', '/services/denial-management'], ['AR Follow-Up', '/services/ar-followup'], ['All Services', '/services']].map(([label, to]) => (
            <Link key={to} to={to} className="block font-sans text-[12.5px] text-zinc-500 hover:text-white transition-colors mb-2.5">
              {label}
            </Link>
          ))}
        </div>

        <div>
          <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-4">Connect</p>
          {[
            ['arrow_ur', 'Upwork', 'https://www.upwork.com/companies/veloq'],
            ['mail', 'hello@veloq.tech', 'mailto:hello@veloq.tech'],
            ['linkedin', 'LinkedIn', 'https://www.linkedin.com/company/veloqq'],
          ].map(([icon, label, href]) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-sans text-[12.5px] text-zinc-500 hover:text-white transition-colors mb-2.5">
              <Ic n={icon} size={11} color="currentColor" /> {label}
            </a>
          ))}
          <Link to="/contact" className="block font-sans text-[12.5px] text-[#a3e635] hover:text-lime-300 transition-colors mt-3 font-medium">
            Book a Call →
          </Link>
        </div>
      </div>

      <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-[11px] text-zinc-600">© 2026 BJ Medical Billing Service. All rights reserved.</span>
        <span className="font-mono text-[10px] text-zinc-700">Medical Billing & Revenue Cycle Management</span>
      </div>
    </div>
  </footer>
);

export default Footer;
