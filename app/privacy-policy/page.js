'use client';

import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="bg-neutral-900 min-h-screen text-neutral-200 py-24 font-[Inter]">
      <div className="max-w-4xl mx-auto px-5">
        
        {/* Header */}
        <div className="mb-10 border-b border-neutral-800 pb-8">
          <Link href="/" className="text-sm text-neutral-500 hover:text-white mb-4 inline-block transition">
            ← Επιστροφή στην Αρχική
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">Πολιτική Απορρήτου</h1>
          <p className="text-neutral-500">Τελευταία ενημέρωση: {new Date().toLocaleDateString('el-GR')}</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-lg leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">1. Εισαγωγή</h2>
            <p>
              Η παρούσα Πολιτική Απορρήτου περιγράφει τον τρόπο με τον οποίο το <strong>Studio Barber</strong> ("εμείς", "εμάς") συλλέγει, χρησιμοποιεί και προστατεύει τα προσωπικά σας δεδομένα κατά την επίσκεψή σας στην ιστοσελίδα μας. Σεβόμαστε την ιδιωτικότητά σας και δεσμευόμαστε να προστατεύουμε τα προσωπικά σας στοιχεία σύμφωνα με τον Γενικό Κανονισμό Προστασίας Δεδομένων (GDPR).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">2. Ποια δεδομένα συλλέγουμε</h2>
            <ul className="list-disc pl-5 space-y-2 text-neutral-300">
              <li>
                <strong>Δεδομένα που μας δίνετε εσείς:</strong> Όνομα, Email, Τηλέφωνο και τυχόν μηνύματα όταν συμπληρώνετε τη φόρμα επικοινωνίας ή κλείνετε ραντεβού.
              </li>
              <li>
                <strong>Τεχνικά Δεδομένα:</strong> Διεύθυνση IP, τύπος προγράμματος περιήγησης (browser), λειτουργικό σύστημα και σελίδες που επισκεφθήκατε (μέσω Cookies ή logs του server).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">3. Σκοπός της επεξεργασίας</h2>
            <p>Χρησιμοποιούμε τα δεδομένα σας αποκλειστικά για:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2 text-neutral-300">
              <li>Να επικοινωνήσουμε μαζί σας για επιβεβαίωση ραντεβού.</li>
              <li>Να απαντήσουμε σε ερωτήματά σας.</li>
              <li>Να βελτιώσουμε τη λειτουργία της ιστοσελίδας μας.</li>
              <li>Να διασφαλίσουμε την ασφάλεια της ιστοσελίδας.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">4. Cookies & Analytics</h2>
            <p>
              Η ιστοσελίδα μας χρησιμοποιεί Cookies για να βελτιώσει την εμπειρία περιήγησης. 
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2 text-neutral-300">
              <li>
                <strong>Αναγκαία Cookies:</strong> Απαραίτητα για τη λειτουργία του site (δεν απαιτούν συγκατάθεση).
              </li>
              <li>
                <strong>Cookies Ανάλυσης (Google Analytics):</strong> Μας βοηθούν να καταλάβουμε πόσοι επισκέπτες βλέπουν τη σελίδα μας. Αυτά ενεργοποιούνται <strong>μόνο</strong> αν δώσετε τη συγκατάθεσή σας στο Cookie Banner.
              </li>
            </ul>
            <p className="mt-2">
              Μπορείτε να αλλάξετε τις προτιμήσεις σας ή να διαγράψετε τα cookies μέσω των ρυθμίσεων του browser σας.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">5. Κοινοποίηση σε Τρίτους</h2>
            <p>Δεν πουλάμε τα δεδομένα σας. Ενδέχεται να μοιραστούμε δεδομένα μόνο με παρόχους υπηρεσιών που είναι απαραίτητοι για τη λειτουργία μας:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2 text-neutral-300">
              <li><strong>Vercel Inc.:</strong> Πάροχος φιλοξενίας ιστοσελίδας (Hosting).</li>
              <li><strong>Google Analytics:</strong> Υπηρεσία στατιστικών (αν έχετε δώσει συγκατάθεση).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">6. Τα Δικαιώματά σας</h2>
            <p>Σύμφωνα με τον GDPR, έχετε το δικαίωμα:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2 text-neutral-300">
              <li>Να ζητήσετε αντίγραφο των δεδομένων που έχουμε για εσάς.</li>
              <li>Να ζητήσετε διόρθωση λανθασμένων στοιχείων.</li>
              <li>Να ζητήσετε τη διαγραφή των δεδομένων σας ("Δικαίωμα στη λήθη").</li>
              <li>Να ανακαλέσετε τη συγκατάθεσή σας για τα cookies ανά πάσα στιγμή.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">7. Επικοινωνία</h2>
            <p>
              Για οποιαδήποτε απορία σχετικά με την προστασία των δεδομένων σας ή για να ασκήσετε τα δικαιώματά σας, μπορείτε να επικοινωνήσετε μαζί μας:
            </p>
            <div className="mt-4 p-4 bg-neutral-800 rounded-lg border border-neutral-700">
              <p><strong>Studio Barber</strong></p>
              <p>Λεωφόρος Κηφισίας 123, Αθήνα</p>
              <p>Email: <a href="mailto:info@studiobarber.gr" className="text-white hover:underline">info@studiobarber.gr</a></p>
              <p>Τηλ: 210 123 4567</p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}