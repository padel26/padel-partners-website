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
      "From the first feasibility question to operational excellence. One trusted partner across all 12 phases and 383+ milestones.",
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
              Your strategic<br className="hidden lg:block" /> partner for<br className="hidden lg:block" /> padel club<br className="hidden lg:block" /> development.
            </h1>
            <p className="text-lg text-net-silver leading-relaxed mb-10 max-w-2xl lg:max-w-[700px]">
              The Padel Partners is a specialist consultancy for padel club development in the UK. We bring expert guidance, trusted specialists and structured support at every phase.
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
          <p className="text-sm font-semibold text-court-green uppercase tracking-wider mb-3">
            Why The Padel Partners
          </p>
        </div>
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-12 lg:items-stretch">

          {/* Text */}
          <div className="mb-10 lg:mb-0">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-padel-black mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Access the expertise you need when you need it.
            </h2>
            <p className="text-lg text-net-silver mb-6">
              We work alongside you as a trusted strategic partner, providing coordination, input and oversight across every phase. The result is a development process that runs effectively, with informed decision-making, clear accountability and timely progress.
            </p>
            <h3
              className="text-xl sm:text-2xl font-semibold text-padel-black mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Client Portal & Roadmap
            </h3>
            <p className="text-lg text-net-silver mb-6">
              Working with us you get access to your own personalised client portal to track 383+ milestones over 12 phases, access our free resource library, your strategy reports, manage your action points, share files and stay fully aligned with our team at every stage.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                href="https://calendar.app.google/YGnWn5mJxVCL8Q648"
                external
                size="md"
                variant="primary"
              >
                Book a Demo
                <ArrowRight size={16} />
              </Button>
              <Link
                href="/roadmap"
                className="inline-flex items-center gap-2 text-sm font-semibold text-court-green hover:text-padel-black transition-colors"
              >
                View full roadmap <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Portal window mockups */}
          <div className="relative h-[340px] lg:h-full">

            {/* Back window — action points / share files view */}
            <div className="absolute top-0 left-0 w-[80%] lg:w-[66%] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.10)] border border-gray-200 bg-white z-10" style={{ bottom: 0 }}>
              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-[#F0F0EE] border-b border-gray-200 flex-shrink-0">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                <div className="ml-3 flex-1 bg-white rounded px-3 py-1 text-[10px] text-net-silver">
                  Client Portal
                </div>
              </div>
              {/* Content */}
              <div className="p-3 bg-[#F4F4F2] h-full overflow-hidden space-y-3">

                {/* FREE Resource Library */}
                <div>
                  <p className="text-[10px] font-bold text-padel-black mb-1">FREE Resource Library</p>
                  <div className="grid grid-cols-3 gap-1">
                    {["Site Appraisal Checklist","Feasibility Framework","Business Plan Framework","Financial Model Builder","Funding Guide","Planning Guide"].map((r) => (
                      <div key={r} className="bg-white rounded-lg border border-gray-100 px-1.5 py-1.5 flex items-center justify-between gap-1">
                        <span className="text-[7px] text-padel-black leading-tight">{r}</span>
                        <span className="w-4 h-4 rounded bg-[#E8F5EE] flex items-center justify-center text-court-green text-[8px] flex-shrink-0">↓</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* My Action Points */}
                <div>
                  <p className="text-[10px] font-bold text-padel-black mb-1">My Action Points</p>
                  <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                    <div className="flex items-center justify-between px-2.5 py-1.5 border-b border-gray-50">
                      <p className="text-[8px] font-semibold text-padel-black">Onboarding Call Action Points</p>
                      <span className="text-[7px] text-net-silver">3/3 done</span>
                    </div>
                    <div className="px-2.5 py-1.5 space-y-1">
                      {["Share your target site list","Complete the feasibility form","Book your first strategy call"].map((item) => (
                        <div key={item} className="flex items-center gap-1.5">
                          <span className="w-3 h-3 rounded bg-court-green flex items-center justify-center text-white text-[6px] flex-shrink-0">✓</span>
                          <span className="text-[7px] text-net-silver line-through">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between px-2.5 py-1.5 border-t border-gray-50">
                      <p className="text-[8px] font-semibold text-padel-black">Strategy Call Action Points</p>
                      <span className="text-[7px] text-net-silver">1/3 done</span>
                    </div>
                    <div className="px-2.5 py-1.5 space-y-1">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded bg-court-green flex items-center justify-center text-white text-[6px] flex-shrink-0">✓</span>
                        <span className="text-[7px] text-net-silver line-through">Review the competitor analysis</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded border border-gray-300 flex-shrink-0" />
                        <span className="text-[7px] text-padel-black">Request heads of terms from landlord</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded border border-gray-300 flex-shrink-0" />
                        <span className="text-[7px] text-padel-black">Share draft financial model for review</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* My Reports */}
                <div>
                  <p className="text-[10px] font-bold text-padel-black mb-1">My Reports</p>
                  <div className="grid grid-cols-2 gap-1">
                    {["Onboarding Report","Strategy Call Report"].map((r) => (
                      <div key={r} className="bg-white rounded-lg border border-gray-100 px-2 py-1.5 flex items-center justify-between">
                        <div>
                          <p className="text-[7px] font-semibold text-padel-black">{r}</p>
                          <p className="text-[6px] text-net-silver">14 April 2026</p>
                        </div>
                        <span className="w-4 h-4 rounded bg-[#E8F5EE] flex items-center justify-center text-court-green text-[8px] flex-shrink-0">↓</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Brain Dump */}
                <div>
                  <p className="text-[10px] font-bold text-padel-black mb-1">Brain Dump</p>
                  <div className="bg-white rounded-lg border border-gray-100 p-2">
                    <p className="text-[7px] text-net-silver mb-1.5">Share your thoughts, ideas, questions or concerns...</p>
                    <div className="flex justify-end">
                      <span className="bg-[#3D3D3D] text-white text-[7px] font-semibold px-2 py-0.5 rounded">▷ Send</span>
                    </div>
                  </div>
                </div>

                {/* Share Files */}
                <div>
                  <p className="text-[10px] font-bold text-padel-black mb-1">Share Files</p>
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-2 text-center bg-white mb-1">
                    <p className="text-[7px] font-semibold text-padel-black">Click to upload a file</p>
                    <p className="text-[6px] text-net-silver">Any file type accepted</p>
                  </div>
                  <div className="bg-white rounded-lg border border-gray-100 px-2 py-1.5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded bg-[#E8F5EE] flex items-center justify-center text-court-green text-[8px] flex-shrink-0">📄</span>
                      <div>
                        <p className="text-[7px] font-semibold text-padel-black">Site_Appraisal_v2.pdf</p>
                        <p className="text-[6px] text-net-silver">Uploaded 22 April 2026</p>
                      </div>
                    </div>
                    <span className="text-[7px] text-court-green font-semibold">✓</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Front window — portal roadmap view */}
            <div className="absolute top-[12%] bottom-0 right-0 w-[68%] lg:w-[60%] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.18)] border border-gray-200 bg-white z-20">
              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-[#F0F0EE] border-b border-gray-200">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                <div className="ml-3 flex-1 bg-white rounded px-3 py-1 text-[10px] text-net-silver">
                  Client Portal
                </div>
              </div>
              {/* Portal content */}
              <div className="bg-[#F4F4F2] h-full overflow-hidden">
                {/* Dark header banner */}
                <div className="bg-[#141414] px-5 py-4 flex items-start justify-between">
                  <div>
                    <p className="text-[9px] text-white/40 mb-0.5">Welcome back</p>
                    <p className="text-sm font-bold text-white leading-tight">Padel Client</p>
                    <p className="text-[10px] text-white/50 mt-0.5">New Padel Co</p>
                  </div>
                  <div className="bg-white/10 rounded-lg px-3 py-2 text-center">
                    <p className="text-[8px] font-semibold text-white/50 uppercase tracking-widest">Progress</p>
                    <p className="text-base font-bold text-white leading-tight">2%</p>
                    <p className="text-[8px] text-white/40">7 of 382 milestones</p>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="bg-[#141414] px-5 pb-3">
                  <div className="w-full bg-white/10 rounded-full h-1">
                    <div className="bg-court-green h-1 rounded-full" style={{ width: "2%" }} />
                  </div>
                </div>

                {/* Roadmap section */}
                <div className="px-5 pt-4 pb-1">
                  <p className="text-xs font-bold text-padel-black mb-0.5">Project Roadmap</p>
                  <p className="text-[9px] text-net-silver mb-3">Track your progress through each stage of your padel club development journey.</p>

                  {/* Phase rows */}
                  <div className="space-y-1.5">
                    {/* Phase 01 — expanded */}
                    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                      <div className="flex items-center gap-2.5 px-3 py-2.5">
                        <span className="w-3.5 h-3.5 rounded border border-gray-300 flex-shrink-0" />
                        <span className="text-[10px] font-bold text-court-green">Conceive</span>
                        <span className="text-[9px] text-net-silver ml-1">2/6 complete</span>
                        <span className="ml-auto text-net-silver text-[10px]">∧</span>
                      </div>
                      {/* Expanded items */}
                      <div className="border-t border-gray-50 px-3 pb-2">
                        <p className="text-[8px] font-semibold text-net-silver uppercase tracking-widest py-1.5">Vision, Strategy & Concept</p>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 py-1 text-[9px]">
                            <span className="w-3 h-3 rounded bg-court-green flex items-center justify-center text-white text-[7px] flex-shrink-0">✓</span>
                            <span className="text-net-silver line-through">Define Vision, Mission & Objectives</span>
                          </div>
                          <div className="flex items-center gap-2 py-1 text-[9px] bg-yellow-50 -mx-1 px-1 rounded">
                            <span className="w-3 h-3 rounded bg-yellow-400 flex-shrink-0" />
                            <span className="text-padel-black">Decision-Maker Appointments</span>
                          </div>
                          <div className="flex items-center gap-2 py-1 text-[9px]">
                            <span className="w-3 h-3 rounded border border-gray-200 flex-shrink-0" />
                            <span className="text-padel-black">Define Initial Budget Expectations</span>
                          </div>
                          <div className="flex items-center gap-2 py-1 text-[9px] bg-red-50 -mx-1 px-1 rounded">
                            <span className="w-3 h-3 rounded bg-red-500 flex items-center justify-center text-white text-[7px] flex-shrink-0">!</span>
                            <span className="text-red-600 font-semibold">Define Experience & Atmosphere</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Phases 02–04 collapsed */}
                    {[
                      { n: "02", label: "Validate", count: "5/12" },
                      { n: "03", label: "Structure", count: "0/7" },
                      { n: "04", label: "Plan", count: "0/31" },
                    ].map((p) => (
                      <div key={p.n} className="bg-white rounded-xl border border-gray-100 flex items-center gap-2.5 px-3 py-2.5">
                        <span className="w-3.5 h-3.5 rounded border border-gray-300 flex-shrink-0" />
                        <span className="text-[10px] font-bold text-court-green">{p.n} {p.label}</span>
                        <span className="text-[9px] text-net-silver ml-1">{p.count} complete</span>
                        <span className="ml-auto text-net-silver text-[10px]">∨</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Packages preview */}
      <section id="packages" className="pt-10 pb-10 px-6 lg:px-8 bg-baseline-grey scroll-mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-10 mx-auto text-center">
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


      {/* Buy Courts */}
      <section className="bg-[#141414] overflow-hidden">
        <div className="relative w-full h-[480px] lg:h-[520px]">
          <Image
            src="/courts-aerial.webp"
            alt="Aerial view of floodlit padel courts at night — premium padel court supply and installation UK"
            fill
            className="object-cover"
            style={{ objectPosition: "50% 72%", opacity: 0.45 }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent" />
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end px-6 lg:px-8 pb-12">
            <div className="max-w-7xl mx-auto w-full">
              <p className="text-sm font-semibold text-court-green uppercase tracking-wider mb-3">Court Supply</p>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Padel Courts
              </h2>
              <p className="text-white/60 text-lg mb-6 max-w-xl leading-relaxed">
                We partner with a premium Spanish manufacturer who have delivered more than 3,000 padel projects globally, providing incredible market knowledge as well as classic, panoramic and super panoramic courts, delivered and installed across the UK.
              </p>
              <Button href="/courts" size="md" variant="primary">
                View Courts
                <ArrowRight size={16} />
              </Button>
            </div>
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

      {/* Newsletter + CTA */}
      <section className="pt-10 pb-10 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

          {/* Left — CTA container */}
          <div className="bg-baseline-grey rounded-2xl p-8 flex flex-col justify-center">
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

          {/* Right — Newsletter */}
          <div className="bg-baseline-grey rounded-2xl p-8 flex flex-col justify-center text-center">
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
            <form className="flex flex-col gap-3 max-w-md mx-auto w-full">
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

        </div>
      </section>
    </>
  );
}
