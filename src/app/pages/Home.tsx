/**
 * Next.js App Router — Home Page  (/ route)
 *
 * This is a Server Component in Next.js — it has no hooks of its own,
 * so no 'use client' directive is needed.
 * Navigation uses <Link href="…"> from 'next/link'.
 */
import Link from 'next/link';
import {
  Video, Calendar, Heart, Footprints, Gift, Sparkles,
  Clock, ChevronRight, Star, Map, Bell, BookOpen, Landmark,
  ArrowRight, Play, Users, TrendingUp, Shield
} from 'lucide-react';

/* ─── Image constants ─── */
const IMG_HERO = 'hero.png';
const IMG_ABOUT = 'https://images.unsplash.com/photo-1600867161364-67e000733952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIaW5kdSUyMGdvZGRlc3MlMjBEdXJnYSUyMHRlbXBsZSUyMEluZGlhfGVufDF8fHx8MTc3MzY3OTg2Mnww&ixlib=rb-4.1.0&q=80&w=1080';
const IMG_AARTI = 'https://images.unsplash.com/photo-1767278608250-e87182850006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIaW5kdSUyMHRlbXBsZSUyMGFhcnRpJTIwY2VyZW1vbnklMjBJbmRpYXxlbnwxfHx8fDE3NzM2Nzk4NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080';
const IMG_HERITAGE = 'https://images.unsplash.com/photo-1695976941881-36f1e24b06af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwSGluZHUlMjB0ZW1wbGUlMjBhcmNoaXRlY3R1cmUlMjBJbmRpYSUyMGhlcml0YWdlfGVufDF8fHx8MTc3MzY3OTg2M3ww&ixlib=rb-4.1.0&q=80&w=1080';
const IMG_DEVOTEES = 'https://images.unsplash.com/photo-1616308913689-cb92c5bea67e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1wbGUlMjBkZXZvdGVlcyUyMHBpbGdyaW1zJTIwSW5kaWElMjBzcGlyaXR1YWx8ZW58MXx8fHwxNzczNjc5ODY2fDA&ixlib=rb-4.1.0&q=80&w=1080';
const IMG_PRASAD = 'https://images.unsplash.com/photo-1730642214871-aff3c13d86de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB0ZW1wbGUlMjBmbG93ZXJzJTIwb2ZmZXJpbmclMjBwcmFzYWR8ZW58MXx8fHwxNzczNjc5ODY1fDA&ixlib=rb-4.1.0&q=80&w=1080';
const IMG_DIYA = 'https://images.unsplash.com/photo-1608949791834-ed30e0687dd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMHRlbXBsZSUyMGRpeWElMjBsYW1wJTIwc3Bpcml0dWFsJTIwZ2xvd3xlbnwxfHx8fDE3NzM2Nzk4Njd8MA&ixlib=rb-4.1.0&q=80&w=1080';
const IMG_PUJA = 'https://images.unsplash.com/photo-1758924411346-4e49c4f3afde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjByZWxpZ2lvdXMlMjBjZXJlbW9ueSUyMHB1amElMjByaXR1YWwlMjBmaXJlfGVufDF8fHx8MTc3MzY3OTg3MHww&ixlib=rb-4.1.0&q=80&w=1080';
const IMG_RIVER = 'https://images.unsplash.com/photo-1752733904542-7a87dd917bc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHYW5nZXMlMjByaXZlciUyMEdoYXQlMjBJbmRpYSUyMHBpbGdyaW1hZ2V8ZW58MXx8fHwxNzczNjc5ODYyfDA&ixlib=rb-4.1.0&q=80&w=1080';
const IMG_SCENIC = 'https://images.unsplash.com/photo-1715163134002-c9399e6f74e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWYXJhbmFzaSUyME1pcnphcHVyJTIwVXR0YXIlMjBQcmFkZXNoJTIwSW5kaWElMjBzY2VuaWN8ZW58MXx8fHwxNzczNjc5ODY3fDA&ixlib=rb-4.1.0&q=80&w=1080';
const IMG_BOAT = 'https://images.unsplash.com/photo-1552559590-952a24ab39ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMHJpdmVyJTIwYm9hdCUyMHN1bnJpc2UlMjBzcGlyaXR1YWx8ZW58MXx8fHwxNzczNjc5ODcwfDA&ixlib=rb-4.1.0&q=80&w=1080';
const IMG_HWALK = 'https://images.unsplash.com/photo-1597373349205-1525975f1976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJpdGFnZSUyMHdhbGslMjBhbmNpZW50JTIwSW5kaWElMjBhcmNoaXRlY3R1cmUlMjB0b3VyfGVufDF8fHx8MTc3MzY3OTg2Nnww&ixlib=rb-4.1.0&q=80&w=1080';

/* ─── Data ─── */
const services = [
  { icon: Video, label: 'Live Darshan', desc: 'Watch real-time darshan of Maa Vindhyavasini from anywhere', path: '/live-darshan', color: '#C8490C', bg: '#FFF0EB', badge: 'LIVE' },
  { icon: Calendar, label: 'Aarti Booking', desc: 'Book your slot for Mangala, Shringar & Sandhya Aarti', path: '/aarti-booking', color: '#8B0000', bg: '#FFF5F5', badge: null },
  { icon: Heart, label: 'Donation', desc: 'Contribute to the upkeep & development of the Dham', path: '/donation', color: '#D4500A', bg: '#FFF8ED', badge: null },
  { icon: Footprints, label: 'Heritage Walk', desc: 'Explore the ancient temples & heritage sites of Vindhyachal', path: '/heritage-walk', color: '#5C6219', bg: '#F6F7EB', badge: 'NEW' },
  { icon: Gift, label: 'Online Prasad', desc: 'Receive sacred prasad from Maa Vindhyavasini at your doorstep', path: '/online-prasad', color: '#A16207', bg: '#FEFCE8', badge: null },
  { icon: Sparkles, label: 'Pooja Services', desc: 'Book special pujas & havan on behalf of yourself or loved ones', path: '/pooja-services', color: '#6B21A8', bg: '#FAF5FF', badge: null },
];

const timings = [
  { aarti: 'Mangala Aarti', time: '4:00 AM', duration: '30 min', status: 'completed' },
  { aarti: 'Shringar Aarti', time: '6:00 AM', duration: '30 min', status: 'completed' },
  { aarti: 'Temple Opens', time: '5:00 AM', duration: '—', status: 'open' },
  { aarti: 'Bhog Aarti', time: '12:00 PM', duration: '30 min', status: 'upcoming' },
  { aarti: 'Sandhya Aarti', time: '7:00 PM', duration: '30 min', status: 'upcoming' },
  { aarti: 'Shayan Aarti', time: '10:30 PM', duration: '30 min', status: 'upcoming' },
];

const festivals = [
  { name: 'Navratri Mahotsav', date: 'Oct 3–12, 2024', desc: 'Nine nights of divine celebration with special aartis and bhajans', image: IMG_AARTI },
  { name: 'Kartik Purnima Mela', date: 'Nov 15, 2024', desc: 'The grand fair at the Ganga Ghat with thousands of devotees', image: IMG_RIVER },
  { name: 'Maa Vindhyavasini Jayanti', date: 'Dec 8, 2024', desc: 'Special puja and cultural programmes honoring the Goddess', image: IMG_PUJA },
];

const galleryImages = [IMG_AARTI, IMG_DIYA, IMG_PRASAD, IMG_DEVOTEES, IMG_RIVER, IMG_BOAT, IMG_HERITAGE, IMG_SCENIC];

const stats = [
  { icon: Users, value: '5 Lakh+', label: 'Annual Devotees' },
  { icon: Star, value: '1000+', label: 'Years of History' },
  { icon: TrendingUp, value: '50+', label: 'Annual Festivals' },
  { icon: Shield, value: '3', label: 'Shakti Peethas Nearby' },
];

const announcements = [
  '🔔 Navratri Special Aarti bookings are now open — Book Early!',
  '🙏 Maa Vindhyavasini blesses all her devotees — Jai Mata Di!',
  '📢 Heritage Walk tours resume every Saturday & Sunday at 6:00 AM',
  '🌸 Online Prasad delivery now available across India',
  '✨ Donate to the temple renovation fund — Your contribution matters',
];

export function Home() {
  return (
    <div>
      {/* ── Announcement Ticker ── */}
      <div style={{ backgroundColor: '#FFD700' }} className="py-2 overflow-hidden">
        <div className="flex items-center gap-2">
          <div style={{ backgroundColor: '#8B0000' }} className="text-white text-xs px-3 py-1 font-semibold shrink-0 ml-4">
            NOTICE
          </div>
          <div className="overflow-hidden flex-1">
            <div className="flex gap-16 whitespace-nowrap" style={{ animation: 'scroll-left 35s linear infinite' }}>
              {[...announcements, ...announcements].map((a, i) => (
                <span key={i} className="text-sm font-medium" style={{ color: '#8B0000' }}>{a}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes scroll-left { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }`}</style>

      {/* ── Hero ── */}
      <section className="relative h-[88vh] min-h-[560px] overflow-hidden">
        <img src={IMG_HERO} alt="Vindhyachal Temple" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(26,10,0,0.85) 0%, rgba(26,10,0,0.5) 60%, transparent 100%)' }} />
        <div className="relative z-10 h-full flex items-center px-6 md:px-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-amber-400/40 rounded-full px-3 py-1 mb-5">
              <span className="text-amber-400 text-xs">✦</span>
              <span className="text-amber-300 text-xs tracking-widest uppercase">Official Digital Portal</span>
              <span className="text-amber-400 text-xs">✦</span>
            </div>
            <h1 className="text-white mb-2" style={{ fontFamily: 'serif', fontSize: '2.6rem', lineHeight: 1.2 }}>
              माँ विन्ध्यवासिनी धाम
            </h1>
            <h2 className="mb-4" style={{ color: '#FFD700', fontFamily: 'serif', fontSize: '1.5rem', lineHeight: 1.3 }}>
              Shri Vindhyavasini Dham<br />
              <span className="text-white/80" style={{ fontSize: '1rem', fontFamily: 'sans-serif' }}>Vindhyachal, Mirzapur, Uttar Pradesh</span>
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
              One of the most sacred Shakti Peethas in India — the divine abode of Maa Vindhyavasini,
              the presiding deity of the Vindhya region, blessing devotees for over a millennium.
            </p>
            <div className="flex flex-wrap gap-3">
              {/* ── Next.js <Link href="…"> — identical API to Next.js App Router ── */}
              <Link href="/live-darshan" className="flex items-center gap-2 px-5 py-2.5 rounded text-sm font-semibold text-white" style={{ backgroundColor: '#C8490C' }}>
                <Play size={14} fill="white" /> Live Darshan
              </Link>
              <Link href="/aarti-booking" className="flex items-center gap-2 px-5 py-2.5 rounded text-sm font-semibold border border-amber-400 text-amber-400 hover:bg-amber-400/10 transition-colors">
                <Calendar size={14} /> Book Aarti
              </Link>
              <Link href="/donation" className="flex items-center gap-2 px-5 py-2.5 rounded text-sm font-semibold" style={{ backgroundColor: '#FFD700', color: '#8B0000' }}>
                <Heart size={14} fill="currentColor" /> Donate
              </Link>
            </div>
          </div>
        </div>
        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 hidden md:block">
          <div className="max-w-7xl mx-auto grid grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3 px-6 py-4 border-r border-white/10 last:border-r-0" style={{ backgroundColor: 'rgba(26,10,0,0.8)', backdropFilter: 'blur(8px)' }}>
                <s.icon size={22} className="text-amber-400 shrink-0" />
                <div>
                  <div className="text-white font-bold text-lg leading-tight">{s.value}</div>
                  <div className="text-gray-400 text-xs">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FFFBF5' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-12 bg-amber-400" />
              <span className="text-amber-600 text-xs font-semibold uppercase tracking-widest">Our Services</span>
              <div className="h-px w-12 bg-amber-400" />
            </div>
            <h2 className="text-gray-900" style={{ fontSize: '2rem', fontFamily: 'serif' }}>Divine Services & Offerings</h2>
            <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
              Connect with Maa Vindhyavasini through our array of spiritual services — all accessible online
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc) => (
              <Link key={svc.label} href={svc.path} className="group relative rounded-xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden" style={{ backgroundColor: svc.bg }}>
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10" style={{ backgroundColor: svc.color, transform: 'translate(30%, -30%)' }} />
                {svc.badge && (
                  <span className="absolute top-3 right-3 text-white text-xs px-2 py-0.5 rounded-full font-semibold" style={{ backgroundColor: svc.badge === 'LIVE' ? '#DC2626' : '#16A34A' }}>
                    {svc.badge === 'LIVE' && <span className="inline-block w-1.5 h-1.5 rounded-full bg-white mr-1 animate-pulse" />}
                    {svc.badge}
                  </span>
                )}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: svc.color + '22', color: svc.color }}>
                  <svc.icon size={22} />
                </div>
                <h3 className="font-semibold mb-1.5" style={{ color: svc.color }}>{svc.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{svc.desc}</p>
                <div className="flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all" style={{ color: svc.color }}>
                  Explore <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Today's Timings ── */}
      <section className="py-14 px-4" style={{ backgroundColor: '#FFF5EE' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-12 bg-amber-400" />
                <span className="text-amber-600 text-xs font-semibold uppercase tracking-widest">Schedule</span>
              </div>
              <h2 className="text-gray-900 mb-3" style={{ fontSize: '2rem', fontFamily: 'serif' }}>Today's Aarti Timings</h2>
              <p className="text-gray-500 text-sm mb-6">Plan your visit or tune in to the Live Darshan as per the scheduled aartis below. Timings may vary on festival days.</p>
              <div className="rounded-2xl overflow-hidden border border-orange-100 shadow-sm">
                <table className="w-full">
                  <thead>
                    <tr style={{ backgroundColor: '#8B0000' }}>
                      <th className="text-left text-white text-xs font-semibold px-4 py-3">Aarti / Event</th>
                      <th className="text-left text-white text-xs font-semibold px-4 py-3">Time</th>
                      <th className="text-left text-white text-xs font-semibold px-4 py-3">Duration</th>
                      <th className="text-left text-white text-xs font-semibold px-4 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {timings.map((row, i) => (
                      <tr key={row.aarti} className="border-t border-orange-50" style={{ backgroundColor: i % 2 === 0 ? '#FFFBF8' : 'white' }}>
                        <td className="px-4 py-3 text-sm font-medium text-gray-800">{row.aarti}</td>
                        <td className="px-4 py-3 text-sm text-gray-600 flex items-center gap-1"><Clock size={12} className="text-orange-400" />{row.time}</td>
                        <td className="px-4 py-3 text-sm text-gray-500">{row.duration}</td>
                        <td className="px-4 py-3">
                          <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{
                            backgroundColor: row.status === 'completed' ? '#F0FDF4' : row.status === 'open' ? '#EFF6FF' : '#FFF7ED',
                            color: row.status === 'completed' ? '#16A34A' : row.status === 'open' ? '#2563EB' : '#C8490C',
                          }}>
                            {row.status === 'completed' ? 'Completed' : row.status === 'open' ? 'Open' : 'Upcoming'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-xs text-gray-400 flex items-center gap-1"><Bell size={11} /> Temple is open daily from 5:00 AM to 11:00 PM</div>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: '360px' }}>
              <img src={IMG_AARTI} alt="Aarti" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,10,0,0.92) 0%, rgba(26,10,0,0.4) 100%)' }} />
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <div className="inline-flex items-center gap-2 bg-red-600 text-white text-xs px-3 py-1 rounded-full w-fit mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> LIVE NOW
                </div>
                <h3 className="text-white text-xl mb-2" style={{ fontFamily: 'serif' }}>Watch Live Darshan</h3>
                <p className="text-gray-300 text-sm mb-5">Experience the divine blessings of Maa Vindhyavasini live from the comfort of your home.</p>
                <Link href="/live-darshan" className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-semibold w-fit" style={{ backgroundColor: '#C8490C', color: 'white' }}>
                  <Play size={14} fill="white" /> Join Live Darshan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={IMG_ABOUT} alt="Vindhyachal Dham" className="w-full h-80 object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden md:block">
                <div className="rounded-xl overflow-hidden shadow-xl border-4 border-white">
                  <img src={IMG_RIVER} alt="Sacred Ganga" className="w-48 h-36 object-cover" />
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-xl flex flex-col items-center justify-center text-white shadow-lg" style={{ backgroundColor: '#8B0000' }}>
                <span className="text-3xl" style={{ fontFamily: 'serif' }}>ॐ</span>
                <span className="text-xs mt-1 tracking-wider">SHAKTI PEETHA</span>
              </div>
            </div>
            <div className="lg:pl-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-12 bg-amber-400" />
                <span className="text-amber-600 text-xs font-semibold uppercase tracking-widest">About the Dham</span>
              </div>
              <h2 className="text-gray-900 mb-4" style={{ fontSize: '2rem', fontFamily: 'serif', lineHeight: 1.3 }}>
                The Sacred Abode of<br /><span style={{ color: '#8B0000' }}>Maa Vindhyavasini</span>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Shri Vindhyavasini Dham, located in the ancient town of Vindhyachal in Mirzapur, Uttar Pradesh,
                is one of India's most sacred Shakti Peethas. The presiding deity, Maa Vindhyavasini — an incarnation
                of Goddess Durga — is revered as the "Goddess who resides in the Vindhya Mountains."
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                The Vindhyachal temple complex forms the sacred Vindhya Triangle (Vindhya Trikona) along with
                Maa Kali at Kalikhoh and Maa Ashtabhuja — three of the most powerful Shakti shrines in northern India.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { icon: Landmark, label: 'Temple Type', value: 'Shakti Peetha' },
                  { icon: Map, label: 'Location', value: 'Vindhyachal, UP' },
                  { icon: BookOpen, label: 'Est.', value: 'Ancient (1000+ yrs)' },
                  { icon: Star, label: 'Deity', value: 'Maa Vindhyavasini' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#FFF0EB', color: '#C8490C' }}>
                      <item.icon size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">{item.label}</div>
                      <div className="text-sm font-semibold text-gray-700">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/about" className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-semibold text-white" style={{ backgroundColor: '#8B0000' }}>
                Know More <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Upcoming Festivals ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FFFBF5' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-12 bg-amber-400" />
                <span className="text-amber-600 text-xs font-semibold uppercase tracking-widest">Festivals & Events</span>
              </div>
              <h2 className="text-gray-900" style={{ fontSize: '2rem', fontFamily: 'serif' }}>Upcoming Celebrations</h2>
            </div>
            <Link href="/gallery" className="hidden md:flex items-center gap-1 text-sm font-medium" style={{ color: '#C8490C' }}>
              View All <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {festivals.map((fest) => (
              <div key={fest.name} className="rounded-2xl overflow-hidden border border-orange-100 shadow-sm hover:shadow-lg transition-shadow bg-white group">
                <div className="relative h-44 overflow-hidden">
                  <img src={fest.image} alt={fest.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="text-white text-xs bg-amber-600 px-2 py-0.5 rounded-full font-medium">📅 {fest.date}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 mb-1.5" style={{ fontFamily: 'serif' }}>{fest.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{fest.desc}</p>
                  <button className="text-sm font-medium flex items-center gap-1" style={{ color: '#C8490C' }}>Read More <ChevronRight size={14} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Heritage Walk CTA ── */}
      <section className="relative py-24 px-4 overflow-hidden">
        <img src={IMG_HWALK} alt="Heritage" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(26,10,0,0.75)' }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12 bg-amber-400" />
            <span className="text-amber-300 text-xs font-semibold uppercase tracking-widest">Explore</span>
            <div className="h-px w-12 bg-amber-400" />
          </div>
          <h2 className="text-white mb-4" style={{ fontFamily: 'serif', fontSize: '2.2rem' }}>Embark on the Heritage Walk</h2>
          <p className="text-gray-300 text-sm leading-relaxed max-w-xl mx-auto mb-8">
            Discover the ancient temples, ghats, and sacred sites of Vindhyachal through our guided Heritage Walk.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/heritage-walk" className="px-6 py-3 rounded text-sm font-semibold text-white" style={{ backgroundColor: '#C8490C' }}>Book Heritage Walk</Link>
            <Link href="/about" className="px-6 py-3 rounded text-sm font-semibold border border-amber-400 text-amber-400 hover:bg-amber-400/10 transition-colors">Know More</Link>
          </div>
        </div>
      </section>

      {/* ── Gallery Preview ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-12 bg-amber-400" />
                <span className="text-amber-600 text-xs font-semibold uppercase tracking-widest">Photo Gallery</span>
              </div>
              <h2 className="text-gray-900" style={{ fontSize: '2rem', fontFamily: 'serif' }}>Glimpses of the Divine</h2>
            </div>
            <Link href="/gallery" className="hidden md:flex items-center gap-1 text-sm font-medium" style={{ color: '#C8490C' }}>
              View Full Gallery <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImages.map((img, i) => (
              <Link key={i} href="/gallery" className={`relative overflow-hidden rounded-xl group ${i === 0 ? 'row-span-2' : ''}`} style={{ height: i === 0 ? '360px' : '174px' }}>
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/0 group-hover:bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play size={16} className="text-white" fill="white" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Donate Banner ── */}
      <section className="py-14 px-4" style={{ backgroundColor: '#8B0000' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-white mb-2" style={{ fontFamily: 'serif', fontSize: '1.8rem' }}>Your Donation Matters</h2>
            <p className="text-red-200 text-sm max-w-xl">
              Help preserve this ancient Shakti Peetha. Your donation supports temple maintenance,
              free prasad distribution, and uplifting the local community.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link href="/donation" className="px-6 py-3 rounded text-sm font-bold" style={{ backgroundColor: '#FFD700', color: '#8B0000' }}>Donate Now</Link>
            <Link href="/about" className="px-6 py-3 rounded text-sm font-semibold border border-white/40 text-white hover:bg-white/10 transition-colors">Learn More</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
