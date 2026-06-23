import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Sparkles, BookOpen, Clock, Activity, Cpu } from "lucide-react";
import { Show } from "../types";

interface ShowCardProps {
  show: Show;
  failedImages: Record<string, boolean>;
  setFailedImages: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  onClick: () => void;
  idx: number;
  key?: string;
}

function ShowCard({ show, failedImages, setFailedImages, onClick, idx }: ShowCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle maximum rotation of 7 degrees for luxury, professional aesthetic
    const degX = ((centerY - y) / centerY) * 7;
    const degY = ((x - centerX) / centerX) * 7;

    setRotateX(degX);
    setRotateY(degY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04, 1.04, 1.04)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        transition: isHovered ? "transform 0.05s ease-out" : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`bg-white rounded-3xl border p-6 flex flex-col justify-between h-[360px] shadow-sm hover:shadow-xl cursor-pointer group select-none ${
        isHovered ? "border-[#7B61FF]" : "border-gray-150"
      }`}
    >
      {/* Logo / Header Display */}
      <div className="h-32 flex items-center justify-center border-b border-gray-100 pb-4 relative overflow-hidden">
        {show.hasCustomImg ? (
          <div className="relative w-full h-full flex items-center justify-center">
            {!failedImages[show.id] ? (
              <img
                src={show.imgUrl}
                alt={show.title}
                className="max-h-24 max-w-full object-contain filter transition-transform duration-300"
                onError={() => setFailedImages((prev) => ({ ...prev, [show.id]: true }))}
                referrerPolicy="no-referrer"
              />
            ) : null}
            {failedImages[show.id] && (
              <div id={`logo-fb-${show.id}`}>
                <span className={show.logoStyleClass}>{show.logoText}</span>
              </div>
            )}
          </div>
        ) : (
          <span className={show.logoStyleClass}>{show.logoText}</span>
        )}
      </div>

      {/* Show Stats */}
      <div className="pt-4 flex items-center justify-start">
        <span className="font-mono text-[10px] tracking-widest text-[#7B61FF] bg-[#7B61FF]/5 px-2.5 py-1 rounded-full uppercase font-bold">
          {show.category}
        </span>
      </div>

      {/* Description */}
      <p className="font-sans text-xs md:text-sm text-slate-500 leading-relaxed text-left line-clamp-4 mt-3 mb-2">
        {show.description}
      </p>
    </motion.div>
  );
}

export default function Shows() {
  const [selectedShow, setSelectedShow] = useState<Show | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const showsList: Show[] = [
    {
      id: "gv-decodes",
      title: "GV DECODES",
      logoText: "GV DECODES",
      logoStyleClass: "font-display font-extrabold tracking-tighter text-3xl text-gradient relative",
      category: "THE STRATEGY SHOW",
      accentColor: "#7B61FF",
      description: "Breaking down the world's most interesting brands, strategies, campaigns and consumer psychology.",
      hasCustomImg: true,
      imgUrl: "/input_file_1.png",
      episodeSample: {
        title: "The Starbucks Spillover Theory",
        hook: "Why your brain is primed to spend $7 on liquid beans simply because of context design and seating geometry.",
        takeaway: "Premium pricing isn't about the product; it's about raising the baseline prestige of the surrounding environment so the price becomes invisible.",
      },
    },
    {
      id: "behind-the-brand",
      title: "BEHIND THE BRAND",
      logoText: "BEHIND THE BRAND",
      logoStyleClass: "font-serif text-2xl italic tracking-wide text-zinc-800 border-b border-zinc-200 pb-1 font-semibold",
      category: "THE STORY SHOW",
      accentColor: "#DEB887", // Bronze/Gold feel
      description: "Stories behind founders, business decisions, journeys and lessons that built great brands.",
      episodeSample: {
        title: "How Liquid Death Turned Canned Water into Heavy Metal Obsession",
        hook: "Analyzing how a former punk band member bypassed healthy food conventions by packaging tap water into beer cans with dark humor.",
        takeaway: "Sell the culture, supply the commodity. By targeting high-energy youth lifestyles instead of wellness aesthetics, they sold water for premium beer prices.",
      },
    },
    {
      id: "ad-spot",
      title: "AD SPOT",
      logoText: "AD[SPOT]",
      logoStyleClass: "font-display font-black tracking-widest text-2xl text-white bg-slate-950 px-3 py-1 border-2 border-[#7DDFF2] rounded",
      category: "THE CREATIVE SHOW",
      accentColor: "#7DDFF2",
      description: "Spotting creativity in ads, billboards, packaging, copywriting and campaigns.",
      episodeSample: {
        title: "Heinz Ketchup: The Slow-Pour Triumph",
        hook: "Reviewing how Heinz embraced their packaging's core annoyance—slow product flow—and flipped it into an iconic signal of premium preservation.",
        takeaway: "Acknowledge the flaw, own the standard. Turning 'waiting' into 'anticipation' cemented their premium rank over runny competitors.",
      },
    },
    {
      id: "fix-this",
      title: "FIX THIS",
      logoText: "FIX THIS.",
      logoStyleClass: "font-mono font-extrabold tracking-tight text-3xl text-red-500 uppercase border-r-4 border-red-500 pr-2",
      category: "THE CONSULTING SHOW",
      accentColor: "#EF4444",
      description: "Real brand problems, honest feedback and actionable fixes that create impact.",
      episodeSample: {
        title: "Repositioning Hydration Salts for High Performance",
        hook: "Transforming standard WHO rehydration powders from clinical pharmacy medical aesthetics into dynamic wellness tools for top athletes.",
        takeaway: "Repositioning resets the category box. Medical saline sells for $0.50. Rebranded performance elixirs sell for $4.50. Same powder, new context.",
      },
    },
    {
      id: "prompted",
      title: "PROMPTED",
      logoText: "p r o m p t e d .",
      logoStyleClass: "font-mono text-zinc-950 tracking-widest text-xl font-bold bg-[#7DDFF2]/10 border-b-2 border-[#7B61FF] py-1",
      category: "THE AI SHOW",
      accentColor: "#7B61FF",
      description: "Exploring AI tools, workflows, automation and the future of creativity.",
      episodeSample: {
        title: "The Prompt as Creative Director",
        hook: "BrandGV demonstrates deep training a custom strategic LLM onto historical ad databases to inspect if AI can spot human nostalgic patterns.",
        takeaway: "AI is an ideal brainstorming synthesizer, but authentic human resonance requires lived nostalgic memory. Utilize AI for variance, humans for alignment.",
      },
    },
  ];

  return (
    <section id="shows" className="py-24 bg-slate-50 text-[#050719]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div className="text-left space-y-4 max-w-2xl">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#7B61FF]" />
              <span className="font-display text-[10px] tracking-[0.25em] text-slate-500 uppercase font-bold">GV ORIGINAL MEDIA</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tighter text-[#050719]">
              Ideas. Brands.<br />Stories. Decoded.
            </h2>
            <p className="font-sans text-slate-500 text-sm md:text-base leading-relaxed">
              Five shows. Five perspectives. One mission — understand brands and the world around them.
            </p>
          </div>
          <div className="flex items-center space-x-2 font-mono text-xs text-slate-400">
            <span>[Tap cards for episode breakdowns]</span>
          </div>
        </div>

        {/* Brand Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-4">
          {showsList.map((show, idx) => (
            <ShowCard
              key={show.id}
              show={show}
              failedImages={failedImages}
              setFailedImages={setFailedImages}
              onClick={() => setSelectedShow(show)}
              idx={idx}
            />
          ))}
        </div>
      </div>

      {/* Show Breakdown Modal */}
      <AnimatePresence>
        {selectedShow && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedShow(null)}
              className="absolute inset-0 bg-[#050719]/40 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 md:p-8 overflow-hidden z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedShow(null)}
                className="absolute top-6 right-6 p-1.5 text-gray-400 hover:text-[#050719] hover:bg-gray-50 rounded-full transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Category */}
              <span className="font-mono text-xs text-[#7B61FF] tracking-widest uppercase font-bold">
                {selectedShow.category}
              </span>

              {/* Title & Accent */}
              <div className="flex items-center space-x-3 mt-1.5 pb-4 border-b border-gray-100">
                <h3 className="font-serif text-3xl font-extrabold text-[#050719]">
                  {selectedShow.title}
                </h3>
              </div>

              {/* Description body */}
              <div className="mt-4 space-y-4 text-left">
                <p className="font-sans text-sm md:text-base text-slate-500 leading-relaxed italic">
                  "{selectedShow.description}"
                </p>

                {/* Episode breakdown segment */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 mt-6 space-y-4">
                  <div className="flex items-center space-x-2 text-[#7B61FF] font-mono text-xs uppercase font-bold">
                    <BookOpen className="w-4 h-4" />
                    <span>LATEST DECODING SESSION</span>
                  </div>

                  <h4 className="font-display font-bold text-[#050719] text-base md:text-lg">
                    {selectedShow.episodeSample.title}
                  </h4>

                  <div className="text-sm space-y-3">
                    <div>
                      <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block mb-1">THE OBSERVED HOOK</span>
                      <p className="font-sans text-slate-600 font-light">{selectedShow.episodeSample.hook}</p>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block mb-1">BRANDGV'S STRATEGIC DECODING</span>
                      <p className="font-sans text-slate-700 font-medium border-l-2 border-[#7B61FF] pl-3 py-0.5">
                        {selectedShow.episodeSample.takeaway}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions footer */}
              <div className="mt-8 pt-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-400">
                <span>© thebrandGV Media • All Rights Reserved</span>
                <button
                  onClick={() => setSelectedShow(null)}
                  className="px-5 py-2.5 bg-[#050719] hover:bg-gradient-gv text-white font-sans text-xs font-semibold rounded-xl text-center self-stretch sm:self-auto cursor-pointer"
                >
                  Return to Matrix
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
