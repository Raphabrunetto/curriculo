import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata = {
  title: 'Contato | Raphael Brunetto',
  description: 'Entre em contato para oportunidades, parcerias ou para conversar sobre tecnologia.',
};

const contactLinks = [
  {
    label: 'E-mail',
    href: 'mailto:raphabrunetto@gmail.com',
    description: 'Mande um e-mail direto com detalhes da oportunidade.',
    icon: FaEnvelope,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/raphael-brunetto-dev',
    description: 'Conecte-se comigo profissionalmente e acompanhe novidades.',
    icon: FaLinkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Raphabrunetto',
    description: 'Confira codigo aberto, experimentos e contribuicoes.',
    icon: FaGithub,
  },
];

export default function ContatoPage() {
  return (
    <div className="space-y-12 pb-20">
      <header className="space-y-4 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#E0E5E9]">Vamos trabalhar juntos?</h1>
        <p className="text-[#E0E5E9]/70 text-sm sm:text-base">
          Estou aberto a conversar sobre vagas, projetos freelas ou qualquer iniciativa em que eu possa ajudar com
          tecnologia e experiencia em produto.
        </p>
      </header>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-[0_20px_45px_rgba(10,98,208,0.35)]">
        <h2 className="text-2xl font-semibold mb-4 text-[#E0E5E9]">Resposta rapida pelo WhatsApp</h2>
        <p className="text-[#E0E5E9]/70 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
          Use o botao abaixo para me chamar no WhatsApp com uma mensagem pre-preenchida. Responderei assim que possivel.
        </p>
        <WhatsAppButton />
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-[#E0E5E9] text-center">Outros canais</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {contactLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-all hover:-translate-y-1 hover:border-[#0A62D0]/60 hover:bg-[#0A62D0]/10 hover:shadow-[0_18px_40px_rgba(10,98,208,0.45)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-[#191718]/20 text-[#0A62D0] mb-3 transition-transform group-hover:scale-110">
                  <Icon size={20} />
                </span>
                <span className="text-[#E0E5E9] font-semibold">{item.label}</span>
                <p className="text-[#E0E5E9]/65 text-xs mt-2 leading-relaxed">{item.description}</p>
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
}
