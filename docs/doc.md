# Task: Build a Kanban Project Board in React

**Working name:** `Flowboard` (the intern can propose a better one)
**Audience:** Frontend / React development intern
**Estimated duration:** 4–5 weeks
**Mentor / reviewer:** Team lead

---

## 1. Goal

Build a polished, production-style **Kanban board web app** (Trello/Linear-like) in React. A user should be able to create boards, organize cards into columns with drag and drop, filter and search, and have the app feel instant even on a slow connection.

This task is about **real-world React skills**: state management, data fetching and caching, performance, accessibility, testing, and clean component architecture. The visual polish matters, but the engineering matters more.

### Example of the target user experience

- Open the app and see a list of boards; open one and see columns (To Do / In Progress / Done)
- Drag a card to another column and the UI updates immediately (optimistic update), then syncs with the server
- If the server call fails, the card smoothly returns to its old place and an error toast appears with a "Retry" action
- Press `/` to focus search, `n` to create a new card, `?` to see all shortcuts
- Switch to dark mode or to Persian (RTL) and the whole layout mirrors correctly

---

## 2. Requirements & Constraints

- **React 18+** with **TypeScript** (strict mode on). No `any` unless justified in a comment ✅
- Functional components and hooks only (no class components) ✅
- **Vite** as the build tool ✅
- Routing with **React Router**
- Server state with **TanStack Query** (React Query). Client/UI state with **Zustand** or React Context. Justify your choice in the README
- Styling: **Tailwind CSS** or CSS Modules (pick one and stay consistent). No heavy UI kit (no MUI/Ant); build your own base components ✅
- Drag and drop: **dnd-kit** (recommended) or `@hello-pangea/dnd`
- Forms: **React Hook Form** + **Zod** validation
- Mock backend: **MSW (Mock Service Worker)** or `json-server`, with realistic latency and random failures (to test error handling)
- **ESLint + Prettier** (strict rules), **Vitest + React Testing Library**, and at least a few **Playwright** end-to-end tests
- Every dependency must be justified in the README

---

## 3. Core Features (Must Have)

### 3.1 Boards
- Boards list page: create, rename, delete (with confirmation), and star/favorite boards
- Each board has a title, color/theme, and created date
- Empty states with helpful illustrations/text (no blank screens)

### 3.2 Columns & cards
- Create, rename, reorder, and delete columns
- Create, edit, and delete cards
- Card fields: title, description (markdown support), labels, priority (low/medium/high), due date, assignee, checklist
- Card detail opens in a **modal or side panel** with a **URL route** (e.g. `/boards/12/cards/48`), so links are shareable and the back button works
- Column card counts and optional **WIP limit** per column (warn visually when exceeded)

### 3.3 Drag and drop
- Reorder cards within a column and move them between columns
- Reorder columns
- Smooth animations and a drag overlay/placeholder
- **Keyboard-accessible** dragging (space to pick up, arrows to move, space to drop) with screen-reader announcements
- Works on touch devices

### 3.4 Optimistic updates & server sync
- All mutations update the UI immediately, then sync
- On failure: roll back, show an error toast with **Retry**
- Handle ordering robustly (use fractional indexing or a position field; explain your approach in the README)
- Loading states with **skeletons**, not spinners everywhere

### 3.5 Search, filter, and sort
- Global search by title/description with debouncing
- Filter by label, assignee, priority, and due date (overdue / this week / none)
- Filter state is stored in the **URL query string**, so a filtered view can be shared
- Matching text highlighted in results

### 3.6 Data layer
- A typed API client layer (separate from components) with consistent error handling
- Query keys organized in a single factory file
- Proper cache invalidation and background refetching
- Request cancellation for stale searches

### 3.7 Responsive, accessible UI
- Fully responsive: mobile (single column swipe/scroll), tablet, desktop
- Semantic HTML, correct ARIA roles, visible focus states, trap focus inside modals
- Color contrast meets **WCAG AA**
- Lighthouse accessibility score ≥ 90

### 3.8 Theming & internationalization
- **Light / dark mode** (respect system preference, remember the choice)
- i18n with **react-i18next**: English and **Persian (fa)** with full **RTL layout support** (use logical CSS properties like `margin-inline-start`, not left/right)
- Dates/numbers formatted per locale (use `Intl`). Optional: Jalali calendar for Persian

### 3.9 Error handling & resilience
- Global **Error Boundary** with a friendly fallback and "Reload" action
- 404 page and "board not found" state
- Offline indicator banner when the network drops

### 3.10 Tooling & quality
- Path aliases (`@/components/...`)
- Absolute minimum folder discipline (see section 5)
- Pre-commit hooks (Husky + lint-staged) running lint, type check, and affected tests
- CI pipeline (GitHub Actions): lint, typecheck, unit tests, build

---

## 4. Cool Extras (Nice to Have: pick as many as time allows)

Pick in priority order; each is a bonus, not a requirement.

1. **Command palette** (`Ctrl/Cmd + K`) to search boards/cards and run actions (create card, switch theme, switch language)
2. **Keyboard shortcuts system** with a help dialog (`?`) and a reusable `useHotkeys` hook
3. **Undo / redo** for moves and deletes (with an "Undo" toast, Gmail-style)
4. **Activity log** per card/board ("Ali moved this card to Done, 2 min ago")
5. **Real-time collaboration simulation**: a fake WebSocket/BroadcastChannel so changes in one browser tab appear in another, plus presence avatars
6. **Offline support**: persist the query cache to IndexedDB, queue mutations while offline and replay when back online (PWA installable)
7. **Virtualized lists** (`@tanstack/react-virtual`) for columns with 1000+ cards, with a performance comparison in the docs
8. **Import / export** boards as JSON and CSV
9. **Charts view**: burndown / cards-per-status dashboard (Recharts or similar)
10. **Storybook** for the base component library, with accessibility checks
11. **Animations** with Framer Motion (layout animations on card reorder, respecting `prefers-reduced-motion`)

---

## 5. Suggested Architecture

```
flowboard/
├── src/
│   ├── app/              # App shell, providers, router, error boundary
│   ├── features/
│   │   ├── boards/       # components, hooks, api, types, tests
│   │   ├── columns/
│   │   ├── cards/
│   │   └── filters/
│   ├── components/ui/    # Button, Modal, Dropdown, Toast, Skeleton, Avatar...
│   ├── hooks/            # useDebounce, useHotkeys, useMediaQuery...
│   ├── lib/              # api client, query client, utils, i18n setup
│   ├── mocks/            # MSW handlers + seed data
│   ├── locales/          # en.json, fa.json
│   ├── styles/
│   └── main.tsx
├── e2e/                  # Playwright tests
├── docs/
├── .github/workflows/
└── README.md
```

> The structure is a suggestion (feature-based folders are strongly recommended). If you change it, explain why in the PR.

---

## 6. Milestones

| Week | Milestone | Deliverables |
|------|-----------|--------------|
| 1 | Foundation | Vite + TS setup, linting, CI, routing, base UI components (Button, Modal, Toast, Skeleton), mock API with MSW, boards list page |
| 2 | Core board | Columns and cards CRUD, card detail route/modal, TanStack Query setup, forms + validation |
| 3 | Interactions | Drag and drop (mouse, touch, keyboard), optimistic updates with rollback, search/filter/sort with URL state |
| 4 | Quality & polish | Dark mode, i18n + RTL, responsive layout, accessibility pass, error boundary, offline banner, unit tests |
| 5 | Finish | Chosen extras, Playwright E2E tests, performance profiling, docs, final review |

Short **weekly demo** (15 min) with the team lead at the end of each week.

---

## 7. Demo Scenario (Required Deliverable)

The app must ship with seed data and be demonstrable through this script:

1. Open the boards list, create a new board, and star it
2. Add three columns and a dozen cards with labels, priorities, and due dates
3. Drag cards between columns using mouse, then using keyboard only
4. Trigger a simulated server failure and show the rollback + Retry toast
5. Filter by label + assignee, copy the URL, open it in a new tab, and see the same filtered view
6. Open a card via direct URL and use the browser back button to close it
7. Switch to dark mode and to Persian (RTL) and show that nothing breaks
8. Resize to mobile width and use the board comfortably

---


