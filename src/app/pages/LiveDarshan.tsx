'use client';
/**
 * Next.js App Router — Live Darshan Page  (/live-darshan)
 * 'use client' — uses useState for play/camera toggle.
 */
import { useState } from 'react';
import Link from 'next/link';
import { Play, Maximize2, Volume2, VolumeX, Users, Clock, RefreshCw, Calendar, ChevronRight } from 'lucide-react';

const IMG_AARTI = 'https://images.unsplash.com/photo-1767278608250-e87182850006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIaW5kdSUyMHRlbXBsZSUyMGFhcnRpJTIwY2VyZW1vbnklMjBJbmRpYXxlbnwxfHx8fDE3NzM2Nzk4NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080';
const IMG_DIYA = 'https://images.unsplash.com/photo-1608949791834-ed30e0687dd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMHRlbXBsZSUyMGRpeWElMjBsYW1wJTIwc3Bpcml0dWFsJTIwZ2xvd3xlbnwxfHx8fDE3NzM2Nzk4Njd8MA&ixlib=rb-4.1.0&q=80&w=1080';
const IMG_PUJA = 'https://images.unsplash.com/photo-1758924411346-4e49c4f3afde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjByZWxpZ2lvdXMlMjBjZXJlbW9ueSUyMHB1amElMjByaXR1YWwlMjBmaXJlfGVufDF8fHx8MTc3MzY3OTg3MHww&ixlib=rb-4.1.0&q=80&w=1080';

const cameras = [
  { id: 'main', label: 'Main Sanctum', active: true },
  { id: 'gate', label: 'Temple Gate', active: false },
  { id: 'ghat', label: 'Ganga Ghat', active: false },
  { id: 'kali', label: 'Kalikhoh Temple', active: false },
];

const aartis = [
  { name: 'Mangala Aarti', time: '4:00 AM', status: 'completed', desc: 'Auspicious morning aarti to wake the Goddess' },
  { name: 'Shringar Aarti', time: '6:00 AM', status: 'completed', desc: 'Adorning of the Goddess with ornaments and flowers' },
  { name: 'Bhog Aarti', time: '12:00 PM', status: 'live', desc: 'Afternoon offering of food to the Deity' },
  { name: 'Sandhya Aarti', time: '7:00 PM', status: 'upcoming', desc: 'Evening twilight aarti with lamps and incense' },
  { name: 'Shayan Aarti', time: '10:30 PM', status: 'upcoming', desc: 'Night aarti for the resting of the Goddess' },
];

export function LiveDarshan() {
  const [muted, setMuted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [activeCamera, setActiveCamera] = useState('main');

  return (
    <div style={{ backgroundColor: '#FFFBF5' }}>
      {/* Page Header */}
      <div style={{ backgroundColor: '#8B0000' }} className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-red-300 text-xs mb-3">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white">Live Darshan</span>
          </div>
          <h1 className="text-white mb-1" style={{ fontFamily: 'serif', fontSize: '2rem' }}>
            Live Darshan
          </h1>
          <p className="text-red-200 text-sm">
            Watch the live darshan of Maa Vindhyavasini — the divine mother of Vindhyachal
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Video Player */}
          <div className="lg:col-span-2 space-y-4">
            {/* Player */}
            <div className="rounded-2xl overflow-hidden shadow-xl relative" style={{ backgroundColor: '#0D0500' }}>
              {!playing ? (
                <div className="relative">
                  <img src={IMG_AARTI} alt="Live Darshan" className="w-full h-80 md:h-96 object-cover opacity-60" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-red-600 text-white text-xs px-3 py-1 rounded-full mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                        LIVE BROADCAST
                      </div>
                      <h3 className="text-white text-xl" style={{ fontFamily: 'serif' }}>
                        माँ विन्ध्यवासिनी – गर्भगृह दर्शन
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">Main Sanctum Camera</p>
                    </div>
                    <button
                      onClick={() => setPlaying(true)}
                      className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl"
                      style={{ backgroundColor: '#C8490C' }}
                    >
                      <Play size={24} fill="white" className="text-white ml-1" />
                    </button>
                    <p className="text-gray-400 text-xs mt-3">Click to watch Live Darshan</p>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <img src={IMG_AARTI} alt="Live Darshan" className="w-full h-80 md:h-96 object-cover" />
                  <div className="absolute inset-0 bg-black/20 flex items-end">
                    <div className="w-full px-4 py-3" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)' }}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1 text-white text-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                            LIVE
                          </span>
                          <span className="text-gray-300 text-xs flex items-center gap-1">
                            <Users size={11} /> 1,247 watching
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <button onClick={() => setMuted(!muted)} className="text-white">
                            {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                          </button>
                          <button className="text-white"><Maximize2 size={16} /></button>
                          <button className="text-white"><RefreshCw size={16} /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Camera Selection */}
            <div className="bg-white rounded-xl border border-orange-100 p-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Select Camera View</p>
              <div className="flex flex-wrap gap-2">
                {cameras.map((cam) => (
                  <button
                    key={cam.id}
                    onClick={() => setActiveCamera(cam.id)}
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-colors border"
                    style={
                      activeCamera === cam.id
                        ? { backgroundColor: '#8B0000', color: 'white', borderColor: '#8B0000' }
                        : { backgroundColor: 'white', color: '#666', borderColor: '#e5e7eb' }
                    }
                  >
                    {cam.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Darshan Gallery */}
            <div className="bg-white rounded-xl border border-orange-100 p-5">
              <h3 className="font-semibold text-gray-800 mb-4">Recent Darshan Captures</h3>
              <div className="grid grid-cols-3 gap-3">
                {[IMG_AARTI, IMG_DIYA, IMG_PUJA].map((img, i) => (
                  <div key={i} className="rounded-xl overflow-hidden aspect-video">
                    <img src={img} alt={`Darshan ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Aarti Schedule */}
            <div className="bg-white rounded-2xl border border-orange-100 overflow-hidden shadow-sm">
              <div style={{ backgroundColor: '#8B0000' }} className="px-5 py-4">
                <h3 className="text-white font-semibold flex items-center gap-2">
                  <Clock size={15} /> Today's Aarti Schedule
                </h3>
              </div>
              <div className="divide-y divide-orange-50">
                {aartis.map((a) => (
                  <div key={a.name} className="px-5 py-4 flex items-start gap-3">
                    <div className="mt-0.5">
                      <span
                        className="inline-block w-2.5 h-2.5 rounded-full"
                        style={{
                          backgroundColor:
                            a.status === 'live' ? '#DC2626' :
                            a.status === 'completed' ? '#16A34A' : '#D97706',
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-sm font-semibold text-gray-800">{a.name}</span>
                        <span className="text-xs text-amber-700 font-medium">{a.time}</span>
                      </div>
                      <p className="text-xs text-gray-400">{a.desc}</p>
                      {a.status === 'live' && (
                        <span className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                          Live Now
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Book Darshan */}
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <img src={IMG_DIYA} alt="Darshan" className="w-full h-32 object-cover" />
              <div className="bg-white border border-orange-100 border-t-0 p-5 rounded-b-2xl">
                <h3 className="font-semibold text-gray-800 mb-1.5">Book Personal Darshan</h3>
                <p className="text-gray-500 text-xs mb-4">
                  Book a special darshan slot for priority access to the sanctum.
                </p>
                <Link
                  href="/aarti-booking"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold text-white"
                  style={{ backgroundColor: '#C8490C' }}
                >
                  <Calendar size={14} /> Book Darshan
                </Link>
              </div>
            </div>

            {/* Notice */}
            <div className="rounded-xl p-4 border border-amber-200" style={{ backgroundColor: '#FFFBEB' }}>
              <h4 className="text-amber-800 text-sm font-semibold mb-1.5">📢 Darshan Notice</h4>
              <ul className="space-y-1.5">
                {[
                  'Live stream runs 24×7 from the main sanctum.',
                  'During special events, video may pause briefly.',
                  'Devotees are requested to maintain silence.',
                  'Photography inside sanctum is not permitted.',
                ].map((n, i) => (
                  <li key={i} className="text-amber-700 text-xs flex items-start gap-1.5">
                    <span className="mt-0.5 shrink-0">•</span> {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}