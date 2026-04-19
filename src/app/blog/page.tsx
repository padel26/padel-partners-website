import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Blog — Padel Club Development Insights",
  description:
    "Expert insights, guides and updates on padel club development in the UK — from feasibility to operations.",
};

// Blog posts will be added here — using static data for now
// Replace with a CMS (Sanity, Contentful) or MDX files when ready
const posts: {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}[] = [];

const categories = [
  "All",
  "Feasibility",
  "Finance",
  "Planning",
  "Design & Build",
  "Operations",
  "Industry News",
];

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-court-green uppercase tracking-wider mb-3">
              Blog
            </p>
            <h1
              className="text-5xl lg:text-6xl font-bold text-padel-black mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Insights from the court.
            </h1>
            <p className="text-xl text-net-silver">
              Practical guidance, industry analysis and development insights from the team at The Padel Partners.
            </p>
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section className="px-6 lg:px-8 pb-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  cat === "All"
                    ? "bg-court-green text-white"
                    : "bg-baseline-grey text-net-silver hover:text-padel-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-24">
              <div className="w-16 h-16 bg-baseline-grey rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✍️</span>
              </div>
              <h2
                className="text-2xl font-bold text-padel-black mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Posts coming soon
              </h2>
              <p className="text-net-silver max-w-sm mx-auto mb-8">
                We are working on a series of practical guides and insights for padel club developers. Check back soon.
              </p>
              <Button
                href="https://calendar.app.google/YGnWn5mJxVCL8Q648"
                external
                size="md"
                variant="outline"
              >
                Book a Call in the Meantime
                <ArrowRight size={14} />
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
                >
                  <div className="h-48 bg-baseline-grey" />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold text-court-green bg-court-green-light px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-net-silver">{post.readTime}</span>
                    </div>
                    <h2
                      className="text-lg font-bold text-padel-black mb-2 group-hover:text-court-green transition-colors"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {post.title}
                    </h2>
                    <p className="text-sm text-net-silver mb-4 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-net-silver">{post.date}</span>
                      <a
                        href={`/blog/${post.slug}`}
                        className="text-xs font-semibold text-court-green hover:underline"
                      >
                        Read →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter signup */}
      <section className="py-16 px-6 lg:px-8 bg-baseline-grey">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-3xl font-bold text-padel-black mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Stay informed
          </h2>
          <p className="text-net-silver mb-8">
            Get development insights, industry news and updates from The Padel Partners — direct to your inbox.
          </p>
          <form className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-2.5 rounded-md border border-gray-200 bg-white text-padel-black text-sm placeholder:text-net-silver focus:outline-none focus:ring-2 focus:ring-court-green"
            />
            <button
              type="submit"
              className="px-5 py-2.5 bg-court-green text-white text-sm font-semibold rounded-md hover:bg-court-green-dark transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
