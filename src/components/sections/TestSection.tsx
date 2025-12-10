"use client";

import { motion } from "framer-motion";
import { 
  Brain, 
  Target, 
  ClipboardList, 
  Users, 
  Trophy, 
  MessageCircle, 
  ArrowRight, 
  Clock, 
  Mic, 
  MicOff,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { EXTERNAL_URLS, TEST_FEATURES, TEST_STATS, TEST_HOW_IT_WORKS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Target,
  ClipboardList,
  Users,
  Trophy,
  MessageCircle,
};

export function TestSection() {
  return (
    <section id="test" className="py-32 px-4 md:px-6 bg-gradient-to-b from-zinc-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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
            <span>Free Speech Assessment</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
            Discover Your <span className="text-[#9DDB2C]">Speech Profile</span>
            <br />
            <span className="text-zinc-400">in 1-2 Minutes</span>
          </h2>
          
          <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-8">
            A science-backed test that maps your triggers, risk level, and daily exercises. 
            No voice recording required.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10">
            {TEST_STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-zinc-900">{stat.value}</div>
                <div className="text-sm text-zinc-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Button 
              size="lg" 
              className="group h-14 px-8 text-lg"
              onClick={() => window.open(EXTERNAL_URLS.takeTest, '_blank')}
            >
              Take the Free Test
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-14 px-8 text-lg border-2"
              onClick={() => window.open(EXTERNAL_URLS.community, '_blank')}
            >
              Join Early Access Community
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-500">
            <span className="flex items-center gap-1.5">
              <MicOff className="w-4 h-4 text-[#9DDB2C]" />
              No voice recording
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#9DDB2C]" />
              1-2 minutes
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#9DDB2C]" />
              Clinically validated
            </span>
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            How It Works
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {TEST_HOW_IT_WORKS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {i < TEST_HOW_IT_WORKS.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-[#9DDB2C] to-zinc-200" />
                )}
                
                <div className="relative bg-white rounded-2xl p-6 border border-zinc-100 shadow-sm hover:shadow-lg hover:border-[#9DDB2C]/30 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-[#9DDB2C] text-black font-bold text-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-bold text-zinc-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">
            More Than Just a Test
          </h3>
          <p className="text-zinc-500 text-center mb-12 max-w-xl mx-auto">
            ZLAQA gives you the tools, community, and guidance to understand and improve your speech.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEST_FEATURES.map((feature, i) => {
              const Icon = iconMap[feature.icon];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-sm hover:shadow-lg hover:border-[#9DDB2C]/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#9DDB2C]/10 flex items-center justify-center mb-4 group-hover:bg-[#9DDB2C]/20 group-hover:scale-110 transition-all">
                    <Icon className="w-6 h-6 text-[#9DDB2C]" />
                  </div>
                  <h4 className="text-lg font-bold text-zinc-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Ready to understand your speech patterns?
          </h3>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Take the free assessment and join our community of people working towards confident, fluent communication.
          </p>
          <Button 
            size="lg" 
            className="h-14 px-10 text-lg bg-[#9DDB2C] hover:bg-[#8bc925] text-black font-bold"
            onClick={() => window.open(EXTERNAL_URLS.takeTest, '_blank')}
          >
            Start Free Assessment
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-zinc-500 text-sm mt-4">
            No credit card • No audio recording • 2 minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
}
