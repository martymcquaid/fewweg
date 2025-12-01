import React from "react";
import { Link } from "react-router-dom";
import { Box, Sparkles, Droplet, Wrench } from "lucide-react";
import MapNI from "../components/MapNI";
import TestimonialCard from "../components/TestimonialCard";
import ServiceCard from "../components/ServiceCard";

const Home: React.FC = () => {
  const features = [
    {
      title: "Carpet Cleaning",
      description:
        "Deep clean, refreshes fabrics with eco-friendly solutions.",
      icon: <Box className="text-blue-500" />,
    },
    {
      title: "Upholstery Cleaning",
      description:
        "Sofas, chairs and linens renewed with gentle, effective formulas.",
      icon: <Sparkles className="text-green-500" />,
    },
    {
      title: "Rug Cleaning",
      description:
        "Delicate and area rugs treated with care and precision.",
      icon: <Box className="text-amber-500" />,
    },
    {
      title: "Commercial Cleaning",
      description:
        "Flexible schedules, fast-dry results for offices and venues.",
      icon: <Wrench className="text-blue-700" />,
    },
    {
      title: "Stain & Odour Removal",
      description:
        "Targeted treatments that restore freshness and confidence.",
      icon: <Box className="text-teal-500" />,
    },
    {
      title: "End-of-T tenancy",
      description:
        "Hassle-free, thorough cleaning to secure deposits quickly.",
      icon: <Box className="text-purple-500" />,
    },
  ];

  const testimonials = [
    {
      name: "Aoife Gallagher",
      role: "Property Manager, Belfast",
      text:
        "Punctual and thorough. Our tenants consistently praise the cleanliness after turnover.",
      avatar:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop",
    },
    {
      name: "Ciaran Murphy",
      role: "Business Owner, Lisburn",
      text:
        "Fast drying and professional. Our shop floors look brand new after each clean.",
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1865b9fd5?w=100&h=100&fit=crop",
    },
    {
      name: "Siobhan O’Neill",
      role: "Homeowner, Derry/Londonderry",
      text:
        "Eco-friendly products that are effective and safe for kids and pets.",
      avatar:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
    },
    {
      name: "Dermot Kelly",
      role: "Facilities Manager, Bangor",
      text:
        "Excellent communication and reliable service every time.",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9f29b516bd?w=100&h=100&fit=crop",
    },
    {
      name: "Fiona Clarke",
      role: "Householder, Antrim",
      text:
        "Our carpet looks refreshed after a single visit. Highly recommended.",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    },
  ];

  return (
    <div className="space-y-20">
      {/* Hero */}
      <section
        className="relative min-h-[70vh] md:min-h-[75vh] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-md bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-teal-300">
            Professional Carpet Cleaning Across Northern Ireland
          </h1>
          <p className="text-lg sm:text-xl md:max-w-2xl mx-auto mb-6">
            Fast, affordable, eco-friendly cleaning for homes & businesses.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-semibold shadow-xl hover:shadow-2xl transition-all"
            >
              Get a Free Quote
            </Link>
            <Link
              to="/services"
              className="px-6 py-3 rounded-full border-2 border-white text-white font-semibold bg-black/40 hover:bg-black/60 transition-all"
            >
              Book Now
            </Link>
          </div>
        </div>
        {/* decorative blob */}
        <div className="absolute -top-16 -right-40 w-96 h-96 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 opacity-20 blur-3xl"></div>
      </section>

      {/* Service Overview Cards */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Cleaning Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <ServiceCard
              key={f.title}
              title={f.title}
              description={f.description}
              icon={f.icon}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white/60">
        <div className="max-w-7xl mx-auto px-4 py-12 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Eco-friendly solutions",
              text: "Biodegradable products and low-VOC formulations for safe homes.",
              icon: <Box className="text-emerald-500" />,
            },
            {
              title: "Trained & insured technicians",
              text: "Staff vetted, fully insured, and certified for carpet & upholstery care.",
              icon: <Sparkles className="text-blue-500" />,
            },
            {
              title: "Fast drying times",
              text: "Industry-leading equipment to have spaces ready sooner.",
              icon: <Wrench className="text-sky-500" />,
            },
            {
              title: "Competitive pricing",
              text: "Transparent quotes with no hidden fees.",
              icon: <Droplet className="text-teal-500" />,
            },
            {
              title: "5-star reviews",
              text: "Consistently great feedback from homes and businesses.",
              icon: <Star className="text-yellow-400" />,
            },
            {
              title: "Local NI pride",
              text: "Serving Belfast, Lisburn, Bangor, and surrounding towns.",
              icon: <MapPin />,
            },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all">
              <div className="flex items-center mb-4 space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-sm text-slate-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service Area Map */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-4">Northern Ireland Coverage</h3>
            <p className="mb-4 text-slate-700">
              We serve Belfast, Lisburn, Bangor, Newtownabbey, Antrim, Ballymena, Craigavon, Derry/Londonderry, and nearby towns. Our fleet arrives promptly with modern, eco-friendly equipment.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Belfast", "Lisburn", "Bangor", "Derry", "Antrim", "Craigavon"].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-slate-100 text-sm">{t}</span>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <MapNI />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-6">What customers are saying</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <TestimonialCard key={idx} name={t.name} role={t.role} text={t.text} avatar={t.avatar} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25 bg-radial-gradient" aria-hidden />
        <div className="max-w-7xl mx-auto px-4 text-center z-10 relative">
          <h4 className="text-2xl md:text-3xl font-bold mb-2">
            Need Same-Day Cleaning? We’re Available Across Northern Ireland!
          </h4>
          <p className="mb-6 opacity-90">Call now to reserve a slot or request an instant quote online.</p>
          <a href="tel:+441234567890" className="px-8 py-4 rounded-full bg-white text-blue-700 font-semibold shadow-xl hover:bg-slate-100 transition-all">
            Call Now
          </a>
        </div>
      </section>
    </div>
  );
};

// small sub-components to avoid polluting file with extra imports
function MapPin() {
  return <span aria-label="Location" role="img">📍</span>;
}
export default Home;