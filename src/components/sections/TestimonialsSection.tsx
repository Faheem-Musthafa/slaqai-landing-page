"use client";

import { motion } from "framer-motion";
import { Star, Clock, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-32 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[#9DDB2C] text-sm font-semibold mb-6"
          >
            <Quote className="w-4 h-4" />
            <span>Industry Feedback</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Thoughts from <span className="text-[#9DDB2C]">Industry Leaders</span>
          </h2>
          <p className="text-xl text-zinc-400">Feedback from experts shaping the future of speech therapy</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, i) => {
            const isComingSoon = 'comingSoon' in testimonial && testimonial.comingSoon;
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative bg-zinc-900 border rounded-3xl p-8 transition-all group ${
                  isComingSoon 
                    ? 'border-zinc-800/50 opacity-60' 
                    : 'border-zinc-800 hover:border-[#9DDB2C]/30'
                }`}
              >
                {isComingSoon && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-zinc-800 rounded-full">
                    <Clock className="w-3 h-3 text-zinc-400" />
                    <span className="text-xs font-medium text-zinc-400">Coming Soon</span>
                  </div>
                )}
                
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star 
                      key={j} 
                      className={`w-5 h-5 ${
                        isComingSoon 
                          ? 'fill-zinc-600 text-zinc-600' 
                          : 'fill-[#9DDB2C] text-[#9DDB2C]'
                      }`} 
                    />
                  ))}
                </div>
                
                <p className={`text-lg leading-relaxed mb-8 ${
                  isComingSoon ? 'text-zinc-500 italic' : 'text-zinc-300'
                }`}>
                  &quot;{testimonial.content}&quot;
                </p>
                
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border font-bold ${
                    isComingSoon 
                      ? 'bg-zinc-800/50 border-zinc-700 text-zinc-500' 
                      : 'bg-[#9DDB2C]/20 border-[#9DDB2C]/30 text-[#9DDB2C]'
                  }`}>
                    {isComingSoon ? '?' : testimonial.image}
                  </div>
                  <div>
                    <div className={`font-semibold ${isComingSoon ? 'text-zinc-500' : 'text-white'}`}>
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-zinc-500">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-zinc-500 mt-12 text-sm"
        >
          More testimonials from healthcare professionals and industry experts coming soon.
        </motion.p>
      </div>
    </section>
  );
}
