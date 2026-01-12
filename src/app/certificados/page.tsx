import Certifications from '@/components/Certifications';

export const metadata = {
  title: 'Certificados | Raphael Brunetto',
  description: 'Lista de certificações e cursos que reforçam meu compromisso com aprendizado contínuo.',
};

export default function CertificadosPage() {
  return (
    <div className="space-y-12 pb-20">
      <header className="space-y-4 text-center max-w-3xl mx-auto">
        <h1 className="hover-underline text-3xl sm:text-4xl font-semibold text-[#E6E6E6]">Certificados e cursos</h1>
        <p className="text-[#E6E6E6]/70 text-sm sm:text-base">
          Conheça as formações que sustentam minha base técnica e os temas que venho aprofundando recentemente.
        </p>
      </header>

      <Certifications />
    </div>
  );
}
