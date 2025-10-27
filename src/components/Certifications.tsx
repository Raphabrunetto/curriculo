import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa'; // Ícone de link externo

// 1. Interface para tipar os dados dos certificados
interface CertificateItemProps {
  title: string;
  issuer: string; // Ex: Alura, Coursera, freeCodeCamp
  date: string; // Data de emissão
  credentialLink: string; // Link de verificação do certificado
  logoPath: string; // Caminho para o logo do emissor (ex: /images/alura-logo.png)
}

const CertificateItem: React.FC<CertificateItemProps> = ({ 
  title, 
  issuer, 
  date, 
  credentialLink, 
  logoPath 
}) => (
  // 2. Card com animação de hover
  <div className="block group h-full">
    <div className="p-6 rounded-lg bg-gray-800 border border-gray-700 h-full flex flex-col justify-between
                    transition-transform duration-300 transform group-hover:scale-[1.02] 
                    group-hover:shadow-xl group-hover:shadow-purple-500/20">
      
      <div className="flex items-start mb-4">
        {/* Símbolo do Emissor */}
        <div className="mr-4 flex-shrink-0">
            {/* O logo será pequeno e centralizado */}
            <Image
                src={logoPath}
                alt={`${issuer} Logo`}
                width={48}
                height={48}
                className="rounded-lg object-contain"
            />
        </div>
        
        {/* Título e Emissor */}
        <div>
            <h3 className="text-xl font-bold text-gray-100 mb-1">
              {title}
            </h3>
            <p className="text-purple-400 italic text-sm">{issuer}</p>
        </div>
      </div>
      
      <div className="mt-auto"> {/* Garante que este bloco fique sempre na parte de baixo */}
        {/* Data de Emissão */}
        <p className="text-gray-500 text-sm mb-3">
          Emitido em: {date}
        </p>
        
        {/* Link para Credencial */}
        <Link 
            href={credentialLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
        >
            Ver Credencial <FaExternalLinkAlt size={12} className="ml-2" />
        </Link>
      </div>
    </div>
  </div>
);

const Certifications = () => {
  // 3. Array com os dados dos seus certificados
  const certificates = [
    {
      title: "Lógica de Programação e Algoritmos com C",
      issuer: "Udemy",
      // A data é "agosto de 2025" (como aparece na imagem)
      date: "Agosto/2025", 
      // 🚨 Mantenha este valor como "#" e troque pelo link da credencial real:
      credentialLink: "https://www.udemy.com/certificate/UC-b5de53d8-344c-4e29-a476-d1ce3136d175", 
      // Logo (assumindo que você colocou a imagem na pasta correta)
      logoPath: "/logos/udemy-logo.png" 
    },
    {
      title: "Endpoint Security by Cisco",
      issuer: "Cisco Academy",
      date: "Outubro/2025",
      credentialLink: "https://www.credly.com/badges/d1292f47-6509-4d30-b162-e67f0b07da1c/linked_in_profile",
      logoPath: "/logos/endpoint-security.png"
    },
    // Adicione mais certificados aqui!
  ];

  return (
    <div id="certificados" className="max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12">Certificados e Cursos</h2>
      
      {/* Grade de 2 ou 3 colunas para certificados */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificates.map((item, index) => (
          <CertificateItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Certifications;