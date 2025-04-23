import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";

import AppEffects from "@/components/AppEffects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/animations.css";
import '@/styles/globals.css';


export const metadata: Metadata = {
  title: "Mon Portfolio Créatif",
  description: "Portfolio de développeur Full Stack & Designer UI/UX",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300`}>
      <AppEffects />
        <Navbar />
        <main className="overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}