import React from "react";

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const ServiceCard: React.FC<Props> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all">
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 text-white mb-4">
        {icon}
      </div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );
};

export default ServiceCard;