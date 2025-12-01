import React from "react";

type Post = {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  // Optional: future slug for direct routing
  slug?: string;
};

const posts: Post[] = [
  {
    title: "Top 5 Carpet Cleaning Hacks for NI Homes",
    excerpt:
      "Quick tips to maintain fresh carpets between professional cleans with eco-friendly products.",
    date: "2024-11-12",
    image:
      "https://images.unsplash.com/photo-1523411975344-2b6e9a7f8a9a?w=1200&h=800&fit=crop",
  },
  {
    title: "Seasonal Stain Removal Guide",
    excerpt:
      "A practical guide to remove common autumn/winter stains before they set in.",
    date: "2024-09-28",
    image:
      "https://images.unsplash.com/photo-1518987048-0007b9c0e0d7?w=1200&h=800&fit=crop",
  },
  {
    title: "Upholstery Care: Protecting Fabrics",
    excerpt:
      "How to prolong upholstery life with gentle cleaning and fabric-safe products.",
    date: "2024-07-15",
    image:
      "https://images.unsplash.com/photo-1520697222563-6d4f2e1b1d64?w=1200&h=800&fit=crop",
  },
];

const Blog: React.FC = () => {
  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <section className="pt-16 pb-20 bg-white">
      {/* Hero / Featured Blog Intro with 1920x1080 Unsplash background */}
      <div
        className="relative mx-auto max-w-7xl rounded-3xl overflow-hidden shadow-xl"
        aria-label="Blog hero"
      >
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523411975344-2b6e9a7f8a9a?w=1920&h=1080&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-600/70 to-teal-500/70 mix-blend-multiply" />
        <div className="relative z-10 p-8 md:p-16 lg:p-20 min-h-[48vh] flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #e6f0ff 0%, #b8e1d4 60%, #d1fbff 100%)" }}>
              Blog: Cleaning Tips & News Across Northern Ireland
            </h1>
            <p className="mt-4 text-sm md:text-base text-slate-150/95">
              Practical advice for maintaining fresh carpets, stain solutions, seasonal care, and expert insights from NI CleanCo.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="px-5 py-3 rounded-full bg-white text-slate-800 font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all transform"
                      aria-label="Get a Free Quote">
                Get a Free Quote
              </button>
              <button className="px-5 py-3 rounded-full bg-emerald-500 text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all transform"
                      aria-label="Book Now">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section heading under hero */}
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Latest from the NI CleanCo Blog</h2>
        <p className="mt-2 text-sm text-slate-600">
          Tips, guides, and seasonal cleaning advice written by our cleaning specialists.
        </p>
      </div>

      {/* Post Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((p) => (
          <article
            key={p.title}
            className="group relative rounded-2xl overflow-hidden bg-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transform transition-transform duration-500"
            aria-label={p.title}
          >
            <div className="relative h-60 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Image overlay gradient for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
              <div className="absolute left-0 right-0 bottom-0 p-4 text-white z-10">
                <h3 className="text-lg md:text-xl font-semibold drop-shadow">{p.title}</h3>
                <p className="text-xs mt-1">{formatDate(p.date)}</p>
              </div>
            </div>
            <div className="p-4 pt-3">
              <p className="text-sm text-slate-700 line-clamp-3">{p.excerpt}</p>
              <button
                className="mt-3 px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold shadow hover:shadow-lg hover:scale-105 transition-all duration-300"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Read article"
              >
                Read Article
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;