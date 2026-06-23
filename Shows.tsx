import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";
import { Inquiry } from "../types";

interface ContactProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactProps) {
  const [formData, setFormData] = useState<Inquiry>({
    name: "",
    email: "",
    brandName: "",
    stage: "Scaling Up",
    objective: "Brand Decoding & Audit",
    challenge: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const stages = [
    "Idea Phase / Pre-launch",
    "Scaling Up / Growing",
    "Brand Redesign / Re-positioning",
    "Personal Brand Expansion",
  ];

  const objectives = [
    "Brand Decoding & Audit",
    "Comprehensive Brand Strategy",
    "Visual/Story Identity Layout",
    "1-on-1 Strategic Consulting",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setLoading(true);
    // Simulate premium processing
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      // Save code locally to localStorage to make persistent
      const currentInquiries = JSON.parse(localStorage.getItem("gv_inquiries") || "[]");
      localStorage.setItem("gv_inquiries", JSON.stringify([...currentInquiries, formData]));
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      brandName: "",
      stage: "Scaling Up",
      objective: "Brand Decoding & Audit",
      challenge: "",
    });
    setIsSubmitted(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="contact-overlay" className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden pl-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#050719]/80 backdrop-blur-md"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 180 }}
            className="relative h-full w-full max-w-xl bg-white shadow-2xl flex flex-col justify-between overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 p-6 md:p-8">
              <div>
                <span className="font-mono text-xs tracking-widest text-[#7B61FF] uppercase font-semibold">Inquiry Portal</span>
                <h3 className="font-serif text-2xl text-[#050719] mt-1 font-semibold">Work With GV</h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-[#050719] hover:bg-gray-50 rounded-full transition-colors"
                aria-label="Close portal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 p-6 md:p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information */}
                  <div className="space-y-4">
                    <p className="font-sans text-sm text-gray-500 mb-2">
                      Let's collaborate. Fill in the strategic details below, and BrandGV will decode your requirements.
                    </p>

                    <div>
                      <label className="block text-xs font-mono font-medium text-gray-400 uppercase tracking-wider mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full text-base py-2.5 border-b border-gray-200 focus:border-[#7B61FF] bg-transparent outline-none transition-all placeholder:text-gray-300 font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-gray-400 uppercase tracking-wider mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@brand.com"
                        className="w-full text-base py-2.5 border-b border-gray-200 focus:border-[#7B61FF] bg-transparent outline-none transition-all placeholder:text-gray-300 font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-gray-400 uppercase tracking-wider mb-1">
                        Brand / Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.brandName}
                        onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                        placeholder="e.g. Apex Wearables"
                        className="w-full text-base py-2.5 border-b border-gray-200 focus:border-[#7B61FF] bg-transparent outline-none transition-all placeholder:text-gray-300 font-sans"
                      />
                    </div>
                  </div>

                  {/* Brand Stage Choice */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-gray-400 uppercase tracking-wider mb-2.5">
                      Current Brand Stage
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {stages.map((stg) => (
                        <button
                          key={stg}
                          type="button"
                          onClick={() => setFormData({ ...formData, stage: stg })}
                          className={`p-3 text-left text-xs rounded-xl border text-slate-700 transition-all font-sans cursor-pointer ${
                            formData.stage === stg
                              ? "border-[#7B61FF] bg-[#7B61FF]/5 text-[#7B61FF] font-medium"
                              : "border-gray-150 hover:bg-gray-50 bg-white"
                          }`}
                        >
                          {stg}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Primary Objective Choice */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-gray-400 uppercase tracking-wider mb-2.5">
                      Your Primary Objective
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {objectives.map((obj) => (
                        <button
                          key={obj}
                          type="button"
                          onClick={() => setFormData({ ...formData, objective: obj })}
                          className={`p-3 text-left text-xs rounded-xl border text-slate-700 transition-all font-sans cursor-pointer ${
                            formData.objective === obj
                              ? "border-[#7B61FF] bg-[#7B61FF]/5 text-[#7B61FF] font-medium"
                              : "border-gray-150 hover:bg-gray-50 bg-white"
                          }`}
                        >
                          {obj}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* The Big Challenge */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-gray-400 uppercase tracking-wider mb-1">
                      What is your single biggest brand bottleneck?
                    </label>
                    <textarea
                      rows={3}
                      value={formData.challenge}
                      onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                      placeholder="e.g. We have great technology but struggle to explain our product value simply to customers."
                      className="w-full text-sm py-2.5 border-b border-gray-200 focus:border-[#7B61FF] bg-transparent outline-none transition-all resize-none placeholder:text-gray-300 font-sans"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full cursor-pointer bg-[#050719] hover:bg-gradient-gv text-white font-sans text-sm font-medium py-4 px-6 rounded-xl flex items-center justify-center space-x-2 transition-all hover:shadow-lg disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="flex items-center space-x-2">
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Decoding Inputs...</span>
                      </span>
                    ) : (
                      <>
                        <span>Submit Consultation Brief</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="h-full flex flex-col justify-center items-center py-12 text-center">
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-16 h-16 bg-gradient-gv rounded-full flex items-center justify-center text-white mb-6"
                  >
                    <CheckCircle2 className="w-8 h-8" />
                  </motion.div>
                  <h4 className="font-serif text-2xl text-[#050719] font-semibold mb-2">Brief Decoded Successfully</h4>
                  <p className="font-sans text-sm text-gray-500 max-w-sm mb-8">
                    Thank you, <span className="font-medium text-[#050719]">{formData.name}</span>. BrandGV has received your objective for <span className="font-semibold text-[#7B61FF]">{formData.brandName || "your brand"}</span>. Expect a detailed response within 48 hours.
                  </p>
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 border border-gray-200 hover:border-[#050719] rounded-xl text-xs font-semibold uppercase tracking-wider text-gray-700 transition-colors"
                  >
                    Close Drawer
                  </button>
                  <button
                    onClick={resetForm}
                    className="mt-3 text-xs text-[#7B61FF] hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              )}
            </div>

            {/* Footer Sign-off */}
            <div className="border-t border-gray-50 p-6 bg-gray-50/50 flex justify-between items-center text-xs text-gray-400 font-mono">
              <span>thebrandGV • Personal Brand Council</span>
              <span>observe • decode • impact</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
