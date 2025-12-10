"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ProblemCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  delay: number;
}

export function ProblemCard({ icon: Icon, title, desc, delay }: ProblemCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay, duration: 0.6 }}
      className="group relative p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#9DDB2C]/0 via-transparent to-transparent group-hover:from-[#9DDB2C]/5 transition-all duration-500" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
          <Icon className="w-7 h-7 text-zinc-900 dark:text-white group-hover:text-[#9DDB2C] transition-colors" />
        </div>
        <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-white group-hover:text-[#9DDB2C] transition-colors">{title}</h3>
        <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-lg">
          {desc}
        </p>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#9DDB2C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
}
