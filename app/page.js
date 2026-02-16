'use client';

import React, { useState } from "react";

// Αφαιρέσαμε τα Navbar, Footer και CookieBanner από εδώ 
// γιατί υπάρχουν ήδη στο layout.tsx
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import BookingModal from "@/components/BookingModal";

export default function Page() {
  const [showBooking, setShowBooking] = useState(false);
  const [success, setSuccess] = useState(false);

  function submitBooking(e) {
    e.preventDefault();
    setShowBooking(false);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 4000);
  }

  return (
    <>
      {/* ΣΗΜΑΝΤΙΚΟ: Τα Navbar/Footer/CookieBanner 
          εμφανίζονται αυτόματα από το layout.tsx 
      */}
      
      <Hero onBooking={() => setShowBooking(true)} />

      <Services onBooking={() => setShowBooking(true)} />

      <Gallery />
      
      <Team setShowBooking={setShowBooking} />
      
      <Contact />

      {/* Booking Modal */}
      {showBooking && (
        <BookingModal submitBooking={submitBooking} close={() => setShowBooking(false)} />
      )}

      {/* Success Alert */}
      {success && (
        <div className="fixed right-6 bottom-6 bg-emerald-500 text-white px-4 py-3 rounded-xl shadow-lg z-[100]">
          Το ραντεβού καταχωρήθηκε!
        </div>
      )}
    </>
  );
}