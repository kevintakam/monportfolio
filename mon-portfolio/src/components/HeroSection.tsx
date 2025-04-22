import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Bonjour, je suis <span className="text-blue-600 dark:text-blue-400">Franck kevin</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
            Développeur Full Stack & Designer UI/UX
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
            Je crée des expériences numériques exceptionnelles avec un accent sur le design intuitif et des performances optimales.
          </p>
          <div className="flex space-x-4">
            <Link 
              href="#contact" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300 transform hover:scale-105"
            >
              Me contacter
            </Link>
            <Link 
              href="#projects" 
              className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-medium rounded-lg transition duration-300 transform hover:scale-105"
            >
              Voir mes projets
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center fade-in delay-1">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
            <div className="absolute inset-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-2xl flex items-center justify-center">
              <Image 
                src="/images/mon-image.jpg" 
                alt="Profile" 
                width={400}
                height={400}
                className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;