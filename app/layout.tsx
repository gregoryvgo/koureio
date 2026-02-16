import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Studio Barber | Το Καλύτερο Κουρείο",
  description: "Κλείστε ραντεβού online για κούρεμα, ξύρισμα και περιποίηση. Επαγγελματικές υπηρεσίες barber.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-50`}
      >
        {/* Το Navbar μπαίνει πρώτο */}
        <Navbar />

        {/* Το κυρίως περιεχόμενο (η σελίδα σου) */}
        <main className="min-h-screen pt-20"> 
          {/* Το pt-20 είναι padding-top για να μην κρύβει το Navbar το περιεχόμενο */}
          {children}
        </main>

        {/* Το Footer μπαίνει στο τέλος */}
        <Footer />

        {/* Το Cookie Banner μπαίνει οπουδήποτε, θα εμφανιστεί από πάνω (fixed) */}
        <CookieBanner />
      </body>
    </html>
  );
}