"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EXTERNAL_URLS } from "@/lib/constants";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <Button 
        size="lg"
        onClick={() => window.open(EXTERNAL_URLS.takeTest, '_blank')}
        className="rounded-full h-14 px-8 bg-[#9DDB2C] text-black hover:bg-[#8bc325] font-bold shadow-2xl hover:shadow-[0_0_40px_-10px_rgba(157,219,44,0.8)] transition-all hover:scale-105"
      >
        Take Free Test <ArrowRight className="ml-2 w-5 h-5" />
      </Button>
    </motion.div>
  );
}
