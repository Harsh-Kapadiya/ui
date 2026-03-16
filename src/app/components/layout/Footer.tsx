/**
 * Next.js App Router — Persistent Footer
 *
 * This is a Server Component (no browser-only hooks).
 * Navigation uses <Link href="…"> from 'next/link' — identical Next.js API.
 */
import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Youtube, Instagram, Twitter, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer>
      {/* ── Newsletter ── */}
      <div style={{ backgroundColor: '#8B0000' }} className="py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-semibold text-lg">Stay Connected with the Divine</h3>
            <p className="text-red-200 text-sm mt-0.5">
              Subscribe to receive festival alerts, aarti timings &amp; temple news
            </p>
          </div>
          <form className="flex gap-2 w-full md:w-auto" onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 md:w-72 px-4 py-2.5 rounded text-sm bg-white/10 border border-white/30 text-white placeholder-red-300 focus:outline-none focus:border-amber-400"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded text-sm font-semibold whitespace-nowrap"
              style={{ backgroundColor: '#FFD700', color: '#8B0000' }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div style={{ backgroundColor: '#1A0A00' }} className="py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center border border-amber-500"
                style={{ backgroundColor: '#8B0000' }}
              >
                <span className="text-amber-400" style={{ fontFamily: 'serif', fontSize: '1.1rem' }}>ॐ</span>
              </div>
              <div>
                <div className="text-white font-bold text-sm" style={{ fontFamily: 'serif' }}>
                  Shri Vindhyavasini Dham
                </div>
                <div className="text-amber-400 text-xs">विन्ध्याचल, मीरजापुर</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              The sacred abode of Maa Vindhyavasini — one of the most revered Shakti Peethas in India,
              situated on the holy banks of the Ganga in Vindhyachal, Mirzapur.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { icon: Facebook,  href: '#', label: 'Facebook' },
                { icon: Youtube,   href: '#', label: 'YouTube' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Twitter,   href: '#', label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-700 text-gray-400 hover:border-amber-500 hover:text-amber-400 transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links — uses Next.js Link href */}
          <div>
            <h4 className="text-amber-400 font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Live Darshan',   path: '/live-darshan' },
                { label: 'Aarti Booking',  path: '/aarti-booking' },
                { label: 'Donation',       path: '/donation' },
                { label: 'Heritage Walk',  path: '/heritage-walk' },
                { label: 'Online Prasad',  path: '/online-prasad' },
                { label: 'Pooja Services', path: '/pooja-services' },
                { label: 'Gallery',        path: '/gallery' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-gray-400 text-sm hover:text-amber-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-orange-700">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Temple Timings */}
          <div>
            <h4 className="text-amber-400 font-semibold mb-4 text-sm uppercase tracking-wider">Temple Timings</h4>
            <div className="space-y-3">
              {[
                { aarti: 'Mangala Aarti',  time: '4:00 AM – 4:30 AM' },
                { aarti: 'Shringar Aarti', time: '6:00 AM – 6:30 AM' },
                { aarti: 'Bhog Aarti',     time: '12:00 PM – 12:30 PM' },
                { aarti: 'Sandhya Aarti',  time: '7:00 PM – 7:30 PM' },
                { aarti: 'Shayan Aarti',   time: '10:30 PM – 11:00 PM' },
              ].map((row) => (
                <div key={row.aarti} className="flex justify-between items-start gap-4">
                  <span className="text-gray-400 text-xs">{row.aarti}</span>
                  <span className="text-amber-400 text-xs whitespace-nowrap">{row.time}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 text-xs text-gray-500 border-t border-gray-800 pt-3">
              * Timings may vary on special festivals and occasions
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-amber-400 font-semibold mb-4 text-sm uppercase tracking-wider">Contact & Location</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-amber-500 mt-0.5 shrink-0" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Shri Vindhyavasini Dham,<br />
                  Vindhyachal, Mirzapur – 231307<br />
                  Uttar Pradesh, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-amber-500 shrink-0" />
                <span className="text-gray-400 text-sm">+91-9415-XXXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-amber-500 shrink-0" />
                <span className="text-gray-400 text-sm">info@vindhyachal.org</span>
              </div>
            </div>
            <div className="mt-5 rounded-lg overflow-hidden border border-gray-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.6!2d82.573!3d25.129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fd9e4c0ea71b9%3A0x8a18e7c4d6b56ab5!2sVindhyavasini+Temple!5e0!3m2!1sen!2sin!4v1616000000000"
                width="100%"
                height="100"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Temple Location"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div style={{ backgroundColor: '#0D0500' }} className="py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-600">
          <p>© 2024 Shri Vindhyavasini Dham, Vindhyachal, Mirzapur. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Developed with <Heart size={10} className="text-red-600" fill="currentColor" /> for devotees worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
