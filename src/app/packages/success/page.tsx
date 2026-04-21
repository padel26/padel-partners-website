import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Calendar } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Subscription Confirmed — The Padel Partners",
  description: "Your subscription is confirmed. Welcome to The Padel Partners.",
  robots: { index: false, follow: false },
};

export default function SubscriptionSuccessPage() {
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
          You&apos;re in. Welcome aboard.
        </h1>

        <p className="text-lg text-net-silver mb-10 max-w-sm mx-auto">
          Your subscription is confirmed. You&apos;ll receive a welcome email shortly with your onboarding pack, portal access and a link to book your first strategy call.
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
                title: "Check your inbox",
                description: "Your welcome pack will arrive within the next few minutes with everything you need to get started.",
              },
              {
                step: "2",
                title: "Access your client portal",
                description: "Log into your portal at portal.thepadelpartners.com to see your project roadmap and resources.",
              },
              {
                step: "3",
                title: "Book your first strategy call",
                description: "Use the link in your welcome email to schedule your first call with your dedicated advisor.",
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
            Book Your First Call
            <Calendar size={16} />
          </Button>
          <Button href="https://portal.thepadelpartners.com" external size="md" variant="outline">
            Go to Portal
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
