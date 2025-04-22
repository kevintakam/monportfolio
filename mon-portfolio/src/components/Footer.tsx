import Link from 'next/link';
import { FaLinkedinIn, FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-xl font-bold text-white">Mon Portfolio</span>
            <p className="mt-2 max-w-md">
              Créateur d'expériences numériques exceptionnelles avec un accent sur le design intuitif et des performances optimales.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Navigation</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#home" className="hover:text-white transition-colors">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-white transition-colors">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="#skills" className="hover:text-white transition-colors">
                    Compétences
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="hover:text-white transition-colors">
                    Projets
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Ressources</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/tutoriels" className="hover:text-white transition-colors">
                    Tutoriels
                  </Link>
                </li>
                <li>
                  <Link href="/documentation" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Légal</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Confidentialité
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="hover:text-white transition-colors">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {currentYear} Mon Portfolio. Tous droits réservés.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link 
              href="https://linkedin.com/in/franck-kevin-takam-7448411b9/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;