# Flowboard

> A fast, accessible, and internationalized Kanban project board built with React 18, TypeScript, and TanStack Query.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

<!-- TODO: add a 10–20s GIF or a link to a short Loom/YouTube walkthrough here -->

---

## Overview

Flowboard is a production-style Kanban board (Trello/Linear-like) where users can:

- Create boards and organize cards into reorderable columns
- Drag and drop cards between columns with **optimistic updates** and automatic rollback on failure
- Search, filter, and share filtered views via URL
- Use the app fully **by keyboard**, on **touch devices**, in **dark mode**, and in **English or Persian (RTL)**

The project's goal is not visual novelty but **engineering depth**: a typed data layer, consistent caching, resilient error handling, and a component architecture that scales.

<!-- TODO: replace with your own one-paragraph description and what you learned -->

---

## Demo

- **Live demo:** <!-- TODO: Vercel/Netlify link -->
- **Demo video (required deliverable):** <!-- TODO: link -->

### Required demo scenario (in progress)

- [ ] Create a board and star it
- [ ] Add three columns and a dozen cards with labels, priorities, and due dates
- [ ] Drag cards between columns using the mouse, then using the keyboard only
- [ ] Trigger a simulated server failure → rollback + Retry toast
- [ ] Filter by label + assignee, copy the URL, open it in a new tab → same filtered view
- [ ] Open a card via direct URL, close it with the browser back button
- [ ] Switch to dark mode and Persian (RTL) without layout breakage
- [ ] Use the board comfortably at mobile width

---

## Features

### Core

<!-- - **Boards** — create, rename, delete (with confirmation), star/favorite; empty states for every list
- **Columns** — create, rename, reorder, delete; card counts; optional **WIP limit** with visual warning
- **Cards** — full CRUD; fields: title, markdown description, labels, priority, due date, assignee, checklist
- **Card detail as a route** — `/boards/:boardId/cards/:cardId` opens a modal/side panel; shareable and back-button friendly
- **Drag & drop** — reorder cards within a column, move between columns, reorder columns; drag overlay; **keyboard-accessible** with screen-reader announcements; works on touch
- **Optimistic updates** — all mutations apply instantly, roll back on failure with a Retry toast
- **Search & filter** — debounced global search; filter by label, assignee, priority, due date; filter state lives in the URL query string; match highlighting
- **Data layer** — typed API client, centralized query-key factory, cache invalidation, background refetch, request cancellation
- **Resilience** — global Error Boundary, 404 / "board not found" states, offline indicator banner -->

### Extras Implemented

<!-- TODO: delete the ones you didn't build, keep the ones you did -->

<!-- - [ ] Command palette (`Ctrl/Cmd + K`)
- [ ] Global keyboard shortcuts + help dialog (`?`)
- [ ] Undo/redo for moves and deletes (Undo toast)
- [ ] Activity log per card/board
- [ ] Cross-tab sync via `BroadcastChannel` + presence avatars
- [ ] Offline support (persisted query cache + queued mutations, installable PWA)
- [ ] Virtualized long columns (`@tanstack/react-virtual`)
- [ ] Import/export boards as JSON/CSV
- [ ] Burndown / cards-per-status charts
- [ ] Storybook for the base component library
- [ ] Framer Motion layout animations (respecting `prefers-reduced-motion`) -->

---

## Tech Stack & Justifications

> The task requires every dependency to be justified. This table is the source of truth.

| Dependency | Purpose | Why this one |
|---|---|---|
| **react** / **react-dom** (18+) | UI runtime | Task requirement; concurrent rendering primitives enable smoother DnD |
| **typescript** (strict) | Type safety | Catches data-shape bugs at the API boundary; `strict: true` enforced in `tsconfig.json` |
| **vite** | Build/dev server | minimal config surface |
| **zustand** | Client/UI state | Small, selector-based store; avoids re-rendering components that don't read the changed slice (e.g., the theme toggle shouldn't re-render the board). See [State Management](#state-management-server-vs-client) |
| **eslint** / **prettier** | Linting & formatting | Consistent style; strict ruleset documented in `.eslint` |
<!-- | **react-router** | Routing | Declarative nested routes are a natural fit for `/boards/:boardId/cards/:cardId`; supports the back-button requirement | -->
<!-- | **@tanstack** | Server state | Handles caching, invalidation, background refetch, and — critically — the `onMutate`/`onError`/`onSettled` hooks used for optimistic updates with rollback | -->
<!-- | **tailwindcss** | Styling | Utility-first; the `group`/`peer` variants and logical properties (`ms-*`, `me-*`) make RTL support almost free |
| **@dnd-kit/core** / **@dnd-kit/sortable** | Drag & drop | Hook-based, no reliance on HTML5 DnD; ships keyboard and touch sensors and screen-reader announcements out of the box |
| **react-hook-form** | Forms | Uncontrolled inputs → fewer re-renders; integrates cleanly with Zod |
| **zod** | Validation | Single schema → runtime validation + inferred TS types (`z.infer`) |
| **msw** | Mock backend | Intercepts real `fetch` calls at the network layer, so the app code is identical to production; supports per-request latency and random failures |
| **vitest** | Unit test runner | Native Vite integration; fast, ESM-first |
| **@testing-library/react** | Component tests | Encourages testing behavior over implementation details |
| **@playwright/test** | E2E tests | Reliable cross-browser automation for the demo scenario |
| **react-i18next** / **i18next** | i18n | Mature, supports namespaces, plurals, and locale switching at runtime |
| **husky** / **lint-staged** | Git hooks | Enforces lint + typecheck + affected tests before commit | -->


<!-- TODO: add any extra libraries you pulled in, with a one-line justification each -->

---

## Architecture

The project uses **feature-based folders**: each feature owns its components, hooks, API calls, types, and tests.


<!-- TODO: if you deviate from this structure, explain why here (the task requires it) -->


## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+ (or pnpm)

### Install & run

```bash
git clone https://github.com/USERNAME/flowboard.git
cd flowboard
npm install
npm run dev        # http://localhost:5173
```

<!-- The app ships with seeded mock data and an MSW worker — **no backend is required**. -->

### Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Vite dev server with MSW |
| `npm run build` | Type-check + production build |
| `npm run preview` | Serve the production build |
<!-- | `npm run lint` | ESLint |
| `npm run format` | Prettier write |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run test` | Vitest (unit/component) |
| `npm run test:e2e` | Playwright E2E |
| `npm run test:e2e:ui` | Playwright interactive mode | -->

<!-- ---

## Testing

| Layer | Tool | What it covers |
|---|---|---|
| Unit | Vitest | Pure logic — `reorder()`, date utils, Zod schemas, reducers |
| Component | Vitest + React Testing Library | Base components, form validation, filter controls — queried by role/label |
| E2E | Playwright | The full demo scenario: create board → add cards → drag (mouse + keyboard) → failure/rollback → filtered URL → RTL |

Run:

```bash
npm run test          # unit + component
npm run test:e2e      # Playwright
``` -->

<!-- TODO: add the current coverage number and any notable test cases once written -->


## Credits

- Visual and interaction inspiration: Trello, Linear, Plane, kaneo
- Icons: lucide-icon
- Font: **Figtree**, **Cal Sans** <!-- TODO: confirm -->


## License

MIT <!-- TODO: or your chosen license -->