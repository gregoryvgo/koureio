'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar({ onBooking }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 font-[Inter]">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-3 items-center">

        {/* LEFT — LOGO */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
              SB
            </div>
            <div className="hidden sm:block">
              <div className="text-base font-semibold tracking-wide">Studio Barber</div>
              <div className="text-xs opacity-60">Barbershop & Salon</div>
            </div>
          </Link>
        </div>

        {/* CENTER — MENU */}
        <div className="hidden md:flex justify-center">
          <div className="flex items-center gap-8 bg-neutral-800/70 text-white backdrop-blur-xl rounded-full px-8 py-3 shadow-md">
            <a href="#services" className="text-base font-medium tracking-wide hover:text-white/80 transition">
              Υπηρεσίες
            </a>
            <a href="#gallery" className="text-base font-medium tracking-wide hover:text-white/80 transition">
              Gallery
            </a>
            <a href="#team" className="text-base font-medium tracking-wide hover:text-white/80 transition">
              Ομάδα
            </a>
            <a href="#contact" className="text-base font-medium tracking-wide hover:text-white/80 transition">
              Επικοινωνία
            </a>
          </div>
        </div>

        {/* RIGHT — BOOKING BUTTON */}
        <div className="hidden md:flex justify-end">
          <button
            onClick={onBooking}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-black text-white text-base font-semibold shadow-lg hover:bg-neutral-900 transition"
          >
            📅 Κλείσε Ραντεβού
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <div className="md:hidden col-span-3 flex justify-end mt-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 bg-white/80 rounded-md shadow text-xl"
          >
            {menuOpen ? "✖️" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mt-4 md:hidden bg-neutral-900/90 text-white backdrop-blur-xl rounded-xl max-w-3xl mx-auto px-4 py-5 shadow-lg">
          <div className="flex flex-col gap-4 text-lg font-medium">
            <a href="#services" onClick={() => setMenuOpen(false)}>Υπηρεσίες</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
            <a href="#team" onClick={() => setMenuOpen(false)}>Ομάδα</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Επικοινωνία</a>

            <button
              onClick={() => { onBooking(); setMenuOpen(false); }}
              className="mt-2 p-3 rounded-md bg-black text-white text-base"
            >
              Κλείσε Ραντεβού
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
