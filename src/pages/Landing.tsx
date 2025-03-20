import React, { useState } from "react";
import ImageCarousel from "../components/ImageCarousel";
import { useAuth } from "../context/AuthContext";

const Landing = () => {
  const { user } = useAuth();
  const [simulationData, setSimulationData] = useState({
    entrada: "",
    parcelas: "",
    valorLote: "",
  });

  const calcularFinanciamento = (e: React.FormEvent) => {
    e.preventDefault();
    const entrada = parseFloat(simulationData.entrada);
    const parcelas = parseInt(simulationData.parcelas);
    const valorLote = parseFloat(simulationData.valorLote);
    
    if (entrada && parcelas && valorLote) {
      const valorFinanciado = valorLote - entrada;
      const juros = 0.0099; // 0.99% ao mês
      const valorParcela = (valorFinanciado * (juros * Math.pow(1 + juros, parcelas))) / (Math.pow(1 + juros, parcelas) - 1);
      alert(`Valor da parcela: R$ ${valorParcela.toFixed(2)}`);
    }
  };

  const testimonials = [
    {
      name: "João Silva",
      role: "Proprietário",
      image: "https://via.placeholder.com/100",
      text: "Excelente investimento! A infraestrutura e localização são perfeitas.",
      rating: 5,
    },
    {
      name: "Maria Santos",
      role: "Cliente",
      image: "https://via.placeholder.com/100",
      text: "O processo de compra foi muito tranquilo e transparente.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "Como funciona o processo de compra?",
      answer: "O processo é simples: escolha seu lote, faça uma simulação, entre em contato com nossa equipe e finalize a negociação com segurança.",
    },
    {
      question: "Quais são as condições de pagamento?",
      answer: "Oferecemos entrada facilitada e parcelamento em até 180 vezes, com as melhores taxas do mercado.",
    },
    {
      question: "O loteamento possui infraestrutura?",
      answer: "Sim! Contamos com rede elétrica, água encanada e ruas bem planejadas.",
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative z-20 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bem-vindo ao Loteamento Zé Chagas
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Realize o sonho da sua chácara em Brejinho/PE com condições especiais
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-medium text-white">
              Reserve sua Chácara
            </button>
            <button className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-lg font-medium text-white border border-white/30">
              Saiba Mais
            </button>
          </div>
        </div>
      </header>

      {/* Carrossel de Imagens */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Conheça Nossos Lotes</h2>
          <ImageCarousel />
        </div>
      </section>

      {/* Simulação de Financiamento */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Simule seu Financiamento</h2>
          <form onSubmit={calcularFinanciamento} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Valor do Lote</label>
                <input
                  type="number"
                  className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
                  placeholder="R$ 0,00"
                  value={simulationData.valorLote}
                  onChange={(e) => setSimulationData(prev => ({ ...prev, valorLote: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Entrada</label>
                <input
                  type="number"
                  className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
                  placeholder="R$ 0,00"
                  value={simulationData.entrada}
                  onChange={(e) => setSimulationData(prev => ({ ...prev, entrada: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Número de Parcelas</label>
                <input
                  type="number"
                  className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
                  placeholder="até 180x"
                  value={simulationData.parcelas}
                  onChange={(e) => setSimulationData(prev => ({ ...prev, parcelas: e.target.value }))}
                />
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-medium text-white"
              >
                Calcular
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">O que dizem nossos clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-medium">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{testimonial.text}</p>
                <div className="mt-4 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Pronto para realizar seu sonho?</h2>
          <p className="text-xl mb-8">
            Entre em contato conosco e garanta já seu lote no melhor loteamento da região!
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-lg text-lg font-medium">
            Falar com um Consultor
          </button>
        </div>
      </section>
    </div>
  );
};

export default Landing;
