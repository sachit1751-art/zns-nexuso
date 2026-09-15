# ZNS Nexus — Creative Digital & Motion Agency

A high-performance, design-forward creative agency web application built with **Next.js 15 (App Router)**, **React 19**, and **GSAP**. This project delivers a fluid, immersive digital experience featuring physics-driven interactions, inertia-based motion design, custom cursor feedback, and seamless full-page animations.

---

## ⚡ Highlights & Key Features

### 1. Dynamic Adaptive Navigation
- **Theme-Aware Color Inversion**: Automatically transitions between dark and light modes according to the underlying section.
- **Interactive Popout Drawers**:
  - **Work Drawer**: Fast 360° blob rotation that expands into an interactive work showcase.
  - **Direct Inquiry / WhatsApp**: Interactive QR code drawer for fast mobile and desktop communication.
- **Header Actions**: Animated SVG spark icon coupled with a responsive "Hire us" pill button with theme-adaptive hover states.
- **Touch & Mobile Support**: Full touch tap toggles on mobile alongside desktop hover interactions.

### 2. Ambient Cinema Hero
- Seamless full-screen video background with native controls (Play/Pause, Fullscreen toggle).
- Dynamic typography overlay: *"We make your business workflow 10x easier"*.

### 3. Pinned Horizontal Scrubbing & Dynamic Typography
- **Horizontal Words Section**: Pinned scroll section powered by GSAP ScrollTrigger.
- Responsive letter-by-letter physics bounce and decorative sticker accents.
- High-contrast typography: *"Audiences are everywhere, yet closer than ever. We help brands master the new mainstream channels to capture attention and lead."*

### 4. Physics-Based Motion Cards
- **GSAP InertiaPlugin**: Motion cards track mouse cursor velocity. On cursor release (`mouseleave`), cards fling with authentic momentum and smoothly snap back into equilibrium.
- Interactive stickers, badges, and floating tags reacting to user gestures.

### 5. Elastic Service Cards
- **"call us if you need:"** section with animated SVG path underlines triggered on scroll.
- Responsive multi-card layout with elastic spacing physics and hover badge rotations.

### 6. Video Showreel & Interactive Media
- Rich media showreel container with custom cursor tracking and hover states.

### 7. Infinite Double Marquee
- Dual-direction marquee bands displaying client logos and partners with smooth infinite looping and hover deceleration.

### 8. Custom Cursor System & Interactive Scribble Transitions
- **Cursor Bubble**: Custom trailing cursor element that scales and displays dynamic action text (e.g., "Play", "View", "Drag") on interactive targets.
- **Transition Scribble**: Full-screen hand-drawn SVG scribble effect with randomized color palettes on navigation actions.

### 9. Lenis Smooth Scrolling
- Integrated with GSAP's ticker to provide unified 60/120fps inertia scrolling across the entire page.

---

## 🛠️ Architecture & Tech Stack

| Layer | Technology | Description |
|---|---|---|
| **Framework** | Next.js 15 (App Router) | Modern React Server/Client Component architecture |
| **UI Library** | React 19 | Declarative UI and state management |
| **Animation Engine** | GSAP 3 (GreenSock) | ScrollTrigger, InertiaPlugin, and timeline orchestration |
| **Smooth Scroll** | @studio-freight/lenis | Hardware-accelerated virtual scrolling |
| **Styling** | Modular CSS + Tailwind CSS | Custom typographic hierarchy with responsive layout utilities |
| **Icons & Vectors** | Lucide React + Inline SVGs | Optimized vector graphics and animated strokes |

---

## 📁 Directory Structure

```text
├── app/
│   ├── globals.css           # Global resets and CSS variables
│   ├── layout.tsx            # Root Next.js layout & HTML metadata
│   ├── page.jsx              # Main home page component assembly
│   └── styles/               # Modular CSS sheets
│       ├── navbar.css        # Adaptive navigation styles
│       ├── hero.css          # Hero & service section styles
│       ├── responsive.css    # Multi-breakpoint media queries
│       ├── vimeo-hero.css    # Video player styles
│       └── ...
├── components/
│   ├── Navbar.jsx            # Dynamic navigation header
│   ├── VimeoHero.jsx         # Ambient video hero section
│   ├── HorizontalWords.jsx   # Pinned horizontal GSAP typography
│   ├── MotionCards.jsx       # Physics velocity fling cards
│   ├── ServiceCards.jsx      # Elastic service showcase
│   ├── Showreel.jsx          # Interactive media showreel
│   ├── DoubleMarquee.jsx     # Dual infinite looping marquees
│   ├── Footer.jsx            # Agency footer & copyright
│   ├── CursorBubble.jsx      # Dynamic custom cursor
│   ├── TransitionScribble.jsx# Full-screen transition effect
│   └── SmoothScroll.jsx      # Lenis smooth scrolling bridge
├── public/
│   └── assets/               # SVG stickers, cursors, and media
├── package.json              # Project dependencies and scripts
└── README.md                 # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or later
- npm or yarn

### Installation
```bash
# 1. Clone or navigate to the project directory
cd zns-nexus

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to explore the live application.

### Production Build
```bash
# Build for production deployment
npm run build

# Start production server
npm run start
```

---

## 📱 Responsive Design & Accessibility
- **Breakpoints**: Crafted for ultra-wide displays down to small mobile viewports (`320px+`).
- **Touch Gestures**: Desktop hover drawers seamlessly convert to touch toggle drawers on mobile devices.
- **Performance**: Heavy client-side animations run within `ClientOnly` boundary wrappers to ensure fast initial server rendering without hydration mismatches.

---

## 📄 License
Created for **ZNS Nexus**. All rights reserved.
