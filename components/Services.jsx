'use client';

export default function Services() {
  const services = [
    { name: 'Κούρεμα Ανδρικό', desc: 'Precision fades, classic cuts, modern styles', price: '15€' },
    { name: 'Ξύρισμα με λεπίδα', desc: 'Hot towel & straight razor finish', price: '20€' },
    { name: 'Κούρεμα Shaver', desc: 'Layered cuts, styling & finishing', price: '25€' },
    { name: 'Χτένισμα / Βαφή', desc: 'Color, highlights, styling', price: 'from 30€' },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-black">Υπηρεσίες</h2>
            <p className="opacity-70 mt-2 text-black max-w-md">
              Επιλέξτε ανάμεσα σε κλασικά και σύγχρονα πακέτα περιποίησης.
            </p>
          </div>

          <div className="hidden sm:block">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-black text-black font-semibold hover:bg-black hover:text-white transition-all duration-300"
            >
              Κράτηση Ραντεβού
            </a>
          </div>
        </div>

        {/* SERVICE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.name}
              className="group p-6 rounded-2xl bg-white border border-black shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between h-full text-black"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="font-bold text-xl leading-tight">{s.name}</div>
                  <div className="text-amber-600 font-bold text-lg whitespace-nowrap ml-2">
                    {s.price}
                  </div>
                </div>
                <p className="text-sm opacity-70 leading-relaxed mb-6">
                  {s.desc}
                </p>
              </div>

              <div>
                <a
                  href="#contact"
                  className="inline-block w-full text-center text-sm px-4 py-2.5 rounded-full border border-black font-bold hover:bg-black hover:text-white transition-colors duration-300"
                >
                  Κράτηση
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}