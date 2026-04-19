import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import GoogleAnalytics from "@/components/layout/GoogleAnalytics";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Padel Partners — Your Strategic Partner for Padel Club Development",
    template: "%s | The Padel Partners",
  },
  description:
    "Expert strategic consultancy for padel club development in the UK. From feasibility to launch — we guide investors, developers and operators every step of the way.",
  keywords: [
    "padel club development",
    "padel consultancy",
    "padel club UK",
    "padel court construction",
    "padel feasibility",
    "padel business plan",
    "padel investment",
  ],
  authors: [{ name: "The Padel Partners" }],
  creator: "The Padel Partners",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.thepadelpartners.com"
  ),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.thepadelpartners.com",
    siteName: "The Padel Partners",
    title: "The Padel Partners — Your Strategic Partner for Padel Club Development",
    description:
      "Expert strategic consultancy for padel club development in the UK. From feasibility to launch.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Padel Partners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Padel Partners",
    description: "Your strategic partner for padel club development.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased">
        <GoogleAnalytics />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
