"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Το μήνυμά σου στάλθηκε!");
    setFormData({ name: "", phone: "", message: "" });
  }

  return (
    <section id="contact" className="py-20 bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto px-5">
        
        <h2 className="text-4xl font-bold text-center mb-10">
          Επικοινωνία
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Στοιχεία */}
          <div className="space-y-5">
            <p className="text-lg text-neutral-300">
              Κλείσε ραντεβού ή επικοινώνησε μαζί μας για οποιαδήποτε απορία.
            </p>

            <div>
              <p className="font-semibold text-xl">Διεύθυνση:</p>
              <p className="text-neutral-400">Οδός Παράδειγμα 12, Αθήνα</p>
            </div>

            <div>
              <p className="font-semibold text-xl">Τηλέφωνο:</p>
              <p className="text-neutral-400">210 123 4567</p>
            </div>

            <div>
              <p className="font-semibold text-xl">Ώρες Λειτουργίας:</p>
              <p className="text-neutral-400">Δευ–Σαβ: 10:00 – 20:00</p>
            </div>
          </div>

          {/* Φόρμα */}
          <form
            onSubmit={handleSubmit}
            className="bg-neutral-800 p-6 rounded-xl shadow-lg space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Όνομα"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-neutral-700 text-white outline-none"
            />

            <input
              type="text"
              name="phone"
              placeholder="Τηλέφωνο"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-neutral-700 text-white outline-none"
            />

            <textarea
              name="message"
              placeholder="Μήνυμα"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 rounded-lg bg-neutral-700 text-white outline-none"
            />

            <button
              type="submit"
              className="w-full bg-white text-black py-3 rounded-lg font-bold hover:bg-neutral-300 transition"
            >
              Αποστολή
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
