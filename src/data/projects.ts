export interface Project {
  title: string;
  description: string;
  techs: string[];
  link: string;
}

export type Locale = 'pt-BR' | 'en';

export const projectsByLocale: Record<Locale, Project[]> = {
  'pt-BR': [
    {
      title: 'Autoedição de Imagens com Script CV2',
      description:
        'Script em Python com OpenCV para padronizar a análise e aplicar edição automática nas imagens. Apresentou cerca de 20% de melhora no reconhecimento da IA da empresa. Também refatorei o código e implementei a execução no Windows por meio do Docker.',
      techs: ['Python', 'Docker', 'BASH'],
      link: 'https://github.com/Raphabrunetto/AutoEditDeImg',
    },
    {
      title: 'Automação de Rotinas no Monday',
      description:
        'Pipeline que integra formulários de horas trabalhadas no Monday a notificações em tempo real, reduzindo tarefas manuais e riscos operacionais.',
      techs: ['Monday', 'Automação'],
      link: '#',
    },
    {
      title: 'Projeto One Piece',
      description:
        'Landing page feita em HTML, CSS e JavaScript para praticar fundamentos de layout, animações e responsividade.',
      techs: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://raphabrunetto.github.io/projeto-one-piece',
    },
  ],
  en: [
    {
      title: 'Image Auto-Editing with CV2 Script',
      description:
        "Python script with OpenCV to standardize analysis and apply automatic edits to images. It delivered about a 20% improvement in the company's AI recognition results. I also refactored the code and enabled Windows execution via Docker.",
      techs: ['Python', 'Docker', 'BASH'],
      link: 'https://github.com/Raphabrunetto/AutoEditDeImg',
    },
    {
      title: 'Monday Routine Automation',
      description:
        'Pipeline that integrates worked-hours forms in Monday with real-time notifications, reducing manual tasks and operational risk.',
      techs: ['Monday', 'Automation'],
      link: '#',
    },
    {
      title: 'One Piece Project',
      description:
        'Landing page built with HTML, CSS, and JavaScript to practice layout fundamentals, animations, and responsiveness.',
      techs: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://raphabrunetto.github.io/projeto-one-piece',
    },
  ],
};
