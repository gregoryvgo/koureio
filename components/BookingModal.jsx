'use client';

import { useState } from "react";

export default function BookingModal({ submitBooking, close }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const timeSlots = [];
  for (let h = 9; h < 21; h++) {
    timeSlots.push(`${String(h).padStart(2, "0")}:00`);
    timeSlots.push(`${String(h).padStart(2, "0")}:30`);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    submitBooking({ name, phone, date, time });
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      onClick={close}   // ← CLICK OUTSIDE CLOSES MODAL
    >
      <div
        className="bg-white p-6 rounded-2xl max-w-md w-full shadow-2xl text-black"
        onClick={(e) => e.stopPropagation()}  // ← STOP CLICK INSIDE
      >
        <h2 className="text-2xl font-bold mb-4">Κλείσε Ραντεβού</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          <div>
            <label className="text-sm font-semibold">Ονοματεπώνυμο</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded-lg p-3 w-full text-black focus:ring-2 focus:ring-black outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Τηλέφωνο</label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border rounded-lg p-3 w-full text-black focus:ring-2 focus:ring-black outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Ημερομηνία</label>
            <input
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border rounded-lg p-3 w-full text-black focus:ring-2 focus:ring-black outline-none hide-year"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Ώρα</label>
            <select
              required
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="border rounded-lg p-3 w-full text-black focus:ring-2 focus:ring-black outline-none"
            >
              <option value="">Επιλέξτε ώρα</option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="bg-black text-white py-3 rounded-lg font-semibold hover:bg-neutral-900 transition"
          >
            Επιβεβαίωση
          </button>
        </form>

        <button
          onClick={close}
          className="mt-5 w-full text-center text-sm opacity-70 hover:opacity-100 transition"
        >
          Ακύρωση
        </button>
      </div>

      <style>{`
        .hide-year::-webkit-datetime-edit-year-field {
          display: none;
        }
        .hide-year::-webkit-datetime-edit-text:last-of-type {
          display: none;
        }
        .hide-year::-webkit-datetime-edit-month-field,
        .hide-year::-webkit-datetime-edit-day-field {
          padding: 0 4px;
          display: inline-block;
        }
      `}</style>
    </div>
  );
}
