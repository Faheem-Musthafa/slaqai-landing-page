"use client";

import { motion } from "framer-motion";
import { Brain, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function AnalysisVisual() {
  return (
    <motion.div 
      className="flex-1 w-full aspect-[4/3] relative"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-zinc-800 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4">
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 animate-pulse" />
                <div className="flex-1 space-y-2">
                  <div className="h-3 bg-white/10 rounded w-3/4" />
                  <div className="h-2 bg-white/5 rounded w-1/2" />
                </div>
                <motion.div 
                  className="text-[#9DDB2C] font-mono text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.5 }}
                >
                  {98 - i * 2}%
                </motion.div>
              </div>
            ))}
            <div className="mt-8 h-32 bg-white/5 rounded-xl relative overflow-hidden flex items-center px-4 gap-1">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="flex-1 bg-[#9DDB2C] rounded-full opacity-50"
                  animate={{ height: ["20%", "80%", "30%"] }}
                  transition={{ 
                    duration: 1, 
                    repeat: Infinity, 
                    delay: i * 0.05,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function TherapyVisual() {
  return (
    <motion.div 
      className="flex-1 w-full aspect-[4/3] relative"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-zinc-100 rounded-3xl overflow-hidden border border-zinc-200 shadow-2xl">
        <div className="absolute inset-0 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-90 grayscale hover:grayscale-0 transition-all duration-700" />
        <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-black">Session Active</div>
                <div className="text-xs text-zinc-500">Adapting difficulty...</div>
              </div>
            </div>
            <span className="text-[#9DDB2C] font-bold bg-black/5 px-3 py-1 rounded-full text-sm">Level 4</span>
          </div>
          <div className="w-full bg-zinc-200 h-2 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-black" 
              initial={{ width: "0%" }}
              whileInView={{ width: "65%" }}
              transition={{ duration: 1.5 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProgressVisual() {
  return (
    <motion.div 
      className="flex-1 w-full aspect-[4/3] relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl flex items-center justify-center">
        <div className="relative w-full max-w-sm h-64 flex items-end justify-between px-8 pb-8 gap-4">
          {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
            <motion.div 
              key={i}
              className="w-full bg-zinc-800 rounded-t-md relative group"
              initial={{ height: "10%" }}
              whileInView={{ height: `${h}%` }}
              transition={{ duration: 1, delay: i * 0.1 }}
            >
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[#9DDB2C] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-md" />
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">{h}%</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function SolutionSection() {
  return (
    <section id="solution" className="bg-black text-white py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#9DDB2C] text-sm font-medium mb-6"
        >
          <Brain className="w-4 h-4" />
          <span>The Intelligence Engine</span>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-8"
        >
          How Zlaqa AI Works
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-zinc-400 max-w-2xl mx-auto"
        >
          A comprehensive approach to modern speech therapy powered by advanced intelligence and real-time adaptation.
        </motion.p>
      </div>

      <div className="space-y-40">
        {/* Continuous Analysis */}
        <div className="flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1 space-y-8">
            <div className="w-20 h-1 bg-[#9DDB2C]" />
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Continuous Analysis</h3>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Our AI constantly monitors speech patterns through a non-intrusive wearable, detecting subtle nuances that human ears might miss. This creates a dynamic, evolving profile of linguistic health.
            </p>
            <ul className="space-y-4">
              {["Real-time phoneme tracking", "Contextual syntax analysis", "Emotional tone detection"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300">
                  <div className="w-6 h-6 rounded-full bg-[#9DDB2C]/20 flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-[#9DDB2C]" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <AnalysisVisual />
        </div>

        {/* AI-Guided Therapy */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-20">
          <div className="flex-1 space-y-8">
            <div className="w-20 h-1 bg-white" />
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">AI-Guided Therapy</h3>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Personalized exercises adapt in real-time to performance. No more generic worksheets—just targeted intervention that accelerates progress and adjusts difficulty dynamically.
            </p>
            <Button
              className="rounded-full h-12 px-8 font-medium
                        bg-gradient-to-r from-white/10 to-white/5
                        border border-white/20 backdrop-blur-xl
                        hover:from-white/20 hover:to-white/10
                        transition-all animate-pulse text-white"
            >
              Explore Methodologies
            </Button>
          </div>
          <TherapyVisual />
        </div>

        {/* Progress Insights */}
        <div className="flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1 space-y-8">
            <div className="w-20 h-1 bg-[#9DDB2C]" />
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Progress Insights</h3>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Visualize improvement with medical-grade accuracy. Track milestones, export reports, and see the tangible impact of daily practice through beautiful data visualization.
            </p>
          </div>
          <ProgressVisual />
        </div>
      </div>
    </section>
  );
}
