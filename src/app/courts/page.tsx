import type { Metadata } from "next";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Padel Courts UK — Premium Courts Delivered & Installed | The Padel Partners",
  description:
    "Premium padel courts delivered and installed across the UK. Classic, panoramic and super panoramic configurations from our exclusive Spanish manufacturer — over 3,000 projects globally.",
  alternates: { canonical: "https://www.thepadelpartners.com/courts" },
};

const courts = [
  {
    name: "SX1",
    tag: "Premier",
    highlight: false,
    type: "Panoramic",
    description: "Unparalleled cleanliness and elegance. Panoramic construction with seamless glass integration for an unblemished player and spectator experience.",
    features: [
      "Panoramic structure",
      "Hot-dip galvanised steel",
      "Seamless glass panel integration",
      "No visible fixtures or fittings",
      "Unobstructed high-definition views",
      "Maximum durability and visibility",
      "Fully customisable finish",
      "Delivered and installed in the UK",
    ],
  },
  {
    name: "TPL PRO",
    tag: "Flagship",
    highlight: true,
    type: "Panoramic",
    description: "Our flagship court. A revolutionary design approach that establishes a new benchmark in padel aesthetics, performance and customisation.",
    features: [
      "Revolutionary design benchmark",
      "Innovative light post design",
      "Eliminates interference for high-level play",
      "Suited to premier clubs and professionals",
      "Unmatched customisation options",
      "Precision-engineered modular structure",

      "Delivered and installed in the UK",
    ],
  },
  {
    name: "VX360",
    tag: "Super Panoramic",
    highlight: false,
    type: "Super Panoramic",
    description: "Redefines competition standards. The market's lightest padel court, combining elite performance with a full super panoramic design.",
    features: [
      "Market's lightest padel court",
      "Full super panoramic design",
      "High-performance playing surface",
      "Robust strategic construction",
      "Exceeds professional play demands",
      "Optimised player and spectator visibility",
      "Elevates entertainment value",
      "Delivered and installed in the UK",
    ],
  },
];

export default function CourtsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-4 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-court-green uppercase tracking-wider mb-3">
            Court Supply
          </p>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-padel-black mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Premium padel courts
          </h1>
          <p className="text-xl text-net-silver max-w-2xl mx-auto">
            We have an exclusive supply partnership with a premium Spanish manufacturer behind over 3,000 padel projects globally. We offer three court options fully customizable, delivered and installed in the UK.
          </p>
        </div>
      </section>

      {/* Courts grid */}
      <section className="pt-10 pb-10 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {courts.map((court) => (
            <div
              key={court.name}
              className={`rounded-2xl p-5 sm:p-7 flex flex-col relative bg-white ${
                court.highlight
                  ? "border border-court-green shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
                  : "border border-gray-200 shadow-card"
              }`}
            >
              {/* Image placeholder */}
              <div className="w-full h-48 rounded-xl mb-5 flex items-center justify-center bg-baseline-grey">
                <span className="text-xs font-medium text-net-silver">
                  {court.name} image
                </span>
              </div>

              {court.tag ? (
                <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-4 w-fit bg-court-green-light text-court-green">
                  {court.tag}
                </span>
              ) : (
                <div className="mb-9" />
              )}

              <h2
                className="text-2xl font-bold mb-1 text-padel-black"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {court.name}
              </h2>

              <p className="text-xs font-semibold uppercase tracking-wider mb-3 text-net-silver">
                {court.type}
              </p>

              <p className="text-sm mb-6 text-net-silver">
                {court.description}
              </p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {court.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5 text-court-green" />
                    <span className="text-padel-black">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-2.5">
                <a
                  href="/contact?type=courts"
                  className="w-full py-3 rounded-md text-sm font-semibold transition-colors text-center block bg-court-green text-white hover:bg-court-green-dark"
                >
                  Enquire About the {court.name}
                </a>
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

      {/* Smart courts strip */}
      <section className="pt-10 pb-10 px-6 lg:px-8 bg-baseline-grey">
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div>
            <p className="text-sm font-semibold text-court-green uppercase tracking-wider mb-3">
              Smart Technology
            </p>
            <h2
              className="text-2xl sm:text-3xl font-bold text-padel-black mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Automated smart courts
            </h2>
            <p className="text-net-silver text-lg mb-8">
              Optional smart court technology available across all models; including in-built cameras for match statistics, automatic scoreboards, remote lighting, smart access that is integrated to your booking systems.
            </p>
            <Button href="/contact?type=courts" size="md" variant="primary">
              Enquire About Tech
              <ArrowRight size={16} />
            </Button>
          </div>
          {/* Image */}
          <div className="mt-10 lg:mt-0 rounded-2xl overflow-hidden border border-gray-200 bg-white flex items-center justify-center" style={{ minHeight: 320 }}>
            <div className="text-center py-16 px-8">
              <p className="text-sm font-medium text-net-silver">Smart technology image coming soon</p>
              <p className="text-xs text-net-silver mt-1">Drop an image into chat to add it here</p>
            </div>
          </div>
        </div>
      </section>
      {/* Build services */}
      <section className="pt-10 pb-10 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-8">
            <p className="text-sm font-semibold text-court-green uppercase tracking-wider mb-3">
              Full Build Services
            </p>
            <h2
              className="text-2xl sm:text-3xl font-bold text-padel-black mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Everything your site needs
            </h2>
            <p className="text-net-silver text-lg lg:whitespace-nowrap">
              Courts are just the start. We coordinate every element of the build from the ground up.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-stretch">
            {[
              {
                title: "Foundations & Court Bases",
                description: "Full scope groundworks and drainage all engineered to the exact specification of your designs and site conditions.",
              },
              {
                title: "Canopies & Padel Buildings",
                description: "Covered structures, roof systems and full padel buildings for indoor and hybrid facilities.",
              },
              {
                title: "Full Fit Out",
                description: "Prefabricated club houses, and full interior fit-outs; coffee shops, bars, changing rooms, wellness suites and more. One partner for the complete project.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-baseline-grey rounded-xl p-6 border border-gray-100 flex flex-col">
                <h3
                  className="font-bold text-padel-black mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-net-silver leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/contact?type=courts" size="md" variant="primary">
              Enquire About Build
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
