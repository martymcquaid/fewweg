import React, { useState } from "react";

type FieldError = { name?: string; email?: string; message?: string };

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FieldError>({});

  const validate = (): boolean => {
    const e: FieldError = {};
    if (!name.trim()) e.name = "Please provide your name.";
    if (!email.includes("@") || !email.includes(".")) e.email = "Please provide a valid email address.";
    if (message.trim().length < 10) e.message = "Please enter a more detailed message.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  return (
    <section className="relative py-20 bg-slate-50 overflow-hidden" aria-label="Contact section">
      {/* HERO with background image for a premium look on the Contact page */}
      <div
        className="absolute inset-0 -z-10"
        aria-label="Hero background layer"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1494526585095-c41746248156?w=1920&h=1080&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "saturate(105%) contrast(105%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-sky-900/60 to-emerald-700/60 mix-blend-multiply" aria-label="Hero overlay" />
      <div className="relative mx-auto max-w-7xl px-4 py-12 md:py-20 text-white text-center md:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
          Professional Carpet Cleaning Across Northern Ireland
        </h1>
        <p className="max-w-2xl mx-auto md:mx-0 text-lg md:text-xl opacity-95">
          Fast, affordable, eco-friendly cleaning for homes & businesses. Trusted NI technicians with modern equipment.
        </p>
        <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
          <a
            href="#quote"
            className="px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-blue-600 to-teal-500 shadow-2xl hover:scale-105 transform transition-all duration-300"
          >
            Get a Free Quote
          </a>
          <a
            href="#contact-form"
            className="px-6 py-3 rounded-full font-semibold bg-white/90 text-slate-900 shadow-2xl hover:scale-105 transform transition-all duration-300"
            style={{ backdropFilter: "blur(6px)" }}
          >
            Book Now
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-6 md:mt-0">
        {/* Main two-column content: contact info + form with premium styling */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Quick contact info with glass cards */}
          <div className="space-y-6">
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-6 md:p-8 border border-white/70">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center shadow-lg">
                  <span className="text-white font-semibold">P</span>
                </div>
                <h2 className="text-xl md:text-2xl font-extrabold text-slate-800">Phone & Email</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="p-4 rounded-2xl bg-white shadow hover:shadow-xl transition-shadow duration-300">
                  <div className="text-sm font-semibold mb-1 text-slate-600">Phone</div>
                  <a href="tel:+441234567890" className="text-blue-700 text-lg font-medium hover:underline">
                    +44 1234 567890
                  </a>
                </div>
                <div className="p-4 rounded-2xl bg-white shadow hover:shadow-xl transition-shadow duration-300">
                  <div className="text-sm font-semibold mb-1 text-slate-600">Email</div>
                  <a href="mailto:hello@niceleanco.co.uk" className="text-blue-700 text-lg font-medium hover:underline">
                    hello@niceleanco.co.uk
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-6 md:p-8 border border-white/70">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-6 inline-block bg-green-500 rounded-full" />
                <h3 className="text-lg font-semibold text-slate-800">Areas We Serve</h3>
              </div>
              <p className="text-sm text-slate-600">
                Serving households and businesses across Belfast, Lisburn, Bangor, Newtownabbey, Antrim, Ballymena, Craigavon, Derry/Londonderry, and surrounding towns.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Belfast", "Lisburn", "Bangor", "Newtownabbey", "Antrim", "Ballymena"].map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 rounded-full text-xs bg-slate-100 text-slate-800 shadow-sm"
                    aria-label={`Service area: ${area}`}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Premium quote/contact form */}
          <form id="contact-form" className="bg-white/95 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-2xl border border-white/70" onSubmit={onSubmit} noValidate>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-600 to-emerald-500 inline-block" aria-label="Quote icon" />
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800">Request a Quote</h2>
            </div>

            {submitted && (
              <div className="mb-4 p-3 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm" role="status" aria-live="polite">
                Thanks! We’ve received your message and will respond shortly.
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Your Name</span>
                <input
                  className="mt-1 block w-full border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                  placeholder="Jane Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-label="Your name"
                />
                {errors.name && <span className="text-xs text-red-600">{errors.name}</span>}
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Email</span>
                <input
                  className="mt-1 block w-full border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                  placeholder="you@example.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Your email"
                />
                {errors.email && <span className="text-xs text-red-600">{errors.email}</span>}
              </label>
            </div>

            <label className="block mt-4">
              <span className="text-sm font-medium text-slate-700">Message</span>
              <textarea
                className="mt-1 block w-full border border-slate-200 rounded-xl p-3 h-32 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                placeholder="Tell us about the space, surface types, timeline, and any stain concerns..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                aria-label="Your message"
              />
              {errors.message && <span className="text-xs text-red-600">{errors.message}</span>}
            </label>

            <div className="mt-5 flex items-center gap-3">
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold shadow-xl hover:scale-105 transform transition-all duration-300"
              >
                {submitted ? "Thanks! We'll be in touch" : "Request Quote"}
              </button>
              <a href="tel:+441234567890" className="button-cta inline-flex items-center gap-2 rounded-full px-5 py-3 bg-slate-100 text-slate-800 shadow hover:shadow-lg hover:scale-105 transition-all duration-300">
                Call Now
                <span aria-hidden="true" className="inline-block w-4 h-4 bg-blue-600 rounded-full" />
              </a>
            </div>

            <p className="text-xs text-slate-500 mt-3">
              We respond within 1 business day. Your data is secure and never shared.
            </p>
          </form>
        </div>

        {/* Map / Coverage area (visual aid) */}
        <div className="mt-14 bg-white/90 rounded-2xl shadow-2xl border border-white/70 p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-5 h-5 rounded-full bg-emerald-500 inline-block" />
            <h3 className="text-lg font-semibold text-slate-800">Service Coverage Map</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1523415952503-9f1c16b7a8a6?w=1200&h=700&fit=crop"
                alt="Northern Ireland map stylised"
                className="w-full h-48 md:h-60 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="rounded-xl p-4 md:p-6 bg-gradient-to-br from-sky-50 to-slate-50 shadow-inner min-h-[180px] flex flex-col justify-center">
              <p className="text-sm text-slate-700">
                Our nationwide coverage includes major NI towns and counties. We tailor cleaning plans to fit properties of all sizes.
              </p>
              <ul className="mt-3 text-sm text-slate-700 list-disc pl-5">
                <li>Belfast metropolitan area</li>
                <li>Lisburn & Castlereagh</li>
                <li>North Down & Bangor</li>
                <li>Mid Ulster & Derry/Londonderry</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative floating shapes to elevate depth */}
      <div aria-hidden="true" className="absolute -top-8 -left-8 w-72 h-72 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full opacity-20 blur-3xl transform -translate-y-2 -translate-x-2" />
      <div aria-hidden="true" className="absolute -bottom-8 -right-8 w-96 h-96 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full opacity-20 blur-3xl transform translate-y-2 translate-x-2" />
    </section>
  );
};

export default Contact;