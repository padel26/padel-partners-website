import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import RoadmapCard from "@/components/ui/RoadmapCard";

export const metadata: Metadata = {
  title: "Padel Club Development Roadmap: 12 Phases | The Padel Partners",
  description:
    "A structured 12-phase roadmap covering every stage of padel club development, from initial concept through to a fully operational and growing club.",
  alternates: { canonical: "https://www.thepadelpartners.com/roadmap" },
};

type GateStyle = "green" | "gold" | "dark";

interface Phase {
  number: string;
  index: number;
  title: string;
  bubbleColor: string;
  dotStyle: "green" | "gold" | "dark";
  description: string;
  milestones: string[];
  gate: { label: string; style: GateStyle } | null;
}

const phases: Phase[] = [
  {
    number: "01",
    index: 1,
    title: "Conceive",
    bubbleColor: "#1A6B3A",
    dotStyle: "green",
    description:
      "Every great club starts here. This is where your idea becomes a real, credible vision, what type of club you want and how it makes money. Get this right and everything that follows is faster and sharper.",
    milestones: [
      "Vision, objectives & success criteria",
      "Founder alignment & decision structure",
      "Club format & experience definition",
      "Target customer & revenue direction",
      "Market opportunity mapping",
    ],
    gate: null,
  },
  {
    number: "02",
    index: 2,
    title: "Validate",
    bubbleColor: "#1A6B3A",
    dotStyle: "green",
    description:
      "Before you spend a penny, prove it works. Find the right location, test the numbers and make sure the opportunity is as good as it looks. The clubs that succeed aren't the most passionate, they're the most prepared.",
    milestones: [
      "Site finding, longlist & scoring matrix",
      "Competitor & demographic review",
      "Planning, flood, ecology & drainage",
      "Commercial & technical feasibility",
      "Feasibility report completion",
    ],
    gate: { label: "✓ Go / No-Go Decision", style: "green" },
  },
  {
    number: "03",
    index: 3,
    title: "Structure",
    bubbleColor: "#2C7A4E",
    dotStyle: "green",
    description:
      "The unglamorous stuff that protects everything else. Get the company set up properly, the shareholders aligned and the finances in order. It takes a week to do right and years to fix if you don't.",
    milestones: [
      "Business incorporation",
      "Shareholder structure & founder agreement",
      "Cap table & group structure",
      "Banking, accounting & tax registration",
      "Board & advisory setup",
    ],
    gate: null,
  },
  {
    number: "04",
    index: 4,
    title: "Plan",
    bubbleColor: "#2C7A4E",
    dotStyle: "green",
    description:
      "This is where ambition meets spreadsheet. Map every revenue stream, model every scenario and build a commercial plan so watertight that investors lean in. The clubs that get funded are the ones that can prove they've thought of everything.",
    milestones: [
      "Revenue model & pricing strategy",
      "Membership, coaching & F&B strategy",
      "Staffing structure & operating model",
      "KPI framework definition",
      "Business plan completion",
    ],
    gate: null,
  },
  {
    number: "05",
    index: 5,
    title: "Brand",
    bubbleColor: "#C9A84C",
    dotStyle: "gold",
    description:
      "Your club needs an identity that makes people stop and take notice. A name, a look and a voice that feels different, because in a market moving this fast, the clubs that stand out are the ones that get backed, chosen and remembered.",
    milestones: [
      "Club naming & trademark check",
      "Logo & visual identity system",
      "Tone of voice & brand guidelines",
      "Investor brand assets & collateral",
      "Website platform & domain setup",
    ],
    gate: null,
  },
  {
    number: "06",
    index: 6,
    title: "Fund",
    bubbleColor: "#B8963E",
    dotStyle: "gold",
    description:
      "Time to go and get the money. A compelling pitch, the right funders and a deal structured to protect the project long-term. This is the phase that turns a plan into a reality and when it's done, everything accelerates.",
    milestones: [
      "Financial modelling & investor deck",
      "Data room preparation",
      "Funding strategy & target lists",
      "Investor & lender meetings",
      "Legal completion of funding",
    ],
    gate: { label: "★ Funding Secured", style: "gold" },
  },
  {
    number: "07",
    index: 7,
    title: "Secure",
    bubbleColor: "#141414",
    dotStyle: "dark",
    description:
      "Lock down the site and lock it down properly. The right location on the right terms is one of the most important commercial decisions you'll make. Get the lease or purchase right and you've built the foundation for a genuinely profitable club.",
    milestones: [
      "Site securing strategy & offer",
      "Heads of terms negotiation",
      "Solicitor appointment & due diligence",
      "Lease clause reviews (rent, break, use)",
      "Access, utilities & parking rights",
    ],
    gate: { label: "✓ Site Secured", style: "dark" },
  },
  {
    number: "08",
    index: 8,
    title: "Design & Approve",
    bubbleColor: "#141414",
    dotStyle: "dark",
    description:
      "This is where the club starts to feel real. Every court, every space, every customer moment designed with intention, then taken through planning and statutory approvals to get the green light to build. Exciting, detailed, and absolutely critical to get right.",
    milestones: [
      "Consultant team setup & design brief",
      "Concept through technical design",
      "Court, canopy & materials specification",
      "Planning application & approval",
      "Building regs, licensing & consents",
    ],
    gate: { label: "✓ Statutory Approvals Complete", style: "dark" },
  },
  {
    number: "09",
    index: 9,
    title: "Procure",
    bubbleColor: "#3D3D3D",
    dotStyle: "dark",
    description:
      "The right contractors. The right suppliers. The right price. This phase is where the project either stays on budget or doesn't and the work done here makes the difference between a build that runs smoothly and one that doesn't.",
    milestones: [
      "Tender documentation & issue",
      "Contractor assessment & interviews",
      "Court, canopy & MEP supplier selection",
      "Technology & systems selection",
      "Value engineering & contract award",
    ],
    gate: { label: "✓ Contracts Executed", style: "dark" },
  },
  {
    number: "10",
    index: 10,
    title: "Build",
    bubbleColor: "#3D3D3D",
    dotStyle: "dark",
    description:
      "It's happening. The groundworks are in, the courts are going up and the club is coming out of the ground. Months of planning turning into something you can walk around, photograph and show the world. There is nothing quite like watching your padel club take shape.",
    milestones: [
      "Site mobilisation & enabling works",
      "Groundworks, foundations & drainage",
      "Superstructure, fit-out & MEP",
      "Court installation & glazing",
      "Commissioning, testing & snagging",
    ],
    gate: { label: "✓ Practical Completion", style: "dark" },
  },
  {
    number: "11",
    index: 11,
    title: "Launch",
    bubbleColor: "#1A6B3A",
    dotStyle: "green",
    description:
      "The team is hired, the members are signed up and the doors are about to open. This is the moment everything has been building towards and when it's done right, the energy in the room on opening day is something you'll never forget.",
    milestones: [
      "Team recruitment & training",
      "Website, social & digital build-out",
      "Pre-sales & founding member campaign",
      "Soft launch & trial operations",
      "Opening event & press activation",
    ],
    gate: { label: "🎾 Club Opens", style: "green" },
  },
  {
    number: "12",
    index: 12,
    title: "Grow",
    bubbleColor: "#0E4D29",
    dotStyle: "green",
    description:
      "The hard work is paying off. Members are coming back, the courts are full and the community around the club is building every week. This phase is about doing justice to what you've built and then, when the time is right, taking everything you've learned and going again.",
    milestones: [
      "KPI, revenue & membership monitoring",
      "Occupancy & pricing optimisation",
      "Community, events & coaching growth",
      "Compliance, maintenance & renewals",
      "Second-site feasibility & expansion",
    ],
    gate: { label: "→ Expansion Readiness Review", style: "green" },
  },
];


const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to develop a padel club in the UK",
  "description": "A structured 12-phase framework for developing a padel club from initial concept through to a fully operational and growing business.",
  "step": phases.map((phase) => ({
    "@type": "HowToStep",
    "position": phase.index,
    "name": phase.title,
    "text": phase.description,
    "itemListElement": phase.milestones.map((m) => ({
      "@type": "HowToDirection",
      "text": m,
    })),
  })),
};

export default function RoadmapPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      {/* Header */}
      <section className="pt-24 pb-10 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-court-green uppercase tracking-wider mb-3">
            Development Roadmap
          </p>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-padel-black mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Padel Club Development Roadmap
          </h1>
          <p className="text-xl text-net-silver max-w-2xl mx-auto">
            Our structured 12-phase framework covers every stage of padel club development<br className="hidden lg:block" /> from initial idea through to a fully operational and growing club.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="pb-10 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto lg:max-w-xs">
            {[
              { val: "12", label: "Phases" },
              { val: "383+", label: "Milestones" },
              { val: "26", label: "Sub-phases" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="text-3xl font-bold text-court-green"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.val}
                </div>
                <div className="text-xs text-net-silver uppercase tracking-wider mt-0.5 font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Snake grid */}
      <section className="pt-10 pb-10 px-6 lg:px-8 bg-baseline-grey">
        <div className="max-w-7xl mx-auto">

          {/* Mobile: simple vertical list */}
          <div className="lg:hidden space-y-4">
            {phases.map((phase) => (
              <RoadmapCard key={phase.number} phase={phase} />
            ))}
          </div>

          {/* Desktop: simple left-to-right grid */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-y-0">
            {phases.map((phase) => (
              <div key={phase.number} className="py-3">
                <RoadmapCard phase={phase} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portal sell section */}
      <section className="pt-10 pb-10 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-12 lg:items-stretch">

          {/* Text */}
          <div className="mb-10 lg:mb-0 flex flex-col">
            <p className="text-sm font-semibold text-court-green uppercase tracking-wider mb-3">
              Client Portal
            </p>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-padel-black mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Your personalised roadmap, managed for you.
            </h2>
            <p className="text-lg text-net-silver mb-6">
              Every consultancy package includes access to your own personalized client portal with a live dashboard that tracks your progress through all 383+ milestones, keeps your resources in one place and keeps you and our team fully aligned at every stage.
            </p>
            <div className="flex flex-wrap gap-3 mt-auto">
              <a
                href="https://calendar.app.google/YGnWn5mJxVCL8Q648"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-court-green text-white text-sm font-semibold rounded-md hover:bg-court-green-dark transition-colors"
              >
                Book a Demo
                <ArrowRight size={15} />
              </a>
              <a
                href="/packages"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-net-silver hover:text-padel-black transition-colors"
              >
                View Packages →
              </a>
            </div>
          </div>

          {/* Portal window mockups */}
          <div className="relative h-[340px] mb-12 lg:mb-0">

            {/* Back window — all portal sections */}
            <div className="absolute top-0 left-0 w-[80%] lg:w-[66%] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.10)] border border-gray-200 bg-white z-10" style={{ bottom: 0 }}>
              <div className="flex items-center gap-1.5 px-4 py-3 bg-[#F0F0EE] border-b border-gray-200 flex-shrink-0">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                <div className="ml-3 flex-1 bg-white rounded px-3 py-1 text-[10px] text-net-silver">
                  Client Portal
                </div>
              </div>
              <div className="p-3 bg-[#F4F4F2] h-full overflow-hidden space-y-3">
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
                <div>
                  <p className="text-[10px] font-bold text-padel-black mb-1">Brain Dump</p>
                  <div className="bg-white rounded-lg border border-gray-100 p-2">
                    <p className="text-[7px] text-net-silver mb-1.5">Share your thoughts, ideas, questions or concerns...</p>
                    <div className="flex justify-end">
                      <span className="bg-[#3D3D3D] text-white text-[7px] font-semibold px-2 py-0.5 rounded">▷ Send</span>
                    </div>
                  </div>
                </div>
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
              <div className="flex items-center gap-1.5 px-4 py-3 bg-[#F0F0EE] border-b border-gray-200">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                <div className="ml-3 flex-1 bg-white rounded px-3 py-1 text-[10px] text-net-silver">
                  Client Portal
                </div>
              </div>
              <div className="bg-[#F4F4F2] h-full overflow-hidden">
                <div className="bg-[#141414] px-4 py-2 flex items-center justify-between">
                  <div>
                    <p className="text-[8px] text-white/40">Welcome back</p>
                    <p className="text-xs font-bold text-white leading-tight">Padel Client</p>
                    <p className="text-[9px] text-white/50">New Padel Co</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-white/10 rounded px-2 py-1 text-center">
                      <p className="text-[7px] font-semibold text-white/50 uppercase tracking-widest">Progress</p>
                      <p className="text-sm font-bold text-white leading-tight">2%</p>
                      <p className="text-[7px] text-white/40">7 of 382</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#141414] px-4 pb-2">
                  <div className="w-full bg-white/10 rounded-full h-0.5">
                    <div className="bg-court-green h-0.5 rounded-full" style={{ width: "2%" }} />
                  </div>
                </div>
                <div className="px-5 pt-4 pb-1">
                  <p className="text-xs font-bold text-padel-black mb-0.5">Project Roadmap</p>
                  <p className="text-[9px] text-net-silver mb-3">Track your progress through each stage of your padel club development journey.</p>
                  <div className="space-y-1.5">
                    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                      <div className="flex items-center gap-2.5 px-3 py-2.5">
                        <span className="w-3.5 h-3.5 rounded border border-gray-300 flex-shrink-0" />
                        <span className="text-[10px] font-bold text-court-green">Conceive</span>
                        <span className="text-[9px] text-net-silver ml-1">2/6 complete</span>
                        <span className="ml-auto text-net-silver text-[10px]">∧</span>
                      </div>
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
        <div className="max-w-7xl mx-auto mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Milestone Tracker",
                description:
                  "Your personalised project roadmap tracks progress through every milestone across all 12 phases, so you always know exactly where you are and what comes next.",
              },
              {
                title: "Resource Library",
                description:
                  "An extensive library of frameworks, templates and guides aligned to each phase, free to access and built specifically for padel club development.",
              },
              {
                title: "Call Reports",
                description:
                  "Every strategy call, meeting and check-in is followed by a structured report, capturing decisions made, actions agreed and next steps, all stored in your portal.",
              },
              {
                title: "Priority Task Tracker",
                description:
                  "A live action list populated by your advisor after every call and review, so nothing slips through the cracks and accountability stays sharp.",
              },
              {
                title: "Brain Dump",
                description:
                  "Capture thoughts, questions and ideas at any time and send them directly to your advisor, reviewed and incorporated into your strategy at the next session.",
              },
              {
                title: "One Partner. Every Phase.",
                description:
                  "From your first feasibility question to opening day and beyond, your portal grows with your project, a single, structured record of your entire development journey.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-baseline-grey rounded-2xl p-6 border border-gray-100"
              >
                <h3
                  className="font-bold text-padel-black mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-net-silver leading-relaxed">
                  {item.description}
                </p>
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
            Ready to start your journey?
          </h2>
          <p className="text-white/60 mb-8 lg:whitespace-nowrap">
            Book a call and we will help you identify exactly where you are on the roadmap and what comes next.
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
