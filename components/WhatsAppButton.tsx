'use client';

import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const phone = '5521996703834';
  const message = 'Olá, vim do site e gostaria de ajuda sobre seguro de saúde!';
  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <div className="relative">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></span>
        {/* Button */}
        <div className="relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110">
          <FaWhatsapp className="text-white" size={32} />
        </div>
        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-brand-blue px-3 py-1.5 rounded-lg shadow-md text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Precisa de Ajuda?
        </span>
      </div>
    </a>
  );
}
