import Image from 'next/image';
import Link from 'next/link';

import { projects } from '@/data/projects';

const ProjectsSection = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-3xl my-8"
    >
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Mes projets
        </h2>

        <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto" />

        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Voici une sélection de mes projets récents. Chacun présente des défis
          uniques et des solutions créatives.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <article
            key={project.id}
            className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={350}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                {project.category}
              </span>

              <h3 className="text-xl font-bold mt-2">
                {project.title}
              </h3>

              <p className="mt-3 text-gray-600 dark:text-gray-300">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  Voir le projet →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Link
          href="/projects"
          className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Voir tous les projets
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;