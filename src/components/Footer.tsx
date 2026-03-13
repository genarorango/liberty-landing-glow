const Footer = () => {
  const links = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
  ];

  return (
    <footer className="section-dark bg-navy-deep border-t border-white/10 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-lg font-bold text-white">LIBERTY FUNDING</div>
            <p className="text-sm text-white/50 mt-1">Helping entrepreneurs access the capital they deserve.</p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-white/50 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-sm text-white/50">© 2025 Liberty Funding. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
