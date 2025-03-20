import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../layout/Container';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <Container className="pt-16 pb-20 text-center lg:pt-24">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          <span className="block">Seu Lote dos Sonhos</span>
          <span className="block text-blue-600">Está Aqui</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Descubra o melhor lugar para construir seu futuro no Loteamento Zé Chagas.
          Lotes planejados, infraestrutura completa e condições especiais de pagamento.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link to="/lotes">
            <Button size="lg">
              Ver Lotes Disponíveis
            </Button>
          </Link>
          <Link to="/financiamento">
            <Button variant="outline" size="lg">
              Simular Financiamento
            </Button>
          </Link>
        </div>
        
        {/* Estatísticas */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-blue-600">100+</span>
            <span className="mt-2 text-gray-600 dark:text-gray-400">Lotes Disponíveis</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-blue-600">180</span>
            <span className="mt-2 text-gray-600 dark:text-gray-400">Meses para Pagar</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-blue-600">50+</span>
            <span className="mt-2 text-gray-600 dark:text-gray-400">Famílias Realizadas</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
