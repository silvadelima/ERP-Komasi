import React from "react";
import Hero from "../components/sections/Hero";
import Testimonials from "../components/sections/Testimonials";
import FinancingSimulator from "../components/sections/FinancingSimulator";
import { useTheme } from "../context/ThemeContext";
import ImageCarousel from "../components/ImageCarousel";
import Card from "../components/ui/Card";

const Landing = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col ${theme}`}>
      {/* Hero Section com Carrossel de Imagens */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <ImageCarousel />
        </div>
        <div className="relative z-10 bg-gray-900/60">
          <Hero />
        </div>
      </div>

      {/* Seção de Destaques */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card title="Localização Privilegiada">
              <p className="text-gray-600 dark:text-gray-300">
                Situado em Brejinho/PE, com fácil acesso e próximo a comércios locais.
              </p>
            </Card>
            <Card title="Infraestrutura Completa">
              <p className="text-gray-600 dark:text-gray-300">
                Energia elétrica, água encanada e ruas bem planejadas para seu conforto.
              </p>
            </Card>
            <Card title="Financiamento Facilitado">
              <p className="text-gray-600 dark:text-gray-300">
                Parcelas que cabem no seu bolso e entrada facilitada.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Seção de Depoimentos */}
      <div className="bg-gray-50 dark:bg-gray-900">
        <Testimonials />
      </div>

      {/* Simulador de Financiamento */}
      <div className="bg-white dark:bg-gray-800">
        <FinancingSimulator />
      </div>
    </div>
  );
};

export default Landing;
