# Squopz AI Coding Instructions

## Project overview
- Frontend-only Next.js app using `next@16.2.6`, React 19, TypeScript, and Tailwind CSS 4.
- Marketing homepage plus an authenticated dashboard experience.
- Firebase is used directly from the client for auth and Firestore data (`lib/firebase.ts`).
- No server-side API routes are present in this repo.

## Important commands
- `npm run dev` — start local development
- `npm run build` — build for production
- `npm run start` — run production build
- `npm run lint` — run ESLint

## Key architecture
- `app/` contains the Next.js App Router routes.
- `app/page.tsx` is the landing page.
- `app/dashboard/page.tsx` is the authenticated dashboard route and redirects unauthenticated users to `/login`.
- `app/login/page.tsx` and `app/signup/page.tsx` are client-side login/signup flows using Firebase Auth.
- `components/` contains reusable UI and dashboard widgets.
- `lib/firebase.ts` holds the Firebase initialization, auth, provider, and Firestore exports.

## Component conventions
- Many files use `'use client'` because they depend on browser-only APIs, Firebase auth, or animation.
- `@/` path alias refers to the repository root.
- Visual interaction uses `framer-motion`, `recharts`, `@react-three/fiber`, `@react-three/drei`, and `lenis`.
- The root layout wraps content with `SmoothScroll` for custom scrolling behavior.

## What to know before changing layout or routing
- The app uses the Next.js App Router; do not assume pages are in `pages/`.
- Dashboard access is gated client-side by `onAuthStateChanged(auth, ...)`.
- Firebase config is currently hard-coded into `lib/firebase.ts`.
- Auth and Firestore are accessed directly from client components like `components/Contact.tsx` and `components/dashboard/LeadsTable.tsx`.

## When editing UI or content
- Preserve the dark theme and page structure on the homepage: navbar, hero, services, about, contact, footer, chatbot.
- Dashboard pages are composed from `components/dashboard/*` and expect a 260px sidebar layout.
- Keep animations consistent with existing `framer-motion` usage.

## Notes for AI agents
- Use the codebase as authoritative; do not invent backend routes or server APIs.
- If asked to add an Ollama integration, note that there is no existing Ollama code in this repository and ask for the desired integration path or target files.
- Prefer changes in `app/`, `components/`, and `lib/firebase.ts` for feature work.

## Existing documentation
- `README.md` is a created Next.js starter README and may not reflect repository-specific behavior.
- `CLAUDE.md` simply redirects to this file.
