import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions governing the use of The Padel Partners consultancy services and website.",
  alternates: { canonical: "https://www.thepadelpartners.com/terms" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "1. About these terms",
    content: `These Terms of Service govern your use of the website at www.thepadelpartners.com and the consultancy services provided by The Padel Partners ("we", "us", "our").

By accessing our website or engaging our services, you agree to be bound by these terms. If you do not agree, please do not use our website or services.

These terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.`,
  },
  {
    title: "2. Our services",
    content: `The Padel Partners provides strategic consultancy services for padel club development, including but not limited to:

— Feasibility studies and site assessment
— Business planning and financial modelling
— Planning, architecture and design support
— Padel court supply and build coordination
— Brand identity and marketing strategy
— Operational planning and staff training
— Monthly retainer consultancy packages

The specific services provided to you are set out in the relevant package description or service agreement. We reserve the right to modify or discontinue services with reasonable notice.`,
  },
  {
    title: "3. Monthly consultancy packages",
    content: `**Subscription and billing** — Monthly packages are billed in advance on a recurring basis. Payment is processed securely via Stripe. By subscribing to a package, you authorise recurring charges at the stated monthly rate.

**Onboarding fees** — The Basic and Build packages include a one-time onboarding fee charged at the point of subscription.

**Changes to packages** — You may upgrade or downgrade your package at any time. Changes take effect from the next billing cycle. Downgrades do not result in a refund for the current period.

**Cancellation** — You may cancel your subscription at any time by contacting us at info@thepadelpartners.com. Cancellation takes effect at the end of the current billing period. We do not offer refunds for partial months.

**Price changes** — We will provide at least 30 days' written notice of any changes to package pricing. Continued use of the service after the notice period constitutes acceptance of the new price.`,
  },
  {
    title: "4. Bolt-on services",
    content: `One-off bolt-on services are charged at the rates stated on our Services page at the time of engagement. Payment terms will be confirmed in writing prior to commencement of work. Fixed-price services are payable as agreed; quote-based services require a written quotation accepted by you before work begins.

Bolt-on services do not include ongoing support beyond the scope of the specific deliverable unless otherwise agreed in writing.`,
  },
  {
    title: "5. Client responsibilities",
    content: `To enable us to provide effective consultancy support, you agree to:

— Provide accurate, complete and timely information relevant to your project
— Make key decision-makers available for scheduled calls and meetings
— Review and respond to materials, reports and action points within agreed timeframes
— Notify us promptly of any material changes to your project, budget or objectives

We cannot be held responsible for delays or suboptimal outcomes arising from incomplete information, delayed responses or failure to follow agreed recommendations.`,
  },
  {
    title: "6. Intellectual property",
    content: `**Our content** — All content on this website, including text, graphics, logos and design, is the property of The Padel Partners and is protected by UK copyright law. You may not reproduce, distribute or use our content without prior written permission.

**Deliverables** — Reports, plans, templates and other materials created specifically for your project ("deliverables") are licensed to you for use in connection with your padel club development project. Ownership of deliverables remains with The Padel Partners unless otherwise agreed in writing.

**Your materials** — You retain full ownership of any documents, data or materials you provide to us. You grant us a limited licence to use these materials solely for the purpose of providing our services to you.`,
  },
  {
    title: "7. Confidentiality",
    content: `Both parties agree to keep confidential any non-public, commercially sensitive information shared in the course of the engagement. This obligation does not apply to information that is publicly available, independently developed, or required to be disclosed by law.

We will not disclose details of your project to any third party without your consent, except to the extent necessary to introduce specialist partners or suppliers in the course of our services, or as required by law.`,
  },
  {
    title: "8. Limitation of liability",
    content: `**Advisory nature of services** — Our services are consultancy and advisory in nature. We provide guidance, frameworks and recommendations based on our expertise and the information available to us. We do not guarantee specific commercial outcomes, planning approvals, investment results or project timelines.

**Limitation** — To the fullest extent permitted by law, our total liability to you in connection with our services shall not exceed the total fees paid by you to us in the 12 months preceding the claim.

**Excluded losses** — We shall not be liable for any indirect, consequential, special or punitive losses, including loss of profit, loss of data or loss of business opportunity, even if advised of the possibility of such losses.

**Nothing in these terms limits our liability** for death or personal injury caused by our negligence, fraud, or any other liability that cannot be excluded by law.`,
  },
  {
    title: "9. Third-party specialists and suppliers",
    content: `We may introduce you to third-party specialists, contractors and suppliers ("partners") through our network. These introductions are made in good faith based on our knowledge of and experience with those parties. However:

— Contracts with third-party partners are entered into directly between you and the partner
— We are not a party to, and accept no liability under, any contract between you and a partner
— We make no warranty as to the performance, quality or output of any third-party partner
— You should conduct your own due diligence before engaging any partner we introduce`,
  },
  {
    title: "10. Court supply",
    content: `Where we facilitate the supply of padel courts through our manufacturing partner, the specific terms of sale, warranty and installation will be set out in a separate supply agreement. These Terms of Service do not govern the supply contract, which is between you and the manufacturer or their authorised representative.`,
  },
  {
    title: "11. Website use",
    content: `You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use of the site. You must not attempt to gain unauthorised access to any part of the site, its servers or any connected systems.

We reserve the right to withdraw or amend any content on the website without notice. We do not guarantee that the website will be available at all times or free from errors.`,
  },
  {
    title: "12. Privacy",
    content: `Our collection and use of your personal data is governed by our Privacy Policy, available at www.thepadelpartners.com/privacy. By using our services, you acknowledge that you have read and understood our Privacy Policy.`,
  },
  {
    title: "13. Changes to these terms",
    content: `We may update these Terms of Service from time to time. We will notify active clients of material changes with at least 14 days' notice. The current version will always be available at www.thepadelpartners.com/terms. Continued use of our services after any update constitutes acceptance of the revised terms.`,
  },
  {
    title: "14. Contact",
    content: `For any questions about these terms, please contact:

The Padel Partners
Email: info@thepadelpartners.com
Website: www.thepadelpartners.com`,
  },
];

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="pt-24 pb-10 px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-court-green uppercase tracking-wider mb-3">
            Legal
          </p>
          <h1
            className="text-3xl sm:text-4xl font-bold text-padel-black mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Terms of Service
          </h1>
          <p className="text-net-silver">
            Last updated: April 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-net-silver leading-relaxed mb-10">
            Please read these Terms of Service carefully before using our website or engaging The Padel Partners for consultancy services. These terms set out the basis on which we work with clients and your rights and obligations as a user of our website and services.
          </p>

          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2
                  className="text-lg font-bold text-padel-black mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {section.title}
                </h2>
                <div className="text-net-silver leading-relaxed space-y-3">
                  {section.content.split("\n\n").map((para, i) => {
                    if (para.includes("**")) {
                      return (
                        <p key={i}>
                          {para.split(/(\*\*[^*]+\*\*)/).map((part, j) =>
                            part.startsWith("**") ? (
                              <strong key={j} className="text-padel-black font-semibold">
                                {part.replace(/\*\*/g, "")}
                              </strong>
                            ) : (
                              part
                            )
                          )}
                        </p>
                      );
                    }
                    if (para.startsWith("—")) {
                      return (
                        <ul key={i} className="space-y-1.5">
                          {para.split("\n").map((line, j) => (
                            <li key={j} className="flex gap-2">
                              <span className="text-court-green flex-shrink-0">—</span>
                              <span>{line.replace(/^— /, "")}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return <p key={i}>{para}</p>;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
