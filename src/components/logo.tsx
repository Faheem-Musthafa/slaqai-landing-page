import React from 'react';

interface LogoProps {
  className?: string;
  color?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-8", color = "currentColor" }) => {
  return (
    <div className={`flex items-center gap-2 font-bold text-2xl tracking-tighter ${className}`}>
        <span >ZLAQA<span className="text-Zlaqa-green">.AI</span></span>
    </div>
  );
};