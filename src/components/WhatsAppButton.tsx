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
      className="group inline-flex items-center gap-3 rounded-full border border-[#FF7A7A]/70 bg-[#FF7A7A] px-7 py-3 text-sm font-semibold text-[#141414] shadow-[0_18px_40px_rgba(255,122,122,0.45)] transition-transform duration-300 hover:-translate-y-1 hover:bg-[#FF7A7A]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A7A]"
    >
      <span className="grid h-9 w-9 place-content-center rounded-full bg-[#141414]/10">
        <FaWhatsapp size={20} />
      </span>
      Falar no WhatsApp
    </a>
  );
};

export default WhatsAppButton;
