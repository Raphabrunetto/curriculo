import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface CertificateItemProps {
  title: string;
  issuer: string;
  date: string;
  credentialLink: string;
  logoPath: string;
}

const CertificateItem = ({ title, issuer, date, credentialLink, logoPath }: CertificateItemProps) => (
  <div className="group relative h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#D14949]/50 hover:bg-[#D14949]/10 hover:shadow-[0_20px_45px_rgba(209,73,73,0.45)]">
    <div className="flex items-start gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-[#141414]">
        <Image src={logoPath} alt={`${issuer} logo`} width={34} height={34} className="h-8 w-8 object-contain" />
      </span>
      <div>
        <h3 className="text-lg font-semibold text-[#E6E6E6] group-hover:text-[#FF7A7A] transition-colors">
          {title}
        </h3>
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#D14949]/90">{issuer}</p>
      </div>
    </div>

    <div className="mt-6 space-y-3 text-sm">
      <p className="text-[#E6E6E6]/60">Emitido em: {date}</p>
      <Link
        href={credentialLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#D14949] transition-colors hover:text-[#FF7A7A]"
      >
        Ver credencial
        <FaExternalLinkAlt size={12} />
      </Link>
    </div>
  </div>
);

const Certifications = () => {
  const certificates: CertificateItemProps[] = [
    {
      title: 'Lógica de Programação e Algoritmos com C',
      issuer: 'Udemy',
      date: 'Agosto 2025',
      credentialLink: 'https://www.udemy.com/certificate/UC-b5de53d8-344c-4e29-a476-d1ce3136d175',
      logoPath: '/logos/udemy-logo.png',
    },
    {
      title: 'Endpoint Security',
      issuer: 'Cisco Academy',
      date: 'Outubro 2025',
      credentialLink: 'https://www.credly.com/badges/d1292f47-6509-4d30-b162-e67f0b07da1c/linked_in_profile',
      logoPath: '/logos/endpoint-security.png',
    },
  ];

  return (
    <section className="max-w-5xl mx-auto space-y-10">
      <div className="text-center space-y-3 flex flex-col items-center">
        <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#FF7A7A]">
          certificados
        </span>
        <h2 className="hover-underline text-3xl sm:text-4xl font-semibold text-[#E6E6E6]">
          Aprendizados que atualizam minha caixa de ferramentas
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {certificates.map((certificate) => (
          <CertificateItem key={certificate.title} {...certificate} />
        ))}
      </div>
    </section>
  );
};

export default Certifications;
