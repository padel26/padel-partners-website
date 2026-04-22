import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.thepadelpartners.com";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/packages`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/courts`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/roadmap`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/trusted-by`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 }, // hidden until blog is live
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
  ];
}
