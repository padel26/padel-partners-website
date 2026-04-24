import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Padel Club Case Studies & Project Portfolio — UK Development Examples",
  description:
    "The Padel Partners has guided padel club development projects across the UK — Wetherby, Sleaford, Wimbledon, Nottingham, Horwich and Kirkby. Developers, public sector and entrepreneurs.",
  alternates: { canonical: "https://www.thepadelpartners.com/trusted-by" },
};

const locations = [
  {
    city: "Wetherby",
    region: "Yorkshire",
    description: "Padel and wellness farm.",
  },
  {
    city: "Sleaford",
    region: "Lincolnshire",
    description: "Rugby club.",
  },
  {
    city: "Wimbledon",
    region: "Greater London",
    description: "Premium indoor facility.",
  },
  {
    city: "Nottingham",
    region: "East Midlands",
    description: "Premium indoor centre.",
  },
  {
    city: "Horwich",
    region: "Greater Manchester",
    description: "Premium indoor facility.",
  },
  {
    city: "Kirkby",
    region: "Merseyside",
    description: "Leisure trust.",
  },
];

const personas = [
  {
    title: "Padel Entrepreneurs",
    description:
      "First-time operators passionate about the sport who need guidance through unfamiliar development and business processes.",
  },
  {
    title: "Developers & Investors",
    description:
      "Private sector clients who see the padel opportunity but need confidence it will stack up commercially and the support to move at speed.",
  },
  {
    title: "Public Sector Operators",
    description:
      "Local authorities, leisure trusts and community organisations responding to demand for padel facilities.",
  },
  {
    title: "Existing Clubs",
    description:
      "Established padel clubs ready to scale. Whether adding courts, opening new sites or optimising operations, we provide the strategic support to grow with confidence.",
  },
];

export default function TrustedByPage() {
  return (
    <>
      {/* Client logos placeholder */}
      <section className="pt-24 pb-10 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-padel-black mb-8 text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Padel Club Case Studies & Portfolio
          </h1>
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
              <div key={alt} className="flex items-center justify-center px-6 py-5">
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

      {/* Locations */}
      <section className="pt-10 pb-10 px-6 lg:px-8 bg-baseline-grey hidden">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-12">
            <h2
              className="text-4xl font-bold text-padel-black mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Active project locations
            </h2>
            <p className="text-net-silver">
              Every project is different. Every location brings its own commercial dynamics and community context we navigate all of it.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {locations.map((loc) => (
              <div
                key={loc.city}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-card"
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
      <section className="pt-10 pb-10 px-6 lg:px-8 bg-white">
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
                className="bg-baseline-grey rounded-xl p-7 border border-gray-100"
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
      <section className="pt-10 pb-10 px-6 lg:px-8 bg-padel-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Add your project<br className="sm:hidden" /> to the list.
          </h2>
          <p className="text-white/60 mb-8">
            Tell us about your project.<br />We&apos;ll tell you exactly how we can help.
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
