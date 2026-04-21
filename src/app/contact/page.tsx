"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Mail, CalendarDays, ChevronDown, Check } from "lucide-react";

function ContactForm() {
  const searchParams = useSearchParams();
  const serviceTag = searchParams.get("service") || "";

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [interestsOpen, setInterestsOpen] = useState(false);
  const interestsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (interestsRef.current && !interestsRef.current.contains(e.target as Node)) {
        setInterestsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organisation: "",
    city: "",
    projectStage: "",
    message: "",
    interests: [] as string[],
  });

  const interestOptions = [
    "Buying Courts & Build Services",
    "Discuss Packages",
    "Feasibility",
    "Business Services",
    "Planning, Design & Architecture",
    "Financial Modelling",
    "Securing Finance",
    "Branding, Marketing & Launch",
    "Operational Excellence",
    "Coaching & Community Development",
    "Maintenance",
  ];

  const toggleInterest = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(option)
        ? prev.interests.filter((i) => i !== option)
        : [...prev.interests, option],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          name: `${formData.firstName} ${formData.lastName}`,
          service: serviceTag || undefined,
        }),
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
      <section className="pt-24 pb-10 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-court-green uppercase tracking-wider mb-3">
              Contact
            </p>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-padel-black mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Let&apos;s talk.
            </h1>
            <p className="text-xl text-net-silver">
              Ready to speak with one of our padel club development specialists? Submit an enquiry and we will structure a path forward, whether you have a specific project in mind or just want to understand the process.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-10 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-stretch">
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
                {/* First & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-padel-black mb-1.5">First Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-md border border-gray-200 bg-white text-padel-black text-sm placeholder:text-net-silver focus:outline-none focus:ring-2 focus:ring-court-green focus:border-transparent"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-padel-black mb-1.5">Last Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-md border border-gray-200 bg-white text-padel-black text-sm placeholder:text-net-silver focus:outline-none focus:ring-2 focus:ring-court-green focus:border-transparent"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-padel-black mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-md border border-gray-200 bg-white text-padel-black text-sm placeholder:text-net-silver focus:outline-none focus:ring-2 focus:ring-court-green focus:border-transparent"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-padel-black mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-md border border-gray-200 bg-white text-padel-black text-sm placeholder:text-net-silver focus:outline-none focus:ring-2 focus:ring-court-green focus:border-transparent"
                      placeholder="+44"
                    />
                  </div>
                </div>

                {/* Organisation & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-padel-black mb-1.5">Organisation</label>
                    <input
                      type="text"
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-md border border-gray-200 bg-white text-padel-black text-sm placeholder:text-net-silver focus:outline-none focus:ring-2 focus:ring-court-green focus:border-transparent"
                      placeholder="Company or organisation"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-padel-black mb-1.5">City *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-md border border-gray-200 bg-white text-padel-black text-sm placeholder:text-net-silver focus:outline-none focus:ring-2 focus:ring-court-green focus:border-transparent"
                      placeholder="Your city"
                    />
                  </div>
                </div>

                {/* Project Stage */}
                <div>
                  <label className="block text-sm font-medium text-padel-black mb-1.5">Project Stage *</label>
                  <select
                    required
                    value={formData.projectStage}
                    onChange={(e) => setFormData({ ...formData, projectStage: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-md border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-court-green focus:border-transparent ${formData.projectStage === "" ? "text-net-silver" : "text-padel-black"}`}
                  >
                    <option value="" disabled className="text-net-silver">Select your project stage</option>
                    <option value="exploring" className="text-padel-black">Just exploring the idea</option>
                    <option value="location" className="text-padel-black">I am looking for a location</option>
                    <option value="site-secured" className="text-padel-black">I have a site secured or nearly</option>
                    <option value="planning" className="text-padel-black">I&apos;m in planning</option>
                    <option value="existing-club" className="text-padel-black">I have an existing club</option>
                  </select>
                </div>

                {/* I want to talk about */}
                <div>
                  <label className="block text-sm font-medium text-padel-black mb-1.5">I want to talk about *</label>
                  <div className="relative" ref={interestsRef}>
                    <button
                      type="button"
                      onClick={() => setInterestsOpen((prev) => !prev)}
                      className="w-full px-4 py-2.5 rounded-md border border-gray-200 bg-white text-sm text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-court-green"
                    >
                      <span className={formData.interests.length === 0 ? "text-net-silver" : "text-padel-black"}>
                        {formData.interests.length === 0
                          ? "Select all that apply"
                          : formData.interests.length === 1
                          ? formData.interests[0]
                          : `${formData.interests.length} selected`}
                      </span>
                      <ChevronDown size={16} className={`text-net-silver transition-transform ${interestsOpen ? "rotate-180" : ""}`} />
                    </button>
                    {interestsOpen && (
                      <div className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden">
                        {interestOptions.map((option) => {
                          const selected = formData.interests.includes(option);
                          return (
                            <button
                              key={option}
                              type="button"
                              onClick={() => toggleInterest(option)}
                              className="w-full px-4 py-2.5 text-sm text-left flex items-center justify-between hover:bg-baseline-grey transition-colors"
                            >
                              <span className={selected ? "text-padel-black font-medium" : "text-padel-black"}>{option}</span>
                              {selected && <Check size={15} className="text-court-green flex-shrink-0" />}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  {formData.interests.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {formData.interests.map((i) => (
                        <span key={i} className="inline-flex items-center gap-1 px-2.5 py-1 bg-court-green-light text-court-green text-xs font-medium rounded-full">
                          {i}
                          <button type="button" onClick={() => toggleInterest(i)} className="hover:text-court-green-dark">×</button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-padel-black mb-1.5">Message *</label>
                  <textarea
                    required
                    rows={4}
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
                  className="w-full min-h-[44px] py-3 bg-court-green text-white font-semibold rounded-md hover:bg-court-green-dark transition-colors disabled:opacity-60 text-sm"
                >
                  {status === "loading" ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            )}
          </div>

          {/* Contact info + booking */}
          <div className="flex flex-col gap-6 lg:justify-between">
            <div className="bg-baseline-grey rounded-2xl p-8 flex-1">
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
                Prefer to talk? Book a quick call directly in our calendar.
              </p>
              <a
                href="https://calendar.app.google/YGnWn5mJxVCL8Q648"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-court-green text-white text-sm font-semibold rounded-md hover:bg-court-green-dark transition-colors"
              >
                Book a Call
                <ArrowRight size={14} />
              </a>
            </div>

            <div className="bg-baseline-grey rounded-2xl p-8 flex-1">
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
                For general enquiries:
              </p>
              <a
                href="mailto:info@thepadelpartners.com"
                className="text-court-green font-medium text-sm hover:underline"
              >
                info@thepadelpartners.com
              </a>
            </div>

            <div className="rounded-2xl border border-gray-100 p-8 flex-1">
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

export default function ContactPage() {
  return (
    <Suspense>
      <ContactForm />
    </Suspense>
  );
}
