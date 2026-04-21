import type { Metadata } from "next";
import { CheckCircle2, ArrowRight, Calendar } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Order Confirmed — The Padel Partners",
  description: "Your service order is confirmed. The Padel Partners team will be in touch shortly.",
  robots: { index: false, follow: false },
};

export default function ServiceSuccessPage() {
  return (
    <section className="pt-24 pb-16 px-6 lg:px-8 bg-white min-h-screen">
      <div className="max-w-2xl mx-auto text-center">
        {/* Icon */}
        <div className="w-16 h-16 bg-court-green-light rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={32} className="text-court-green" />
        </div>

        {/* Heading */}
        <h1
          className="text-3xl sm:text-4xl font-bold text-padel-black mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Order confirmed.
        </h1>

        <p className="text-lg text-net-silver mb-10">
          Payment received. A member of our team will be in touch within 24 hours to get started and confirm next steps.
        </p>

        {/* Next steps */}
        <div className="bg-baseline-grey rounded-2xl p-8 text-left mb-10">
          <h2
            className="text-lg font-bold text-padel-black mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What happens next
          </h2>
          <ul className="space-y-4">
            {[
              {
                step: "1",
                title: "Confirmation email on its way",
                description: "Check your inbox for your payment receipt and order confirmation.",
              },
              {
                step: "2",
                title: "We'll be in touch within 24 hours",
                description: "A member of the team will contact you to kick off the work and confirm requirements.",
              },
              {
                step: "3",
                title: "Book a call if you'd like to speak sooner",
                description: "Use the button below to schedule a call with your advisor at a time that suits you.",
              },
            ].map((item) => (
              <li key={item.step} className="flex gap-4">
                <span className="w-7 h-7 rounded-full bg-court-green text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {item.step}
                </span>
                <div>
                  <p className="font-semibold text-padel-black text-sm">{item.title}</p>
                  <p className="text-net-silver text-sm leading-relaxed">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            href="https://calendar.app.google/YGnWn5mJxVCL8Q648"
            external
            size="md"
            variant="primary"
          >
            Book a Call
            <Calendar size={16} />
          </Button>
          <Button href="/services" size="md" variant="outline">
            Back to Services
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
