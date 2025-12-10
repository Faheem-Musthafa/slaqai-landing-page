"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, EXTERNAL_URLS } from "@/lib/constants";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className = "", onClick }) => {
  return (
    <a 
      href={href} 
      onClick={onClick}
      className={`relative group inline-block text-sm font-medium text-gray-600 hover:text-black transition-colors px-1 ${className}`}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-[2px] rounded-full bg-Zlaqa-green transition-all duration-300 ease-out group-hover:w-full" />
    </a>
  );
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTakeTest = () => {
    window.open(EXTERNAL_URLS.takeTest, '_blank');
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
      <motion.nav
        layout
        initial={{ width: '100%', borderRadius: '24px' }}
        animate={{ 
          width: '100%',
          maxWidth: isScrolled && !mobileMenuOpen ? '850px' : '1200px',
          backgroundColor: isScrolled || mobileMenuOpen ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0)',
          backdropFilter: isScrolled || mobileMenuOpen ? 'blur(16px)' : 'blur(0px)',
          borderWidth: isScrolled || mobileMenuOpen ? '1px' : '0px',
          borderColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: mobileMenuOpen ? '32px' : '9999px',
          boxShadow: isScrolled || mobileMenuOpen ? '0 10px 40px -10px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.02)' : 'none',
        }}
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 25,
          mass: 0.8 
        }}
        className="pointer-events-auto overflow-hidden relative"
      >
        <div className={`flex items-center justify-between px-6 md:px-8 transition-all duration-300 ${isScrolled || mobileMenuOpen ? 'py-3' : 'py-5'}`}>
            
            <Link href="/" className="flex items-center gap-2 group pointer-events-auto">
              <Logo className="scale-90 md:scale-100 origin-left transition-transform" />
            </Link>

            {/* Desktop Links - Centered visually in the compact mode */}
            <div className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              {NAV_LINKS.map((link) => (
                <div key={link.href} className="pointer-events-auto">
                  <NavLink href={link.href}>{link.label}</NavLink>
                </div>
              ))}
            </div>

            {/* Desktop Action */}
            <div className="hidden md:flex items-center">
                 <Button 
                    size="sm" 
                    onClick={handleTakeTest}
                    className="h-10 px-6 text-sm"
                 >
                  Take Free Test
                </Button>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden p-2 text-black bg-gray-50 hover:bg-gray-100 rounded-full transition-colors pointer-events-auto"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden px-6 pb-8 pt-2"
              >
                <div className="flex flex-col gap-6 items-center text-center">
                  {NAV_LINKS.map((link) => (
                    <NavLink 
                      key={link.href}
                      href={link.href} 
                      onClick={() => setMobileMenuOpen(false)} 
                      className="text-lg"
                    >
                      {link.label}
                    </NavLink>
                  ))}
                  <div className="w-full h-px bg-gray-100" />
                  <Button className="w-full" onClick={handleTakeTest}>
                    Take Free Test
                  </Button>
                </div>
              </motion.div>
            )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
