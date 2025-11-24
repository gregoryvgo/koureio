'use client';

import React, { useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
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
      <Navbar onBooking={() => setShowBooking(true)} />
      <Hero onBooking={() => setShowBooking(true)} />

      {/* FIXED HERE */}
      <Services onBooking={() => setShowBooking(true)} />

      <Gallery />
      <Team setShowBooking={setShowBooking} />
      <Contact />

      <Footer />

      {/* Booking Modal */}
      {showBooking && (
        <BookingModal submitBooking={submitBooking} close={() => setShowBooking(false)} />
      )}

      {/* Success Alert */}
      {success && (
        <div className="fixed right-6 bottom-6 bg-emerald-500 text-white px-4 py-3 rounded-xl shadow-lg">
          Το ραντεβού καταχωρήθηκε!
        </div>
      )}
    </>
  );
}
