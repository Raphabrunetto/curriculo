"use client";

import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_NUMBER = '5541997532136';
const PRE_FILLED_MESSAGE = 'Ola, Raphael! Vi seu portfolio e gostaria de falar sobre uma oportunidade.';

const encodedMessage = encodeURIComponent(PRE_FILLED_MESSAGE);
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

const WhatsAppButton = () => {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-3 rounded-full border border-[#F3D849]/70 bg-[#F3D849] px-7 py-3 text-sm font-semibold text-[#191718] shadow-[0_18px_40px_rgba(243,216,73,0.45)] transition-transform duration-300 hover:-translate-y-1 hover:bg-[#F3D849]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3D849]"
    >
      <span className="grid h-9 w-9 place-content-center rounded-full bg-[#191718]/10">
        <FaWhatsapp size={20} />
      </span>
      Falar no WhatsApp
    </a>
  );
};

export default WhatsAppButton;
