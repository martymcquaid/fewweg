import React from "react";

type Person = {
  name: string;
  role: string;
  bio: string;
  photo: string;
};

const TeamCard: React.FC<{ person: Person }> = ({ person }) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow hover:shadow-xl transition-all">
      <img src={person.photo} alt={`${person.name} portrait`} className="w-full h-28 object-cover rounded-md mb-2" />
      <div className="font-semibold">{person.name}</div>
      <div className="text-sm text-slate-600 mb-2">{person.role}</div>
      <p className="text-xs text-slate-700">{person.bio}</p>
    </div>
  );
};

export default TeamCard;