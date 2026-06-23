import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight, Award, Compass, TrendingUp, CheckCircle } from "lucide-react";
import { CaseStudy } from "../types";

export default function Work() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const cases: CaseStudy[] = [
    {
      id: "gelixer-collagen",
      client: "Gelixer Collagen",
      tags: ["Consumer Research", "E-commerce", "Brand Growth"],
      role: "Lead Brand Strategist",
      year: "2025",
      summary: "Translating peptidic science into an emotional, high-frequency beauty standard.",
      challenge: "Gelixer possessed a premium, scientifically backed collagen formula but struggled to communicate complex clinical peptide research to regular, busy skincare enthusiasts. Ads were overly academic and failed to convert.",
      decoding: "We completely shifted the narrative focus from 'scientific cell reconstruction peptides' to 'skincare's lost structural scaffolding'. We simplified the complex charts into clean lifestyle benefits, framing collagen as a daily baseline hydration habit rather than a clinical cure.",
      impact: "We restructured the e-commerce home landing copy and visual density, resulting in a cleaner buying flow. Organic loyalty surged, establishing Gelixer as a premium aesthetic wellness anchor.",
      stats: [
        { label: "Conversion Rate", value: "+142%" },
        { label: "CAC Reduction", value: "-28%" },
        { label: "Repeat Purchase", value: "x2.1" },
      ],
      image: "linear-gradient(135deg, #7B61FF 0%, #D8B4FE 100%)",
    },
    {
      id: "buildedge-studios",
      client: "BuildEdge Studios",
      tags: ["Founder", "Branding & Marketing"],
      role: "Brand Consultant & Partner Advisor",
      year: "2024",
      summary: "Reframing structural drafting as space sculpture to trigger high-end boutique bids.",
      challenge: "BuildEdge had high-end minimalist design capabilities but their portfolio looked like standard civil engineering blueprints. They were stuck competing in low-margin structural calculations instead of luxury architecture commissions.",
      decoding: "We reposited the studio as 'Sculptors of Natural Space'. We decluttered their portfolio page to prioritize expansive negative space, high-contrast black/white photography, and detailed typography. The core messaging highlighted modern thermal engineering combined with intellectual luxury.",
      impact: "Attracted elite commercial developers and boutique estate inquiries, allowing the studio to command premium advisory stakes and select projects with creative autonomy.",
      stats: [
        { label: "Commission Value", value: "+210%" },
        { label: "Client Inbound", value: "x3" },
        { label: "Inquiry Quality", value: "Elite" },
      ],
      image: "linear-gradient(135deg, #0f172a 0%, #334155 100%)",
    },
    {
      id: "easa-college",
      client: "EASA College",
      tags: ["Digital Strategy", "Performance Marketing"],
      role: "Digital Campaign Lead",
      year: "2025",
      summary: "Modernizing lead-generation funnels by selling futures, not empty degrees.",
      challenge: "EASA was dealing with generic, ineffective online lead forms and excessive ad-spend targeting non-converting inquiries. The branding felt like a standard academic catalog and lacked premium digital appeal.",
      decoding: "We replaced standard campus images and brochures with hyper-focused alumni career blueprints. We redesigned the landing funnel around 'The Creative Skill Matrix' instead of 'academic units', tailoring ads in direct narrative scripts matching candidate career concerns.",
      impact: "Tripled online registration conversions while reducing cost-per-acquisition, optimizing ad budget efficiency and building long-term digital credibility.",
      stats: [
        { label: "Cost Per Lead", value: "-44%" },
        { label: "Form Conversions", value: "+180%" },
        { label: "Enrollment Yield", value: "x1.5" },
      ],
      image: "linear-gradient(135deg, #111827 0%, #7B61FF 100%)",
    },
  ];

  return (
    <section id="work-case-studies" className="py-24 bg-white text-[#050719] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div className="text-left space-y-4 max-w-xl">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#7B61FF]" />
              <span className="font-display text-[10px] tracking-[0.25em] text-[#7B61FF] uppercase font-bold">Featured Journeys</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tighter text-[#050719]">
              Strategic casework.
            </h2>
            <p className="font-sans text-slate-500 text-sm md:text-base">
              A collection of digital, consumer, and corporate transformations designed for real business growth.
            </p>
          </div>
          <div className="font-mono text-xs text-zinc-400">
            <span>[Click cases to view decoding breakdown]</span>
          </div>
        </div>

        {/* Case Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((cs, idx) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              onClick={() => setSelectedCase(cs)}
              className="group cursor-pointer bg-slate-50 rounded-3xl border border-gray-150 p-6 md:p-8 flex flex-col justify-between h-[450px] hover:shadow-2xl hover:border-[#7B61FF] hover:bg-white transition-all duration-300"
            >
              {/* Top metadata */}
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs font-mono text-gray-400">
                  <span>{cs.role}</span>
                  <span>{cs.year}</span>
                </div>

                {/* Tags and Title */}
                <div className="space-y-3 text-left">
                  <h3 className="font-display text-3xl font-black tracking-tighter text-[#050719]">
                    {cs.client}
                  </h3>
                  
                  {/* Category Pill Horizontal container */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cs.tags.map((t) => (
                      <span key={t} className="font-mono text-[9px] text-[#7B61FF] bg-[#7B61FF]/5 px-2.5 py-1 rounded-full uppercase font-bold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Central Abstract Summary */}
              <p className="font-sans text-xs md:text-sm text-slate-500 leading-relaxed text-left border-l border-gray-200 pl-4 py-1 italic">
                "{cs.summary}"
              </p>

              {/* Bottom Info or Stats Highlight */}
              <div className="pt-6 border-t border-gray-100 flex items-end justify-between">
                {cs.stats && cs.stats[0] && (
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-gray-400 block mb-0.5">Primary Metric</span>
                    <span className="font-display text-2xl font-bold text-transparent bg-clip-text bg-gradient-gv">
                      {cs.stats[0].value}
                    </span>
                  </div>
                )}
                
                {/* Arrow Accent */}
                <span className="p-3 rounded-full bg-white border border-gray-100 text-gray-400 group-hover:bg-[#7b61ff] group-hover:text-white transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Slide-over Case Details Panel */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-end p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
              className="absolute inset-0 bg-[#050719]/50 backdrop-blur-md"
            />

            {/* Panel Body */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="relative h-full w-full max-w-2xl bg-white shadow-2xl flex flex-col justify-between overflow-y-auto rounded-3xl z-10"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-gray-100 p-6 md:p-8">
                <div>
                  <span className="font-mono text-[10px] tracking-widest text-[#7B61FF] uppercase font-bold">CASE STUDY DECODING</span>
                  <h3 className="font-serif text-3xl font-extrabold text-[#050719] mt-1 pr-6">{selectedCase.client}</h3>
                </div>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="p-2 text-gray-400 hover:text-red-500 hover:bg-slate-50 rounded-full transition-colors cursor-pointer"
                  aria-label="Close case"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Main Casework Body content */}
              <div className="flex-1 p-6 md:p-8 space-y-8 text-left">
                {/* Metrics Banner */}
                <div className="bg-[#050719] text-white p-6 rounded-2xl border border-white/5 grid grid-cols-3 gap-2">
                  {selectedCase.stats?.map((stat) => (
                    <div key={stat.label} className="text-center space-y-1">
                      <span className="font-display text-xl md:text-3xl font-black text-[#7DDFF2] block">
                        {stat.value}
                      </span>
                      <span className="font-mono text-[9px] md:text-xs text-zinc-400 uppercase tracking-wider block font-light">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Challenge Block */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-amber-500 font-mono text-xs uppercase font-bold">
                    <X className="w-4 h-4 bg-amber-500/10 p-0.5 rounded" />
                    <span>The Foundational Challenge</span>
                  </div>
                  <p className="font-sans text-slate-500 text-sm md:text-base leading-relaxed font-light">
                    {selectedCase.challenge}
                  </p>
                </div>

                {/* Decoded Strategy Block */}
                <div className="space-y-4 bg-indigo-50/50 p-6 rounded-2xl border border-indigo-50/50">
                  <div className="flex items-center space-x-2 text-[#7B61FF] font-mono text-xs uppercase font-bold">
                    <Compass className="w-4 h-4" />
                    <span>GV's Strategic Decoding</span>
                  </div>
                  <p className="font-sans text-slate-700 text-sm md:text-base leading-relaxed font-medium">
                    {selectedCase.decoding}
                  </p>
                </div>

                {/* Ultimate Business Impact */}
                <div className="space-y-2 pb-6">
                  <div className="flex items-center space-x-2 text-emerald-500 font-mono text-xs uppercase font-bold">
                    <CheckCircle className="w-4 h-4" />
                    <span>Sustainable Market Impact</span>
                  </div>
                  <p className="font-sans text-slate-500 text-sm md:text-base leading-relaxed font-light">
                    {selectedCase.impact}
                  </p>
                </div>
              </div>

              {/* Panel Footer */}
              <div className="border-t border-gray-100 p-6 bg-slate-50/50 flex justify-between items-center text-xs text-gray-400 font-mono">
                <span>Casework ID: GV-{selectedCase.id.slice(0, 4).toUpperCase()}</span>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="px-5 py-2.5 bg-[#050719] hover:bg-gradient-gv text-white font-sans text-xs font-semibold rounded-xl cursor-pointer"
                >
                  Return to Portfolio
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
