'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Ελέγχουμε αν υπάρχει ήδη αποθηκευμένη επιλογή στο localStorage
    const storedConsent = localStorage.getItem("cookieConsent");
    
    // Αν ΔΕΝ υπάρχει (null), τότε εμφανίζουμε το banner μετά από λίγο
    if (storedConsent === null) {
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000); // Καθυστέρηση 1 δευτερόλεπτο για ομαλότητα
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "granted");
    setShowBanner(false);
    // Εδώ θα ενεργοποιούσες τα Google Analytics
    window.location.reload(); // Ένα reload για να πάρουν μπρος τα scripts (προαιρετικό)
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "denied");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-neutral-900/95 backdrop-blur-md border border-neutral-700 rounded-2xl shadow-2xl p-6 flex flex-col md:flex-row items-center gap-6 animate-slide-up">
        
        {/* TEXT */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-white font-bold text-lg mb-2">🍪 Χρησιμοποιούμε Cookies</h3>
          <p className="text-neutral-300 text-sm leading-relaxed">
            Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σας και να αναλύσουμε την επισκεψιμότητα. 
            Μπορείτε να επιλέξετε ποια cookies θα αποδεχτείτε. 
            Δείτε την <Link href="/privacy-policy" className="text-white underline hover:text-neutral-200">Πολιτική Απορρήτου</Link>.
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <button
            onClick={handleDecline}
            className="px-6 py-2.5 rounded-full border border-neutral-600 text-neutral-300 hover:bg-neutral-800 transition text-sm font-medium"
          >
            Απόρριψη
          </button>
          
          <button
            onClick={handleAccept}
            className="px-6 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 transition text-sm font-bold shadow-lg"
          >
            Αποδοχή Όλων
          </button>
        </div>

      </div>
    </div>
  );
}