'use client';
/**
 * Next.js App Router — Donation Page  (/donation)
 * 'use client' — form state managed via useState.
 */
import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Heart, Shield, CheckCircle, Building, Info } from 'lucide-react';

const IMG_DIYA = 'https://images.unsplash.com/photo-1608949791834-ed30e0687dd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMHRlbXBsZSUyMGRpeWElMjBsYW1wJTIwc3Bpcml0dWFsJTIwZ2xvd3xlbnwxfHx8fDE3NzM2Nzk4Njd8MA&ixlib=rb-4.1.0&q=80&w=1080';
const IMG_HERO = 'https://images.unsplash.com/photo-1669557684147-e55c501708eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIaW5kdSUyMHRlbXBsZSUyMHNoaWtoYXJhJTIwdG93ZXIlMjBJbmRpYSUyMHNhY3JlZHxlbnwxfHx8fDE3NzM2Nzk4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080';

const categories = [
  { id: 'temple', label: 'Temple Maintenance', icon: Building, desc: 'For repair, renovation & upkeep of the temple complex' },
  { id: 'prasad', label: 'Free Prasad Distribution', icon: Heart, desc: 'Sponsor daily prasad for thousands of devotees' },
  { id: 'annadanam', label: 'Annadanam (Free Food)', icon: '🍱', desc: 'Feed pilgrims and the underprivileged every day' },
  { id: 'education', label: 'Education Fund', icon: '📚', desc: 'Support education for children in Vindhyachal region' },
  { id: 'festival', label: 'Festival Celebrations', icon: '🎉', desc: 'Contribute to grand Navratri & other festival celebrations' },
  { id: 'general', label: 'General Donation', icon: '🙏', desc: 'For the overall welfare of the Dham as decided by the Trust' },
];

const presetAmounts = [101, 251, 501, 1001, 2101, 5001, 11000, 51000];

const recentDonors = [
  { name: 'Ramesh Kumar', city: 'Delhi', amount: '₹5,001', time: '2 hrs ago' },
  { name: 'Sunita Devi', city: 'Varanasi', amount: '₹1,001', time: '3 hrs ago' },
  { name: 'Vikram Singh', city: 'Mumbai', amount: '₹11,000', time: '5 hrs ago' },
  { name: 'Ananya Sharma', city: 'Lucknow', amount: '₹501', time: '6 hrs ago' },
  { name: 'Mohan Gupta', city: 'Allahabad', amount: '₹2,101', time: '8 hrs ago' },
];

export function Donation() {
  const [category, setCategory] = useState('temple');
  const [amount, setAmount] = useState<number | ''>('');
  const [customAmount, setCustomAmount] = useState('');
  const [panCard, setPanCard] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const finalAmount = customAmount ? parseInt(customAmount) : amount;

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    if (finalAmount && name && phone) {
      setSuccess(true);
    }
  };

  if (success) {
    return (
      <div style={{ backgroundColor: '#FFFBF5' }} className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-5 shadow-lg" style={{ backgroundColor: '#F0FDF4' }}>
            <CheckCircle size={40} className="text-green-600" />
          </div>
          <h2 className="text-gray-800 mb-2" style={{ fontFamily: 'serif', fontSize: '2rem' }}>
            🙏 Thank You!
          </h2>
          <p className="text-gray-600 text-sm mb-2">
            Your donation of <strong>₹{finalAmount?.toLocaleString()}</strong> has been received.
          </p>
          <p className="text-gray-400 text-xs mb-2">
            Transaction ID: VDT-{Math.random().toString(36).substr(2, 9).toUpperCase()}
          </p>
          <p className="text-gray-500 text-sm mb-8">
            May Maa Vindhyavasini bless you and your family with health, happiness and prosperity.
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => { setSuccess(false); setAmount(''); setCustomAmount(''); }}
              className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white"
              style={{ backgroundColor: '#8B0000' }}
            >
              Donate Again
            </button>
            <Link href="/" className="px-5 py-2.5 rounded-lg text-sm font-medium border border-gray-200 text-gray-600 hover:bg-gray-50">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#FFFBF5' }}>
      {/* Header */}
      <div className="relative py-20 px-4 overflow-hidden">
        <img src={IMG_DIYA} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(26,10,0,0.8)' }} />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-red-300 text-xs mb-3">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white">Donation</span>
          </div>
          <h1 className="text-white mb-2" style={{ fontFamily: 'serif', fontSize: '2.5rem' }}>
            Make a Donation
          </h1>
          <p className="text-gray-300 text-sm max-w-lg">
            Your generous contribution helps preserve this sacred Shakti Peetha and serve millions of devotees.
            All donations are eligible for 80G tax exemption.
          </p>
          <div className="flex items-center gap-4 mt-5">
            <div className="flex items-center gap-1.5 text-green-400 text-xs">
              <Shield size={12} /> 100% Secure Payment
            </div>
            <div className="flex items-center gap-1.5 text-amber-400 text-xs">
              <CheckCircle size={12} /> 80G Tax Exemption
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Donation Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleDonate} className="space-y-8">
              {/* Category */}
              <div className="bg-white rounded-2xl border border-orange-100 p-6">
                <h2 className="font-semibold text-gray-800 mb-4">Choose Donation Category</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {categories.map((cat) => (
                    <button
                      type="button"
                      key={cat.id}
                      onClick={() => setCategory(cat.id)}
                      className="p-4 rounded-xl border-2 text-left transition-all"
                      style={
                        category === cat.id
                          ? { borderColor: '#8B0000', backgroundColor: '#FFF5F5' }
                          : { borderColor: '#F3F4F6', backgroundColor: 'white' }
                      }
                    >
                      <div className="text-xl mb-1.5">
                        {typeof cat.icon === 'string' ? cat.icon : <cat.icon size={18} className="text-red-700" />}
                      </div>
                      <div className="text-xs font-semibold text-gray-800">{cat.label}</div>
                      <div className="text-xs text-gray-400 mt-0.5 leading-tight">{cat.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount */}
              <div className="bg-white rounded-2xl border border-orange-100 p-6">
                <h2 className="font-semibold text-gray-800 mb-4">Select Donation Amount</h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  {presetAmounts.map((a) => (
                    <button
                      type="button"
                      key={a}
                      onClick={() => { setAmount(a); setCustomAmount(''); }}
                      className="px-4 py-2 rounded-lg text-sm font-medium border transition-colors"
                      style={
                        amount === a && !customAmount
                          ? { backgroundColor: '#8B0000', color: 'white', borderColor: '#8B0000' }
                          : { backgroundColor: 'white', color: '#374151', borderColor: '#E5E7EB' }
                      }
                    >
                      ₹{a.toLocaleString()}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">₹</span>
                  <input
                    type="number"
                    placeholder="Enter custom amount"
                    min="11"
                    value={customAmount}
                    onChange={(e) => { setCustomAmount(e.target.value); setAmount(''); }}
                    className="w-full border border-gray-200 rounded-lg pl-7 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                  />
                </div>
                {finalAmount && finalAmount > 0 && (
                  <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                    <CheckCircle size={11} /> Donating ₹{Number(finalAmount).toLocaleString()}
                  </p>
                )}
              </div>

              {/* Donor Details */}
              <div className="bg-white rounded-2xl border border-orange-100 p-6">
                <h2 className="font-semibold text-gray-800 mb-4">Donor Information</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">PAN Card (for 80G)</label>
                    <input
                      type="text"
                      placeholder="ABCDE1234F"
                      maxLength={10}
                      value={panCard}
                      onChange={e => setPanCard(e.target.value.toUpperCase())}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />
                  </div>
                </div>
                <div className="flex items-start gap-2 mt-4 text-xs text-gray-500 bg-orange-50 rounded-lg p-3">
                  <Info size={13} className="mt-0.5 text-orange-500 shrink-0" />
                  <span>Donation receipt will be sent to your registered email. PAN is required for 80G tax exemption certificate.</span>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-2xl border border-orange-100 p-6">
                <h2 className="font-semibold text-gray-800 mb-4">Payment Method</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['UPI', 'Net Banking', 'Credit Card', 'Debit Card'].map((method) => (
                    <button
                      type="button"
                      key={method}
                      className="p-3 rounded-xl border-2 text-center text-sm font-medium text-gray-700 hover:border-red-300 transition-colors"
                      style={{ borderColor: '#F3F4F6' }}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={!finalAmount || !name || !phone}
                className="w-full py-4 rounded-xl text-white font-semibold text-base flex items-center justify-center gap-2 disabled:opacity-50"
                style={{ backgroundColor: '#8B0000' }}
              >
                <Heart size={18} fill="white" />
                Donate ₹{finalAmount ? Number(finalAmount).toLocaleString() : '---'}
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="rounded-2xl overflow-hidden">
              <img src={IMG_HERO} alt="" className="w-full h-40 object-cover" />
              <div className="bg-white border border-t-0 border-orange-100 p-5 rounded-b-2xl">
                <h3 className="font-semibold text-gray-800 mb-2">Why Donate?</h3>
                <ul className="space-y-2">
                  {[
                    '80G tax exemption available',
                    'Helps preserve a 1000-year-old heritage',
                    'Funds daily prasad for devotees',
                    'Supports local community welfare',
                    'Upkeep of Ganga Ghat & premises',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-1.5 text-xs text-gray-600">
                      <span className="text-amber-600 mt-0.5">✦</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Recent Donors */}
            <div className="bg-white rounded-2xl border border-orange-100 p-5">
              <h3 className="font-semibold text-gray-800 mb-4">Recent Donations</h3>
              <div className="space-y-3">
                {recentDonors.map((d, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                        style={{ backgroundColor: '#8B0000' }}
                      >
                        {d.name[0]}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-800">{d.name}</div>
                        <div className="text-xs text-gray-400">{d.city} · {d.time}</div>
                      </div>
                    </div>
                    <span className="text-sm font-semibold" style={{ color: '#8B0000' }}>{d.amount}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Info */}
            <div className="bg-amber-50 rounded-2xl border border-amber-200 p-5">
              <div className="flex items-center gap-2 mb-2">
                <Shield size={16} className="text-amber-700" />
                <span className="font-semibold text-amber-800 text-sm">Trust & Safety</span>
              </div>
              <p className="text-amber-700 text-xs leading-relaxed">
                Donations are managed by the Shri Vindhyavasini Dham Trust, registered under the
                Indian Trusts Act. All transactions are 100% secure and transparent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}