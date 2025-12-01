import React from "react";
import { Link, useParams } from "react-router-dom";

type Service = {
  slug: string;
  name: string;
  description: string;
  image: string;
  steps: string[];
  priceHint: string;
};

const services: Service[] = [
  {
    slug: "carpet-cleaning",
    name: "Carpet Cleaning",
    description:
      "Refresh and rejuvenate carpets with deep-cleaning extraction and eco-friendly solutions.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
    steps: [
      "Pre-inspection and stain targeting",
      "Pre-spray and agitation",
      "Hot-water extraction for deep grime",
      "Speed-dry with high-velocity air",
      "Final walk-through and tips",
    ],
    priceHint: "From £12 per m² (dependant on soil level and area)",
  },
  // additional concrete mappings for UI only
  {
    slug: "upholstery-cleaning",
    name: "Upholstery Cleaning",
    description:
      "Gentle cleanse for fabrics on sofas, chairs and cushions with quick-dry tech.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=800&fit=crop",
    steps: [
      "Fabric safety test",
      "Low-moisture cleaning",
      "Brushed nap revitalisation",
      "Deodorise and sanitize",
    ],
    priceHint: "From £25 per item",
  },
  {
    slug: "rug-cleaning",
    name: "Rug Cleaning",
    description:
      "Specialised care for wool and natural fibres with gentle extraction.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
    steps: [
      "Fabric assessment",
      "Edge protection and padding",
      "Gentle wash or dry-clean method",
      "Final conditioning",
    ],
    priceHint: "From £40 per rug (size dependent)",
  },
];

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug) || services[0];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h1 className="text-3xl font-bold mb-2">{service.name}</h1>
          <p className="text-slate-700 mb-4">{service.description}</p>
          <div className="grid grid-cols-1 gap-4 mb-6">
            {service.steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-semibold">✓</span>
                <span className="text-sm">{step}</span>
              </div>
            ))}
          </div>
          <p className="font-semibold">{service.priceHint}</p>
          <Link to="/contact" className="mt-4 inline-block px-6 py-3 rounded-full bg-blue-600 text-white font-semibold">
            Request a Quote
          </Link>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <div
            className="h-72 md:h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${service.image}')` }}
            aria-label={service.name}
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;