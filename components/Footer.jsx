import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-neutral-800 font-[Inter]">
      <div className="max-w-6xl mx-auto px-5 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* 1. BRAND & DESCRIPTION */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                SB
              </div>
              <span className="text-xl font-bold tracking-wide">Studio Barber</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Κορυφαίες υπηρεσίες περιποίησης για τον σύγχρονο άνδρα. 
              Στυλ, παράδοση και λεπτομέρεια σε κάθε κούρεμα.
            </p>
            
            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-6">
              <SocialLink href="#" label="Facebook">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </SocialLink>
              <SocialLink href="#" label="Instagram">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </SocialLink>
            </div>
          </div>

          {/* 2. QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Μενού</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><Link href="#services" className="hover:text-white transition">Υπηρεσίες</Link></li>
              <li><Link href="#gallery" className="hover:text-white transition">Gallery</Link></li>
              <li><Link href="#team" className="hover:text-white transition">Η Ομάδα</Link></li>
              <li><Link href="#contact" className="hover:text-white transition">Κράτηση Ραντεβού</Link></li>
            </ul>
          </div>

          {/* 3. CONTACT INFO */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Επικοινωνία</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex gap-2">
                <span>📍</span>
                <span>Λεωφόρος Κηφισίας 123,<br/>Αμπελόκηποι, Αθήνα</span>
              </li>
              <li className="flex gap-2">
                <span>📞</span>
                <a href="tel:2101234567" className="hover:text-white transition">210 123 4567</a>
              </li>
              <li className="flex gap-2">
                <span>✉️</span>
                <a href="mailto:info@studiobarber.gr" className="hover:text-white transition">info@studiobarber.gr</a>
              </li>
            </ul>
          </div>

          {/* 4. HOURS */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Ωράριο</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li className="flex justify-between"><span>Δευτέρα</span> <span>Κλειστά</span></li>
              <li className="flex justify-between"><span>Τρ - Πέμ</span> <span>10:00 - 20:00</span></li>
              <li className="flex justify-between"><span>Παρασκευή</span> <span>10:00 - 21:00</span></li>
              <li className="flex justify-between"><span>Σάββατο</span> <span>09:00 - 17:00</span></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR - LEGAL & COPYRIGHT */}
        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 gap-4">
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <span>© {currentYear} Studio Barber. All rights reserved.</span>
            <span>ΑΡ. ΓΕΜΗ: 123456789</span>
          </div>

          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition">Πολιτική Απορρήτου</Link>
            <Link href="/cookies" className="hover:text-white transition">Cookies</Link>
            <Link href="/terms" className="hover:text-white transition">Όροι Χρήσης</Link>
          </div>

        </div>
      </div>
    </footer>
  );
}

// Βοηθητικό Component για τα Social Icons
function SocialLink({ href, label, children }) {
  return (
    <a 
      href={href} 
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-neutral-800 hover:bg-white hover:text-black p-2 rounded-full transition-all duration-300"
    >
      {children}
    </a>
  );
}