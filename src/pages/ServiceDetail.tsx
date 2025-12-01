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
      "Refresh and rejuvenate carpets with deep-cleaning extraction and eco-friendly solutions. Our process targets embedded dirt, allergens, and odours for a like-new finish.",
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1920&h=1080&fit=crop",
    steps: [
      "Pre-inspection and targeted stain treatment",
      "Pre-spray and agitation to break soil",
      "Hot-water extraction for deep grime",
      "High-velocity air for rapid drying",
      "Final walk-through with care tips",
    ],
    priceHint: "From £12 per m² (depends on soil level and area)",
  },
  {
    slug: "upholstery-cleaning",
    name: "Upholstery Cleaning",
    description:
      "Gentle, fabric-safe cleansing for sofas, chairs and cushions with quick-dry technology to minimise disruption in your home.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1920&h=1080&fit=crop",
    steps: [
      "Fabric safety test",
      "Low-moisture cleaning",
      "Nap revitalisation with soft-brush technique",
      "Deodorise and sanitize",
    ],
    priceHint: "From £25 per item",
  },
  {
    slug: "rug-cleaning",
    name: "Rug Cleaning",
    description:
      "Specialised care for wool and natural fibres with gentle extraction and fibre-safe methods.",
    image:
      "https://images.unsplash.com/photo-1523410943282-8a7e5d2f3b8f?w=1920&h=1080&fit=crop",
    steps: [
      "Fibres assessment",
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
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative gradient blob for depth */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute -top-28 -left-28 w-80 h-80 rounded-full bg-gradient-to-br from-blue-600/25 to-teal-500/25 filter blur-3xl -z-0"
      />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Breadcrumbs / Subtle nav */}
        <div className="text-sm text-slate-600 mb-4" aria-label="Breadcrumbs">
          <Link to="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/services" className="hover:underline">Services</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold text-slate-700">{service.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div>
            <h2 className="text-sm uppercase tracking-wide text-sky-600 mb-3">Service Detail</h2>
            <h1
              className="text-3xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent
                         bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500"
            >
              {service.name}
            </h1>
            <p className="text-slate-700 text-lg mb-6">{service.description}</p>

            <div className="space-y-4 mb-6">
              {service.steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span
                    className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 text-white flex items-center justify-center text-xs font-semibold
                               shadow-md hover:shadow-lg transition-all duration-300"
                    aria-label="Step"
                  >
                    ✓
                  </span>
                  <span className="text-sm md:text-base text-slate-700">{step}</span>
                </div>
              ))}
            </div>

            <p className="text-sm font-semibold text-slate-700 mb-4">{service.priceHint}</p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                         bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 text-white font-semibold
                         shadow-lg transform hover:-translate-y-0.5 hover:scale-105 hover:shadow-2xl transition-all duration-500"
            >
              Request a Quote
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right: Visual treatment with image and overlay */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-slate-200">
            {/* Image with hover zoom */}
            <div className="overflow-hidden group h-full w-full">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover transition-transform duration-700 transform group-hover:scale-105"
                style={{ minHeight: "320px" }}
              />
            </div>
            {/* soft overlay to enhance contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-black/0 pointer-events-none" />
            {/* subtle decorative glow behind image on large screens */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-800 to-transparent opacity-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;