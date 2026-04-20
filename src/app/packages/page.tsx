import type { Metadata } from "next";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Packages — Monthly Consultancy Retainers",
  description:
    "Six padel club development consultancy packages from £99/month. Choose the level of support that matches your project stage.",
};

const packages = [
  {
    name: "Basic",
    price: 199,
    onboarding: 99,
    period: "/month",
    tag: null,
    highlight: false,
    description: "Early-stage projects needing light guidance and direction.",
    stripePriceId: "price_basic_placeholder",
    features: [
      "1 monthly strategy call",
      "1 weekly check-in call",
      "Ongoing email support",
      "Access to exclusive resource library",
      "Private community access",
      "Introductions to industry experts",
      "Preferential rates on bolt-on services",
    ],
  },
  {
    name: "Build",
    price: 99,
    onboarding: 99,
    period: "/month",
    tag: null,
    highlight: false,
    description: "Plan, design and build focus for projects in delivery phase.",
    stripePriceId: "price_build_placeholder",
    features: [
      "1 monthly strategy call",
      "1 weekly check-in call",
      "Email, WhatsApp & phone support",
      "Review of design and build decisions",
      "Access to trusted specialists",
      "Private community access",
      "Access to bolt-on services",
    ],
  },
  {
    name: "Growth",
    price: 499,
    onboarding: null,
    period: "/month",
    tag: "Most Popular",
    highlight: true,
    description: "Active projects in motion — the most popular choice.",
    stripePriceId: "price_growth_placeholder",
    features: [
      "2 monthly strategy calls",
      "1 weekly check-in call",
      "Email and WhatsApp support",
      "Review and input on key decisions",
      "Access to exclusive resource library",
      "Private community access",
      "Introductions to trusted industry experts",
      "Priority support",
      "Preferential rates on bolt-on services",
    ],
  },
  {
    name: "Expand",
    price: 999,
    onboarding: null,
    period: "/month",
    tag: null,
    highlight: false,
    description: "Existing clubs scaling or adding courts.",
    stripePriceId: "price_expand_placeholder",
    features: [
      "2 monthly strategy calls",
      "1 weekly check-in call",
      "Onboarding face-to-face meeting",
      "Email, WhatsApp and phone support",
      "Expansion planning and rollout guidance",
      "Site opportunity review",
      "Commercial decision-making support",
      "Access to exclusive resource library",
      "Priority support",
    ],
  },
  {
    name: "Strategic",
    price: 1999,
    onboarding: null,
    period: "/month",
    tag: "Premium",
    highlight: false,
    description: "Embedded expert support across all project decisions.",
    stripePriceId: "price_strategic_placeholder",
    features: [
      "1 weekly strategy call",
      "1 weekly check-in call",
      "Priority email, WhatsApp and phone support",
      "Detailed review of key project documents",
      "Strategic input across all milestones",
      "Attendance at selected key meetings",
      "Specialist partner coordination",
      "Access to exclusive resource library",
      "Best available rates on bolt-on services",
    ],
  },
  {
    name: "Club",
    price: 2999,
    onboarding: null,
    period: "/month",
    tag: "Top Tier",
    highlight: false,
    description: "Full operational review for existing clubs.",
    stripePriceId: "price_club_placeholder",
    features: [
      "1 monthly in-person strategy meeting",
      "1 weekly strategy call",
      "Priority email, WhatsApp and phone support",
      "Initial comprehensive club review",
      "Strategic recommendations across all areas",
      "Attendance at selected key meetings",
      "Specialist partner coordination",
      "Access to exclusive resource library",
      "Best available rates on bolt-on services",
    ],
  },
];

const faqs = [
  {
    q: "Can I switch packages?",
    a: "Yes — you can upgrade or downgrade at any time. Changes take effect at the next billing cycle.",
  },
  {
    q: "Is there a minimum commitment?",
    a: "No long-term contracts. All packages are monthly rolling. You can cancel at any time with 30 days notice.",
  },
  {
    q: "What are bolt-on services?",
    a: "Bolt-ons are one-off specialist services — feasibility reports, business plans, financial modelling, design packs and more. Package holders receive preferential pricing.",
  },
  {
    q: "What happens after I subscribe?",
    a: "You will receive a welcome email within 24 hours with onboarding details, portal access, and a link to book your first call.",
  },
];

export default function PackagesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-court-green uppercase tracking-wider mb-3">
            Monthly Packages
          </p>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-padel-black mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Support at every scale
          </h1>
          <p className="text-xl text-net-silver max-w-2xl mx-auto">
            Six tiers from light guidance to full embedded expert support. No long-term contracts — monthly rolling, cancel any time.
          </p>
        </div>
      </section>

      {/* Packages grid */}
      <section className="pb-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl p-5 sm:p-7 flex flex-col relative ${
                pkg.highlight
                  ? "bg-court-green ring-2 ring-court-green"
                  : "bg-white border border-gray-200 shadow-card"
              }`}
            >
              {pkg.tag && (
                <span
                  className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-4 w-fit ${
                    pkg.highlight
                      ? "bg-white/20 text-white"
                      : pkg.tag === "Top Tier"
                      ? "bg-turf-gold/10 text-turf-gold"
                      : "bg-court-green-light text-court-green"
                  }`}
                >
                  {pkg.tag}
                </span>
              )}
              {!pkg.tag && <div className="mb-9" />}

              <h2
                className={`text-2xl font-bold mb-1 ${pkg.highlight ? "text-white" : "text-padel-black"}`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {pkg.name}
              </h2>

              <div className="flex items-baseline gap-1 mb-1">
                <span className={`text-4xl font-bold ${pkg.highlight ? "text-white" : "text-padel-black"}`}>
                  £{pkg.price}
                </span>
                <span className={`text-sm ${pkg.highlight ? "text-white/70" : "text-net-silver"}`}>
                  {pkg.period}
                </span>
              </div>

              {pkg.onboarding && (
                <p className={`text-xs mb-3 ${pkg.highlight ? "text-white/60" : "text-net-silver"}`}>
                  + £{pkg.onboarding} onboarding fee
                </p>
              )}

              <p className={`text-sm mb-6 ${pkg.highlight ? "text-white/80" : "text-net-silver"}`}>
                {pkg.description}
              </p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2
                      size={15}
                      className={`flex-shrink-0 mt-0.5 ${pkg.highlight ? "text-white/80" : "text-court-green"}`}
                    />
                    <span className={pkg.highlight ? "text-white/90" : "text-padel-black"}>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-2.5">
                <form action="/api/checkout" method="POST">
                  <input type="hidden" name="priceId" value={pkg.stripePriceId} />
                  <input type="hidden" name="packageName" value={pkg.name} />
                  <button
                    type="submit"
                    className={`w-full py-3 rounded-md text-sm font-semibold transition-colors ${
                      pkg.highlight
                        ? "bg-white text-court-green hover:bg-court-green-light"
                        : "bg-court-green text-white hover:bg-court-green-dark"
                    }`}
                  >
                    Subscribe — £{pkg.price}/month
                  </button>
                </form>
                <a
                  href="https://calendar.app.google/YGnWn5mJxVCL8Q648"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2.5 rounded-md text-sm font-medium transition-colors text-center block ${
                    pkg.highlight
                      ? "text-white/70 hover:text-white"
                      : "text-net-silver hover:text-padel-black"
                  }`}
                >
                  Book a Call First →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What is included strip */}
      <section className="py-16 px-6 lg:px-8 bg-baseline-grey">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-2xl font-bold text-padel-black mb-8 text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            All packages include
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              "Access to client portal",
              "Resource library",
              "Private community access",
              "Expert network introductions",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100">
                <CheckCircle2 size={18} className="text-court-green flex-shrink-0" />
                <span className="text-sm font-medium text-padel-black">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl font-bold text-padel-black mb-10 text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Common questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="pb-6 border-b border-gray-100 last:border-0">
                <h3 className="font-semibold text-padel-black mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  {faq.q}
                </h3>
                <p className="text-net-silver text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8 bg-padel-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Not sure which package is right?
          </h2>
          <p className="text-white/60 mb-8">
            Book a free 30-minute call. We will help you figure out exactly what level of support your project needs.
          </p>
          <Button
            href="https://calendar.app.google/YGnWn5mJxVCL8Q648"
            external
            size="lg"
            variant="primary"
          >
            Book a Free Call
            <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </>
  );
}
