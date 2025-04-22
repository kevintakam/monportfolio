import Image from 'next/image';

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
            Passionné par la technologie depuis mon plus jeune âge, j'ai commencé à coder à 18 ans et n'ai jamais arrêté depuis. Après un diplôme en informatique, j'ai travaillé avec plusieurs startups et entreprises pour créer des solutions web innovantes.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Je me spécialise dans la création d'interfaces utilisateur élégantes et d'expériences fluides, tout en m'assurant que le backend est robuste et évolutif. Je crois en l'approche "mobile-first" et en l'importance des performances.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <div className="mr-3 text-blue-600 dark:text-blue-400">
                <i className="fas fa-check-circle text-xl"></i>
              </div>
              <span className="text-gray-700 dark:text-gray-300">Futur ingénieur(dev Logiciel)</span>
            </div>
            <div className="flex items-center">
              <div className="mr-3 text-blue-600 dark:text-blue-400">
                <i className="fas fa-check-circle text-xl"></i>
              </div>
              <span className="text-gray-700 dark:text-gray-300">5 projets réalisés</span>
            </div>
            <div className="flex items-center">
              <div className="mr-3 text-blue-600 dark:text-blue-400">
                <i className="fas fa-check-circle text-xl"></i>
              </div>
              <span className="text-gray-700 dark:text-gray-300">Full Stack Developer</span>
            </div>
            <div className="flex items-center">
              <div className="mr-3 text-blue-600 dark:text-blue-400">
                <i className="fas fa-check-circle text-xl"></i>
              </div>
              <span className="text-gray-700 dark:text-gray-300">UI/UX Designer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;