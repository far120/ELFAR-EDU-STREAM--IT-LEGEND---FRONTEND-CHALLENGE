# ELFAR EDU STREAM - Online Learning Platform

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-emerald?style=for-the-badge&logo=vercel)](https://elfar-edu-stream-it-legend-frontend.vercel.app/)

> 🌐 **Live URL:** [https://elfar-edu-stream-it-legend-frontend.vercel.app](https://elfar-edu-stream-it-legend-frontend.vercel.app/)

A modern, interactive e-learning web application built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed to deliver a smooth and engaging course experience with video lectures, practical materials, live assessments, and gamified progress tracking.

---

## 🚀 Key Features

- **Interactive Video Player:**
  - YouTube video embedding with custom controls.
  - Sticky mini-player on mobile scroll.
  - Theater/Wide mode & fullscreen support.

- **Course Curriculum & Materials:**
  - Structured sections with collapsible accordion navigation.
  - Supports multiple lesson types: Video, Overview, PDF, Quiz, and Practical Exercises.
  - Integrated PDF viewer popup with direct preview, open in new tab, and download support.

- **Live Quiz / Exam Engine:**
  - Real-time countdown timer with automated submission.
  - Interactive multiple-choice questions.
  - Instant scoring with pass/fail evaluation and dynamic progress saving.

- **Progress & Gamification:**
  - Real-time progress bar reflecting completed lectures and passed exams.
  - Contextual motivational quotes dynamically changing based on current progress percentage.
  - Community leaderboard modal showing top students and current ranking.

- **Interactive Learning Tools:**
  - "Ask a Question" modal for student inquiries and direct course discussions.
  - Clean responsive layout with dark mode support.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI & State:** React 19, TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React

---

## 💻 Getting Started

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/far120/ELFAR-EDU-STREAM--IT-LEGEND---FRONTEND-CHALLENGE.git
cd courses-task
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.


### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```text
├── app/                  # Next.js App Router (pages, layout, routing)
├── components/           # Modular React components
│   ├── UI/               # Global layout (Navbar, Footer)
│   └── courses/          # Course listing, details, and modals
│       └── CourseDetailes/
│           ├── Models/   # Modals (Exam, PDF viewer, Ask question, Leaderboard)
│           └── ...       # VideoPlayer, Curriculum, Materials, Comments
├── data/                 # Mock course data, lessons, and leaderboard
├── types/                # TypeScript interfaces & types
└── public/               # Static assets & course materials
```

---

## 👤 Author

**Mostafa Elfar**
- GitHub: [@far120](https://github.com/far120)
- LinkedIn: [Mostafa Mahmoud Elfar](https://www.linkedin.com/in/mostafa-mahmoud-elfar-6a67732b5)
