import Link from 'next/link';
import { ChevronRight, Landmark, MapPin, BookOpen, Star, Shield, Users, Clock } from 'lucide-react';

const IMG_TEMPLE = 'https://images.unsplash.com/photo-1609151745346-c624e507baa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIaW5kdSUyMHRlbXBsZSUyMFZpbmRoeWFjaGFsJTIwTWlyemFwdXIlMjBTaGFrdGl8ZW58MXx8fHwxNzczNjgwNTg2fDA&ixlib=rb-4.1.0&q=80&w=1080';
const IMG_GODDESS = 'https://images.unsplash.com/photo-1761471658258-fec93e868938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIaW5kdSUyMGdvZGRlc3MlMjBEdXJnYSUyMHRlbXBsZSUyMGlkb2wlMjB3b3JzaGlwfGVufDF8fHx8MTc3MzY4MDU4OXww&ixlib=rb-4.1.0&q=80&w=1080';
const IMG_ARCHITECTURE = 'https://images.unsplash.com/photo-1722709229926-b85e2e5e11eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwSW5kaWFuJTIwdGVtcGxlJTIwYXJjaGl0ZWN0dXJlJTIwaGVyaXRhZ2UlMjBzdG9uZXxlbnwxfHx8fDE3NzM2ODA1OTB8MA&ixlib=rb-4.1.0&q=80&w=1080';
const IMG_LANDSCAPE = 'https://images.unsplash.com/photo-1728473356050-34c7aae97593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaW5kaHlhJTIwbW91bnRhaW4lMjBsYW5kc2NhcGUlMjBVdHRhciUyMFByYWRlc2glMjBJbmRpYXxlbnwxfHx8fDE3NzM2ODA1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080';
const IMG_HERITAGE = 'https://images.unsplash.com/photo-1695976941881-36f1e24b06af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwSGluZHUlMjB0ZW1wbGUlMjBhcmNoaXRlY3R1cmUlMjBJbmRpYSUyMGhlcml0YWdlfGVufDF8fHx8MTc3MzY3OTg2M3ww&ixlib=rb-4.1.0&q=80&w=1080';

const timeline = [
  { era: 'Ancient Era', period: '5000+ years ago', event: 'Mention of the Vindhya region and its presiding deity in the Vedic texts and Puranas.' },
  { era: 'Devi Bhagavat Purana', period: '~2000 BCE', event: 'Maa Vindhyavasini is described as the Goddess who slew Madhu–Kaitabha demons, sent by Vishnu.' },
  { era: 'Markandeya Purana', period: '~400–600 CE', event: 'The Shakti Peetha tradition firmly establishes Vindhyachal as one of the primary Shakti centres.' },
  { era: 'Medieval Period', period: '800–1200 CE', event: 'Construction and renovation of the main temple complex by local rulers and devotees. Vindhya Trikona takes form.' },
  { era: 'Mughal Era', period: '1500–1700 CE', event: 'Despite political changes, the temple continued to receive patronage from local Hindu kings and Zamindars.' },
  { era: 'British Era', period: '1857–1947', event: 'The temple served as a spiritual refuge. Navratri melas gained prominence and pilgrimage flourished.' },
  { era: 'Modern Period', period: '2000–Present', event: 'Major renovation, digital infrastructure and the official Dham Trust established for transparent management.' },
];

const shrines = [
  {
    name: 'Shri Vindhyavasini Temple',
    desc: 'The main temple dedicated to Maa Vindhyavasini — the three-eyed, eight-armed manifestation of Maa Durga.',
    img: IMG_TEMPLE,
    deity: 'Maa Vindhyavasini',
  },
  {
    name: 'Kalikhoh Temple',
    desc: 'A cave temple within a natural cavern where Maa Kali is worshipped. One of the most mystical and powerful Shakti shrines.',
    img: IMG_GODDESS,
    deity: 'Maa Kali',
  },
  {
    name: 'Ashtabhuja Temple',
    desc: 'The "eight-armed" form of Maa Durga, located on a hillock about 1.5 km from the main temple. Completes the Vindhya Triangle.',
    img: IMG_ARCHITECTURE,
    deity: 'Maa Ashtabhuja',
  },
];

const facts = [
  { icon: Users, value: '5 Lakh+', label: 'Annual pilgrims' },
  { icon: Star, value: '51', label: 'Shakti Peethas in India' },
  { icon: Clock, value: '365', label: 'Days open per year' },
  { icon: Shield, value: '1000+', label: 'Years of devotion' },
];

export function About() {
  return (
    <div style={{ backgroundColor: '#FFFBF5' }}>
      {/* Hero */}
      <div className="relative py-24 px-4 overflow-hidden">
        <img src={IMG_LANDSCAPE} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(26,10,0,0.78)' }} />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-red-300 text-xs mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white">About</span>
          </div>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-amber-400 mb-5" style={{ backgroundColor: '#8B0000' }}>
            <span className="text-amber-300 text-3xl" style={{ fontFamily: 'serif' }}>ॐ</span>
          </div>
          <h1 className="text-white mb-3" style={{ fontFamily: 'serif', fontSize: '3rem', lineHeight: 1.2 }}>
            Shri Vindhyavasini Dham
          </h1>
          <p className="text-amber-300 text-sm tracking-widest uppercase mb-4">
            Vindhyachal · Mirzapur · Uttar Pradesh
          </p>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed">
            One of India's most sacred Shakti Peethas — the divine abode of Maa Vindhyavasini,
            the presiding goddess of the Vindhya mountain range, revered for over a millennium.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white py-10 px-4 border-b border-orange-100">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {facts.map(f => (
            <div key={f.label} className="text-center">
              <f.icon size={22} className="mx-auto mb-2 text-amber-600" />
              <div className="text-2xl font-bold" style={{ color: '#8B0000', fontFamily: 'serif' }}>{f.value}</div>
              <div className="text-gray-500 text-xs mt-0.5">{f.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main About Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={IMG_TEMPLE} alt="Vindhyavasini Temple" className="w-full h-96 object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden md:block rounded-xl overflow-hidden shadow-xl border-4 border-white">
              <img src={IMG_GODDESS} alt="Goddess" className="w-44 h-32 object-cover" />
            </div>
            <div
              className="absolute -top-4 -left-4 w-24 h-24 rounded-xl flex flex-col items-center justify-center text-white shadow-lg"
              style={{ backgroundColor: '#8B0000' }}
            >
              <span className="text-3xl" style={{ fontFamily: 'serif' }}>ॐ</span>
              <span className="text-xs mt-1 tracking-wider text-center">SHAKTI<br />PEETHA</span>
            </div>
          </div>

          <div className="lg:pl-6 pb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-12 bg-amber-400" />
              <span className="text-amber-600 text-xs font-semibold uppercase tracking-widest">History & Significance</span>
            </div>
            <h2 className="text-gray-900 mb-4" style={{ fontSize: '2rem', fontFamily: 'serif', lineHeight: 1.3 }}>
              The Sacred Abode of<br />
              <span style={{ color: '#8B0000' }}>Maa Vindhyavasini</span>
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Shri Vindhyavasini Dham, nestled in the ancient town of Vindhyachal in Mirzapur district of Uttar Pradesh,
              stands on the southern bank of the sacred River Ganga. The presiding deity, Maa Vindhyavasini — an incarnation
              of Goddess Durga — is revered as the <em>"Goddess who resides in the Vindhya Mountains."</em>
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              According to the Devi Bhagavat Purana, when Vishnu was asleep in Yoga Nidra, Yogamaya (Maa Vindhyavasini) was born.
              She slew the demons Madhu and Kaitabha and thereafter took her abode in the Vindhya Hills — making this site
              one of India's most ancient and powerful Shakti shrines.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { icon: Landmark, label: 'Type', value: 'Shakti Peetha' },
                { icon: MapPin, label: 'Location', value: 'Vindhyachal, UP' },
                { icon: BookOpen, label: 'Mention', value: 'Devi Bhagavat Purana' },
                { icon: Star, label: 'Main Deity', value: 'Maa Vindhyavasini' },
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
          </div>
        </div>
      </section>

      {/* Vindhya Trikona */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-12 bg-amber-400" />
              <span className="text-amber-600 text-xs font-semibold uppercase tracking-widest">The Sacred Triangle</span>
              <div className="h-px w-12 bg-amber-400" />
            </div>
            <h2 className="text-gray-900" style={{ fontSize: '2rem', fontFamily: 'serif' }}>
              Vindhya Trikona — The Divine Triangle
            </h2>
            <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
              Three powerful Shakti shrines form the sacred Vindhya Triangle — completing the circuit brings the highest spiritual merit
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {shrines.map((shrine) => (
              <div key={shrine.name} className="bg-white rounded-2xl border border-orange-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <img src={shrine.img} alt={shrine.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="text-xs text-amber-300 font-medium">{shrine.deity}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-800 mb-2" style={{ fontFamily: 'serif' }}>{shrine.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{shrine.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Timeline */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FFFBF5' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-12 bg-amber-400" />
              <span className="text-amber-600 text-xs font-semibold uppercase tracking-widest">Through the Ages</span>
              <div className="h-px w-12 bg-amber-400" />
            </div>
            <h2 className="text-gray-900" style={{ fontSize: '2rem', fontFamily: 'serif' }}>
              Historical Timeline
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-orange-200 -translate-x-px hidden md:block" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={item.era} className={`flex gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`hidden md:flex flex-1 ${i % 2 === 0 ? 'justify-end pr-10' : 'justify-start pl-10'}`}>
                    <div className={`max-w-xs bg-white rounded-xl border border-orange-100 p-5 shadow-sm ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="text-xs text-amber-600 font-semibold mb-1">{item.era}</div>
                      <div className="text-xs text-gray-400 mb-2">{item.period}</div>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                  {/* Center dot */}
                  <div className="hidden md:flex items-start justify-center w-4 shrink-0 mt-5">
                    <div className="w-4 h-4 rounded-full border-2 border-amber-400 bg-white shrink-0" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                  {/* Mobile: show as list */}
                  <div className="flex gap-4 md:hidden">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full border-2 border-amber-400 bg-white shrink-0 mt-1" />
                      <div className="flex-1 w-px bg-orange-200" />
                    </div>
                    <div className="bg-white rounded-xl border border-orange-100 p-4 shadow-sm mb-2 flex-1">
                      <div className="text-xs text-amber-600 font-semibold mb-1">{item.era}</div>
                      <div className="text-xs text-gray-400 mb-2">{item.period}</div>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-12 bg-amber-400" />
              <span className="text-amber-600 text-xs font-semibold uppercase tracking-widest">Architecture</span>
            </div>
            <h2 className="text-gray-900 mb-4" style={{ fontSize: '2rem', fontFamily: 'serif', lineHeight: 1.3 }}>
              Temple Architecture &<br />
              <span style={{ color: '#8B0000' }}>Sacred Layout</span>
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              The Vindhyavasini temple complex is built in the North Indian Nagara style of temple architecture,
              with a prominent shikhara (spire) and intricate carvings. The inner sanctum (garbhagriha) houses the
              original deity installed by devotees over a millennium ago.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              The temple faces the sacred Ganga River and is surrounded by a complex of smaller shrines,
              dharamshalas, and ghats. The elaborate entrance gate (gopuram) is decorated with scenes from
              the Devi Mahatmya and other scriptures.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                'Nagara-style Shikhara',
                'Sacred Garbhagriha',
                'Ornate Gopuram Gate',
                'Panchayatan Layout',
                'Adjacent Ganga Ghat',
                'Open Mandap for devotees',
              ].map(item => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: '#C8490C' }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <img src={IMG_ARCHITECTURE} alt="Temple Architecture" className="w-full h-96 object-cover rounded-2xl shadow-xl" />
          </div>
        </div>
      </section>

      {/* How to Reach CTA */}
      <section className="py-12 px-4" style={{ backgroundColor: '#FFF5EE' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-gray-900 mb-3" style={{ fontFamily: 'serif', fontSize: '1.6rem' }}>Plan Your Visit to Vindhyachal</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-xl mx-auto">
            Vindhyachal is easily accessible by road, rail and river from Mirzapur, Varanasi, Allahabad and all major cities of North India.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-3 rounded text-sm font-semibold text-white"
              style={{ backgroundColor: '#8B0000' }}
            >
              How to Reach
            </Link>
            <Link
              href="/heritage-walk"
              className="px-6 py-3 rounded text-sm font-semibold border"
              style={{ borderColor: '#8B0000', color: '#8B0000' }}
            >
              Heritage Walk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}