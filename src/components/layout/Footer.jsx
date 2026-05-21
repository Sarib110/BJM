import Ic from '../ui/Icon';
import Logo from '../ui/Logo';

const Footer = () => (
  <footer className="py-9 px-6 bg-[#10141d] border-t border-[#a3e635]">
    <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 md:flex-row md:justify-between">
      <div className="flex items-center gap-2.5"><Logo size={88} onDark={true} /></div>
      <div className="font-sans text-[11.5px] text-zinc-500 text-center leading-relaxed">
        Engineering-first · AI-driven · Results-focused<br />
        <span className="font-mono">© 2026 <span style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 500, fontSize: 12, letterSpacing: '0.08em', color: '#a3e635' }}>veloq</span>. All rights reserved.</span>
      </div>
      <div className="flex items-center flex-wrap justify-center gap-x-5 gap-y-3 md:justify-end">
        {[['arrow_ur', 'Upwork', 'https://www.upwork.com/companies/veloq'], ['mail', 'Email', 'mailto:contact@veloq.tech'], ['linkedin', 'LinkedIn', 'https://www.linkedin.com/company/veloqq']].map(([icon, label, href]) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="font-mono text-[11px] text-zinc-500 hover:text-white transition-colors flex items-center gap-1.5">
            <Ic n={icon} size={11} color="currentColor" /> {label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
