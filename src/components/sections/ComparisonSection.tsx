"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { COMPARISON_FEATURES } from "@/lib/constants";

export function ComparisonSection() {
  return (
    <section className="py-32 px-4 md:px-6 bg-gradient-to-b from-white to-zinc-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9DDB2C]/10 text-[#7ab820] text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>Why We&apos;re Different</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
            Traditional vs <span className="text-[#9DDB2C]">ZLAQA AI</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-500 font-medium">5 Key Differences That Matter</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl border border-zinc-200 overflow-hidden shadow-xl shadow-zinc-200/50"
        >
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_1fr]">
            <div className="hidden md:flex bg-zinc-50 p-6 font-bold text-zinc-600 text-sm uppercase tracking-wider items-center border-b border-r border-zinc-100">
              Point
            </div>
            <div className="hidden md:flex bg-zinc-50 p-6 font-bold text-zinc-500 text-sm uppercase tracking-wider items-center border-b border-r border-zinc-100">
              Traditional Speech Therapy
            </div>
            <div className="hidden md:flex bg-[#9DDB2C]/15 p-6 font-bold text-[#5a8a10] text-sm uppercase tracking-wider items-center border-b border-zinc-100">
              <span className="flex items-center gap-2">
                ZLAQA AI
                <span className="px-2 py-0.5 bg-[#9DDB2C] text-black text-xs rounded-full font-bold">NEW</span>
              </span>
            </div>
          </div>
          
          {/* Data Rows */}
          {COMPARISON_FEATURES.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="grid grid-cols-1 md:grid-cols-[180px_1fr_1fr] group hover:bg-zinc-50/50 transition-colors"
            >
              {/* Point Label */}
              <div className="bg-white p-5 md:p-6 border-b border-r-0 md:border-r border-zinc-100 group-hover:bg-zinc-50/80 transition-colors">
                <span className="inline-flex items-center gap-2 text-zinc-900 font-bold text-base md:text-lg">
                  {item.feature}
                </span>
              </div>
              
              {/* Traditional Column */}
              <div className="bg-white p-5 md:p-6 border-b border-r-0 md:border-r border-zinc-100 group-hover:bg-zinc-50/80 transition-colors">
                <div className="md:hidden text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Traditional</div>
                <p className="text-zinc-500 text-sm md:text-base leading-relaxed flex items-start gap-2">
                  <span className="text-zinc-300 mt-1 hidden md:block">•</span>
                  {item.traditional}
                </p>
              </div>
              
              {/* ZLAQA Column */}
              <div className="bg-[#9DDB2C]/5 p-5 md:p-6 border-b border-zinc-100 group-hover:bg-[#9DDB2C]/10 transition-colors">
                <div className="md:hidden text-xs font-semibold text-[#7ab820] uppercase tracking-wider mb-2">ZLAQA AI</div>
                <p className="text-zinc-800 text-sm md:text-base leading-relaxed font-medium flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-[#9DDB2C] mt-1 shrink-0 hidden md:block" />
                  {item.zlaqa}
                </p>
              </div>
            </motion.div>
          ))}
          
          {/* Bottom CTA Row */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-zinc-900 to-zinc-800 p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <p className="text-white font-semibold text-lg">Ready to experience the difference?</p>
                <p className="text-zinc-400 text-sm">Join thousands already improving with ZLAQA AI</p>
              </div>
              <button 
                onClick={() => window.open('https://test.zlaqa.com/#/community', '_blank')}
                className="px-6 py-3 bg-[#9DDB2C] hover:bg-[#8bc925] text-black font-bold rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#9DDB2C]/30 flex items-center gap-2"
              >
                Join the Community
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
