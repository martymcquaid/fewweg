import React from "react";

type Post = {
  title: string;
  excerpt: string;
  date: string;
  image: string;
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
      "https://images.unsplash.com/photo-1517248135467-4c7ed84b9d3e?w=1200&h=800&fit=crop",
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
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Cleaning Tips & News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p) => (
            <article key={p.title} className="rounded-2xl overflow-hidden shadow-lg bg-white">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('${p.image}')` }}
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-sm text-slate-600 mb-2">{p.excerpt}</p>
                <div className="text-xs text-slate-500">{new Date(p.date).toDateString()}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;