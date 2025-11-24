'use client';

import { useState, useEffect } from 'react';

export default function Gallery() {
  const images = [
    "/gallery/1.webp",
    "/gallery/2.webp",
    "/gallery/3.webp",
    "/gallery/4.webp",
    "/gallery/5.webp",
    "/gallery/6.webp",
    "/gallery/7.webp",
    "/gallery/8.webp",
  ];

  const [lightboxIndex, setLightboxIndex] = useState(null);

  // --- MOBILE SWIPE HANDLERS ---
  let startX = 0;
  let endX = 0;

  function handleTouchStart(e) {
    startX = e.changedTouches[0].screenX;
  }

  function handleTouchEnd(e) {
    endX = e.changedTouches[0].screenX;

    if (endX - startX > 50) prevImg();
    if (startX - endX > 50) nextImg();
  }

  function nextImg() {
    setLightboxIndex((prev) => (prev + 1) % images.length);
  }

  function prevImg() {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  // Close Lightbox with ESC
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") nextImg();
      if (e.key === "ArrowLeft") prevImg();
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white">Gallery</h2>
          <p className="opacity-70 mt-2 text-white">Δείτε δουλειές, στυλ και ατμόσφαιρα.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <div 
              key={i}
              className="overflow-hidden rounded-xl shadow-md cursor-pointer"
              onClick={() => setLightboxIndex(i)}
            >
              <img
                src={src}
                alt={`gallery-${i}`}
                className="w-full h-48 object-cover hover:scale-110 transition-all duration-300"
              />
            </div>
          ))}
        </div>

      </div>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center"
          onClick={() => setLightboxIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={images[lightboxIndex]}
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* LEFT ARROW */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImg();
            }}
            className="absolute left-6 text-white text-5xl select-none"
          >
            ‹
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImg();
            }}
            className="absolute right-6 text-white text-5xl select-none"
          >
            ›
          </button>

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white text-4xl"
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
}
