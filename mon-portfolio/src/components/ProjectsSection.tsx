import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: "Plateforme Eval 360",
    description: "Une platerforme permettant aux étudiants de s'évaluer entre-eux",
    tags: ["Angular", "Node.js", "MongoDB"],
    image: "/images/eval360-createproject.png",
    category: "Front-end",
    links: {
      demo: "#"
    }
  },
  {
    id: 2,
    title: "Neptune",
    description: "Application Web permettant de générer un persona non humain",
    tags: ["Angular","spring boot", "Firebase", "Mongo Db"],
    image: "/images/image-neptune.png",
    category: "FullStack",
    links: {
      demo: "https://neptune-personas.org/"
    }
  },
  {
    id: 3,
    title: "Petites annonces",
    description: "Site web permettant aux acheteurs de revendre les produits",
    tags: ["Symfony", "javascript", "Tailwind", "Figma"],
    image: "/images/page-accueil.png",
    category: "FullStack",
    links: {
      demo: "https://petites-annonces.distrimed.com/"
    }
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-3xl my-8">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes projets</h2>
        <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Voici une sélection de mes projets récents. Chacun présente des défis uniques et des solutions créatives.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg card-hover animate-fade-in"
            style={{ animationDelay: `${0.2 * (index + 1)}s` }}
          >
            <div className="relative h-48 overflow-hidden">
              <Image 
                src={project.image} 
                alt={project.title} 
                width={500}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  project.category === "Full Stack" ? "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" :
                  project.category === "Mobile" ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200" :
                  "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200"
                }`}>
                  {project.category}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-3">
                <Link 
                  href={project.links.demo} 
                  className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                >
                  <i className="fas fa-external-link-alt mr-1"></i> Live Demo
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.8s" }}>
        <Link 
          href="/projects" 
          className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-medium rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition duration-300"
        >
          Voir plus de projets
          <i className="fas fa-arrow-right ml-2"></i>
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
