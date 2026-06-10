import Image from 'next/image';

import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-gray-950 dark:text-white transition-colors duration-300">
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Tous mes projets
          </h1>

          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Voici l’ensemble des projets que j’ai réalisés, avec différentes
            stacks frontend, backend, fullstack, cloud et DevOps.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
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

                <h2 className="text-xl font-bold mt-2">
                  {project.title}
                </h2>

                <p className="mt-3 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-white dark:bg-gray-700"
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
      </section>
    </main>
  );
}