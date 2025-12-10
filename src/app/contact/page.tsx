"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare,
  Clock,
  Globe,
  Linkedin,
  Instagram,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

const CONTACT_METHODS = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get a response within 24 hours",
    value: "support@zlaqa.com",
    href: "mailto:support@zlaqa.com",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri from 9am to 6pm IST",
    value: "+91 8089124307",
    href: "tel:+918089124307",
    color: "bg-green-500/10 text-green-500",
  }
];

const SOCIAL_LINKS = [
  { icon: Linkedin, href: "https://linkedin.com/company/zlaqa", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/zlaqa.ai", label: "Instagram" },
  { icon: Globe, href: "https://www.zlaqa.com", label: "Website" },
];

const FAQ_ITEMS = [
  {
    question: "How quickly will I get a response?",
    answer: "We typically respond to all inquiries within 24 hours during business days.",
  },
  {
    question: "Do you offer technical support?",
    answer: "Yes! Our technical team is available to help with any issues you encounter with our app or services.",
  },
  {
    question: "Can I schedule a demo?",
    answer: "Absolutely! Reach out via email or phone to schedule a personalized demo of ZLAQA AI.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white py-6 px-6 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl tracking-tight">ZLAQA AI</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black to-zinc-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <MessageSquare className="w-4 h-4 text-[#9DDB2C]" />
              <span className="text-sm">We&apos;d Love to Hear From You</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Have questions about ZLAQA AI? Need support? Want to partner with us? 
              We&apos;re here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {CONTACT_METHODS.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-zinc-100 hover:border-[#9DDB2C]/50 hover:shadow-lg transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <method.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-1">{method.title}</h3>
                <p className="text-sm text-zinc-500 mb-3">{method.description}</p>
                <p className="text-[#9DDB2C] font-medium">{method.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-zinc-900 mb-2">Send Us a Message</h2>
              <p className="text-zinc-500 mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-600 mb-6">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="border-green-300 text-green-700 hover:bg-green-100"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full h-12 px-4 rounded-xl border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#9DDB2C] focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full h-12 px-4 rounded-xl border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#9DDB2C] focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-zinc-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full h-12 px-4 rounded-xl border border-zinc-200 bg-white text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#9DDB2C] focus:border-transparent transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="feedback">Product Feedback</option>
                      <option value="demo">Request a Demo</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#9DDB2C] focus:border-transparent transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-black text-white hover:bg-zinc-800 rounded-xl text-lg font-medium group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Office Hours */}
              <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#9DDB2C]/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#9DDB2C]" />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900">Office Hours</h3>
                </div>
                <div className="space-y-2 text-zinc-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 AM - 2:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-zinc-400">Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100">
                <h3 className="text-lg font-semibold text-zinc-900 mb-4">Connect With Us</h3>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-12 h-12 bg-white border border-zinc-200 rounded-xl flex items-center justify-center text-zinc-500 hover:text-[#9DDB2C] hover:border-[#9DDB2C] transition-all"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-4">Frequently Asked</h3>
                <div className="space-y-4">
                  {FAQ_ITEMS.map((item, index) => (
                    <div key={index} className="bg-zinc-50 rounded-xl p-4 border border-zinc-100">
                      <h4 className="font-medium text-zinc-900 mb-1">{item.question}</h4>
                      <p className="text-sm text-zinc-500">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-[#9DDB2C]/20 to-[#9DDB2C]/5 rounded-2xl p-6 border border-[#9DDB2C]/30">
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">Try ZLAQA AI Free</h3>
                <p className="text-zinc-600 text-sm mb-4">
                  Take our free speech assessment and discover your communication potential.
                </p>
                <a
                  href="https://test.zlaqa.com/#/test"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-lg font-medium hover:bg-zinc-800 transition-colors text-sm"
                >
                  Take Free Test
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="font-bold text-xl tracking-tight">ZLAQA AI</span>
          </div>
          <p className="text-zinc-500 text-sm mb-4">
            &copy; {new Date().getFullYear()} ZLAQA AI Labs Private Limited. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <Link href="/" className="text-zinc-400 hover:text-[#9DDB2C] transition-colors">
              Home
            </Link>
            <Link href="/privacy-policy" className="text-zinc-400 hover:text-[#9DDB2C] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
