const Footer = () => {
  const links = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
  ];

  return (
    <footer className="bg-navy-deep border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-lg font-bold text-foreground">LIBERTY FUNDING</div>
            <p className="text-sm text-muted-foreground mt-1">Helping entrepreneurs access the capital they deserve.</p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2025 Liberty Funding. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
