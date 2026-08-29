# System Architecture & Technical Specifications

> Architectural Overview of the **Secure System Solution** platform.

---

## 🏛️ 1. High-Level Architecture

The platform follows a lightweight **Full-Stack Node.js / Express static-serving architecture** paired with modern client-side frontend pages.

```
┌────────────────────────────────────────────────────────┐
│                   Browser / Client                     │
│  ┌──────────────┬──────────────┬──────────────┐        │
│  │  index.html  │  about.html  │ contact.html │        │
│  │ (Main Dark)  │ (Hindi Info) │ (Hindi / UPI)│        │
│  └──────┬───────┴──────┬───────┴──────┬───────┘        │
│         │              │              │                │
│         ▼              ▼              ▼                │
│  ┌────────────────────────────────────────────┐        │
│  │          script.js & style.css             │        │
│  │ (AOS, Swiper, Typed.js, Counters, Form)   │        │
│  └─────────────────────┬──────────────────────┘        │
└────────────────────────┼───────────────────────────────┘
                         │ HTTP Requests (Static / API)
                         ▼
┌────────────────────────────────────────────────────────┐
│               Node.js Express Server                   │
│                    (server.js)                         │
│  ┌────────────────────────────────────────────┐        │
│  │ express.static(__dirname)                  │        │
│  │ GET /             -> index.html            │        │
│  │ GET /api/health   -> { status: "ok" }      │        │
│  └────────────────────────────────────────────┘        │
│                Listening on 0.0.0.0:3000               │
└────────────────────────────────────────────────────────┘
```

---

## 📂 2. File & Directory Layout

```text
/
├── index.html          # Primary landing page (English, dark mode, rich interactive UI)
├── about.html          # Secondary page (Hindi, light theme, detailed corporate background)
├── services.html       # Secondary page (Hindi, light theme, 6 structured service offerings)
├── contact.html        # Secondary page (Hindi, light theme, contact info, QR & UPI pay)
├── script.js           # Client-side controller script (DOM events, animations, form logic)
├── style.css           # Custom CSS rules (cursor follower, float animations, scroll tracker)
├── server.js           # Express.js server providing routing and static file delivery
├── package.json        # Node.js project manifest and dependency declarations
├── metadata.json       # App configuration for Google AI Studio Cloud Run runtime
├── .env.example        # Environment variable specification file
├── docs/               # Technical documentation directory
│   ├── SETUP.md        # Local environment & container deployment steps
│   └── API.md          # API endpoint specifications
├── README.md           # Primary user and developer overview
├── AGENTS.md           # AI coding assistant operating rules
├── ARCHITECTURE.md     # This architecture specification document
├── CONTRIBUTING.md     # Code contribution standards
├── SECURITY.md         # Security practices and vulnerability reporting
└── CHANGELOG.md        # Historical record of changes
```

---

## 🎨 3. Frontend Architecture

### 3.1 Pages Breakdown
1. **`index.html` (English Landing Portal)**:
   - **Theme**: Dark theme (`bg-[#0b1329]`, `text-slate-100`).
   - **Hero Section**: Dynamic typing text (`#typed-text`) cycling through core offerings.
   - **Stats Section**: Real-time JavaScript counting animation (`.counter` targeting 500+, 250+, 15+, 24/7).
   - **Mega Menu Dropdown**: Dual-column navigation for "Security Infrastructure" and "Enterprise IT Support".
   - **Services Grid**: 8 interactive cards with hover glow effect (`.glow-card`).
   - **Project Gallery**: Visual showcase with Unsplash imagery and dark overlays.
   - **Timeline**: 5-step operational delivery workflow.
   - **Testimonial Slider**: Swiper 11 touch-enabled carousel with auto-rotation.
   - **FAQ Accordion**: Expandable collapsible questions powered by `toggleFaq()`.
   - **Contact & Map**: Direct quotation form and interactive Google Maps iframe centered on Argora, Ranchi.
   - **SEO Metadata**: Full Open Graph tags and Schema.org `LocalBusiness` JSON-LD definition.

2. **`about.html` (Hindi About Page)**:
   - **Theme**: Clean corporate light theme (`bg-slate-50`, `text-slate-800`).
   - **Content**: Regional credibility factors (Local experts, certified team, end-to-end support).

3. **`services.html` (Hindi Services Catalog)**:
   - **Theme**: Light theme with structured 6-grid responsive service cards (CCTV, Biometric, Hardware/Laptop, Networking, Data Recovery, AMC).

4. **`contact.html` (Hindi Contact & UPI Payment)**:
   - **Theme**: Light theme.
   - **Features**: Physical address (Kathal More Road, Argora, Ranchi), phone contact, WhatsApp contact, Smart UPI QR block, direct deep-link payment button (`upi://pay?pa=8297477082@upi&pn=Secure%20System%20Solution&cu=INR`).

### 3.2 Client Scripts & Interactions (`script.js`)
- **Loader Lifecycle**: Hides `#loader` after window `load` event.
- **AOS Animation**: Initializes scroll animations with `duration: 900, once: true`.
- **Custom Cursor**: Dual-element smooth cursor tracking for desktop viewports (`> 768px`).
- **Scroll Progress & Spy**: Computes viewport scroll percentage onto `#progress-bar` and dynamically toggles active classes (`.nav-active`) based on section offsets.
- **Form Handlers**:
  - `index.html`: Contact form triggers a pre-filled `mailto:info@securesystemsolution.in` redirection.
  - `contact.html`: Form triggers native submission alert with 24-hour response confirmation.
- **Swiper Initialization**: Configures `.testimonial-swiper` with loop, auto-rotation (4500ms delay), and pagination dots.

---

## ⚙️ 4. Backend Architecture (`server.js`)

- **Server Framework**: Express.js (v4.21.2) running in ES Modules mode.
- **Port & Host**: Binds to `0.0.0.0:3000` (required for Cloud Run container routing).
- **Static Middleware**: Serves static files directly from root (`express.static(__dirname)`).
- **Default Route**: Explicit handler for `GET /` serving `index.html`.
- **Health Check**: `GET /api/health` returning JSON payload `{ "status": "ok" }`.

---

## 🔌 5. External Services & CDN Dependencies

| Provider / Asset | Purpose | Loading Mechanism |
| :--- | :--- | :--- |
| **Tailwind CSS v4** | UI Styling Framework | Browser runtime via `cdn.jsdelivr.net` |
| **Google Fonts** | Font families (*Plus Jakarta Sans*, *Segoe UI*) | Google Fonts CDN |
| **Font Awesome 6.4.0**| Vector Icons | `cdnjs.cloudflare.com` |
| **AOS (v2.3.1)** | Scroll Animations | `unpkg.com` CDN |
| **Swiper (v11)** | Carousel Slider | `cdn.jsdelivr.net` |
| **Typed.js (v2.0.12)** | Animated Text Typing | `cdnjs.cloudflare.com` |
| **Google Maps** | Argora Location Embed | Google Maps Iframe Embed |
| **Unsplash** | Portfolio Gallery Images | High-resolution image CDN |

---

## 🔒 6. Database & Authentication State

- **Database**: **None** (Current architecture is static / client-driven; no persistent database is configured).
- **Authentication**: **None** (Public-facing business informational portal with direct customer channels).

---

## ☁️ 7. Runtime & Deployment Architecture

- **Deployment Model**: Google Cloud Run sandboxed container.
- **Reverse Proxy**: Nginx layer routing all incoming external traffic to container port 3000.
- **Build Step**: `npm run build` executes static validation.
- **Startup Script**: `npm start` executes `node server.js`.
