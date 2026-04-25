import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | The Padel Partners",
  description: "How The Padel Partners collects, uses and protects your personal data in accordance with UK GDPR.",
  alternates: { canonical: "https://www.thepadelpartners.com/privacy" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "1. Who we are",
    content: `The Padel Partners is a specialist strategic consultancy for padel club development, operating in the United Kingdom. We are the data controller responsible for your personal data collected through this website and our client services.

Contact: info@thepadelpartners.com
Website: www.thepadelpartners.com`,
  },
  {
    title: "2. What data we collect",
    content: `We may collect and process the following personal data:

**Contact and enquiry data** — When you submit an enquiry through our contact form, we collect your first name, last name, email address, phone number, organisation name, city, project stage and any information you include in your message.

**Client data** — If you become a client, we hold additional project-related information, communications and documents necessary to deliver our consultancy services.

**Usage data** — We collect anonymised data about how visitors use our website via Google Analytics, including pages visited, time on site and referral sources. This data does not identify you personally.

**Cookie data** — We use cookies to support site functionality and analytics. See Section 8 for full details.

**Communications** — If you contact us by email or WhatsApp, we retain records of those communications.`,
  },
  {
    title: "3. How we use your data",
    content: `We use your personal data for the following purposes:

— To respond to your enquiry and discuss your project
— To provide and manage consultancy services you have engaged us for
— To send service-related communications (call confirmations, reports, action points)
— To improve our website and services using anonymised analytics
— To comply with legal obligations

We do not use your data for unsolicited marketing without your consent, and we do not sell your data to any third party.`,
  },
  {
    title: "4. Legal basis for processing (UK GDPR)",
    content: `We process your personal data on the following legal bases:

**Legitimate interests** — Responding to enquiries and running our business operations where our interests do not override your rights.

**Contract performance** — Processing data necessary to deliver consultancy services you have contracted with us.

**Legal obligation** — Where processing is required to comply with a legal or regulatory obligation.

**Consent** — For non-essential cookies and any direct marketing communications, where you have given explicit consent.`,
  },
  {
    title: "5. How long we keep your data",
    content: `We retain personal data only for as long as necessary:

— Enquiry data (where no contract follows): up to 12 months
— Client data: for the duration of the engagement and up to 6 years thereafter in line with UK limitation periods
— Analytics data: as configured in Google Analytics (default 26 months)
— Email communications: up to 6 years

When data is no longer required, it is securely deleted or anonymised.`,
  },
  {
    title: "6. Who we share your data with",
    content: `We may share your data with trusted third-party service providers who process data on our behalf:

**Google Analytics** — Website usage analytics (anonymised). Google's privacy policy: policies.google.com/privacy

**Supabase** — Secure database and authentication infrastructure for our client portal. Data is stored on servers in the EU.

**Stripe** — Payment processing for package subscriptions and services. Stripe's privacy policy: stripe.com/privacy

**Botpress** — AI chat assistant functionality on our website. Botpress's privacy policy: botpress.com/privacy

**Google Workspace** — Email and document management.

All third-party processors are bound by data processing agreements and may not use your data for any purpose other than providing the service to us. We do not share your data with specialist partners or third parties introduced through our network without your knowledge.`,
  },
  {
    title: "7. Your rights under UK GDPR",
    content: `You have the following rights regarding your personal data:

**Right of access** — You may request a copy of the personal data we hold about you.

**Right to rectification** — You may request correction of inaccurate or incomplete data.

**Right to erasure** — You may request deletion of your data where there is no legitimate reason for us to continue processing it.

**Right to restrict processing** — You may request that we limit how we use your data in certain circumstances.

**Right to data portability** — You may request your data in a structured, machine-readable format where technically feasible.

**Right to object** — You may object to processing based on legitimate interests.

**Rights related to automated decision-making** — We do not make automated decisions that significantly affect you.

To exercise any of these rights, please contact us at info@thepadelpartners.com. We will respond within 30 days. If you are unsatisfied with how we handle your request, you have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk.`,
  },
  {
    title: "8. Cookies",
    content: `We use the following types of cookies on our website:

**Strictly necessary cookies** — Required for the website to function. These cannot be disabled.

**Analytics cookies** — Google Analytics cookies that help us understand how visitors use our site. These are only set with your consent.

**Functional cookies** — Used by third-party tools such as our Botpress chat assistant to remember preferences and session state.

You can manage your cookie preferences at any time via the cookie banner displayed when you first visit the site. You can also control cookies through your browser settings, though disabling certain cookies may affect site functionality.`,
  },
  {
    title: "9. Data security",
    content: `We take appropriate technical and organisational measures to protect your personal data against unauthorised access, loss or destruction. Our client portal uses encrypted connections (HTTPS), secure authentication and access controls. However, no internet transmission is completely secure and we cannot guarantee absolute security.`,
  },
  {
    title: "10. International transfers",
    content: `Some of our third-party service providers may process data outside the UK or European Economic Area. Where this occurs, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the ICO, to protect your data to an equivalent standard.`,
  },
  {
    title: "11. Changes to this policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The most recent version will always be available at thepadelpartners.com/privacy. Significant changes will be communicated to active clients directly.`,
  },
  {
    title: "12. Contact us",
    content: `For any questions about this Privacy Policy or to exercise your data rights, please contact:

The Padel Partners
Email: info@thepadelpartners.com
Website: www.thepadelpartners.com`,
  },
];

export default function PrivacyPage() {
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
            Privacy Policy
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
            This Privacy Policy explains how The Padel Partners collects, uses, stores and protects your personal data when you visit our website or engage our services. We are committed to handling your data responsibly and in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
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
                    if (para.startsWith("**") && para.includes("**")) {
                      // Bold label paragraphs
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
