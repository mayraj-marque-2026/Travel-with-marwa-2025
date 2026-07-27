import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { GalleryImage } from '../types';

interface LightboxModalProps {
  image: GalleryImage | null;
  images: GalleryImage[];
  onClose: () => void;
  onSelectImage: (img: GalleryImage) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  image,
  images,
  onClose,
  onSelectImage,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!image) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [image, images]);

  if (!image) return null;

  const currentIndex = images.findIndex((img) => img.id === image.id);

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % images.length;
    onSelectImage(images[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + images.length) % images.length;
    onSelectImage(images[prevIdx]);
  };

  return (
    <div
      id="lightbox-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-3 rounded-full bg-slate-900/80 text-white hover:bg-emerald-600 transition-colors focus:outline-none"
        aria-label="Close image lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="absolute left-4 z-50 p-3 rounded-full bg-slate-900/80 text-white hover:bg-emerald-600 transition-colors focus:outline-none hidden sm:flex"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-4 z-50 p-3 rounded-full bg-slate-900/80 text-white hover:bg-emerald-600 transition-colors focus:outline-none hidden sm:flex"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.title}
          className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-white/10"
          referrerPolicy="no-referrer"
        />

        {/* Caption Card */}
        <div className="mt-4 bg-slate-900/90 text-white p-4 rounded-xl border border-slate-800 text-center max-w-lg w-full flex items-center justify-between">
          <div>
            <h4 className="font-serif font-bold text-lg text-white">{image.title}</h4>
            <p className="text-xs text-emerald-300 flex items-center justify-center gap-1 mt-0.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>{image.location}</span>
            </p>
          </div>
          <span className="text-xs text-slate-400 font-mono">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      </div>
    </div>
  );
};
