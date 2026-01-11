import Certifications from '@/components/Certifications';

export const metadata = {
  title: 'Certificados | Raphael Brunetto',
  description: 'Lista de certificacoes e cursos que reforcam meu compromisso com aprendizado continuo.',
};

export default function CertificadosPage() {
  return (
    <div className="space-y-12 pb-20">
      <header className="space-y-4 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#E6E6E6]">Certificados e cursos</h1>
        <p className="text-[#E6E6E6]/70 text-sm sm:text-base">
          Conheca as formacoes que sustentam minha base tecnica e os temas que venho aprofundando recentemente.
        </p>
      </header>

      <Certifications />
    </div>
  );
}
