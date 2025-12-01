import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white/90 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-4">
        <div>
          <div className="text-2xl font-bold mb-2">NI CleanCo</div>
          <p className="text-sm opacity-90">
            Professional carpet, upholstery, and floor cleaning across Northern Ireland.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Services</h4>
          <ul className="text-sm space-y-1">
            <li><a href="/services#carpet" className="hover:underline">Carpet Cleaning</a></li>
            <li><a href="/services#upholstery" className="hover:underline">Upholstery Cleaning</a></li>
            <li><a href="/services#rug" className="hover:underline">Rug Cleaning</a></li>
            <li><a href="/services#commercial" className="hover:underline">Commercial Cleaning</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm mb-2">Call us: <a href="tel:+441234567890" className="underline">+44 1234 567890</a></p>
          <p className="text-sm mb-2">Email: <a href="mailto:hello@niceleanco.co.uk" className="underline">hello@niceleanco.co.uk</a></p>
          <p className="text-xs text-slate-400">Operating hours: Mon–Sat, 9:00–18:00</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Trust & Certifications</h4>
          <div className="flex space-x-2">
            <img src="https://via.placeholder.com/60x40.png?text=Ins" alt="Insurance badge" className="rounded-md" />
            <img src="https://via.placeholder.com/60x40.png?text=NI" alt="NI local badge" className="rounded-md" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;