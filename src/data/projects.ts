export interface Project {
  title: string;
  description: string;
  techs: string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: 'Projeto One Piece',
    description:
      'Landing page feita em HTML, CSS e JavaScript para praticar fundamentos de layout, animações e responsividade.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://raphabrunetto.github.io/projeto-one-piece',
  },
  {
    title: 'AutoEdição de Imagens com Script CV2',
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
];
