"use client";

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

// 🚨 IMPORTANTE: Substitua o número e a mensagem
const WHATSAPP_NUMBER = "5541997532136"; // Seu número completo (55 + DDD + Número)
const PRE_FILLED_MESSAGE = "Olá, Raphael! Vi seu portfólio e gostaria de falar sobre uma oportunidade.";

// Codifica a mensagem para que o link funcione corretamente em URLs
const encodedMessage = encodeURIComponent(PRE_FILLED_MESSAGE);

const WhatsAppButton = () => {
  // A URL do WhatsApp API para abrir a conversa
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

 return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      // 🚨 NOVAS CLASSES: Borda, Fundo semi-transparente e Cor Roxa
      className="inline-flex items-center justify-center space-x-3 
                 py-3 px-10 text-lg font-bold rounded-lg 
                 bg-purple-600/10 text-purple-400 border border-purple-600 
                 transition-all duration-300 hover:bg-purple-600/30 hover:text-white 
                 hover:border-purple-500 shadow-xl shadow-purple-900/50"
    >
      {/* O ÍCONE DO WHATSAPP AINDA SERÁ VERDE, por ser a marca */}
      <FaWhatsapp size={24} className="text-green-500" />
      <span>Falar no WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;