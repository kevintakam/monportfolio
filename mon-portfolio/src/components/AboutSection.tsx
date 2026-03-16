import Image from 'next/image';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-3xl my-8">
      <div className="text-center mb-12 fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">À propos de moi</h2>
        <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
      </div>
      
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3 flex justify-center fade-in delay-1">
          <div className="relative w-64 h-64">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-75"></div>
            <Image 
              src="/images/header-home-isen.jpg" 
              alt="Working" 
              width={500}
              height={500}
              className="relative w-full h-full rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
        
        <div className="md:w-2/3 fade-in delay-2">
         <h3 className="text-2xl font-semibold mb-4">Mon parcours</h3>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Ingénieur diplômé en développement logiciel, j’ai construit mon parcours autour de la conception
          et du développement d’applications web et mobile modernes, performantes et adaptées aux besoins concrets
          des utilisateurs. Après un Bac Scientifique, un DUT Informatique, une Licence technologique en
          informatique, puis mon diplôme d’ingénieur, j’ai développé une base solide en développement
          front-end, back-end, bases de données et conception logicielle.
        </p>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Mes stages, expériences professionnelles et projets personnels m’ont permis de travailler sur
          des problématiques réelles : développement d’applications web, création d’interfaces modernes,
          intégration de bases de données, amélioration de l’expérience utilisateur et réalisation de
          solutions techniques répondant à des besoins précis. J’accorde une grande importance à la qualité
          du code, à la rigueur, à la performance et à la maintenabilité des applications.
        </p>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Aujourd’hui, je me positionne comme développeur logiciel / full stack, avec une appétence
          particulière pour la création de solutions robustes, évolutives et bien structurées. Mon objectif
          est de contribuer à des projets ambitieux, où je peux mettre à profit mes compétences techniques,
          ma capacité d’adaptation et mon sens de l’analyse pour apporter une réelle valeur ajoutée.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center">
            <div className="mr-3 text-blue-600 dark:text-blue-400">
              <i className="fas fa-check-circle text-xl"></i>
            </div>
            <span className="text-gray-700 dark:text-gray-300">Ingénieur diplômé en développement logiciel</span>
          </div>

          <div className="flex items-center">
            <div className="mr-3 text-blue-600 dark:text-blue-400">
              <i className="fas fa-check-circle text-xl"></i>
            </div>
            <span className="text-gray-700 dark:text-gray-300">Expériences en stages et en entreprise</span>
          </div>

          <div className="flex items-center">
            <div className="mr-3 text-blue-600 dark:text-blue-400">
              <i className="fas fa-check-circle text-xl"></i>
            </div>
            <span className="text-gray-700 dark:text-gray-300">Développement Full Stack</span>
          </div>

          <div className="flex items-center">
            <div className="mr-3 text-blue-600 dark:text-blue-400">
              <i className="fas fa-check-circle text-xl"></i>
            </div>
            <span className="text-gray-700 dark:text-gray-300">Rigueur, autonomie et adaptation</span>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutSection;