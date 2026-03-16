'use client';
/**
 * Next.js App Router — Persistent Header (Client Component)
 *
 * Marked 'use client' because it owns interactive state:
 *   • mobile menu open/close  (useState)
 *   • desktop dropdown hover  (useState)
 *   • active-link detection   (usePathname from 'next/navigation')
 *
 * Navigation uses <Link href="…"> from 'next/link', identical to Next.js.
 */
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Bell, Phone } from 'lucide-react';

const navItems = [
  { label: 'Home', path: '/' },
  {
    label: 'Darshan & Seva',
    children: [
      { label: 'Live Darshan',   path: '/live-darshan' },
      { label: 'Aarti Booking',  path: '/aarti-booking' },
      { label: 'Pooja Services', path: '/pooja-services' },
      { label: 'Online Prasad',  path: '/online-prasad' },
    ],
  },
  { label: 'Donation',      path: '/donation' },
  { label: 'Heritage Walk', path: '/heritage-walk' },
  { label: 'Gallery',       path: '/gallery' },
  { label: 'About',         path: '/about' },
  { label: 'Contact',       path: '/contact' },
];

export function Header() {
  const [mobileOpen,    setMobileOpen]    = useState(false);
  const [openDropdown,  setOpenDropdown]  = useState<string | null>(null);

  // usePathname() from 'next/navigation' — works identically to Next.js
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* ── Top Info Bar ── */}
      <div style={{ backgroundColor: '#8B0000' }} className="text-white py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Bell size={11} className="text-amber-300" />
              <span className="text-amber-100">
                Morning Aarti: 5:00 AM | Madhyan Aarti: 12:00 PM | Sandhya Aarti: 7:30 PM
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone size={11} className="text-amber-300" />
              <span>+91-9415-XXXXX</span>
            </div>
            <span className="text-amber-300">|</span>
            <span>Vindhyachal, Mirzapur - 231307, U.P.</span>
          </div>
        </div>
      </div>

      {/* ── Main Header Bar ── */}
      <div style={{ backgroundColor: '#C8490C' }} className="px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo + Title — Link href="/" (Next.js syntax) */}
          <Link href="/" className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-amber-300 overflow-hidden"
              style={{ backgroundColor: '#8B0000' }}
            >
              <span className="text-amber-300 text-lg" style={{ fontFamily: 'serif' }}>ॐ</span>
            </div>
            <div>
              <div className="text-white text-xs tracking-widest uppercase" style={{ fontFamily: 'serif' }}>
                Official Website
              </div>
              <div className="text-white font-bold leading-tight" style={{ fontSize: '1.1rem', fontFamily: 'serif' }}>
                Shri Vindhyavasini Dham
              </div>
              <div style={{ color: '#FFD700', fontSize: '0.65rem' }} className="tracking-wide">
                माँ विन्ध्यवासिनी धाम, विन्ध्याचल
              </div>
            </div>
          </Link>

          {/* ── Desktop Navigation ── */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1 text-white px-3 py-2 rounded text-sm hover:bg-white/20 transition-colors">
                    {item.label}
                    <ChevronDown size={13} />
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 bg-white shadow-xl rounded-md py-1 min-w-48 border border-orange-100 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          href={child.path}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  href={item.path!}
                  className={`px-3 py-2 rounded text-sm transition-colors ${
                    isActive(item.path!)
                      ? 'bg-white text-orange-700 font-semibold'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}

            {/* LIVE badge */}
            <Link
              href="/live-darshan"
              className="ml-2 px-4 py-2 rounded text-sm font-semibold flex items-center gap-1.5 animate-pulse"
              style={{ backgroundColor: '#FFD700', color: '#8B0000' }}
            >
              <span className="w-2 h-2 rounded-full bg-red-600 inline-block" />
              LIVE
            </Link>
          </nav>

          {/* ── Mobile Menu Toggle ── */}
          <button
            className="lg:hidden text-white p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-orange-100 shadow-lg">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <div className="px-4 py-2.5 text-sm font-semibold text-orange-800 bg-orange-50 border-b border-orange-100">
                  {item.label}
                </div>
                {item.children.map((child) => (
                  <Link
                    key={child.path}
                    href={child.path}
                    className="block px-8 py-2.5 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-700 border-b border-gray-100"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.path}
                href={item.path!}
                className={`block px-4 py-2.5 text-sm border-b border-gray-100 ${
                  isActive(item.path!)
                    ? 'text-orange-700 bg-orange-50 font-semibold'
                    : 'text-gray-700'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/live-darshan"
            className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-red-700"
            onClick={() => setMobileOpen(false)}
          >
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            Watch Live Darshan
          </Link>
        </div>
      )}
    </header>
  );
}
