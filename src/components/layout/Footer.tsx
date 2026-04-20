import Link from "next/link";

const footerLinks = {
  company: [
    { href: "/", label: "Home" },
    { href: "/packages", label: "Packages" },
    { href: "/services", label: "Services" },
    { href: "/trusted-by", label: "Trusted By" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services#feasibility", label: "Feasibility" },
    { href: "/services#finance", label: "Finance" },
    { href: "/services#design", label: "Design" },
    { href: "/services#build", label: "Build & Courts" },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-court-green rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">TPP</span>
              </div>
              <span className="font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
                The Padel Partners
              </span>
            </div>
            <p className="text-net-silver text-sm leading-relaxed mb-6">
              Your strategic partner for padel club development. Expert guidance at every stage — from feasibility to launch.
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

          {/* CTA */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Get Started</h3>
            <p className="text-sm text-net-silver mb-4">
              Ready to build your padel club? Talk to our team.
            </p>
            <a
              href="https://calendar.app.google/YGnWn5mJxVCL8Q648"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center min-h-[44px] px-4 py-2.5 bg-court-green text-white text-sm font-semibold rounded-md hover:bg-court-green-dark transition-colors mb-4"
            >
              Book a Call
            </a>
            <div className="mt-4">
              <a
                href="https://portal.thepadelpartners.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-net-silver hover:text-white transition-colors"
              >
                Client Portal →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
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
