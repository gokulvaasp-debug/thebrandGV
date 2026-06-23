import React, { useState } from "react";
import { motion } from "motion/react";
import { Instagram, Linkedin, Youtube, Mail, ArrowDown } from "lucide-react";

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const [portraitError, setPortraitError] = useState(false);
  const handleScrollToPhilosophy = () => {
    const target = document.querySelector("#philosophy");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socials = [
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://instagram.com", // standard fallback profile
      label: "Instagram",
      hoverClass: "hover:text-[#E1306C]",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com",
      label: "LinkedIn",
      hoverClass: "hover:text-[#0077B5]",
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      href: "https://youtube.com",
      label: "YouTube",
      hoverClass: "hover:text-[#FF0000]",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:gokulvaasp@gmail.com",
      label: "Email",
      hoverClass: "hover:text-[#7B61FF]",
    },
  ];

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center bg-white overflow-hidden">
      {/* Editorial grid layout lines (Subtle background design) */}
      <div className="absolute inset-y-0 left-[8.33%] w-px bg-gray-50 pointer-events-none hidden md:block" />
      <div className="absolute inset-y-0 right-[8.33%] w-px bg-gray-50 pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-13">
        
        {/* LEFT TEXT COLUMN */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start text-left space-y-6 md:space-y-8"
        >
          {/* Taglabel */}
          <div className="mb-6 inline-flex items-center space-x-2">
            <span className="h-[1px] w-8 bg-[#7B61FF]" />
            <span className="font-display text-[10px] uppercase tracking-[0.25em] font-bold opacity-60 text-slate-800">
              BRAND CONSULTANT & BRAND DECODER
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-[92px] lg:leading-[0.85] font-black tracking-tighter text-[#050719] mb-8">
            I decode brands.<br />
            So you can build <span className="text-gradient">impact.</span>
          </h1>

          {/* Subtext description */}
          <p className="font-sans text-base md:text-lg text-slate-500 max-w-xl leading-relaxed">
            Observing ideas. Decoding strategies. Creating meaningful brand experiences that connect people and businesses.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
            {/* CTA action trigger */}
            <button
              onClick={onOpenContact}
              className="cursor-pointer bg-[#050719] hover:bg-gradient-gv text-white font-sans text-sm font-semibold py-4 px-8 rounded-full shadow-md hover:shadow-xl transition-all duration-300 text-center"
            >
              Decode Your Strategic Bottleneck →
            </button>

            {/* Social Panel */}
            <div className="flex items-center justify-center space-x-5 py-2 px-4 border border-gray-150 rounded-full bg-white">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 font-medium transition-colors duration-200 ${social.hoverClass}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT PHOTO COLUMN WITH PORTRAIT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 relative flex items-center justify-center pt-8 lg:pt-0"
        >
          {/* Subtle purple-blue gradient glow element in background */}
          <div className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-tr from-[#7B61FF]/15 to-[#7DDFF2]/10 blur-3xl -z-10 animate-pulse duration-[8000ms]" />

          {/* Rounded frame container */}
          <div className="relative w-full max-w-[380px] md:max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
            {/* Grayscale overlay with soft gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050719]/40 to-transparent z-10 mix-blend-multiply opacity-50" />
            <div className="absolute inset-0 border-2 border-white/20 rounded-3xl z-20 pointer-events-none" />

            {/* BrandGV Portrait */}
            {!portraitError ? (
              <img
                src="/input_file_2.png"
                alt="BrandGV Portrait"
                className="w-full h-full object-cover grayscale brightness-95 hover:grayscale-0 transition-all duration-700 hover:scale-[1.03] duration-500 ease-out-expo"
                onError={() => setPortraitError(true)}
                referrerPolicy="no-referrer"
              />
            ) : null}

            {/* Typography Placeholder when asset is not loaded */}
            {portraitError && (
              <div
                id="portrait-fallback"
                className="absolute inset-0 bg-[#050719] flex flex-col justify-end p-8 text-white text-left"
              >
                <div className="space-y-2">
                  <span className="font-serif text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-300">
                    GV
                  </span>
                  <p className="font-sans text-sm text-white/60">BrandGV • Brand Strategist</p>
                </div>
              </div>
            )}

            {/* Editorial overlay tags */}
            <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-center bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
              <span className="font-mono text-xs text-white uppercase tracking-wider font-semibold">
                OBSERVE • DECODE • IMPACT
              </span>
              <span className="font-mono text-[10px] text-zinc-300">
                IST / UTC
              </span>
            </div>
          </div>

          {/* Architectural layout floating card */}
          <div className="absolute -bottom-4 -left-4 xl:-left-12 z-20 bg-white border border-gray-100 p-4 rounded-2xl shadow-xl flex items-center space-x-3 max-w-[210px] transform hover:-translate-y-1 transition-transform">
            <div className="w-10 h-10 rounded-full bg-gradient-gv flex items-center justify-center text-white text-sm font-semibold">
              GV
            </div>
            <div>
              <p className="font-sans text-xs text-gray-500 uppercase tracking-wide">Brand decoding</p>
              <p className="font-display font-bold text-xs text-[#050719]">100% Signal • 0% Noise</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center space-y-1">
        <button
          onClick={handleScrollToPhilosophy}
          className="cursor-pointer text-gray-400 hover:text-[#7B61FF] transition-all flex flex-col items-center"
          aria-label="Scroll to philosophy"
        >
          <span className="font-mono text-[9px] tracking-widest uppercase mb-1">Enter Experience</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
