'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }) {
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    // Διαβάζουμε την επιλογή του χρήστη
    const stored = localStorage.getItem("cookieConsent");
    setConsent(stored);
  }, []);

  // Αν δεν έχει πατήσει Αποδοχή ("granted"), δεν φορτώνουμε τίποτα
  if (consent !== 'granted') {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}