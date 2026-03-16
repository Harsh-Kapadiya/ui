'use client';
/**
 * Next.js App Router — Contact Us Page  (/contact)
 * 'use client' — contact form state + FAQ accordion via useState.
 */
import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, MapPin, Phone, Mail, Clock, Train, Car, Plane, CheckCircle, MessageSquare } from 'lucide-react';

const IMG_LANDSCAPE = 'https://images.unsplash.com/photo-1728473356050-34c7aae97593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaW5kaHlhJTIwbW91bnRhaW4lMjBsYW5kc2NhcGUlMjBVdHRhciUyMFByYWRlc2glMjBJbmRpYXxlbnwxfHx8fDE3NzM2ODA1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080';

const transport = [
  {
    icon: Train,
    mode: 'By Rail',
    color: '#1E40AF',
    bg: '#EFF6FF',
    details: [
      'Nearest Railway Station: Vindhyachal Station (1 km)',
      'Major Station: Mirzapur Railway Station (8 km)',
      'Varanasi Junction: ~70 km (1.5 hrs)',
      'Allahabad Junction: ~90 km (2 hrs)',
    ],
  },
  {
    icon: Car,
    mode: 'By Road',
    color: '#166534',
    bg: '#F0FDF4',
    details: [
      'Varanasi – Vindhyachal: ~70 km via NH 19',
      'Allahabad – Vindhyachal: ~90 km via NH 19',
      'Lucknow – Vindhyachal: ~300 km via NH 27',
      'Delhi – Vindhyachal: ~710 km via Agra/Allahabad',
    ],
  },
  {
    icon: Plane,
    mode: 'By Air',
    color: '#7E22CE',
    bg: '#FAF5FF',
    details: [
      'Varanasi Airport (Lal Bahadur Shastri): ~80 km',
      'Prayagraj Airport: ~95 km',
      'Cabs & taxis available from both airports',
      'Helicopter service from Varanasi on request',
    ],
  },
];

const faqs = [
  { q: 'What are the temple opening hours?', a: 'The temple is open daily from 5:00 AM to 11:00 PM. Special hours apply on festival days like Navratri.' },
  { q: 'Is photography allowed inside the temple?', a: 'Photography inside the main sanctum (garbhagriha) is strictly prohibited. Photography in the outer premises is allowed.' },
  { q: 'Is there a dress code for visiting the temple?', a: 'Devotees are requested to wear traditional/modest attire. Avoid western wear inside the sanctum. Footwear is to be removed at the entrance.' },
  { q: 'How far in advance should I book an Aarti slot?', a: 'We recommend booking at least 3–5 days in advance, especially during Navratri when slots fill quickly.' },
  { q: 'Is the Prasad delivery service available Pan-India?', a: 'Yes, we deliver sacred prasad across India within 5–7 business days. International delivery is not available currently.' },
  { q: 'Can I visit multiple temples in the Vindhya Trikona in one day?', a: 'Yes! The Vindhya Triangle (Vindhyavasini, Kalikhoh & Ashtabhuja temples) can all be visited in one day. Our Heritage Walk covers all three sites.' },
];

export function ContactUs() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.phone && form.message) {
      setSubmitted(true);
    }
  };

  return (
    <div style={{ backgroundColor: '#FFFBF5' }}>
      {/* Hero */}
      <div className="relative py-20 px-4 overflow-hidden">
        <img src={IMG_LANDSCAPE} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(26,10,0,0.78)' }} />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-red-300 text-xs mb-3">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white">Contact Us</span>
          </div>
          <h1 className="text-white mb-2" style={{ fontFamily: 'serif', fontSize: '2.5rem' }}>
            Contact & Visit Information
          </h1>
          <p className="text-gray-300 text-sm max-w-lg leading-relaxed">
            Reach out to us for queries, bookings, or just to seek guidance for your pilgrimage to Vindhyachal Dham.
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="bg-white py-10 px-4 border-b border-orange-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { icon: Phone, label: 'Call Us', value: '+91-9415-XXXXX', sub: 'Mon–Sun: 6AM–10PM', color: '#8B0000' },
            { icon: Mail, label: 'Email', value: 'info@vindhyachal.org', sub: 'Reply within 24 hrs', color: '#C8490C' },
            { icon: MapPin, label: 'Address', value: 'Vindhyachal, Mirzapur', sub: 'UP – 231307, India', color: '#A16207' },
            { icon: Clock, label: 'Temple Hours', value: '5:00 AM – 11:00 PM', sub: 'Open 365 days', color: '#5C6219' },
          ].map(({ icon: Icon, label, value, sub, color }) => (
            <div key={label} className="text-center p-4 bg-orange-50 rounded-2xl border border-orange-100">
              <div className="w-10 h-10 rounded-full mx-auto flex items-center justify-center mb-3" style={{ backgroundColor: color + '22' }}>
                <Icon size={18} style={{ color }} />
              </div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{label}</div>
              <div className="text-sm font-semibold text-gray-800">{value}</div>
              <div className="text-xs text-gray-400 mt-0.5">{sub}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-12 bg-amber-400" />
              <span className="text-amber-600 text-xs font-semibold uppercase tracking-widest">Write to Us</span>
            </div>
            <h2 className="text-gray-900 mb-6" style={{ fontFamily: 'serif', fontSize: '1.8rem' }}>
              Send a Message
            </h2>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-orange-100 p-6 space-y-5 shadow-sm">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Full name"
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                  <select
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="aarti">Aarti Booking Query</option>
                    <option value="donation">Donation Query</option>
                    <option value="prasad">Online Prasad</option>
                    <option value="heritage">Heritage Walk</option>
                    <option value="pooja">Pooja Services</option>
                    <option value="accommodation">Accommodation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Message *</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Write your message here..."
                    rows={4}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2"
                  style={{ backgroundColor: '#8B0000' }}
                >
                  <MessageSquare size={16} /> Send Message
                </button>
              </form>
            ) : (
              <div className="bg-white rounded-2xl border border-green-100 p-8 text-center shadow-sm">
                <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4" style={{ backgroundColor: '#F0FDF4' }}>
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2" style={{ fontFamily: 'serif' }}>Message Sent!</h3>
                <p className="text-gray-500 text-sm mb-6">
                  🙏 Thank you for contacting us. Our team will get back to you at {form.phone || form.email} within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', subject: '', message: '' }); }}
                  className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white"
                  style={{ backgroundColor: '#8B0000' }}
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Map */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-12 bg-amber-400" />
                <span className="text-amber-600 text-xs font-semibold uppercase tracking-widest">Location</span>
              </div>
              <h2 className="text-gray-900 mb-4" style={{ fontFamily: 'serif', fontSize: '1.8rem' }}>
                Find Us on Map
              </h2>
              <div className="rounded-2xl overflow-hidden border border-orange-100 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.6!2d82.573!3d25.129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fd9e4c0ea71b9%3A0x8a18e7c4d6b56ab5!2sVindhyavasini+Temple!5e0!3m2!1sen!2sin!4v1616000000000"
                  width="100%"
                  height="240"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Temple Location Map"
                />
              </div>
              <div className="mt-3 flex items-start gap-2 text-sm text-gray-600">
                <MapPin size={16} className="text-amber-600 mt-0.5 shrink-0" />
                <span>Shri Vindhyavasini Dham, Vindhyachal, Mirzapur – 231307, Uttar Pradesh, India</span>
              </div>
            </div>

            {/* How to Reach */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-amber-400" />
                <span className="text-amber-600 text-xs font-semibold uppercase tracking-widest">How to Reach</span>
              </div>
              <div className="space-y-4">
                {transport.map(({ icon: Icon, mode, color, bg, details }) => (
                  <div key={mode} className="rounded-xl border border-gray-100 overflow-hidden">
                    <div
                      className="flex items-center gap-3 px-4 py-3"
                      style={{ backgroundColor: bg }}
                    >
                      <Icon size={16} style={{ color }} />
                      <span className="text-sm font-semibold" style={{ color }}>{mode}</span>
                    </div>
                    <div className="bg-white px-4 py-3">
                      <ul className="space-y-1.5">
                        {details.map((d) => (
                          <li key={d} className="text-xs text-gray-600 flex items-start gap-1.5">
                            <span className="mt-1 shrink-0" style={{ color }}>›</span> {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-12 bg-amber-400" />
              <span className="text-amber-600 text-xs font-semibold uppercase tracking-widest">FAQs</span>
              <div className="h-px w-12 bg-amber-400" />
            </div>
            <h2 className="text-gray-900" style={{ fontSize: '2rem', fontFamily: 'serif' }}>
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-orange-100 overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-sm font-semibold text-gray-800">{faq.q}</span>
                  <span
                    className="text-xl font-light shrink-0 ml-3 transition-transform"
                    style={{ color: '#8B0000', transform: openFaq === i ? 'rotate(45deg)' : 'none' }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4">
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}