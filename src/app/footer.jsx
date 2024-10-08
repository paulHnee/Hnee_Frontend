'use client';

export default function Footer() {
  const handleContactClick = () => {
    window.location.href = 'mailto:it-support@hnee.de';
  };

  return (
    <footer className="w-full text-center py-16 bg-gray-800 text-white">
      <h2 className="text-2xl font-semibold">Kontaktieren Sie uns</h2>
      <p className="mt-4">Support: <a href="mailto:it-support@hnee.de" className="no-underline text-green-600">it-support@hnee.de</a></p>
      <p className="mt-1">IT-Beschaffung: <a href="mailto:it-einkauf@hnee.de" className="no-underline text-green-600">it-einkauf@hnee.de</a></p>
      <p className="mt-3">Telefon ☎️: +49 (3334) 657-272</p>
      <button 
        onClick={handleContactClick} 
        className="mt-8 px-6 py-3 bg-green-500 text-white rounded-full"
      >
        Kontakt aufnehmen
      </button>
    </footer>
  );
}