'use client';
/**
 * Next.js App Router — Online Prasad Page  (/online-prasad)
 * 'use client' — product selection, qty, form, order state via useState.
 */
import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Gift, CheckCircle, Truck, Star, Info, Shield, Package } from 'lucide-react';

const IMG_PRASAD = 'https://images.unsplash.com/photo-1727539146283-7f38fee3983b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1wbGUlMjBwcmFzYWQlMjBvZmZlcmluZyUyMGZsb3dlcnMlMjBkZXZvdGlvbnxlbnwxfHx8fDE3NzM2ODA1OTB8MA&ixlib=rb-4.1.0&q=80&w=1080';
const IMG_AARTI = 'https://images.unsplash.com/photo-1763186868095-d63ef07ae843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIaW5kdSUyMGFhcnRpJTIwY2VyZW1vbnklMjBHYW5nYSUyMHJpdmVyJTIwbmlnaHR8ZW58MXx8fHwxNzczNjgwNTg3fDA&ixlib=rb-4.1.0&q=80&w=1080';
const IMG_OFFERINGS = 'https://images.unsplash.com/photo-1758924411346-4e49c4f3afde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjByZWxpZ2lvdXMlMjBjZXJlbW9ueSUyMHB1amElMjByaXR1YWwlMjBmaXJlfGVufDF8fHx8MTc3MzY3OTg3MHww&ixlib=rb-4.1.0&q=80&w=1080';

const prasadItems = [
  {
    id: 'standard',
    name: 'Standard Prasad Pack',
    weight: '250g',
    price: 151,
    image: IMG_PRASAD,
    description: 'Sacred prasad from Maa Vindhyavasini including batashe, mishri, panjiri and dried fruits.',
    rating: 4.8,
    reviews: 2341,
    includes: ['Batashe & Mishri', 'Panjiri 100g', 'Sindoor packet', 'Blessed red thread'],
    badge: null,
    color: '#C8490C',
  },
  {
    id: 'navratri',
    name: 'Navratri Special Pack',
    weight: '500g',
    price: 301,
    image: IMG_AARTI,
    description: 'Special Navratri prasad blessed during the ashtami celebrations, includes extra items.',
    rating: 5.0,
    reviews: 5219,
    includes: ['All Standard items', 'Navratri halwa 200g', 'Devi Stuti booklet', 'Sacred ash (vibhuti)', 'Marigold garland'],
    badge: 'POPULAR',
    color: '#8B0000',
  },
  {
    id: 'premium',
    name: 'Deluxe Prasad Box',
    weight: '750g',
    price: 551,
    image: IMG_OFFERINGS,
    description: 'A premium gift-quality prasad box perfect for family, gifting and special occasions.',
    rating: 4.9,
    reviews: 1203,
    includes: ['All Navratri items', 'Dry fruits assortment', 'Temple photo frame', 'Sacred Ganga Jal 50ml', 'Agarbatti pack'],
    badge: 'PREMIUM',
    color: '#A16207',
  },
];

const testimonials = [
  { name: 'Priya Sharma', city: 'Delhi', text: 'Received the prasad in perfect condition, beautifully packed. Felt truly blessed!', rating: 5 },
  { name: 'Suresh Yadav', city: 'Mumbai', text: 'Ordered for my parents on Navratri. The delivery was on time and packaging was great.', rating: 5 },
  { name: 'Anita Verma', city: 'Bangalore', text: 'The prasad smelled divine. Will definitely order again for every Navratri.', rating: 5 },
];

export function OnlinePrasad() {
  const [selected, setSelected] = useState('navratri');
  const [qty, setQty] = useState(1);
  const [form, setForm] = useState({ name: '', phone: '', address: '', pincode: '', city: '' });
  const [ordered, setOrdered] = useState(false);

  const item = prasadItems.find(p => p.id === selected)!;
  const total = item.price * qty;

  return (
    <div style={{ backgroundColor: '#FFFBF5' }}>
      {/* Header */}
      <div style={{ backgroundColor: '#8B0000' }} className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-red-300 text-xs mb-3">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white">Online Prasad</span>
          </div>
          <div className="flex items-center gap-3">
            <Gift size={24} className="text-amber-400" />
            <div>
              <h1 className="text-white" style={{ fontFamily: 'serif', fontSize: '2rem' }}>Online Prasad</h1>
              <p className="text-red-200 text-sm">Receive Maa's blessings at your doorstep — across India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-white border-b border-orange-100 py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6">
          {[
            { icon: Shield, text: '100% Authentic Prasad' },
            { icon: Truck, text: 'Pan-India Delivery' },
            { icon: Package, text: 'Tamper-proof Packaging' },
            { icon: CheckCircle, text: 'Temple-blessed Items' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-xs text-gray-600">
              <Icon size={14} className="text-amber-600" /> {text}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Prasad Selection */}
          <div className="lg:col-span-2 space-y-8">
            {/* Products */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-amber-400" />
                <span className="text-amber-600 text-xs font-semibold uppercase tracking-widest">Choose Your Prasad</span>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {prasadItems.map(p => (
                  <div
                    key={p.id}
                    className="bg-white rounded-2xl border-2 overflow-hidden cursor-pointer hover:shadow-lg transition-all"
                    style={{ borderColor: selected === p.id ? p.color : '#E5E7EB' }}
                    onClick={() => setSelected(p.id)}
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                      {p.badge && (
                        <div
                          className="absolute top-2 left-2 text-xs font-bold px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: '#FFD700', color: '#8B0000' }}
                        >
                          {p.badge}
                        </div>
                      )}
                      {selected === p.id && (
                        <div className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: p.color }}>
                          <CheckCircle size={14} className="text-white" fill="white" />
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 text-sm mb-0.5" style={{ fontFamily: 'serif' }}>{p.name}</h3>
                      <div className="text-xs text-gray-400 mb-2">{p.weight} pack</div>
                      <div className="flex items-center gap-1 text-xs text-amber-500 mb-2">
                        <Star size={11} fill="currentColor" /> {p.rating} ({p.reviews.toLocaleString()} reviews)
                      </div>
                      <div className="font-bold" style={{ color: p.color }}>₹{p.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Item Details */}
            <div className="bg-white rounded-2xl border border-orange-100 p-6">
              <div className="flex flex-col md:flex-row gap-5">
                <img src={item.image} alt={item.name} className="w-full md:w-32 h-40 md:h-28 object-cover rounded-xl shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1" style={{ fontFamily: 'serif' }}>{item.name}</h3>
                  <p className="text-gray-500 text-sm mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.includes.map(inc => (
                      <span key={inc} className="flex items-center gap-1 text-xs text-gray-600 bg-orange-50 px-2 py-1 rounded-full">
                        <CheckCircle size={10} className="text-orange-500" /> {inc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-12 bg-amber-400" />
                <span className="text-amber-600 text-xs font-semibold uppercase tracking-widest">Devotee Reviews</span>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {testimonials.map((t) => (
                  <div key={t.name} className="bg-white rounded-xl border border-orange-100 p-4">
                    <div className="flex items-center gap-1 text-amber-400 mb-2">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={12} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3 italic">"{t.text}"</p>
                    <div className="text-sm font-semibold text-gray-700">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.city}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Form */}
          <div>
            {!ordered ? (
              <div className="sticky top-28 bg-white rounded-2xl border border-orange-100 overflow-hidden shadow-md">
                <div style={{ backgroundColor: '#8B0000' }} className="px-5 py-4">
                  <h3 className="text-white font-semibold">Order Prasad</h3>
                  <p className="text-red-200 text-xs mt-0.5">Delivery within 5-7 business days</p>
                </div>
                <div className="p-5 space-y-4">
                  {/* Item Summary */}
                  <div className="bg-orange-50 border border-orange-100 rounded-lg p-3">
                    <div className="text-sm font-semibold text-gray-800">{item.name}</div>
                    <div className="text-xs text-gray-500">{item.weight}</div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="font-bold" style={{ color: '#8B0000' }}>₹{item.price}/pack</div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setQty(Math.max(1, qty - 1))}
                          className="w-6 h-6 rounded-full border border-gray-200 text-sm flex items-center justify-center font-bold text-gray-600"
                        >
                          −
                        </button>
                        <span className="text-sm font-bold text-gray-800 w-4 text-center">{qty}</span>
                        <button
                          onClick={() => setQty(Math.min(10, qty + 1))}
                          className="w-6 h-6 rounded-full border border-gray-200 text-sm flex items-center justify-center font-bold text-gray-600"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Delivery Form */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Recipient Name *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Full name"
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Mobile Number *</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Delivery Address *</label>
                    <textarea
                      value={form.address}
                      onChange={e => setForm({ ...form, address: e.target.value })}
                      placeholder="House no., street, locality..."
                      rows={2}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 resize-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">City</label>
                      <input
                        type="text"
                        value={form.city}
                        onChange={e => setForm({ ...form, city: e.target.value })}
                        placeholder="City"
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Pincode *</label>
                      <input
                        type="text"
                        maxLength={6}
                        value={form.pincode}
                        onChange={e => setForm({ ...form, pincode: e.target.value })}
                        placeholder="XXXXXX"
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                      />
                    </div>
                  </div>

                  {/* Total */}
                  <div className="bg-amber-50 border border-amber-100 rounded-lg p-3 flex justify-between text-sm font-bold">
                    <span>Total ({qty} pack{qty > 1 ? 's' : ''})</span>
                    <span style={{ color: '#8B0000' }}>₹{total.toLocaleString()}</span>
                  </div>

                  <div className="flex items-start gap-1.5 text-xs text-gray-400">
                    <Info size={11} className="mt-0.5 shrink-0" />
                    Free delivery on orders above ₹499. Standard shipping ₹49.
                  </div>

                  <button
                    onClick={() => form.name && form.phone && form.address && form.pincode && setOrdered(true)}
                    disabled={!form.name || !form.phone || !form.address || !form.pincode}
                    className="w-full py-3 rounded-xl text-sm font-semibold text-white disabled:opacity-50"
                    style={{ backgroundColor: '#8B0000' }}
                  >
                    Place Order — ₹{total.toLocaleString()}
                  </button>
                </div>
              </div>
            ) : (
              <div className="sticky top-28 bg-white rounded-2xl border border-green-100 p-6 text-center shadow-md">
                <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4" style={{ backgroundColor: '#F0FDF4' }}>
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Order Placed!</h3>
                <p className="text-gray-500 text-xs mb-1">
                  🙏 Jai Mata Di! Your prasad will be delivered to {form.city || 'your address'} within 5–7 business days.
                </p>
                <p className="text-gray-400 text-xs mb-4">
                  Order ID: PR-{Math.random().toString(36).substr(2, 8).toUpperCase()}
                </p>
                <button
                  onClick={() => { setOrdered(false); setForm({ name: '', phone: '', address: '', pincode: '', city: '' }); setQty(1); }}
                  className="w-full py-2.5 rounded-lg text-sm font-semibold text-white"
                  style={{ backgroundColor: '#8B0000' }}
                >
                  Order Another
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}