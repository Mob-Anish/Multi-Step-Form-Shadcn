# Multi-Step User Setup Form

## Overview
This project implements a simple 2-step user setup form built with React.  
It demonstrates structured state management, clean component separation, and basic client-side validation using local state only.

---

## Tech Stack
- React (Vite + TypeScript)
- Tailwind CSS
- shadcn/ui
- Local component state

---

## Setup Instructions

1. Clone the repository

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:5173
   ```

---

## Trade-offs

I chose to manage form state using local React state and a custom hook instead of introducing a form library or global state management. For a small two-step form, this keeps the implementation simple, predictable, and easy to understand.

If the form were to scale (additional steps, complex validation rules, API error handling, or cross-page usage), I would consider introducing schema validation and a dedicated form management library to improve scalability and maintainability.

---
