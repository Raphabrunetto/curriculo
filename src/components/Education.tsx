interface EducationItemProps {
  degree: string;
  institution: string;
  year: string;
}

const EducationItem: React.FC<EducationItemProps> = ({ degree, institution, year }) => (
  <div className="mb-4">
    <h3 className="text-xl font-bold">{degree}</h3>
    <p className="text-gray-400 italic">{institution}</p>
    <p className="text-gray-500 text-sm">{year}</p>
  </div>
);

const Education = () => {
  const education = [
    {
      degree: "Bacharelado em Engenharia de Software",
      institution: "Universidade Positivo - UP",
      year: "2021 - 2025"
    },
    {
      degree: "Curso de Lógica de Programação e Algoritmos com C",
      institution: "Udemy",
      year: "2025"
    }
  ];

  return (
    <section id="educacao" className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8">Formação Acadêmica</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {education.map((edu, index) => (
          <EducationItem key={index} {...edu} />
        ))}
      </div>
    </section>
  );
};

export default Education;