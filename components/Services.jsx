'use client';

export default function Services({ onBooking }) {
  const services = [
    { name: 'Κούρεμα Ανδρικό', desc: 'Precision fades, classic cuts, modern styles', price: '15€' },
    { name: 'Ξύρισμα με λεπίδα', desc: 'Hot towel & straight razor finish', price: '20€' },
    { name: 'Κούρεμα Γυναικείο', desc: 'Layered cuts, styling & finishing', price: '25€' },
    { name: 'Χτένισμα / Βαφή', desc: 'Color, highlights, styling', price: 'from 30€' },
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* TITLE */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-black">Υπηρεσίες</h2>
            <p className="opacity-70 mt-2 text-black">
              Επιλέξτε ανάμεσα σε κλασικά και σύγχρονα πακέτα.
            </p>
          </div>

          <div className="hidden sm:block">
            <button
              onClick={onBooking}
              className="px-4 py-2 rounded-full border text-black hover:bg-black hover:text-white transition"
            >
              Κράτηση
            </button>
          </div>
        </div>

        {/* SERVICE CARDS */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.name}
              className="p-6 rounded-2xl bg-white shadow hover:shadow-xl transition-transform transform hover:-translate-y-2 text-black"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-lg">{s.name}</div>
                  <div className="text-sm opacity-70 mt-1">{s.desc}</div>
                </div>
                <div className="text-amber-600 font-bold">{s.price}</div>
              </div>

              <div className="mt-4">
                <button
                  onClick={onBooking}
                  className="text-sm px-3 py-2 rounded-full border text-black hover:bg-black hover:text-white transition"
                >
                  Κράτηση
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
