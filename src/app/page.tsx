import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "The Padel Partners — Your Strategic Partner for Padel Club Development",
  description:
    "Expert strategic consultancy for padel club development in the UK. We guide investors, developers and operators from feasibility through to launch and beyond.",
};

const stats = [
  { value: "8+", label: "Active Projects" },
  { value: "18", label: "Milestone Framework" },
  { value: "8", label: "UK Locations" },
  { value: "100%", label: "Client Focused" },
];

const phases = [
  { name: "Discovery", description: "Site finding, feasibility and business planning" },
  { name: "Planning", description: "Planning permission, approvals and drawings" },
  { name: "Finance", description: "Financial modelling and securing investment" },
  { name: "Design", description: "Layout, architecture and user experience" },
  { name: "Build", description: "Courts, construction and project delivery" },
  { name: "Brand", description: "Brand identity, positioning and naming" },
  { name: "Launch", description: "Pre-opening, marketing, team and operations" },
  { name: "Operations", description: "Post-launch optimisation and growth" },
];

const packages = [
  {
    name: "Growth",
    price: "£499",
    period: "/month",
    highlight: true,
    tag: "Most Popular",
    description: "For active projects in motion.",
    features: [
      "2 monthly strategy calls",
      "Weekly check-in call",
      "Email & WhatsApp support",
      "Review of key project decisions",
      "Resource library access",
      "Expert introductions",
      "Priority support",
    ],
  },
  {
    name: "Strategic",
    price: "£1,999",
    period: "/month",
    highlight: false,
    tag: "Premium",
    description: "Embedded expert support across all decisions.",
    features: [
      "Weekly strategy call",
      "Weekly check-in call",
      "Priority phone support",
      "Detailed document review",
      "Strategic input at every milestone",
      "Attendance at key meetings",
      "Specialist coordination",
    ],
  },
  {
    name: "Basic",
    price: "£199",
    period: "/month",
    highlight: false,
    tag: null,
    description: "Light guidance for early-stage projects.",
    features: [
      "1 monthly strategy call",
      "Weekly check-in call",
      "Email support",
      "Resource library access",
      "Expert introductions",
    ],
  },
];

const locations = [
  "Huddersfield", "London", "Birmingham", "Cheshire",
  "Plymouth", "Blackburn", "Northern Ireland", "Cotswolds",
];

const pillars = [
  {
    title: "Padel-specific expertise",
    description:
      "Not generalist consultants who happen to know padel. Everything we do is built around the unique demands of padel development.",
  },
  {
    title: "Full lifecycle coverage",
    description:
      "From the first feasibility question to operational excellence. One trusted partner across all 8 phases and 18 milestones.",
  },
  {
    title: "Speed without risk",
    description:
      "Structured support that keeps projects moving while protecting clients from expensive missteps and avoidable delays.",
  },
  {
    title: "Trusted network",
    description:
      "Proprietary relationships with specialists, suppliers and industry experts you simply cannot access independently.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-court-green-light rounded-full mb-6">
              <span className="w-2 h-2 bg-court-green rounded-full" />
              <span className="text-sm font-medium text-court-green">
                UK Padel Club Development Consultancy
              </span>
            </div>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-padel-black mb-6 leading-[1.05] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Your strategic partner for padel club development.
            </h1>
            <p className="text-xl text-net-silver leading-relaxed mb-10 max-w-2xl">
              We work with investors, developers and operators at every stage — from testing feasibility right through to launch and operations. Build smarter. Launch stronger.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                href="https://calendar.app.google/YGnWn5mJxVCL8Q648"
                external
                size="lg"
                variant="primary"
              >
                Book a Free Call
                <ArrowRight size={16} />
              </Button>
              <Button href="/packages" size="lg" variant="outline">
                View Packages
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 rounded-xl overflow-hidden mt-10 sm:mt-16 border border-gray-100">
            {stats.map((stat) => (
              <div key={stat.value} className="bg-white px-6 py-8 text-center">
                <div
                  className="text-4xl font-bold text-court-green mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-net-silver">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 Phases */}
      <section className="py-20 px-6 lg:px-8 bg-baseline-grey">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-semibold text-court-green uppercase tracking-wider mb-3">
              How we work
            </p>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-padel-black mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Expert guidance. Every stage.
            </h2>
            <p className="text-lg text-net-silver">
              Our structured 8-phase, 18-milestone framework means clients always know where they are and what comes next. No guesswork. No costly surprises.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {phases.map((phase, i) => (
              <div key={phase.name} className="bg-white rounded-xl p-6 border border-gray-100 shadow-card">
                <div className="w-8 h-8 bg-court-green-light rounded-md flex items-center justify-center mb-4">
                  <span className="text-court-green text-sm font-bold">{i + 1}</span>
                </div>
                <h3 className="font-semibold text-padel-black mb-1.5" style={{ fontFamily: "var(--font-display)" }}>
                  {phase.name}
                </h3>
                <p className="text-sm text-net-silver leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why TPP */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-court-green uppercase tracking-wider mb-3">
                Why The Padel Partners
              </p>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-padel-black mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Not just consultancy. A genuine partnership.
              </h2>
              <p className="text-lg text-net-silver mb-8">
                We bring deep, padel-specific expertise that generalist consultants simply do not have. We treat your project as our own — and our track record shows it.
              </p>
              <Button href="/packages" size="lg" variant="primary">
                Explore Packages
                <ArrowRight size={16} />
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="p-5 rounded-xl bg-baseline-grey">
                  <div className="w-6 h-6 bg-court-green rounded-sm flex items-center justify-center mb-3">
                    <CheckCircle2 size={14} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-padel-black mb-2 text-sm" style={{ fontFamily: "var(--font-display)" }}>
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-net-silver leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages preview */}
      <section className="py-20 px-6 lg:px-8 bg-baseline-grey">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold text-court-green uppercase tracking-wider mb-3">
              Packages
            </p>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-padel-black mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Support at every scale
            </h2>
            <p className="text-lg text-net-silver">
              Six tiers from early-stage guidance to full embedded expert support. Pick the package that matches where you are today.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-7 flex flex-col ${
                  pkg.highlight
                    ? "bg-court-green text-white"
                    : "bg-white border border-gray-100 shadow-card"
                }`}
              >
                {pkg.tag && (
                  <span
                    className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-4 w-fit ${
                      pkg.highlight
                        ? "bg-white/20 text-white"
                        : "bg-court-green-light text-court-green"
                    }`}
                  >
                    {pkg.tag}
                  </span>
                )}
                <h3
                  className={`text-xl font-bold mb-1 ${pkg.highlight ? "text-white" : "text-padel-black"}`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {pkg.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`text-3xl font-bold ${pkg.highlight ? "text-white" : "text-padel-black"}`}>
                    {pkg.price}
                  </span>
                  <span className={`text-sm ${pkg.highlight ? "text-white/70" : "text-net-silver"}`}>
                    {pkg.period}
                  </span>
                </div>
                <p className={`text-sm mb-6 ${pkg.highlight ? "text-white/80" : "text-net-silver"}`}>
                  {pkg.description}
                </p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle2
                        size={15}
                        className={`flex-shrink-0 ${pkg.highlight ? "text-white/80" : "text-court-green"}`}
                      />
                      <span className={pkg.highlight ? "text-white/90" : "text-padel-black"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/packages"
                  className={`w-full text-center py-2.5 rounded-md text-sm font-semibold transition-colors ${
                    pkg.highlight
                      ? "bg-white text-court-green hover:bg-court-green-light"
                      : "bg-court-green text-white hover:bg-court-green-dark"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button href="/packages" variant="outline" size="md">
              View All 6 Packages
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-10">
            <p className="text-sm font-semibold text-court-green uppercase tracking-wider mb-3">
              Track Record
            </p>
            <h2
              className="text-4xl font-bold text-padel-black mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Projects across the UK
            </h2>
            <p className="text-net-silver">
              From London to Northern Ireland — we have guided padel club development across the country.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((location) => (
              <div
                key={location}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-gray-100 bg-baseline-grey text-sm font-medium text-padel-black"
              >
                <MapPin size={14} className="text-court-green" />
                {location}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6 lg:px-8 bg-padel-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to build your padel club?
          </h2>
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Talk to our team. No obligation, no jargon — just honest guidance on what it takes to make your project a success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="https://calendar.app.google/YGnWn5mJxVCL8Q648"
              external
              size="lg"
              variant="primary"
            >
              Book a Free Call
              <ArrowRight size={16} />
            </Button>
            <Button href="/packages" size="lg" variant="outline">
              View Packages
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
