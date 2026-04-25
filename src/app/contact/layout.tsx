import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact The Padel Partners — Padel Club Development Enquiries",
  description:
    "Get in touch with our padel club development team. Enquire or book a free call to discuss feasibility, courts, planning, finance and more.",
  alternates: { canonical: "https://www.thepadelpartners.com/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
