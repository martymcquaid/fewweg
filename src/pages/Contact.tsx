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
    if (!email.includes("@")) e.email = "Enter a valid email address.";
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
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-3xl font-bold mb-4">Get a Quote or Book a Cleaning</h1>
          <p className="text-slate-700 mb-4">
            Tell us about your space, and our NI-based team will respond with a tailored quote fast.
          </p>

          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 rounded-2xl bg-white shadow">
              <div className="font-semibold mb-1">Phone</div>
              <a href="tel:+441234567890" className="text-blue-700 font-medium">+44 1234 567890</a>
            </div>
            <div className="p-4 rounded-2xl bg-white shadow">
              <div className="font-semibold mb-1">Email</div>
              <a href="mailto:hello@niceleanco.co.uk" className="text-blue-700 font-medium">hello@niceleanco.co.uk</a>
            </div>
          </div>
        </div>

        <form className="bg-white p-6 rounded-2xl shadow" onSubmit={onSubmit} noValidate>
          <div className="grid gap-4">
            <label className="block">
              <span className="text-sm font-medium">Your Name</span>
              <input
                className="mt-1 block w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                placeholder="Jane Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <span className="text-xs text-red-600">{errors.name}</span>}
            </label>

            <label className="block">
              <span className="text-sm font-medium">Email</span>
              <input
                className="mt-1 block w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <span className="text-xs text-red-600">{errors.email}</span>}
            </label>

            <label className="block">
              <span className="text-sm font-medium">Message</span>
              <textarea
                className="mt-1 block w-full border border-gray-200 rounded-lg p-3 h-32 focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us about your space, timeline, and any concerns..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {errors.message && <span className="text-xs text-red-600">{errors.message}</span>}
            </label>

            <button type="submit" className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold">
              {submitted ? "Thanks! We'll be in touch" : "Request Quote"}
            </button>
          </div>
        </form>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <p className="text-sm text-slate-600">
          We respond within 1 business day. Your data is secure and never shared.
        </p>
      </div>
    </section>
  );
};

export default Contact;