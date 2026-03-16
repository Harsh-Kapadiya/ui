/**
 * Vite/React Router — Client-side Router
 *
 * This file is the Vite-environment equivalent of Next.js's file-system
 * based routing. In a real Next.js project you would DELETE this file entirely
 * because routing is derived automatically from the `app/` directory structure:
 *
 *   app/page.tsx               →  /
 *   app/live-darshan/page.tsx  →  /live-darshan
 *   app/aarti-booking/page.tsx →  /aarti-booking
 *   app/donation/page.tsx      →  /donation
 *   app/heritage-walk/page.tsx →  /heritage-walk
 *   app/pooja-services/page.tsx→  /pooja-services
 *   app/gallery/page.tsx       →  /gallery
 *   app/about/page.tsx         →  /about
 *   app/online-prasad/page.tsx →  /online-prasad
 *   app/contact/page.tsx       →  /contact
 *
 * The page.tsx files already exist inside src/app/[route]/page.tsx and
 * each carries the correct 'use client' directive where needed.
 *
 * The root layout (app/layout.tsx) wraps every route with <Header> and
 * <Footer> — replacing the <Root> component used here.
 */

import { createBrowserRouter } from 'react-router';
import { Root } from './components/layout/Root';

// Pages — in Next.js these are auto-imported from the app directory
import { Home }         from './pages/Home';
import { LiveDarshan }  from './pages/LiveDarshan';
import { AartiBooking } from './pages/AartiBooking';
import { Donation }     from './pages/Donation';
import { HeritageWalk } from './pages/HeritageWalk';
import { PoojaServices }from './pages/PoojaServices';
import { Gallery }      from './pages/Gallery';
import { About }        from './pages/About';
import { OnlinePrasad } from './pages/OnlinePrasad';
import { ContactUs }    from './pages/ContactUs';

export const router = createBrowserRouter([
  {
    // In Next.js: app/layout.tsx  →  wraps all children automatically
    path: '/',
    Component: Root,
    children: [
      // In Next.js: app/page.tsx
      { index: true,                    Component: Home },
      // In Next.js: app/live-darshan/page.tsx
      { path: 'live-darshan',           Component: LiveDarshan },
      // In Next.js: app/aarti-booking/page.tsx
      { path: 'aarti-booking',          Component: AartiBooking },
      // In Next.js: app/donation/page.tsx
      { path: 'donation',               Component: Donation },
      // In Next.js: app/heritage-walk/page.tsx
      { path: 'heritage-walk',          Component: HeritageWalk },
      // In Next.js: app/pooja-services/page.tsx
      { path: 'pooja-services',         Component: PoojaServices },
      // In Next.js: app/gallery/page.tsx
      { path: 'gallery',                Component: Gallery },
      // In Next.js: app/about/page.tsx
      { path: 'about',                  Component: About },
      // In Next.js: app/online-prasad/page.tsx
      { path: 'online-prasad',          Component: OnlinePrasad },
      // In Next.js: app/contact/page.tsx
      { path: 'contact',                Component: ContactUs },
    ],
  },
]);
