export default function Team() {
  const teamMembers = [
    {
      name: "Γιάννης",
      role: "Κουρέας / Barber",
      img: "/team1.webp",
    },
    {
      name: "Μάριος",
      role: "Fade & Modern Cuts Specialist",
      img: "/team2.webp",
    },
    {
      name: "Πέτρος",
      role: "Classic Barbering Expert",
      img: "/team3.webp",
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
              className="bg-neutral-800 p-6 rounded-xl shadow-lg hover:scale-105 transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold">{member.name}</h3>
              <p className="text-neutral-400">{member.role}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
