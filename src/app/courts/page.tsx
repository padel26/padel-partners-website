import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import ImageSlideshow from "@/components/ui/ImageSlideshow";

export const metadata: Metadata = {
  title: "Padel Courts UK — Premium Courts Delivered & Installed | The Padel Partners",
  description:
    "Premium padel courts delivered and installed across the UK. Classic, panoramic and super panoramic configurations from our exclusive Spanish manufacturer with over 3,000 projects globally.",
  alternates: { canonical: "https://www.thepadelpartners.com/courts" },
};

const courts = [
  {
    name: "SX1",
    tag: "Premier",
    highlight: false,
    type: "Panoramic",
    image: "/courts-sx1.avif",
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
    image: "/courts-tpl-pro.avif",
    imagePosition: "30% center",
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
    image: "/courts-vx360.avif",
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
            Premium padel courts UK
          </h1>
          <p className="text-xl text-net-silver max-w-2xl mx-auto">
            We have a supply partnership with a premium Spanish manufacturer behind over 3,000 padel projects globally. We offer three court options fully customizable, delivered and installed in the UK.
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
              {/* Court image */}
              <div className="w-full h-48 rounded-xl mb-5 overflow-hidden bg-baseline-grey">
                <Image
                  src={court.image}
                  alt={`${court.name} ${court.type.toLowerCase()} padel court — premium padel court supply and installation UK`}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: (court as { imagePosition?: string }).imagePosition ?? "center center" }}
                />
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
          <div className="mt-10 lg:mt-0 rounded-2xl overflow-hidden border border-gray-200">
            <Image
              src="/courts-smart-tech.avif"
              alt="Smart padel court technology UK — automated scoreboards, in-built cameras, remote lighting and booking system integration"
              width={800}
              height={560}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      {/* Build services */}
      <section className="pt-10 pb-10 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start justify-between gap-6 mb-8">
            <div className="max-w-2xl">
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
            <div className="hidden sm:block flex-shrink-0 pt-8">
              <Button href="/contact?type=courts" size="md" variant="primary">
                Enquire About Build
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-stretch">
            {[
              {
                title: "Foundations & Court Bases",
                description: "Full scope groundworks and drainage all engineered to the exact specification of your designs and site conditions.",
                image: "/Foundations.jpg.avif",
                imageAlt: "Padel court foundations and groundworks",
                objectPosition: "center",
              },
              {
                title: "Canopies & Padel Buildings",
                description: "Covered structures, roof systems and full padel buildings for indoor and hybrid facilities.",
                image: null,
                imageAlt: "Padel court canopy and building structure",
                objectPosition: "center",
                slideshow: [
                  { src: "/Curved Roof - external view (toploc roof and ST sides).jpg", alt: "Curved roof padel building exterior", objectPosition: "center" },
                  { src: "/Apex - External (metal roof with anti con liner and yorkshire board sides).jpg", alt: "Apex padel building exterior", objectPosition: "center" },
                ],
              },
              {
                title: "Full Fit Out",
                description: "Prefabricated club houses, and full interior fit-outs; coffee shops, bars, changing rooms, wellness suites and more. One partner for the complete project.",
                image: "/Fit OuT.png",
                imageAlt: "Padel club interior fit out",
                objectPosition: "left center",
              },
            ].map((item) => (
              <div key={item.title} className="bg-baseline-grey rounded-xl p-6 border border-gray-100 flex flex-col">
                <h3
                  className="font-bold text-padel-black mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-net-silver leading-relaxed mb-5">{item.description}</p>
                <div className="w-full h-48 rounded-xl overflow-hidden bg-gray-200 mt-auto relative">
                  {(item as { slideshow?: { src: string; alt: string; objectPosition?: string }[] }).slideshow ? (
                    <ImageSlideshow
                      images={(item as { slideshow: { src: string; alt: string; objectPosition?: string }[] }).slideshow}
                      interval={3500}
                    />
                  ) : item.image ? (
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: item.objectPosition }}
                    />
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
