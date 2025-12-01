import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavLink = ({ to, label }: { to: string; label: string }) => (
  <Link
    to={to}
    className="px-4 py-2 rounded-lg hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
  >
    {label}
  </Link>
);

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-full shadow-lg" aria-label="Site Logo" role="img"></div>
          <span className="font-semibold text-xl tracking-tight">NI CleanCo</span>
        </div>
        <nav className="hidden md:flex items-center space-x-2">
          <NavLink to="/" label="Home" />
          <NavLink to="/services" label="Services" />
          <NavLink to="/about" label="About" />
          <NavLink to="/blog" label="Blog" />
          <NavLink to="/contact" label="Contact" />
        </nav>
        <button
          aria-label="Open mobile menu"
          className="md:hidden p-2 rounded-md bg-white border border-gray-200"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="block w-5 h-0.5 bg-black mb-1" />
          <span className="block w-5 h-0.5 bg-black mb-1" />
          <span className="block w-5 h-0.5 bg-black" />
        </button>
      </div>

      <div className={`md:hidden ${open ? "block" : "hidden"} border-t border-gray-200 bg-white`}>
        <div className="px-4 py-2 space-y-1">
          <NavLink to="/" label="Home" />
          <NavLink to="/services" label="Services" />
          <NavLink to="/about" label="About" />
          <NavLink to="/blog" label="Blog" />
          <NavLink to="/contact" label="Contact" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;