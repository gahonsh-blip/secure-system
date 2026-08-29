# Secure System Solution

> Professional IT Infrastructure, CCTV Surveillance & Networking Services Web Platform for Ranchi, Jharkhand.

---

## 📌 Project Overview

**Secure System Solution** is a modern, responsive web application and digital presence for an IT infrastructure and security solutions enterprise based in Argora, Ranchi, Jharkhand. The platform provides service catalogs, client inquiry mechanisms, project showcases, interactive diagnostics info, and direct UPI payment options for corporate and residential clients.

---

## ✨ Key Features

- **Dual Experience (Landing & Dedicated Pages)**:
  - **Main Portal (`index.html`)**: Rich dark-themed single-page experience with smooth scroll navigation, interactive typing headlines, animated counter stats, service catalog, interactive project gallery, client testimonial carousel, FAQ accordion, Google Maps embed, and quote inquiry form.
  - **Multilingual Support Pages (`about.html`, `services.html`, `contact.html`)**: Dedicated pages featuring Hindi localization, comprehensive business overview, structured service cards, and quick UPI QR payment routing.
- **Interactive UI/UX**:
  - **Dynamic Typing Effect**: Headline animation powered by Typed.js.
  - **Scroll Progress & Spy**: Live visual scroll tracker bar and active navigation highlights.
  - **Animated Stat Counters**: Incremental counter metrics for completed projects, happy clients, and engineers.
  - **Smooth Animations**: Scroll-triggered animations via AOS (Animate On Scroll).
  - **Touch Carousel**: Testimonial slider implemented with Swiper 11.
  - **Desktop Custom Cursor**: Smooth dual-ring cursor tracking with trailing lag.
- **Business Operations & Lead Generation**:
  - **Inquiry & Direct Email Handler**: Automated mailto routing fallback for enterprise requests.
  - **Smart UPI Payment Block**: Instant UPI deep-link routing (`upi://pay`) and QR placeholder with zero payment gateway commission overhead.
  - **Google Maps Integration**: Responsive map embed centered on Argora, Ranchi.
  - **SEO & Schema Markup**: Integrated Schema.org `LocalBusiness` JSON-LD for local search optimization in Ranchi.
- **Backend & Cloud Ready**:
  - Express.js static file server serving all HTML, CSS, and JS assets.
  - `/api/health` endpoint for uptime and container health checks.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend UI** | HTML5, Tailwind CSS (v4 Browser Runtime), Custom CSS (`style.css`) |
| **Typography & Icons**| Google Fonts (*Plus Jakarta Sans*, *Segoe UI*), Font Awesome 6.4.0 |
| **Client-Side Libraries** | Typed.js (v2.0.12), Swiper (v11), AOS (v2.3.1) |
| **Backend Runtime** | Node.js (ES Modules), Express.js (v4.21.2) |
| **Environment** | Cloud Run sandboxed container (port 3000 via Nginx proxy) |

---

## 📁 Repository Structure

```text
├── about.html          # Dedicated Hindi About Us page
├── contact.html        # Dedicated Hindi Contact & UPI Payment page
├── index.html          # Main English dark-mode landing portal
├── services.html       # Dedicated Hindi Services catalog
├── script.js           # Client-side UI behaviors and event handlers
├── style.css           # Custom styles, animations, and cursor effects
├── server.js           # Node.js Express static server & health endpoint
├── package.json        # Project metadata and dependencies
├── metadata.json       # AI Studio application metadata configuration
├── .env.example        # Environment variable declaration template
├── docs/               # In-depth architectural and setup guides
│   ├── SETUP.md        # Detailed setup & execution guide
│   └── API.md          # REST API & endpoints documentation
├── ARCHITECTURE.md     # Full architectural specification
├── AGENTS.md           # AI Agent guidelines and project constraints
├── CONTRIBUTING.md     # Contribution guidelines
├── SECURITY.md         # Security policy and disclosure guidelines
└── CHANGELOG.md        # Release version history
```

---

## 🚀 Quick Start & Setup

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm** (or **bun** / **yarn**)

### 1. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 2. Run Development Server
Start the Express server on port 3000:
```bash
npm run dev
# or
npm start
```
The server will start listening at `http://0.0.0.0:3000`.

### 3. Build & Deployment
For production containers or static site generation:
```bash
npm run build
```

---

## 🌐 Routes & Endpoints

| Route | Type | Description |
| :--- | :--- | :--- |
| `/` | Page (HTML) | Main English landing portal (`index.html`) |
| `/about.html` | Page (HTML) | Dedicated About page (Hindi) |
| `/services.html` | Page (HTML) | Dedicated Services catalog (Hindi) |
| `/contact.html` | Page (HTML) | Contact & Direct UPI payment page (Hindi) |
| `/api/health` | REST API (JSON) | Service health check (`{"status": "ok"}`) |

---

## 📄 License & Attribution

- **Author**: Gahonsh Freelancing
- **Target Organization**: Secure System Solution, Argora, Ranchi, Jharkhand
- **Copyright**: © 2026 Secure System Solution. All rights reserved.
