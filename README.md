# Akidiva Carlos — Systems Engineering Portfolio

A minimal, black-and-white personal portfolio website showcasing systems engineering work: custom memory allocators, concurrent runtimes, storage engines, and high-throughput network services.

## 🎯 Focus

This portfolio targets **systems engineering, infrastructure, and backend platform roles**. It emphasizes:

- Low-level systems programming (C, Go, Linux internals)
- Custom infrastructure: allocators, runtimes, storage engines, network services
- Distributed systems: rate limiting, job queues, load balancing, observability
- Performance-critical code where nanoseconds matter

## 📁 Project Structure

```
portfolio_website/
├── index.html          # Main HTML document
├── styles.css          # Complete stylesheet (black/white design system)
├── script.js           # Minimal JS (tab switching only)
├── favicon.svg         # Hexagonal "A" logo (transparent, dark)
├── project1.svg        # Mini Shell screenshot mockup
├── project2.svg        # Web Server screenshot mockup
├── 1000012116.jpg      # Headshot
└── README.md           # This file
```

## 🎨 Design System

### Color Palette (CSS Custom Properties)

```css
--black: #000000;           /* Primary background */
--near-black: #0a0a0a;      /* Card backgrounds */
--dark-gray: #1a1a1a;       /* Elevated surfaces */
--medium-gray: #333333;     /* Borders, dividers */
--gray: #666666;            /* Muted text */
--light-gray: #999999;      /* Secondary text */
--lighter-gray: #cccccc;    /* Primary text */
--white: #ffffff;           /* Accents, highlights */
--border-gray: #2a2a2a;     /* Subtle borders */
```

### Typography

| Usage | Font |
|-------|------|
| UI, body, headings | `Inter` (400, 600, 700) |
| Code, mono, labels | `Fira Code` (400, 500) |

### Key Principles

- **No color accents** — pure grayscale hierarchy
- **High contrast** — AAA compliant (white on black)
- **Respects `prefers-reduced-motion`** — no forced animations
- **Mobile-first** — breakpoints at 900px, 768px, 600px

## 🚀 Quick Start

### Local Development

```bash
# Option 1: Python (recommended)
cd portfolio_website
python3 -m http.server 8000
# Open http://localhost:8000

# Option 2: Node.js
npx serve .
# Open http://localhost:3000

# Option 3: VS Code Live Server
# Right-click index.html → "Open with Live Server"
```

### Deploy

Any static host works:
- **GitHub Pages** — push to `gh-pages` branch
- **Netlify** — drag & drop folder
- **Vercel** — `vercel deploy`
- **Cloudflare Pages** — connect repo

No build step required.

## 📄 Sections

| Section | Description |
|---------|-------------|
| **Hero** | Name, tagline ("I build systems that scale"), description |
| **About** | Background, philosophy, core competencies (5-category grid) |
| **Experience** | 4 tabs: Axiom Systems, Meridian Data, Helix Runtime, Independent |
| **Featured Projects** | 2 detailed cards: Mini Shell, Web Server |
| **All Projects** | 11-card grid with hover effects |
| **Technical Writing** | 4 article cards (io_uring, malloc, LSM, lock-free) |
| **Currently Exploring** | 4 focus areas (io_uring, Rust, eBPF, consensus) |
| **Contact** | Email, GitHub, LinkedIn |

## 🔧 Customization

### Update Experience

Edit the tab panels in `index.html` (lines ~136–178):

```html
<div id="job-1" class="job-panel active">
  <h3>Your Role <span class="company">@ <a href="#">Company</a></span></h3>
  <p class="job-range">2024 — 2025</p>
  <ul class="job-duties">
    <li>Achievement with metrics</li>
    ...
  </ul>
</div>
```

### Add Projects

Duplicate a `.project-card` in the `.projects-grid` (lines ~243–540):

```html
<div class="project-card">
  <div class="card-top">
    <div class="folder-icon">...</div>
    <div class="card-links">
      <a href="https://github.com/you/repo" ...>...</a>
    </div>
  </div>
  <h3 class="card-title"><a href="#">Project Name</a></h3>
  <p class="card-description">One-paragraph description.</p>
  <ul class="card-tech-list">
    <li>Tech</li>
    <li>Stack</li>
  </ul>
</div>
```

### Replace Screenshots

Replace `project1.svg` / `project2.svg` with real screenshots (keep 4:3 ratio recommended).

### Update Headshot

Replace `1000012116.jpg` with your photo.

### Resume

Add `/resume.pdf` to root (linked in navbar and hero CTA).

## ♿ Accessibility

- Skip-to-content link (visible on focus)
- Semantic HTML5 (`header`, `main`, `section`, `article`, `footer`)
- ARIA labels on icon-only links
- Focus-visible states on all interactive elements
- Color contrast AAA (white on black)
- `prefers-reduced-motion` respected

## 📱 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |

Uses modern CSS: Grid, Flexbox, Custom Properties, `clamp()`, `aspect-ratio`, `:focus-visible`.

## 📝 License

Design inspired by [Brittany Chiang](https://github.com/bchiang7). Code is MIT licensed — use freely for your own portfolio.

## 🔗 Links

- **GitHub**: [@akidiva-tech](https://github.com/akidiva-tech)
- **LinkedIn**: [akidiva-carlos](https://www.linkedin.com/in/akidiva-carlos-276587346)
- **Email**: akidiva.tech@gmail.com