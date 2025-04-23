'use client';

import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AppEffects() {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => {
        const el = element as HTMLElement;
        const elementPosition = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (elementPosition < screenPosition) {
          el.classList.add('opacity-100', 'translate-y-0');
        }
      });
    };

    const handleSmoothScroll = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest('a[href^="#"]');
      if (link) {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const target = document.querySelector(targetId!) as HTMLElement;
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth',
          });
        }
      }
    };

    const handleScrollHighlight = () => {
      const scrollPosition = window.scrollY;
      document.querySelectorAll('section').forEach(section => {
        const sec = section as HTMLElement;
        const top = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if (scrollPosition >= top && scrollPosition < top + height) {
          document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active-nav');
            if (link.getAttribute('href') === `#${id}`) {
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

  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      closeOnClick
      pauseOnHover
      draggable
      pauseOnFocusLoss
      theme="light"
    />
  );
}
