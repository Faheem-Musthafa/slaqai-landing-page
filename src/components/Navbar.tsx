"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, EXTERNAL_URLS } from "@/lib/constants";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className = "", onClick, isActive }) => {
  const isExternal = href.startsWith('http') || href.startsWith('/contact') || href.startsWith('/privacy');
  
  return (
    <a 
      href={href} 
      onClick={onClick}
      className={`relative group inline-block text-[15px] font-medium transition-colors px-2 py-1 ${
        isActive 
          ? 'text-black' 
          : 'text-zinc-600 hover:text-black'
      } ${className}`}
    >
      {children}
      <span className={`absolute -bottom-1 left-0 h-[2.5px] rounded-full bg-[#9DDB2C] transition-all duration-300 ease-out ${
        isActive ? 'w-full' : 'w-0 group-hover:w-full'
      }`} />
    </a>
  );
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Track active section
      const sections = ['problem', 'solution', 'test', 'testimonials', 'faq'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      setActiveSection(current || '');
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTakeTest = () => {
    window.open(EXTERNAL_URLS.takeTest, '_blank');
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-5 px-3 sm:px-4 pointer-events-none">
      <motion.nav
        layout
        initial={{ width: '100%' }}
        animate={{ 
          width: '100%',
          maxWidth: isScrolled && !mobileMenuOpen ? '900px' : '1280px',
          backgroundColor: isScrolled || mobileMenuOpen 
            ? 'rgba(255, 255, 255, 0.95)' 
            : 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(20px)',
          borderRadius: mobileMenuOpen ? '28px' : '9999px',
          boxShadow: isScrolled || mobileMenuOpen 
            ? '0 8px 32px -8px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)' 
            : '0 4px 16px -4px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.03)',
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 30,
          mass: 0.6 
        }}
        className="pointer-events-auto overflow-hidden relative border border-zinc-100/50"
      >
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled || mobileMenuOpen 
            ? 'px-4 sm:px-5 md:px-7 py-3 md:py-3' 
            : 'px-4 sm:px-6 md:px-8 py-4 md:py-4'
        }`}>
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group pointer-events-auto relative z-10">
              <Logo className="scale-90 md:scale-100 origin-left transition-transform group-hover:scale-105" />
            </Link>

            {/* Desktop Links - Centered */}
            <div className="hidden lg:flex items-center gap-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              {NAV_LINKS.map((link) => (
                <div key={link.href} className="pointer-events-auto">
                  <NavLink 
                    href={link.href}
                    isActive={activeSection === link.href.slice(1)}
                  >
                    {link.label}
                  </NavLink>
                </div>
              ))}
            </div>

            {/* Desktop Action Button */}
            <div className="hidden lg:flex items-center gap-3">
                 <Button 
                    size="sm" 
                    onClick={handleTakeTest}
                    className="h-[42px] px-6 text-[15px] font-semibold bg-black text-white hover:bg-zinc-800 rounded-full shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20 transition-all duration-300 hover:scale-[1.02]"
                 >
                  Take Free Test
                </Button>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="lg:hidden p-2.5 text-black bg-zinc-100 hover:bg-zinc-200 rounded-full transition-all duration-200 pointer-events-auto active:scale-95"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileMenuOpen ? 'close' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </AnimatePresence>
            </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="lg:hidden border-t border-zinc-100"
              >
                <div className="flex flex-col gap-1.5 p-5">
                  {NAV_LINKS.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-3.5 text-[15px] font-medium text-zinc-700 hover:text-black hover:bg-zinc-50 rounded-xl transition-all"
                      >
                        {link.label}
                      </a>
                    </motion.div>
                  ))}
                  <div className="h-px bg-zinc-100 my-3" />
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: NAV_LINKS.length * 0.05 }}
                  >
                    <Button 
                      className="w-full h-12 text-[15px] font-semibold bg-black text-white hover:bg-zinc-800 rounded-xl shadow-lg" 
                      onClick={() => {
                        handleTakeTest();
                        setMobileMenuOpen(false);
                      }}
                    >
                      Take Free Test
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
