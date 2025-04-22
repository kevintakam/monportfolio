import '@/styles/globals.css';
import '@/styles/animations.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    };
    
    const handleSmoothScroll = (e) => {
      if (e.target.closest('a[href^="#"]')) {
        e.preventDefault();
        
        const targetId = e.target.closest('a').getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    };
    
    const handleScrollHighlight = () => {
      const scrollPosition = window.scrollY;
      
      document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active-nav');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active-nav');
            }
          });
        }
      });
    };
    
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('scroll', handleScrollHighlight);
    document.addEventListener('click', handleSmoothScroll);
    
    return () => {
      window.removeEventListener('load', animateOnScroll);
      window.removeEventListener('scroll', animateOnScroll);
      window.removeEventListener('scroll', handleScrollHighlight);
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);
  
  return <Component {...pageProps} />;
}

export default MyApp;