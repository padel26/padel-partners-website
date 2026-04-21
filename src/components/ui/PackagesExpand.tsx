"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, ChevronDown } from "lucide-react";
import Link from "next/link";

const collapsedPackages = [
  {
    name: "Build",
    price: "£99",
    period: "/month",
    onboardingFee: "+ £99 onboarding fee",
    tag: null,
    description: "Plan, design & build focus.",
    features: [
      "Client Portal Access",
      "1 monthly strategy call",
      "Weekly check-in call",
      "Email, WhatsApp & phone support",
      "Design and build decision support",
      "Access to trusted specialists",
      "Extensive Resource library",
      "Private community access",
      "Access to bolt-on services",
    ],
  },
  {
    name: "Expand",
    price: "£999",
    period: "/month",
    tag: null,
    description: "For existing clubs looking to scale.",
    features: [
      "Client Portal Access",
      "2 monthly strategy calls",
      "Weekly check-in call",
      "Onboarding face-to-face meeting",
      "Email, WhatsApp & phone support",
      "Expansion planning and rollout guidance",
      "Site opportunities and growth review",
      "Commercial decision-making support",
      "Extensive Resource library",
      "Access to trusted specialists",
      "Priority support",
      "Best rates on bolt-on services",
    ],
  },
  {
    name: "Club",
    price: "£2,999",
    period: "/month",
    tag: null,
    description: "Operational review for existing clubs.",
    features: [
      "Client Portal Access",
      "1 monthly in-person strategy meeting",
      "Weekly strategy call",
      "Priority phone & WhatsApp support",
      "Initial comprehensive club review",
      "Strategic recommendations in all areas",
      "Attendance at selected key meetings",
      "Coordination of trusted specialists",
      "Extensive Resource library",
      "Best available rates on bolt-on services",
    ],
  },
];

const ALL_OPEN = new Set([0, 1, 2]);

export default function PackagesExpand() {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());

  // Auto-expand all on desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = (e: MediaQueryListEvent | MediaQueryList) => {
      setOpenIndices(e.matches ? new Set(ALL_OPEN) : new Set());
    };
    update(mq);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <div className="space-y-5 mt-5 lg:grid lg:grid-cols-3 lg:gap-5 lg:space-y-0">
      {collapsedPackages.map((pkg, i) => {
        const isOpen = openIndices.has(i);
        return (
          <div
            key={pkg.name}
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-card flex flex-col"
          >
            {/* Header row — always visible */}
            <button
              onClick={() => setOpenIndices(prev => { const next = new Set(prev); isOpen ? next.delete(i) : next.add(i); return next; })}
              className="w-full flex flex-col px-6 pt-5 pb-4 text-left lg:cursor-default"
            >
              {/* Top row: name/tag + read more (hidden on desktop) */}
              <div className="flex items-center justify-between w-full mb-1">
                <div className="flex items-center gap-2">
                  <span
                    className="font-bold text-padel-black text-lg"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {pkg.name}
                  </span>
                  {pkg.tag && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-court-green-light text-court-green">
                      {pkg.tag}
                    </span>
                  )}
                </div>
                <span className="flex items-center gap-1 text-xs font-medium text-court-green flex-shrink-0 ml-4 whitespace-nowrap lg:hidden">
                  {isOpen ? "Close ×" : <>Read more <ChevronDown size={13} /></>}
                </span>
              </div>
              {/* Price row */}
              <div className="flex items-baseline gap-1 flex-wrap mb-0.5">
                <span className="text-xl font-bold text-padel-black">{pkg.price}</span>
                <span className="text-sm text-net-silver">{pkg.period}</span>
                {"onboardingFee" in pkg && (
                  <span className="text-xs text-net-silver ml-1">{(pkg as typeof pkg & { onboardingFee: string }).onboardingFee}</span>
                )}
              </div>
              {/* Description */}
              <p className="text-sm text-net-silver">{pkg.description}</p>
            </button>

            {/* Expanded content */}
            {isOpen && (
              <div className="px-6 pb-6 border-t border-gray-100 flex flex-col flex-1">
                <ul className="space-y-2.5 mt-5 mb-6 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 size={15} className="flex-shrink-0 text-court-green" />
                      <span className="text-padel-black">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/packages"
                  className="block w-full text-center py-2.5 rounded-md text-sm font-semibold bg-court-green text-white hover:bg-court-green-dark transition-colors"
                >
                  Subscribe — {pkg.price}/month
                </Link>
                <a
                  href="https://calendar.app.google/YGnWn5mJxVCL8Q648"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2.5 rounded-md text-sm font-medium text-net-silver hover:text-padel-black transition-colors"
                >
                  Book a Call First →
                </a>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
