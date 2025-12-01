import React from "react";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";

type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    slug: "carpet-cleaning",
    title: "Carpet Cleaning",
    description:
      "Deep cleaning that removes dirt, allergens and restores fabric brightness.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
  },
  {
    slug: "upholstery-cleaning",
    title: "Upholstery Cleaning",
    description:
      "Sofas, chairs and fabric upholsteries refreshed with low-moisture methods.",
    image:
      "https://images.unsplash.com/photo-1556741533-0a9f6e9a50b9?w=800&h=600&fit=crop",
  },
  {
    slug: "rug-cleaning",
    title: "Rug Cleaning",
    description:
      "Specialist care for area rugs with gentle, yet effective cleaning.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
  },
  {
    slug: "commercial-cleaning",
    title: "Commercial Cleaning",
    description:
      "Flexible cleaning schedules for offices, shops and facilities.",
    image:
      "https://images.unsplash.com/photo-1550975703-38c6a6aeaa4d?w=800&h=600&fit=crop",
  },
  {
    slug: "stain-odour-removal",
    title: "Stain & Odour Removal",
    description:
      "Targeted treatments to remove stubborn stains and unpleasant odours.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop",
  },
  {
    slug: "end-of-tenancy",
    title: "End-of-Tenancy Cleaning",
    description:
      "Thorough turnover cleans to help deposits be returned faster.",
    image:
      "https://images.unsplash.com/photo-150377732 Wend?d=320&f=png", // safe fallback (will adjust)
  },
];

const Services: React.FC = () => {
  // Fix last image string to a valid URL
  services[5].image =
    "https://images.unsplash.com/photo-1523419408685-0b3cfb85e1e6?w=800&h=600&fit=crop";

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Our Cleaning Services</h1>
          <Link to="/contact" className="px-4 py-2 rounded-full bg-blue-600 text-white font-semibold">
            Get a Quote
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.slug} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <div className="h-40 bg-gray-200" style={{ backgroundImage: `url('${s.image}')`, backgroundSize: "cover", backgroundPosition: "center" }} aria-label={s.title} role="img" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-slate-700 mb-4">{s.description}</p>
                <Link to={`/services/${s.slug}`} className="px-4 py-2 rounded-full bg-gradient-to-br from-blue-600 to-teal-500 text-white font-semibold">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;