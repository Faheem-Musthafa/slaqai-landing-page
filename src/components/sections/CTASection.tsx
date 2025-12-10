"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";
import { EXTERNAL_URLS } from "@/lib/constants";

export function CTASection() {
  const handleTakeTest = () => {
    window.open(EXTERNAL_URLS.takeTest, '_blank');
  };

  const handleJoinCommunity = () => {
    window.open(EXTERNAL_URLS.community, '_blank');
  };

  return (
    <section className="py-40 px-6 bg-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(157,219,44,0.15),transparent_70%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter text-black"
        >
          Ready to transform <br />
          <span className="text-zinc-400">your communication?</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl text-zinc-500 font-light"
        >
          Take our free AI-powered speech assessment and discover your potential.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button 
            size="lg" 
            onClick={handleTakeTest}
            className="rounded-full h-16 px-10 bg-black text-white hover:bg-zinc-800 text-lg font-medium shadow-xl group"
          >
            Take Free Test
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={handleJoinCommunity}
            className="rounded-full h-16 px-10 text-lg font-medium border-2 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50"
          >
            <Users className="w-5 h-5 mr-2" />
            Join Community
          </Button>
        </motion.div>
        <p className="text-sm text-zinc-400 pt-4">Free • No sign-up required • Get instant results</p>
      </div>
    </section>
  );
}
