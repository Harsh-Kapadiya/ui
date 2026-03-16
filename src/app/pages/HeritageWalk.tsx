'use client';
/**
 * Next.js App Router — Heritage Walk Page  (/heritage-walk)
 * 'use client' — package selection, booking form, persons counter via useState.
 */
import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Clock, MapPin, Users, Star, Calendar, CheckCircle, Camera, Info } from 'lucide-react';

const IMG_HERITAGE = 'https://images.unsplash.com/photo-1695976941881-36f1e24b06af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwSGluZHUlMjB0ZW1wbGUlMjBhcmNoaXRlY3R1cmUlMjBJbmRpYSUyMGhlcml0YWdlfGVufDF8fHx8MTc3MzY3OTg2M3ww&ixlib=rb-4.1.0&q=80&w=1080';
const IMG_HWALK = 'https://images.unsplash.com/photo-1597373349205-1525975f1976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJpdGFnZSUyMHdhbGslMjBhbmNpZW50JTIwSW5kaWElMjBhcmNoaXRlY3R1cmUlMjB0b3VyfGVufDF8fHx8MTc3MzY3OTg2Nnww&ixlib=rb-4.1.0&q=80&w=1080';
const IMG_RIVER = 'https://images.unsplash.com/photo-1752733904542-7a87dd917bc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHYW5nZXMlMjByaXZlciUyMEdoYXQlMjBJbmRpYSUyMHBpbGdyaW1hZ2V8ZW58MXx8fHwxNzczNjc5ODYyfDA&ixlib=rb-4.1.0&q=80&w=1080';
const IMG_BOAT = 'https://images.unsplash.com/photo-1552559590-952a24ab39ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMHJpdmVyJTIwYm9hdCUyMHN1bnJpc2UlMjBzcGlyaXR1YWx8ZW58MXx8fHwxNzczNjc5ODcwfDA&ixlib=rb-4.1.0&q=80&w=1080';

const stops = [
  {
    num: 1,
    name: 'Shri Vindhyavasini Temple',
    desc: 'Start at the main sanctum — the dwelling of Maa Vindhyavasini, the presiding Shakti of the Vindhya Hills.',
    duration: '30 min',
    image: IMG_HERITAGE,
    highlight: 'Main Shakti Peetha',
  },
  {
    num: 2,
    name: 'Kalikhoh Temple',
    desc: 'The cave temple of Maa Kali hidden inside a natural rocky cave. One of the most mystical sites in the triangle.',
    duration: '20 min',
    image: IMG_HWALK,
    highlight: 'Cave Shrine',
  },
  {
    num: 3,
    name: 'Ashtabhuja Temple',
    desc: 'The eight-armed form of Maa Durga, completing the sacred Vindhya Trikona. Located on an elevated platform.',
    duration: '20 min',
    image: IMG_HERITAGE,
    highlight: 'Part of Vindhya Trikona',
  },
  {
    num: 4,
    name: 'Ganga Ghat',
    desc: 'The sacred bathing ghat on the banks of River Ganga. Devotees take a holy dip before commencing temple visits.',
    duration: '15 min',
    image: IMG_RIVER,
    highlight: 'Sacred Ganga Snan',
  },
  {
    num: 5,
    name: 'Ram Gaya Ghat',
    desc: 'An ancient ghat believed to be where Lord Rama performed last rites during the Treta Yuga.',
    duration: '15 min',
    image: IMG_BOAT,
    highlight: 'Ancient Mythology',
  },
  {
    num: 6,
    name: 'Vindhyachal Bazaar',
    desc: 'A colourful market filled with prasad, religious items, flowers, and traditional Mirzapur handicrafts.',
    duration: '20 min',
    image: IMG_HWALK,
    highlight: 'Local Culture',
  },
];

const packages = [
  {
    id: 'morning',
    name: 'Morning Heritage Walk',
    time: '6:00 AM – 9:00 AM',
    duration: '3 Hours',
    price: 350,
    maxGroup: 20,
    includes: ['Expert guide', 'Temple entry assistance', 'Morning prasad', 'Ganga Aarti'],
    popular: false,
    image: IMG_HERITAGE,
  },
  {
    id: 'full',
    name: 'Full Heritage Tour',
    time: '7:00 AM – 1:00 PM',
    duration: '6 Hours',
    price: 699,
    maxGroup: 15,
    includes: ['Expert guide', 'All 6 temple stops', 'Ganga boat ride', 'Breakfast included', 'Photography guide'],
    popular: true,
    image: IMG_RIVER,
  },
  {
    id: 'evening',
    name: 'Evening Ghat Walk',
    time: '5:00 PM – 8:00 PM',
    duration: '3 Hours',
    price: 399,
    maxGroup: 25,
    includes: ['Expert guide', 'Ghat tour', 'Sandhya Aarti attendance', 'Cultural commentary'],
    popular: false,
    image: IMG_BOAT,
  },
];

export function HeritageWalk() {
  const [selectedPackage, setSelectedPackage] = useState('full');
  const [bookingDate, setBookingDate] = useState('');
  const [persons, setPersons] = useState(2);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const pkg = packages.find(p => p.id === selectedPackage)!;
  const today = new Date().toISOString().split('T')[0];

  return (
    <div style={{ backgroundColor: '#FFFBF5' }}>
      {/* Hero */}
      <div className="relative py-24 px-4 overflow-hidden">
        <img src={IMG_HWALK} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(14,28,0,0.75)' }} />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-green-300 text-xs mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white">Heritage Walk</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-green-600/40 border border-green-400/40 text-green-300 text-xs px-3 py-1 rounded-full mb-4">
            <Camera size={12} /> NEW EXPERIENCE
          </div>
          <h1 className="text-white mb-3" style={{ fontFamily: 'serif', fontSize: '2.8rem', lineHeight: 1.2 }}>
            Vindhyachal Heritage Walk
          </h1>
          <p className="text-gray-300 text-sm max-w-xl leading-relaxed mb-6">
            Embark on a guided journey through the sacred temples, ancient ghats and vibrant bazaars of Vindhyachal —
            uncovering centuries of mythology, architecture and devotion.
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              { icon: Clock, text: '3–6 Hours' },
              { icon: MapPin, text: '6 Sacred Sites' },
              { icon: Users, text: 'Max 25 per group' },
              { icon: Star, text: '4.9★ Rating' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white text-sm">
                <Icon size={14} className="text-amber-400" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left: Walk Details */}
          <div className="lg:col-span-2 space-y-10">
            {/* Route Stops */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-12 bg-green-400"></div>
                <span className="text-green-700 text-xs font-semibold uppercase tracking-widest">The Route</span>
              </div>
              <h2 className="text-gray-800 mb-6" style={{ fontFamily: 'serif', fontSize: '1.8rem' }}>
                Sacred Sites on the Walk
              </h2>
              <div className="relative">
                {/* vertical line */}
                <div className="absolute left-5 top-8 bottom-0 w-px bg-green-200" />
                <div className="space-y-6">
                  {stops.map((stop, i) => (
                    <div key={stop.num} className="flex gap-5">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 z-10"
                        style={{ backgroundColor: '#5C6219' }}
                      >
                        {stop.num}
                      </div>
                      <div className="flex-1 bg-white rounded-xl border border-green-100 overflow-hidden hover:shadow-md transition-shadow">
                        <div className="flex gap-4 p-4">
                          <img src={stop.image} alt={stop.name} className="w-24 h-20 object-cover rounded-lg shrink-0" />
                          <div>
                            <div className="flex items-start justify-between gap-2">
                              <h3 className="font-semibold text-gray-800">{stop.name}</h3>
                              <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full whitespace-nowrap">{stop.highlight}</span>
                            </div>
                            <p className="text-gray-500 text-sm mt-1 leading-relaxed">{stop.desc}</p>
                            <div className="flex items-center gap-1 mt-2 text-xs text-gray-400">
                              <Clock size={11} /> ~{stop.duration}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Packages */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-12 bg-amber-400"></div>
                <span className="text-amber-600 text-xs font-semibold uppercase tracking-widest">Packages</span>
              </div>
              <h2 className="text-gray-800 mb-6" style={{ fontFamily: 'serif', fontSize: '1.8rem' }}>
                Choose Your Experience
              </h2>
              <div className="grid md:grid-cols-3 gap-5">
                {packages.map((p) => (
                  <div
                    key={p.id}
                    className="rounded-2xl overflow-hidden border-2 cursor-pointer transition-all hover:shadow-lg"
                    style={{ borderColor: selectedPackage === p.id ? '#5C6219' : '#E5E7EB' }}
                    onClick={() => setSelectedPackage(p.id)}
                  >
                    <div className="relative h-32 overflow-hidden">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                      {p.popular && (
                        <div className="absolute top-2 right-2 text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: '#FFD700', color: '#8B0000' }}>
                          POPULAR
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 text-sm mb-1">{p.name}</h3>
                      <div className="text-xs text-gray-500 mb-3 space-y-0.5">
                        <div className="flex items-center gap-1"><Clock size={10} /> {p.time}</div>
                        <div className="flex items-center gap-1"><Users size={10} /> Max {p.maxGroup} persons</div>
                      </div>
                      <ul className="space-y-1 mb-3">
                        {p.includes.map((item) => (
                          <li key={item} className="flex items-center gap-1 text-xs text-gray-600">
                            <CheckCircle size={10} className="text-green-500 shrink-0" /> {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between">
                        <span className="font-bold" style={{ color: '#5C6219' }}>₹{p.price}/person</span>
                        <div
                          className="w-5 h-5 rounded-full border-2 flex items-center justify-center"
                          style={{ borderColor: selectedPackage === p.id ? '#5C6219' : '#D1D5DB' }}
                        >
                          {selectedPackage === p.id && (
                            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#5C6219' }} />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div>
            {!submitted ? (
              <div className="sticky top-28 bg-white rounded-2xl border border-green-100 overflow-hidden shadow-md">
                <div style={{ backgroundColor: '#5C6219' }} className="px-5 py-4">
                  <h3 className="text-white font-semibold">Book Heritage Walk</h3>
                  <p className="text-green-200 text-xs mt-0.5">Secure your spot today!</p>
                </div>
                <div className="p-5 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Selected Package</label>
                    <div className="bg-green-50 rounded-lg p-3 border border-green-100">
                      <div className="text-sm font-semibold text-gray-800">{pkg.name}</div>
                      <div className="text-xs text-gray-500">{pkg.time} · {pkg.duration}</div>
                      <div className="text-sm font-bold mt-1" style={{ color: '#5C6219' }}>₹{pkg.price}/person</div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Date *</label>
                    <input
                      type="date"
                      min={today}
                      value={bookingDate}
                      onChange={e => setBookingDate(e.target.value)}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Number of Persons *</label>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setPersons(Math.max(1, persons - 1))}
                        className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center font-bold text-gray-600 hover:bg-gray-50"
                      >
                        −
                      </button>
                      <span className="text-lg font-bold text-gray-800 w-6 text-center">{persons}</span>
                      <button
                        type="button"
                        onClick={() => setPersons(Math.min(pkg.maxGroup, persons + 1))}
                        className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center font-bold text-gray-600 hover:bg-gray-50"
                      >
                        +
                      </button>
                      <span className="text-xs text-gray-400">Max {pkg.maxGroup}</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Full name"
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Mobile Number *</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-300"
                    />
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 border border-green-100 text-xs font-semibold text-green-800 flex justify-between">
                    <span>Total Amount</span>
                    <span>₹{(pkg.price * persons).toLocaleString()}</span>
                  </div>
                  <button
                    onClick={() => name && phone && bookingDate && setSubmitted(true)}
                    disabled={!name || !phone || !bookingDate}
                    className="w-full py-3 rounded-xl text-sm font-semibold text-white disabled:opacity-50"
                    style={{ backgroundColor: '#5C6219' }}
                  >
                    Book Now — ₹{(pkg.price * persons).toLocaleString()}
                  </button>
                  <div className="flex items-start gap-1.5 text-xs text-gray-400">
                    <Info size={12} className="mt-0.5 shrink-0" />
                    <span>Meet at the temple main gate. Carry comfortable footwear and water.</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="sticky top-28 bg-white rounded-2xl border border-green-100 p-6 text-center shadow-md">
                <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4" style={{ backgroundColor: '#F0FDF4' }}>
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Booking Confirmed!</h3>
                <p className="text-gray-500 text-xs mb-1">
                  Heritage Walk booked for {persons} person{persons > 1 ? 's' : ''} on {bookingDate}.
                </p>
                <p className="text-gray-400 text-xs mb-4">
                  Ref: HW-{Math.random().toString(36).substr(2, 6).toUpperCase()}
                </p>
                <button
                  onClick={() => { setSubmitted(false); setName(''); setPhone(''); setBookingDate(''); }}
                  className="w-full py-2.5 rounded-lg text-sm font-semibold text-white"
                  style={{ backgroundColor: '#5C6219' }}
                >
                  Book Another Walk
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}