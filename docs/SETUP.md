# Setup & Deployment Guide

> Step-by-step instructions for running, testing, and deploying **Secure System Solution**.

---

## 💻 1. Local Development Setup

### System Prerequisites
- **Node.js**: v18.x or v20.x
- **npm**: v9+ (or **bun**)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run the Server
```bash
npm run dev
```
The server will bind to `0.0.0.0:3000`. You can access:
- English Portal: `http://localhost:3000/`
- About Page: `http://localhost:3000/about.html`
- Services Page: `http://localhost:3000/services.html`
- Contact & Pay: `http://localhost:3000/contact.html`
- API Health: `http://localhost:3000/api/health`

---

## 🧪 2. Verification & Linting

### Compile Verification
```bash
npm run build
```
Confirms the static assets are ready for distribution.

### Production Start
```bash
npm start
```

---

## 🐳 3. Container & Cloud Deployment

### Container Ports & Proxy
The application listens on port `3000` via Express:
```javascript
const PORT = 3000;
const HOST = '0.0.0.0';
```
In Google Cloud Run or Dockerized environments, port `3000` is exposed through the reverse-proxy layer.
