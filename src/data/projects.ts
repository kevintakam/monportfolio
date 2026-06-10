export type ProjectCategory = 'Front-end' | 'FullStack';

export interface ProjectLink {
  demo?: string;
  github?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  category: ProjectCategory;
  links: ProjectLink;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Plateforme Eval 360',
    description: "Une plateforme permettant aux étudiants de s'évaluer entre eux.",
    tags: ['Angular', 'Node.js', 'MongoDB'],
    image: '/images/eval360-createproject.png',
    category: 'Front-end',
    links: {
      demo: '#',
    },
  },
  {
    id: 2,
    title: 'Neptune',
    description: 'Application web permettant de générer un persona non humain.',
    tags: ['Angular', 'Spring Boot', 'Firebase', 'MongoDB'],
    image: '/images/image-neptune.png',
    category: 'FullStack',
    links: {
      demo: 'https://neptune-personas.org/',
    },
  },
  {
    id: 3,
    title: 'Petites annonces',
    description: 'Site web permettant aux acheteurs de revendre des produits.',
    tags: ['Symfony', 'JavaScript', 'Tailwind', 'Figma'],
    image: '/images/page-accueil.png',
    category: 'FullStack',
    links: {
      demo: 'https://petites-annonces.distrimed.com/',
    },
  },
  {
    id: 4,
    title: 'TechOps Monitor',
    description:
      'Plateforme web de supervision technique permettant de suivre les équipements, incidents et actions de maintenance, avec génération de rapports et déploiement automatisé.',
    tags: [
      'Symfony',
      'API Platform',
      'Angular',
      'PostgreSQL',
      'Redis',
      'Gotenberg',
      'Docker',
      'CI/CD',
      'GitHub Actions',
      'Coolify',
    ],
    image: '/images/techops.png',
    category: 'FullStack',
    links: {
      demo: 'https://app.techops-app.fr/',
    },
  },
];