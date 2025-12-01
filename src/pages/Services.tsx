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
      "https://images.unsplash.com/photo-1523411654518-c37fcb3a1f9a?w=800&h=600&fit=crop",
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc) => (
            <ServiceCard
              key={svc.slug}
              slug={svc.slug}
              title={svc.title}
              description={svc.description}
              image={svc.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;