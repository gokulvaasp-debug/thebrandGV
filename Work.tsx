import React from "react";
import { motion } from "motion/react";
import { Eye, Hash, Zap } from "lucide-react";

export default function Philosophy() {
  const steps = [
    {
      word: "observe",
      label: "OBSERVE",
      icon: <Eye className="w-5 h-5 text-[#7DDFF2]" />,
      desc: "Understanding people, markets, culture and creativity.",
      gridIndex: "01",
    },
    {
      word: "decode",
      label: "DECODE",
      icon: <Hash className="w-5 h-5 text-[#7B61FF]" />,
      desc: "Breaking down strategies behind successful brands.",
      gridIndex: "02",
    },
    {
      word: "create impact",
      label: "CREATE IMPACT",
      icon: <Zap className="w-5 h-5 text-yellow-400" />,
      desc: "Transforming insights into memorable brand experiences.",
      gridIndex: "03",
    },
  ];

  return (
    <section id="philosophy" className="relative py-24 bg-[#050719] text-white overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-[#7B61FF]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-[#7DDFF2]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {steps.map((step, idx) => (
            <motion.div
              key={step.word}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`flex flex-col space-y-6 pt-10 md:pt-0 ${
                idx === 0 ? "md:pr-8" : idx === 1 ? "md:px-8" : "md:pl-8"
              } group`}
            >
              {/* Top metadata line */}
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-[#7B61FF] font-black tracking-widest">{step.gridIndex}</span>
                <span className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-white">
                  {step.icon}
                </span>
              </div>

              {/* Word styled gracefully with Bold Typography theme rules */}
              <h3 className={`font-display text-xs font-black tracking-widest uppercase ${
                idx === 0 ? "text-[#7B61FF]" : idx === 1 ? "text-[#7DDFF2]" : "text-white"
              }`}>
                {step.word}
              </h3>

              {/* Word description */}
              <p className="font-sans text-xs text-white/60 leading-relaxed font-light">
                {step.desc}
              </p>

              {/* Interactive subtle progress line */}
              <div className="h-px w-full bg-white/10 overflow-hidden relative">
                <div className="absolute top-0 left-0 h-full w-[20%] bg-gradient-gv group-hover:w-full transition-all duration-700 ease-in-out" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
