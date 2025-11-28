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
      'Landing page feita em HTML, CSS e JavaScript para praticar fundamentos de layout, animacoes e responsividade.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://raphabrunetto.github.io/projeto-one-piece',
  },
  
  {
    title: 'Refatoracao de Script CV2',
    description:
      'Refatoracao de script em Python com OpenCV para padronizar analise e automaticamente aplicar edição nas imagens, realizei refatoração do codigo e implementação para Windows por meio do Docker.',
    techs: ['Python', 'Docker', 'BASH'],
    link: 'https://github.com/Raphabrunetto/AutoEditDeImg',
  },

  {
    title: 'Automacao de Rotinas no Monday',
    description:
      'Pipeline que integra formularios de horas trabalhadas na monday a notificacoes em tempo real, reduzindo tarefas manuais e riscos operacionais.',
    techs: ['Monday', 'Automação'],
    link: '#',
  },
  
];
