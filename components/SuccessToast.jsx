'use client';

export default function SuccessToast({ message }) {
  return (
    <div className="fixed right-6 bottom-6 bg-emerald-500 text-white px-4 py-3 rounded-xl shadow-lg z-50">
      {message || "Η ενέργεια ολοκληρώθηκε!"}
    </div>
  );
}
