"use client";

import Link from "next/link";
import { Linkedin, Instagram, Mail, Globe, MapPin, Phone } from "lucide-react";

const FOOTER_PRODUCT_LINKS = [
  { label: "Free Speech Test", href: "https://test.zlaqa.com/#/test", external: true },
  { label: "Community", href: "https://test.zlaqa.com/#/community", external: true },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
];

const FOOTER_RESOURCES_LINKS = [
  { label: "FAQ", href: "#faq" },
];

const FOOTER_COMPANY_LINKS = [
  { label: "Contact", href: "/contact", internal: true },
  { label: "Privacy Policy", href: "/privacy-policy", internal: true },
];

const SOCIAL_LINKS = [
  { icon: Phone, href: "tel:+918089124307", label: "Phone" },
  { icon: Linkedin, href: "https://linkedin.com/company/zlaqa", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/zlaqa.ai", label: "Instagram" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-black text-white border-t border-zinc-800 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <span className="font-bold text-2xl tracking-tight">ZLAQA AI</span>
            </div>
            <p className="text-zinc-400 max-w-sm text-base leading-relaxed">
              Empowering voices through adaptive intelligence. ZLAQA AI provides 
              science-backed speech assessment and personalized therapy solutions 
              for everyone.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 pt-4">
              <a href="mailto:support@zlaqa.com" className="flex items-center gap-3 text-zinc-400 hover:text-[#9DDB2C] transition-colors">
                <Mail className="w-4 h-4" />
                <span>support@zlaqa.com</span>
              </a>
              <a href="https://www.zlaqa.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-400 hover:text-[#9DDB2C] transition-colors">
                <Globe className="w-4 h-4" />
                <span>www.zlaqa.com</span>
              </a>
              <div className="flex items-start gap-3 text-zinc-400">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>ZLAQA AI Labs Private Limited</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {SOCIAL_LINKS.map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-zinc-500 hover:text-[#9DDB2C] transition-colors bg-zinc-900 p-3 rounded-full hover:bg-zinc-800"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-6 text-base text-white">Product</h4>
            <ul className="space-y-3 text-zinc-400">
              {FOOTER_PRODUCT_LINKS.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="hover:text-[#9DDB2C] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-6 text-base text-white">Resources</h4>
            <ul className="space-y-3 text-zinc-400">
              {FOOTER_RESOURCES_LINKS.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="hover:text-[#9DDB2C] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-6 text-base text-white">Company</h4>
            <ul className="space-y-3 text-zinc-400">
              {FOOTER_COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  {link.internal ? (
                    <Link href={link.href} className="hover:text-[#9DDB2C] transition-colors text-sm">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="hover:text-[#9DDB2C] transition-colors text-sm">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-zinc-800 pt-12 mb-12">
          <div className="max-w-xl">
            <h4 className="font-semibold text-lg mb-2">Stay Updated</h4>
            <p className="text-zinc-400 text-sm mb-4">
              Get the latest updates on speech therapy research and ZLAQA features.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 h-11 px-4 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#9DDB2C] transition-colors text-sm"
              />
              <button 
                type="submit"
                className="h-11 px-6 bg-[#9DDB2C] text-black font-medium rounded-lg hover:bg-[#8BC926] transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-800 gap-4">
          <div className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} ZLAQA AI Labs Private Limited. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-500">
            <Link href="/privacy-policy" className="hover:text-[#9DDB2C] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
