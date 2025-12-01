import React from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";
import TeamCard from "../components/TeamCard";

type Person = {
  name: string;
  role: string;
  bio: string;
  photo: string;
};

const team: Person[] = [
  {
    name: "Aidan Murphy",
    role: "Operations Manager",
    bio: "Over 10 years in field operations with a focus on eco-friendly cleaning strategies.",
    photo: "https://images.unsplash.com/photo-1523345219-3d7f2a33cf02?w=400&h=400&fit=crop",
  },
  {
    name: "Nina O’Reilly",
    role: "Lead Technician",
    bio: "Certified carpet and upholstery technician with a passion for training teammates.",
    photo: "https://images.unsplash.com/photo-1506794778202-cbc83e24f9b0?w=400&h=400&fit=crop",
  },
  {
    name: "Declan Boyd",
    role: "Commercial Cleaning Specialist",
    bio: "Specialises in fast-turnaround environments without compromising quality.",
    photo: "https://images.unsplash.com/photo-1544005316-0b8a0f1f7a3a?w=400&h=400&fit=crop",
  },
  {
    name: "Sophie Kelly",
    role: "Customer Experience Lead",
    bio: "Ensures every client receives a smooth, transparent service journey.",
    photo: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=400&fit=crop",
  },
  {
    name: "Eamon McGrath",
    role: "Senior Technician",
    bio: "Expert in odour removal and stain treatments with proven results.",
    photo: "https://images.unsplash.com/photo-1524504388940-b5c6a0a7f7e3?w=400&h=400&fit=crop",
  },
  {
    name: "Aoife Byrne",
    role: "Accounts & Scheduling",
    bio: "Keeps our calendars tight and customers satisfied with timely updates.",
    photo: "https://images.unsplash.com/photo-1544005316-8d9e3d2e83f6?w=400&h=400&fit=crop",
  },
];

const About: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-3xl font-bold mb-4">About NI CleanCo</h1>
          <p className="text-slate-700 mb-4">
            Built on a simple premise: premium cleaning that is fast, reliable, and kind to the environment. We’ve grown from a Belfast-based team to a trusted NI-wide service with a clear focus on client outcomes and sustainable practices.
          </p>
          <p className="text-slate-700 mb-6">
            Our mission is to restore freshness to homes and workplaces, while delivering exceptional value through transparent pricing, careful technicians, and modern equipment.
          </p>
          <Link to="/contact" className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold">
            Contact Us
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {team.map((p) => (
            <TeamCard key={p.name} person={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;