# 🤖 AI Mock Interviewer  
### *Master your next interview with GPT-4o-mini*

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o--mini-41AD9F?style=for-the-badge&logo=openai)](https://openai.com/)
[![Clerk](https://img.shields.io/badge/Clerk-Authentication-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com/)
[![Convex](https://img.shields.io/badge/Backend-Convex-EEAB47?style=for-the-badge&logo=convex)](https://www.convex.dev/)
[![n8n](https://img.shields.io/badge/Automation-n8n-FF6D5A?style=for-the-badge&logo=n8n)](https://n8n.io/)
[![Arcjet](https://img.shields.io/badge/Security-Arcjet-5C4EE5?style=for-the-badge&logo=arcjet)](https://arcjet.com/)

---

## 🌟 Overview

**AI Mock Interviewer** is a modern AI-powered platform designed to bridge the gap between preparation and performance. By leveraging **OpenAI's GPT-4o-mini**, the app provides a realistic interview experience with instant, actionable feedback.

---

## 🚀 Key Features

### 🧠 Advanced AI Interaction
* **GPT-4o-mini Intelligence:** Real-time, context-aware interview simulations that feel like talking to a human recruiter.
* **Dynamic Follow-ups:** The AI doesn't just read a list; it asks follow-up questions based on your specific answers.

### 📊 Comprehensive Evaluation
* **Instant Scorecards:** Get a detailed performance breakdown immediately after finishing your session.
* **Actionable Feedback:** Specific advice on how to improve your technical accuracy, communication style, and confidence.

### 🔐 Enterprise-Grade Infrastructure
* **Secure Authentication:** Seamless and safe sign-ins powered by **Clerk**.
* **Smart Rate Limiting:** Using **Arcjet** to ensure fair usage and protect against API abuse.
* **Real-time Persistence:** Your interview history and progress are saved instantly via **Convex**.

### ⚙️ Workflow Automation
* **n8n Integration:** Automated background processes for data handling and advanced post-interview workflows.

## 🛠️ Tech Stack

The "AI Mock Interviewer" is built with a modern, high-performance stack designed for real-time interactions and enterprise-grade security.

| Layer | Stack | Description |
| :--- | :--- | :--- |
| **Frontend** | [![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org/) | Core framework using the **App Router** for optimized routing and SSR. |
| **UI Library** | [![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/) | Powering the interactive interview interface with high-performance hooks. |
| **AI Brain** | [![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o--mini-41AD9F?style=flat-square&logo=openai&logoColor=white)](https://openai.com/) | Generating intelligent, role-specific interview questions and real-time feedback. |
| **Auth** | [![Clerk](https://img.shields.io/badge/Clerk-Authentication-6C47FF?style=flat-square&logo=clerk&logoColor=white)](https://clerk.com/) | Managing secure user sessions and social logins seamlessly. |
| **Backend** | [![Convex](https://img.shields.io/badge/Convex-Database-EEAB47?style=flat-square&logo=convex&logoColor=white)](https://www.convex.dev/) | Real-time database and serverless functions for instant data syncing. |
| **Automation** | [![n8n](https://img.shields.io/badge/n8n-Workflow-FF6D5A?style=flat-square&logo=n8n&logoColor=white)](https://n8n.io/) | Orchestrating complex background workflows and data processing. |
| **Security** | [![Arcjet](https://img.shields.io/badge/Arcjet-Security-5C4EE5?style=flat-square&logo=arcjet&logoColor=white)](https://arcjet.com/) | Protecting the API from bots and managing rate limits for cost-control. |

---

## ⚙️ Setup Instructions

1. **Clone the repo:**
   ```bash
   git clone https://github.com/ishurana001/Interviewer-AI-Ongoing
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure Environment Variables:**
   ```bash
   OPENAI_API_KEY=your_key_here
   CONVEX_DEPLOYMENT=your_deployment_id
   NEXT_PUBLIC_CONVEX_URL=your_convex_url
   ARCJET_KEY=your_arcjet_key
   ```
4. **Run locally:**
   ```bash
   npm run dev
   ```
