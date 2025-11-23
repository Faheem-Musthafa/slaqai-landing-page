import React from 'react';

interface LogoProps {
  className?: string;
  color?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-8", color = "currentColor" }) => {
  return (
    <div className={`flex items-center gap-2 font-bold text-2xl tracking-tighter ${className}`}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
            <rect width="32" height="32" rx="8" fill={color === 'white' ? '#FFFFFF' : '#000000'} />
            <path d="M10 16C10 12.6863 12.6863 10 16 10V10C19.3137 10 22 12.6863 22 16V17C22 19.7614 19.7614 22 17 22H10V16Z" stroke="#9DDB2C" strokeWidth="2.5" />
            <circle cx="21" cy="21" r="2" fill="#9DDB2C" />
        </svg>
        <span>Slaq<span className="text-slaq-green">.ai</span></span>
    </div>
  );
};