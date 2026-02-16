import Image from 'next/image';

export default function Team() {
  const teamMembers = [
    {
      name: "Γιάννης",
      role: "Κουρέας / Barber",
      img: "/team/team1.webp", // <--- Αλλαγή: Τώρα δείχνει στον φάκελο team
    },
    {
      name: "Μάριος",
      role: "Fade & Modern Cuts Specialist",
      img: "/team/team2.webp", // <--- Αλλαγή εδώ
    },
    {
      name: "Πέτρος",
      role: "Classic Barbering Expert",
      img: "/team/team3.webp", // <--- Αλλαγή εδώ
    },
  ];

  return (
    <section id="team" className="py-20 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto px-5">
        
        <h2 className="text-4xl font-bold text-center mb-12">
          Η Ομάδα Μας
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-neutral-800 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300"
            >
              {/* Wrapper για την εικόνα */}
              <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
              
              <h3 className="text-2xl font-semibold">{member.name}</h3>
              <p className="text-neutral-400">{member.role}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}