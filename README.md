Hospital Landing Page

Overview
I built every UI component myself without using any component libraries. The goal was to keep the codebase lean, fully customizable, and consistent with the design system. Data fetching is powered by TanStack Query and a mock backend (json-server) for a smooth development experience. The site is responsive across breakpoints, with careful attention to layout, typography, and mobile interactions (drawer, menus, touch targets).

Highlights

- Handcrafted components: No UI/component libraries; custom layout, menus, drawer, cards, and interactions using Tailwind and motion.
- Data layer: TanStack Query for fetching/caching from a mock backend.
- Mock backend: json-server with `mock-backend/db.json`.
- Responsiveness: Mobile-first styles, fluid containers, and interaction patterns verified on multiple breakpoints.
- UX polish: Motion-based toasts, animated navigation/drawer, and accessible form handling with react-hook-form + zod.

Project Structure

- Frontend: `hospital-landing-page/` (Next.js App Router)
- Mock backend: `mock-backend/` (json-server + `db.json`)

Prerequisites

- Node.js 18+ and npm
- Optional: `json-server` (we use npx below, no global install required)

Step-by-step Setup

1. Start the mock backend (Terminal 1)
   From the repository root:

```bash
cd "mock-backend"
# install deps if needed (optional for json-server when using npx)
npm i

# run json-server on port 5001 (matches NEXT_PUBLIC_API_BASE_URL default)
npx json-server --watch db.json --port 5001
```

The API will be served at:

- http://localhost:5001/services
- http://localhost:5001/contact
- http://localhost:5001/sliderImages
- http://localhost:5001/messages (created on first POST from Contact form)

2. Install and run the frontend (Terminal 2)
   From the repository root:

```bash
cd "hospital-landing-page"
npm i
npm run dev
```

Visit `http://localhost:3000`

Configuration

- API base URL is set via `NEXT_PUBLIC_API_BASE_URL` (defaults to `http://localhost:5001`).
- Edit `hospital-landing-page/src/lib/apiClient.ts` to change defaults if needed.

Key Tech

- Next.js (App Router)
- TanStack Query
- Tailwind CSS
- motion (animations)
- react-hook-form + zod
