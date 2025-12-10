"use client";

import { motion } from "framer-motion";
import { Lock, Shield, FileCheck, LucideIcon } from "lucide-react";
import { SECURITY_BADGES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  "HIPAA Compliant": Lock,
  "ISO 27001": Shield,
  "SOC 2 Type II": FileCheck,
};

export function SecurityBadges() {
  return (
    <section className="py-24 px-6 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Enterprise-Grade Security</h3>
          <p className="text-lg text-zinc-500">Your data is protected with industry-leading standards</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {SECURITY_BADGES.map((badge, i) => {
            const Icon = iconMap[badge.label];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-zinc-200 hover:border-[#9DDB2C]/30 transition-colors group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#9DDB2C]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-[#9DDB2C]" />
                </div>
                <h4 className="text-xl font-bold text-zinc-900 mb-2">{badge.label}</h4>
                <p className="text-zinc-500">{badge.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
