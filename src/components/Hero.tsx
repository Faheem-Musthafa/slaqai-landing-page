"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EXTERNAL_URLS } from "@/lib/constants";

export function Hero() {
  const handleTakeTest = () => {
    window.open(EXTERNAL_URLS.takeTest, '_blank');
  };

  const handleJoinCommunity = () => {
    window.open(EXTERNAL_URLS.community, '_blank');
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-50 via-white to-white" />
      
      {/* Animated Floating Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-200/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-Zlaqa-green/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        
        {/* Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 mb-8 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-Zlaqa-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-Zlaqa-green"></span>
          </span>
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Early Access Open</span>
        </motion.div>

        {/* Headlines */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-Zlaqa-black mb-6 leading-[1.1]"
        >
          Smart Linguistic <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-l text-Zlaqa-black to-gray-400">Adaptive Intelligence.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          AI-powered speech therapy that adapts to every voice. 
          Real-time analysis, personalized insights, and continuous care.
        </motion.p>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="group" onClick={handleTakeTest}>
            Take Free Speech Test
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" size="lg" className="border-2" onClick={handleJoinCommunity}>
            Join Community
          </Button>
        </motion.div>

        {/* Waveform Visualization */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 relative h-32 w-full max-w-md mx-auto flex items-end justify-center gap-1 md:gap-2"
        >
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="w-2 md:w-3 rounded-full bg-Zlaqa-black"
                    animate={{
                        height: ["20%", "60%", "30%", "80%", "20%"],
                        backgroundColor: i === 9 || i === 10 ? "#9DDB2C" : "#000000"
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "mirror",
                        delay: i * 0.1,
                        ease: "easeInOut"
                    }}
                    style={{
                        height: '20%',
                        opacity: i < 5 || i > 14 ? 0.3 : 1
                    }}
                />
            ))}
             
             {/* Floating Icon */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl p-4 border border-white/20 ring-1 ring-black/5">
                <Mic className="w-8 h-8 text-Zlaqa-green drop-shadow-sm" />
             </div>
        </motion.div>

      </div>
    </section>
  );
}
