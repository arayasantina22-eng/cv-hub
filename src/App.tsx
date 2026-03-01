import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Sun, Moon, Linkedin, Send, Menu, X, ArrowRight } from "lucide-react";

const EXPERIENCE = [
  {
    id: 1,
    company: "Nullshot (formerly Avalaunch)",
    period: "2021 - Present",
    role: "Community Admin",
    logo: "https://i.imgur.com/ARmyW6O.png",
    url: "https://nullshot.ai/",
    description: "Avalaunch is a launchpad platform on Avalanche. It is now evolving into Nullshot, a platform designed to make app development easier with AI-powered tools.",
    details: "Managing Global & ID communities",
    members: "13.9k",
  },
  {
    id: 2,
    company: "Aethir",
    period: "May 2024 - Sept 2024",
    role: "Community Moderator",
    logo: "https://i.imgur.com/xxvRr4f.png",
    url: "https://aethir.com/",
    description: "Aethir is a decentralized GPU cloud platform that provides enterprise-grade GPU infrastructure for AI, gaming, and high-performance computing.",
    details: "Moderating Global & ID communities",
    members: "100k",
  },
  {
    id: 3,
    company: "Magic Eden",
    period: "Dec 2024 - April 2025",
    role: "Community Moderator",
    logo: "https://i.imgur.com/k3CHf4p.png",
    url: "https://magiceden.io/",
    description: "Magic Eden is an NFT marketplace and has evolved into a broader Web3 platform offering multiple services beyond NFTs.",
    details: "Community moderation & engagement",
    members: "7k",
  },
  {
    id: 4,
    company: "Bullet (formerly Zeta Markets)",
    period: "Jan 2025 - Feb 2026",
    role: "Community Moderator",
    logo: "https://i.imgur.com/wSeNnky.png",
    url: "https://www.bullet.xyz/",
    description: "Zeta Markets was a perpetual DEX on Solana, now evolving into Bullet—a network extension and application-specific layer designed for fast, low-friction trading and enhanced user experience.",
    details: "Moderating Global & ID communities",
    members: "10k",
  },
];

const SKILLS = [
  "Leadership", "Time Management", "Service Oriented", 
  "Team Collaboration", "Troubleshooting & Research", "Patience", 
  "Writing & Editing", "Communication & Negotiation", "AI Application"
];

const HIGHLIGHTS = [
  { label: "Years in Web3", value: "4+" },
  { label: "Projects Managed", value: "4" },
  { label: "Community Size", value: "130k+" },
  { label: "Languages", value: "EN / ID" },
];

const PROFILE_IMAGE = "https://i.imgur.com/amkD6p1.jpeg";

export default function App() {
  const [isDark, setIsDark] = useState(false); // Default to light for this specific clean look
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle theme
  const toggleTheme = () => setIsDark(!isDark);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className={`${isDark ? "dark bg-[#0A0A0A] text-[#F5F5F5]" : "bg-[#F8F9FA] text-[#1A1A1A]"} min-h-screen font-sans transition-colors duration-300 selection:bg-orange-500 selection:text-white`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 ${isDark ? "bg-[#0A0A0A]/80 border-white/5" : "bg-white/80 border-black/5"} backdrop-blur-md border-b`}>
        <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-2 md:grid-cols-3 items-center">
          {/* Left: Theme Toggle */}
          <div className="flex items-center justify-start gap-4">
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${isDark ? "bg-white/5 hover:bg-white/10 text-orange-400" : "bg-black/5 hover:bg-black/10 text-orange-600"}`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
          
          {/* Center: Nav Links (Desktop) */}
          <div className="hidden md:flex justify-center space-x-8 text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-orange-500 transition">{link.name}</a>
            ))}
          </div>

          {/* Right: Mobile Menu Toggle */}
          <div className="flex justify-end">
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${isDark ? "text-white hover:bg-white/5" : "text-black hover:bg-black/5"}`}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
            {/* Placeholder for desktop grid balance */}
            <div className="hidden md:block" />
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden border-t overflow-hidden ${isDark ? "bg-[#0A0A0A] border-white/5" : "bg-white border-black/5"}`}
            >
              <div className="flex flex-col p-6 space-y-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm font-black uppercase tracking-widest hover:text-orange-500 transition"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section - Bento Frame Style */}
      <header id="about" className="pt-20 lg:pt-32 pb-8 lg:pb-20 px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-[1.5rem] lg:rounded-[3rem] p-4 lg:p-12 border transition-all ${
            isDark 
            ? "bg-white/[0.02] border-white/5" 
            : "bg-white border-gray-300 shadow-xl shadow-black/5"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12">
            
            {/* Left Column: Intro */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-4xl lg:text-8xl font-black leading-[0.85] tracking-tighter mb-3 lg:mb-4 uppercase">
                  Andre
                </h1>
                <p className="text-orange-500 font-black uppercase tracking-[0.3em] text-sm lg:text-xl mb-4 lg:mb-8 border-l-4 border-orange-500 pl-4">
                  Community Manager
                </p>
                
                <p className="text-base lg:text-xl text-gray-500 dark:text-gray-400 max-w-md mb-6 lg:mb-10 leading-relaxed font-medium text-justify">
                  Web3 & AI enthusiast. Friendly Community Manager focused on building strong relationships, resolving inquiries, and driving brand loyalty.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-6 lg:mb-12">
                  <a 
                    href="#contact-form" 
                    className="group w-fit flex items-center justify-center gap-2 bg-black dark:bg-white dark:text-black text-white px-8 py-3 rounded-full font-bold text-xs lg:text-sm uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all shadow-lg hover:shadow-orange-500/20 active:scale-95"
                  >
                    LET'S CONNECT
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Integrated Trusted By */}
                <div className={`pt-6 lg:pt-8 border-t max-w-md ${isDark ? "border-white/5" : "border-gray-300"}`}>
                  <p className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-4 lg:mb-6">Trusted by Web3 Protocols</p>
                  <div className="flex flex-wrap gap-x-4 lg:gap-x-8 gap-y-3 lg:gap-y-4 opacity-40 hover:opacity-80 transition-opacity">
                    {EXPERIENCE.map(exp => (
                      <a 
                        key={exp.id} 
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-pointer" 
                        title={`Visit ${exp.company}`}
                      >
                        <div className={`w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center rounded-md p-0.5 ${isDark ? "bg-white/10" : "bg-zinc-900"}`}>
                          {exp.logo.startsWith('http') ? (
                            <img 
                              src={exp.logo} 
                              alt={exp.company} 
                              className="w-full h-full object-contain"
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            <span className="text-lg lg:text-xl">{exp.logo}</span>
                          )}
                        </div>
                        <span className="font-black uppercase tracking-tighter text-[10px] lg:text-xs">
                          {exp.company.includes('formerly') ? exp.company.split(' ')[0] : exp.company}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Simplified Bento Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-4 lg:gap-6">
              
              {/* Card 1: Identity/Photo Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`p-3 lg:p-4 rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden border ${
                  isDark 
                  ? "bg-white/5 border-white/5" 
                  : "bg-gray-50 border-gray-300"
                }`}
              >
                <div className="w-full aspect-square lg:aspect-square rounded-[1.2rem] lg:rounded-[2rem] overflow-hidden">
                  <img 
                    src={PROFILE_IMAGE} 
                    alt="Andre Profile" 
                    className="w-full h-full object-cover transition-transform duration-700" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
              </motion.div>

              {/* Sub-grid for Socials and Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Card 2: Socials */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className={`p-3 rounded-xl border flex items-center justify-center gap-3 ${
                    isDark 
                    ? "bg-white/5 border-white/5" 
                    : "bg-gray-50 border-gray-300 shadow-sm"
                  }`}
                >
                  <a href="https://x.com/andre_shifu" target="_blank" rel="noopener noreferrer" title="X (Twitter)" className="w-8 lg:w-9 h-8 lg:h-9 rounded-lg bg-white dark:bg-white/5 flex items-center justify-center hover:bg-black hover:text-white transition-all border border-transparent hover:border-black/10">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  <a href="https://t.me/andrewuriadi" target="_blank" rel="noopener noreferrer" title="Telegram" className="w-8 lg:w-9 h-8 lg:h-9 rounded-lg bg-white dark:bg-white/5 flex items-center justify-center hover:bg-[#229ED9] hover:text-white transition-all border border-transparent hover:border-black/10">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                  </a>
                  <a href="https://discord.com/users/670920715712593920" target="_blank" rel="noopener noreferrer" title="Discord" className="w-8 lg:w-9 h-8 lg:h-9 rounded-lg bg-white dark:bg-white/5 flex items-center justify-center hover:bg-[#5865F2] hover:text-white transition-all border border-transparent hover:border-black/10">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
                  </a>
                  <a href="https://id.linkedin.com/in/andre-wuriadi-5579821a0" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="w-8 lg:w-9 h-8 lg:h-9 rounded-lg bg-white dark:bg-white/5 flex items-center justify-center hover:bg-[#0077B5] hover:text-white transition-all border border-transparent hover:border-black/10">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="mailto:andrewuriadi@gmail.com" title="Email" className="w-8 lg:w-9 h-8 lg:h-9 rounded-lg bg-white dark:bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all border border-transparent hover:border-black/10">
                    <Mail className="w-4 h-4" />
                  </a>
                </motion.div>

                {/* Card 3: Location */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className={`p-3 rounded-xl border flex flex-col items-center justify-center text-center ${
                    isDark 
                    ? "bg-orange-500/10 border-orange-500/20" 
                    : "bg-orange-500 border-orange-600 text-white shadow-lg shadow-orange-500/20"
                  }`}
                >
                  <span className="text-[8px] font-black uppercase opacity-70">Location & Time</span>
                  <span className="font-black uppercase text-xs lg:text-sm">Indonesia (UTC +7)</span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Key Highlights Section - Bento Style */}
      <section className="py-4 lg:py-12 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
          {HIGHLIGHTS.map((h, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-4 lg:p-8 rounded-[1rem] lg:rounded-[2rem] text-center flex flex-col justify-center border transition-all ${
                isDark 
                ? "bg-white/5 border-white/5" 
                : "bg-white border-gray-300 shadow-sm"
              }`}
            >
              <div className="text-2xl lg:text-6xl font-black text-orange-500 mb-0.5 lg:mb-2 tracking-tighter">{h.value}</div>
              <div className="text-[8px] lg:text-[10px] uppercase tracking-widest text-gray-500 font-black">{h.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Skills Section - Replacing Marquee */}
      <section id="skills" className="py-10 lg:py-32 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 lg:mb-20 gap-4 lg:gap-8 text-center md:text-left">
          <h2 className="text-3xl lg:text-7xl font-black uppercase tracking-tighter leading-none shrink-0">
            Core <span className="text-orange-500">Expertise</span>
          </h2>
          <div className={`hidden md:block h-[1px] flex-1 mx-6 lg:mx-12 ${isDark ? "bg-white/20" : "bg-black/10"}`} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 10 }}
              className={`p-4 lg:p-6 rounded-lg lg:rounded-2xl flex items-center gap-4 border transition-all ${
                isDark 
                ? "bg-white/5 border-white/10 hover:border-orange-500/50" 
                : "bg-white border-gray-300 shadow-sm hover:border-orange-500/50"
              }`}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <span className="text-sm lg:text-xl font-black uppercase tracking-tighter italic">{skill}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section - BLUE ACCENTS */}
      <section id="experience" className="max-w-7xl mx-auto px-4 md:px-6 py-10 lg:py-32">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 lg:mb-20 gap-4 lg:gap-8 text-center md:text-left">
          <h2 className="text-3xl lg:text-7xl font-black uppercase tracking-tighter leading-none shrink-0">
            Web3 <span className="text-orange-500">Journey</span>
          </h2>
          <div className={`hidden md:block h-[1px] flex-1 mx-6 lg:mx-12 ${isDark ? "bg-white/20" : "bg-black/10"}`} />
        </div>

        <div className="grid grid-cols-1 gap-3 lg:gap-6">
          {EXPERIENCE.map((exp) => (
            <motion.div
              key={exp.id}
              whileHover={{ y: -5 }}
              className={`p-4 lg:p-10 rounded-[1rem] lg:rounded-[2rem] border transition-all group ${isDark ? "bg-white/5 border-white/5 hover:border-orange-500/30" : "bg-white border-gray-300 shadow-sm hover:border-orange-500/30"}`}
            >
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 lg:mb-8 gap-3 lg:gap-4">
                <div className="flex items-center gap-3 lg:gap-6">
                  <a 
                    href={exp.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`w-12 h-12 lg:w-20 lg:h-20 rounded-xl lg:rounded-2xl overflow-hidden flex items-center justify-center border transition-all hover:scale-105 ${isDark ? "bg-white/5 border-white/10" : "bg-zinc-900 border-zinc-800"}`}
                  >
                    {exp.logo.startsWith('http') ? (
                      <img 
                        src={exp.logo} 
                        alt={exp.company} 
                        className="w-full h-full object-contain p-2"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <span className="text-3xl lg:text-5xl">{exp.logo}</span>
                    )}
                  </a>
                  <div>
                    <a 
                      href={exp.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg lg:text-4xl font-black uppercase tracking-tighter group-hover:text-orange-500 transition-colors cursor-pointer"
                    >
                      {exp.company}
                    </a>
                    <p className="text-orange-500 font-mono text-xs lg:text-xl font-black uppercase tracking-tighter">{exp.role}</p>
                  </div>
                </div>
                <div className="text-[9px] lg:text-xs font-mono text-gray-500 bg-gray-500/10 px-2 lg:px-4 py-0.5 lg:py-2 rounded-full">{exp.period}</div>
              </div>
              
              <div className={`grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 pt-4 lg:pt-8 border-t ${isDark ? "border-white/5" : "border-gray-300"}`}>
                <div className="lg:col-span-2">
                  <p className="text-gray-500 dark:text-gray-400 text-sm lg:text-lg leading-relaxed text-justify">
                    {exp.description}
                  </p>
                </div>
                <div className={`p-4 lg:p-6 rounded-lg lg:rounded-2xl flex flex-col justify-center items-center text-center ${isDark ? "bg-white/5" : "bg-black/5"}`}>
                  <div className="text-2xl lg:text-4xl font-black text-orange-500">{exp.members}</div>
                  <div className="text-[8px] lg:text-[10px] uppercase tracking-[0.2em] font-black text-gray-500 mt-0.5 lg:mt-1">Members</div>
                  <a 
                    href={exp.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 text-[10px] font-black uppercase tracking-widest text-orange-500 hover:text-orange-400 flex items-center gap-1 transition-colors group/link"
                  >
                    Visit Website
                    <svg className="w-2.5 h-2.5 transform group-hover/link:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Casual CTA Section - ORANGE */}
      <section id="contact" className="max-w-7xl mx-auto px-4 md:px-6 py-10 lg:py-32">
        <div className="bg-orange-500 rounded-[1rem] lg:rounded-[2rem] p-6 lg:p-24 text-white text-center relative overflow-hidden shadow-xl shadow-orange-500/10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-3xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-4 lg:mb-8">
              Let's build <br /> together!
            </h2>
            <p className="text-white/80 text-sm lg:text-xl max-w-xl mx-auto mb-6 lg:mb-12 font-bold">
              Ready to scale your ecosystem or launch a new protocol? Let's dive in!
            </p>
            <a 
              href="#contact-form" 
              className="inline-block bg-white text-orange-500 px-8 lg:px-12 py-3.5 lg:py-5 rounded-full text-base lg:text-xl font-black hover:scale-105 transition-transform shadow-xl"
            >
              GET IN TOUCH
            </a>
          </motion.div>
          
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="max-w-3xl mx-auto px-4 md:px-6 py-10 lg:py-32">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-3xl lg:text-7xl font-black uppercase tracking-tighter leading-none mb-4">
            Start a <span className="text-orange-500">Conversation</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest text-xs max-w-md mx-auto leading-relaxed">
            Looking to scale your community or explore a strategic partnership? Send a message below to discuss how we can work together to achieve your goals.
          </p>
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            const mailtoUrl = `mailto:andrewuriadi@gmail.com?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
            window.location.href = mailtoUrl;
          }}
          className={`p-6 lg:p-12 rounded-[1.5rem] lg:rounded-[2.5rem] border ${isDark ? "bg-white/5 border-white/5" : "bg-white border-gray-300 shadow-xl shadow-black/5"}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Name</label>
              <input 
                required
                name="name"
                type="text" 
                placeholder="Your Name"
                className={`px-4 py-3 rounded-xl border outline-none transition-all font-bold ${isDark ? "bg-white/5 border-white/10 focus:border-orange-500" : "bg-gray-50 border-gray-200 focus:border-orange-500"}`}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Email</label>
              <input 
                required
                name="email"
                type="email" 
                placeholder="your@email.com"
                className={`px-4 py-3 rounded-xl border outline-none transition-all font-bold ${isDark ? "bg-white/5 border-white/10 focus:border-orange-500" : "bg-gray-50 border-gray-200 focus:border-orange-500"}`}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Subject</label>
            <input 
              required
              name="subject"
              type="text" 
              placeholder="What is this about?"
              className={`px-4 py-3 rounded-xl border outline-none transition-all font-bold ${isDark ? "bg-white/5 border-white/10 focus:border-orange-500" : "bg-gray-50 border-gray-200 focus:border-orange-500"}`}
            />
          </div>
          <div className="flex flex-col gap-2 mb-8">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Message</label>
            <textarea 
              required
              name="message"
              rows={5}
              placeholder="Your message here..."
              className={`px-4 py-3 rounded-xl border outline-none transition-all font-bold resize-none ${isDark ? "bg-white/5 border-white/10 focus:border-orange-500" : "bg-gray-50 border-gray-200 focus:border-orange-500"}`}
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-orange-500 text-white py-4 rounded-xl lg:rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20"
          >
            Send Message
            <Send className="w-4 h-4" />
          </button>
        </motion.form>
      </section>

      <footer className={`max-w-7xl mx-auto px-6 py-12 flex justify-center items-center border-t transition-colors ${isDark ? "border-white/5" : "border-black/5"}`}>
        <div className="text-gray-500 text-xs font-bold tracking-widest uppercase text-center">
          © 2026 — ALL RIGHTS RESERVED
        </div>
      </footer>

      <style>{`
        .border-text-dark {
          -webkit-text-stroke: 1px #F5F5F5;
        }
        .border-text-light {
          -webkit-text-stroke: 1px #0A0A0A;
        }
        @media (min-width: 768px) {
          .border-text-dark {
            -webkit-text-stroke: 2px #F5F5F5;
          }
          .border-text-light {
            -webkit-text-stroke: 2px #0A0A0A;
          }
        }
      `}</style>
    </div>
  );
}
