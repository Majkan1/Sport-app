# Sport App

Sports league browser built with Next.js, TypeScript, and Tailwind CSS. The app lets users search leagues from around the world, open dedicated league pages, and explore data fetched from a public sports API .

## Live Demo

[sport-app-majkan.vercel.app](https://sport-app-majkan.vercel.app/)

## Photo
<img width="1443" height="774" alt="image" src="https://github.com/user-attachments/assets/e4ad300d-74b2-455a-95fe-46cb730d0f28" />

## Highlights

- Search leagues in real time from a large global dataset
- Open league details with dynamic routing
- Handle loading, error, and not-found states for a smoother UX
- Use typed API models to keep data handling predictable
- Deploy the project on Vercel

## Tech Stack

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- TheSportsDB API
- Vercel

## What I Practiced

- Building with the Next.js App Router
- Working with dynamic routes and server-rendered data
- Creating better UX with dedicated loading and error states
- Structuring a small TypeScript project around reusable UI components

## Challenges

- Mapping external API responses into safe TypeScript types
- Keeping the search experience fast and clear
- Designing a detail page that still reads well when league data varies

## Future Improvements

- Add favourites saved in localStorage
- Improve the league details layout with stronger visual hierarchy
- Add filters by country or sport
- Add tests for key components and data handling

## Getting Started

```bash
git clone https://github.com/Majkan1/Sport-app.git
cd Sport-app/my-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```text
my-app/
  src/
    app/
      components/      Reusable UI such as navbar, search, and footer
      leagues/[id]/    Dynamic league detail pages
      error.tsx        Global error UI
      loading.tsx      Global loading UI
      not-found.tsx    Custom 404 page
      types/           Shared TypeScript interfaces
      page.tsx         The main page 
```

## Notes

This project is still being improved. A strong next step is moving the app from the `my-app` subfolder to the repository root and expanding the feature set with user-facing improvements such as favourites and filters.
