"use client";

import { motion } from "framer-motion";
import { Activity, DollarSign, Clock } from "lucide-react";
import { ProblemCard } from "./ProblemCard";

const PROBLEMS = [
  {
    icon: Activity,
    title: "Misdiagnosis",
    desc: "Subjective evaluations lead to inconsistent diagnoses and ineffective treatment plans, causing months of wasted time.",
  },
  {
    icon: DollarSign,
    title: "Prohibitive Costs",
    desc: "High hourly rates and long-term requirements make quality therapy inaccessible for the majority of families.",
  },
  {
    icon: Clock,
    title: "Limited Access",
    desc: "Waitlists stretch for months, delaying crucial early intervention windows when plasticity is highest.",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="py-32 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-20 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">The Silent Crisis</h2>
          <p className="text-2xl text-zinc-500 font-light leading-relaxed">
            Traditional speech therapy faces systemic challenges that leave millions without proper care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROBLEMS.map((problem, index) => (
            <ProblemCard
              key={problem.title}
              icon={problem.icon}
              title={problem.title}
              desc={problem.desc}
              delay={(index + 1) * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
