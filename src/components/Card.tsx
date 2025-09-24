interface CardProps {
  title: string;
  description: string;
  techs: string[];
  link: string;
}

const Card: React.FC<CardProps> = ({ title, description, techs, link }) => {
  return (
    <a href={link} className="block group">
      <div className="p-6 rounded-lg bg-gray-800 border border-gray-700 h-full flex flex-col justify-between
                      transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-lg">
        <div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{title}</h3>
          <p className="text-gray-400 text-sm mb-4">{description}</p>
        </div>
        <div>
          <div className="flex flex-wrap gap-2 text-xs">
            {techs.map((tech, index) => (
              <span key={index} className="bg-gray-700 text-gray-300 rounded-full px-3 py-1 font-mono">
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