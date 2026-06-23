import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavigationProps {
  onOpenContact: () => void;
  activeSection: string;
}

export default function Navigation({ onOpenContact, activeSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Shows", href: "#shows" },
    { label: "Thoughts", href: "#thoughts" },
    { label: "Contact", href: "#contact-section" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navHeight = scrolled ? 80 : 100;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight + 10,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* LOGO */}
        <a href="#home" onClick={(e) => handleMenuClick(e, "#home")} className="flex flex-col items-start group">
          {/* Always display the brand Logo image */}
          <div className="flex items-center space-x-2">
            <img
              src="/input_file_0.png"
              alt="thebrandGV"
              className="h-9 md:h-11 w-auto object-contain block group-hover:opacity-90 transition-opacity"
              referrerPolicy="no-referrer"
            />
          </div>
        </a>

        {/* DESKTOP NAVIGATION MENU ITEMS */}
        <div className="hidden lg:flex items-center space-x-10">
          {menuItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleMenuClick(e, item.href)}
                className={`font-sans text-[11px] uppercase tracking-widest font-semibold transition-all duration-200 ${
                  isActive
                    ? "text-[#050719] border-b-2 border-[#050719] pb-1 font-bold"
                    : "text-gray-500 hover:text-[#050719]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* ACTION BUTTON */}
        <div className="hidden lg:block">
          <button
            onClick={onOpenContact}
            className="cursor-pointer px-6 py-3 border border-[#050719] bg-transparent hover:bg-[#050719] hover:text-white rounded-full text-[11px] uppercase tracking-widest font-bold text-[#050719] transition-all duration-300"
          >
            Work with GV &rarr;
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="flex items-center space-x-4 lg:hidden">
          <button
            onClick={onOpenContact}
            className="text-xs font-semibold bg-[#050719]/5 border border-gray-100 hover:bg-[#050719] hover:text-white text-[#050719] px-4 py-2.5 rounded-full transition-all"
          >
            Work With GV →
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-800 hover:text-[#7B61FF] transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV SCREEN */}
      {isOpen && (
        <div className="fixed inset-0 top-[70px] z-30 bg-white lg:hidden flex flex-col justify-between p-8 border-t border-gray-100 animate-fadeIn">
          <div className="flex flex-col space-y-6">
            {menuItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleMenuClick(e, item.href)}
                  className={`font-serif text-3xl font-bold tracking-tight transition-all duration-200 ${
                    isActive ? "text-[#7B61FF]" : "text-slate-600 hover:text-[#050719]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="space-y-6">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenContact();
              }}
              className="w-full text-center bg-[#050719] hover:bg-gradient-gv text-white font-sans text-sm font-semibold py-4 rounded-xl flex items-center justify-center space-x-2 transition-all"
            >
              <span>Work With GV</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="text-center font-mono text-[10px] text-gray-400 tracking-wider">
              thebrandGV • observe • decode • impact
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
