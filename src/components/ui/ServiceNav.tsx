"use client";

const navItems = [
  { label: "Feasibility", href: "#feasibility" },
  { label: "Business", href: "#business" },
  { label: "Finance", href: "#finance" },
  { label: "Planning", href: "#design" },
  { label: "Build", href: "#build" },
  { label: "Marketing", href: "#brand" },
  { label: "Operations", href: "#operations" },
];

export default function ServiceNav() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      // Offset for fixed navbar (64px) + sticky service nav (~57px)
      const offset = 64 + 57 + 16;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-16 z-40 bg-white border-b border-gray-100 px-4 sm:px-6 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-2 justify-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="px-3 py-1.5 rounded-full border border-gray-200 text-sm font-medium text-padel-black hover:border-court-green hover:text-court-green hover:bg-court-green-light transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
