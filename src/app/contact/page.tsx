"use client";

import { useState } from "react";
import { ArrowRight, Mail, CalendarDays } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    type: "general",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-court-green uppercase tracking-wider mb-3">
              Contact
            </p>
            <h1
              className="text-5xl lg:text-6xl font-bold text-padel-black mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Let&apos;s talk.
            </h1>
            <p className="text-xl text-net-silver">
              Whether you have a specific project in mind or just want to understand the process — get in touch. We will respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            {status === "success" ? (
              <div className="bg-court-green-light rounded-2xl p-10 text-center">
                <div className="w-12 h-12 bg-court-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight size={20} className="text-white" />
                </div>
                <h2
                  className="text-2xl font-bold text-padel-black mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Message received
                </h2>
                <p className="text-net-silver">
                  We will be in touch within 24 hours. In the meantime, feel free to book a call directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-padel-black mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-md border border-gray-200 bg-white text-padel-black text-sm placeholder:text-net-silver focus:outline-none focus:ring-2 focus:ring-court-green focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-padel-black mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-md border border-gray-200 bg-white text-padel-black text-sm placeholder:text-net-silver focus:outline-none focus:ring-2 focus:ring-court-green focus:border-transparent"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-padel-black mb-1.5">
                    Company / Project
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-md border border-gray-200 bg-white text-padel-black text-sm placeholder:text-net-silver focus:outline-none focus:ring-2 focus:ring-court-green focus:border-transparent"
                    placeholder="Company name or project description"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-padel-black mb-1.5">
                    Enquiry type
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-md border border-gray-200 bg-white text-padel-black text-sm focus:outline-none focus:ring-2 focus:ring-court-green focus:border-transparent"
                  >
                    <option value="general">General enquiry</option>
                    <option value="quote">Request a quote</option>
                    <option value="package">Package information</option>
                    <option value="courts">Court supply</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-padel-black mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-md border border-gray-200 bg-white text-padel-black text-sm placeholder:text-net-silver focus:outline-none focus:ring-2 focus:ring-court-green focus:border-transparent resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-600">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3 bg-court-green text-white font-semibold rounded-md hover:bg-court-green-dark transition-colors disabled:opacity-60 text-sm"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* Contact info + booking */}
          <div className="space-y-8">
            <div className="bg-baseline-grey rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-court-green rounded-lg flex items-center justify-center">
                  <CalendarDays size={18} className="text-white" />
                </div>
                <h2
                  className="text-xl font-bold text-padel-black"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Book a call
                </h2>
              </div>
              <p className="text-net-silver text-sm mb-5">
                Prefer to talk? Book a free 30-minute call directly in our calendar. No obligation — just honest guidance.
              </p>
              <a
                href="https://calendar.app.google/YGnWn5mJxVCL8Q648"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-court-green text-white text-sm font-semibold rounded-md hover:bg-court-green-dark transition-colors"
              >
                Book a Free Call
                <ArrowRight size={14} />
              </a>
            </div>

            <div className="bg-baseline-grey rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-padel-black rounded-lg flex items-center justify-center">
                  <Mail size={18} className="text-white" />
                </div>
                <h2
                  className="text-xl font-bold text-padel-black"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Email us
                </h2>
              </div>
              <p className="text-net-silver text-sm mb-3">
                For general enquiries, partnership opportunities or press:
              </p>
              <a
                href="mailto:info@thepadelpartners.com"
                className="text-court-green font-medium text-sm hover:underline"
              >
                info@thepadelpartners.com
              </a>
            </div>

            <div className="rounded-2xl border border-gray-100 p-8">
              <h3
                className="font-semibold text-padel-black mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Already a client?
              </h3>
              <p className="text-sm text-net-silver mb-4">
                Access your project roadmap, reports and action points through the client portal.
              </p>
              <a
                href="https://portal.thepadelpartners.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-padel-black hover:text-court-green transition-colors"
              >
                Go to Client Portal →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
