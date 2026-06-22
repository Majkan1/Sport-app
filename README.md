<div align="center">

# ⚽ Sport App

**A football leagues & teams browser built with the Next.js App Router.**

Browse competitions from around the world, drill into any league to see its teams,
and open a team to view its stadium, description and official links — all powered by
[TheSportsDB](https://www.thesportsdb.com/) and served with background data caching.

[![Live Demo](https://img.shields.io/badge/▲_Live_Demo-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://sport-app-majkan.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)

</div>

---

## ✨ Features

- **Browse leagues** — every league from TheSportsDB, laid out in a responsive card grid.
- **Instant search** — filter leagues as you type, fully client-side and case-insensitive.
- **Dynamic routing** — `/leagues/[leagueId]` and `/leagues/[leagueId]/teams/[teamId]` build league and team pages on demand.
- **Rich team pages** — badge, stadium, country, an expandable description (`ReadMore`) and official **website / Facebook / Instagram** links.
- **Proper UX states** — dedicated `loading`, `error` and `not-found` screens using the App Router's file conventions.
- **Cached data fetching** — responses are revalidated with ISR (`revalidate: 86400` / `3600`), so pages stay fast without serving stale data.
- **Typed end-to-end** — `League`, `Team` and API-response interfaces keep the data layer safe.
- **Accessible & responsive** — a labelled search input and a 1 → 2 → 3 column layout across breakpoints.

## 🧱 Tech stack

| Layer | Choice |
| --- | --- |
| Framework | **Next.js 16** (App Router, Server Components) |
| Language | **TypeScript** |
| UI | **React 19** + **Tailwind CSS v4** |
| Data | **TheSportsDB** REST API |
| Hosting | **Vercel** |

## 🗂️ Project structure

```
src/app/
├── page.tsx                  # Home — league list + search
├── layout.tsx                # Root layout (Navbar + Footer)
├── loading.tsx               # Global loading state
├── error.tsx                 # Error boundary
├── not-found.tsx             # 404 page
├── about/page.tsx            # About page
├── leagues/
│   └── [leagueId]/
│       ├── page.tsx          # Teams in a league
│       └── teams/
│           └── [teamId]/
│               └── page.tsx  # Single team detail
├── components/               # Navbar, Footer, SearchBar, SearchWrapper, ReadMore
├── lib/api.ts                # TheSportsDB fetch helpers
└── types/index.ts            # League / Team / API interfaces
```

## 🔌 How the data layer works

All network calls live in [`src/app/lib/api.ts`](src/app/lib/api.ts) and wrap TheSportsDB's free endpoints:

| Helper | Endpoint | Purpose |
| --- | --- | --- |
| `getAllLeagues()` | `all_leagues.php` | League list for the home page |
| `getTeamsByLeagues(id)` | `lookup_all_teams.php` | Teams inside a league |
| `getTeamsByLeague(name)` | `search_all_teams.php` | Teams by league name |
| `getPlayersByTeam(id)` | `lookup_all_players.php` | Players for a team |

Each request uses Next.js caching (`next: { revalidate }`), so data is regenerated in the background instead of re-fetched on every visit.

## 🚀 Getting started

```bash
# 1. Clone
git clone https://github.com/Majkan1/Sport-app.git
cd Sport-app

# 2. Install
npm install

# 3. Run the dev server
npm run dev
```

Open **http://localhost:3000** in your browser.

> No API key or `.env` is required — the app uses TheSportsDB's free public tier.

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## 🧭 Roadmap

- [ ] Player rosters on team pages (the `getPlayersByTeam` helper is already in place)
- [ ] Favourite leagues persisted in `localStorage`
- [ ] Filter leagues by country / sport
- [ ] Unit & component tests (Jest + Testing Library are already configured)
- [ ] Image optimisation with `next/image`

## 📄 License

Released under the [MIT License](LICENSE).

---

<div align="center">
Built by <a href="https://github.com/Majkan1">Mikołaj Michalak</a> ·
<a href="https://www.mikolajmichalak.dev">Portfolio</a> ·
<a href="https://www.linkedin.com/in/mikolaj-michalak">LinkedIn</a>
</div>
