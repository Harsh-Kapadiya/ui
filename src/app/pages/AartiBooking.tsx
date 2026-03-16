'use client';
/**
 * Next.js App Router — Aarti Booking Page  (/aarti-booking)
 * 'use client' — multi-step form driven by useState.
 */
import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Calendar, Clock, Users, CheckCircle, Info } from 'lucide-react';

const IMG_AARTI = 'https://images.unsplash.com/photo-1767278608250-e87182850006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIaW5kdSUyMHRlbXBsZSUyMGFhcnRpJTIwY2VyZW1vbnklMjBJbmRpYXxlbnwxfHx8fDE3NzM2Nzk4NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080';

const aartiOptions = [
  {
    id: 'mangala',
    name: 'Mangala Aarti',
    time: '4:00 AM – 4:30 AM',
    desc: 'Auspicious early morning aarti to welcome the Goddess',
    price: '₹ 251',
    slots: 50,
    available: 22,
    color: '#6B21A8',
    bg: '#FAF5FF',
  },
  {
    id: 'shringar',
    name: 'Shringar Aarti',
    time: '6:00 AM – 6:30 AM',
    desc: 'Adorning the Goddess with ornaments, flowers & fragrance',
    price: '₹ 501',
    slots: 40,
    available: 8,
    color: '#C8490C',
    bg: '#FFF5EE',
  },
  {
    id: 'bhog',
    name: 'Bhog Aarti',
    time: '12:00 PM – 12:30 PM',
    desc: 'Offering of sacred food (bhog) to the Goddess at noon',
    price: '₹ 351',
    slots: 60,
    available: 35,
    color: '#A16207',
    bg: '#FEFCE8',
  },
  {
    id: 'sandhya',
    name: 'Sandhya Aarti',
    time: '7:00 PM – 7:30 PM',
    desc: 'Beautiful evening aarti with lamps, incense and hymns',
    price: '₹ 501',
    slots: 50,
    available: 0,
    color: '#0E7490',
    bg: '#ECFEFF',
  },
  {
    id: 'shayan',
    name: 'Shayan Aarti',
    time: '10:30 PM – 11:00 PM',
    desc: 'Serene night aarti as the Goddess is put to rest',
    price: '₹ 251',
    slots: 30,
    available: 14,
    color: '#8B0000',
    bg: '#FFF5F5',
  },
];

type BookingStep = 'select' | 'details' | 'confirm' | 'success';

export function AartiBooking() {
  const [step, setStep] = useState<BookingStep>('select');
  const [selected, setSelected] = useState('');
  const [date, setDate] = useState('');
  const [form, setForm] = useState({ name: '', phone: '', email: '', persons: '1', gotram: '' });

  const selectedAarti = aartiOptions.find(a => a.id === selected);

  const today = new Date().toISOString().split('T')[0];

  return (
    <div style={{ backgroundColor: '#FFFBF5' }}>
      {/* Header */}
      <div style={{ backgroundColor: '#8B0000' }} className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-red-300 text-xs mb-3">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white">Aarti Booking</span>
          </div>
          <h1 className="text-white mb-1" style={{ fontFamily: 'serif', fontSize: '2rem' }}>
            Aarti Booking
          </h1>
          <p className="text-red-200 text-sm">
            Book your seat for the divine aarti of Maa Vindhyavasini
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Stepper */}
        <div className="flex items-center justify-center gap-4 mb-10">
          {['select', 'details', 'confirm', 'success'].map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors"
                style={
                  step === s
                    ? { backgroundColor: '#8B0000', color: 'white', borderColor: '#8B0000' }
                    : ['select', 'details', 'confirm', 'success'].indexOf(step) > i
                    ? { backgroundColor: '#16A34A', color: 'white', borderColor: '#16A34A' }
                    : { backgroundColor: 'white', color: '#9CA3AF', borderColor: '#D1D5DB' }
                }
              >
                {['select', 'details', 'confirm', 'success'].indexOf(step) > i ? '✓' : i + 1}
              </div>
              <span className="text-xs hidden sm:block" style={{ color: step === s ? '#8B0000' : '#9CA3AF' }}>
                {s === 'select' ? 'Select Aarti' : s === 'details' ? 'Your Details' : s === 'confirm' ? 'Confirm' : 'Done'}
              </span>
              {i < 3 && <div className="w-8 sm:w-16 h-px" style={{ backgroundColor: '#E5E7EB' }} />}
            </div>
          ))}
        </div>

        {/* Step 1: Select Aarti */}
        {step === 'select' && (
          <div>
            <h2 className="text-gray-800 mb-1" style={{ fontFamily: 'serif', fontSize: '1.5rem' }}>Choose an Aarti</h2>
            <p className="text-gray-500 text-sm mb-6">Select the aarti you wish to attend and pick a date</p>

            {/* Date Picker */}
            <div className="bg-white rounded-xl border border-orange-100 p-5 mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Select Date</label>
              <input
                type="date"
                min={today}
                value={date}
                onChange={e => setDate(e.target.value)}
                className="w-full sm:w-64 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
            </div>

            <div className="space-y-4">
              {aartiOptions.map((aarti) => (
                <div
                  key={aarti.id}
                  className="bg-white rounded-xl border-2 p-5 cursor-pointer transition-all hover:shadow-md"
                  style={{ borderColor: selected === aarti.id ? aarti.color : '#FEE2E2' }}
                  onClick={() => aarti.available > 0 && setSelected(aarti.id)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-4 h-4 rounded-full border-2 mt-0.5 shrink-0 flex items-center justify-center"
                        style={{ borderColor: selected === aarti.id ? aarti.color : '#D1D5DB' }}
                      >
                        {selected === aarti.id && (
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: aarti.color }} />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-gray-900">{aarti.name}</h3>
                          {aarti.available === 0 && (
                            <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">Full</span>
                          )}
                          {aarti.available > 0 && aarti.available < 10 && (
                            <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
                              Only {aarti.available} left
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                          <Clock size={11} /> {aarti.time}
                        </div>
                        <p className="text-sm text-gray-500">{aarti.desc}</p>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-bold text-gray-900" style={{ color: aarti.color }}>{aarti.price}</div>
                      <div className="text-xs text-gray-400">per person</div>
                      <div className="text-xs text-gray-400 mt-1">
                        <Users size={10} className="inline" /> {aarti.available}/{aarti.slots} available
                      </div>
                    </div>
                  </div>
                  {/* Availability bar */}
                  <div className="mt-3 ml-8 h-1.5 bg-gray-100 rounded-full">
                    <div
                      className="h-1.5 rounded-full"
                      style={{
                        width: `${(aarti.available / aarti.slots) * 100}%`,
                        backgroundColor: aarti.available === 0 ? '#EF4444' : aarti.available < 10 ? '#F59E0B' : '#16A34A',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-6">
              <button
                onClick={() => selected && date && setStep('details')}
                disabled={!selected || !date}
                className="px-8 py-3 rounded-lg text-sm font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: '#8B0000' }}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Details */}
        {step === 'details' && selectedAarti && (
          <div>
            <h2 className="text-gray-800 mb-1" style={{ fontFamily: 'serif', fontSize: '1.5rem' }}>Enter Your Details</h2>
            <p className="text-gray-500 text-sm mb-6">Provide your information for the aarti booking</p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-white rounded-xl border border-orange-100 p-6 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Mobile Number *</label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Number of Persons *</label>
                    <select
                      value={form.persons}
                      onChange={e => setForm({ ...form, persons: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                    >
                      {[1, 2, 3, 4, 5].map(n => (
                        <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'Persons'}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Gotra (Optional)</label>
                    <input
                      type="text"
                      placeholder="Your gotra"
                      value={form.gotram}
                      onChange={e => setForm({ ...form, gotram: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />
                  </div>
                </div>
                <div className="flex items-start gap-2 text-xs text-gray-500 bg-orange-50 rounded-lg p-3">
                  <Info size={13} className="mt-0.5 shrink-0 text-orange-500" />
                  <span>A confirmation will be sent to your email/phone. Please carry a valid ID for verification at the temple.</span>
                </div>
              </div>

              {/* Summary */}
              <div className="bg-white rounded-xl border border-orange-100 p-5 h-fit">
                <h3 className="font-semibold text-gray-800 mb-4">Booking Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Aarti</span>
                    <span className="font-medium">{selectedAarti.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Date</span>
                    <span className="font-medium">{date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Time</span>
                    <span className="font-medium">{selectedAarti.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Persons</span>
                    <span className="font-medium">{form.persons}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Price/person</span>
                    <span className="font-medium">{selectedAarti.price}</span>
                  </div>
                  <div className="border-t border-gray-100 pt-3 flex justify-between font-bold">
                    <span>Total</span>
                    <span style={{ color: '#8B0000' }}>
                      ₹ {parseInt(selectedAarti.price.replace(/[^0-9]/g, '')) * parseInt(form.persons)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setStep('select')}
                className="px-6 py-2.5 rounded-lg text-sm font-medium border border-gray-200 text-gray-600 hover:bg-gray-50"
              >
                Back
              </button>
              <button
                onClick={() => form.name && form.phone && setStep('confirm')}
                disabled={!form.name || !form.phone}
                className="px-8 py-2.5 rounded-lg text-sm font-semibold text-white disabled:opacity-50"
                style={{ backgroundColor: '#8B0000' }}
              >
                Proceed to Confirm
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Confirm */}
        {step === 'confirm' && selectedAarti && (
          <div className="max-w-lg mx-auto">
            <h2 className="text-gray-800 mb-1 text-center" style={{ fontFamily: 'serif', fontSize: '1.5rem' }}>Confirm Booking</h2>
            <p className="text-gray-500 text-sm mb-6 text-center">Review your details before payment</p>

            <div className="bg-white rounded-2xl border border-orange-100 overflow-hidden">
              <div className="relative h-32 overflow-hidden">
                <img src={IMG_AARTI} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-white text-xl" style={{ fontFamily: 'serif' }}>{selectedAarti.name}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-3 text-sm">
                  {[
                    ['Name', form.name],
                    ['Phone', form.phone],
                    ['Email', form.email || 'Not provided'],
                    ['Date', date],
                    ['Time', selectedAarti.time],
                    ['Persons', form.persons],
                    ['Gotra', form.gotram || 'Not provided'],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between py-2 border-b border-gray-50 last:border-b-0">
                      <span className="text-gray-500">{label}</span>
                      <span className="font-medium text-gray-800">{value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between py-2 mt-1 bg-orange-50 rounded-lg px-3 font-bold">
                    <span>Total Amount</span>
                    <span style={{ color: '#8B0000' }}>
                      ₹ {parseInt(selectedAarti.price.replace(/[^0-9]/g, '')) * parseInt(form.persons)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setStep('success')}
                  className="w-full mt-5 py-3 rounded-lg text-sm font-semibold text-white"
                  style={{ backgroundColor: '#8B0000' }}
                >
                  Pay & Confirm Booking
                </button>
                <button
                  onClick={() => setStep('details')}
                  className="w-full mt-2 py-2.5 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  Edit Details
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Success */}
        {step === 'success' && selectedAarti && (
          <div className="max-w-lg mx-auto text-center py-8">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg"
              style={{ backgroundColor: '#F0FDF4' }}
            >
              <CheckCircle size={40} className="text-green-600" />
            </div>
            <h2 className="text-gray-800 mb-2" style={{ fontFamily: 'serif', fontSize: '1.8rem' }}>
              Booking Confirmed!
            </h2>
            <p className="text-gray-500 text-sm mb-2">
              🙏 Jai Mata Di! Your booking for <strong>{selectedAarti.name}</strong> on <strong>{date}</strong> is confirmed.
            </p>
            <p className="text-gray-400 text-xs mb-8">
              Booking ID: VD-{Math.random().toString(36).substr(2, 8).toUpperCase()}<br />
              A confirmation has been sent to your phone/email.
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => { setStep('select'); setSelected(''); setDate(''); setForm({ name: '', phone: '', email: '', persons: '1', gotram: '' }); }}
                className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white"
                style={{ backgroundColor: '#8B0000' }}
              >
                Book Another Aarti
              </button>
              <Link
                href="/"
                className="px-5 py-2.5 rounded-lg text-sm font-medium border border-gray-200 text-gray-600 hover:bg-gray-50"
              >
                Back to Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}