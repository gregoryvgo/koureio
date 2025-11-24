"use client";

import { useState } from "react";

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
  });

  if (!isOpen) return null;

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Το ραντεβού καταχωρήθηκε!");
    setFormData({ name: "", phone: "", service: "" });
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
      <div className="bg-neutral-900 text-white p-8 rounded-xl w-full max-w-md shadow-xl relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-xl hover:text-neutral-300"
        >
          ×
        </button>

        <h2 className="text-3xl font-bold text-center mb-6">
          Κλείσε Ραντεβού
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Όνομα"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-neutral-800 outline-none"
          />

          <input
            type="text"
            name="phone"
            placeholder="Τηλέφωνο"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-neutral-800 outline-none"
          />

          <select
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-neutral-800 outline-none"
          >
            <option value="">Επιλογή Υπηρεσίας</option>
            <option value="Κούρεμα">Κούρεμα</option>
            <option value="Ξύρισμα">Ξύρισμα</option>
            <option value="Κούρεμα + Ξύρισμα">Κούρεμα + Ξύρισμα</option>
            <option value="Beard Trim">Beard Trim</option>
          </select>

          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-lg font-bold hover:bg-neutral-300 transition"
          >
            Κράτηση
          </button>
        </form>
      </div>
    </div>
  );
}
