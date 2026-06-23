import React, { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Compass, Eye, TrendingUp, HelpCircle } from "lucide-react";

export default function WhatIDo() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const services = [
    {
      num: "01",
      title: "Brand Strategy",
      tags: ["Positioning", "Research", "Growth Direction"],
      icon: <Compass className="w-5 h-5 text-[#7B61FF]" />,
      outcome: "A crisp, singular strategic core document defining your brand's unique category box, target psychology, and primary market hook.",
      breakdowns: ["Competitor Gap Analysis", "Target Audience Archetyping", "Growth Roadmapping"],
    },
    {
      num: "02",
      title: "Brand Identity",
      tags: ["Storytelling", "Messaging", "Experience"],
      icon: <Eye className="w-5 h-5 text-[#7DDFF2]" />,
      outcome: "An editorial verbal identity and messaging blueprint. The exact words, tags, and story hooks that prompt emotional customer attachment.",
      breakdowns: ["Tagline & Narrative Crafting", "Brand Voice Architecture", "Customer Touchpoint Engineering"],
    },
    {
      num: "03",
      title: "Digital Growth",
      tags: ["Content", "Campaigns", "Performance Marketing"],
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
      outcome: "Organic and paid distribution strategies. Constructing high-retention content systems to acquire premium attention without wasting ad money.",
      breakdowns: ["Social Content Matrix", "Campaign Copywriting Systems", "Sustainable Acquisition Funnels"],
    },
    {
      num: "04",
      title: "Brand Consulting",
      tags: ["Founders Advising", "Idea Transformation", "Category Fixes"],
      icon: <HelpCircle className="w-5 h-5 text-yellow-400" />,
      outcome: "Strategic 1-on-1 diagnostics for founders and board directors. Breaking down current brand roadblocks, giving immediate fixes, and mapping future paths.",
      breakdowns: ["1-on-1 Action Workshops", "Marketing Audit Sessions", "Pitch Styling & Narratives"],
    },
  ];

  return (
    <section id="work" className="py-24 bg-[#050719] text-white relative overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute bottom-12 right-0 w-[500px] h-[500px] rounded-full bg-[#7B61FF]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="max-w-2xl text-left space-y-4 mb-20">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#7B61FF]" />
            <span className="font-display text-[10px] tracking-[0.25em] text-[#7DDFF2] uppercase font-bold">Capabilities</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black tracking-tighter text-white leading-tight">
            Building brands with clarity.
          </h2>
          <p className="font-sans text-sm md:text-base text-zinc-400 leading-relaxed font-light">
            No agency bloat. No complex buzzwords. Just razor-sharp decoding and strategic alignment to build lasting market impact.
          </p>
        </div>

        {/* Services List Block */}
        <div className="space-y-4">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group border border-white/10 rounded-3xl p-6 md:p-8 bg-white/5 hover:bg-white/10 tracking-tight hover:border-[#7B61FF] transition-all duration-300 text-left cursor-pointer relative"
            >
              {/* Top Row: Index, Title, Tags, Action */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Index & Title */}
                <div className="flex items-center space-x-4">
                  <span className="font-mono text-lg font-bold text-[#7B61FF]">
                    {svc.num}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-white group-hover:text-gradient transition-all">
                    {svc.title}
                  </h3>
                </div>

                {/* Sub-tags block */}
                <div className="flex flex-wrap gap-1.5">
                  {svc.tags.map((tg) => (
                    <span
                      key={tg}
                      className="font-mono text-[9px] md:text-xs text-zinc-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full uppercase"
                    >
                      {tg}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expandable Panel detailing scope & outcomes */}
              <div className="mt-6 pt-6 border-t border-white/5 grid grid-cols-1 md:grid-cols-12 gap-6">
                
                {/* Outcome Statement */}
                <div className="md:col-span-7 space-y-2">
                  <span className="font-mono text-[10px] text-[#7DDFF2] uppercase tracking-wider block font-semibold">
                    Target Strategic Outcome
                  </span>
                  <p className="font-sans text-sm text-zinc-300 leading-relaxed font-light">
                    {svc.outcome}
                  </p>
                </div>

                {/* Scope Breakdown */}
                <div className="md:col-span-5 space-y-2">
                  <span className="font-mono text-[10px] text-[#7B61FF] uppercase tracking-wider block font-semibold">
                    Analytic Components
                  </span>
                  <ul className="space-y-1.5">
                    {svc.breakdowns.map((item) => (
                      <li key={item} className="flex items-center space-x-2 text-xs text-zinc-400 font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-gv" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
