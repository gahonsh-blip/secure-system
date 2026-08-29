# Contributing Guidelines

Thank you for your interest in contributing to **Secure System Solution**! Follow these guidelines to ensure consistency and code quality.

---

## 🛠️ Development Workflow

1. **Clone the Repository**:
   ```bash
   git clone <repository_url>
   cd secure-system
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Local Development**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your web browser.

---

## 📝 Code Standards

### 1. HTML & Accessibility
- Use semantic HTML tags (`<nav>`, `<header>`, `<main>`, `<section>`, `<footer>`).
- Ensure all interactive elements have readable text labels or `aria-label` attributes.
- Maintain high contrast between text and backgrounds (WCAG AA standard).

### 2. Styling (Tailwind & CSS)
- Favor Tailwind utility classes for consistent spacing and color tokens.
- Restrict custom styles to `style.css` for unique animations or global utilities.
- Do not use arbitrary or conflicting inline styles.

### 3. JavaScript
- Write clean, modular ES6+ JavaScript.
- Always check DOM element existence (`if (element) { ... }`) before attaching listeners or mutating attributes.
- Avoid introducing heavy third-party dependencies when native DOM solutions suffice.

---

## 🚀 Submitting Changes

1. Create a descriptive feature branch (`feature/service-card-update` or `fix/mobile-nav`).
2. Verify all pages (`index.html`, `about.html`, `services.html`, `contact.html`) render without console errors.
3. Test `npm run build` and ensure the server boots smoothly via `npm start`.
4. Open a clean, well-documented Pull Request describing the visual and functional changes.
