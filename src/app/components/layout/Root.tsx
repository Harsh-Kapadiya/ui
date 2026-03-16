'use client';
/**
 * Next.js App Router — Root layout shell (client wrapper)
 *
 * In Next.js this logic lives inside layout.tsx (the server layout) + a thin
 * client component for the scroll-to-top side-effect.
 *
 * usePathname() comes from 'next/navigation' — identical API to Next.js.
 */
import { useEffect } from 'react';
import { Outlet } from 'react-router';
import { usePathname } from 'next/navigation';
import { Header } from './Header';
import { Footer } from './Footer';

export function Root() {
  const pathname = usePathname();

  // Scroll to top on every route change — mirrors Next.js default behaviour.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FFFBF5' }}>
      <Header />
      <main className="flex-1">
        {/* <Outlet> is the React Router equivalent of Next.js {children} in layout.tsx */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
