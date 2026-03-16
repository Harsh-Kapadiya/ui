/**
 * Next.js App Router — Root Layout
 *
 * In a Next.js project this file is the single layout that wraps every route.
 * It is the equivalent of the classic _app.tsx / _document.tsx pair.
 *
 * Responsibilities:
 *  • Inject global fonts & styles
 *  • Render the persistent <Header> and <Footer>
 *  • Provide the <main> slot where child pages are rendered (via {children})
 *
 * In Next.js this is a Server Component by default; the 'use client' directive
 * is NOT needed here because it contains no hooks or browser-only APIs.
 */

import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

export const metadata = {
  title: 'Shri Vindhyavasini Dham — Official Portal',
  description:
    'The official digital portal of Maa Vindhyavasini Dham, Vindhyachal, Mirzapur, Uttar Pradesh — Live Darshan, Aarti Booking, Donation & more.',
  keywords: 'Vindhyachal, Vindhyavasini, Shakti Peetha, Mirzapur, Live Darshan, Aarti Booking',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className="min-h-screen flex flex-col"
        style={{ backgroundColor: '#FFFBF5' }}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
