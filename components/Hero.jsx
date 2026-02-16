export default function Hero() {
  return (
    <header className="relative w-full h-screen overflow-hidden">

      {/* 1. DARK OVERLAY (Μπαίνει ΠΑΝΩ από το βίντεο αλλά ΚΑΤΩ από τα γράμματα) */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* 2. BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        poster="/hero-bg.webp" // <--- Βάλε εδώ μια στατική φώτο (αν αργεί το βίντεο)
      >
        <source src="/barber-video.mp4" type="video/mp4" />
      </video>

      {/* 3. TEXT CONTENT */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 text-white">
        
        <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg tracking-tight mb-4">
          Studio Barber
        </h1>

        <p className="text-lg md:text-2xl text-neutral-200 max-w-2xl drop-shadow-md font-light leading-relaxed">
          Μοντέρνο στυλ, premium υπηρεσίες & χαλαρωτική εμπειρία.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          {/* Κουμπί Κράτησης (Link σε #contact) */}
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:bg-neutral-100 hover:scale-105 transition-all duration-300"
          >
            📅 Κλείσε Ραντεβού
          </a>

          {/* Κουμπί Gallery */}
          <a
            href="#gallery"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white text-white font-semibold text-lg backdrop-blur-md hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
          >
            Δες Gallery
          </a>
        </div>

      </div>
    </header>
  );
}