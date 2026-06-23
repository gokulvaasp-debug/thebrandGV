@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400..700;1,400..700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-serif: "Playfair Display", Georgia, serif;
  --font-display: "Space Grotesk", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
}

/* Custom smooth scrolling and page defaults */
html {
  scroll-behavior: smooth;
  background-color: #ffffff;
  color: #050719;
}

::selection {
  background-color: rgba(123, 97, 255, 0.2);
  color: #050719;
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #c7c7cc;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #a1a1aa;
}

/* Premium gradient utility */
.text-gradient {
  background: linear-gradient(135deg, #7B61FF 0%, #7DDFF2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bg-gradient-gv {
  background: linear-gradient(135deg, #7B61FF 0%, #7DDFF2 100%);
}

.border-gradient-gv {
  border-image: linear-gradient(135deg, #7B61FF, #7DDFF2) 1;
}
