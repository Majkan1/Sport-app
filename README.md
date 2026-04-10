# 🏆 Sport App

A sports league browser built with Next.js 16, allowing users to search and explore leagues from around the world.

## 🔗 Live Demo

[sport-app-majkan.vercel.app](https://sport-app-majkan.vercel.app/)

## ✨ Features

- Browse hundreds of sports leagues from around the world
- Search leagues by name in real time
- View individual league details via dynamic routing
- Loading and error boundaries for better UX

## 🛠️ Tech Stack

- **Next.js 16** — App Router, Server Components, dynamic routing
- **TypeScript** — fully typed codebase
- **Tailwind CSS** — utility-first styling
- **TheSportsDB API** — free public sports data

## 🚀 Getting Started

```bash
git clone https://github.com/Majkan1/Sport-app.git
cd Sport-app/my-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/app/
├── components/        # SearchWrapper, SearchBar, Navbar, Footer
├── leagues/[id]/      # Dynamic league detail pages
├── types/             # Shared TypeScript interfaces
├── loading.tsx        # Global loading UI
├── error.tsx          # Global error boundary
└── not-found.tsx      # 404 page
```
