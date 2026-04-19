import type { Metadata } from "next";
import { ArrowRight, ExternalLink } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services — Bolt-On Services for Padel Club Development",
  description:
    "One-off expert services from feasibility reports to full operational plans. Fixed-price services available to buy direct. Quote-based services trigger a tailored proposal.",
};

type Service = {
  name: string;
  price: string | null;
  type: "fixed" | "quote";
  stripePriceId?: string;
};

type Category = {
  id: string;
  title: string;
  description: string;
  services: Service[];
};

const categories: Category[] = [
  {
    id: "feasibility",
    title: "Feasibility",
    description: "Test the viability of your padel project before committing capital.",
    services: [
      { name: "Feasibility Report Review", price: "£499", type: "fixed", stripePriceId: "price_feasibility_review_placeholder" },
      { name: "Private Sector Feasibility Report", price: "£1,499", type: "fixed", stripePriceId: "price_feasibility_private_placeholder" },
      { name: "Public Sector Feasibility Report", price: "£2,999", type: "fixed", stripePriceId: "price_feasibility_public_placeholder" },
    ],
  },
  {
    id: "business",
    title: "Business Services",
    description: "Build the commercial case and strategic foundations for your project.",
    services: [
      { name: "Business Plan Review", price: "£499", type: "fixed", stripePriceId: "price_bizplan_review_placeholder" },
      { name: "Business Plan Writing", price: "£2,999", type: "fixed", stripePriceId: "price_bizplan_writing_placeholder" },
      { name: "Bid Writing", price: "£2,499", type: "fixed", stripePriceId: "price_bid_writing_placeholder" },
    ],
  },
  {
    id: "finance",
    title: "Finance",
    description: "Model your numbers, secure investment and present to funders with confidence.",
    services: [
      { name: "Financial Modelling Review", price: "£499", type: "fixed", stripePriceId: "price_fin_review_placeholder" },
      { name: "Financial Modelling Build", price: "£1,499", type: "fixed", stripePriceId: "price_fin_build_placeholder" },
      { name: "Investor Pitch Deck", price: "£1,499", type: "fixed", stripePriceId: "price_pitch_deck_placeholder" },
      { name: "Full Accounting Pack", price: null, type: "quote" },
      { name: "Securing Finance", price: null, type: "quote" },
    ],
  },
  {
    id: "design",
    title: "Planning, Architecture & Design",
    description: "From planning permission through to detailed construction drawings.",
    services: [
      { name: "Design Pack", price: "£3,999", type: "fixed", stripePriceId: "price_design_pack_placeholder" },
      { name: "Planning Application", price: null, type: "quote" },
      { name: "Planning Drawings", price: null, type: "quote" },
      { name: "Construction Drawings", price: null, type: "quote" },
    ],
  },
  {
    id: "build",
    title: "Build & Courts",
    description: "Court supply, construction coordination and project management.",
    services: [
      { name: "Project Management", price: "£2,999", type: "fixed", stripePriceId: "price_pm_placeholder" },
      { name: "Courts & Build", price: null, type: "quote" },
      { name: "Pre-Construction Pack", price: null, type: "quote" },
    ],
  },
  {
    id: "brand",
    title: "Brand & Marketing",
    description: "Build the brand and marketing engine your club needs to launch and grow.",
    services: [
      { name: "Branding Audit", price: "£999", type: "fixed", stripePriceId: "price_brand_audit_placeholder" },
      { name: "Brand Identity", price: "£2,999", type: "fixed", stripePriceId: "price_brand_identity_placeholder" },
      { name: "Launch Package", price: "£999/month", type: "fixed", stripePriceId: "price_launch_pkg_placeholder" },
      { name: "Marketing Engine", price: "From £1,999/month", type: "quote" },
      { name: "PR Package", price: null, type: "quote" },
    ],
  },
  {
    id: "operations",
    title: "Operations & Coaching",
    description: "Set your club up to operate at the highest level from day one.",
    services: [
      { name: "Operational Plan Review", price: "£499", type: "fixed", stripePriceId: "price_ops_review_placeholder" },
      { name: "Operational Plan Writing", price: "£3,999", type: "fixed", stripePriceId: "price_ops_writing_placeholder" },
      { name: "Staff Training Day", price: "£999", type: "fixed", stripePriceId: "price_training_placeholder" },
      { name: "Coaching Pack", price: "From £2,999", type: "quote" },
      { name: "Community Pack", price: "From £2,999", type: "quote" },
      { name: "Maintenance Contracts", price: null, type: "quote" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-court-green uppercase tracking-wider mb-3">
              Bolt-On Services
            </p>
            <h1
              className="text-5xl lg:text-6xl font-bold text-padel-black mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Expert services. Every phase.
            </h1>
            <p className="text-xl text-net-silver">
              One-off services aligned to every stage of your padel club development. Fixed-price services are available to purchase direct. For bespoke requirements, request a quote.
            </p>
          </div>
        </div>
      </section>

      {/* Services by category */}
      <section className="pb-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          {categories.map((cat) => (
            <div key={cat.id} id={cat.id}>
              <div className="mb-8">
                <h2
                  className="text-3xl font-bold text-padel-black mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {cat.title}
                </h2>
                <p className="text-net-silver">{cat.description}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.services.map((service) => (
                  <div
                    key={service.name}
                    className="bg-white border border-gray-100 rounded-xl p-5 shadow-card flex flex-col justify-between"
                  >
                    <div>
                      <h3
                        className="font-semibold text-padel-black mb-1"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {service.name}
                      </h3>
                      <p className="text-sm text-net-silver mb-4">
                        {service.price ?? "Price on request"}
                      </p>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {service.type === "fixed" && service.price ? (
                        <form action="/api/checkout-onetime" method="POST" className="flex-1">
                          <input type="hidden" name="priceId" value={service.stripePriceId} />
                          <input type="hidden" name="serviceName" value={service.name} />
                          <button
                            type="submit"
                            className="w-full py-2 px-3 bg-court-green text-white text-xs font-semibold rounded-md hover:bg-court-green-dark transition-colors"
                          >
                            Buy Now
                          </button>
                        </form>
                      ) : (
                        <a
                          href="/contact?type=quote"
                          className="flex-1 text-center py-2 px-3 bg-court-green text-white text-xs font-semibold rounded-md hover:bg-court-green-dark transition-colors"
                        >
                          Request a Quote
                        </a>
                      )}
                      <a
                        href="https://calendar.app.google/YGnWn5mJxVCL8Q648"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 px-3 border border-gray-200 text-padel-black text-xs font-medium rounded-md hover:bg-baseline-grey transition-colors"
                      >
                        Book a Call
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Court supply feature */}
      <section className="py-20 px-6 lg:px-8 bg-padel-black">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-court-green uppercase tracking-wider mb-3">
              Exclusive Partnership
            </p>
            <h2
              className="text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Premium court supply from Spain
            </h2>
            <p className="text-white/60 text-lg mb-8">
              We have an exclusive supply partnership with a premium Spanish court manufacturer behind over 3,000 padel projects globally. Clients access classic, panoramic and super-panoramic configurations — delivered and installed in the UK.
            </p>
            <Button
              href="/contact?type=courts"
              size="lg"
              variant="primary"
            >
              Enquire About Courts
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
