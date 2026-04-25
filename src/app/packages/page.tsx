import type { Metadata } from "next";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Padel Club Consultancy Packages — From £199/month",
  description:
    "Six padel club consultancy packages from £199/month — from early-stage guidance to embedded strategic support matched to your project stage and ambition.",
  alternates: { canonical: "https://www.thepadelpartners.com/packages" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I switch packages?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes you can upgrade or downgrade at any time. Changes take effect at the next billing cycle."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a minimum commitment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No long-term contracts. All packages are monthly rolling. You can cancel at any time with 30 days notice."
      }
    },
    {
      "@type": "Question",
      "name": "What are bolt-on services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bolt-ons are one-off or separate specialist services, like feasibility reports, business plans, financial modelling, design packs and more. Package holders receive preferential pricing."
      }
    },
    {
      "@type": "Question",
      "name": "What happens after I subscribe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You'll receive a welcome email with your onboarding pack, portal access, and a link to book your first strategy call."
      }
    }
  ]
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
    stripePriceId: "price_1TOXdR2LieSj9bWv16kWJe8U",
    features: [
      "Client Portal Access",
      "1 monthly strategy call",
      "Weekly check-in call",
      "Ongoing email support",
      "Access to exclusive resource library",
      "Private community access",
      "Introductions to industry experts",
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
    stripePriceId: "price_1TOXgL2LieSj9bWvOMAznxpK",
    features: [
      "Client Portal Access",
      "2 monthly strategy calls",
      "Weekly check-in call",
      "Email & WhatsApp support",
      "Review and input on key decisions",
      "Access to exclusive resource library",
      "Private community access",
      "Access to trusted industry specialists",
      "Priority support",
      "Preferential rates on services",
    ],
  },
  {
    name: "Strategic",
    price: 1999,
    onboarding: null,
    period: "/month",
    tag: null,
    highlight: false,
    description: "Embedded expert support across all project decisions.",
    stripePriceId: "price_1TOXin2LieSj9bWvULx0KZ7W",
    features: [
      "Client Portal Access",
      "Weekly strategy call",
      "Weekly check-in call",
      "Priority email, WhatsApp & phone support",
      "Detailed document review",
      "Strategic input at every milestone",
      "Attendance at key meetings",
      "Coordination of trusted specialists",
      "Access to exclusive resource library",
      "Private community access",
      "Best available rates on services",
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
    stripePriceId: "price_1TOXZR2LieSj9bWv2OI7wQhK",
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
    name: "Expand",
    price: 999,
    onboarding: null,
    period: "/month",
    tag: null,
    highlight: false,
    description: "Existing clubs scaling or adding courts.",
    stripePriceId: "price_1TOXlN2LieSj9bWvj1YSiKzR",
    features: [
      "2 monthly strategy calls",
      "1 weekly check-in call",
      "Onboarding face-to-face meeting",
      "Email, WhatsApp and phone support",
      "Expansion planning and rollout guidance",
      "Site opportunity review",
      "Commercial decision-making support",
      "Access to exclusive resource library",
      "Private community access",
      "Priority support",
      "Best available rates on services",
    ],
  },
  {
    name: "Club",
    price: 2999,
    onboarding: null,
    period: "/month",
    tag: null,
    highlight: false,
    description: "Full operational review for existing clubs.",
    stripePriceId: "price_1TOXn72LieSj9bWv1mAgs2DZ",
    features: [
      "1 monthly in-person strategy meeting",
      "1 weekly strategy call",
      "Priority email, WhatsApp & phone",
      "Initial comprehensive club review",
      "Strategic recommendations; all areas",
      "Attendance at selected key meetings",
      "Specialist partner coordination",
      "Access to exclusive resource library",
      "Private community access",
      "Best available rates on services",
    ],
  },
];

const faqs = [
  {
    q: "Can I switch packages?",
    a: "Yes you can upgrade or downgrade at any time. Changes take effect at the next billing cycle.",
  },
  {
    q: "Is there a minimum commitment?",
    a: "No long-term contracts. All packages are monthly rolling. You can cancel at any time with 30 days notice.",
  },
  {
    q: "What are bolt-on services?",
    a: "Bolt-ons are one-off or separate specialist services, like feasibility reports, business plans, financial modelling, design packs and more. Package holders receive preferential pricing.",
  },
  {
    q: "What happens after I subscribe?",
    a: "You'll receive a welcome email with your onboarding pack, portal access, and a link to book your first strategy call.",
  },
];

export default function PackagesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Header */}
      <section className="pt-24 pb-0 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-court-green uppercase tracking-wider mb-3">
            Packages
          </p>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-padel-black mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Padel club consultancy packages
          </h1>
          <p className="text-xl text-net-silver max-w-2xl mx-auto lg:whitespace-nowrap">
            We offer six tiers from early stage guidance to fully embedded expert support.
          </p>
        </div>
      </section>

      {/* Packages grid */}
      <section className="pt-10 pb-10 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl p-5 sm:p-7 flex flex-col relative bg-white ${
                pkg.highlight
                  ? "border border-court-green shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
                  : "border border-gray-200 shadow-card"
              }`}
            >
              {pkg.tag && (
                <span className="absolute top-5 right-5 text-xs font-semibold px-2.5 py-1 rounded-full bg-court-green-light text-court-green">
                  {pkg.tag}
                </span>
              )}

              <h2
                className="text-2xl font-bold mb-1 text-padel-black"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {pkg.name}
              </h2>

              <div className="flex items-baseline gap-1 flex-wrap mb-3">
                <span className="text-4xl font-bold text-padel-black">
                  £{pkg.price}
                </span>
                <span className="text-sm text-net-silver">
                  {pkg.period}
                </span>
                {pkg.onboarding && (
                  <span className="text-xs text-net-silver">
                    + £{pkg.onboarding} onboarding fee
                  </span>
                )}
              </div>

              <p className="text-sm mb-6 text-net-silver">
                {pkg.description}
              </p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5 text-court-green" />
                    <span className="text-padel-black">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-2.5">
                <form action="/api/checkout" method="POST">
                  <input type="hidden" name="priceId" value={pkg.stripePriceId} />
                  <input type="hidden" name="packageName" value={pkg.name} />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-md text-sm font-semibold transition-colors bg-court-green text-white hover:bg-court-green-dark"
                  >
                    Subscribe — £{pkg.price}/month
                  </button>
                </form>
                <a
                  href="https://calendar.app.google/YGnWn5mJxVCL8Q648"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-md text-sm font-medium transition-colors text-center block text-net-silver hover:text-padel-black"
                >
                  Book a Call First →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What is included strip */}
      <section className="pt-10 pb-10 px-6 lg:px-8 bg-baseline-grey">
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
              "Access to exclusive resource library",
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
      <section className="pt-10 pb-10 px-6 lg:px-8 bg-white">
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
      <section className="pt-10 pb-10 px-6 lg:px-8 bg-padel-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Not sure which package is right?
          </h2>
          <p className="text-white/60 mb-8">
            Book a 15-minute call.<br />We will help you figure out exactly what level of support your project needs.
          </p>
          <Button
            href="https://calendar.app.google/YGnWn5mJxVCL8Q648"
            external
            size="md"
            variant="primary"
          >
            Book a Call
            <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </>
  );
}
