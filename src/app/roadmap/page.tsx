import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import RoadmapCard from "@/components/ui/RoadmapCard";

export const metadata: Metadata = {
  title: "Padel Club Development Roadmap — 12 Phases | The Padel Partners",
  description:
    "A structured 12-phase roadmap covering every stage of padel club development — from initial concept through to a fully operational and growing club.",
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
      "Define the vision, format, target customer and revenue model before a single penny is spent.",
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
      "Test the concept against reality. Find and score sites, complete all feasibility work and make an informed go or no-go decision.",
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
      "Get the business properly formed before committing to anything significant. Legal, financial and governance foundations.",
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
      "Build the full commercial model. Define every revenue stream, staffing structure and operating model ready for investors.",
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
      "Create the identity before approaching investors or the market. Name the club and build the assets needed to present credibly.",
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
      "Secure the capital to make it happen. Build the investor proposition, prepare the data room and negotiate through to legal completion.",
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
      "Lock down the site on the right commercial terms. Negotiate and complete every legal clause before construction begins.",
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
      "Turn the concept into a fully designed and consented scheme — from design brief to planning permission and all statutory approvals.",
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
      "Get the right people under contract at the right price. Run a rigorous tender process and finalise the full procurement package.",
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
      "Deliver the physical club. Mobilise, construct, install courts, commission every system and reach practical completion.",
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
      "Recruit and train the team, go to market, run pre-sales, stress test every system and deliver an opening that drives immediate commercial momentum.",
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
      "Run the club to its full potential and then scale. Optimise, retain, expand programming — then use the playbook to evaluate and execute expansion.",
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


export default function RoadmapPage() {
  return (
    <>
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
            Our structured 12-phase framework covers every stage of padel club development from initial idea through to a fully operational and growing club.
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
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-semibold text-court-green uppercase tracking-wider mb-3">
              Client Portal
            </p>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-padel-black mb-4 lg:whitespace-nowrap"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Your personalised roadmap, managed for you.
            </h2>
            <p className="text-lg text-net-silver">
              Every consultancy package includes access to your own personalized client portal with a live dashboard that tracks your progress through all 383+ milestones, keeps your resources in one place and keeps you and our team fully aligned at every stage.
            </p>
          </div>

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

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/packages"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-court-green text-white text-sm font-semibold rounded-md hover:bg-court-green-dark transition-colors"
            >
              View Packages
              <ArrowRight size={15} />
            </a>
            <a
              href="https://portal.thepadelpartners.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-net-silver hover:text-padel-black transition-colors"
            >
              Client Portal →
            </a>
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
          <p className="text-white/60 mb-8">
            Book a 15-minute call. We will help you identify exactly where you are on the roadmap and what comes next.
          </p>
          <Button
            href="https://calendar.app.google/YGnWn5mJxVCL8Q648"
            external
            size="md"
            variant="primary"
          >
            Book a Demo
            <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </>
  );
}
