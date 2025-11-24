"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { Logo } from "@/components/logo";
import { 
  ArrowRight, 
  Activity, 
  DollarSign, 
  Clock, 
  Brain, 
  Menu, 
  X, 
  ChevronRight, 
  Play,
  Mic,
  Twitter,
  Linkedin,
  Instagram,
  Check,
  Star,
  TrendingUp,
  Users,
  Award,
  Zap,
  Shield,
  ChevronDown,
  Lock,
  FileCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Icon } from "@radix-ui/react-select";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

function AnimatedCounter({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <Button 
        size="lg"
        className="rounded-full h-14 px-8 bg-[#9DDB2C] text-black hover:bg-[#8bc325] font-bold shadow-2xl hover:shadow-[0_0_40px_-10px_rgba(157,219,44,0.8)] transition-all hover:scale-105"
      >
        Get Started <ArrowRight className="ml-2 w-5 h-5" />
      </Button>
    </motion.div>
  );
}

function SmoothScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-[#9DDB2C] origin-left z-[60]"
      style={{ scaleX }}
    />
  );
}

// Helper component for links with animated underline
const NavLink: React.FC<{ href: string; children: React.ReactNode; className?: string; onClick?: () => void }> = ({ href, children, className = "", onClick }) => {
  return (
    <a 
      href={href} 
      onClick={onClick}
      className={`relative group inline-block text-sm font-medium text-gray-600 hover:text-black transition-colors px-1 ${className}`}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-[2px] rounded-full bg-slaq-green transition-all duration-300 ease-out group-hover:w-full" />
    </a>
  );
};

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
      <motion.nav
        layout
        initial={{ width: '100%', borderRadius: '24px' }}
        animate={{ 
          width: '100%',
          maxWidth: isScrolled && !mobileMenuOpen ? '850px' : '1200px',
          backgroundColor: isScrolled || mobileMenuOpen ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0)',
          backdropFilter: isScrolled || mobileMenuOpen ? 'blur(16px)' : 'blur(0px)',
          borderWidth: isScrolled || mobileMenuOpen ? '1px' : '0px',
          borderColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: mobileMenuOpen ? '32px' : '9999px',
          boxShadow: isScrolled || mobileMenuOpen ? '0 10px 40px -10px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.02)' : 'none',
        }}
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 25,
          mass: 0.8 
        }}
        className="pointer-events-auto overflow-hidden relative"
      >
        <div className={`flex items-center justify-between px-6 md:px-8 transition-all duration-300 ${isScrolled || mobileMenuOpen ? 'py-3' : 'py-5'}`}>
            
            <Link href="/" className="flex items-center gap-2 group pointer-events-auto">
              <Logo className="scale-90 md:scale-100 origin-left transition-transform" />
            </Link>

            {/* Desktop Links - Centered visually in the compact mode */}
            <div className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
               <div className="pointer-events-auto"><NavLink href="#problem">Problem</NavLink></div>
               <div className="pointer-events-auto"><NavLink href="#solution">How it Works</NavLink></div>
               <div className="pointer-events-auto"><NavLink href="#testimonials">Testimonials</NavLink></div>
               <div className="pointer-events-auto"><NavLink href="#faq">FAQ</NavLink></div>
               <div className="pointer-events-auto"><NavLink href="#contact">Contact</NavLink></div>
            </div>

            {/* Desktop Action */}
            <div className="hidden md:flex items-center">
                 <Button 
                    variant="primary" 
                    size="sm" 
                    onClick={() => window.open('https://slaq.neuraq.in', '_blank')} 
                    className="h-10 px-6 text-sm"
                 >
                  Join Early Access
                </Button>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden p-2 text-black bg-gray-50 hover:bg-gray-100 rounded-full transition-colors pointer-events-auto"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden px-6 pb-8 pt-2"
              >
                <div className="flex flex-col gap-6 items-center text-center">
                  <NavLink href="#problem" onClick={() => setMobileMenuOpen(false)} className="text-lg">Problem</NavLink>
                  <NavLink href="#solution" onClick={() => setMobileMenuOpen(false)} className="text-lg">How it Works</NavLink>
                  <NavLink href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-lg">Testimonials</NavLink>
                  <NavLink href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-lg">FAQ</NavLink>
                  <NavLink href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-lg">Contact</NavLink>
                  <div className="w-full h-px bg-gray-100" />
                  <Button className="w-full" onClick={() => window.open('https://slaq.neuraq.in', '_blank')}>
                    Join Early Access
                  </Button>
                </div>
              </motion.div>
            )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-50 via-white to-white" />
      
      {/* Animated Floating Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-200/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-slaq-green/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        
        {/* Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 mb-8 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slaq-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-slaq-green"></span>
          </span>
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Now in Beta</span>
        </motion.div>

        {/* Headlines */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-slaq-black mb-6 leading-[1.1]"
        >
          Smart Linguistic <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-l text-slaq-black to-gray-400">Adaptive Intelligence.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          AI-powered speech therapy that adapts to every voice. 
          Real-time analysis, personalized insights, and continuous care.
        </motion.p>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="group" onClick={() => window.open('https://slaq.neuraq.in', '_blank')}>
            Join Early Access
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="ghost" size="lg" className="text-gray-500 hover:text-black hover:bg-gray-100/50">
            Watch Demo
          </Button>
        </motion.div>

        {/* Waveform Visualization */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 relative h-32 w-full max-w-md mx-auto flex items-end justify-center gap-1 md:gap-2"
        >
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="w-2 md:w-3 rounded-full bg-slaq-black"
                    animate={{
                        height: ["20%", "60%", "30%", "80%", "20%"],
                        backgroundColor: i === 9 || i === 10 ? "#9DDB2C" : "#000000"
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "mirror",
                        delay: i * 0.1,
                        ease: "easeInOut"
                    }}
                    style={{
                        height: '20%',
                        opacity: i < 5 || i > 14 ? 0.3 : 1
                    }}
                />
            ))}
             
             {/* Floating Icon */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl p-4 border border-white/20 ring-1 ring-black/5">
                <Mic className="w-8 h-8 text-slaq-green drop-shadow-sm" />
             </div>
        </motion.div>

      </div>
    </section>
  );
};

function TrustSection() {
  const partners = [
    "RAC Global" 
  ];

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
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex items-center justify-center ${partners.length === 1 ? 'col-span-2 md:col-span-5' : ''}`}
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

function StatsSection() {
  const stats = [
    { Icon: Users, value: 50, suffix: "K+", label: "Active Users", color: "from-[#9DDB2C] to-emerald-400" },
    { Icon: TrendingUp, value: 94, suffix: "%", label: "Success Rate", color: "from-blue-400 to-cyan-400" },
    { Icon: Award, value: 15, suffix: "+", label: "Industry Awards", color: "from-purple-400 to-pink-400" },
    { Icon: Zap, value: 24, suffix: "/7", label: "AI Monitoring", color: "from-[#9DDB2C] to-yellow-400" }
  ];

  return (
    <section className="py-24 px-6 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => {
            const Icon = stat.Icon;
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


function SecurityBadges() {
  const badges = [
    { icon: Lock, label: "HIPAA Compliant", desc: "Medical-grade security" },
    { icon: Shield, label: "ISO 27001", desc: "Information security" },
    { icon: FileCheck, label: "SOC 2 Type II", desc: "Verified security controls" }
  ];

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
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-zinc-200 hover:border-[#9DDB2C]/30 transition-colors group"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#9DDB2C]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <badge.icon className="w-8 h-8 text-[#9DDB2C]" />
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-2">{badge.label}</h4>
              <p className="text-zinc-500">{badge.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemCard({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) {
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

function SolutionSection() {
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
          How Slaq AI Works
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
        </div>

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
        </div>

        <div className="flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1 space-y-8">
            <div className="w-20 h-1 bg-[#9DDB2C]" />
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Progress Insights</h3>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Visualize improvement with medical-grade accuracy. Track milestones, export reports, and see the tangible impact of daily practice through beautiful data visualization.
            </p>
          </div>
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
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  const features = [
    { feature: "24/7 Speech Monitoring", traditional: false, slaq: true },
    { feature: "Real-time AI Analysis", traditional: false, slaq: true },
    { feature: "Personalized Therapy Plans", traditional: false, slaq: true },
    { feature: "Affordable Pricing", traditional: false, slaq: true },
    { feature: "Instant Progress Reports", traditional: false, slaq: true },
    { feature: "Emotional Tone Detection", traditional: false, slaq: true },
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Why Choose Slaq?</h2>
          <p className="text-xl text-zinc-500">See how we compare to traditional therapy</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-zinc-50 rounded-3xl border border-zinc-200 overflow-hidden"
        >
          <div className="grid grid-cols-3 gap-px bg-zinc-200">
            <div className="bg-zinc-50 p-6 font-semibold text-zinc-900"></div>
            <div className="bg-zinc-50 p-6 text-center font-semibold text-zinc-500">Traditional</div>
            <div className="bg-[#9DDB2C]/10 p-6 text-center font-semibold text-black">Slaq AI</div>
          </div>
          
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="grid grid-cols-3 gap-px bg-zinc-200"
            >
              <div className="bg-white p-6 text-zinc-900 font-medium">{item.feature}</div>
              <div className="bg-white p-6 flex items-center justify-center">
                {item.traditional ? (
                  <Check className="w-5 h-5 text-zinc-400" />
                ) : (
                  <X className="w-5 h-5 text-zinc-300" />
                )}
              </div>
              <div className="bg-[#9DDB2C]/5 p-6 flex items-center justify-center">
                {item.slaq && <Check className="w-6 h-6 text-[#9DDB2C]" />}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent of 6-year-old",
      content: "Slaq AI transformed my daughter's speech therapy journey. The progress tracking is incredible, and the AI adapts perfectly to her needs.",
      rating: 5,
      image: "SJ"
    },
    {
      name: "Dr. Michael Chen",
      role: "Speech-Language Pathologist",
      content: "As a professional, I'm impressed by the accuracy and insights. This tool complements traditional therapy beautifully.",
      rating: 5,
      image: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Adult Patient",
      content: "After my stroke, Slaq AI helped me regain confidence in speaking. The 24/7 monitoring gave me peace of mind during recovery.",
      rating: 5,
      image: "ER"
    }
  ];

  return (
    <section id="testimonials" className="py-32 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Loved by Thousands</h2>
          <p className="text-xl text-zinc-400">Real stories from real people</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-[#9DDB2C]/30 transition-colors group"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#9DDB2C] text-[#9DDB2C]" />
                ))}
              </div>
              <p className="text-zinc-300 text-lg leading-relaxed mb-8">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#9DDB2C]/20 flex items-center justify-center border border-[#9DDB2C]/30 font-bold text-[#9DDB2C]">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-zinc-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does Slaq AI monitor speech?",
      answer: "Slaq uses a comfortable, non-intrusive wearable device with advanced microphones that continuously analyze your speech patterns throughout the day. The AI processes this data in real-time to identify areas for improvement."
    },
    {
      question: "Is Slaq AI suitable for children?",
      answer: "Absolutely! Slaq AI is designed for all ages, from young children to adults. Our adaptive algorithms adjust therapy complexity based on age, developmental stage, and individual progress."
    },
    {
      question: "How long before I see results?",
      answer: "Most users notice measurable improvements within 4-6 weeks of consistent use. However, every individual is different, and our AI provides personalized timelines based on your specific needs and progress."
    },
    {
      question: "Does this replace traditional therapy?",
      answer: "Slaq AI is designed to complement, not replace, professional speech therapy. Many therapists use our platform to enhance their practice and provide better outcomes for their patients."
    },
    {
      question: "What about data privacy?",
      answer: "We take privacy seriously. All speech data is encrypted end-to-end, HIPAA-compliant, and never shared with third parties. You have full control over your data at all times."
    }
  ];

  return (
    <section id="faq" className="py-32 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Common Questions</h2>
          <p className="text-xl text-zinc-500">Everything you need to know</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-zinc-200 rounded-2xl overflow-hidden hover:border-[#9DDB2C]/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-50 transition-colors"
              >
                <span className="font-semibold text-lg text-zinc-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-zinc-500 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{ height: openIndex === i ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-zinc-600 leading-relaxed">{faq.answer}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("You're on the waitlist! Check your email for confirmation.");
    setEmail("");
    setIsSubmitting(false);
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
          Join the waitlist for exclusive access to the beta.
        </motion.p>
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto"
        >
           <div className="relative w-full">
             <input 
               type="email" 
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               placeholder="Enter your email address" 
               disabled={isSubmitting}
               className="flex h-16 w-full rounded-full border border-zinc-200 bg-zinc-50 px-8 py-2 text-lg shadow-sm transition-all placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:border-transparent hover:border-zinc-300 disabled:opacity-50"
             />
           </div>
           <Button 
             type="submit"
             size="lg" 
             disabled={isSubmitting}
             className="rounded-full h-16 px-10 bg-black text-white hover:bg-zinc-800 text-lg font-medium shrink-0 shadow-xl disabled:opacity-50"
           >
             {isSubmitting ? "Joining..." : "Join Now"}
           </Button>
        </motion.form>
        <p className="text-sm text-zinc-400 pt-4">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-[#9DDB2C] selection:text-black overflow-x-hidden">
      <SmoothScrollProgress />
      <Navbar />
      <Hero />
      <TrustSection />
      <StatsSection />

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
            <ProblemCard 
              icon={Activity}
              title="Misdiagnosis"
              desc="Subjective evaluations lead to inconsistent diagnoses and ineffective treatment plans, causing months of wasted time."
              delay={0.1}
            />
            <ProblemCard 
              icon={DollarSign}
              title="Prohibitive Costs"
              desc="High hourly rates and long-term requirements make quality therapy inaccessible for the majority of families."
              delay={0.2}
            />
            <ProblemCard 
              icon={Clock}
              title="Limited Access"
              desc="Waitlists stretch for months, delaying crucial early intervention windows when plasticity is highest."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      <SolutionSection />
      <SecurityBadges />
      <ComparisonSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />

      <footer id="contact" className="bg-black text-white border-t border-zinc-800 pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-2 space-y-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="font-bold text-black text-lg">S</span>
                </div>
                <span className="font-bold text-2xl tracking-tight">Slaq.ai</span>
              </div>
              <p className="text-zinc-400 max-w-md text-lg leading-relaxed font-light">
                Empowering voices through adaptive intelligence. <br />
                The future of speech therapy is here.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Product</h4>
              <ul className="space-y-4 text-zinc-500">
                <li><a href="#" className="hover:text-[#9DDB2C] transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-[#9DDB2C] transition-colors">Research</a></li>
                <li><a href="#" className="hover:text-[#9DDB2C] transition-colors">Pricing</a></li>
                <li><a href="#testimonials" className="hover:text-[#9DDB2C] transition-colors">Testimonials</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Company</h4>
              <ul className="space-y-4 text-zinc-500">
                <li><a href="#" className="hover:text-[#9DDB2C] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#9DDB2C] transition-colors">Careers</a></li>
                <li><a href="#contact" className="hover:text-[#9DDB2C] transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-[#9DDB2C] transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-800 gap-6">
            <div className="text-sm text-zinc-500">
              &copy; {new Date().getFullYear()} Slaq.ai. All rights reserved.
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-zinc-500 hover:text-white transition-colors bg-zinc-900 p-3 rounded-full hover:bg-zinc-800"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors bg-zinc-900 p-3 rounded-full hover:bg-zinc-800"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors bg-zinc-900 p-3 rounded-full hover:bg-zinc-800"><Instagram className="w-5 h-5" /></a>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 text-sm text-zinc-500 text-right">
              <a href="https://www.slaq.neuraq.in" className="hover:text-white transition-colors">www.slaq.neuraq.in</a>
              <a href="mailto:hello@slaq.ai" className="hover:text-white transition-colors">hello@slaq.ai</a>
            </div>
          </div>
        </div>
      </footer>

      <FloatingCTA />
    </div>
  );
}