# SportsApp

SportsApp is a lightweight football leagues browser built with Next.js, TypeScript and Tailwind CSS. Browse leagues and teams, open detail pages, and follow links to official team websites and social media. Data is provided by TheSportsDB API.

## Live demo

[https://sport-app-majkan.vercel.app](https://sport-app-majkan.vercel.app)

## Key features

- Browse leagues and teams with dynamic routing
- Team pages with logo, stadium and social links
- Graceful loading, error and not-found states
- TypeScript models for safer data handling

## Tech stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- TheSportsDB (data provider)

## Getting started (local)

1. Clone the repo:

```bash
git clone https://github.com/Majkan1/Sport-app.git
cd Next.js
```

2. Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Project structure (important parts)

```
src/
  app/
    about/page.tsx        # About page
    leagues/[leagueId]/  # League and teams routes
    components/          # Reusable UI components
    lib/                  # API helpers
    types/                # TypeScript interfaces
```

## Contributing

Contributions are welcome. Typical workflow:

1. Create a branch: `git checkout -b feat/your-feature`
2. Implement changes and add tests where appropriate
3. Push and open a pull request

Please keep commits focused and add a short description in the PR.

## Roadmap / Ideas

- Add favourites persisted in localStorage
- Filters by country or competition type
- Unit and integration tests for key components
- Improve accessibility and mobile layout

## License

This project is MIT-licensed — feel free to reuse and adapt.

---
