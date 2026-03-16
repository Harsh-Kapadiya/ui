/**
 * Vite Entry Point
 *
 * In a real Next.js project this file does NOT exist.
 * Next.js discovers routes automatically from the `app/` directory and
 * bootstraps the React tree itself — there is no manual RouterProvider.
 *
 * The equivalent Next.js bootstrap chain is:
 *   next start
 *     └─ app/layout.tsx       (RootLayout — persistent Header + Footer)
 *         └─ app/page.tsx     (Home — the / route)
 *         └─ app/[route]/page.tsx  (each sub-route)
 *
 * All that wiring is done for us by the Next.js framework.
 * Here we replicate it via React Router + RouterProvider so the app
 * runs correctly in the Vite dev environment.
 */
import { RouterProvider } from 'react-router';
import { router } from './routes';

export default function App() {
  return <RouterProvider router={router} />;
}
