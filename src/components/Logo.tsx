import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 500 500" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Ring */}
      <circle cx="250" cy="250" r="240" fill="none" stroke="#FFD700" strokeWidth="8" />
      
      {/* White Background */}
      <circle cx="250" cy="250" r="236" fill="white" />

      {/* Sun Rays */}
      <g transform="translate(250, 250)">
        {Array.from({ length: 18 }).map((_, i) => (
          <path
            key={i}
            d="M 0,-210 Q 15,-180 0,-150 Q -15,-180 0,-210"
            fill="#FFD700"
            transform={`rotate(${i * 20})`}
          />
        ))}
      </g>

      {/* Top Sun */}
      <path 
        d="M 100 250 A 150 150 0 1 1 400 250 Z" 
        fill="#FFD700" 
      />

      {/* Shanyrak Symbol on Sun */}
      <g transform="translate(250, 140) scale(0.4)">
        <circle cx="0" cy="0" r="80" fill="none" stroke="white" strokeWidth="8" />
        <line x1="-80" y1="0" x2="80" y2="0" stroke="white" strokeWidth="6" />
        <line x1="0" y1="-80" x2="0" y2="80" stroke="white" strokeWidth="6" />
        <path d="M -56,-56 L 56,56" stroke="white" strokeWidth="6" />
        <path d="M 56,-56 L -56,56" stroke="white" strokeWidth="6" />
      </g>

      {/* Bottom Globe */}
      <path 
        d="M 100 250 A 150 150 0 0 0 400 250 Z" 
        fill="#0099DD" 
      />
      
      {/* Globe Grid Lines */}
      <g stroke="white" strokeWidth="2" fill="none" opacity="0.6">
        <path d="M 100 250 Q 250 350 400 250" />
        <path d="M 140 330 Q 250 400 360 330" />
        <line x1="250" y1="250" x2="250" y2="400" />
        <path d="M 175 260 Q 200 350 250 400" />
        <path d="M 325 260 Q 300 350 250 400" />
      </g>

      {/* Red Text: ҚАЙНАР */}
      <text 
        x="250" 
        y="245" 
        textAnchor="middle" 
        fill="#E41B17" 
        fontSize="70" 
        fontWeight="900" 
        fontFamily="Arial, sans-serif"
      >
        ҚАЙНАР
      </text>

      {/* Blue Text: ҚАЙНАР ЖОҒАРЫ КОЛЛЕДЖІ */}
      <defs>
        <path id="bottomCurve" d="M 80,350 A 200,200 0 0,0 420,350" />
      </defs>
      <text fill="#2B308B" fontSize="24" fontWeight="bold" fontFamily="Arial, sans-serif">
        <textPath xlinkHref="#bottomCurve" startOffset="50%" textAnchor="middle">
          «ҚАЙНАР» ЖОҒАРЫ КОЛЛЕДЖІ
        </textPath>
      </text>
    </svg>
  );
};
