import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";
import PackagesExpand from "@/components/ui/PackagesExpand";

export const metadata: Metadata = {
  title: "The Padel Partners — Padel Club Development Consultancy UK",
  description:
    "The UK's padel club development consultancy. Expert guidance for investors, developers and operators from feasibility and planning through to launch and operations.",
  alternates: { canonical: "https://www.thepadelpartners.com" },
};

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
    name: "Basic",
    price: "£199",
    period: "/month",
    onboardingFee: "+ £99 onboarding fee",
    highlight: false,
    tag: null,
    description: "Expert guidance for early-stage projects.",
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
    price: "£499",
    period: "/month",
    highlight: true,
    tag: "Most Popular",
    description: "For active projects in motion.",
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
    price: "£1,999",
    period: "/month",
    highlight: false,
    tag: null,
    description: "Embedded expert support.",
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
];

const locations = [
  "Huddersfield", "London", "Birmingham", "Cheshire",
  "Plymouth", "Blackburn", "Northern Ireland", "Cotswolds",
];

const journeySteps = [
  "Conceive", "Validate", "Structure", "Plan", "Brand", "Fund",
  "Secure", "Design", "Procure", "Build", "Launch", "Grow",
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
      <section className="pt-24 pb-10 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-padel-black mb-6 leading-[1.05] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Your strategic partner<br className="hidden lg:block" /> for padel club development.
            </h1>
            <p className="text-lg text-net-silver leading-relaxed mb-10 max-w-2xl lg:max-w-[700px]">
              We help our clients in both the private and public sector bring their padel projects to life with expert guidance, trusted specialists and structured support at every stage.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                href="https://calendar.app.google/YGnWn5mJxVCL8Q648"
                external
                size="md"
                variant="primary"
              >
                Book a Call
                <ArrowRight size={16} />
              </Button>
              <Button href="#packages" size="md" variant="outline">
                View Packages
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 8 Phases */}
      <section className="pt-10 pb-10 px-6 lg:px-8 bg-baseline-grey">
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Text */}
          <div>
            <p className="text-sm font-semibold text-court-green uppercase tracking-wider mb-3">
              How we work
            </p>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-padel-black mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Expert guidance.<br /> Every stage.
            </h2>
            <p className="text-lg text-net-silver">
              Our team brings clarity, structure and expertise to padel club development projects. Whether you&apos;re exploring the feasibility of a project, navigating planning, buying courts, or gearing up for launch, we provide the strategic support and the specialist connections you need to succeed.
            </p>
          </div>
          {/* Image */}
          <div className="mt-10 lg:mt-0 rounded-2xl overflow-hidden border border-gray-200">
            <Image
              src="/how-we-work-v2.jpg"
              alt="Indoor padel club facility architectural render — padel court development UK"
              width={900}
              height={600}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-auto scale-110"
              style={{ filter: "hue-rotate(-80deg) saturate(0.35)" }}
            />
          </div>
        </div>
      </section>

      {/* Why TPP */}
      <section className="pt-10 pb-10 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-semibold text-court-green uppercase tracking-wider mb-3">
              Why The Padel Partners
            </p>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-padel-black mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Access the expertise you need when you need it.
            </h2>
            <p className="text-lg text-net-silver">
              We work alongside you as a trusted strategic partner, providing coordination, input and oversight across every phase. The result is a development process that runs effectively, with informed decision-making, clear accountability and timely progress.
            </p>
          </div>

          {/* Roadmap intro */}
          <div className="mb-6">
            <h3
              className="text-xl sm:text-2xl font-bold text-padel-black mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Padel Club Roadmap
            </h3>
            <p className="text-net-silver text-base max-w-2xl">
              Our structured 12-phase framework covers every stage of padel club development from initial idea through to a fully operational and growing club.
            </p>
          </div>

          {/* 12-phase cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {journeySteps.map((step, i) => (
              <Link
                key={step}
                href={`/roadmap#phase-${String(i + 1).padStart(2, "0")}`}
                className="flex items-center gap-3 px-4 py-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-court-green hover:shadow-md transition-all group"
              >
                <span className="text-sm font-bold text-court-green tabular-nums flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold text-padel-black leading-tight group-hover:text-court-green transition-colors" style={{ fontFamily: "var(--font-display)" }}>
                  {step}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-6">
            <a
              href="https://calendar.app.google/YGnWn5mJxVCL8Q648"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-court-green rounded-lg text-white text-sm font-semibold whitespace-nowrap hover:bg-court-green-dark transition-colors"
            >
              Book a Call
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Packages preview */}
      <section id="packages" className="pt-10 pb-10 px-6 lg:px-8 bg-baseline-grey scroll-mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-10">
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
              We offer six tiers from light guidance to full embedded expert support.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-7 flex flex-col bg-white border ${
                  pkg.highlight
                    ? "border-court-green shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
                    : "border-gray-100 shadow-card"
                }`}
              >
                {pkg.tag && (
                  <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-4 w-fit bg-court-green-light text-court-green">
                    {pkg.tag}
                  </span>
                )}
                <h3
                  className="text-xl font-bold mb-1 text-padel-black"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {pkg.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2 flex-wrap">
                  <span className="text-3xl font-bold text-padel-black">
                    {pkg.price}
                  </span>
                  <span className="text-sm text-net-silver">
                    {pkg.period}
                  </span>
                  {"onboardingFee" in pkg && (
                    <span className="text-xs text-net-silver ml-1">{(pkg as typeof pkg & { onboardingFee: string }).onboardingFee}</span>
                  )}
                </div>
                <p className="text-sm mb-6 text-net-silver">
                  {pkg.description}
                </p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 size={15} className="flex-shrink-0 text-court-green" />
                      <span className="text-padel-black">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/packages"
                  className="w-full text-center py-2.5 rounded-md text-sm font-semibold transition-colors bg-court-green text-white hover:bg-court-green-dark"
                >
                  Subscribe — {pkg.price}/month
                </Link>
                <a
                  href="https://calendar.app.google/YGnWn5mJxVCL8Q648"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 rounded-md text-sm font-medium text-net-silver hover:text-padel-black transition-colors block"
                >
                  Book a Call First →
                </a>
              </div>
            ))}
          </div>
          <PackagesExpand />
        </div>
      </section>

      {/* Social proof / mid-page CTA */}
      <section className="pt-10 pb-10 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-baseline-grey rounded-2xl p-8 max-w-3xl mx-auto">
            <div>
              <p className="text-lg text-net-silver leading-relaxed text-center mb-6">
                With proven sequencing, clear oversight and commercially focused decision making, we help you avoid costly mistakes, saving you thousands and keeping the project on track from day one. Our clients benefit from ongoing access to our team throughout the journey, giving them strategic support, expert input, accountability and trusted specialist guidance from concept to delivery.
              </p>
              <div className="flex justify-center">
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
            </div>
          </div>
        </div>
      </section>

      {/* Buy Courts */}
      <section className="pt-10 pb-10 px-6 lg:px-8 bg-baseline-grey">
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-12 lg:items-stretch">
          {/* Text */}
          <div className="flex flex-col">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-padel-black mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Padel Courts
            </h2>
            <p className="text-lg text-net-silver leading-relaxed mb-8">
              We partner with a premium Spanish manufacturer who have delivered more than 3,000 padel projects globally, providing incredible market knowledge as well as classic, panoramic and super panoramic courts, delivered and installed.
            </p>
            <Button href="/courts" size="md" variant="primary" className="mt-auto self-start">
              View Courts
              <ArrowRight size={16} />
            </Button>
          </div>
          {/* Image */}
          <div className="mt-10 lg:mt-0 rounded-2xl overflow-hidden border border-gray-200">
            <Image
              src="/courts-aerial.webp"
              alt="Aerial view of floodlit padel courts at night — premium padel court supply and installation UK"
              width={900}
              height={600}
              className="w-full h-full object-cover" style={{ objectPosition: "50% 72%" }}
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="pt-10 pb-10 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-8">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-padel-black mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Services
            </h2>
            <p className="text-lg text-net-silver leading-relaxed lg:whitespace-nowrap">
              Targeted and comprehensive expertise exactly when you need it to support you across every phase of your project.
            </p>
          </div>
          {/* Mobile: 8 buttons with Community & Coaching merged */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:hidden">
            {[
              { label: "Feasibility", href: "/services#feasibility" },
              { label: "Business Services", href: "/services#business" },
              { label: "Finance", href: "/services#finance" },
              { label: "Planning & Design", href: "/services#design" },
              { label: "Build & Courts", href: "/services#build" },
              { label: "Brand & Marketing", href: "/services#brand" },
              { label: "Operations", href: "/services#operations" },
              { label: "Community & Coaching", href: "/services#operations" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center justify-between px-4 py-3 h-12 rounded-xl border border-gray-100 bg-baseline-grey text-sm font-medium text-padel-black hover:border-court-green hover:text-court-green transition-colors group"
              >
                {item.label}
                <ArrowRight size={14} className="text-net-silver group-hover:text-court-green transition-colors flex-shrink-0 ml-2" />
              </Link>
            ))}
          </div>
          {/* Desktop: 9 buttons with Community and Coaching separate */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-3">
            {[
              { label: "Feasibility", href: "/services#feasibility" },
              { label: "Business Services", href: "/services#business" },
              { label: "Finance", href: "/services#finance" },
              { label: "Planning & Design", href: "/services#design" },
              { label: "Build & Courts", href: "/services#build" },
              { label: "Brand & Marketing", href: "/services#brand" },
              { label: "Operations", href: "/services#operations" },
              { label: "Community", href: "/services#operations" },
              { label: "Coaching", href: "/services#operations" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center justify-between px-4 py-3 h-12 rounded-xl border border-gray-100 bg-baseline-grey text-sm font-medium text-padel-black hover:border-court-green hover:text-court-green transition-colors group"
              >
                {item.label}
                <ArrowRight size={14} className="text-net-silver group-hover:text-court-green transition-colors flex-shrink-0 ml-2" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="pt-10 pb-10 px-6 lg:px-8 bg-baseline-grey">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-10">
            <p className="text-sm font-semibold text-court-green uppercase tracking-wider mb-3">
              Track Record
            </p>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-padel-black mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { src: "/logos/padel-shed.png", alt: "Padel Shed — padel club development client", invert: false, scale: 1.4 },
              { src: "/logos/everybody.png", alt: "everybody Health & Leisure — padel facility development client", invert: false, scale: 1 },
              { src: "/logos/powerhouse-padel.png", alt: "Powerhouse Padel — padel club development client UK", invert: true, scale: 1 },
              { src: "/logos/clubhouse.png", alt: "Clubhouse Padel Fit Social — padel club development client", invert: true, scale: 1 },
              { src: "/logos/royal-parks.png", alt: "The Royal Parks — public sector padel development client", invert: false, scale: 1 },
              { src: "/logos/social-sports-society.png", alt: "Social Sports Society — padel club development client", invert: false, scale: 1 },
              { src: "/logos/padel-loft.png", alt: "The Padel Loft — padel club development client UK", invert: false, scale: 2.4 },
              { src: "/logos/lakes-by-yoo.webp", alt: "The Lakes by Yoo — luxury padel club development client", invert: false, scale: 2.0 },
            ].map(({ src, alt, invert, scale }) => (
              <div
                key={alt}
                className="flex items-center justify-center px-6 py-5"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={200}
                  height={80}
                  className="w-full h-12 object-contain"
                  style={{
                    filter: invert
                      ? "invert(1) grayscale(1) brightness(0.35)"
                      : "grayscale(1) brightness(0.35)",
                    mixBlendMode: "multiply",
                    transform: `scale(${scale})`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter signup */}
      <section className="pt-10 pb-10 px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold text-court-green uppercase tracking-wider mb-3">
            Join our newsletter!
          </p>
          <h2
            className="text-3xl font-bold text-padel-black mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Stay up to date
          </h2>
          <p className="text-net-silver mb-8">
            Stay up to date with the latest development insights, industry news, trends and updates from The Padel Partners direct to your inbox.
          </p>
          <form className="flex flex-col gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-2.5 rounded-md border border-gray-200 bg-white text-padel-black text-sm placeholder:text-net-silver focus:outline-none focus:ring-2 focus:ring-court-green"
            />
            <button
              type="submit"
              className="w-full px-5 py-2.5 bg-court-green text-white text-sm font-semibold rounded-md hover:bg-court-green-dark transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
