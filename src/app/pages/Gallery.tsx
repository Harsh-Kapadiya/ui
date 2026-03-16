'use client';
/**
 * Next.js App Router — Gallery Page  (/gallery)
 * 'use client' — filter state + lightbox index via useState.
 */
import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  X,
  ChevronLeft,
  Camera,
} from "lucide-react";

const galleryData = [
  {
    id: 1,
    category: "Temple",
    title: "Main Sanctum — Maa Vindhyavasini",
    img: "https://images.unsplash.com/photo-1609151745346-c624e507baa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIaW5kdSUyMHRlbXBsZSUyMFZpbmRoeWFjaGFsJTIwTWlyemFwdXIlMjBTaGFrdGl8ZW58MXx8fHwxNzczNjgwNTg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    span: "col-span-2 row-span-2",
  },
  {
    id: 2,
    category: "Aarti",
    title: "Evening Aarti Ceremony",
    img: "https://images.unsplash.com/photo-1763186868095-d63ef07ae843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIaW5kdSUyMGFhcnRpJTIwY2VyZW1vbnklMjBHYW5nYSUyMHJpdmVyJTIwbmlnaHR8ZW58MXx8fHwxNzczNjgwNTg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    span: "",
  },
  {
    id: 3,
    category: "Ghats",
    title: "Sacred Ganga Ghat",
    img: "https://images.unsplash.com/photo-1762513839526-c596f5e99a9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB0ZW1wbGUlMjBnaGF0cyUyMHBpbGdyaW1hZ2UlMjBob2x5JTIwcml2ZXJ8ZW58MXx8fHwxNzczNjgwNTg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    span: "",
  },
  {
    id: 4,
    category: "Deity",
    title: "Goddess Durga — Divine Idol",
    img: "https://images.unsplash.com/photo-1761471658258-fec93e868938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIaW5kdSUyMGdvZGRlc3MlMjBEdXJnYSUyMHRlbXBsZSUyMGlkb2wlMjB3b3JzaGlwfGVufDF8fHx8MTc3MzY4MDU4OXww&ixlib=rb-4.1.0&q=80&w=1080",
    span: "row-span-2",
  },
  {
    id: 5,
    category: "Heritage",
    title: "Ancient Temple Architecture",
    img: "https://images.unsplash.com/photo-1722709229926-b85e2e5e11eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwSW5kaWFuJTIwdGVtcGxlJTIwYXJjaGl0ZWN0dXJlJTIwaGVyaXRhZ2UlMjBzdG9uZXxlbnwxfHx8fDE3NzM2ODA1OTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    span: "col-span-2",
  },
  {
    id: 6,
    category: "Offerings",
    title: "Prasad & Floral Offerings",
    img: "https://images.unsplash.com/photo-1727539146283-7f38fee3983b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1wbGUlMjBwcmFzYWQlMjBvZmZlcmluZyUyMGZsb3dlcnMlMjBkZXZvdGlvbnxlbnwxfHx8fDE3NzM2ODA1OTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    span: "",
  },
  {
    id: 7,
    category: "Pilgrims",
    title: "Devotees at the Temple",
    img: "https://images.unsplash.com/photo-1763990830500-92e0c9dc7d53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxncmltcyUyMHdhbGtpbmclMjB0ZW1wbGUlMjBzdGFpcnMlMjBJbmRpYSUyMHNwaXJpdHVhbHxlbnwxfHx8fDE3NzM2ODA1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    span: "",
  },
  {
    id: 8,
    category: "Landscape",
    title: "Vindhya Mountain & Surroundings",
    img: "https://images.unsplash.com/photo-1728473356050-34c7aae97593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaW5kaHlhJTIwbW91bnRhaW4lMjBsYW5kc2NhcGUlMjBVdHRhciUyMFByYWRlc2glMjBJbmRpYXxlbnwxfHx8fDE3NzM2ODA1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    span: "col-span-2",
  },
  {
    id: 9,
    category: "Heritage",
    title: "Heritage Walk Tour",
    img: "https://images.unsplash.com/photo-1632230940191-c0c8c497b267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMHRlbXBsZSUyMHRvdXIlMjBoZXJpdGFnZSUyMHdhbGslMjB0b3VyaXN0c3xlbnwxfHx8fDE3NzM2ODA1OTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    span: "",
  },
  {
    id: 10,
    category: "Puja",
    title: "Sacred Puja Ceremony",
    img: "https://images.unsplash.com/photo-1758924411346-4e49c4f3afde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjByZWxpZ2lvdXMlMjBjZXJlbW9ueSUyMHB1amElMjByaXR1YWwlMjBmaXJlfGVufDF8fHx8MTc3MzY3OTg3MHww&ixlib=rb-4.1.0&q=80&w=1080",
    span: "",
  },
  {
    id: 11,
    category: "Ghats",
    title: "River Ganga at Sunrise",
    img: "https://images.unsplash.com/photo-1552559590-952a24ab39ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMHJpdmVyJTIwYm9hdCUyMHN1bnJpc2UlMjBzcGlyaXR1YWx8ZW58MXx8fHwxNzczNjc5ODcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    span: "col-span-2",
  },
];

const filterCategories = [
  "All",
  "Temple",
  "Aarti",
  "Ghats",
  "Heritage",
  "Deity",
  "Pilgrims",
  "Offerings",
  "Puja",
  "Landscape",
];

export function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(
    null,
  );

  const filtered =
    filter === "All"
      ? galleryData
      : galleryData.filter((g) => g.category === filter);
  const allImages = galleryData;

  const openLightbox = (id: number) => {
    const idx = allImages.findIndex((g) => g.id === id);
    setLightboxIdx(idx);
  };

  const closeLightbox = () => setLightboxIdx(null);
  const prevImage = () =>
    setLightboxIdx((i) =>
      i !== null
        ? (i - 1 + allImages.length) % allImages.length
        : null,
    );
  const nextImage = () =>
    setLightboxIdx((i) =>
      i !== null ? (i + 1) % allImages.length : null,
    );

  return (
    <div style={{ backgroundColor: "#FFFBF5" }}>
      {/* Header */}
      <div
        style={{ backgroundColor: "#8B0000" }}
        className="py-10 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-red-300 text-xs mb-3">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight size={12} />
            <span className="text-white">Gallery</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Camera size={20} className="text-amber-400" />
            <h1
              className="text-white"
              style={{ fontFamily: "serif", fontSize: "2rem" }}
            >
              Photo Gallery
            </h1>
          </div>
          <p className="text-red-200 text-sm">
            A visual journey through the sacred and beautiful
            Vindhyachal Dham
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="px-4 py-1.5 rounded-full text-sm font-medium border transition-colors whitespace-nowrap"
              style={
                filter === cat
                  ? {
                      backgroundColor: "#8B0000",
                      color: "white",
                      borderColor: "#8B0000",
                    }
                  : {
                      backgroundColor: "white",
                      color: "#6B7280",
                      borderColor: "#E5E7EB",
                    }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[200px]">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${item.span || ""}`}
              onClick={() => openLightbox(item.id)}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs text-amber-300 font-medium">
                  {item.category}
                </span>
                <p className="text-white text-sm font-medium">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-xs mt-8 flex items-center justify-center gap-1">
          <Camera size={12} /> {filtered.length} photographs
          displayed
        </p>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>
          <button
            className="absolute left-4 md:left-8 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <ChevronLeft size={24} />
          </button>
          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={allImages[lightboxIdx].img}
              alt={allImages[lightboxIdx].title}
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
            <div className="text-center mt-3">
              <span className="text-amber-400 text-xs">
                {allImages[lightboxIdx].category}
              </span>
              <p className="text-white text-sm">
                {allImages[lightboxIdx].title}
              </p>
              <p className="text-gray-500 text-xs mt-1">
                {lightboxIdx + 1} / {allImages.length}
              </p>
            </div>
          </div>
          <button
            className="absolute right-4 md:right-8 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </div>
  );
}