'use client';
/**
 * Next.js App Router — Pooja Services Page  (/pooja-services)
 * 'use client' — category filter, service expand, form state via useState.
 */
import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Sparkles, Clock, CheckCircle, Info, Star, Phone } from 'lucide-react';

const IMG_PUJA = 'https://images.unsplash.com/photo-1758924411346-4e49c4f3afde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjByZWxpZ2lvdXMlMjBjZXJlbW9ueSUyMHB1amElMjByaXR1YWwlMjBmaXJlfGVufDF8fHx8MTc3MzY3OTg3MHww&ixlib=rb-4.1.0&q=80&w=1080';
const IMG_AARTI = 'https://images.unsplash.com/photo-1767278608250-e87182850006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIaW5kdSUyMHRlbXBsZSUyMGFhcnRpJTIwY2VyZW1vbnklMjBJbmRpYXxlbnwxfHx8fDE3NzM2Nzk4NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080';
const IMG_GODDESS = 'https://images.unsplash.com/photo-1761471658258-fec93e868938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIaW5kdSUyMGdvZGRlc3MlMjBEdXJnYSUyMHRlbXBsZSUyMGlkb2wlMjB3b3JzaGlwfGVufDF8fHx8MTc3MzY4MDU4OXww&ixlib=rb-4.1.0&q=80&w=1080';

const services = [
  {
    id: 'abhishek',
    name: 'Maa Abhishek',
    subtitle: 'Sacred Bathing of the Deity',
    duration: '45 min',
    price: 1100,
    rating: 4.9,
    image: IMG_GODDESS,
    category: 'Special Puja',
    includes: ['Panchamrit Abhishek', 'Flower decoration', 'Prasad distribution', 'Dakshina to priest'],
    desc: 'A sacred ritual of bathing Maa Vindhyavasini with Panchamrit (milk, curd, honey, ghee & water) followed by ornamental decoration.',
    color: '#8B0000',
    bg: '#FFF5F5',
  },
  {
    id: 'navchandi',
    name: 'Navchandi Yagya',
    subtitle: 'Nine-Day Havan Ritual',
    duration: '9 days',
    price: 11000,
    rating: 5.0,
    image: IMG_PUJA,
    category: 'Yagya / Havan',
    includes: ['Daily havan', 'Path recitation', 'Prasad for 100+', 'Certificate of completion'],
    desc: 'The grand Navchandi Yagya is performed over nine days with complete path and havan, invoking the blessings of all nine forms of Maa Durga.',
    color: '#6B21A8',
    bg: '#FAF5FF',
  },
  {
    id: 'sahasrachandi',
    name: 'Sahasrachandi Path',
    subtitle: 'Recitation of Durga Saptashati × 1000',
    duration: '3 days',
    price: 51000,
    rating: 5.0,
    image: IMG_AARTI,
    category: 'Path / Recitation',
    includes: ['1000 Chandi path', 'Grand havan', 'Brahmin bhojan', 'Full temple decoration'],
    desc: 'The most auspicious puja where Durga Saptashati is recited 1000 times by learned Brahmins over three days with grand havan.',
    color: '#C8490C',
    bg: '#FFF5EE',
  },
  {
    id: 'rudrabhishek',
    name: 'Rudrabhishek',
    subtitle: 'Vedic Shiva Abhishek at Kashi Ghat',
    duration: '2 hours',
    price: 2100,
    rating: 4.8,
    image: IMG_GODDESS,
    category: 'Abhishek',
    includes: ['Bilva patra', 'Milk & Gangajal', 'Chanting of Shiv Panchakshari', 'Prasad'],
    desc: 'Perform Rudrabhishek at the Shiva shrine near the Ganga Ghat — an extremely powerful ritual for health, prosperity and liberation.',
    color: '#0E7490',
    bg: '#ECFEFF',
  },
  {
    id: 'sundarkand',
    name: 'Sundarkand Path',
    subtitle: 'Devotional Recitation from Ramayana',
    duration: '3 hours',
    price: 751,
    rating: 4.9,
    image: IMG_PUJA,
    category: 'Path / Recitation',
    includes: ['Complete Sundarkand path', 'Aarti', 'Prasad', 'Blessings ceremony'],
    desc: 'Sundar Kand from Ramcharitmanas is recited by experienced priests for removal of obstacles and fulfilment of wishes.',
    color: '#A16207',
    bg: '#FEFCE8',
  },
  {
    id: 'kanya-puja',
    name: 'Kanya Puja',
    subtitle: 'Worship of Nine Girls as Goddess',
    duration: '2 hours',
    price: 3100,
    rating: 5.0,
    image: IMG_AARTI,
    category: 'Special Puja',
    includes: ['9 kanya selection', 'Pada puja', 'New clothes & prasad', 'Bhoj (meal) for kanya'],
    desc: 'On auspicious occasions, nine young girls are worshipped as manifestations of Navadugas — one of the most sacred rituals at Vindhyachal.',
    color: '#DB2777',
    bg: '#FDF2F8',
  },
];

const categories = ['All', 'Special Puja', 'Yagya / Havan', 'Path / Recitation', 'Abhishek'];

export function PoojaServices() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', phone: '', date: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const filtered = activeCategory === 'All' ? services : services.filter(s => s.category === activeCategory);
  const serviceDetail = services.find(s => s.id === selectedService);
  const today = new Date().toISOString().split('T')[0];

  return (
    <div style={{ backgroundColor: '#FFFBF5' }}>
      {/* Hero */}
      <div className="relative py-20 px-4 overflow-hidden">
        <img src={IMG_PUJA} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(26,10,0,0.8)' }} />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-red-300 text-xs mb-3">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white">Pooja Services</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs px-3 py-1 rounded-full mb-4">
            <Sparkles size={12} /> DIVINE SERVICES
          </div>
          <h1 className="text-white mb-3" style={{ fontFamily: 'serif', fontSize: '2.8rem', lineHeight: 1.2 }}>
            Pooja & Havan Services
          </h1>
          <p className="text-gray-300 text-sm max-w-xl leading-relaxed">
            Book special pujas, havans and path on behalf of yourself or your loved ones.
            Performed by learned Brahmins at the sacred temple of Maa Vindhyavasini.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full text-sm font-medium border transition-colors"
              style={
                activeCategory === cat
                  ? { backgroundColor: '#8B0000', color: 'white', borderColor: '#8B0000' }
                  : { backgroundColor: 'white', color: '#6B7280', borderColor: '#E5E7EB' }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Service Cards */}
          <div className="lg:col-span-2">
            <div className="space-y-5">
              {filtered.map(svc => (
                <div
                  key={svc.id}
                  className="bg-white rounded-2xl border border-orange-100 overflow-hidden hover:shadow-lg transition-all cursor-pointer"
                  style={{ borderColor: selectedService === svc.id ? svc.color : undefined }}
                  onClick={() => setSelectedService(svc.id === selectedService ? null : svc.id)}
                >
                  <div className="flex gap-0">
                    <div className="w-36 md:w-48 shrink-0 overflow-hidden">
                      <img src={svc.image} alt={svc.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-5 flex-1">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <span className="text-xs px-2 py-0.5 rounded-full font-medium mb-2 inline-block" style={{ backgroundColor: svc.bg, color: svc.color }}>
                            {svc.category}
                          </span>
                          <h3 className="font-semibold text-gray-900" style={{ fontFamily: 'serif' }}>{svc.name}</h3>
                          <p className="text-gray-400 text-xs">{svc.subtitle}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="font-bold" style={{ color: svc.color }}>
                            ₹{svc.price.toLocaleString()}
                          </div>
                          <div className="flex items-center gap-0.5 text-xs text-amber-500 justify-end">
                            <Star size={11} fill="currentColor" /> {svc.rating}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">{svc.desc}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <span className="flex items-center gap-1"><Clock size={11} /> {svc.duration}</span>
                      </div>
                      {selectedService === svc.id && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <p className="text-xs font-semibold text-gray-600 mb-2">Includes:</p>
                          <div className="flex flex-wrap gap-2">
                            {svc.includes.map(item => (
                              <span key={item} className="flex items-center gap-1 text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded-full">
                                <CheckCircle size={10} className="text-green-500" /> {item}
                              </span>
                            ))}
                          </div>
                          <button
                            className="mt-4 px-5 py-2 rounded-lg text-sm font-semibold text-white"
                            style={{ backgroundColor: svc.color }}
                            onClick={(e) => { e.stopPropagation(); }}
                          >
                            Book This Puja — ₹{svc.price.toLocaleString()}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Form Sidebar */}
          <div>
            <div className="sticky top-28 space-y-5">
              {!submitted ? (
                <div className="bg-white rounded-2xl border border-orange-100 overflow-hidden shadow-md">
                  <div style={{ backgroundColor: '#8B0000' }} className="px-5 py-4">
                    <h3 className="text-white font-semibold">Request a Puja</h3>
                    <p className="text-red-200 text-xs mt-0.5">Our pandit will contact you</p>
                  </div>
                  <div className="p-5 space-y-4">
                    {serviceDetail && (
                      <div className="bg-orange-50 border border-orange-100 rounded-lg p-3 text-sm">
                        <div className="font-semibold text-gray-800">{serviceDetail.name}</div>
                        <div className="text-gray-500 text-xs">{serviceDetail.duration}</div>
                        <div className="font-bold mt-1" style={{ color: '#8B0000' }}>₹{serviceDetail.price.toLocaleString()}</div>
                      </div>
                    )}
                    {!serviceDetail && (
                      <div className="bg-amber-50 border border-amber-100 rounded-lg p-3 text-xs text-amber-700">
                        <Info size={12} className="inline mr-1" />
                        Click on a service card to select a puja
                      </div>
                    )}
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="Full name"
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Mobile Number *</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Preferred Date *</label>
                      <input
                        type="date"
                        min={today}
                        value={form.date}
                        onChange={e => setForm({ ...form, date: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Special Request</label>
                      <textarea
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        placeholder="Any specific wishes or sankalp..."
                        rows={3}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 resize-none"
                      />
                    </div>
                    <button
                      onClick={() => form.name && form.phone && form.date && setSubmitted(true)}
                      disabled={!form.name || !form.phone || !form.date}
                      className="w-full py-3 rounded-xl text-sm font-semibold text-white disabled:opacity-50"
                      style={{ backgroundColor: '#8B0000' }}
                    >
                      Submit Puja Request
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-orange-100 p-6 text-center shadow-md">
                  <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4" style={{ backgroundColor: '#F0FDF4' }}>
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">Request Submitted!</h3>
                  <p className="text-gray-500 text-xs mb-4">
                    🙏 Jai Mata Di! Our pandit will contact you at {form.phone} within 24 hours.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">Ref: PS-{Math.random().toString(36).substr(2, 6).toUpperCase()}</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', date: '', message: '' }); }}
                    className="w-full py-2.5 rounded-lg text-sm font-semibold text-white"
                    style={{ backgroundColor: '#8B0000' }}
                  >
                    New Request
                  </button>
                </div>
              )}

              {/* Contact Card */}
              <div className="bg-amber-50 rounded-2xl border border-amber-200 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Phone size={14} className="text-amber-700" />
                  <span className="font-semibold text-amber-800 text-sm">Need Assistance?</span>
                </div>
                <p className="text-amber-700 text-xs mb-3 leading-relaxed">
                  Call our Seva Desk to speak directly with a temple representative about puja bookings.
                </p>
                <a href="tel:+919415XXXXX" className="block w-full py-2 rounded-lg text-center text-sm font-semibold" style={{ backgroundColor: '#8B0000', color: 'white' }}>
                  +91-9415-XXXXX
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}