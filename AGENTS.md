# AGENTS.md

> Standard Operating Guidelines, Constraints, and Directives for AI Coding Agents working on the **Secure System Solution** codebase.

---

## 🎯 1. Core Operating Directives & User Intent

1. **Strict Respect for User Intent**:
   - Build exactly what the user specifies. Treat user requests as the ceiling of functional scope.
   - Do NOT add unsolicited features, databases, backend microservices, or complex state engines unless explicitly requested.
   - Execute with craftsmanship: clean typography, verified styling, accurate event listeners, and correct semantic HTML.

2. **Scope Discipline**:
   - **Simple Requests**: For focused tasks (e.g. updating phone number, fixing layout, adjusting text), make surgical changes to existing files without rewriting unrelated modules.
   - **Full-Stack Enhancements**: If the user asks for backend persistence (e.g. dynamic quotes, contact message storing, admin portal), follow the full-stack architecture with server-side routes (`/api/*`) before connecting databases.

---

## 🧱 2. Codebase & Architectural Constraints

1. **Runtime & Module System**:
   - Project is configured as an ES Module (`"type": "module"` in `package.json`).
   - All server-side files use ES `import` / `export` syntax (e.g., `import express from 'express';`).
   - Server runs on **Port 3000** binding to `0.0.0.0`. Port 3000 is required by the container reverse-proxy.

2. **Frontend Constraints**:
   - HTML files use standard Tailwind CSS utility classes and custom classes in `style.css`.
   - JavaScript interactions in `script.js` must handle potential `null` DOM elements gracefully (using `if (elem)` checks).
   - Ensure all interactive buttons, forms, and toggles have working event handlers or meaningful fallbacks (e.g. mailto, UPI scheme).

3. **No Unsolicited Dependencies**:
   - Do NOT install or import random packages or heavy state managers unless explicitly needed for a requested feature.
   - Check `package.json` before introducing any new dependency.

---

## 🛡️ 3. Security & Environment Standards

1. **Environment Variables**:
   - Never commit secret tokens or credentials directly into code or `.env.example`.
   - If adding a new environment variable, declare its empty key name in `.env.example`.
   - Access secrets server-side via `process.env.VARIABLE_NAME`.

2. **API Keys**:
   - Any external API key (e.g., Gemini, SMS Gateway, Email Provider) must remain strictly server-side inside `/api/*` Express endpoints.
   - Never expose API secrets to browser client-side JavaScript.

3. **User Data & Sanitation**:
   - Sanitize all user inputs before logging or storing.
   - Prevent XSS vulnerabilities when updating innerHTML dynamically in `script.js`.

---

## 🧪 4. Testing & Verification Workflow

1. **Verification Order**:
   - Small edits: Run `lint_applet` to check for syntax and linting issues.
   - Final review: Run `compile_applet` to verify that `npm run build` succeeds and the project builds cleanly.
2. **Failure Recovery Protocol**:
   - If a build fails, analyze the error output directly.
   - Apply targeted fixes rather than reverting entire files indiscriminately.
   - If missing packages cause build errors, install them via `install_applet_package` or `install_applet_dependencies`.

---

## 📋 5. Coding Conventions

- **JavaScript/TypeScript**:
  - Prefer clear function naming and descriptive variable names.
  - Keep functions focused and modular.
  - Maintain event delegation and event listener cleanups where relevant.
- **HTML/CSS**:
  - Maintain semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
  - Keep accessibility in mind (WCAG AA contrast, `aria-*` tags for interactive components, `alt` text for images).
  - Use mathematical spacing consistency across Tailwind classes.
