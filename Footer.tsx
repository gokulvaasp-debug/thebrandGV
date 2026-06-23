import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Smile, Target, Compass, Zap, Flame, ChevronDown } from "lucide-react";

export default function About() {
  const [activeTag, setActiveTag] = useState<string>("Observer");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tags = [
    {
      name: "Observer",
      credo: "Scanning culture, behavioral patterns, and design details that standard marketing agencies overlook.",
      icon: <Compass className="w-4 h-4 text-[#7B61FF]" />,
    },
    {
      name: "Thinker",
      credo: "Connecting historical product cycles with present-day technological and emotional consumer shifts.",
      icon: <Smile className="w-4 h-4 text-[#7DDFF2]" />,
    },
    {
      name: "Strategist",
      credo: "Formatting clean, logical, actionable blueprints that turn abstract chaos into crisp category leadership.",
      icon: <Target className="w-4 h-4 text-emerald-400" />,
    },
    {
      name: "Creator",
      credo: "Directing high-retention media, script architectures, and branding formats that actively engage audiences.",
      icon: <Flame className="w-4 h-4 text-orange-400" />,
    },
    {
      name: "Impact Builder",
      credo: "Aligning creative energy with hard commercial metrics to drive durable brand loyalty and organic growth.",
      icon: <Zap className="w-4 h-4 text-yellow-400" />,
    },
  ];

  const faqs = [
    {
      question: "What is the primary methodology behind the BrandGV framework?",
      answer: "We focus on isolating deeply ingrained behavioral and cultural patterns instead of relying on ephemeral advertising trends. By decoding real-world human biases and psychological triggers, we build marketing strategies that possess structural substance rather than short-term novelty.",
    },
    {
      question: "How does the strategic consultancy collaborate with founders?",
      answer: "We function as highly dynamic, objective sparring partners. We inspect your existing assumptions, conduct competitive positioning audits, decode consumer friction points, and deliver direct, action-oriented strategy blueprints within a rapid high-documentation workflow.",
    },
    {
      question: "Which industries do you typically decode or advise?",
      answer: "We advise ambitious category challengers spanning direct-to-consumer commerce, digital health, interactive software products, and luxury cultural brands who need to communicate with extreme clarity and emotional resonance.",
    },
    {
      question: "Can I submit a brand objective directly online?",
      answer: "Yes, you can tap the 'Initiate Brief Decoding' action found in the header or hero. Fill out your brand parameters, and our strategic desk will inspect and decode your brief with structured actionable ideas returned directly.",
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Structural visual accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-[#7B61FF]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Large Editorial Title */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#7DDFF2]" />
              <span className="font-display text-[10px] tracking-[0.25em] text-[#7B61FF] uppercase font-bold">Behind the brand</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-[#050719] leading-tight">
              The observer behind the brand.
            </h2>
            
            {/* Minimal Portrait accent or graphic */}
            <div className="pt-6 relative hidden lg:block">
              <div className="border border-gray-100 rounded-2xl p-4 flex items-center space-x-4 max-w-sm hover:border-[#7B61FF] transition-all bg-slate-50/50">
                <div className="w-10 h-10 rounded-full bg-gradient-gv text-white text-xs font-bold font-mono flex items-center justify-center">
                  GV
                </div>
                <div>
                  <p className="font-sans text-xs text-slate-500 font-medium">Currently Decoding</p>
                  <p className="font-display font-semibold text-xs text-[#050719]">Consumer Attention Economics</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Deep Introduction Text and Interactive Tags */}
          <div className="lg:col-span-7 text-left space-y-8">
            <div className="space-y-6">
              <p className="font-serif text-lg md:text-xl text-slate-700 leading-relaxed font-light">
                <span className="font-semibold text-[#050719]">BrandGV</span> is a brand strategy decoder and creative consultancy.
              </p>
              
              <p className="font-sans text-slate-500 text-sm md:text-base leading-relaxed">
                We believe every successful brand has patterns hidden behind its story, strategy, and customer experience. It is not about spending millions on advertising; it is about knowing what makes humans click.
              </p>

              <p className="font-sans text-slate-500 text-sm md:text-base leading-relaxed">
                Through thebrandGV framework, we observe everyday culture, decode abstract corporate structures, and create logical ideas that help ambitious founders communicate with absolute clarity and maximum impact.
              </p>
            </div>

            {/* Interactive Personality Deck */}
            <div className="space-y-4 pt-4 border-t border-gray-100">
              <span className="font-mono text-xs text-slate-400 uppercase tracking-widest block mb-1">
                Strategic Dimensions (Tap tags to expand)
              </span>

              {/* Tags Horizontal Block */}
              <div className="flex flex-wrap gap-2.5">
                {tags.map((tag) => (
                  <button
                    key={tag.name}
                    onClick={() => setActiveTag(tag.name)}
                    className={`cursor-pointer px-4 py-2.5 text-xs rounded-full border flex items-center space-x-2 transition-all font-sans font-medium hover:border-[#7B61FF] ${
                      activeTag === tag.name
                        ? "border-[#7B61FF] bg-[#7B61FF]/5 text-[#7B61FF] shadow-sm"
                        : "border-gray-200 hover:bg-gray-50 text-slate-600 bg-white"
                    }`}
                  >
                    {tag.icon}
                    <span>{tag.name}</span>
                  </button>
                ))}
              </div>

              {/* Tag Info Box with smooth transitions */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 min-h-[96px] flex flex-col justify-center transition-all duration-300">
                <p className="font-mono text-[10px] text-[#7B61FF] font-black uppercase tracking-widest mb-1.5">
                  {activeTag} Core Philosophy
                </p>
                <motion.p
                  key={activeTag}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="font-sans text-xs md:text-sm text-slate-600 leading-relaxed font-light"
                >
                  {tags.find((t) => t.name === activeTag)?.credo}
                </motion.p>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal FAQ Accordion Block */}
        <div id="about-faq" className="border-t border-gray-100 pt-16 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* FAQ Title */}
          <div className="lg:col-span-5 text-left space-y-4">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#7B61FF]" />
              <span className="font-mono text-[10px] tracking-[0.25em] text-slate-400 uppercase font-bold">Frequently Decoded</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-black tracking-tighter text-[#050719]">
              Common Queries
            </h3>
            <p className="font-sans text-xs md:text-sm text-slate-500 leading-relaxed max-w-sm font-light">
              Answering strategic questions regarding cooperation formats, underlying philosophies, and decoding execution cycles.
            </p>
          </div>

          {/* Accordion List */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = expandedFaq === index;
              return (
                <div
                  key={index}
                  className="bg-slate-50/50 hover:bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden transition-all duration-300 shadow-sm"
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : index)}
                    className="cursor-pointer w-full text-left px-5 py-4.5 flex items-center justify-between gap-4 font-sans text-xs md:text-sm font-semibold text-[#050719] transition-all"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180 text-[#7B61FF]" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5 pt-1 border-t border-slate-100/60 font-sans text-xs md:text-sm text-slate-500 leading-relaxed font-light">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
