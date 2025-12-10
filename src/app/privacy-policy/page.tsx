"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye, Database, Users, Globe, Mail, Building } from "lucide-react";

const SECTION_ICONS: { [key: string]: React.ReactNode } = {
  "1": <Database className="w-6 h-6" />,
  "2": <Eye className="w-6 h-6" />,
  "3": <Lock className="w-6 h-6" />,
  "4": <Users className="w-6 h-6" />,
  "5": <Shield className="w-6 h-6" />,
  "6": <Shield className="w-6 h-6" />,
  "7": <Globe className="w-6 h-6" />,
  "8": <Database className="w-6 h-6" />,
  "9": <Globe className="w-6 h-6" />,
  "10": <Globe className="w-6 h-6" />,
  "11": <Globe className="w-6 h-6" />,
  "12": <Shield className="w-6 h-6" />,
  "13": <Mail className="w-6 h-6" />,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white py-6 px-6 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
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
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-[#9DDB2C]" />
              <span className="text-sm">Your Privacy Matters</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              ZLAQA AI is committed to protecting your personal data, your voice recordings, and your privacy.
            </p>
            <p className="text-sm text-zinc-500 mt-6">
              Last Updated: December 10, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          {/* Introduction */}
          <div className="bg-zinc-50 rounded-2xl p-8 mb-12 border border-zinc-100">
            <p className="text-lg text-zinc-600 leading-relaxed m-0">
              ZLAQA AI (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your personal data, 
              your voice recordings, and your privacy. This Privacy Policy explains what data we collect, 
              how we use it, how we protect it, and what rights you have.
            </p>
            <p className="text-lg text-zinc-600 leading-relaxed mt-4 mb-0">
              By using our mobile app, wearable device (Talku Companion Mic), website, or services, 
              you agree to this Privacy Policy.
            </p>
          </div>

          {/* Section 1 */}
          <Section number="1" title="Information We Collect" icon={SECTION_ICONS["1"]}>
            <p className="text-zinc-600 mb-6">
              We collect information to provide accurate speech analysis and personalized therapy.
            </p>
            
            <SubSection title="A. Personal Information">
              <ul className="list-disc pl-6 text-zinc-600 space-y-1">
                <li>Name</li>
                <li>Email / Phone</li>
                <li>Age (optional)</li>
                <li>Language preferences</li>
                <li>Account login details</li>
              </ul>
            </SubSection>

            <SubSection title="B. Speech & Voice Data">
              <ul className="list-disc pl-6 text-zinc-600 space-y-1">
                <li>Audio recordings gathered through Talku Companion Mic or Mobile microphone</li>
                <li>Stuttering patterns</li>
                <li>Speech pacing, articulation, fluency metrics</li>
                <li>AI-generated analysis</li>
              </ul>
              <p className="text-sm text-[#9DDB2C] font-medium mt-2">
                We never use your audio for advertising.
              </p>
            </SubSection>

            <SubSection title="C. Device & Usage Data">
              <ul className="list-disc pl-6 text-zinc-600 space-y-1">
                <li>Device ID</li>
                <li>App usage activity</li>
                <li>Crash logs</li>
                <li>IP address</li>
                <li>Browser type</li>
                <li>Operating system</li>
              </ul>
            </SubSection>

            <SubSection title="D. Health & Therapy Data">
              <ul className="list-disc pl-6 text-zinc-600 space-y-1">
                <li>Fluency scores</li>
                <li>Articulation scores</li>
                <li>Session history</li>
                <li>Progress graphs</li>
              </ul>
              <p className="text-sm text-amber-600 font-medium mt-2">
                This is treated as sensitive personal data.
              </p>
            </SubSection>

            <SubSection title="E. Optional Data">
              <ul className="list-disc pl-6 text-zinc-600 space-y-1">
                <li>Feedback messages</li>
                <li>Support requests</li>
                <li>Survey responses</li>
              </ul>
            </SubSection>
          </Section>

          {/* Section 2 */}
          <Section number="2" title="How We Use Your Information" icon={SECTION_ICONS["2"]}>
            <p className="text-zinc-600 mb-6">
              We use your data <strong>ONLY</strong> to provide and improve the ZLAQA experience.
            </p>

            <SubSection title="Core Uses">
              <ul className="list-disc pl-6 text-zinc-600 space-y-1">
                <li>Provide speech analysis and therapy insights</li>
                <li>Generate your Z-Quotient (ZQ) progress score</li>
                <li>Improve AI accuracy</li>
                <li>Personalize exercises and recommendations</li>
                <li>Track real-time speech patterns</li>
                <li>Generate daily/weekly/monthly reports</li>
                <li>Provide notifications and therapy reminders</li>
              </ul>
            </SubSection>

            <SubSection title="Platform Improvement">
              <ul className="list-disc pl-6 text-zinc-600 space-y-1">
                <li>Debug issues</li>
                <li>Enhance model accuracy</li>
                <li>Improve user experience</li>
              </ul>
              <p className="text-sm text-zinc-500 mt-2">
                All usage data is anonymized for analytics.
              </p>
            </SubSection>

            <div className="bg-[#9DDB2C]/10 border border-[#9DDB2C]/30 rounded-xl p-4 mt-6">
              <p className="text-zinc-800 font-semibold m-0">
                🚫 No Sale of Data — We never sell user data to advertisers or third parties.
              </p>
            </div>
          </Section>

          {/* Section 3 */}
          <Section number="3" title="How We Store & Protect Your Data" icon={SECTION_ICONS["3"]}>
            <SubSection title="Security Standards">
              <p className="text-zinc-600 mb-2">We follow best practices inspired by:</p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-1">
                <li>ISO 27001</li>
                <li>GDPR</li>
                <li>India DPDP Act 2023</li>
                <li>HIPAA-aligned handling</li>
              </ul>
            </SubSection>

            <SubSection title="Protection Measures">
              <ul className="list-disc pl-6 text-zinc-600 space-y-1">
                <li>End-to-end encrypted audio transfer</li>
                <li>Secure cloud storage (AWS / GCP)</li>
                <li>Access-controlled databases</li>
                <li>Encrypted backups</li>
                <li>Strict internal access policies</li>
              </ul>
            </SubSection>

            <SubSection title="Retention Policy">
              <ul className="list-disc pl-6 text-zinc-600 space-y-1">
                <li>Speech data is stored ONLY as long as required for analysis.</li>
                <li>You can request deletion anytime.</li>
              </ul>
            </SubSection>
          </Section>

          {/* Section 4 */}
          <Section number="4" title="Sharing of Information" icon={SECTION_ICONS["4"]}>
            <p className="text-zinc-600 mb-6">
              We only share data under specific circumstances:
            </p>

            <SubSection title="A. With Your Consent">
              <ul className="list-disc pl-6 text-zinc-600 space-y-1">
                <li>When connecting with a therapist</li>
                <li>When exporting reports</li>
              </ul>
            </SubSection>

            <SubSection title="B. Service Providers">
              <p className="text-zinc-600 mb-2">We may share technical data with partners who help us:</p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-1">
                <li>Process recordings</li>
                <li>Provide cloud hosting</li>
                <li>Run analytics</li>
              </ul>
              <p className="text-sm text-zinc-500 mt-2">
                These partners cannot use your data for any other purpose.
              </p>
            </SubSection>

            <SubSection title="C. Legal Requirements">
              <p className="text-zinc-600">We may disclose data if required by law.</p>
            </SubSection>

            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mt-6">
              <p className="text-red-800 font-semibold m-0">
                🚫 No Sharing for Advertising — We do not share your personal or voice data with advertisers.
              </p>
            </div>
          </Section>

          {/* Section 5 */}
          <Section number="5" title="Children's Privacy" icon={SECTION_ICONS["5"]}>
            <ul className="list-disc pl-6 text-zinc-600 space-y-2">
              <li>ZLAQA AI is safe for children <strong>5+ years</strong>.</li>
              <li>Children&apos;s voice data is encrypted and handled with extra protection.</li>
              <li>Parents/guardians must manage the child&apos;s account.</li>
            </ul>
            <p className="text-[#9DDB2C] font-medium mt-4">
              We comply with global child safety standards.
            </p>
          </Section>

          {/* Section 6 */}
          <Section number="6" title="Your Rights" icon={SECTION_ICONS["6"]}>
            <p className="text-zinc-600 mb-4">Depending on your location, you have rights to:</p>
            <ul className="space-y-2 text-zinc-600">
              <li className="flex items-center gap-2">
                <span className="text-[#9DDB2C]">✔</span> Access your data
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#9DDB2C]">✔</span> Download your data
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#9DDB2C]">✔</span> Request corrections
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#9DDB2C]">✔</span> Delete your data permanently
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#9DDB2C]">✔</span> Stop audio collection anytime
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#9DDB2C]">✔</span> Withdraw consent
              </li>
            </ul>
            <div className="bg-zinc-100 rounded-xl p-4 mt-6">
              <p className="text-zinc-700 m-0">
                To exercise these rights, email us at: <a href="mailto:support@zlaqa.com" className="text-[#9DDB2C] font-semibold hover:underline">support@zlaqa.com</a>
              </p>
            </div>
          </Section>

          {/* Section 7 */}
          <Section number="7" title="How We Use Cookies" icon={SECTION_ICONS["7"]}>
            <p className="text-zinc-600 mb-4">On our website, we use cookies for:</p>
            <ul className="list-disc pl-6 text-zinc-600 space-y-1">
              <li>Performance analytics</li>
              <li>User session management</li>
              <li>No third-party advertising cookies</li>
            </ul>
            <p className="text-zinc-500 mt-4">
              You can disable cookies anytime through your browser.
            </p>
          </Section>

          {/* Section 8 */}
          <Section number="8" title="Data for AI Training" icon={SECTION_ICONS["8"]}>
            <p className="text-zinc-600 mb-4">
              ZLAQA does <strong>not</strong> automatically use your voice data for model training.
            </p>
            <p className="text-zinc-600 mb-2">We only use data for model improvement if:</p>
            <ul className="list-disc pl-6 text-zinc-600 space-y-1">
              <li>You give explicit consent, OR</li>
              <li>Your data is anonymized beyond identification</li>
            </ul>
            <p className="text-[#9DDB2C] font-medium mt-4">
              You may opt out anytime.
            </p>
          </Section>

          {/* Section 9 */}
          <Section number="9" title="Third-Party Services" icon={SECTION_ICONS["9"]}>
            <p className="text-zinc-600 mb-4">We may integrate with:</p>
            <ul className="list-disc pl-6 text-zinc-600 space-y-1">
              <li>Google Speech Services</li>
              <li>Cloud hosting (AWS/GCP/Azure)</li>
              <li>Payment gateways</li>
              <li>Email notification systems</li>
            </ul>
            <p className="text-zinc-500 mt-4">
              Each third-party follows its own privacy standards.
            </p>
          </Section>

          {/* Section 10 */}
          <Section number="10" title="Links to Other Sites" icon={SECTION_ICONS["10"]}>
            <p className="text-zinc-600">
              Our website/app may contain links to external sites. We are not responsible for their privacy practices.
            </p>
          </Section>

          {/* Section 11 */}
          <Section number="11" title="Data Transfer Across Borders" icon={SECTION_ICONS["11"]}>
            <p className="text-zinc-600 mb-4">
              Your data may be stored or processed in servers located in other countries while still following:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 space-y-1">
              <li>India DPDP Act 2023</li>
              <li>GDPR-equivalent protection</li>
            </ul>
          </Section>

          {/* Section 12 */}
          <Section number="12" title="Changes to This Policy" icon={SECTION_ICONS["12"]}>
            <p className="text-zinc-600">
              We may update this policy occasionally. Updates will be notified via email or app banner.
            </p>
          </Section>

          {/* Section 13 */}
          <Section number="13" title="Contact Us" icon={SECTION_ICONS["13"]}>
            <p className="text-zinc-600 mb-6">
              For privacy concerns, questions, or complaints:
            </p>
            <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100 space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#9DDB2C]" />
                <a href="mailto:support@zlaqa.com" className="text-zinc-700 hover:text-[#9DDB2C] transition-colors">
                  support@zlaqa.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-[#9DDB2C]" />
                <a href="https://www.zlaqa.com" target="_blank" rel="noopener noreferrer" className="text-zinc-700 hover:text-[#9DDB2C] transition-colors">
                  www.zlaqa.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Building className="w-5 h-5 text-[#9DDB2C]" />
                <span className="text-zinc-700">ZLAQA AI Labs Private Limited</span>
              </div>
            </div>
          </Section>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="font-bold text-xl tracking-tight">ZLAQA AI</span>
          </div>
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} ZLAQA AI Labs Private Limited. All rights reserved.
          </p>
          <Link href="/" className="text-[#9DDB2C] hover:underline text-sm mt-4 inline-block">
            ← Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
}

// Section Component
function Section({ 
  number, 
  title, 
  icon, 
  children 
}: { 
  number: string; 
  title: string; 
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 pb-12 border-b border-zinc-100 last:border-b-0"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-[#9DDB2C]/10 rounded-xl flex items-center justify-center text-[#9DDB2C]">
          {icon}
        </div>
        <h2 className="text-2xl font-bold text-zinc-900 m-0">
          {number}. {title}
        </h2>
      </div>
      <div className="pl-0 md:pl-16">
        {children}
      </div>
    </motion.section>
  );
}

// SubSection Component
function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-zinc-800 mb-3">{title}</h3>
      {children}
    </div>
  );
}
