import type { Metadata } from "next";
import { MapPin, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Trusted By — Clients & Projects",
  description:
    "The Padel Partners has guided padel club development projects across the UK — from Huddersfield to London, Birmingham to Northern Ireland.",
};

const locations = [
  {
    city: "Huddersfield",
    region: "Yorkshire",
    description: "Multi-court indoor padel facility development.",
  },
  {
    city: "London",
    region: "Greater London",
    description: "Premium urban padel club — feasibility through to launch.",
  },
  {
    city: "Birmingham",
    region: "West Midlands",
    description: "Developer-led padel and leisure complex.",
  },
  {
    city: "Cheshire",
    region: "North West England",
    description: "Private club development with court supply.",
  },
  {
    city: "Plymouth",
    region: "South West England",
    description: "Community padel project with public sector partnership.",
  },
  {
    city: "Blackburn",
    region: "Lancashire",
    description: "Leisure centre padel court addition.",
  },
  {
    city: "Northern Ireland",
    region: "Northern Ireland",
    description: "Multi-site padel development strategy.",
  },
  {
    city: "Cotswolds",
    region: "South West England",
    description: "Premium rural padel destination project.",
  },
];

const personas = [
  {
    title: "Developers & Investors",
    description:
      "Private sector clients who see the padel opportunity but need confidence it will stack up commercially. We deliver the feasibility, the business case and the build strategy.",
  },
  {
    title: "Public Sector Operators",
    description:
      "Local authorities, leisure trusts and community organisations responding to demand for padel facilities. We handle the grant applications, public sector feasibility and bid writing.",
  },
  {
    title: "Existing Clubs",
    description:
      "Tennis clubs, leisure centres and gyms adding padel to their offering. We manage the addition without disrupting existing operations.",
  },
  {
    title: "Padel Entrepreneurs",
    description:
      "First-time operators passionate about the sport who need guidance through unfamiliar development and business processes.",
  },
];

export default function TrustedByPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-court-green uppercase tracking-wider mb-3">
              Trusted By
            </p>
            <h1
              className="text-5xl lg:text-6xl font-bold text-padel-black mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Projects delivered across the UK.
            </h1>
            <p className="text-xl text-net-silver">
              From feasibility through to opening day — we have guided padel club development in eight locations and counting.
            </p>
          </div>
        </div>
      </section>

      {/* Client logos placeholder */}
      <section className="py-12 px-6 lg:px-8 bg-baseline-grey border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold text-net-silver uppercase tracking-widest text-center mb-8">
            Partners & Clients
          </p>
          {/* Logo grid — replace with real images */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center opacity-60">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-10 w-28 bg-gray-200 rounded-md animate-pulse"
              />
            ))}
          </div>
          <p className="text-center text-xs text-net-silver mt-6">
            Logo images — drop them into chat to add real partner logos
          </p>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-12">
            <h2
              className="text-4xl font-bold text-padel-black mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Active project locations
            </h2>
            <p className="text-net-silver">
              Every project is different. Every location brings its own planning environment, commercial dynamics and community context — we navigate all of it.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {locations.map((loc) => (
              <div
                key={loc.city}
                className="bg-baseline-grey rounded-xl p-6 border border-gray-100"
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={16} className="text-court-green flex-shrink-0" />
                  <span className="text-xs text-net-silver font-medium">{loc.region}</span>
                </div>
                <h3
                  className="text-xl font-bold text-padel-black mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {loc.city}
                </h3>
                <p className="text-sm text-net-silver leading-relaxed">{loc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="py-20 px-6 lg:px-8 bg-baseline-grey">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-12">
            <p className="text-sm font-semibold text-court-green uppercase tracking-wider mb-3">
              Who we work with
            </p>
            <h2
              className="text-4xl font-bold text-padel-black mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Built for ambitious padel projects
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {personas.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-xl p-7 border border-gray-100 shadow-card"
              >
                <h3
                  className="text-xl font-bold text-padel-black mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.title}
                </h3>
                <p className="text-net-silver text-sm leading-relaxed">{p.description}</p>
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
            Add your project to the list.
          </h2>
          <p className="text-white/60 mb-8">
            Book a free call to discuss your project. We will tell you exactly how we can help.
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
