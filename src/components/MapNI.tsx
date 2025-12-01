import React from "react";

const MapNI: React.FC = () => {
  return (
    <div aria-label="Northern Ireland map" className="w-full h-72 lg:h-96 bg-white rounded-2xl shadow-lg overflow-hidden">
      <svg viewBox="0 0 600 400" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#14B8A6" />
          </linearGradient>
        </defs>
        <rect width="600" height="400" fill="url(#grad)" opacity="0.15" />
        {/* simplified NI outline */}
        <path d="M120,180 L180,170 L230,190 L260,210 L290,230 L310,260 L320,290 L300,310 L260,320 L210,300 L170,270 L150,230 Z" fill="white" opacity="0.8" stroke="white" strokeWidth="2"/>
        {/* highlight Belfast region badge */}
        <circle cx="260" cy="210" r="18" fill="#0EA5E9" opacity="0.9" />
        <text x="260" y="205" textAnchor="middle" fill="white" fontSize="10" fontFamily="Arial">Belfast</text>
      </svg>
    </div>
  );
};

export default MapNI;