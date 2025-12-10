"use client";

import { motion } from "framer-motion";
import { PARTNERS } from "@/lib/constants";

export function TrustSection() {
  return (
    <section className="py-20 px-6 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-widest text-zinc-400 font-semibold">As Featured In</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 justify-center items-center">
          {PARTNERS.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex items-center justify-center ${PARTNERS.length === 1 ? 'col-span-2 md:col-span-5' : ''}`}
            >
              <div className="text-2xl font-bold text-zinc-300 hover:text-zinc-900 transition-colors cursor-pointer text-center">
                {partner}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
