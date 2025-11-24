'use client';

export default function Hero({ onBooking }) {
  return (
    <header className="relative w-full h-[100vh] overflow-hidden">

      {/* BACKGROUND VIDEO */}
      <video
        src="/barber-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* TEXT CONTENT */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          Studio Barber
        </h1>

        <p className="mt-4 text-lg md:text-2xl opacity-90 max-w-2xl drop-shadow">
          Μοντέρνο στυλ, premium υπηρεσίες & χαλαρωτική εμπειρία.
        </p>

        <div className="mt-6 flex gap-4">
          <button
            onClick={onBooking}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white text-black font-semibold shadow-xl"
          >
            📅 Κλείσε Ραντεβού
          </button>

          <a
            href="#gallery"
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/70 text-white backdrop-blur-sm"
          >
            Δες Gallery
          </a>
        </div>
      </div>
    </header>
  );
}
