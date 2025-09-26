// Função para mapear o nome da tecnologia para classes de cor
const getTechColors = (tech: string) => {
  switch (tech.toLowerCase()) {
    case 'html':
      return 'bg-orange-500/20 text-orange-400 border border-orange-400';
    case 'css':
      return 'bg-blue-500/20 text-blue-400 border border-blue-400';
    case 'javascript':
    case 'js':
      return 'bg-yellow-500/20 text-yellow-400 border border-yellow-400';
    // Você pode adicionar mais tecnologias aqui no futuro (ex: React, Next.js)
    default:
      return 'bg-gray-700 text-gray-300 border border-gray-700';
  }
};

interface CardProps {
  title: string;
  description: string;
  techs: string[];
  link: string;
}

const Card: React.FC<CardProps> = ({ title, description, techs, link }) => {
  return (
    // Transformamos o Card em um link clicável (a tag)
    <a href={link} target="_blank" rel="noopener noreferrer" className="block group h-full">
      <div className="p-6 rounded-lg bg-gray-800 border border-gray-700 h-full flex flex-col justify-between
                      transition-transform duration-300 transform group-hover:scale-[1.03] group-hover:shadow-xl group-hover:shadow-purple-500/20">
        <div>
          <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">{title}</h3>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">{description}</p>
        </div>
        
        {/* Badges de Tecnologia */}
        <div>
          <h4 className="text-sm font-semibold mb-2 text-gray-300">Tecnologias:</h4>
          <div className="flex flex-wrap gap-2 text-xs">
            {techs.map((tech, index) => (
              <span 
                key={index} 
                className={`rounded-full px-3 py-1 font-mono uppercase tracking-wider ${getTechColors(tech)}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;