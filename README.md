# Fit Flow 🏋️‍♂️

Fit Flow is a modern fitness and workout planning web application that helps users discover workouts, view workout details, save workouts for later, and manage their personal workout plan.

## 🚀 Technologies Used

- **Next.js** — React framework for building the application
- **TypeScript** — Type-safe JavaScript development
- **React** — Building reusable UI components
- **CSS** — Styling and responsive layouts
- **Next.js App Router** — Application routing and page structure
- **React Icons** — UI icons for buttons and actions
- **React Toasty** — alert for buttons and actions

## ✨ Key Features

### 1. 🏋️ Workout Discovery

Users can browse available workouts through the workout section. Each workout is presented with relevant information such as duration, calories, and rating.

### 2. 🔽 Sort Workouts

The workout list includes a **"Sort By"** dropdown with the following options:

- **Duration** — Default sorting option
- **Calories**
- **Rating**

The dropdown includes a chevron icon and re-sorts the current workout list based on the selected option.

### 3. 📋 My Plan

The **My Plan** page allows users to manage their planned workouts.

Each planned workout is displayed using a reusable workout card component.

### 4. ✅ Mark Workout as Done

Each workout card on the **My Plan** page includes a **"Mark as Done"** button with a check icon.

When the user clicks the button:

- The workout is marked as completed.
- A toast notification confirms the action.

### 5. ❌ Remove Workout

Each planned workout also includes a **Remove (X)** button.

When clicked:

- The workout is removed from the user's plan.
- A toast notification confirms that the workout was removed.

## 📁 Project Structure

fit-flow/
│
├── .next/
├── node_modules/
│
├── public/
│ └── assets/
│ ├── banner.png
│ └── favicon.png
│
├── src/
│ └── app/
│ │
│ ├── component/
│ │ ├── Footer/
│ │ ├── HeroSection/
│ │ └── NavBar/
│ │
│ ├── myPlan/
│ │ ├── page.tsx
│ │ └── planCard.tsx
│ │
│ ├── workout/
│ │ ├── [slug]/
│ │ │ └── page.tsx
│ │ │
│ │ ├── buttons/
│ │ │ ├── saveLater.tsx
│ │ │ └── todayPlan.tsx
│ │ │
│ │ ├── page.tsx
│ │ └── workoutCard.tsx
│ │
│ └── globals.css
│
├── package.json
└── README.md
