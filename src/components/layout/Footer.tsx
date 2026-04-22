import Link from "next/link";

const footerLinks = {
  company: [
    { href: "/", label: "Home", hideOnMobile: false },
    { href: "/packages", label: "Packages", hideOnMobile: false },
    { href: "/services", label: "Services", hideOnMobile: false },
    { href: "/courts", label: "Courts", hideOnMobile: false },
    { href: "/trusted-by", label: "Trusted By", hideOnMobile: false },
    { href: "/blog", label: "Blog", hideOnMobile: true },
    { href: "/contact", label: "Contact", hideOnMobile: false },
  ],
  services: [
    { href: "/services#feasibility", label: "Feasibility" },
    { href: "/services#finance", label: "Finance" },
    { href: "/services#design", label: "Design" },
    { href: "/services#build", label: "Courts & Build" },
    { href: "/services#brand", label: "Brand & Marketing" },
    { href: "/services#operations", label: "Operations" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-padel-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12">

        {/* Top: brand + nav columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <span className="font-semibold text-white block mb-2" style={{ fontFamily: "var(--font-display)" }}>
              The Padel Partners
            </span>
            <p className="text-net-silver text-sm leading-relaxed mb-2">
              Your strategic partner for padel development.
            </p>
            <a
              href="mailto:info@thepadelpartners.com"
              className="text-sm text-court-green hover:text-white transition-colors"
            >
              info@thepadelpartners.com
            </a>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href} className={link.hideOnMobile ? "hidden md:block" : ""}>
                  <Link
                    href={link.href}
                    className="text-sm text-net-silver hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-net-silver hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Full-width CTA */}
        <div className="border-t border-white/10 pt-10 mb-10">
          <h3 className="text-lg font-semibold text-white mb-3" style={{ fontFamily: "var(--font-display)" }}>
            Ready to start your padel project?
          </h3>
          <p className="text-sm text-net-silver leading-relaxed mb-6 max-w-3xl">
            Our padel club development service gives you ongoing access to an experienced team that can guide and support you through the full journey. We work alongside you as strategic partners, helping you make confident decisions, avoid costly mistakes and move your project forward with clarity.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://calendar.app.google/YGnWn5mJxVCL8Q648"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center min-h-[44px] px-4 py-2.5 bg-court-green text-white text-sm font-semibold rounded-md hover:bg-court-green-dark transition-colors"
            >
              Book a Call
            </a>
            <a
              href="https://portal.thepadelpartners.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center min-h-[44px] px-4 py-2.5 text-sm text-net-silver hover:text-white transition-colors"
            >
              Client Portal →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-net-silver">
            © {new Date().getFullYear()} The Padel Partners. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-net-silver hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
