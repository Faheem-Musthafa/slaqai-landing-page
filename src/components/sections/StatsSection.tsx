"use client";

import { motion } from "framer-motion";
import { Users, TrendingUp, Award, Zap, LucideIcon } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { STATS_DATA } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  "Active Users": Users,
  "Success Rate": TrendingUp,
  "Industry Awards": Award,
  "AI Monitoring": Zap,
};

export function StatsSection() {
  return (
    <section className="py-24 px-6 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS_DATA.map((stat, i) => {
            const Icon = iconMap[stat.label];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-500">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                    <Icon className="w-7 h-7 text-black" />
                  </div>
                </div>

                <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>

                <div className="text-sm text-zinc-500 uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
