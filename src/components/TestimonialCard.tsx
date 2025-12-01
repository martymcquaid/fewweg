import React from "react";

type Props = {
  name: string;
  role: string;
  text: string;
  avatar: string;
};

const TestimonialCard: React.FC<Props> = ({ name, role, text, avatar }) => {
  return (
    <article className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
      <div className="flex items-center space-x-3 mb-2">
        <img src={avatar} alt={`${name} photo`} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-xs text-slate-500">{role}</div>
        </div>
      </div>
      <p className="text-sm text-slate-700">“{text}”</p>
      <div className="mt-2 text-yellow-500 text-sm">★★★★★</div>
    </article>
  );
};

export default TestimonialCard;