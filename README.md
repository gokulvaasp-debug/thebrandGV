# thebrandGV — Website Documentation

**Observe. Decode. Create Impact.**

A fully custom HTML/CSS/JS website for thebrandGV — a brand strategy decoder and creative consultancy by Gokul Vaas.

---

## 📁 File Structure

```
thebrandgv-website/
│
├── thebrandgv.html          ← Main website (Home page)
├── blog.html                ← Blog / Thoughts page (with Admin panel)
│
├── favicon.png              ← Browser tab icon
├── hero.png                 ← GV portrait photo (hero section)
├── ko.png                   ← Brand wordmark (hero section, above eyebrow)
├── logo-main-dark.png       ← Dark logo → used in navbar (white background)
├── logo-main-light.png      ← Light logo → used in footer (dark background)
│
├── gv-decodes.png           ← Show logo: GV Decodes
├── behind-the-brands.png    ← Show logo: Behind The Brands
├── adspot.png               ← Show logo: Ad[Spot]
├── fix-this.png             ← Show logo: Fix This.
├── prompted-ai-show.png     ← Show logo: prompted. The AI Show
│
└── README.md                ← This file
```

---

## 🚀 How to Open

1. Extract the ZIP file into a folder
2. Keep **all files in the same folder** — images must be alongside the HTML files
3. Open `thebrandgv.html` in any modern browser (Chrome, Safari, Firefox, Edge)
4. Open `blog.html` separately for the full blog experience

> ⚠️ Do NOT move image files out of the folder. The HTML references them by filename in the same directory.

---

## 🌐 Pages

### `thebrandgv.html` — Main Site
The full one-page website with the following sections:

| Section | Description |
|---|---|
| **Navbar** | Fixed top bar with logo, nav links, search, WORK WITH GV button |
| **Hero** | Brand wordmark, headline, CTA button, social icons, portrait photo |
| **Observe / Decode / Impact** | Three-pillar dark band |
| **Shows** | 5 original media show cards (GV Decodes, Behind The Brands, Ad[Spot], Fix This, prompted.) |
| **About** | Observer bio, strategic dimensions tabs |
| **Capabilities** | 4 service cards: Brand Strategy, Brand Identity, Digital Growth, Brand Consulting |
| **FAQ** | 4 common queries with smooth accordion |
| **Thoughts** | Preview of 3 blog posts linking to blog.html |
| **CTA Band** | "Observe. Decode. Create Impact." with contact form trigger |
| **Footer** | Logo, nav links, social icons, search bar, back to top |

### `blog.html` — Thoughts & Decoded Logics
Full blog reader with:
- Category filter bar (Brand Voice, Strategy, Future of Design, etc.)
- Month-grouped posts (5 per month limit)
- Full article read overlay
- Search (navbar + footer)
- Load More (5 posts per page)
- Admin panel (login required)

---

## 🔐 Admin Login (blog.html)

Click the **Login** button in the top-right of the blog page.

| Field | Value |
|---|---|
| **User ID** | `Gokul` |
| **Password** | `Nitta@8123877` |

### Admin Panel Features
- **New Post** — Add title, category, excerpt, full body content
- **Manage Posts** — View and delete any post
- **Monthly Stats** — Total posts, this month's count, slots remaining (max 5/month)

### Writing Blog Posts
Use these formatting markers in the body field:

```
## Section Heading     → creates a bold heading
> Your quote here      → creates a styled blockquote
(blank line)           → separates paragraphs
```

---

## 📬 Contact Form

Triggered by three buttons:
- **WORK WITH GV →** (navbar)
- **Decode Your Strategic Bottleneck →** (hero)
- **Let's Decode Your Brand →** (CTA band)

The form collects: Name, Email, Brand, Service, Challenge.
On submit, opens a pre-filled email to `hello@thebrandgv.com`.

---

## 🔗 Social Links

| Platform | URL |
|---|---|
| Instagram | https://www.instagram.com/thebrandgv |
| LinkedIn | https://www.linkedin.com/in/gokulvaas/ |
| YouTube | https://www.youtube.com/channel/UCJzKuE6m9IgKJYxSURDXOmQ |
| Email | hello@thebrandgv.com |

---

## ✨ Features & Animations

### Scroll Animations
- **Hero text** — fades + slides up (0.8s, delay 0.1s)
- **Hero photo** — scales + fades in (1.0s, delay 0.3s)
- **Show cards** — staggered scroll reveal (0.6s, 0.15s per card)
- **Steps band** — staggered slide-up (0.6s, 0.15s each)
- **Service rows** — staggered reveal (0.5s, 0.1s each)
- **Blog post cards** — soft reveal (0.5s, capped 0.2s)
- **CTA heading** — scale + fade (0.8s)
- **CTA button** — slide-up after heading (0.6s, 0.35s delay)

### Interactive
- **Scroll progress bar** — slim purple→cyan gradient bar at top of page
- **3D show card tilt** — tracks cursor, tilts up to 12°, scale 1.04 on hover
- **Contact form** — slides in from right (spring easing)
- **FAQ accordion** — smooth height + arrow rotation
- **Dim tabs** — cross-fade between philosophy panels
- **Step lines** — expand on hover (700ms ease)

### Accessibility
- Reduced motion respected (`prefers-reduced-motion`)
- All external links open in new tab with `rel="noopener"`
- ARIA labels on all icon-only buttons

---

## 🎨 Brand Colors

| Name | Hex |
|---|---|
| Dark Navy | `#0a0e1a` |
| Purple | `#7c5cfc` |
| Cyan | `#4fd1e8` |
| Light BG | `#f4f5f8` |
| Text Dark | `#0f1629` |
| Text Muted | `#6b7280` |

---

## 💾 Blog Data Storage

Blog posts are saved in **localStorage** under the key `thebrandgv_blogs_v1`.  
Posts persist across page refreshes but are **browser-local** — they do not sync across devices.  
The 6 default posts are pre-loaded on first visit.

---

## 📅 Monthly Blog Schedule

The admin panel enforces a **maximum of 5 posts per calendar month**.  
The Stats tab shows remaining slots for the current month.

---

## 🛠 Built With

- Pure **HTML5 / CSS3 / Vanilla JavaScript** — no frameworks or dependencies
- **Google Fonts**: Inter + Space Grotesk
- **IntersectionObserver API** for scroll animations
- **localStorage** for blog persistence
- **sessionStorage** for admin login session

---

*Strategized by BrandGV · © 2026 thebrandGV*
