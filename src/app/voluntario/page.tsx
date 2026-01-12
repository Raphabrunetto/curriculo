import Volunteer from '@/components/Volunteer';

export const metadata = {
  title: 'Voluntário | Raphael Brunetto',
  description: 'Trabalhos voluntários e iniciativas sociais das quais participei.',
};

export default function VoluntarioPage() {
  return (
    <div className="space-y-12 pb-20">
      <header className="space-y-4 text-center max-w-3xl mx-auto">
        <h1 className="hover-underline text-3xl sm:text-4xl font-semibold text-[#E6E6E6]">Trabalhos voluntários</h1>
        <p className="text-[#E6E6E6]/70 text-sm sm:text-base">
          Projetos que realizei para contribuir com a comunidade e colocar habilidades em prática por um propósito maior.
        </p>
      </header>

      <Volunteer />
    </div>
  );
}
