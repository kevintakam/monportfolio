'use client';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import { toast } from 'react-toastify';
import Link from 'next/link';

const ContactSection = () => {

  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);


    const formData = new FormData(form.current);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;


    const templateParams = {
      from_email: email,
      to_email: 'kevintakam128@gmail.com', 
      subject: subject,
      message: `Nom: ${name}\n\nMessage:\n${message}`, 
    };
    emailjs
      .send('service_ej59dyc', 'template_j6vn58q', templateParams, 'aBn8b0mMlpGPJNAYB')
      .then(() => {
        toast.success('✅ Message envoyé avec succès ! 🎉', {
          position: 'top-right',
          autoClose: 3000,
        });
        form.current?.reset();
      })
      .catch((err) => {
        toast.error('❌ Une erreur est survenue lors de l’envoi du message.', {
          position: 'top-right',
          autoClose: 4000,
        });
        console.error('Erreur EmailJS :', err);
      })    
      .finally(() => setLoading(false)); 
  };

  return (
    
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Contactez-moi</h2>
        <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Vous avez un projet en tête ou souhaitez discuter d'une opportunité ? Envoyez-moi un message et je vous répondrai dès que possible.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nom</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition" 
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" // Idem pour l'email
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition" 
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Sujet</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" // Idem pour le sujet
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition" 
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea 
                id="message" 
                name="message" // Idem pour le message
                rows={5} 
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition"
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300 transform hover:scale-105"
              disabled={loading} // Désactiver le bouton si en cours d'envoi
            >
              {loading ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>
          </form>
        </div>
        
        <div className="md:w-1/2 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg h-full">
            <h3 className="text-xl font-semibold mb-6">Coordonnées</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Adresse</h4>
                  <p className="text-gray-600 dark:text-gray-300">114 avenue philippe lebon, Toulon, France</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">kevintakam128@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Téléphone</h4>
                  <p className="text-gray-600 dark:text-gray-300">+33 6 63 91 11 40</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Disponibilité</h4>
                  <p className="text-gray-600 dark:text-gray-300">Lundi - Vendredi: 9h - 18h</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-medium mb-4">Réseaux sociaux</h4>
              <div className="flex space-x-4">
                <Link href="#" className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link href="#" className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-400 hover:text-white transition">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link href="#" className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-800 hover:text-white transition">
                  <i className="fab fa-github"></i>
                </Link>
                <Link href="#" className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-pink-600 hover:text-white transition">
                  <i className="fab fa-dribbble"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
