import Volunteer from '@/components/Volunteer';

export const metadata = {
  title: 'Voluntario | Raphael Brunetto',
  description: 'Trabalhos voluntarios e iniciativas sociais das quais participei.',
};

export default function VoluntarioPage() {
  return (
    <div className="space-y-12 pb-20">
      <header className="space-y-4 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#E0E5E9]">Trabalhos voluntarios</h1>
        <p className="text-[#E0E5E9]/70 text-sm sm:text-base">
          Projetos que realizei para contribuir com a comunidade e colocar habilidades em pratica por um proposito maior.
        </p>
      </header>

      <Volunteer />
    </div>
  );
}
