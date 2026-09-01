# Sampath Srinivas — Personal Portfolio

[![Production Build](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![React Version](https://img.shields.io/badge/React-18.3-blue.svg)](https://react.dev/)
[![TypeScript Version](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

Personal portfolio of **T S Sampath Srinivas Maddi** — Computer Science Undergraduate and Full-Stack Software Developer.

The portfolio showcases real-world software engineering across **Full-Stack development**, **Backend engineering**, **Distributed event-driven systems (Kafka, Saga, Outbox, PostgreSQL row locking)**, and **AI-powered products**.

---

## 🌟 Highlights

- **Full-Stack & Backend Engineering**: Designing robust RESTful APIs, type-safe database schemas, JWT/Firebase authentication, and reusable frontend systems in React.js and Node.js.
- **Distributed Systems**: Microservice architectures, event-driven streaming with Apache Kafka, asynchronous Saga choreography, and Transactional Outbox consistency.
- **Data & Concurrency Safety**: High-concurrency database transactions utilizing PostgreSQL pessimistic row locks (`SELECT ... FOR UPDATE`) and Redis Sorted Sets for sub-millisecond velocity tracking.
- **AI & GenAI Workflows**: Integrating LLMs, prompt engineering, automated resume parsing, and scenario simulation.
- **Production Grounded**: Built with strictly authentic metrics verified against source-of-truth codebases and academic coursework (VIT-AP CSE, 8.91 CGPA).

---

## 🛡️ Featured Project — FraudShield

### **Production Real-Time Fraud Detection & Digital Banking Platform**

* **Repository**: [https://github.com/mtsssrinivas/FraudShield](https://github.com/mtsssrinivas/FraudShield)
* **Live Web Console**: [https://fraud-shield-frontend-opal.vercel.app](https://fraud-shield-frontend-opal.vercel.app)
* **Live Edge Gateway**: [https://fraudshield-gateway.onrender.com](https://fraudshield-gateway.onrender.com)
* **Tech Stack**: `TypeScript` • `Node.js` • `Express.js` • `Apache Kafka` • `PostgreSQL 16` • `Redis 7` • `React 18` • `Docker`

### Core Architectural Features:
1. **8 Decoupled Microservices**: API Gateway, Auth Service, Account Service, Transaction Service, Fraud Engine, Payment Service, Notification Service, and Audit Log Service.
2. **Distributed Choreography Saga**: Transfers execute asynchronously across services with automated compensation rollbacks if downstream payment gateways decline.
3. **Transactional Outbox Pattern**: Eliminates dual-write inconsistencies between PostgreSQL database writes and Kafka event emissions by staging messages atomically in `outbox_events`.
4. **6-Link Chain of Responsibility Fraud Engine**: Evaluates Velocity (+35), Large Amount (+40), Balance Drain (+30), New Device (+25), New Location (+30), and Suspicious Frequency (+25). Bypasses subsequent rules at critical threshold $\ge 81$ (**1.52× measured speedup, 0.0015ms latency**).
5. **PostgreSQL Concurrency Protection**: `SELECT ... FOR UPDATE` row-level locks guarantee zero double-spends and prevent race conditions during high concurrent traffic.
6. **Kafka Resilience & DLQ**: Exponential retry backoff $(100\text{ms} \rightarrow 200\text{ms} \rightarrow 400\text{ms})$ routing poison pills to a Dead Letter Queue without halting consumer groups.
7. **Performance Benchmarks (Load Tested)**: `371,788.7 RPS Peak Throughput`, `7.38ms p95 Latency`, `0.00% Error Rate`, `80.0% Burst Traffic Deflected` via Redis 2-tier rate limiting.

---

## 🚀 Projects Showcase

| Project | Description | Tech Stack |
| :--- | :--- | :--- |
| **01. FraudShield** *(Featured)* | Real-time fraud mitigation & distributed banking platform with 8 microservices & 7 Kafka streams. | TypeScript, Node.js, Express, Kafka, PostgreSQL, Redis, React 18, Docker |
| **02. InterviewIQ** | AI-powered mock interview platform with automated resume parsing and grading feedback. | React.js, Node.js, Express, MongoDB Atlas, Firebase, OpenRouter API, Razorpay |
| **03. Nestora** | Full-stack rental marketplace supporting property listings, bookings, reviews, and wishlists. | React.js, Node.js, Express, MongoDB, JWT, Cloudinary, Tailwind CSS |
| **04. ProjectFlow** | Collaborative project management workspace with sprint planning, task boards, and relational schemas. | React.js, Node.js, Express, PostgreSQL, Prisma ORM, JWT, Tailwind CSS |

---

## 🛠️ Technology Stack

* **Frontend**: React 18, TypeScript, Tailwind CSS, Framer Motion, Lucide React, Vite
* **Backend**: Node.js, Express.js, TypeScript, RESTful APIs
* **Databases & Cache**: PostgreSQL, MongoDB, MySQL, Redis
* **Distributed Systems**: Apache Kafka (7 Partitioned Topics, Consumer Groups, DLQ)
* **Cloud & Tools**: Git, GitHub, Docker, Postman, Prisma ORM, Firebase, Cloudinary, Render, Vercel

---

## 💻 Local Development & Installation

### Prerequisites
* **Node.js**: $\ge 18.0.0$
* **npm**: $\ge 9.0.0$

### 1. Clone the repository
```bash
git clone https://github.com/mtsssrinivas/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start local development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

* `npm run dev` — Starts the Vite development server with Hot Module Replacement (HMR).
* `npm run build` — Runs the TypeScript type-checker (`tsc`) and builds the optimized production bundle in `/dist`.
* `npm run preview` — Locally previews the generated production build.

---

## 🚀 Deployment

### Deploying to Vercel (Recommended)
1. Push this repository to GitHub: `https://github.com/mtsssrinivas/portfolio`.
2. Import the project into your [Vercel Dashboard](https://vercel.com).
3. Vercel automatically detects the Vite preset:
   * **Framework Preset**: `Vite`
   * **Build Command**: `npm run build`
   * **Output Directory**: `dist`
4. Click **Deploy**.

---

## 📄 License & Author

* **Author**: T S Sampath Srinivas Maddi
* **LinkedIn**: [https://www.linkedin.com/in/mtsssrinivas/](https://www.linkedin.com/in/mtsssrinivas/)
* **GitHub**: [https://github.com/mtsssrinivas](https://github.com/mtsssrinivas)
* **Email**: [madditssampathsrinivas@gmail.com](mailto:madditssampathsrinivas@gmail.com)
* **License**: Open-source under the [MIT License](LICENSE).
