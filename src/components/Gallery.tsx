import React, { useState } from 'react';
import { Camera, Maximize2, MapPin, Sparkles } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/tourData';
import { GalleryImage } from '../types';
import { LightboxModal } from './LightboxModal';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeTab, setActiveTab] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Photos' },
    { id: 'valley', label: 'Naran & Kaghan' },
    { id: 'nature', label: 'Babusar & Lakes' },
    { id: 'adventure', label: 'River & Activities' },
  ];

  const filteredImages = activeTab === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeTab || (activeTab === 'valley' && (img.location.includes('Naran') || img.location.includes('Kaghan'))));

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5 text-emerald-600" />
            <span>Tour Snapshots</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Tour Gallery
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Real captured moments from Naran, Kaghan, Babusar Top, and Shogran with our happy family tour groups.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#14532D] text-white shadow-md shadow-emerald-950/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img)}
              className="group relative h-72 rounded-2xl overflow-hidden bg-slate-900 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 border border-slate-200/80"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-between p-5">
                <div className="self-end">
                  <span className="p-2.5 rounded-xl bg-white/20 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                <div>
                  <span className="text-[10px] text-emerald-300 font-bold uppercase tracking-widest bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                    {img.location}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white mt-1 leading-snug">
                    {img.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        image={selectedImage}
        images={filteredImages}
        onClose={() => setSelectedImage(null)}
        onSelectImage={(img) => setSelectedImage(img)}
      />
    </section>
  );
};
