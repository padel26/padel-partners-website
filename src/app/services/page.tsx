import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import ServiceCard from "@/components/ui/ServiceCard";
import ServiceNav from "@/components/ui/ServiceNav";

export const metadata: Metadata = {
  title: "Padel Club Development Services UK — Expert Support",
  description:
    "Padel club development services covering feasibility, planning, finance, design, build, branding and operations. Fixed-price and quote-based options available.",
  alternates: { canonical: "https://www.thepadelpartners.com/services" },
};

type Service = {
  name: string;
  price: string | null;
  type: "fixed" | "quote";
  stripePriceId?: string;
  details?: {
    description: string;
    bullets: string[];
  };
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
      {
        name: "Feasibility Report Review",
        price: "£499",
        type: "fixed",
        stripePriceId: "price_1TOYPD2LieSj9bWv9KQb1DF7",
        details: {
          description: "Do you already have a feasibility report or business case? Our experts will review and stress-test it to ensure your numbers, assumptions and market analysis stack up before you commit further capital.",
          bullets: [
            "Line-by-line document review",
            "Market demand and catchment analysis",
            "Revenue and cost sense-check",
            "Gap and risk identification",
            "Written feedback with recommendations",
            "Debrief call with your consultant",
          ],
        },
      },
      {
        name: "Private Sector Report",
        price: "£1,499",
        type: "fixed",
        stripePriceId: "price_1TOYQF2LieSj9bWvxPyOmp9q",
        details: {
          description: "A focused feasibility study for entrepreneurs evaluating the commercial viability of a padel venue, giving you the confidence to commit to your project.",
          bullets: [
            "Market and competitor analysis",
            "Site and location assessment",
            "Revenue projections",
            "Cost breakdown",
            "ROI analysis",
            "Go/no-go recommendation",
          ],
        },
      },
      {
        name: "Public Sector Report",
        price: "£2,999",
        type: "fixed",
        stripePriceId: "price_1TOYPm2LieSj9bWvtC0k8nb3",
        details: {
          description: "A comprehensive feasibility study for public sector bodies and sport and leisure trusts, formatted for stakeholders and decision-makers.",
          bullets: [
            "Catchment and demographic analysis",
            "Demand assessment",
            "Site evaluation",
            "Cost modelling",
            "Revenue forecasting",
            "Health and wellbeing alignment",
            "Stakeholder-ready formatting",
          ],
        },
      },
    ],
  },
  {
    id: "business",
    title: "Business Services",
    description: "Build the commercial case and strategic foundations for your project.",
    services: [
      {
        name: "Business Plan Review",
        price: "£499",
        type: "fixed",
        stripePriceId: "price_1TOYRM2LieSj9bWvvLNuW1ZG",
        details: {
          description: "An expert review of your existing business plan through the lens of experienced padel operators, ensuring it is investor-ready and commercially credible.",
          bullets: [
            "Strategy assessment",
            "Competitive advantage evaluation",
            "Financial assumption review",
            "Weakness identification",
            "Written feedback",
            "Debrief call",
          ],
        },
      },
      {
        name: "Business Plan Writing",
        price: "£2,999",
        type: "fixed",
        stripePriceId: "price_1TOcFo2LieSj9bWvL9MJSeXa",
        details: {
          description: "A fully written investor-grade business plan covering everything from market opportunity to operational strategy.",
          bullets: [
            "Executive summary",
            "Market analysis",
            "Target audience segmentation",
            "Revenue model",
            "Operations overview",
            "Financial summary",
            "Risk analysis",
            "Professional formatting",
          ],
        },
      },
      {
        name: "Bid Writing",
        price: "£2,499",
        type: "fixed",
        stripePriceId: "price_1TOcI12LieSj9bWvgugLMMtv",
        details: {
          description: "Professionally written funding bids for clubs seeking grant support, built around evidence and aligned to funder priorities.",
          bullets: [
            "Funding brief review",
            "Bid strategy",
            "Written response",
            "Evidence-based case for need",
            "Budget justification",
            "Outcome alignment",
          ],
        },
      },
      {
        name: "Legal Services",
        price: "Quote",
        type: "quote",
        details: {
          description: "Appoint a specialist solicitor to support with the lease or purchase of a site and the legal formation of your business.",
          bullets: [
            "Solicitor appointment and brief",
            "Site lease or purchase support",
            "Heads of terms review",
            "Legal business formation",
            "Shareholder and partnership agreements",
            "Ongoing legal advisory",
          ],
        },
      },
    ],
  },
  {
    id: "finance",
    title: "Finance",
    description: "Model your numbers, secure investment and present to funders with confidence.",
    services: [
      {
        name: "Financial Modelling Review",
        price: "£499",
        type: "fixed",
        stripePriceId: "price_1TOcIQ2LieSj9bWvCbsDEkLE",
        details: {
          description: "An expert audit of your existing financial model to validate assumptions and identify risks before presenting to investors or lenders.",
          bullets: [
            "Model review",
            "Assumption verification",
            "Cash flow analysis",
            "Error identification",
            "Written summary",
            "Debrief call",
          ],
        },
      },
      {
        name: "Financial Modelling Build",
        price: "£1,499",
        type: "fixed",
        stripePriceId: "price_1TOcJD2LieSj9bWvXh6gEjZQ",
        details: {
          description: "A bespoke dynamic financial model showing the commercial performance of your club, built for investor and lender presentation.",
          bullets: [
            "Court utilisation and revenue forecasting",
            "Membership projections",
            "Cost modelling",
            "Monthly and annual cash flow (3–5 years)",
            "Break-even and ROI analysis",
            "Scenario planning",
            "Fully editable",
          ],
        },
      },
      {
        name: "Investor Pitch Deck",
        price: "£1,499",
        type: "fixed",
        stripePriceId: "price_1TOcJc2LieSj9bWvbDKSvzal",
        details: {
          description: "A polished investor presentation combining financial narrative with a compelling commercial story.",
          bullets: [
            "Professional design",
            "Investment opportunity overview",
            "Business model summary",
            "Financial highlights",
            "Use of funds",
            "Team credibility section",
            "Branded format",
          ],
        },
      },
      {
        name: "Full Accounting Pack",
        price: null,
        type: "quote",
        details: {
          description: "A complete suite of financial documents prepared by an accountant for credible banking and investor presentation.",
          bullets: [
            "Full model build",
            "Profit and loss statement (3–5 years)",
            "Balance sheet forecast",
            "Cash flow statement",
            "Funding summary",
          ],
        },
      },
      {
        name: "Securing Finance",
        price: null,
        type: "quote",
        details: {
          description: "Connection to specialist finance brokers with deep sector knowledge, helping you secure optimal financing for your project.",
          bullets: [
            "Broker introduction",
            "Whole-of-market access",
            "Matched finance options",
          ],
        },
      },
      {
        name: "Insurance",
        price: null,
        type: "quote",
        details: {
          description: "Access to specialist sports and leisure insurance brokers who understand the unique risks of padel club operations, ensuring you are properly covered from day one.",
          bullets: [
            "Public liability insurance",
            "Employer's liability cover",
            "Property and equipment insurance",
            "Business interruption cover",
            "Professional indemnity",
            "Specialist broker introduction",
          ],
        },
      },
    ],
  },
  {
    id: "design",
    title: "Planning, Architecture & Design",
    description: "From planning permission through to detailed construction drawings.",
    services: [
      {
        name: "Design Pack",
        price: "£3,999",
        type: "fixed",
        stripePriceId: "price_1TOcK32LieSj9bWv09EU9bWk",
        details: {
          description: "A full concept design bringing your venue vision to life with professional layouts and visualisations.",
          bullets: [
            "Site layout and court configuration",
            "2D floor plans",
            "3D visualisations and renders",
            "Off-court design concepts",
            "Branding and signage guidance",
          ],
        },
      },
      {
        name: "Planning Application",
        price: null,
        type: "quote",
        details: {
          description: "Connection to experienced planning consultants for navigating the facility planning application process.",
          bullets: [
            "Consultant introduction",
            "Viability assessment",
            "Strategy guidance",
            "Application submission support",
          ],
        },
      },
      {
        name: "Planning Drawings",
        price: null,
        type: "quote",
        details: {
          description: "Professionally produced architectural drawings for planning and construction approval.",
          bullets: [
            "Specialist architect introduction",
            "Scaled site plans",
            "Elevation and section drawings",
            "Existing vs proposed drawings",
            "Local authority standard compliance",
          ],
        },
      },
      {
        name: "Construction Drawings",
        price: null,
        type: "quote",
        details: {
          description: "Complete building control documentation ensuring safe, compliant construction.",
          bullets: [
            "Building regulations drawings",
            "Structural and technical specifications",
            "Fire, access and drainage compliance drawings",
            "Building control submission format",
          ],
        },
      },
    ],
  },
  {
    id: "build",
    title: "Build & Courts",
    description: "Court supply, construction coordination and project management.",
    services: [
      {
        name: "Project Management",
        price: "£2,999",
        type: "fixed",
        stripePriceId: "price_1TOcKL2LieSj9bWvUYenMuSS",
        details: {
          description: "Professional on-site and remote project management keeping your development on schedule and on budget.",
          bullets: [
            "Dedicated project manager",
            "Contractor and supplier coordination",
            "Programme monitoring",
            "Issue resolution",
            "Budget tracking",
            "Handover and snagging management",
          ],
        },
      },
      {
        name: "Courts & Build",
        price: null,
        type: "quote",
        details: {
          description: "End-to-end procurement and build support connecting you to our specialist facility partners.",
          bullets: [
            "Courts, canopies and platforms guidance",
            "Groundworks and fit-out partner access",
            "Competitive procurement",
            "Vetted builders",
            "Timeline planning",
            "Quality assurance",
          ],
        },
      },
      {
        name: "Pre-Construction Pack",
        price: null,
        type: "quote",
        details: {
          description: "Comprehensive preparation ensuring your project is ready to move into construction with confidence.",
          bullets: [
            "Site survey coordination",
            "Contractor pack preparation",
            "Construction programme planning",
            "Procurement strategy",
            "Risk and logistics review",
            "Planning and building control coordination",
          ],
        },
      },
    ],
  },
  {
    id: "brand",
    title: "Brand & Marketing",
    description: "Build the brand and marketing engine your club needs to launch and grow.",
    services: [
      {
        name: "Branding Audit",
        price: "£999",
        type: "fixed",
        stripePriceId: "price_1TOcKi2LieSj9bWv5T97aJ39",
        details: {
          description: "A comprehensive review identifying what is working and where there are opportunities to strengthen your club's identity.",
          bullets: [
            "Logo and visual identity review",
            "Messaging assessment",
            "Social media consistency check",
            "Website alignment verification",
            "Competitor benchmarking",
            "Gap analysis",
            "Written recommendations",
            "Debrief call",
          ],
        },
      },
      {
        name: "Brand Identity",
        price: "£2,999",
        type: "fixed",
        stripePriceId: "price_1TOcKw2LieSj9bWvpFC7Jn8l",
        details: {
          description: "A full brand identity designed to help your club stand out in the fast-growing padel market.",
          bullets: [
            "Brand strategy and positioning",
            "Logo design (primary and secondary)",
            "Colour palette, typography and guidelines",
            "Social media assets",
            "Signage and court branding",
            "Brand guidelines document",
          ],
        },
      },
      {
        name: "Launch Package",
        price: "£999/month",
        type: "fixed",
        stripePriceId: "price_1TOcLE2LieSj9bWvoi2Otf2y",
        details: {
          description: "Foundation marketing for launch-phase clubs building awareness and founding memberships.",
          bullets: [
            "Pre-launch social strategy and content plan",
            "Founding member campaigns",
            "Email setup and sequences",
            "Local digital advertising",
            "Monthly reporting",
          ],
        },
      },
      {
        name: "Marketing Engine",
        price: "From £1,999/month",
        type: "quote",
        details: {
          description: "A fully managed multi-channel marketing service driving player acquisition and court utilisation.",
          bullets: [
            "Acquisition and membership campaigns",
            "Utilisation optimisation",
            "Social media management",
            "Email and CRM management",
            "Paid advertising (Meta and Google)",
            "Community and event marketing",
            "PR outreach",
            "Retention optimisation",
            "Weekly reporting",
          ],
        },
      },
      {
        name: "PR Package",
        price: null,
        type: "quote",
        details: {
          description: "A targeted PR campaign generating buzz and credibility with relevant audiences at launch and beyond.",
          bullets: [
            "PR strategy",
            "Press release writing and distribution",
            "Local and national media outreach",
            "Sport and lifestyle targeting",
            "Coverage tracking",
          ],
        },
      },
    ],
  },
  {
    id: "operations",
    title: "Operations & Coaching",
    description: "Set your club up to operate at the highest level from day one.",
    services: [
      {
        name: "Operational Plan Review",
        price: "£499",
        type: "fixed",
        stripePriceId: "price_1TOcLY2LieSj9bWvX0D74ZPp",
        details: {
          description: "An expert review of your existing operational plan identifying gaps, inefficiencies or risks before you open.",
          bullets: [
            "Plan review",
            "Staffing assessment",
            "Booking process evaluation",
            "Member experience assessment",
            "Written recommendations",
            "Debrief call",
          ],
        },
      },
      {
        name: "Operational Plan Writing",
        price: "£3,999",
        type: "fixed",
        stripePriceId: "price_1TOcLl2LieSj9bWvaD4VRF08",
        details: {
          description: "A comprehensive operational plan by experienced operators, providing the systems and structure for profitable club management.",
          bullets: [
            "Staffing structure and roles",
            "Court booking systems",
            "Membership management",
            "Health and safety frameworks",
            "Customer experience standards",
            "Revenue optimisation",
            "KPIs and performance monitoring",
            "Supplier management processes",
          ],
        },
      },
      {
        name: "Staff Training Day",
        price: "£999",
        type: "fixed",
        stripePriceId: "price_1TOcMB2LieSj9bWvBPe17F9t",
        details: {
          description: "A full-day on-site training session equipping your team with the knowledge to deliver an exceptional club experience.",
          bullets: [
            "Full-day on-site training (up to 10 staff)",
            "Operations and customer service training",
            "Booking systems instruction",
            "Sales and upselling techniques",
            "Health and safety training",
            "Q&A and practical scenarios",
          ],
        },
      },
      {
        name: "Coaching Pack",
        price: "£2,999",
        type: "fixed",
        stripePriceId: "price_1TOcX02LieSj9bWv9ubCkQ4c",
        details: {
          description: "A complete coaching framework delivering high-quality programmes that drive player retention and coaching revenue.",
          bullets: [
            "Programme design (beginner to advanced)",
            "Session plans and curriculum",
            "Group coaching formats",
            "Player pathway structure",
            "Pricing recommendations",
            "Coach recruitment guidance",
          ],
        },
      },
      {
        name: "Community Pack",
        price: "£2,999",
        type: "fixed",
        stripePriceId: "price_1TOcXs2LieSj9bWvQYNmph2o",
        details: {
          description: "Build an engaged community that drives word-of-mouth and converts casual players into loyal members.",
          bullets: [
            "Community strategy and engagement plan",
            "Event and social calendar design",
            "League and competition setup",
            "Member communication frameworks",
            "Partnership and outreach strategy",
            "Volunteer and ambassador structure",
          ],
        },
      },
      {
        name: "Maintenance Contracts",
        price: null,
        type: "quote",
        details: {
          description: "Ongoing maintenance protecting your asset, ensuring safety and reducing reactive repair costs.",
          bullets: [
            "Preventative maintenance visits",
            "Court, glass and structure inspections",
            "Net, post and lighting maintenance",
            "Reactive repair callout service",
            "Annual condition report",
          ],
        },
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-4 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-left lg:text-center">
          <p className="text-sm font-semibold text-court-green uppercase tracking-wider mb-3">
            Bolt-On Services
          </p>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-padel-black mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Comprehensive Padel Club<br className="hidden lg:block" /> Development Services
          </h1>
          <p className="text-xl text-net-silver lg:whitespace-nowrap">
            Targeted and comprehensive expertise exactly when you need it to support you across every phase of your project.
          </p>
        </div>
      </section>


      <ServiceNav />

      {/* Services by category */}
      <section className="pt-10 pb-10 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          {categories.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-36">
              <div className="mb-8">
                <h2
                  className="text-xl sm:text-3xl font-bold text-padel-black mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {cat.title}
                </h2>
                <p className="text-net-silver">{cat.description}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {cat.services.map((service) => (
                  <ServiceCard
                    key={service.name}
                    name={service.name}
                    price={service.price}
                    type={service.type}
                    stripePriceId={service.stripePriceId}
                    details={service.details}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Court supply feature */}
      <section className="pt-10 pb-10 px-6 lg:px-8 bg-padel-black">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-court-green uppercase tracking-wider mb-3">
              Exclusive Partnership
            </p>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Premium court supply from Spain
            </h2>
            <p className="text-white/60 text-lg mb-8">
              We have an exclusive supply partnership with a premium Spanish court manufacturer behind over 3,000 padel projects globally. We sell classic, panoramic and super-panoramic fully customisable padel courts delivered and installed in the UK.
            </p>
            <Button
              href="/contact?type=courts"
              size="md"
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
